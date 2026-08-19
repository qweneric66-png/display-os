(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const text = (value, fallback = "") => String(value ?? fallback).trim();
  const array = (value) => Array.isArray(value) ? value : [];
  const escapeHtml = (value) => text(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[char]);
  const asListItem = (value, fallback = "待补充") => {
    if (typeof value === "string") return text(value, fallback);
    if (!value || typeof value !== "object") return fallback;
    return text(value.value || value.label || value.name || value.title || value.summary, fallback);
  };
  const friendlyModule = (value) => {
    const raw = asListItem(value);
    const withoutPath = raw.replace(/^[^：:]+[：:]/, "").trim();
    return withoutPath.replace(/\b[a-zA-Z0-9_./\\-]+\.(?:py|js|html|md|json)\b/g, "业务模块");
  };

  let snapshots = [];
  let snapshot = null;
  let activePage = "analysis";
  let editing = false;

  function setText(selector, value, fallback = "待分析") {
    const node = $(selector);
    if (node) node.textContent = text(value, fallback);
  }

  function renderList(selector, values, fallback = "待分析") {
    const node = $(selector);
    if (!node) return;
    const items = array(values).map((item) => asListItem(item)).filter(Boolean);
    node.innerHTML = (items.length ? items : [fallback])
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("");
  }

  function setStatus(message, tone = "neutral") {
    const node = $("#apiStatus");
    if (!node) return;
    node.textContent = message;
    node.dataset.tone = tone;
    node.classList.add("is-visible");
    window.setTimeout(() => node.classList.remove("is-visible"), 4600);
  }

  function publicSnapshotView(data) {
    const profile = data.analysisSummary || {};
    const background = data.background || {};
    const solution = data.solution || {};
    const aiRole = data.aiRole || {};
    const maturity = data.maturity || {};
    const capabilities = array(data.capabilities).map(friendlyModule).filter(Boolean);
    const decisions = array(data.keyDecisions).map((item) => asListItem(item, "已记录工程判断与验证边界")).filter((item) => item !== "[object Object]");
    return {
      title: text(data.title, "公开项目快照"),
      tag: text(data.tag, "Display OS 项目"),
      oneLine: text(data.oneLine || profile.text, "已发布项目分析快照"),
      summary: text(data.summary || profile.text, "已发布项目分析快照"),
      cover: text(data.cover),
      positioning: text(profile.text || data.summary, "已发布项目定位"),
      problem: text(array(data.problems)[0], "当前项目已经把采集、整理、确认和交付纳入统一工作流。"),
      users: array(background.targetUsers).map(asListItem),
      workflow: array(data.workflow).map(asListItem),
      modules: capabilities.length ? capabilities : ["统一任务调度", "商品资料整理", "平台交付与异常复查"],
      decisions: decisions.length ? decisions : ["后台持久化状态作为确认真值", "不确定结果进入人工复核", "运行指标与业务结果分开呈现"],
      problems: array(data.problems).map(asListItem),
      objectives: array(data.objectives).map(asListItem),
      solutionOverview: text(solution.overview, "将采集、整理、识别、人工确认、发布和异常复查串成可追踪闭环。"),
      solutionSteps: array(solution.steps).map(asListItem),
      inputs: array(solution.inputs).map(asListItem),
      humanGates: array(solution.humanGate || solution.judgment).map(asListItem),
      outputs: array(solution.outputs).map(asListItem),
      ai: array(aiRole.ai).map(asListItem),
      automation: array(aiRole.automation).map(friendlyModule),
      human: array(aiRole.human).map(asListItem),
      rules: array(aiRole.rules).map(asListItem),
      results: array(data.results),
      responsibilities: array(data.responsibilities).map(asListItem),
      challenges: array(data.challenges).map(asListItem, "已记录挑战与处理边界"),
      value: array(data.value).map(asListItem),
      evidence: array(data.evidence),
      maturity: {
        verified: array(maturity.verified).map(asListItem),
        pending: array(maturity.pending).map(asListItem),
        risks: array(maturity.risks).map(asListItem)
      }
    };
  }

  function renderInput(view) {
    setText("#projectPath", "公开项目快照", "公开项目快照");
    setText("#projectTitle", view.title, "公开项目快照");
    const pathInput = $("#projectPath");
    const titleInput = $("#projectTitle");
    if (pathInput) {
      pathInput.value = "公开项目快照";
      pathInput.readOnly = true;
    }
    if (titleInput) {
      titleInput.value = view.title;
      titleInput.readOnly = true;
    }

    const status = $("#inputPanelState");
    if (status) {
      status.textContent = "已发布快照";
      status.classList.remove("visually-hidden");
      status.classList.add("is-ready");
    }
    setText("#preflightSummary", "可以查看", "可以查看");
    const ready = $("#sourceReadyCheck");
    const titleReady = $("#titleReadyCheck");
    const evidence = $("#evidenceReadyCheck");
    [ready, titleReady, evidence].forEach((node) => {
      node?.classList.remove("is-pending", "is-risk");
      node?.classList.add("is-ready");
    });
    if (ready) $("small", ready).textContent = "公开快照已载入";
    if (titleReady) $("small", titleReady).textContent = "项目名称已确认";
    if (evidence) $("small", evidence).textContent = "已发布内容可查看";

    const preview = $("#inputImagePreview");
    if (preview && view.cover.startsWith("data:image/")) {
      preview.classList.add("large-images", "cover-images");
      preview.innerHTML = `<figure class="image-thumb"><img src="${escapeHtml(view.cover)}" alt="${escapeHtml(view.title)} 项目封面" /><figcaption>项目封面</figcaption></figure>`;
      $("#inputImageDrop")?.classList.add("has-image");
    }
    const fileStatus = $("#fileStatus");
    if (fileStatus) {
      fileStatus.textContent = "公开展示资料已载入";
      fileStatus.classList.remove("visually-hidden");
    }
    const generate = $("#generateButton");
    if (generate) generate.disabled = false;
  }

  function renderProfile(view) {
    setText("#profileTitle", `${view.title}｜项目画像`, "项目画像");
    setText("#profilePositioning", view.positioning);
    setText("#profileProblem", view.problem);
    renderList("#profileUsers", view.users);
    renderList("#profileWorkflow", view.workflow);
    renderList("#profileModules", view.modules);
    renderList("#profileDecisions", view.decisions);
  }

  function renderDetail(view) {
    setText("#detailTitle", `${view.title}｜完整项目介绍`, "完整项目介绍");
    const article = $("#detailArticle");
    if (!article) return;
    const section = (title, body, items = []) => `
      <section class="detail-section">
        <h4>${escapeHtml(title)}</h4>
        ${body ? `<p>${escapeHtml(body)}</p>` : ""}
        ${items.length ? `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}
      </section>`;
    article.innerHTML = `
      <div class="detail-intro"><p>${escapeHtml(view.summary)}</p></div>
      ${section("一、项目定位与目标用户", view.positioning, view.users)}
      ${section("二、核心问题", "当前流程需要把分散的页面、文件、任务和平台状态汇入同一条可追踪链路。", view.problems)}
      ${section("三、解决目标", "围绕业务闭环建立可观察、可复查、可人工接管的项目工作台。", view.objectives)}
      ${section("四、核心方案", view.solutionOverview, view.solutionSteps)}
      ${section("五、结果与价值", "项目已形成一套可继续验收和复用的交付结构。", view.value)}
      ${section("六、验证边界", "公开页面只展示已发布快照，实时运行、长期稳定性和完整平台终态仍需现场验证。", view.maturity.pending.concat(view.maturity.risks))}
    `;
  }

  function renderDiagrams(view) {
    const list = $("#diagramList");
    if (!list) return;
    const steps = view.workflow.length ? view.workflow : [view.solutionOverview];
    list.innerHTML = steps.map((step, index) => `
      <article class="diagram-card">
        <div class="diagram-heading-row"><h4>${escapeHtml(`步骤 ${index + 1}｜${step}`)}</h4></div>
        <p class="diagram-description">${escapeHtml(index === 0 ? view.solutionOverview : "完成后将结果交给下一环节，并保留人工确认与异常复查入口。")}</p>
        <div class="diagram-metrics" aria-label="流程状态">
          <span class="diagram-metric"><small>流程位置</small><strong>${index + 1}/${steps.length}</strong></span>
          <span class="diagram-metric"><small>交付状态</small><strong>已纳入快照</strong></span>
        </div>
        <div class="visual-flow"><div class="flow-diagram"><div class="flow-main"><span class="flow-node">输入</span><span class="flow-arrow">→</span><span class="flow-node">处理</span><span class="flow-arrow">→</span><span class="flow-node">复核与交付</span></div></div></div>
      </article>`).join("");
  }

  function renderLanding(view) {
    setText("#landingTitle", view.title, "项目落地展示");
    setText("#landingText", view.summary);
    renderList("#landingBullets", view.results.map((item) => asListItem(item, "已形成项目交付结果")));
    setText("#briefText", view.oneLine || view.summary);
  }

  function renderPromo(view) {
    const flow = $("#promoFlow");
    if (flow) {
      const items = ["真实业务问题", "统一任务工作台", "人机协作与异常复查", "可交付项目资产"];
      flow.innerHTML = items.map((item, index) => `<span class="promo-flow-step"><strong>${index + 1}</strong><span>${escapeHtml(item)}</span></span>`).join("");
    }
    const list = $("#promoList");
    if (list) {
      const entries = view.results.map((item) => `${asListItem(item?.label, "结果")}：${asListItem(item?.value, "已形成项目结果")}`);
      list.innerHTML = (entries.length ? entries : view.value).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    }
  }

  function renderShowcase(views) {
    const rail = $("#projectRail");
    if (!rail) return;
    rail.innerHTML = array(views).map((view, index) => {
      const capabilities = view.modules.slice(0, 5).map((item) => `<span class="work-card-capability">${escapeHtml(item)}</span>`).join("");
      const cover = view.cover.startsWith("data:image/")
        ? `<img class="work-card-cover" src="${escapeHtml(view.cover)}" alt="${escapeHtml(view.title)} 项目封面" />`
        : `<div class="work-card-cover empty">项目展示</div>`;
      return `
        <article class="showcase-project-unit" data-project-unit data-project-index="${index}">
          <article class="project-card generated-work featured-showcase" data-work-id="public-snapshot-${index}">
            ${cover}
            <div class="work-card-info">
              <span class="tag">${escapeHtml(view.tag)}</span>
              <h3>${escapeHtml(view.title)}</h3>
              <p class="work-card-one-line">${escapeHtml(view.oneLine)}</p>
              <div class="work-card-capabilities" aria-label="核心能力">${capabilities}</div>
              <a class="detail-link work-card-detail-link" data-project-index="${index}" href="#analysis">查看项目分析 ↗</a>
            </div>
          </article>
        </article>`;
    }).join("");
  }

  function renderCurrent(view) {
    renderInput(view);
    renderProfile(view);
    renderDetail(view);
    renderDiagrams(view);
    renderLanding(view);
    renderPromo(view);
  }

  function selectProject(index) {
    const next = snapshots[Number(index)];
    if (!next) return;
    snapshot = next;
    renderCurrent(snapshot);
    activatePage("analysis");
    setStatus(`已切换到 ${snapshot.title}`, "ok");
  }

  function activateTab(tabId = "profile") {
    const target = $(`.tab[data-tab="${tabId}"]`);
    if (!target || target.hidden) return;
    $$(".tab").forEach((tab) => tab.classList.toggle("active", tab === target));
    $$(".tab-panel").forEach((panel) => {
      const active = panel.id === tabId;
      panel.classList.toggle("active", active);
      panel.hidden = !active;
    });
  }

  function activatePage(pageId, updateHash = true) {
    const valid = ["home", "analysis", "showcase"];
    activePage = valid.includes(pageId) ? pageId : "analysis";
    $$('main#pageMain > section').forEach((section) => {
      const active = section.id === activePage;
      section.classList.toggle("page-active", active);
      section.dataset.pageState = active ? "active" : (valid.indexOf(section.id) < valid.indexOf(activePage) ? "before" : "after");
      section.setAttribute("aria-hidden", String(!active));
    });
    $$(".nav a[href^='#']").forEach((link) => {
      const active = link.getAttribute("href") === `#${activePage}`;
      link.classList.toggle("is-current", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    document.body.dataset.pageId = activePage;
    document.body.dataset.pageIndex = String(valid.indexOf(activePage) + 1);
    if (updateHash) window.history.replaceState(null, "", `#${activePage}`);
  }

  function bindPager() {
    document.documentElement.classList.add("page-pager-enabled");
    document.body.classList.add("page-pager-enabled");
    document.addEventListener("click", (event) => {
      const link = event.target.closest?.("a[href^='#']");
      if (!link) return;
      const target = link.getAttribute("href").slice(1);
      if (!["home", "analysis", "showcase"].includes(target)) return;
      event.preventDefault();
      activatePage(target);
    });
    window.addEventListener("hashchange", () => activatePage(window.location.hash.slice(1), false));
    const initial = ["home", "analysis", "showcase"].includes(window.location.hash.slice(1)) ? window.location.hash.slice(1) : "analysis";
    activatePage(initial, !window.location.hash);
  }

  function bindTabs() {
    $$(".tab").forEach((tab) => tab.addEventListener("click", () => activateTab(tab.dataset.tab)));
    $("#editTab")?.addEventListener("click", () => {
      const panel = $(".tab-panel.active");
      if (!panel) return;
      editing = !editing;
      panel.classList.toggle("is-editing", editing);
      panel.querySelectorAll("h3,h4,h5,p,li").forEach((node) => { node.contentEditable = editing ? "true" : "false"; });
      setText("#editTab", editing ? "编辑中" : "编辑", "编辑");
      const save = $("#saveTab");
      if (save) save.disabled = !editing;
      setStatus(editing ? "当前模块可编辑，修改不会写回 GitHub" : "已退出编辑", "neutral");
    });
    $("#saveTab")?.addEventListener("click", () => {
      editing = false;
      $(".tab-panel.active")?.classList.remove("is-editing");
      $$(".tab-panel.active h3,.tab-panel.active h4,.tab-panel.active h5,.tab-panel.active p,.tab-panel.active li").forEach((node) => { node.contentEditable = "false"; });
      $("#saveTab").disabled = true;
      setStatus("静态页面编辑仅保留在当前浏览器，不会写回 GitHub", "ok");
    });
  }

  function bindStaticActions() {
    $("#loadDemo")?.addEventListener("click", () => setStatus(`已载入 ${snapshot?.title || "公开项目"} 的公开项目快照`, "ok"));
    $("#analysisForm")?.addEventListener("submit", (event) => {
      event.preventDefault();
      setStatus("当前链接是静态公开快照，不能调用本机服务生成新分析", "neutral");
    });
    ["#newProject", "#saveProject", "#readProject", "#generateShowcase", "#generatePricing"].forEach((selector) => {
      $(selector)?.addEventListener("click", () => setStatus("当前链接是静态公开快照，完整操作请回到本机工作台", "neutral"));
    });
    $("#toggleProjectHistory")?.addEventListener("click", () => {
      const menu = $("#projectHistoryMenu");
      if (!menu) return;
      menu.hidden = !menu.hidden;
      menu.innerHTML = snapshots.map((item, index) => `
        <button type="button" class="history-item" data-project-index="${index}">
          ${escapeHtml(item.title)}<small>公开快照</small>
        </button>`).join("");
    });
    $("#openDemandAnalysis")?.addEventListener("click", () => {
      $("#demandModal")?.removeAttribute("hidden");
      $("#demandEmptyStateMessage")?.setAttribute("hidden", "true");
    });
    $$('[data-close-demand]').forEach((node) => node.addEventListener("click", () => $("#demandModal")?.setAttribute("hidden", "true")));
    $("#fillDemandSample")?.addEventListener("click", () => {
      const input = $("#jobDemandInput");
      if (input) input.value = "负责跨境电商数据平台、任务调度、异常处理和业务交付。";
    });
    $("#analyzeJobDemand")?.addEventListener("click", () => {
      $("#demandEmptyStateMessage")?.removeAttribute("hidden");
      setText("#demandEmptyStateMessage", "静态链接不执行实时岗位分析，请回到本机工作台使用分析功能", "静态链接不执行实时岗位分析");
    });
    $("#hideShowcase")?.addEventListener("click", () => {
      $("#showcase")?.classList.add("is-hidden");
      $("#showShowcase")?.removeAttribute("hidden");
    });
    $("#showShowcase")?.addEventListener("click", () => {
      $("#showcase")?.classList.remove("is-hidden");
      $("#showShowcase")?.setAttribute("hidden", "true");
    });
  }

  function bindProjectSelection() {
    document.addEventListener("click", (event) => {
      const target = event.target.closest?.("[data-project-index]");
      if (!target) return;
      event.preventDefault();
      selectProject(target.dataset.projectIndex);
    });
  }

  function render(view, views) {
    renderCurrent(view);
    renderShowcase(views);
    bindPager();
    bindTabs();
    bindStaticActions();
    bindProjectSelection();
    activateTab("profile");
    setText("#apiStatus", "公开项目快照已载入", "公开项目快照已载入");
  }

  async function boot() {
    try {
      const response = await fetch("./data/showcase.json", { cache: "no-store" });
      if (!response.ok) throw new Error("公开项目快照加载失败");
      const payload = await response.json();
      const rawProjects = Array.isArray(payload.projects) ? payload.projects : [payload];
      snapshots = rawProjects.map(publicSnapshotView).filter((item) => item.title);
      if (!snapshots.length) throw new Error("公开项目快照为空");
      snapshot = snapshots[0];
      render(snapshot, snapshots);
    } catch (error) {
      console.error(error);
      setStatus("公开项目快照暂时无法加载，请刷新页面", "error");
    }
  }

  boot();
})();
