const list = (value) => Array.isArray(value) ? value.filter(Boolean) : [];
const text = (value, fallback = "暂无公开内容") => String(value || fallback);

function setText(id, value, fallback) {
  const node = document.getElementById(id);
  if (node) node.textContent = text(value, fallback);
}

function renderList(id, values, fallback = "暂无公开内容") {
  const node = document.getElementById(id);
  if (!node) return;
  const items = list(values);
  node.replaceChildren(...(items.length ? items : [fallback]).map((item) => {
    const li = document.createElement("li");
    li.textContent = text(item, fallback);
    return li;
  }));
}

function renderTags(values) {
  const node = document.getElementById("heroTags");
  node.replaceChildren(...list(values).map((item) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = item;
    return span;
  }));
}

function renderCapabilities(values) {
  const node = document.getElementById("capabilitiesList");
  const items = list(values);
  node.replaceChildren(...items.map((item) => {
    const article = document.createElement("article");
    article.className = "capability-item";
    const title = document.createElement("strong");
    title.textContent = text(item.name, "项目能力");
    const body = document.createElement("p");
    body.textContent = [item.problem, item.approach, item.value].filter(Boolean).join(" · ");
    article.append(title, body);
    return article;
  }));
}

function renderResults(values) {
  const node = document.getElementById("resultsList");
  node.replaceChildren(...list(values).map((item) => {
    const article = document.createElement("article");
    article.className = "result-item";
    const title = document.createElement("strong");
    title.textContent = text(item.label, "关键结果");
    const value = document.createElement("span");
    value.textContent = [item.value, item.status].filter(Boolean).join(" · ");
    article.append(title, value);
    return article;
  }));
}

function renderEvidence(values) {
  const node = document.getElementById("evidenceList");
  node.replaceChildren(...list(values).map((item) => {
    const article = document.createElement("article");
    article.className = "evidence-item";
    const title = document.createElement("strong");
    title.textContent = text(item.label, "证据");
    const body = document.createElement("span");
    body.textContent = [item.supports, item.status, item.details].filter(Boolean).join(" · ");
    article.append(title, body);
    return article;
  }));
}

function formatSnapshotTime(value) {
  if (!value) return "展示内容来自最近一次发布快照";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "展示内容来自最近一次发布快照";
  return `快照生成于 ${date.toLocaleString("zh-CN", { dateStyle: "medium", timeStyle: "short" })}`;
}

async function boot() {
  const response = await fetch("./data/showcase.json", { cache: "no-store" });
  if (!response.ok) throw new Error("公开展示内容暂时无法读取");
  const view = await response.json();

  document.title = `${text(view.title, "项目展示")}｜Display OS`;
  setText("pageTitle", view.title, "项目展示");
  setText("heroLede", view.oneLine || view.summary);
  setText("heroState", view.snapshotLabel, "已发布展示快照");
  setText("analysisSummaryTitle", view.analysisSummary?.title || "项目定位");
  setText("analysisSummaryText", view.analysisSummary?.text || view.summary);
  setText("scenarioText", view.background?.scenario, "展示项目的实际业务使用场景。");
  setText("boundaryTitle", view.maturity?.pending?.length ? "仍有验证边界" : "展示内容已整理");
  setText("boundaryText", view.maturity?.pending?.[0] || view.maturity?.risks?.[0] || "当前页面展示已发布内容，详细验证记录见下方证据说明。");
  setText("audienceText", view.background?.targetUsers?.join("、"), "项目使用者和业务负责人");
  setText("solutionOverview", view.solution?.overview, "把输入资料整理成可复核、可执行的项目工作流。");
  setText("snapshotTime", formatSnapshotTime(view.generatedAt));

  const cover = document.getElementById("coverImage");
  if (view.cover) {
    cover.src = view.cover;
  } else {
    cover.removeAttribute("src");
    cover.alt = "当前项目未提供公开封面";
  }

  renderTags(view.keywords);
  renderList("analysisBullets", view.analysisSummary?.bullets);
  renderList("problemsList", view.problems);
  renderList("targetUsersList", view.background?.targetUsers);
  renderList("inputsList", view.solution?.inputs);
  renderList("judgmentList", view.solution?.judgment);
  renderList("outputsList", view.solution?.outputs);
  renderList("workflowList", view.workflow);
  renderCapabilities(view.capabilities);
  renderResults(view.results);
  renderList("valueList", view.value);
  renderList("verifiedList", view.maturity?.verified);
  renderList("pendingList", view.maturity?.pending || view.maturity?.risks);
  renderEvidence(view.evidence);
}

boot().catch((error) => {
  document.getElementById("pageTitle").textContent = "展示内容暂时无法加载";
  document.getElementById("heroLede").textContent = "请稍后刷新页面，或重新生成公开展示快照。";
  document.getElementById("boundaryText").textContent = error.message;
});
