(() => {
  "use strict";

  const originalFetch = window.fetch.bind(window);
  const assetDataUrlCache = new Map();

  const loadAssetAsDataUrl = async (source) => {
    const value = String(source || "");
    if (!value.startsWith("./assets/")) return value;
    if (assetDataUrlCache.has(value)) return assetDataUrlCache.get(value);
    const request = originalFetch(new URL(value, window.location.href).href, { cache: "force-cache" })
      .then((response) => {
        if (!response.ok) throw new Error(`Asset request failed: ${response.status}`);
        return response.blob();
      })
      .then((blob) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || value));
        reader.onerror = () => reject(reader.error || new Error("Asset conversion failed"));
        reader.readAsDataURL(blob);
      }))
      .catch(() => value);
    assetDataUrlCache.set(value, request);
    return request;
  };

  const hydrateRecordImages = async (record) => {
    if (!record?.images || typeof record.images !== "object") return record;
    const input = Array.isArray(record.images.input)
      ? await Promise.all(record.images.input.map(async (image) => ({ ...image, src: await loadAssetAsDataUrl(image?.src) })))
      : [];
    const panels = {};
    for (const [scope, images] of Object.entries(record.images.panels || {})) {
      panels[scope] = Array.isArray(images)
        ? await Promise.all(images.map(async (image) => ({ ...image, src: await loadAssetAsDataUrl(image?.src) })))
        : [];
    }
    record.images = { ...record.images, input, panels };
    return record;
  };

  const snapshotPromise = originalFetch("./data/analysis-snapshot.json?v=f44fbe31f0ef", { cache: "no-store" }).then(async (response) => {
    if (!response.ok) throw new Error("静态分析快照加载失败");
    const payload = await response.json();
    if (!Array.isArray(payload.records) || !payload.records.length) throw new Error("静态分析快照为空");
    await Promise.all(payload.records.map((record) => hydrateRecordImages(record)));
    return payload;
  });

  const jsonResponse = (payload, status = 200) => new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });

  const getRequestUrl = (input) => {
    const raw = typeof input === "string" ? input : input?.url || "";
    return new URL(raw, window.location.href);
  };

  const parseBody = (init) => {
    try {
      return init?.body ? JSON.parse(init.body) : {};
    } catch {
      return {};
    }
  };

  const findRecord = (records, value) => {
    const target = decodeURIComponent(String(value || ""));
    return records.find((record) => [record.key, record.title, record.projectPath, record.showcase?.id].some((candidate) => String(candidate || "") === target)) || null;
  };

  const toShowcaseProject = (record) => ({
    ...(record.showcase || {}),
    id: record.key,
    title: record.title || record.showcase?.title || "项目",
    projectPath: record.projectPath,
    source: record.source,
    analysis: record.analysis,
    images: record.images,
    pricing: record.pricing,
    activeTab: record.activeTab,
    updatedAt: record.updatedAt,
    published: record.showcase?.published !== false,
    visibility: record.showcase?.visibility || "visible",
    status: record.showcase?.status || "generated",
    displayOrder: Number.isFinite(Number(record.showcase?.displayOrder)) ? Number(record.showcase.displayOrder) : 999,
    restoredFromServer: true
  });

  const activeRecord = (payload) => payload.records.find((record) => record.key === payload.activeKey) || payload.records[0];

  window.__DISPLAY_OS_STATIC_MODE__ = true;

  const publicShareHiddenSelectors = [
    ".topbar-actions",
    ".analysis-steps",
    ".tab-edit-actions",
    ".showcase-actions",
    "#analysisForm > .input-section:first-of-type",
    "#analysisForm > .input-section:nth-of-type(4)",
    "#analysisForm > .preflight-card",
    "#analysisForm > .control-row",
    "#inputImageDrop",
    "#generateShowcase",
    "#generatePricing"
  ];
  let publicProjectSelectorPromise = null;

  function hidePublicShareControls() {
    publicShareHiddenSelectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((node) => {
        node.hidden = true;
        node.setAttribute("aria-hidden", "true");
      });
    });
    document.querySelectorAll("#inputImagePreview .image-remove").forEach((node) => {
      node.hidden = true;
      node.setAttribute("aria-hidden", "true");
    });
  }

  function ensurePublicProjectSelector(payload) {
    const titleInput = document.querySelector("#projectTitle");
    const titleControl = titleInput?.closest(".project-title-control");
    if (!titleControl) return;

    titleInput.hidden = true;
    titleInput.setAttribute("aria-hidden", "true");
    let selector = titleControl.querySelector("#publicProjectSelect");
    if (!selector) {
      selector = document.createElement("select");
      selector.id = "publicProjectSelect";
      selector.className = "public-project-select";
      selector.setAttribute("aria-label", "选择公开项目");
      titleControl.insertBefore(selector, titleInput);
      selector.addEventListener("change", () => {
        const menu = document.querySelector("#projectHistoryMenu");
        if (!menu || !selector.value) return;
        const pathKey = `record:${selector.value}`;
        let trigger = Array.from(menu.querySelectorAll("[data-project-key]"))
          .find((node) => node.dataset.projectKey === pathKey);
        if (!trigger) {
          trigger = document.createElement("button");
          trigger.type = "button";
          trigger.hidden = true;
          trigger.dataset.projectKey = pathKey;
          menu.appendChild(trigger);
        }
        trigger.click();
      });
    }

    const records = Array.isArray(payload?.records) ? payload.records : [];
    selector.replaceChildren(...records.map((record) => {
      const option = document.createElement("option");
      option.value = String(record?.key || "");
      option.textContent = String(record?.title || "公开项目");
      return option;
    }));
    const activeKey = String(payload?.activeKey || records[0]?.key || "");
    if (activeKey) selector.value = activeKey;
  }

  function configurePublicShareMode() {
    if (!document.body) return;
    document.body.classList.add("public-share-mode");
    hidePublicShareControls();
    if (!publicProjectSelectorPromise) {
      publicProjectSelectorPromise = snapshotPromise
        .then((payload) => ensurePublicProjectSelector(payload))
        .catch(() => {});
    }
  }

  window.fetch = async (input, init = {}) => {
    const url = getRequestUrl(input);
    if (!url.pathname.startsWith("/api/")) return originalFetch(input, init);

    const method = String(init.method || input?.method || "GET").toUpperCase();
    const payload = await snapshotPromise;
    const current = activeRecord(payload);
    const parts = url.pathname.split("/").filter(Boolean);
    const resource = parts[1] || "";
    const identifier = parts.slice(2).join("/");

    if (resource === "providers" && method === "GET") {
      return jsonResponse({ providers: [] });
    }

    if (resource === "project-records" && method === "GET" && !identifier) {
      return jsonResponse({ records: payload.summaries || payload.records.map((record) => ({
        key: record.key,
        title: record.title,
        projectPath: record.projectPath,
        updatedAt: record.updatedAt,
        activeTab: record.activeTab
      })) });
    }

    if (resource === "project-records" && identifier === "latest" && method === "GET") {
      return jsonResponse({ record: current });
    }

    if (resource === "project-records" && identifier && identifier !== "latest") {
      const record = findRecord(payload.records, identifier) || current;
      if (method === "GET") return jsonResponse({ record });
      if (method === "DELETE") return jsonResponse({ deleted: false, sourcePreserved: true, assetPreserved: true });
    }

    if (resource === "project-records" && !identifier && method === "POST") {
      return jsonResponse({ record: current, assetSaved: true, static: true });
    }

    if (resource === "project-records" && identifier === "active" && method === "POST") {
      return jsonResponse({ record: current, static: true });
    }

    if (resource === "project-assets" && method === "GET") {
      return jsonResponse({ asset: current });
    }

    if (resource === "showcase-projects" && method === "GET" && !identifier) {
      return jsonResponse({ projects: payload.records.map(toShowcaseProject) });
    }

    if (resource === "showcase-projects" && identifier) {
      const record = findRecord(payload.records, identifier) || current;
      if (method === "GET") return jsonResponse({ project: toShowcaseProject(record) });
      if (method === "PUT") return jsonResponse({ project: toShowcaseProject(record), static: true });
      if (method === "DELETE") return jsonResponse({ deleted: false, sourcePreserved: true, assetPreserved: true, static: true });
    }

    if (resource === "showcase-projects" && method === "DELETE") {
      return jsonResponse({ deletedCount: 0, preserved: true, sourcePreserved: true, static: true });
    }

    if (resource === "analyze-project" || resource === "codex-analysis") {
      return jsonResponse({ result: current.analysis, static: true, readonly: true });
    }

    if (resource === "codex-jd-analysis") {
      return jsonResponse({ result: null, static: true, readonly: true });
    }

    if (resource === "jd-evidence-skill" && method === "GET") {
      return jsonResponse({ name: "静态项目分析镜像", status: "ready", summary: "当前页面展示已保存的公开分析结果。", linkedSkills: [], missingSkills: [] });
    }

    return jsonResponse({ error: "GitHub Pages 是只读静态镜像，当前操作由本机服务执行。", static: true }, 405);
  };

  function lockStaticActions() {
    document.body?.setAttribute("data-static-mode", "true");
    configurePublicShareMode();
    const lockSelectors = [
      "#updateCurrentProject",
      "#syncGithub",
      "#newProject",
      "#saveProject",
      "#readProject",
      "#generateButton",
      "#generateShowcase",
      "#generatePricing",
      "#editTab",
      "#saveTab"
    ];
    lockSelectors.forEach((selector) => {
      const node = document.querySelector(selector);
      if (!node) return;
      node.disabled = true;
      node.title = "GitHub Pages 为只读静态镜像，请回到本机工作台操作";
      node.setAttribute("aria-disabled", "true");
    });
    document.querySelectorAll("input[type=file]").forEach((node) => { node.disabled = true; });
    const pathInput = document.querySelector("#projectPath");
    const titleInput = document.querySelector("#projectName");
    if (pathInput) pathInput.readOnly = true;
    if (titleInput) titleInput.readOnly = true;
    const status = document.querySelector("#publishSyncStatus");
    if (status) {
      status.textContent = "静态镜像 · 已保存内容";
      status.dataset.tone = "ok";
    }
  }

  function scheduleReadonlyLock() {
    [0, 300, 900, 1800, 3200].forEach((delay) => window.setTimeout(lockStaticActions, delay));
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", scheduleReadonlyLock, { once: true });
  else scheduleReadonlyLock();
})();
