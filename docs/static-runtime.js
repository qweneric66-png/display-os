(() => {
  "use strict";

  const originalFetch = window.fetch.bind(window);
  const snapshotPromise = originalFetch("./data/analysis-snapshot.json", { cache: "no-store" }).then(async (response) => {
    if (!response.ok) throw new Error("静态分析快照加载失败");
    const payload = await response.json();
    if (!Array.isArray(payload.records) || !payload.records.length) throw new Error("静态分析快照为空");
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
    title: record.title,
    projectPath: record.projectPath,
    source: record.source,
    analysis: record.analysis,
    images: record.images,
    pricing: record.pricing,
    activeTab: record.activeTab,
    updatedAt: record.updatedAt,
    restoredFromServer: true
  });

  const activeRecord = (payload) => payload.records.find((record) => record.key === payload.activeKey) || payload.records[0];

  window.__DISPLAY_OS_STATIC_MODE__ = true;
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
