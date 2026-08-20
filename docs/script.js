const featuredProject = {
  title: "PDD 店铺商品数据自动采集平台",
  path: "D:\\erp\\pdd\\see",
  source: `# 精选示例整理稿：PDD 店铺商品数据自动采集平台

## 项目定位
这是一个面向电商运营和商品数据整理场景的本地可视化采集工作台。它不是单纯的页面点击脚本，而是把 PDD 登录确认、店铺商品列表、商品详情、SKU 弹层、OCR 价格识别、Excel 模板交付、任务日志和服务化接口组织成一条可暂停、可恢复、可审计的任务流。

## 核心问题
真实电商采集的难点不在于“能不能点击页面”，而在于页面状态、登录状态、商品弹层、价格图像、人工校验和导出格式都可能变化。如果脚本在错误状态下继续运行，会得到污染数据；如果没有可视化反馈和任务记录，后续也无法复盘失败原因。

## 关键证据
- README.md 记录了本地可视化页面、登录确认流程和安全边界：系统不读取账号、密码、Cookie、Token 或浏览器密钥。
- backend/docs/ARCHITECTURE.md 说明后端采用 FastAPI 包装既有可视化采集引擎，通过 SQLite 队列、JSONL 日志和后台 worker 提供任务化能力。
- backend/docs/API.md 记录了 health、ready、engine、workflow、task、system 等接口，说明项目已经从脚本向可调用服务演进。
- backend/docs/ERROR_CODES.md 统一了配置错误、引擎不可用、任务不存在、任务并发、数据库失败、参数校验和内部错误。
- 成长档案记录了 Step2 商品列表定位、Step3 详情/SKU、Step4 OCR 价格识别、人工价格框、Excel 模板导出、同店铺追加与去重等关键工程判断。

## 核心流程
1. 启动本地可视化任务平台，进入 PDD 店铺采集任务。
2. 遇到登录时进入暂停状态，用户在真实浏览器中完成登录后确认继续。
3. Step2 在店铺商品列表页使用视觉参考框和几何约束定位商品入口。
4. Step2.5 处理轮播、翻页或页面状态变化，避免在旧状态中重复点击。
5. Step3 打开商品详情和 SKU 弹层，确认采集上下文。
6. Step4 使用截图、OCR、人工价格框或校准信息识别价格，不把失败识别写入已完成数据。
7. 按同店铺 Excel 模板追加商品和 SKU，使用商品 ID 与 SKU 信息进行去重。
8. 后端通过 API、SQLite 队列和 JSONL 日志保留任务状态、事件和错误原因。

## 工程判断
- 登录不是要被强行绕过的障碍，而是要被产品化的人机协作节点，所以设计成明确的暂停/确认/恢复流程。
- 按钮只是人工兜底入口，真正稳定的流程应围绕状态迁移和任务循环推进。
- 视觉参考图、运行时截图和证据截图必须区分，否则后续定位和复盘都会混淆。
- OCR 价格识别不能只追求“读到字符”，还要处理截图区域、环境依赖、文本解析和失败停机策略。
- Excel 模板不是随便导出的表格，而是面向运营交付的数据契约，字段、去重和追加逻辑决定成果是否可用。
- 后端没有推翻原有 server.py，而是通过 FastAPI 包装既有可视化引擎，降低重构风险。

## 可展示价值
这个项目能证明我不仅会写自动化脚本，还能把不稳定的人机混合流程整理成可观察、可恢复、可交付的平台能力。它适合放在简历中表达“从脚本到工作台”的工程升级，也适合包装成电商数据采集执行包、采集平台模板或自动化流程咨询案例。`,
  result: {
    providerUsed: "精选示例（非本次读取结果）",
    projectProfile: {
      projectName: "PDD 店铺商品数据自动采集平台",
      positioning:
        "本地可视化电商采集工作台，把 PDD 店铺商品数据采集从脆弱脚本升级为可暂停、可恢复、可审计、可交付的任务平台。",
      targetUsers: [
        "需要批量整理 PDD 店铺商品数据的电商运营人员",
        "需要把采集流程交付给团队使用的自动化开发者",
        "需要在简历、答辩或作品集中证明工程落地能力的项目所有者"
      ],
      coreProblem:
        "PDD 商品采集包含登录确认、页面状态变化、商品弹层、OCR 价格识别、Excel 模板导出和失败恢复等复杂边界。如果只用脚本硬跑，容易在错误页面继续执行、产生污染数据，也难以解释失败原因。",
      workflow: [
        "启动本地可视化任务平台",
        "进入登录确认暂停点并由用户完成真实登录",
        "在店铺列表页通过视觉参考框定位商品",
        "打开详情页和 SKU 弹层采集结构化信息",
        "使用截图与 OCR 识别价格，失败时保留证据并暂停",
        "写入同店铺 Excel 模板，按商品 ID 和 SKU 去重",
        "通过 FastAPI、SQLite 队列和 JSONL 日志沉淀任务审计"
      ],
      technicalModules: [
        "server.py 本地可视化采集引擎",
        "Step1 登录确认与暂停恢复流程",
        "Step2 店铺商品列表定位与参考框点击",
        "Step3 商品详情和 SKU 弹层采集",
        "Step4 OCR 价格识别、人工价格框和失败保护",
        "Excel 模板导出、同店铺追加和去重逻辑",
        "FastAPI 服务包装、SQLite 任务队列、JSONL 审计日志",
        "Tesseract 本地 OCR 工具和部署脚本"
      ],
      engineeringDecisions: [
        "把登录确认为人机协作节点，而不是试图绕过平台安全边界。",
        "用暂停/确认/恢复表达真实业务流程，让用户知道系统当前卡在哪里、为什么卡住。",
        "将视觉参考图、运行时截图和证据截图分开处理，避免定位依据和复盘依据混淆。",
        "OCR 识别失败时不写入已完成数据，优先保留证据和人工校准入口。",
        "以 Excel 模板作为交付契约，字段、追加、去重都围绕运营可用性设计。",
        "通过 FastAPI 包装既有可视化引擎，而不是大规模重写，降低服务化升级风险。"
      ],
      businessValue: [
        "降低 PDD 店铺商品资料整理的人工成本，把重复采集转成可执行、可复盘的任务。",
        "把单机自动化脚本升级成可展示的工作台，更适合简历、答辩和客户演示。",
        "形成可售卖模块：采集执行包、OCR 校准方案、Excel 交付模板、任务平台搭建服务。"
      ],
      evidenceFiles: [
        "README.md：本地运行、登录确认、安全边界和可视化入口",
        "backend/README.md：FastAPI 后端、SQLite 队列、后台 worker 和 OpenAPI 文档",
        "backend/docs/ARCHITECTURE.md：服务化架构、既有引擎包装和任务层划分",
        "backend/docs/API.md：health、ready、engine、workflow、task、system 等接口",
        "backend/docs/ERROR_CODES.md：统一错误码与失败语义",
        "项目复盘文档.md：Step2、Step4、OCR、导出模板、状态恢复等复盘记录",
        "个人能力成长文档.md：从自动化脚本到任务平台的工程判断沉淀"
      ],
      sellableModules: [
        "PDD 店铺商品采集执行包",
        "可视化任务工作台模板",
        "OCR 价格识别与人工校准模块",
        "电商采集 Excel 交付模板",
        "本地 FastAPI 任务队列服务化包",
        "简历/答辩项目案例包"
      ]
    },
    landingTitle: "PDD 店铺商品数据自动采集平台",
    landingText:
      "这个项目把 PDD 店铺商品采集从一次性脚本升级成可视化任务平台：用户在真实浏览器中完成登录确认，系统继续处理商品列表、详情 SKU、OCR 价格识别和 Excel 模板导出，并通过任务队列与日志保留每一步证据。",
    bullets: [
      "从“自动点击页面”升级为“可暂停、可恢复、可审计”的采集工作台，能处理登录、弹层、页面切换和失败恢复。",
      "围绕 Step1 到 Step4 拆出明确任务边界，避免 OCR 失败、错误页面继续执行或重复写入造成数据污染。",
      "用 FastAPI、SQLite 队列和 JSONL 日志包装既有可视化引擎，使本地能力具备 API 化和任务化交付基础。",
      "输出不是临时表格，而是同店铺 Excel 模板、追加去重逻辑和可复盘证据链，贴近运营实际使用。"
    ],
    brief:
      "我围绕 PDD 店铺商品采集场景，搭建了一个本地可视化任务平台。项目把登录确认、店铺列表定位、商品详情与 SKU 采集、OCR 价格识别、Excel 模板导出和任务日志统一到一条可观察的流程里。我的核心判断是：真实采集系统不能只追求自动化点击，还要处理人机协作、失败保护、证据留存和交付契约，因此项目从脚本逐步升级为工作台和服务化接口。",
    promo: [
      "开场：很多采集脚本失败，不是因为不会点击，而是因为登录、页面状态和价格识别这些边界没有被产品化。",
      "冲突：一旦 OCR 识别错、页面没切换成功或商品重复写入，最终表格就会污染，运营无法信任数据。",
      "方案：这个平台把登录确认做成暂停点，把商品列表、详情 SKU、OCR 和 Excel 导出拆成可观察步骤。",
      "证据：FastAPI 接口、SQLite 队列、JSONL 日志、错误码和成长复盘文档共同证明它不是黑盒脚本。",
      "结果：它既能作为个人工程案例展示，也能包装成电商采集工作台模板或本地交付服务。"
    ],
    paidIdea: {
      name: "PDD 可视化采集工作台交付包",
      price: "¥1,999（标准交付）",
      deliverables: [
        "PDD 店铺商品采集流程拆解文档",
        "可视化任务工作台方案",
        "OCR 价格识别与人工校准说明",
        "Excel 模板交付与去重清单",
        "FastAPI 任务队列包装思路",
        "简历/答辩/宣传三套表达文案"
      ]
    },
    detail: {
      title: "PDD 店铺商品数据自动采集平台完整项目介绍",
      description:
        "这是一个面向电商运营和商品数据整理场景的本地可视化采集工作台。项目把 PDD 店铺商品采集从一次性脚本升级为可暂停、可恢复、可审计的任务平台，覆盖登录确认、商品列表定位、详情 SKU 采集、OCR 价格识别、Excel 模板导出和任务审计。",
      sections: [
        {
          title: "一、项目概述",
          blocks: [
            {
              subtitle: "1.1 项目定位",
              body:
                "PDD 店铺商品数据自动采集平台是一个本地可视化电商采集工作台。它不是隐藏在后台的无头脚本，而是把真实浏览器操作、人机确认、商品页面采集、价格识别、表格交付和任务日志放进同一条可观察流程里。"
            },
            {
              subtitle: "1.2 核心价值主张",
              list: [
                "对运营：减少店铺商品资料整理、SKU 录入和价格核对的重复劳动。",
                "对开发：把不稳定的网页自动化任务拆成可暂停、可恢复、可追踪的工程流程。",
                "对展示：证明项目不是单点脚本，而是从采集执行、状态管理到交付结果的完整工作台。"
              ]
            }
          ]
        },
        {
          title: "二、问题定义与机会分析",
          blocks: [
            {
              subtitle: "2.1 场景痛点",
              list: [
                "PDD 登录、弹层和页面状态经常变化，脚本如果继续硬跑，容易在错误页面采集。",
                "商品详情和 SKU 信息结构复杂，人工复制成本高，且容易漏字段。",
                "价格常出现在截图或视觉区域中，OCR 环境、裁剪区域和文本解析都会影响结果。",
                "最终交付不是一堆日志，而是运营能使用的 Excel 模板、去重记录和证据链。"
              ]
            },
            {
              subtitle: "2.2 目标用户",
              list: [
                "需要批量整理 PDD 店铺商品数据的电商运营人员。",
                "需要把网页采集流程交付给团队使用的自动化开发者。",
                "需要在简历、答辩或作品集中证明工程落地能力的项目所有者。"
              ]
            },
            {
              subtitle: "2.3 核心使用场景",
              body:
                "用户启动本地平台后，在真实浏览器中完成登录确认；系统继续进入店铺列表页，定位商品入口，打开详情和 SKU 弹层，识别价格并写入同店铺 Excel 模板。遇到登录、页面异常或 OCR 失败时，系统暂停并保留证据，等待人工确认或校准。"
            }
          ]
        },
        {
          title: "三、产品架构设计",
          blocks: [
            {
              subtitle: "3.1 工作台架构",
              list: [
                "前端可视化工作台：承载任务状态、人工确认、执行入口和结果反馈。",
                "本地采集引擎：负责浏览器页面操作、商品列表定位、详情页采集和 SKU 处理。",
                "FastAPI 服务层：把本地引擎包装成可调用接口，提供健康检查、任务控制和状态查询。",
                "SQLite 任务队列：记录任务生命周期，避免脚本执行变成不可追踪的一次性动作。",
                "JSONL 审计日志：保留事件、异常、暂停原因和恢复过程。",
                "Excel 模板交付层：把商品与 SKU 数据转换为运营可直接使用的标准表格。"
              ]
            },
            {
              subtitle: "3.2 人机协作机制",
              body:
                "项目没有试图绕过登录和平台安全边界，而是把登录确认、价格框校准和异常恢复设计成人机协作节点。系统负责自动推进可自动化部分，用户负责确认需要人工判断的环节。"
            },
            {
              subtitle: "3.3 失败兜底策略",
              list: [
                "登录未完成：暂停任务并等待用户确认。",
                "页面状态不匹配：停止继续写入，避免污染结果。",
                "OCR 识别失败：保留截图证据，优先进入人工校准。",
                "重复商品或 SKU：按商品 ID 和 SKU 信息去重后追加。"
              ]
            }
          ]
        },
        {
          title: "四、核心功能场景",
          blocks: [
            {
              subtitle: "场景 1：登录确认与任务恢复",
              body:
                "系统启动任务后进入真实浏览器页面。如果检测到需要登录，流程进入暂停状态；用户完成登录并点击确认后，系统从暂停点恢复，而不是重新开始或盲目继续。"
            },
            {
              subtitle: "场景 2：店铺商品列表采集",
              body:
                "Step2 使用视觉参考框和几何约束定位商品入口，避免只凭固定坐标点击。这个设计能减少页面布局轻微变化带来的点击偏差。"
            },
            {
              subtitle: "场景 3：详情 SKU 与价格识别",
              body:
                "Step3 打开商品详情和 SKU 弹层，Step4 对价格区域进行截图和 OCR 识别。识别失败时不把商品标记为完成，避免错误数据进入 Excel。"
            },
            {
              subtitle: "场景 4：Excel 模板交付",
              body:
                "采集结果按同店铺 Excel 模板追加写入，通过商品 ID 和 SKU 信息去重。Excel 在这里不是附属产物，而是面向运营交付的数据契约。"
            }
          ]
        },
        {
          title: "五、核心功能清单",
          blocks: [
            {
              subtitle: "5.1 MVP 范围",
              list: [
                "本地任务启动与浏览器可视化执行。",
                "登录确认暂停/恢复。",
                "店铺商品列表定位。",
                "商品详情和 SKU 采集。",
                "OCR 价格识别与人工价格框校准。",
                "同店铺 Excel 模板追加写入与去重。",
                "FastAPI 接口、SQLite 队列和 JSONL 日志。"
              ]
            },
            {
              subtitle: "5.2 后续可扩展方向",
              list: [
                "批量店铺任务队列。",
                "采集质量评分和异常看板。",
                "图片和字段证据回放。",
                "更多电商平台适配。",
                "交付包模板化和付费模块上架。"
              ]
            }
          ]
        },
        {
          title: "六、反馈迭代机制",
          blocks: [
            {
              subtitle: "6.1 闭环学习",
              body:
                "每次采集失败都不只作为报错处理，而是沉淀为页面状态、OCR 识别、字段映射或人工确认流程的改进依据。项目复盘文档记录了 Step2、Step4、OCR、导出模板和状态恢复等迭代过程。"
            },
            {
              subtitle: "6.2 用户反馈入口",
              list: [
                "登录确认是否清晰。",
                "价格框校准是否容易操作。",
                "Excel 字段是否满足运营交付。",
                "失败证据是否足够复盘。",
                "采集进度和当前状态是否可理解。"
              ]
            }
          ]
        },
        {
          title: "七、成功度量指标",
          blocks: [
            {
              subtitle: "7.1 北极星指标",
              body:
                "单店铺商品数据从打开页面到输出可用 Excel 的平均完成时间，以及输出结果被运营直接使用的比例。"
            },
            {
              subtitle: "7.2 关键指标体系",
              list: [
                "单商品采集成功率。",
                "OCR 价格识别成功率。",
                "人工暂停后恢复成功率。",
                "Excel 字段完整率。",
                "重复商品/SKU 拦截率。",
                "失败任务可复盘率。"
              ]
            }
          ]
        },
        {
          title: "八、技术选型",
          blocks: [
            {
              subtitle: "8.1 技术栈",
              list: [
                "Python 本地采集引擎与可视化浏览器控制。",
                "FastAPI 服务包装。",
                "SQLite 任务队列。",
                "JSONL 审计日志。",
                "Tesseract OCR 本地价格识别。",
                "Excel 模板读写与字段映射。"
              ]
            },
            {
              subtitle: "8.2 选型理由",
              body:
                "项目优先选择本地可控技术栈，是因为 PDD 采集涉及登录状态、浏览器页面和未公开业务数据。本地执行能降低外部依赖，同时更容易保留运行证据和人工确认入口。"
            }
          ]
        },
        {
          title: "九、补充知识说明",
          blocks: [
            {
              subtitle: "OCR 价格识别",
              body:
                "OCR 不是简单调用识别库，还需要处理截图区域、图像清晰度、文本格式、价格正则解析和识别失败后的人工校准入口。"
            },
            {
              subtitle: "任务审计",
              body:
                "任务审计是指记录任务从开始、暂停、恢复、失败到完成的关键事件。它让自动化流程从黑盒脚本变成可解释、可复盘的工作台。"
            },
            {
              subtitle: "Excel 交付契约",
              body:
                "Excel 模板定义了最终交付字段、顺序、追加方式和去重策略。它决定采集结果能否被运营直接使用。"
            }
          ]
        }
      ]
    },
    diagrams: [
      {
        title: "项目总流程图",
        description: "展示从启动任务到输出 Excel 的完整业务流程。",
        mermaid:
          "flowchart TD\n  A[启动本地可视化任务平台] --> B{是否需要登录}\n  B -- 是 --> C[暂停任务并等待用户登录确认]\n  C --> D[恢复采集任务]\n  B -- 否 --> D\n  D --> E[进入店铺商品列表]\n  E --> F[参考框定位商品入口]\n  F --> G[打开商品详情与 SKU 弹层]\n  G --> H[截图并进行 OCR 价格识别]\n  H --> I{价格识别是否成功}\n  I -- 否 --> J[保留证据并进入人工校准]\n  J --> H\n  I -- 是 --> K[写入同店铺 Excel 模板]\n  K --> L[按商品 ID 和 SKU 去重]\n  L --> M[记录任务日志并完成交付]"
      },
      {
        title: "系统架构图",
        description: "展示前端工作台、本地采集引擎、服务层、队列、日志和交付层之间的关系。",
        mermaid:
          "flowchart LR\n  U[用户/运营人员] --> UI[可视化工作台]\n  UI --> API[FastAPI 服务层]\n  API --> Q[SQLite 任务队列]\n  API --> LOG[JSONL 审计日志]\n  API --> ENGINE[本地采集引擎 server.py]\n  ENGINE --> BROWSER[真实浏览器/PDD 页面]\n  ENGINE --> OCR[Tesseract OCR]\n  ENGINE --> XLS[Excel 模板交付]\n  Q --> UI\n  LOG --> UI"
      },
      {
        title: "人机协作流程图",
        description: "展示系统自动执行和人工确认之间的边界。",
        mermaid:
          "flowchart TD\n  A[系统自动执行] --> B{遇到人机边界}\n  B -- 登录确认 --> C[暂停并提示用户登录]\n  B -- OCR 失败 --> D[暂停并提示校准价格框]\n  B -- 页面异常 --> E[暂停并保留截图证据]\n  C --> F[用户确认继续]\n  D --> F\n  E --> F\n  F --> G[系统从断点恢复]\n  G --> A"
      },
      {
        title: "数据流图",
        description: "展示页面数据如何转换为可交付表格和可复盘证据。",
        mermaid:
          "flowchart LR\n  A[PDD 页面] --> B[商品列表信息]\n  A --> C[商品详情信息]\n  A --> D[SKU 弹层信息]\n  A --> E[价格截图]\n  E --> F[OCR 价格文本]\n  B --> G[结构化商品字段]\n  C --> G\n  D --> H[结构化 SKU 字段]\n  F --> I[价格字段]\n  G --> J[去重与字段校验]\n  H --> J\n  I --> J\n  J --> K[Excel 模板]\n  J --> L[JSONL 证据日志]"
      }
    ]
  }
};

// 精选示例与项目详情页共用同一套业务画像：首屏先说清项目，展开层再放流程、证据和边界。
Object.assign(featuredProject, {
  title: "PDD 店铺商品采集平台",
  path: "D:\\erp\\pdd",
  source: `# PDD 店铺商品采集平台

## 项目定位
面向选品、采购和商品资料整理人员，把 PDD 店铺或商品链接整理成包含商品详情、SKU、价格和规格主图的可交付结果；遇到登录、识别或身份异常时暂停并交给人工确认。

## 核心流程
准备任务 → 确认登录 → 定位商品 → 采集详情与 SKU → 处理价格与异常 → 输出 Excel 与证据

## 平台职责
PDD 是业务采集对象，see 是承接任务状态、登录确认、暂停恢复和结果交付的可视化平台。

## 交付边界
登录、验证码、风控和无法确认的身份不被自动绕过；最终准确率、覆盖率和吞吐量需要在对应运行版本中单独验收。`,
  result: {
    profileVersion: "pdd-profile-20260807",
    providerUsed: "项目画像（PDD / see）",
    projectProfile: {
      projectName: "PDD 店铺商品采集平台",
      positioning:
        "面向选品、采购和商品资料整理人员的本地 PDD 商品采集工作台，把店铺或商品链接整理成可复查的 SKU 价格 Excel 结果。",
      targetUsers: ["选品与采购人员", "商品资料整理人员", "需要交付采集流程的运营团队"],
      coreProblem:
        "登录状态、动态页面、商品弹层、价格识别和 Excel 交付彼此割裂时，任务容易误操作、结果容易污染，失败也难以复查。",
      workflow: [
        "准备店铺或商品链接",
        "确认登录状态，必要时暂停等待人工确认",
        "定位商品并进入详情页",
        "采集商品详情、SKU、规格、价格和主图",
        "校验异常并保留必要证据",
        "按模板输出 Excel，继续下一商品或从断点恢复"
      ],
      technicalModules: [
        "商品列表与详情定位",
        "SKU、规格和主图采集",
        "页面价格读取与截图/OCR 兜底",
        "登录确认、异常暂停和断点恢复",
        "模板化 Excel 导出与业务键去重",
        "see 任务状态与结果交付平台"
      ],
      engineeringDecisions: [
        "把登录设计成暂停、确认、恢复的人机协作节点，不绕过平台安全边界。",
        "把页面定位从“元素可见”提升为“处于稳定操作区域”，降低误点击和截图漂移。",
        "让页面可见文本优先承担价格取值，截图用于复查，OCR 作为兜底。",
        "把业务身份、采集状态和 Excel 交付字段分开，避免不同模式互相污染。"
      ],
      businessValue: [
        "把分散的页面操作、人工确认和表格整理组织成一条可观察任务流程。",
        "在识别失败、身份不明或页面异常时保留证据并交给人工处理。",
        "将采集结果沉淀为可复查、可去重、可继续使用的商品资料表。"
      ],
      evidenceFiles: [
        "PDD 任务平台说明与登录确认流程",
        "商品定位、SKU 采集和价格处理复盘",
        "Excel 模板交付与异常处理记录",
        "see 平台的任务状态与页面承载结构"
      ],
      sellableModules: [
        "可视化登录确认与任务暂停恢复",
        "店铺商品与 SKU 采集流程",
        "价格识别与人工校准",
        "模板化 Excel 交付与去重"
      ]
    },
    landingTitle: "PDD 店铺商品采集平台",
    landingText:
      "面向选品、采购和商品资料整理人员，把 PDD 店铺或商品链接整理成包含商品详情、SKU、价格和规格主图的可交付结果；遇到登录、识别或身份异常时暂停并交给人工确认。",
    bullets: [
      "解决登录状态、动态页面、价格识别和表格交付彼此割裂的问题。",
      "把商品定位、详情采集、SKU 处理和价格读取拆成可观察步骤。",
      "页面可见文本优先取值，截图保留证据，OCR 只作为识别兜底。",
      "最终输出模板化 Excel，并保留异常状态和必要的复查证据。"
    ],
    brief:
      "这是一个面向选品、采购和商品资料整理人员的本地 PDD 商品采集工作台。用户提供店铺或商品链接后，系统承接登录确认、商品定位、详情与 SKU 采集、价格处理和 Excel 交付；遇到页面异常、价格无法识别或商品身份不明确时暂停并交给人工确认。",
    promo: [
      "项目定位：把 PDD 店铺或商品链接整理成可复查的商品资料表。",
      "核心差异：把登录、页面异常和识别失败设计成任务边界，而不是让脚本继续硬跑。",
      "工程取舍：DOM/页面文本负责取值，截图负责复查，OCR 负责兜底。",
      "交付结果：商品详情、SKU、价格和规格主图进入模板化 Excel。"
    ],
    paidIdea: {
      name: "PDD 商品采集工作台项目资产",
      price: "待定",
      deliverables: ["业务流程说明", "异常处理规则", "Excel 字段契约", "项目详情与答辩表达"]
    },
    detail: {
      title: "PDD 店铺商品采集平台",
      description:
        "这是一个面向选品、采购和商品资料整理人员的本地 PDD 商品采集工作台：把店铺或商品链接中的商品详情、SKU、价格和规格主图整理为可交付结果；遇到登录、识别或身份异常时暂停并交给人工确认。",
      sections: [
        {
          title: "项目定位",
          blocks: [
            { subtitle: "它是什么", body: "项目解决的不是单次网页抓取，而是把动态商品页面中的定位、详情读取、SKU 处理、价格识别和表格交付组织成一条可观察的业务流程。" },
            { subtitle: "平台如何承载", body: "PDD 是业务采集对象，see 是承接任务状态、登录确认、暂停恢复和结果交付的可视化平台；二者分别表达业务目标与执行载体。" }
          ]
        },
        {
          title: "业务痛点",
          blocks: [{ subtitle: "原流程的断点", list: [
            "登录状态、页面滚动和弹层时序变化，脚本可能在错误页面继续执行。",
            "商品可见不代表点击姿态稳定，截图位置和后续识别可能漂移。",
            "价格受页面文本、截图区域、OCR 环境和业务解析共同影响。",
            "多种采集模式共用导出逻辑时，商品身份和来源字段可能错误归属。"
          ] }]
        },
        {
          title: "解决方案",
          blocks: [
            { subtitle: "从一次性脚本到任务工作台", body: "系统把登录确认、商品定位、详情与 SKU 采集、价格处理、异常暂停和 Excel 导出拆成可观察步骤。see 平台负责展示当前状态和下一步动作，采集引擎负责处理可见页面，交付层负责把结果按模板落地。" },
            { subtitle: "核心能力", list: [
              "商品定位：按可见商品卡片和稳定操作区域进入详情。",
              "SKU 采集：读取商品详情、规格、SKU 和主图信息。",
              "价格处理：优先读取页面可见文本，保留截图证据，必要时使用 OCR 兜底。",
              "结果交付：按模板字段写入 Excel，并按稳定业务键去重。"
            ] }
          ]
        },
        {
          title: "核心流程",
          blocks: [{ subtitle: "从输入到交付", list: [
            "准备店铺链接、商品详情链接或待处理商品链接。",
            "检测登录状态；需要登录时暂停任务，用户确认后恢复。",
            "读取店铺商品列表，定位商品并进入详情页。",
            "采集商品详情、SKU、规格、价格和主图。",
            "校验字段和异常；识别失败时保留证据并转人工处理。",
            "按模板输出 Excel 结果，继续下一商品或从断点恢复。"
          ] }]
        },
        {
          title: "数据输入与交付",
          blocks: [
            { subtitle: "输入", list: ["店铺或商品链接、当前可见页面和用户登录确认。", "商品标题、商品身份、父 SKU、子 SKU、规格、价格和主图。", "Excel 模板字段、参考图和必要的人工校准信息。"] },
            { subtitle: "结果", list: ["包含商品详情、SKU、价格和规格主图的结构化 Excel。", "价格截图、识别结果和异常原因等可复查证据。", "暂停、恢复、完成和待人工处理的任务状态。"] }
          ]
        },
        {
          title: "异常与人工边界",
          blocks: [{ subtitle: "不把不确定结果当成成功", list: [
            "登录、验证码和风控由用户在真实页面完成，系统不读取私密会话信息。",
            "页面定位不稳定、价格无法识别或商品身份不明确时，任务暂停并保留当前证据。",
            "参考图用于位置校准，截图用于证据留存，OCR 是兜底手段，不替代业务判断。"
          ] }]
        },
        {
          title: "工程差异与边界",
          blocks: [
            { subtitle: "项目证明的能力", list: ["把人工中断点建模为可观察、可恢复的任务状态。", "把页面定位、识别证据、业务字段和最终交付分层处理。", "把 UI 状态与 Excel 交付结果分开，降低重复导出和身份错写风险。"] },
            { subtitle: "当前边界", body: "当前画像基于项目说明、平台结构和复盘材料整理；最终准确率、覆盖率、吞吐量和真实账号全流程仍需在对应运行版本中单独验收。" }
          ]
        }
      ]
    },
    diagrams: [
      { title: "项目总流程", description: "从链接输入到 Excel 交付的业务主线。", mermaid: "flowchart TD\n  A[准备店铺或商品链接] --> B[确认登录状态]\n  B --> C[定位商品并进入详情]\n  C --> D[采集详情与 SKU]\n  D --> E[处理价格与异常]\n  E --> F[输出 Excel 与复查证据]\n  B -. 需要人工确认 .-> B1[暂停等待确认]\n  E -. 无法识别 .-> E1[暂停转人工处理]" },
      { title: "平台承载关系", description: "区分业务项目、see 平台、页面执行和交付层。", mermaid: "flowchart LR\n  P[PDD 商品采集业务] --> S[see 任务可视化平台]\n  S --> B[真实 PDD 页面]\n  B --> D[商品详情与 SKU 数据]\n  D --> X[Excel 与复查证据]\n  B -. 登录/页面异常 .-> H[人工确认]" },
      { title: "数据处理链路", description: "说明页面信息如何变成可交付字段。", mermaid: "flowchart LR\n  I[店铺或商品链接] --> V[可见页面信息]\n  V --> F[商品/ SKU/价格/规格主图]\n  F --> Q[字段校验与业务键去重]\n  Q --> O[模板化 Excel]\n  V --> E[截图与识别证据]\n  E --> H[异常复核]" }
    ]
  }
});

const demo = featuredProject;

const form = document.querySelector("#analysisForm");
const titleInput = document.querySelector("#projectTitle");
const sourceInput = document.querySelector("#projectSource");
const sourceDetails = document.querySelector("#sourceDetails");
const projectPathInput = document.querySelector("#projectPath");
const projectHistoryMenu = document.querySelector("#projectHistoryMenu");
const toggleProjectHistory = document.querySelector("#toggleProjectHistory");
const fileInput = document.querySelector("#projectFile");
const projectImagesInput = document.querySelector("#projectImages");
const inputImageDrop = document.querySelector("#inputImageDrop");
const inputImagePreview = document.querySelector("#inputImagePreview");
const loadDemo = document.querySelector("#loadDemo");
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");
const pageMain = document.querySelector("#pageMain");
const pageSectionIds = ["home", "capabilities", "analysis", "showcase"];
const pageSections = pageSectionIds
  .map((id) => document.querySelector(`#${id}`))
  .filter(Boolean);
const pageNavLinks = document.querySelectorAll('.nav a[href^="#"]');
const pagePagerIndicator = document.querySelector("#pagePagerIndicator");
const pageSectionLabels = {
  home: "首页",
  capabilities: "个人能力",
  analysis: "项目拆解",
  showcase: "落地展示"
};
const pagePagerState = {
  currentIndex: 0,
  transitionLocked: false,
  wheelAccumulator: 0,
  touchStartY: null,
  eventsBound: false,
  enabled: false
};
let showcaseContentObserver = null;
const countdown = document.querySelector("#countdown");
const apiStatus = document.querySelector("#apiStatus");
let statusVisibilityTimer = null;
const generateButton = document.querySelector("#generateButton");
const readProject = document.querySelector("#readProject");
const newProjectButton = document.querySelector("#newProject");
const saveProjectButton = document.querySelector("#saveProject");
const updateCurrentProjectButton = document.querySelector("#updateCurrentProject");
const syncGithubButton = document.querySelector("#syncGithub");
const publishSyncStatus = document.querySelector("#publishSyncStatus");
const inputPanelState = document.querySelector("#inputPanelState");
const fileStatus = document.querySelector("#fileStatus");
const preflightSummary = document.querySelector("#preflightSummary");
const sourceReadyCheck = document.querySelector("#sourceReadyCheck");
const titleReadyCheck = document.querySelector("#titleReadyCheck");
const evidenceReadyCheck = document.querySelector("#evidenceReadyCheck");
const analysisStepItems = document.querySelectorAll(".analysis-steps li");
const generateShowcaseButton = document.querySelector("#generateShowcase");
const generatePricingButton = document.querySelector("#generatePricing");
const editTabButton = document.querySelector("#editTab");
const saveTabButton = document.querySelector("#saveTab");
const openDemandAnalysisButton = document.querySelector("#openDemandAnalysis");
const demandModal = document.querySelector("#demandModal");
const jobDemandInput = document.querySelector("#jobDemandInput");
const analyzeJobDemandButton = document.querySelector("#analyzeJobDemand");
const fillDemandSampleButton = document.querySelector("#fillDemandSample");
const demandEmptyState = document.querySelector("#demandEmptyState");
const demandEmptyStateMessage = document.querySelector("#demandEmptyStateMessage");
const demandResultPanel = document.querySelector("#demandResult");
const demandSkillStatus = document.querySelector("#demandSkillStatus");
const demandSkillSources = document.querySelector("#demandSkillSources");
const hideShowcaseButton = document.querySelector("#hideShowcase");
const showShowcaseButton = document.querySelector("#showShowcase");
const toggleHiddenWorksButton = document.querySelector("#toggleHiddenWorks");
const pricingMarket = document.querySelector("#market");
const pricingGrid = document.querySelector("#pricingGrid");
const pricingModal = document.querySelector("#pricingModal");
const imageStore = {
  input: [],
  panels: {}
};
let currentImageProjectKey = "";
let currentAnalysisResult = null;
let currentPublishedShowcase = null;
let currentRecordProjectPath = "";
let currentShowcaseOwnerPath = "";
let currentPricingOwnerPath = "";
let retainedShowcaseProjectIdentity = "";
let retainedShowcaseSnapshot = null;
let retainedPricingPage = null;
let lastRemoteShowcaseIdentities = null;
let showHiddenWorks = false;
let latestShowcaseRenderId = 0;
let currentReadAudit = null;
let isReadingProject = false;
let isEditingProjectPath = false;
let hasReadProject = false;
let supplementalMaterialName = "";
let isAnalyzing = false;
let isUpdatingCurrentProject = false;
let isSyncingGithub = false;
let projectRecordSaveQueue = Promise.resolve();

function isPagePagerViewport() {
  // 落地展示页是固定视口工作台，桌面与窄屏都保持项目单元的页面级切换。
  return true;
}

function syncPagePagerForShowcaseContent() {
  if (!isPagePagerViewport() || !isPagePagerEnabled()) return;
  const showcase = document.querySelector("#showcase");
  if (!showcase) return;

  // 生成售价会增加落地展示内容高度，但不应改变全局交互模式。
  // 翻页状态由视口断点控制，内容溢出只交给落地展示容器承载，避免生成结果把页面从翻页降级成普通上下滚动。
  const hasOverflow = showcase.scrollHeight > showcase.clientHeight + 2;
  showcase.dataset.pageContentState = hasOverflow ? "scrollable" : "contained";
}

function observeShowcaseContentForPager() {
  const showcase = document.querySelector("#showcase");
  const rail = document.querySelector("#projectRail");
  if (!showcase || !rail || typeof ResizeObserver === "undefined") return;
  showcaseContentObserver?.disconnect();
  showcaseContentObserver = new ResizeObserver(() => syncPagePagerForShowcaseContent());
  showcaseContentObserver.observe(showcase);
  showcaseContentObserver.observe(rail);
}

function isReducedMotionPreferred() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isPagePagerEnabled() {
  return pagePagerState.enabled;
}

function getPageIndex(target) {
  if (typeof target === "number") {
    return Math.max(0, Math.min(pageSections.length - 1, target));
  }
  const index = pageSectionIds.indexOf(String(target || ""));
  return index >= 0 ? index : pagePagerState.currentIndex;
}

function renderPagePagerIndicator() {
  if (!pagePagerIndicator) return;
  pagePagerIndicator.innerHTML = pageSectionIds
    .map(
      (id, index) => `
        <button class="page-pager-dot" type="button" data-page-target="${id}" aria-label="切换到${pageSectionLabels[id]}">
          <span class="page-pager-dot-index">${String(index + 1).padStart(2, "0")}</span>
          <span class="page-pager-dot-label">${pageSectionLabels[id]}</span>
        </button>`
    )
    .join("");
}

function updatePagePagerUI() {
  const activeId = pageSectionIds[pagePagerState.currentIndex];
  pageSections.forEach((section, index) => {
    const isActive = index === pagePagerState.currentIndex;
    const relation = index < pagePagerState.currentIndex ? "before" : index > pagePagerState.currentIndex ? "after" : "active";
    section.classList.toggle("page-active", isActive);
    section.dataset.pageState = relation;
    section.setAttribute("aria-hidden", String(!isActive));
    if ("inert" in section) section.inert = !isActive;
  });
  pageNavLinks.forEach((link) => {
    const isCurrent = link.getAttribute("href") === `#${activeId}`;
    link.classList.toggle("is-current", isCurrent);
    if (isCurrent) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  pagePagerIndicator?.querySelectorAll("[data-page-target]").forEach((button) => {
    const isCurrent = button.dataset.pageTarget === activeId;
    button.classList.toggle("is-active", isCurrent);
    if (isCurrent) button.setAttribute("aria-current", "step");
    else button.removeAttribute("aria-current");
  });
  document.body.dataset.pageIndex = String(pagePagerState.currentIndex + 1);
  document.body.dataset.pageId = activeId;
}

function updatePageHash(pageId) {
  if (!pageId || window.location.hash === `#${pageId}`) return;
  window.history.replaceState(null, "", `#${pageId}`);
}

function activatePage(target, { updateHash = true, immediate = false } = {}) {
  const nextIndex = getPageIndex(target);
  if (!pageSections.length) return;
  if (!isPagePagerEnabled()) {
    pageSections[nextIndex]?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  if (pagePagerState.transitionLocked && !immediate) return;
  const changed = nextIndex !== pagePagerState.currentIndex;
  pagePagerState.currentIndex = nextIndex;
  pagePagerState.wheelAccumulator = 0;
  updatePagePagerUI();
  if (updateHash) updatePageHash(pageSectionIds[nextIndex]);
  if (!changed) return;

  pagePagerState.transitionLocked = !immediate && !isReducedMotionPreferred();
  document.body.classList.toggle("is-page-transitioning", pagePagerState.transitionLocked);
  if (pagePagerState.transitionLocked) {
    window.setTimeout(() => {
      pagePagerState.transitionLocked = false;
      pagePagerState.wheelAccumulator = 0;
      document.body.classList.remove("is-page-transitioning");
    }, 720);
  }
}

function navigateToPageId(pageId, options = {}) {
  activatePage(pageId, options);
}

function navigateToMarketSection() {
  const showcase = document.querySelector("#showcase");
  const marketSection = showcase?.querySelector("[data-project-pricing]") || document.querySelector("#market");
  if (!showcase || !marketSection) return;

  const scrollToMarket = () => {
    marketSection.scrollIntoView({ behavior: isReducedMotionPreferred() ? "auto" : "smooth", block: "start" });
  };

  if (!isPagePagerEnabled()) {
    scrollToMarket();
    return;
  }

  activatePage("showcase");
  window.setTimeout(scrollToMarket, isReducedMotionPreferred() ? 0 : 640);
}

function getScrollableAncestor(target) {
  let node = target instanceof Element ? target : null;
  while (node && node !== document.body && node !== document.documentElement) {
    const style = window.getComputedStyle(node);
    const canScroll = ["auto", "scroll", "overlay"].includes(style.overflowY);
    if (canScroll && node.scrollHeight > node.clientHeight + 2) return node;
    node = node.parentElement;
  }
  return null;
}

function innerScrollCanConsume(target, deltaY) {
  const scrollable = getScrollableAncestor(target);
  if (!scrollable) return false;
  const atTop = scrollable.scrollTop <= 1;
  const atBottom = scrollable.scrollTop + scrollable.clientHeight >= scrollable.scrollHeight - 1;
  return deltaY < 0 ? !atTop : !atBottom;
}

function scrollActivePageByKeyboard(deltaY) {
  const activeSection = document.querySelector("main#pageMain > section.page-active");
  if (!(activeSection instanceof HTMLElement) || activeSection.id !== "showcase") return false;
  if (activeSection.scrollHeight <= activeSection.clientHeight + 2) return false;

  const maxScrollTop = activeSection.scrollHeight - activeSection.clientHeight;
  const nextScrollTop = Math.max(0, Math.min(maxScrollTop, activeSection.scrollTop + deltaY));
  if (nextScrollTop === activeSection.scrollTop) return false;
  activeSection.scrollTo({ top: nextScrollTop, behavior: "smooth" });
  return true;
}

function navigateByPageStep(direction) {
  if (!isPagePagerEnabled() || pagePagerState.transitionLocked) return;
  const nextIndex = pagePagerState.currentIndex + direction;
  if (nextIndex < 0 || nextIndex >= pageSections.length) return;
  activatePage(nextIndex);
}

function setupPagePagerEvents() {
  if (pagePagerState.eventsBound) return;
  pagePagerState.eventsBound = true;

  document.addEventListener("click", (event) => {
    const pageLink = event.target instanceof Element ? event.target.closest('a[href^="#"]') : null;
    const pageButton = event.target instanceof Element ? event.target.closest("[data-page-target]") : null;
    const target = pageLink?.getAttribute("href")?.slice(1) || pageButton?.dataset.pageTarget;
    if (target === "market" && isPagePagerEnabled()) {
      event.preventDefault();
      navigateToMarketSection();
      return;
    }
    if (!target || !pageSectionIds.includes(target) || !isPagePagerEnabled()) return;
    event.preventDefault();
    activatePage(target);
  });

  document.addEventListener(
    "wheel",
    (event) => {
      if (!isPagePagerEnabled() || event.ctrlKey || Math.abs(event.deltaY) < 1) return;
      if (innerScrollCanConsume(event.target, event.deltaY)) return;
      event.preventDefault();
      if (pagePagerState.transitionLocked) return;
      pagePagerState.wheelAccumulator += event.deltaY;
      if (Math.abs(pagePagerState.wheelAccumulator) < 38) return;
      const direction = pagePagerState.wheelAccumulator > 0 ? 1 : -1;
      pagePagerState.wheelAccumulator = 0;
      navigateByPageStep(direction);
    },
    { passive: false }
  );

  document.addEventListener("keydown", (event) => {
    if (!isPagePagerEnabled()) return;
    const target = event.target instanceof Element ? event.target : null;
    if (target?.matches("input, textarea, select, [contenteditable=\"true\"]")) return;
    const direction = event.key === "ArrowDown" || event.key === "PageDown" ? 1 : event.key === "ArrowUp" || event.key === "PageUp" ? -1 : 0;
    if (event.key === "Home") {
      event.preventDefault();
      activatePage(0);
    } else if (event.key === "End") {
      event.preventDefault();
      activatePage(pageSections.length - 1);
    } else if (direction) {
      event.preventDefault();
      if (scrollActivePageByKeyboard(direction > 0 ? 360 : -360)) return;
      navigateByPageStep(direction);
    }
  });

  document.addEventListener(
    "touchstart",
    (event) => {
      if (isPagePagerEnabled()) pagePagerState.touchStartY = event.touches[0]?.clientY ?? null;
    },
    { passive: true }
  );
  document.addEventListener(
    "touchend",
    (event) => {
      if (!isPagePagerEnabled() || pagePagerState.touchStartY == null) return;
      const endY = event.changedTouches[0]?.clientY ?? pagePagerState.touchStartY;
      const deltaY = pagePagerState.touchStartY - endY;
      pagePagerState.touchStartY = null;
      if (Math.abs(deltaY) < 52 || innerScrollCanConsume(event.target, deltaY)) return;
      navigateByPageStep(deltaY > 0 ? 1 : -1);
    },
    { passive: true }
  );

  window.addEventListener("hashchange", () => {
    const hashId = window.location.hash.slice(1);
    if (pageSectionIds.includes(hashId) && isPagePagerEnabled()) activatePage(hashId, { updateHash: false, immediate: true });
  });
}

function setPagePagerEnabled(enabled) {
  pagePagerState.enabled = enabled;
  document.documentElement.classList.toggle("page-pager-enabled", enabled);
  document.body.classList.toggle("page-pager-enabled", enabled);
  if (pagePagerIndicator) pagePagerIndicator.hidden = !enabled;
  if (enabled) {
    const hashId = window.location.hash.slice(1);
    pagePagerState.currentIndex = pageSectionIds.includes(hashId) ? pageSectionIds.indexOf(hashId) : 0;
    updatePagePagerUI();
  } else {
    pageSections.forEach((section) => {
      section.classList.remove("page-active");
      delete section.dataset.pageState;
      section.removeAttribute("aria-hidden");
      if ("inert" in section) section.inert = false;
    });
    pageNavLinks.forEach((link) => {
      link.classList.remove("is-current");
      link.removeAttribute("aria-current");
    });
    pagePagerState.transitionLocked = false;
    pagePagerState.wheelAccumulator = 0;
    document.body.classList.remove("is-page-transitioning");
  }
}

function setupPagePager() {
  if (!pageMain || !pageSections.length) return;
  renderPagePagerIndicator();
  setupPagePagerEvents();
  setPagePagerEnabled(isPagePagerViewport());
  observeShowcaseContentForPager();
  window.addEventListener("resize", () => {
    const shouldEnable = isPagePagerViewport();
    if (shouldEnable !== isPagePagerEnabled()) setPagePagerEnabled(shouldEnable);
    syncPagePagerForShowcaseContent();
  });
}

const imageDbName = "display-os-image-store";
const imageDbStore = "projectImages";
let imageDbPromise;
const workDbName = "display-os-work-store";
const workDbStore = "works";
// Keep the existing database version so an older open page does not block publishing.
const workDbVersion = 1;
const workLocalStoragePrefix = "display-os-work:";
const workMemoryRecords = new Map();
let workDbPromise;
const draftDbName = "display-os-project-drafts";
const draftDbStore = "drafts";
let draftDbPromise;
const pricingDbName = "display-os-pricing-store";
const pricingDbStore = "pricingPages";
let pricingDbPromise;
let currentPricingPage = null;
let isRestoringDraft = false;
let draftSaveTimer;
let remoteDraftSaveTimer;
const demandHistoryKey = "display-os-demand-analysis-history";
const demandDraftKey = "display-os-demand-jd-draft";
let jdEvidenceSkillContext = null;
const demandSampleJD = `岗位职责：
1. 负责跨境电商业务场景下的 AI 产品规划与落地，覆盖选品、供应链、营销、交易、履约、客服等核心链路。
2. 推动 LLM、RAG、Agent、多模态、NLP、图像识别等能力产品化，完成从 0 到 1 到生产环境上线。
3. 设计 AI 产品评估体系，包括准确率、召回率、转化率、用户采纳率、A/B 实验和 ROI 估算。
4. 参与 AI 中台规划，包括模型训练平台、特征平台、推理服务、数据标注、向量数据库、LLM 网关和 RAG 基础设施。
5. 建立 AI 治理机制，覆盖模型版本、Prompt 版本、效果监控、隐私保护、跨区域合规和 AI 可解释性。

任职要求：
1. 5 年以上产品经理经验，至少 2 年 AI/ML 产品直接负责经历。
2. 熟悉电商或零售核心业务链路，有跨境电商经验优先。
3. 能用 SQL、数据分析和 ROI 估算驱动产品决策。
4. 能协调算法、工程、数据、运营、设计等团队推进复杂 AI 产品落地。`;
const demandNeedRules = [
  { label: "AI 辅助开发", terms: ["ai", "agent", "大模型", "智能", "codex", "自动生成"] },
  { label: "自动化流程", terms: ["自动化", "流程", "提效", "效率", "批量", "脚本", "工具"] },
  { label: "数据处理", terms: ["数据", "分析", "清洗", "表格", "指标", "可视化", "采集"] },
  { label: "前端展示", terms: ["前端", "页面", "交互", "展示", "用户体验", "界面"] },
  { label: "业务理解", terms: ["业务", "岗位", "需求", "用户", "运营", "场景"] },
  { label: "工程质量", terms: ["测试", "稳定", "异常", "日志", "维护", "部署", "恢复"] },
  { label: "项目复盘", terms: ["复盘", "文档", "沉淀", "总结", "表达", "简历"] }
];

function resetSourceScroll() {
  sourceInput.scrollTop = 0;
  requestAnimationFrame(() => {
    sourceInput.scrollTop = 0;
  });
  setTimeout(() => {
    sourceInput.scrollTop = 0;
  }, 0);
  setTimeout(() => {
    sourceInput.scrollTop = 0;
  }, 80);
}

function setSourceText(value) {
  sourceInput.value = String(value || "").replace(/^\s+/, "");
  sourceInput.setSelectionRange(0, 0);
  resetSourceScroll();
}

function extractSentences(text) {
  return text
    .replace(/\s+/g, " ")
    .split(/[。！？.!?]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function pickValueLine(sentences, fallback) {
  return (
    sentences.find((line) => /价值|结果|目标|解决|帮助|能力|展示|包装/.test(line)) ||
    sentences[0] ||
    fallback
  );
}

function isRedditProjectPath(projectPath = "") {
  const normalized = String(projectPath || "").replace(/\//g, "\\").toLowerCase();
  return /(?:^|\\)reddit(?:\\|$)/i.test(normalized);
}

function isRedditProjectIdentity(title = "", source = "", projectPath = "") {
  if (isRedditProjectPath(projectPath) || isRedditProjectPath(title)) return true;
  const titleText = String(title || "").trim();
  if (titleText) return /Reddit RAG Training Console|Reddit Workflow|Reddit 帖子和评论|RAG 训练控制台/i.test(titleText);
  return /Reddit RAG Training Console|Reddit Workflow|Reddit 帖子和评论|RAG 训练控制台/i.test(String(source || "").slice(0, 1800));
}

function buildLocalAnalysis(title, source, audit = null, projectPath = "") {
  const profile = buildLocalProfile(title, source, projectPath || audit?.scan?.rootPath || "");
  const name = profile.projectName;
  const auditInfo = {
    ...(audit || buildManualAudit(source)),
    analysisMode: "本地规则分析"
  };
  const insights = applyEvidenceBoundary(buildContentInsights(profile, source, projectPath || audit?.scan?.rootPath || ""), auditInfo);
  const commercialization = buildCommercializationPlan(name, source, profile, insights, projectPath || audit?.scan?.rootPath || "");

  return {
    projectProfile: profile,
    landingTitle: name,
    landingText: insights.landingText,
    bullets: insights.landingBullets,
    brief: insights.brief,
    promo: insights.promo,
    promoStructure: insights.promoStructure,
    paidIdea: {
      name: `${name} 交付转化包`,
      price: commercialization.recommendedPrice,
      deliverables: insights.deliverables,
      commercialization
    },
    detail: buildDetailFromProfile(profile, source, auditInfo),
    diagrams: buildDiagramsFromProfile(profile, projectPath || audit?.scan?.rootPath || ""),
    providerUsed: "本地规则分析（基于已读取资料）",
    analysisMode: "本地规则分析",
    audit: auditInfo
  };
}

function applyEvidenceBoundary(insights, audit) {
  if (!audit || audit.status === "complete") return insights;
  const boundary = "证据边界：已读取项目资料，但运行结果、表格/图片内容仍需独立核验。";
  return {
    ...insights,
    landingText: `${insights.landingText} ${boundary}`,
    landingBullets: [...insights.landingBullets, boundary],
    brief: `${insights.brief} 当前不能据此证明项目已稳定运行或交付完成。`,
    promo: [...insights.promo, boundary],
    promoStructure: {
      ...(insights.promoStructure || {}),
      evidenceBoundary: [...(insights.promoStructure?.evidenceBoundary || []), boundary]
    }
  };
}

function buildManualAudit(source = "") {
  return {
    mode: source.trim() ? "手工资料 + 本地规则整理" : "尚未读取项目",
    status: "manual",
    statusLabel: source.trim() ? "未读取项目，仅分析手工资料" : "等待读取项目",
    confidence: "偏低",
    headline: source.trim() ? "当前内容来自手工资料，尚未建立项目文件证据链。" : "尚未读取项目目录，暂时没有可验证证据。",
    nextAction: "输入项目路径并点击“读取项目”，再生成证据分析。",
    counts: { candidateFiles: 0, selectedTextFiles: 0, unparsedArtifacts: 0, ignoredDirectories: 0, skippedLargeFiles: 0, depthLimitHits: 0, linkedGrowthDocs: 0 },
    confirmed: source.trim() ? ["已接收手工输入资料。"] : [],
    limitations: ["没有实际读取项目目录。", "没有建立文件到结论的证据映射。", "没有执行项目程序或测试。"],
    evidenceLedger: [],
    selectedFiles: [],
    unparsedArtifacts: []
  };
}

function buildLocalProfile(title, source, projectPath = "") {
  const sentences = extractSentences(source);
  const name = title.trim() || matchLineValue(source, "项目名称") || "未命名项目";
  if (isRedditProjectIdentity(name, source, projectPath)) {
    return {
      projectName: name || "Reddit RAG Training Console",
      positioning: "面向 Reddit 帖子与评论的 RAG 训练控制台，把采集、审核、知识块、检索测试和失败回流组织成可复查的训练闭环。",
      targetUsers: ["Reddit 数据采集与审核人员", "RAG 知识构建与评测人员", "需要保留帖子和评论证据的分析团队"],
      coreProblem: "Reddit 帖子和评论从采集到 RAG 使用之间缺少审核、引用和回归验证，未经判断的内容容易直接进入知识库，失败回答也难以沉淀为可修正样本。",
      workflow: [
        "选择或上传 Reddit 帖子、正文和评论作为训练来源。",
        "采集或补充评论，按帖子和回复关系形成评论簇。",
        "分析评论簇中的真实问题、解决方案、证据和机会信号。",
        "人工审核洞察与训练信号，确认内容是否进入知识资产。",
        "生成带来源引用的 RAG 知识块，并在测试台验证检索和回答。",
        "保存失败样本，修正知识块或检索规则后重新回归验证。"
      ],
      technicalModules: [
        "Reddit 帖子与评论采集模块：保留帖子、评论和来源链接。",
        "评论簇与洞察分析模块：提炼问题、方案、证据和机会信号。",
        "人工审核与训练信号模块：决定内容进入正式知识资产或观察草稿。",
        "RAG 知识块与引用模块：生成可检索、可引用的知识块。",
        "RAG 测试与失败回流模块：保存评估样本和失败样本并支持回归。"
      ],
      engineeringDecisions: [
        "先按采集、评论簇、审核、知识块、检索测试和失败回流解释系统，避免被历史资料中的 PDD 关键词带偏。",
        "把来源帖子、人工审核决定和知识块引用连接成可复查证据链。",
        "未确认内容保留在待审核或观察范围，不直接当作长期知识资产。",
        "失败样本关联原问题、命中知识块、失败类型和修正动作，支持可比较的回归验证。"
      ],
      businessValue: [
        "把 Reddit 采集素材转成可审核、可引用、可测试的 RAG 知识资产。",
        "让训练结果、失败原因和后续修正动作可以沿来源证据回查。",
        "可沉淀为 Reddit 采集、RAG 审核和回归评测的训练工作台。"
      ],
      evidenceFiles: [
        "AGENTS.md：明确项目为 Reddit RAG Training Console，覆盖采集、审核、知识块和失败样本池。",
        "docs/TRAINING_GUIDE.md：说明从训练来源、评论簇、人工审核到 RAG 测试和失败回流的闭环。",
        "web/index.html：提供 Reddit 任务可视化平台入口和任务流程页面。"
      ],
      sellableModules: [
        "Reddit 采集与审核流程说明",
        "RAG 知识块构建模板",
        "检索测试与失败样本回归清单",
        "项目复盘与训练闭环展示稿"
      ]
    };
  }
  const positioningText = collectSectionText(source, "项目定位");
  const coreProblemText = collectSectionText(source, "核心问题");
  const stack = collectSectionsItems(source, ["技术栈线索", "技术栈推断"]);
  const modules = collectSectionsItems(source, ["技术模块", "功能模块推断"]);
  const workflows = collectSectionsItems(source, ["核心流程", "工作流/接口线索"]);
  const evidence = collectSectionsItems(source, ["关键证据", "关键证据摘录"]);
  const growth = collectSectionsItems(source, ["关联成长档案", "关联的项目成长档案"]);
  const hasAi = /AI|模型|Ollama|OpenAI|DeepSeek|Qwen|prompt|大模型/i.test(source);
  const hasReader = /读取项目|read-project|readProject|readFile|readdir|项目路径/i.test(source);
  const hasShowcase = /落地页|简介|宣传|售价|paidIdea|showcase|portfolio/i.test(source);
  const projectType = inferProjectType(source, stack, projectPath);
  const coreWorkflow =
    workflows[0] ||
    (hasReader
      ? "用户输入项目路径后，系统读取关键文件、整理项目上下文，再生成展示与宣传内容。"
      : "用户输入项目资料后，系统将资料拆解为展示、宣传和产品化内容。");
  const capability = [
    hasReader ? "本地项目上下文采集" : "",
    hasAi ? "多模型分析生成" : "",
    hasShowcase ? "展示与售卖内容包装" : "",
    stack.slice(0, 2).join("；")
  ]
    .filter(Boolean)
    .join("、");
  const valueLine = `${name} 是一个${projectType}，核心价值是把零散项目资料转化为可理解、可展示、可宣传、可售卖的结构化资产。`;
  const methodLine = `核心流程：${coreWorkflow}`;
  const techLine = capability
    ? `能力证明：${capability}。`
    : "能力证明：系统已具备资料输入、结构化整理和内容生成的基础闭环。";
  const marketLine =
    modules.find((line) => /商业化|售卖|产品/.test(line)) ||
    "可包装为项目拆解模板、作品集生成器、简历项目优化工具或 idea 售卖包。";
  const technicalModules = buildTechnicalModules(modules, stack, source);
  const evidenceFiles = buildEvidenceInsights(evidence, source);
  const sellableModules = buildSellableModules(name, source, technicalModules);

  return {
    projectName: name,
    positioning: summarizeInlineText(positioningText, projectType, 96),
    targetUsers: inferTargetUsers(source, projectType, projectPath),
    coreProblem: summarizeInlineText(
      coreProblemText,
      hasReader
        ? "项目资料和工程证据分散在代码、文档和成长档案中，直接复制无法形成可展示的项目表达。"
        : "项目资料缺少结构化提炼，难以直接转化为作品集、简历和售卖内容。",
      150
    ),
    workflow: workflows.length
      ? workflows
      : [hasReader ? "读取本地项目文件" : "输入项目资料", "生成项目画像", "提炼展示内容", "包装宣传与售卖模块"],
    technicalModules,
    engineeringDecisions: [
      hasReader ? "先做上下文采集和噪声过滤，再让模型分析，避免源码照搬。" : "",
      growth.length ? "把成长档案作为高权重证据，用来补充用户判断、取舍和验证过程。" : "",
      hasAi ? "保留本地模型和云端模型选择，兼顾隐私、成本和生成质量。" : "",
      methodLine
    ].filter(Boolean),
    businessValue: [valueLine, marketLine, techLine].filter(Boolean),
    evidenceFiles,
    sellableModules
  };
}

function inferTargetUsers(source, projectType, projectPath = "") {
  if (isRedditProjectIdentity("", source, projectPath)) {
    return ["Reddit 数据采集与审核人员", "RAG 知识构建与评测人员", "需要保留帖子和评论证据的分析团队"];
  }
  if (isSelectionAgentSource(source)) {
    return ["跨境电商选品负责人", "商品数据分析人员", "需要用智能体辅助选品决策的运营团队"];
  }
  if (/采集|商品|PDD|电商|店铺|价格|OCR/i.test(source)) {
    return ["电商运营人员", "数据采集执行者", "需要商品数据自动化的团队"];
  }
  if (/简历|作品集|展示|落地页|宣传/i.test(source)) {
    return ["求职者", "独立开发者", "需要展示项目能力的人"];
  }
  if (/后台|API|任务|工作流/i.test(source)) {
    return ["项目维护者", "自动化流程使用者", "技术团队"];
  }
  return [projectType.replace(/工具|系统|平台/g, "使用者") || "项目使用者"];
}

function matchLineValue(text, label) {
  const match = text.match(new RegExp(`${label}[:：]\\s*([^\\n]+)`));
  return match?.[1]?.trim();
}

function collectSectionItems(text, sectionName) {
  const pattern = new RegExp(`##\\s*\\d*\\.?\\s*${sectionName}[\\s\\S]*?(?=\\n##\\s*\\d*\\.?\\s|$)`);
  const match = text.match(pattern);
  if (!match) return [];
  return match[0]
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => /^(-|\d+\.)\s+/.test(line))
    .map((line) => line.replace(/^(-|\d+\.)\s+/, ""))
    .slice(0, 10);
}

function collectSectionText(text, sectionName) {
  const pattern = new RegExp(`##\\s*\\d*\\.?\\s*${sectionName}[\\s\\S]*?(?=\\n##\\s*\\d*\\.?\\s|$)`);
  const match = text.match(pattern);
  if (!match) return "";
  return match[0]
    .split(/\r?\n/)
    .slice(1)
    .map((line) => line.trim())
    .filter((line) => line && !/^(-|\d+\.)\s+/.test(line))
    .join(" ")
    .trim();
}

function summarizeInlineText(text, fallback, maxLength = 120) {
  const cleaned = String(text || "")
    .replace(/^这是一个围绕“[^”]+”展开的项目。?/, "")
    .replace(/\s+/g, " ")
    .trim();
  if (!cleaned) return fallback;
  return cleaned.length > maxLength ? `${cleaned.slice(0, maxLength)}...` : cleaned;
}

function collectSectionsItems(text, sectionNames) {
  return [
    ...new Set(
      sectionNames
        .flatMap((name) => collectSectionItems(text, name))
        .map((item) => item.trim())
        .filter(Boolean)
    )
  ];
}

function buildTechnicalModules(modules, stack, source) {
  const cleaned = modules
    .filter((item) => !item.startsWith("目录模块"))
    .map((item) => item.replace(/^代码中出现/, ""))
    .filter(Boolean);
  const result = [...cleaned, ...stack].slice(0, 8);
  if (result.length) return result;

  const fallback = [];
  if (/采集|scrape|crawler|商品|评论|review/i.test(source)) fallback.push("数据采集模块：负责进入目标页面、识别列表或详情内容，并形成可处理的数据来源。");
  if (/登录|auth|cookie|token|session/i.test(source)) fallback.push("登录状态模块：负责处理账号、Cookie、Token 或会话状态，保证采集流程可继续。");
  if (/ocr|图片|截图|image/i.test(source)) fallback.push("图像识别模块：负责从截图、价格图或页面图片中提取关键字段。");
  if (/excel|xlsx|csv|导出/i.test(source)) fallback.push("表格导出模块：负责把采集结果整理成 CSV、Excel 或可交付表格。");
  if (/api|server|FastAPI|Express|接口/i.test(source)) fallback.push("接口服务模块：负责封装后端接口、任务状态和前后端通信。");
  if (/sqlite|database|jsonl|日志|队列/i.test(source)) fallback.push("数据记录模块：负责保存任务状态、日志、队列或结构化结果。");
  if (/展示|落地页|portfolio|showcase/i.test(source)) fallback.push("资料结构化模块：负责把原始资料整理成可理解、可复查、可交付的项目内容。");
  return fallback.length ? fallback : ["项目资料不足，技术模块需要补充 README、入口文件或流程截图后继续分析。"];
}

function buildEvidenceInsights(evidence, source) {
  const cleaned = evidence
    .map((item) => cleanDisplayText(item))
    .filter((item) => item && !/Review\s*\d+\s*;?\s*Review/i.test(item))
    .map((item) => {
      if (/README/i.test(item)) return "README 说明了项目目标、运行方式和主要功能边界。";
      if (/API|接口|route|server|FastAPI|Express/i.test(item)) return "接口或服务端文件证明项目具备可调用、可封装的后端能力。";
      if (/ARCHITECTURE|架构/i.test(item)) return "架构文档证明项目有模块分层和工程边界设计。";
      if (/ERROR|错误|日志|log/i.test(item)) return "错误码、日志或运行记录证明项目考虑了失败定位和可复盘性。";
      if (/review|评论|rating|星级|amazon/i.test(item)) return "采集结果文件证明项目已经围绕评论、评分或商品反馈形成数据输出。";
      return item;
    });
  const unique = [...new Set(cleaned)].slice(0, 6);
  if (unique.length) return unique;
  if (/评论|review|amazon/i.test(source)) {
    return ["README 和采集结果证明项目围绕 Amazon 评论数据形成了从页面到文本文件的输出链路。"];
  }
  return ["README、入口文件、接口文件和运行记录可作为项目证据。"];
}

function buildSellableModules(name, source, technicalModules) {
  const modules = [];
  if (/评论|review|amazon/i.test(source)) {
    modules.push("评论采集流程拆解文档", "商品评论数据整理模板", "Amazon 评论分析案例包");
  }
  if (/采集|scrape|crawler|商品/i.test(source)) {
    modules.push("采集任务执行清单", "异常页面处理手册", "结构化导出模板");
  }
  if (/API|server|FastAPI|Express|接口/i.test(source)) modules.push("接口封装与部署说明");
  if (/截图|OCR|image/i.test(source)) modules.push("截图证据与识别校验说明");
  modules.push(`${name} 项目复盘稿`, "落地页与简历表达文案");
  return [...new Set(modules)].slice(0, Math.max(6, Math.min(8, technicalModules.length + 2)));
}

function legacyBuildContentInsights(profile, source) {
  const name = profile.projectName || "项目";
  const modules = profile.technicalModules || [];
  const workflow = buildExpandedWorkflow(profile, source);
  const proof = profile.evidenceFiles || [];
  const value = inferCoreValue(profile, source);
  const target = (profile.targetUsers || ["项目使用者"]).slice(0, 3).join("、");
  const firstModule = modules[0] || "项目资料分析与内容生成模块";
  const secondModule = modules[1] || "结构化结果输出模块";
  const firstProof = proof[0] || "README、入口文件和运行结果提供基础证据";

  return {
    landingText: `${name} 面向${target}，把${shortText(profile.coreProblem, 62)}转化为一套可执行、可复盘、可展示的工作流。项目价值不只是完成一次任务，而是把${value}沉淀成可交付的项目资产。`,
    landingBullets: [
      `问题聚焦：${shortText(profile.coreProblem, 86)}`,
      `流程闭环：${workflow.slice(0, 5).join(" -> ")}`,
      `能力证明：${cleanDisplayText(firstModule)}；${cleanDisplayText(secondModule)}`,
      `证据支撑：${cleanDisplayText(firstProof)}`,
      `展示价值：可转化为作品详情、流程图、简历项目表达和售卖模块。`
    ],
    brief: `我围绕“${name}”完成了一个${profile.positioning}。项目从真实业务场景出发，先识别用户要解决的数据、页面或交付问题，再把任务拆成输入、执行、校验、沉淀和展示几个环节。它适合展示我对业务流程、工程边界、证据链和项目包装的理解。`,
    promo: [
      `问题开场：${shortText(profile.coreProblem, 90)}`,
      `方法设计：先定义输入和目标，再拆出${workflow.slice(0, 4).join("、")}等关键步骤，避免把项目讲成零散脚本。`,
      `能力展示：${modules.slice(0, 3).map(cleanDisplayText).join("；")}。`,
      `证据支撑：${proof.slice(0, 3).map(cleanDisplayText).join("；")}。`,
      `结果转化：${name} 可以沉淀为项目案例、交付说明、流程图、复盘文档和可售卖模板。`
    ],
    deliverables: profile.sellableModules?.length ? profile.sellableModules : buildSellableModules(name, source, modules),
    price: /API|部署|自动化|采集|评论|review|amazon/i.test(source) ? "¥499" : "¥299"
  };
}

function inferCoreValue(profile, source) {
  if (/Reddit RAG|Reddit 数据采集|Reddit Workflow/i.test(String(profile?.projectName || ""))) {
    return "Reddit 帖子与评论采集、人工审核、RAG 知识块生成、检索测试和失败回归能力";
  }
  if (isSelectionAgentSource(source)) return "选品数据汇总、供应商线索整理、商品机会判断和智能体辅助决策能力";
  if (/评论|review|amazon/i.test(source)) return "评论数据采集、文本整理、星级分类和结果交付能力";
  if (/采集|商品|sku|价格|excel/i.test(source)) return "页面采集、结构化整理和表格交付能力";
  if (/展示|落地页|简历|作品集/i.test(source)) return "项目表达、作品展示和商业化包装能力";
  return shortText(profile.positioning || "项目方法和工程经验", 36);
}

function legacyBuildExpandedWorkflow(profile, source) {
  const base = (profile.workflow || []).map(cleanDisplayText).filter(Boolean);
  const extra = [];
  if (/登录|auth|cookie|token|session/i.test(source)) extra.push("确认登录与会话状态");
  if (/amazon|商品|店铺|页面|url/i.test(source)) extra.push("进入目标商品或页面");
  if (/评论|review|rating|星级/i.test(source)) extra.push("采集评论、评分和文本内容");
  if (/翻页|pagination|scroll|下一页/i.test(source)) extra.push("处理翻页或滚动加载");
  if (/清洗|去重|结构化|整理/i.test(source)) extra.push("清洗去重并结构化整理");
  if (/md|markdown|csv|excel|xlsx|导出|下载/i.test(source)) extra.push("导出 Markdown、CSV 或 Excel 结果");
  extra.push("沉淀证据与项目复盘", "生成展示与售卖内容");
  return [...new Set([...base, ...extra])].slice(0, 9);
}

function cleanDisplayText(text) {
  return String(text || "")
    .replace(/^[A-Za-z]:\\[^\s:：]+[:：]?\s*/g, "")
    .replace(/[A-Za-z0-9_-]+\\[A-Za-z0-9_\\.-]+[:：]?\s*/g, "")
    .replace(/\s*->\s*/g, "，")
    .replace(/Review\s*\d+;?\s*/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

function shortText(text, maxLength = 80) {
  const cleaned = cleanDisplayText(text);
  return cleaned.length > maxLength ? `${cleaned.slice(0, maxLength)}...` : cleaned;
}

function inferProjectType(source, stack, projectPath = "") {
  if (isRedditProjectIdentity("", source, projectPath)) {
    return "Reddit 数据采集与 RAG 训练控制台";
  }
  if (isSelectionAgentSource(source)) {
    return "跨境电商选品智能体平台";
  }
  if (/爬虫|采集|scraper|crawler|商品|选品|1688|amazon|takealot/i.test(source)) {
    return "电商/数据采集与分析工具";
  }
  if (/简历|作品集|portfolio|落地页|宣传|售价|售卖/i.test(source)) {
    return "个人项目展示与内容产品化系统";
  }
  if (/agent|workflow|自动化|任务|调度/i.test(source)) {
    return "自动化工作流工具";
  }
  if (stack.some((item) => /React|Vue|Next|Vite|静态网页/.test(item))) {
    return "前端交互应用";
  }
  if (stack.some((item) => /Node|Express|后端/.test(item))) {
    return "后端服务型项目";
  }
  return "项目资产整理工具";
}

function isSelectionAgentSource(source) {
  return /选品|選品|selection|跨境|1688|Amazon|amazon|agent|智能体|控制台|商品池|供应商|利润|竞品/i.test(String(source || ""));
}

function buildProjectReviewFacts(profile, source) {
  const text = String(source || "");
  const name = profile.projectName || titleInput.value.trim() || "待补充";
  const isSelection = /选品|selection|类目|跨境|1688|Amazon|amazon|智能体|控制台|供应商|利润|竞品/i.test(text);
  const isPdd = /PDD|店铺|SKU|OCR|价格|Excel|商品列表/i.test(text);
  const isReview = /review|评论|星级|rating|Amazon/i.test(text) && !isSelection;
  const workflow = (profile.workflow || []).filter(Boolean);
  const modules = (profile.technicalModules || []).filter(Boolean);
  const evidence = (profile.evidenceFiles || []).filter(Boolean);
  const users = (profile.targetUsers || []).filter(Boolean);
  const facts = {
    name,
    targetUsers: users.length ? users : ["待补充"],
    scenario: "待补充",
    originalProblem: profile.coreProblem || "待补充",
    oldFlowDefect: "待补充",
    systemChange: "待补充",
    modules: modules.length ? modules : ["待补充"],
    inputs: ["待补充"],
    outputs: ["待补充"],
    evidence: evidence.length ? evidence : ["待补充"],
    exceptionHandling: ["待补充"],
    manualConfirmation: ["待补充"],
    reusableValue: ["待补充"],
    boundary: ["待补充"],
    workflow: workflow.length ? workflow : ["待补充"],
    keywords: ["任务编排", "状态记录", "结果导出"]
  };
  if (isSelection) {
    facts.scenario = "跨境电商选品任务中，需要按站点、类目、输入文件和任务步骤执行商品/供应商线索整理。";
    facts.oldFlowDefect = "旧流程依赖人工选择类目后单独运行脚本，任务范围容易被误读，执行状态、失败样本和输出文件分散在目录与日志中。";
    facts.systemChange = "前端任务控制台 + 后端任务接口 + selection service 运维层组成的本地选品工作流";
    facts.inputs = ["站点与目标网站", "一级/二级/三级类目选择", "Excel 链接表格", "任务参数", "类目选择规则"];
    facts.outputs = ["Excel 或 Markdown 结果文件", "任务进度与日志", "失败项重跑记录", "可下载交付物", "运维诊断结果"];
    facts.exceptionHandling = ["暂停任务", "停止任务", "断点续跑", "失败商品单独重跑", "一键排障"];
    facts.manualConfirmation = ["登录或会话状态确认", "类目范围确认", "异常步骤人工处理", "输出结果复查"];
    facts.reusableValue = ["类目边界规则", "任务控制台交互模式", "队列/日志/审计封装", "选品报告交付模板"];
    facts.boundary = ["不替代平台规则判断", "不自动扩展用户未选择的类目", "敏感接口需要本地 token", "采集结果需人工复核后交付"];
    facts.keywords = ["类目边界", "任务编排", "断点续跑", "失败重跑", "结果导出"];
  } else if (isPdd) {
    facts.scenario = "电商运营需要从店铺页面获得商品列表、详情 SKU、价格图像和表格交付结果。";
    facts.oldFlowDefect = "旧流程多是一次性脚本，登录状态、页面弹层、价格图像识别和 Excel 输出失败后缺少可复查记录。";
    facts.systemChange = "可显示步骤状态、保留证据截图、支持人工校验和 Excel 模板导出的采集工作台";
    facts.inputs = ["店铺页面", "商品列表", "商品详情页", "SKU 信息", "价格截图"];
    facts.outputs = ["商品采集表", "SKU 结构化结果", "OCR 识别记录", "Excel 模板", "任务状态与异常记录"];
    facts.exceptionHandling = ["登录确认", "弹层处理", "OCR 失败保留截图", "人工价格校验", "失败步骤留痕"];
    facts.manualConfirmation = ["登录状态确认", "价格 OCR 复核", "异常商品人工校验"];
    facts.reusableValue = ["页面采集流程", "OCR 校验方法", "Excel 交付模板", "异常处理清单"];
    facts.boundary = ["页面结构变化需复核选择器", "OCR 结果不能直接作为最终价格", "账号登录状态需要人工维护"];
    facts.keywords = ["商品采集", "SKU 解析", "OCR", "Excel 导出", "异常留痕"];
  } else if (isReview) {
    facts.scenario = "运营或数据分析人员需要把 Amazon 评论、星级和文本反馈整理成可分析的数据资料。";
    facts.oldFlowDefect = "旧流程依赖逐页复制评论，星级、文本、商品链接和异常页面分散，难以形成可复查数据集。";
    facts.systemChange = "按商品链接采集、按星级分类、输出 Markdown/表格并保留失败样本的评论整理流程";
    facts.inputs = ["Amazon 商品链接", "评论页面", "星级筛选条件", "运行日志"];
    facts.outputs = ["评论文本文件", "星级分类结果", "失败样本记录", "可复盘采集说明"];
    facts.exceptionHandling = ["页面加载失败记录", "空评论页标记", "重复评论过滤", "失败链接重跑"];
    facts.manualConfirmation = ["商品链接确认", "异常页面复查", "样本质量审核"];
    facts.reusableValue = ["评论采集模板", "星级分类方法", "失败样本池", "文本分析数据源"];
    facts.boundary = ["不保证平台页面结构长期稳定", "评论质量需人工抽查", "采集范围受目标页面可访问性影响"];
    facts.keywords = ["评论采集", "星级分类", "文本整理", "失败样本", "Markdown 输出"];
  }
  return facts;
}

function sentenceLimit(text, max = 170) {
  const value = String(text || "待补充").replace(/\s+/g, " ").trim();
  return value.length > max ? `${value.slice(0, max)}...` : value;
}

function buildStructuredPromotion(facts, positioning, summary) {
  const evidence = (facts.evidence || []).filter(Boolean).slice(0, 4);
  const compactLabel = (value, fallback) => sentenceLimit(value || fallback, 18).replace(/[：:。；，,].*$/, "");
  const objectName = compactLabel((facts.keywords || facts.modules || []).find(Boolean), "业务对象");
  const inputName = compactLabel((facts.inputs || []).find(Boolean), "业务资料");
  const outputName = compactLabel((facts.outputs || []).find(Boolean), "结构化结果");
  const exceptionName = compactLabel((facts.exceptionHandling || []).find(Boolean), "异常节点");
  const targetName = compactLabel((facts.targetUsers || []).find(Boolean), "业务人员");
  const coreAdvantages = [
    {
      title: `${objectName}流程可执行化`,
      statement: facts.systemChange,
      evidence: evidence.slice(0, 2)
    },
    {
      title: `${exceptionName}可控处理`,
      statement: (facts.manualConfirmation || []).slice(0, 3).join("；") || "关键异常先暂停并交由人工确认。",
      evidence: evidence.slice(1, 3)
    },
    {
      title: `${outputName}复查交付`,
      statement: (facts.outputs || []).slice(0, 3).join("、") || "输出可复查的业务结果。",
      evidence: evidence.slice(2, 4)
    }
  ];
  return {
    oneLine: sentenceLimit(positioning, 190),
    flow: [
      { label: `${inputName}进入`, value: (facts.inputs || []).slice(0, 2).join("、") || positioning },
      { label: `${objectName}处理`, value: facts.systemChange || "按项目流程处理业务对象" },
      { label: `${exceptionName}确认`, value: (facts.manualConfirmation || []).slice(0, 2).join("、") || "关键节点由人工确认" },
      { label: `${outputName}交付`, value: (facts.outputs || []).slice(0, 2).join("、") || "形成结构化交付结果" },
      { label: `${targetName}下一步`, value: `先用真实${inputName}验证字段、异常和交付边界` }
    ],
    sectionTitles: {
      lead: `${objectName}价值主线`,
      advantages: `${objectName}核心能力`,
      scenarios: `${targetName}使用场景`,
      differentiation: `原流程到${objectName}的差异`,
      copy: `${objectName}交付文案`,
      trust: `${objectName}证据边界`
    },
    coreAdvantages,
    scenarios: (facts.workflow || []).slice(0, 4),
    differentiation: (facts.reusableValue || []).slice(0, 4),
    shortCopy: sentenceLimit(summary, 220),
    longCopy: `${positioning} 使用场景包括${(facts.targetUsers || []).slice(0, 2).join("、") || "目标业务人员"}；系统通过${(facts.modules || []).slice(0, 3).join("、") || "流程、证据与结果整理"}支撑落地，并保留${(facts.boundary || []).slice(0, 2).join("；") || "真实运行结果仍需核验"}。`,
    callToAction: `先用一批真实${inputName}做字段、异常和交付诊断，再决定标准交付或定制部署。`,
    evidenceBoundary: (facts.boundary || []).slice(0, 3)
  };
}

function normalizePromotionEntries(value) {
  return (Array.isArray(value) ? value : [])
    .map((item) => {
      if (typeof item === "string") {
        return { title: "", statement: item.trim(), evidence: [] };
      }
      if (!item || typeof item !== "object") return null;
      const evidence = Array.isArray(item.evidence)
        ? item.evidence.map((entry) => String(entry || "").trim()).filter(Boolean)
        : item.evidence
          ? [String(item.evidence).trim()]
          : [];
      return {
        title: String(item.title || item.label || "").trim(),
        statement: String(item.statement || item.text || item.description || item.value || "").trim(),
        evidence
      };
    })
    .filter((item) => item && (item.title || item.statement));
}

function parseLegacyPromotion(lines) {
  const parsed = {
    oneLine: "",
    coreAdvantages: [],
    scenarios: [],
    differentiation: [],
    shortCopy: "",
    longCopy: "",
    callToAction: "",
    evidenceBoundary: [],
    unclassified: []
  };
  const values = (Array.isArray(lines) ? lines : []).map((line) => String(line || "").trim()).filter(Boolean);

  values.forEach((rawLine) => {
    const line = rawLine.replace(/^\d+[.)、]\s*/, "").trim();
    const labeled = line.match(/^(AI|A\d+|S\d+|D\d+|E\d+)\s*[.．:：、-]\s*(.+)$/i);
    if (labeled) {
      const rawLabel = labeled[1].toUpperCase();
      const body = labeled[2].trim();
      if (rawLabel === "S" || rawLabel.startsWith("S")) {
        parsed.scenarios.push(body);
      } else if (rawLabel === "D" || rawLabel.startsWith("D")) {
        parsed.differentiation.push(body);
      } else if (rawLabel === "E" || rawLabel.startsWith("E")) {
        parsed.evidenceBoundary.push(body);
      } else {
        const label = rawLabel === "AI" ? `A${parsed.coreAdvantages.length + 1}` : rawLabel;
        parsed.coreAdvantages.push({ title: `核心优势 ${label}`, statement: body, evidence: [] });
      }
      return;
    }

    let match = line.match(/^(?:主线|传播主线|一句话卖点|项目定位)\s*[:：]\s*(.+)$/);
    if (match) {
      parsed.oneLine = match[1].trim();
      return;
    }
    match = line.match(/^(?:短版文案|短文案)\s*[:：]\s*(.+)$/);
    if (match) {
      parsed.shortCopy = match[1].trim();
      return;
    }
    match = line.match(/^(?:长版文案|长文案)\s*[:：]\s*(.+)$/);
    if (match) {
      parsed.longCopy = match[1].trim();
      return;
    }
    match = line.match(/^(?:行动号召|行动建议|下一步)\s*[:：]\s*(.+)$/);
    if (match) {
      parsed.callToAction = match[1].trim();
      return;
    }
    match = line.match(/^(?:使用场景|场景)\s*[:：]\s*(.+)$/);
    if (match) {
      parsed.scenarios.push(match[1].trim());
      return;
    }
    match = line.match(/^(?:差异化|差异|复用价值)\s*[:：]\s*(.+)$/);
    if (match) {
      parsed.differentiation.push(match[1].trim());
      return;
    }
    match = line.match(/^(?:证据|依据|边界|待验证)\s*[:：]\s*(.+)$/);
    if (match) {
      parsed.evidenceBoundary.push(match[1].trim());
      return;
    }
    parsed.unclassified.push(line);
  });

  if (!parsed.oneLine && parsed.unclassified.length) {
    parsed.oneLine = parsed.unclassified[0];
  }
  if (!parsed.coreAdvantages.length && parsed.unclassified.length > 1) {
    parsed.coreAdvantages = parsed.unclassified.slice(1, 4).map((statement, index) => ({
      title: `核心优势 ${index + 1}`,
      statement,
      evidence: []
    }));
  }
  return parsed;
}

function normalizePromotionStructure(result) {
  const raw = result?.promoStructure && typeof result.promoStructure === "object" ? result.promoStructure : {};
  const legacy = parseLegacyPromotion(result?.promo || []);
  const fallback = result?.projectProfile
    ? buildContentInsights(result.projectProfile, sourceInput?.value || "").promoStructure
    : {};
  const listOfText = (value, backup = []) => {
    const values = (Array.isArray(value) ? value : []).map((item) => {
      if (typeof item === "string") return item.trim();
      return String(item?.statement || item?.text || item?.description || item?.value || "").trim();
    }).filter(Boolean);
    return values.length ? values : backup;
  };
  const coreAdvantages = normalizePromotionEntries(raw.coreAdvantages);
  const fallbackAdvantages = normalizePromotionEntries(fallback.coreAdvantages);
  const normalizeFlow = (value, backup = []) => {
    const items = (Array.isArray(value) ? value : []).map((item) => ({
      label: String(item?.label || item?.title || "").trim(),
      value: String(item?.value || item?.statement || item?.text || "").trim()
    })).filter((item) => item.label && item.value);
    return (items.length ? items : backup).slice(0, 7);
  };
  const fallbackFlow = normalizeFlow(fallback.flow);
  const rawTitles = raw.sectionTitles && typeof raw.sectionTitles === "object" ? raw.sectionTitles : {};
  const fallbackTitles = fallback.sectionTitles && typeof fallback.sectionTitles === "object" ? fallback.sectionTitles : {};
  return {
    oneLine: String(raw.oneLine || legacy.oneLine || fallback.oneLine || "待补充").trim(),
    flow: normalizeFlow(raw.flow, fallbackFlow),
    sectionTitles: {
      lead: String(rawTitles.lead || fallbackTitles.lead || "传播主线 · 一句话卖点").trim(),
      advantages: String(rawTitles.advantages || fallbackTitles.advantages || "证明层 · 核心优势").trim(),
      scenarios: String(rawTitles.scenarios || fallbackTitles.scenarios || "使用层 · 使用场景").trim(),
      differentiation: String(rawTitles.differentiation || fallbackTitles.differentiation || "比较层 · 差异化").trim(),
      copy: String(rawTitles.copy || fallbackTitles.copy || "转化层 · 宣传文案").trim(),
      trust: String(rawTitles.trust || fallbackTitles.trust || "可信度层 · 证据与边界").trim()
    },
    coreAdvantages: coreAdvantages.length
      ? coreAdvantages.slice(0, 5)
      : (legacy.coreAdvantages.length ? legacy.coreAdvantages : fallbackAdvantages).slice(0, 5),
    scenarios: listOfText(raw.scenarios, legacy.scenarios.length ? legacy.scenarios : listOfText(fallback.scenarios)).slice(0, 5),
    differentiation: listOfText(raw.differentiation, legacy.differentiation.length ? legacy.differentiation : listOfText(fallback.differentiation)).slice(0, 3),
    shortCopy: String(raw.shortCopy || legacy.shortCopy || fallback.shortCopy || "待补充").trim(),
    longCopy: String(raw.longCopy || legacy.longCopy || fallback.longCopy || "待补充").trim(),
    callToAction: String(raw.callToAction || legacy.callToAction || fallback.callToAction || "先用一批真实资料做一次字段、异常和交付诊断。").trim(),
    evidenceBoundary: listOfText(raw.evidenceBoundary, legacy.evidenceBoundary.length ? legacy.evidenceBoundary : listOfText(fallback.evidenceBoundary)).slice(0, 5)
  };
}

function renderPromotionStructure(result) {
  const structure = normalizePromotionStructure(result);
  result.promoStructure = structure;
  const profile = result.projectProfile || {};
  const advantages = structure.coreAdvantages || [];
  const scenarios = structure.scenarios || [];
  const differentiation = structure.differentiation || [];
  const boundary = structure.evidenceBoundary || [];
  const flow = structure.flow.length ? structure.flow : [
    { label: "项目问题", value: profile.coreProblem || structure.oneLine || "高频业务流程难以复核" },
    { label: "核心动作", value: advantages[0]?.statement || advantages[0]?.title || "把问题拆成可执行步骤" },
    { label: "交付结果", value: scenarios[0] || structure.shortCopy || "形成可复查的交付结果" },
    { label: "证据边界", value: boundary[0] || "证据与验证边界单独呈现" },
    { label: "下一步", value: structure.callToAction || "先用真实资料做一次诊断" }
  ];
  const flowNode = flow.map((step, index) => `<div class="promo-flow-step"><span class="promo-flow-index">0${index + 1}</span><strong>${escapeHtml(step.label)}</strong><p>${escapeHtml(sentenceLimit(step.value, 72))}</p></div>`).join("");
  const promoFlow = document.querySelector("#promoFlow");
  if (promoFlow) promoFlow.innerHTML = flowNode;

  const itemMarkup = (label, title, statement, evidence = "") => `<p class="promo-item"><strong data-promo-title="${escapeHtml(title)}">${escapeHtml(label)} ${escapeHtml(title)}</strong><span data-promo-statement>${escapeHtml(statement || "待补充")}</span>${evidence ? `<small data-promo-evidence>依据：${escapeHtml(evidence)}</small>` : ""}</p>`;
  const advantageMarkup = advantages.length
    ? advantages.map((item, index) => itemMarkup(`A${index + 1}`, item.title || "核心优势", item.statement, (item.evidence || []).join("；"))).join("")
    : `<p class="promo-empty">待补充核心优势与对应依据。</p>`;
  const scenarioMarkup = scenarios.length
    ? scenarios.map((item, index) => itemMarkup(`S${index + 1}`, "使用场景", item)).join("")
    : `<p class="promo-empty">待补充使用场景。</p>`;
  const differentiationMarkup = differentiation.length
    ? differentiation.map((item, index) => itemMarkup(`D${index + 1}`, "差异化", item)).join("")
    : `<p class="promo-empty">待补充对比对象与差异化判断。</p>`;
  const evidenceMarkup = boundary.length
    ? boundary.map((item, index) => itemMarkup(`E${index + 1}`, "证据与边界", item)).join("")
    : `<p class="promo-empty">待补充证据来源、验证状态或尚未量化的边界。</p>`;
  const list = document.querySelector("#promoList");
  if (!list) return;
  list.innerHTML = [
    `<li class="promo-section" data-promo-section="lead"><div class="promo-section-heading"><span>01</span><h4>${escapeHtml(structure.sectionTitles.lead)}</h4></div><p class="promo-section-body" data-promo-lead>${escapeHtml(structure.oneLine)}</p></li>`,
    `<li class="promo-section" data-promo-section="advantages"><div class="promo-section-heading"><span>02</span><h4>${escapeHtml(structure.sectionTitles.advantages)}</h4></div>${advantageMarkup}</li>`,
    `<li class="promo-section" data-promo-section="scenarios"><div class="promo-section-heading"><span>03</span><h4>${escapeHtml(structure.sectionTitles.scenarios)}</h4></div>${scenarioMarkup}</li>`,
    `<li class="promo-section" data-promo-section="differentiation"><div class="promo-section-heading"><span>04</span><h4>${escapeHtml(structure.sectionTitles.differentiation)}</h4></div>${differentiationMarkup}</li>`,
    `<li class="promo-section" data-promo-section="copy"><div class="promo-section-heading"><span>05</span><h4>${escapeHtml(structure.sectionTitles.copy)}</h4></div><p class="promo-copy-block" data-copy-kind="short"><strong>短版文案</strong><span data-copy-value>${escapeHtml(structure.shortCopy)}</span></p><p class="promo-copy-block" data-copy-kind="long"><strong>长版文案</strong><span data-copy-value>${escapeHtml(structure.longCopy)}</span></p><p class="promo-copy-block" data-copy-kind="cta"><strong>行动号召</strong><span data-copy-value>${escapeHtml(structure.callToAction)}</span></p></li>`,
    `<li class="promo-section promo-boundary" data-promo-section="trust"><div class="promo-section-heading"><span>06</span><h4>${escapeHtml(structure.sectionTitles.trust)}</h4></div>${evidenceMarkup}</li>`
  ].join("");
}

function readPromotionStructureFromDom() {
  const section = (name) => document.querySelector(`#promoList [data-promo-section="${name}"]`);
  const readItems = (name) => Array.from(section(name)?.querySelectorAll(".promo-item") || []).map((item) => ({
    title: item.querySelector("[data-promo-title]")?.textContent.trim().replace(/^\w+\s+/, "") || "",
    statement: item.querySelector("[data-promo-statement]")?.textContent.trim() || "",
    evidence: item.querySelector("[data-promo-evidence]")?.textContent.trim().replace(/^依据：\s*/, "") ? [item.querySelector("[data-promo-evidence]").textContent.trim().replace(/^依据：\s*/, "")] : []
  })).filter((item) => item.statement);
  const readCopy = (kind) => section("copy")?.querySelector(`[data-copy-kind="${kind}"] [data-copy-value]`)?.textContent.trim() || "";
  const readFlow = Array.from(document.querySelectorAll("#promoFlow .promo-flow-step")).map((item) => ({
    label: item.querySelector("strong")?.textContent.trim() || "",
    value: item.querySelector("p")?.textContent.trim() || ""
  })).filter((item) => item.label && item.value);
  const readSectionTitle = (name) => section(name)?.querySelector(".promo-section-heading h4")?.textContent.trim() || "";
  return {
    oneLine: section("lead")?.querySelector("[data-promo-lead]")?.textContent.trim() || "",
    flow: readFlow,
    sectionTitles: {
      lead: readSectionTitle("lead"),
      advantages: readSectionTitle("advantages"),
      scenarios: readSectionTitle("scenarios"),
      differentiation: readSectionTitle("differentiation"),
      copy: readSectionTitle("copy"),
      trust: readSectionTitle("trust")
    },
    coreAdvantages: readItems("advantages"),
    scenarios: readItems("scenarios").map((item) => item.statement),
    differentiation: readItems("differentiation").map((item) => item.statement),
    shortCopy: readCopy("short"),
    longCopy: readCopy("long"),
    callToAction: readCopy("cta"),
    evidenceBoundary: readItems("trust").map((item) => item.statement)
  };
}

function buildContentInsights(profile, source, projectPath = "") {
  const facts = buildProjectReviewFacts(profile, source);
  const isRedditRag = isRedditProjectIdentity(profile?.projectName || facts.name, source, projectPath);
  const target = facts.targetUsers.slice(0, 2).join("、");
  const flow = facts.workflow.slice(0, 4).join(" → ");
  const outputs = facts.outputs.slice(0, 3).join("、");
  const modules = facts.modules.slice(0, 3).join("；");
  const positioning = `${facts.name}把${facts.oldFlowDefect}升级为${facts.systemChange}。`;
  const summary = sentenceLimit(`${target}使用这个项目处理${facts.scenario}核心流程是${flow}；关键能力包括${modules}；最终沉淀${outputs}。`, 180);
  const promoStructure = buildStructuredPromotion(facts, positioning, summary);
  return {
    landingText: positioning,
    landingBullets: [
      `原始问题：${facts.originalProblem}`,
      `旧流程缺陷：${facts.oldFlowDefect}`,
      `改造方式：${facts.systemChange}`,
      `输出结果：${outputs}`,
      `可验证证据：${facts.evidence.slice(0, 3).join("；")}`
    ],
    brief: summary,
    promo: [
      `项目定位：${positioning}`,
      `业务痛点：${facts.oldFlowDefect}`,
      `核心流程：${flow}`,
      `异常处理：${facts.exceptionHandling.slice(0, 4).join("；")}`,
      `交付结果：${outputs}`
    ],
    promoStructure,
    deliverables: facts.outputs.concat(facts.reusableValue).filter(Boolean).slice(0, 8),
    price: isRedditRag
      ? "¥3,999（知识库原型）"
      : /PDD|店铺|SKU|商品|OCR|Excel|采集/i.test(source)
      ? "¥1,999（标准交付）"
      : /selection service|selection_service|FastAPI|队列|审计|断点续跑|失败重跑/i.test(source)
        ? "¥1,999（标准交付）"
        : "¥499（体验诊断）",
    card: {
      tag: facts.keywords[0] || "AI Workflow",
      title: facts.name.length > 22 ? facts.name.slice(0, 22) : facts.name,
      oneLine: positioning,
      summary,
      keywords: facts.keywords
    }
  };
}

function buildCommercializationPlan(name, source = "", profile = {}, insights = {}, projectPath = "") {
  const text = `${name}\n${source}`;
  const projectIdentity = normalizeProjectPath(projectPath || profile?.projectPath || "");
  const isRedditRag = isRedditProjectPath(projectIdentity) || (!projectIdentity && isRedditProjectIdentity(name, source));
  const isPdd = /(?:^|\\)pdd(?:\\|$)/i.test(projectIdentity) || (!isRedditRag && /PDD|店铺|SKU|商品|OCR|Excel|采集/i.test(text));
  const targetCustomers = (Array.isArray(profile.targetUsers) ? profile.targetUsers : [])
    .filter(Boolean)
    .slice(0, 3);
  const defaultCustomers = isPdd
    ? [
        "中小跨境电商团队：每周需要整理店铺或商品资料",
        "选品/采购服务商：需要批量交付标准化表格",
        "运营自动化团队：需要复用工作台和异常处理模板"
      ]
    : isRedditRag
      ? [
          "有社区、论坛或知识库内容需要持续整理的内容团队",
          "需要内部知识检索、问答和资料复用的业务团队",
          "需要评测 RAG 命中质量并控制模型调用成本的 AI 产品团队"
        ]
    : [
        "需要把项目经验转成可交付结果的个人或小团队",
        "需要流程模板、部署支持或自动化咨询的业务团队",
        "需要把已有工具包装成产品服务的独立开发者"
      ];
  return {
    pricingVersion: "project-fit-v2",
    recommendedPrice: insights.price || (isPdd ? "¥1,999（标准交付）" : isRedditRag ? "¥3,999（知识库原型）" : "¥499（体验诊断）"),
    promise: isRedditRag
      ? "先用可追踪的检索结果证明命中质量，再销售知识库部署、评测和持续优化。"
      : "先卖可交付结果，再把高频能力标准化为模板、部署和维护。",
    basis: isRedditRag
      ? "成本测算口径：按数据源数量、文档清洗量、模型/API 调用、向量存储、部署和人工评测估算，不是实测账单。"
      : "成本测算口径：内部估算范围，不是实测账单；首批 3–5 单后按 AI/API、算力和人工分钟数复盘。",
    strategy: isPdd
      ? "先用诊断和标准交付切入，证明节省的返工与交付时间，再销售本地部署、按量执行和维护服务。"
      : isRedditRag
        ? "先以单一数据源和少量问题集验证召回、引用和人工复核，再扩展多源接入、部署和持续评测。"
        : "先把项目拆成低门槛诊断和标准交付，再将高频部分沉淀为模板、部署或维护服务。",
    pricingModel: isRedditRag
      ? "知识库诊断/原型费 + RAG 部署交付费 + 数据刷新、评测和模型调用费；不把 Token 成本单独包装成客户价值。"
      : "一次性诊断/模板费 + 项目交付费 + 按量执行/维护费；不按 Token 直接向客户报价。",
    monetization: isRedditRag
      ? [
          "知识库诊断费：明确数据源、文档量、问题集和检索质量验收口径。",
          "知识库原型费：交付清洗、切分、索引、检索和引用结果的可复查样例。",
          "部署交付费：按数据源数量、权限、模型接入、评测集和部署环境复杂度加价。",
          "持续优化费：覆盖数据刷新、命中率评测、提示词/模型调整和成本监控。"
        ]
      : [
          "一次性诊断费：明确输入、字段、异常和交付边界，降低首次购买门槛。",
          "标准交付费：交付可运行流程、模板、质量闸门和使用说明，按结果收费。",
          "定制部署费：按字段适配、部署、培训和团队协作复杂度加价。",
          "维护/按量费：持续处理页面变化、异常复核、模板小改和月度复盘。"
        ],
    targetCustomers: targetCustomers.length ? [...targetCustomers, ...defaultCustomers].slice(0, 3) : defaultCustomers,
    paidPoints: isRedditRag
      ? [
          "减少社区资料筛选、文档整理、重复检索和知识复用成本，不是购买一个聊天框。",
          "检索结果保留来源和人工复核入口，降低错误答案直接进入业务决策的风险。",
          "交付问题集、评测口径和数据刷新规则，让团队可以持续判断质量和成本。"
        ]
      : [
          "减少页面定位、SKU 整理、价格复核和 Excel 返工，不是购买一段源码。",
          "异常可以暂停、复核和重跑，降低错误数据直接进入交付表的风险。",
          "交付模板、证据链和培训，让客户团队能继续使用，而不是一次性黑盒服务。"
        ],
    tiers: isRedditRag
      ? [
          {
            name: "检索诊断",
            price: "¥799",
            audience: "首次验证数据源和检索质量的团队",
            deliverable: "1 个数据源盘点 + 10–20 个问题集 + 命中/引用问题清单",
            economics: "直接成本 ¥150–350；目标毛利 56%–81%"
          },
          {
            name: "知识库原型",
            price: "¥3,999",
            audience: "需要把一类资料变成可检索知识库的团队",
            deliverable: "清洗切分 + 索引检索 + 引用结果 + 基础评测报告",
            economics: "直接成本 ¥900–1,800；目标毛利 55%–77%"
          },
          {
            name: "部署交付",
            price: "¥8,999 起",
            audience: "需要多数据源、权限和内部部署的业务团队",
            deliverable: "多源接入 + RAG 检索 + 评测集 + 部署说明 + 30 天优化",
            economics: "直接成本 ¥2,500–4,500；目标毛利 50%–72%"
          },
          {
            name: "持续评测",
            price: "¥1,499/月 + 用量",
            audience: "需要持续刷新资料并监控命中质量的团队",
            deliverable: "数据刷新 + 问题集回归 + 命中质量复核 + 模型成本月报",
            economics: "直接成本 ¥500–900/月；目标毛利 40%–67%"
          }
        ]
      : [
      {
        name: "体验诊断",
        price: "¥499",
        audience: "首次合作、只想验证流程的客户",
        deliverable: "字段诊断 + 交付模板 + 1 次讲解",
        economics: "直接成本 ¥80–150；目标毛利 70%–84%"
      },
      {
        name: "标准交付",
        price: "¥1,999",
        audience: "需要本地工作台落地的中小团队",
        deliverable: "采集流程 + 异常闸门 + Excel 模板 + 交付说明",
        economics: "直接成本 ¥300–600；目标毛利 70%–85%"
      },
      {
        name: "定制部署",
        price: "¥4,999 起",
        audience: "服务商或多人员协作团队",
        deliverable: "部署、字段适配、培训和 30 天优化",
        economics: "直接成本 ¥1,200–2,000；目标毛利 60%–76%"
      },
      {
        name: "按量维护",
        price: "¥699/月 + 按量",
        audience: "已有流程、需要持续支持的团队",
        deliverable: "维护、异常处理、模板小改和月度复盘",
        economics: "直接成本 ¥200–400/月；目标毛利 43%–71%"
      }
    ],
    costBreakdown: isRedditRag
      ? [
          {
            label: "模型 / API 调用",
            range: "¥80–300/批",
            detail: "按问题集规模、模型、Token 和重试次数估算；必须用真实调用量校准。"
          },
          {
            label: "知识库 / 存储",
            range: "¥50–300/月",
            detail: "文档存储、向量索引和数据刷新按资料量与服务商账单估算。"
          },
          {
            label: "算力 / 部署",
            range: "¥300–1,500/项目",
            detail: "索引构建、服务部署、权限接入和运行时长按环境复杂度估算。"
          },
          {
            label: "人工评测",
            range: "¥300–1,200/项目",
            detail: "问题集设计、引用核对、错误归因和交付前抽查是当前主要人工成本。"
          }
        ]
      : [
      {
        label: "AI 调用",
        range: isPdd ? "¥0–60/单" : "¥10–60/单",
        detail: "按模型、Token、重试次数计提；当前 PDD 采集链路未被证实依赖运行时大模型，未调用时为 0。"
      },
      {
        label: "API / 第三方",
        range: "¥0–50/单",
        detail: "OCR、代理、消息或云接口按实际调用计费；没有外部接口时不虚构成本。"
      },
      {
        label: "算力 / 部署",
        range: "¥20–100/单",
        detail: "浏览器、OCR、云主机和运行时长按设备折旧或实际账单折算。"
      },
      {
        label: "人工复核",
        range: "¥80–300/单",
        detail: "登录确认、价格异常、身份冲突和交付前抽查，是当前最需要真实计时的成本。"
      }
    ],
    targetMargin: isRedditRag ? "50%–77%" : "70%–85%",
    marginalCost: isRedditRag ? "¥100–800/批" : "≤ ¥600/单",
    breakEven: isRedditRag ? "3–5 个项目/批次" : "2–3 单",
    roi: isRedditRag
      ? "客户侧回本：每月减少资料检索、重复答疑和人工评测 20–40 小时后，再用真实工时与调用账单校准。"
      : "客户侧回本：每月少返工 8–12 小时即可覆盖 ¥1,999 标准交付费；需用真实人时和客单价校准。",
    nextAction: isRedditRag
      ? "先用 ¥799 检索诊断完成 2–3 个真实问题集，记录命中率、引用错误、调用量和人工评测分钟数，再校准 ¥3,999 原型报价。"
      : "先用 ¥499 体验诊断成交 3 单，记录每单 AI/API/算力/人工分钟数，再调整 ¥1,999 标准交付报价。",
    riskNote: isRedditRag
      ? "报价未含长期数据清洗、模型涨价、私有化硬件和复杂权限接入；未完成真实问题集评测前，不宣称准确率或生产可用。"
      : "毛利未含获客、税费、退款和长期售后；人工确认不能被包装成完全无人值守。"
  };
}

function isLegacyGenericCommercialization(plan = {}, price = "") {
  const tierPrices = (Array.isArray(plan?.tiers) ? plan.tiers : [])
    .map((tier) => String(tier?.price || ""))
    .join("|");
  const priceText = `${tierPrices}|${String(price || "")}`;
  return /499/.test(priceText)
    && /1[，,]?999/.test(priceText)
    && /4[，,]?999/.test(priceText)
    && /699/.test(priceText);
}

function ensureCommercializationPlan(result) {
  const current = result.paidIdea || {};
  const projectKey = getCurrentDraftKey();
  const projectPathText = String(projectPathInput?.value || projectKey || "").replace(/\//g, "\\");
  const redditProject = /(?:^|\\)reddit(?:\\|$)/i.test(projectPathText)
    || /Reddit|RAG 训练控制台/i.test(String(result.landingTitle || ""));
  const profile = result.projectProfile || buildLocalProfile(result.landingTitle || titleInput.value, sourceInput.value, projectPathText);
  const staleRedditPricing = redditProject && (
    isLegacyGenericCommercialization(current.commercialization, current.price)
    || /体验诊断|标准交付/.test(String(current.price || ""))
    || String(current.price || "").trim() === "¥1,999"
  );
  const keepExistingPricing = !redditProject
    || (current.commercialization?.pricingVersion === "project-fit-v2" && !staleRedditPricing);
  const defaults = buildCommercializationPlan(result.landingTitle || titleInput.value || "项目拆解包", sourceInput.value, profile, {
    price: keepExistingPricing && result.paidIdea?.price && !/待定/.test(result.paidIdea.price)
      ? result.paidIdea.price
      : ""
  }, projectKey);
  result.paidIdea = {
    ...current,
    price: keepExistingPricing && current.price && !/待定/.test(current.price) ? current.price : defaults.recommendedPrice,
    deliverables: current.deliverables?.length ? current.deliverables : defaults.paidPoints,
    commercialization: {
      ...defaults,
      ...(keepExistingPricing ? current.commercialization || {} : {})
    }
  };
  return result.paidIdea;
}

function formatCommercialHeadlinePrice(value) {
  const text = String(value || "").trim();
  const standardMatch = text.match(/(?:¥|￥)\s*1[，,]?999/);
  if (standardMatch) return "¥1,999";
  const currencyMatch = text.match(/(?:¥|￥)\s*\d[\d,]*(?:\.\d+)?/);
  if (currencyMatch) return currencyMatch[0].replace("￥", "¥").replace(/\s+/g, "");
  const numberMatch = text.match(/\b\d[\d,]*(?:\.\d+)?\b/);
  return numberMatch ? `¥${numberMatch[0].replace(/,/g, "")}` : (text.replace(/[（(].*$/, "").trim() || "待定");
}

function formatCommercialPriceNote(value, tiers = []) {
  const text = String(value || "").trim();
  const experienceTier = (tiers || []).find((tier) => /体验|诊断/.test(String(tier?.name || "")));
  const standardTier = (tiers || []).find((tier) => /标准/.test(String(tier?.name || "")));
  if (experienceTier && standardTier) {
    return `体验 ${formatCommercialHeadlinePrice(experienceTier.price)}｜标准 ${formatCommercialHeadlinePrice(standardTier.price)}`;
  }
  const experienceMatch = text.match(/(?:¥|￥)\s*499/);
  const standardMatch = text.match(/(?:¥|￥)\s*1[，,]?999/);
  if (experienceMatch && standardMatch) return "体验 ¥499｜标准 ¥1,999";
  if (experienceMatch) return "体验诊断 ¥499";
  if (/标准/.test(text)) return "标准交付价";
  if (/待定|待验证|待校准/.test(text)) return "价格待真实订单校准";
  return "标准交付价";
}

function formatCommercialRoiNote(value) {
  const text = String(value || "").trim();
  if (!text || /待|校准/.test(text)) return "客户侧口径待校准";
  return text.length > 16 ? "客户侧回本口径" : text;
}

function formatCommercialNextAction(value) {
  const text = String(value || "").trim();
  if (!text) return "记录 3 单真实成本 → 校准标准报价";
  if (/499/.test(text) && /3/.test(text) && /1999|1,999/.test(text)) {
    return "¥499 体验诊断 × 3 单 → 记录真实成本 → 校准 ¥1,999 报价";
  }
  return text.length > 42 ? "记录 3 单真实成本 → 校准标准报价" : text;
}

function repairProjectSpecificCommercialization(paidIdea) {
  if (!paidIdea) return paidIdea;
  const projectPath = String(projectPathInput?.value || "").replace(/\//g, "\\");
  const redditProject = /(?:^|\\)reddit(?:\\|$)/i.test(projectPath)
    || /Reddit|RAG 训练控制台/i.test(String(titleInput?.value || paidIdea.name || ""));
  const legacyPrice = String(paidIdea.price || "").trim();
  const stale = redditProject && (
    isLegacyGenericCommercialization(paidIdea.commercialization, legacyPrice)
    || /体验诊断|标准交付/.test(legacyPrice)
    || legacyPrice === "¥1,999"
  );
  if (!stale) return paidIdea;
  const plan = buildCommercializationPlan(
    titleInput?.value || paidIdea.name || "Reddit RAG 项目",
    sourceInput?.value || "",
    {},
    {},
    projectPath
  );
  paidIdea.price = plan.recommendedPrice;
  paidIdea.commercialization = plan;
  paidIdea.deliverables = paidIdea.deliverables?.length ? paidIdea.deliverables : plan.paidPoints;
  return paidIdea;
}

function buildCommercialViewModel(paidIdea) {
  repairProjectSpecificCommercialization(paidIdea);
  const plan = paidIdea.commercialization || {};
  const rawPrice = paidIdea.price || plan.recommendedPrice || "待定";
  return {
    name: paidIdea.name || "项目交付转化包",
    promise: plan.promise || "先卖可交付结果，再把高频能力标准化。",
    basis: plan.basis || "成本测算口径：内部估算范围，需用真实订单校准。",
    price: rawPrice,
    priceValue: formatCommercialHeadlinePrice(rawPrice),
    priceNote: formatCommercialPriceNote(rawPrice, plan.tiers),
    strategy: plan.strategy || "先用低门槛诊断切入，再销售标准交付和维护服务。",
    monetization: plan.monetization || [],
    targetCustomers: plan.targetCustomers || [],
    paidPoints: plan.paidPoints || [],
    tiers: plan.tiers || [],
    costBreakdown: plan.costBreakdown || [],
    margin: plan.targetMargin || "待校准",
    marginalCost: plan.marginalCost || "待校准",
    breakEven: plan.breakEven || "待校准",
    roi: plan.roi || "待用真实工时和客单价校准。",
    roiShort: formatCommercialRoiNote(plan.roi),
    nextAction: formatCommercialNextAction(plan.nextAction)
  };
}

function renderCommercialList(selector, items) {
  const list = document.querySelector(selector);
  if (!list) return;
  list.innerHTML = (items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderCommercialPlan(paidIdea) {
  const view = buildCommercialViewModel(paidIdea);
  const setText = (selector, value) => {
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
  };
  setText("#paidIdeaName", view.name);
  setText("#paidIdeaPromise", view.promise);
  setText("#paidIdeaBasis", view.basis);
  setText("#paidIdeaPriceValue", view.priceValue);
  setText("#paidIdeaPrice", view.priceNote);
  setText("#paidIdeaMargin", view.margin);
  setText("#paidIdeaMarginalCost", view.marginalCost);
  setText("#paidIdeaBreakEven", view.breakEven);
  setText("#paidIdeaRoi", view.roiShort);
  setText("#paidIdeaStrategy", view.strategy);
  setText("#paidIdeaNextAction", view.nextAction);
  renderCommercialList("#paidIdeaMonetization", view.monetization);
  renderCommercialList("#paidIdeaCustomers", view.targetCustomers);
  renderCommercialList("#paidIdeaPaidPoints", view.paidPoints);
  renderCommercialList("#paidIdeaDeliverables", paidIdea.deliverables || []);

  const tierList = document.querySelector("#paidIdeaTiers");
  if (tierList) {
    tierList.innerHTML = view.tiers.map((tier, index) => `
      <article class="commercial-tier${index === 1 ? " is-primary" : ""}" data-tier-index="${index}">
        <div class="commercial-tier-topline">
          <strong data-tier-name>${escapeHtml(tier.name || "套餐")}</strong>
          ${index === 1 ? '<span class="commercial-tier-badge">主推</span>' : ""}
          <span data-tier-price>${escapeHtml(tier.price || "待定")}</span>
        </div>
        <strong class="commercial-tier-economics" data-tier-economics>${escapeHtml(tier.economics || "待校准")}</strong>
      </article>
    `).join("");
  }

  const costGrid = document.querySelector("#paidIdeaCosts");
  if (costGrid) {
    costGrid.innerHTML = view.costBreakdown.map((cost, index) => `
      <article class="commercial-cost" data-cost-index="${index}">
        <div class="commercial-cost-topline">
          <strong data-cost-label>${escapeHtml(cost.label || "成本项")}</strong>
          <span data-cost-range>${escapeHtml(cost.range || "待校准")}</span>
        </div>
      </article>
    `).join("");
  }
}

function buildExpandedWorkflow(profile, source) {
  return buildProjectReviewFacts(profile, source).workflow;
}

function buildDetailFromProfile(profile, source = sourceInput?.value || "", audit = null) {
  const facts = buildProjectReviewFacts(profile, source);
  const evidenceBoundary = audit || buildManualAudit(source);
  return {
    title: `${facts.name}完整项目复盘`,
    description: `${facts.name}的介绍按项目复盘结构生成，重点说明业务问题、流程设计、数据处理、异常处理、交付结果和可复查证据。`,
    sections: [
      { title: "一、项目背景", blocks: [{ subtitle: "1.1 项目定位", body: `${facts.name}是${facts.systemChange}。`, list: [`目标用户：${facts.targetUsers.join("、")}`, `使用场景：${facts.scenario}`] }] },
      { title: "二、业务痛点", blocks: [{ subtitle: "2.1 原始问题", body: facts.originalProblem }, { subtitle: "2.2 旧流程缺陷", body: facts.oldFlowDefect }] },
      { title: "三、解决方案", blocks: [{ subtitle: "3.1 系统改造方式", body: facts.systemChange }, { subtitle: "3.2 核心能力", list: facts.modules.slice(0, 5) }] },
      { title: "四、核心流程", blocks: [{ subtitle: "4.1 流程拆解", list: facts.workflow }] },
      { title: "五、数据输入与输出", blocks: [{ subtitle: "5.1 输入资料", list: facts.inputs }, { subtitle: "5.2 输出结果", list: facts.outputs }] },
      { title: "六、异常处理与人工确认", blocks: [{ subtitle: "6.1 异常处理机制", list: facts.exceptionHandling }, { subtitle: "6.2 人工确认环节", list: facts.manualConfirmation }] },
      { title: "七、可复查证据", blocks: [{ subtitle: "7.1 证据来源", list: facts.evidence }] },
      { title: "八、项目价值", blocks: [{ subtitle: "8.1 可复用价值", list: facts.reusableValue }, { subtitle: "8.2 项目边界", list: facts.boundary }] },
      { title: "九、后续优化方向", blocks: [{ subtitle: "9.1 待补充方向", list: ["补充真实运行截图与结果样例", "补充失败样本和异常复盘记录", "补充最终交付表格或报告文件"] }] },
      {
        title: "十、证据边界",
        blocks: [
          { subtitle: "10.1 当前已确认", list: evidenceBoundary.confirmed?.length ? evidenceBoundary.confirmed : ["当前仅有手工资料，尚未建立项目文件证据链。"] },
          { subtitle: "10.2 仍需核验", list: evidenceBoundary.limitations?.length ? evidenceBoundary.limitations : ["待补充运行验证和最终交付结果。"] }
        ]
      }
    ]
  };
}

async function renderAnalysis(result) {
  const safeResult = result && typeof result === "object" ? result : {};
  const activeProjectPath = getActiveProjectPath();
  safeResult.landingTitle = String(safeResult.landingTitle || titleInput.value || "项目分析").trim();
  safeResult.landingText = String(safeResult.landingText || "已恢复项目分析资产，可继续编辑并核对关键结论。").trim();
  safeResult.brief = String(safeResult.brief || safeResult.landingText || "待补充").trim();
  safeResult.bullets = Array.isArray(safeResult.bullets) ? safeResult.bullets : [];
  safeResult.diagrams = Array.isArray(safeResult.diagrams) ? safeResult.diagrams : [];
  safeResult.projectProfile = safeResult.projectProfile || buildLocalProfile(safeResult.landingTitle, sourceInput.value, activeProjectPath);
  safeResult.detail = safeResult.detail || buildDetailFromProfile(safeResult.projectProfile, sourceInput.value, safeResult.audit || currentReadAudit);
  currentAnalysisResult = safeResult;
  safeResult.promoStructure = normalizePromotionStructure(safeResult);
  const paidIdea = ensureCommercializationPlan(safeResult);
  currentReadAudit = safeResult.audit || currentReadAudit;
  if (currentReadAudit && currentReadAudit.status !== "manual") {
    hasReadProject = true;
  }
  resetSourceScroll();
  await loadProjectImages();
  renderAudit(safeResult.audit || currentReadAudit || buildManualAudit(sourceInput?.value || ""));
  renderProfile(safeResult.projectProfile || buildLocalProfile(safeResult.landingTitle, sourceInput.value, activeProjectPath));
  renderDetail(safeResult.detail, safeResult.projectProfile);
  renderDiagrams(safeResult.diagrams, safeResult.projectProfile, activeProjectPath);
  document.querySelector("#landingTitle").textContent = safeResult.landingTitle;
  document.querySelector("#landingText").textContent = safeResult.landingText;
  document.querySelector("#landingBullets").innerHTML = safeResult.bullets
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
  document.querySelector("#briefText").textContent = safeResult.brief;
  renderPromotionStructure(safeResult);
  renderCommercialPlan(paidIdea);
  await renderAllPanelImages();
}

function getActiveTabId() {
  return document.querySelector(".tab.active")?.dataset.tab || "profile";
}

function activateTab(tabId = "profile") {
  const target = Array.from(tabs).find((tab) => tab.dataset.tab === String(tabId));
  if (!target || target.hidden) return;
  tabs.forEach((tab) => tab.classList.remove("active"));
  panels.forEach((panel) => {
    setPanelEditing(panel, false);
    panel.classList.remove("active");
  });
  target.classList.add("active");
  const panel = document.querySelector(`#${target.dataset.tab}`);
  panel?.classList.add("active");
  panel?.scrollTo(0, 0);
}

function getActiveTabPanel() {
  return document.querySelector(".tab-panel.active");
}

function setPanelEditing(panel, editing) {
  if (!panel) return;
  panel.classList.toggle("is-editing", editing);
  panel.querySelectorAll("h3, h4, h5, p, li, .mermaid-code").forEach((node) => {
    if (node.closest(".content-tools, .section-image-drop, .image-strip, .promo-flow")) return;
    node.contentEditable = editing ? "true" : "false";
  });
  if (editTabButton) {
    editTabButton.textContent = editing ? "编辑中" : "编辑";
    editTabButton.classList.toggle("is-active", editing);
  }
  if (saveTabButton) {
    saveTabButton.disabled = !editing;
  }
}

function startEditActiveTab() {
  const panel = getActiveTabPanel();
  if (!panel) return;
  setPanelEditing(panel, true);
  const firstEditable = panel.querySelector('[contenteditable="true"]');
  firstEditable?.focus();
  setStatus("当前模块可编辑，修改后点击保存", "neutral");
}

function getListText(selector) {
  return Array.from(document.querySelectorAll(`${selector} li`))
    .map((item) => item.textContent.trim())
    .filter(Boolean);
}

function ensureAnalysisResult() {
  if (!currentAnalysisResult) {
    throw new Error("请先读取项目并执行 Codex 分析");
  }
  currentAnalysisResult.projectProfile =
    currentAnalysisResult.projectProfile || buildLocalProfile(currentAnalysisResult.landingTitle || titleInput.value, sourceInput.value, getActiveProjectPath());
  return currentAnalysisResult;
}

async function saveActiveTabEdits({ quiet = false, persist = true } = {}) {
  const panel = getActiveTabPanel();
  const tabId = getActiveTabId();
  const result = ensureAnalysisResult();
  const profile = result.projectProfile;

  if (tabId === "landing") {
    result.landingTitle = document.querySelector("#landingTitle").textContent.trim();
    result.landingText = document.querySelector("#landingText").textContent.trim();
    result.bullets = getListText("#landingBullets");
  } else if (tabId === "brief") {
    result.brief = document.querySelector("#briefText").textContent.trim();
  } else if (tabId === "promo") {
    result.promo = getListText("#promoList");
    result.promoStructure = readPromotionStructureFromDom();
  } else if (tabId === "idea") {
    const commercial = result.paidIdea?.commercialization || buildCommercializationPlan(result.landingTitle || titleInput.value, sourceInput.value, profile);
    const textOf = (selector, fallback = "") => document.querySelector(selector)?.textContent.trim() || fallback;
    const listOr = (selector, fallback = []) => {
      const values = getListText(selector);
      return values.length ? values : fallback;
    };
    const tierNodes = Array.from(document.querySelectorAll("#paidIdeaTiers .commercial-tier"));
    const costNodes = Array.from(document.querySelectorAll("#paidIdeaCosts .commercial-cost"));
    result.paidIdea = {
      ...(result.paidIdea || {}),
      name: document.querySelector("#paidIdeaName").textContent.trim(),
      price: result.paidIdea?.price || commercial.recommendedPrice || "待定",
      deliverables: listOr("#paidIdeaDeliverables", result.paidIdea?.deliverables || []),
      commercialization: {
        ...commercial,
        promise: textOf("#paidIdeaPromise", commercial.promise),
        basis: textOf("#paidIdeaBasis", commercial.basis),
        strategy: textOf("#paidIdeaStrategy", commercial.strategy),
        monetization: listOr("#paidIdeaMonetization", commercial.monetization),
        targetCustomers: listOr("#paidIdeaCustomers", commercial.targetCustomers),
        paidPoints: listOr("#paidIdeaPaidPoints", commercial.paidPoints),
        nextAction: textOf("#paidIdeaNextAction", commercial.nextAction),
        targetMargin: textOf("#paidIdeaMargin", commercial.targetMargin),
        marginalCost: textOf("#paidIdeaMarginalCost", commercial.marginalCost),
        breakEven: textOf("#paidIdeaBreakEven", commercial.breakEven),
        roi: commercial.roi,
        tiers: tierNodes.length ? tierNodes.map((tier, index) => {
          const previous = commercial.tiers?.[index] || {};
          return {
            ...previous,
            name: tier.querySelector("[data-tier-name]")?.textContent.trim() || previous.name || "套餐",
            price: tier.querySelector("[data-tier-price]")?.textContent.trim() || previous.price || "待定",
            economics: tier.querySelector("[data-tier-economics]")?.textContent.trim() || previous.economics || "待校准"
          };
        }) : (commercial.tiers || []),
        costBreakdown: costNodes.length ? costNodes.map((cost, index) => {
          const previous = commercial.costBreakdown?.[index] || {};
          return {
            ...previous,
            label: cost.querySelector("[data-cost-label]")?.textContent.trim() || previous.label || "成本项",
            range: cost.querySelector("[data-cost-range]")?.textContent.trim() || previous.range || "待校准"
          };
        }) : (commercial.costBreakdown || [])
      }
    };
  } else if (tabId === "profile") {
    profile.projectName = document.querySelector("#profileTitle").textContent.trim();
    profile.positioning = document.querySelector("#profilePositioning").textContent.trim();
    profile.coreProblem = document.querySelector("#profileProblem").textContent.trim();
    profile.targetUsers = getListText("#profileUsers");
    profile.workflow = getListText("#profileWorkflow");
    profile.technicalModules = getListText("#profileModules");
    profile.engineeringDecisions = getListText("#profileDecisions");
  } else if (tabId === "diagram") {
    result.diagrams = Array.from(document.querySelectorAll("#diagramList .diagram-card")).map((card) => ({
      title: card.querySelector("h4")?.textContent.trim() || "流程图",
      metrics: Array.from(card.querySelectorAll(".diagram-metric")).map((metric) => ({
        label: metric.querySelector("small")?.textContent.trim() || "指标",
        value: metric.querySelector("strong")?.textContent.trim() || ""
      })),
      mermaid: card.querySelector(".mermaid-code")?.textContent.trim() || ""
    }));
  } else if (tabId === "detail") {
    const customText = document
      .querySelector("#detailArticle")
      .innerText.split("\n")
      .map((line) => line.trim())
      .filter((line) => line && line !== "添加图片" && !line.includes("项目截图区域"))
      .join("\n");
    result.detail = result.detail || buildDetailFromProfile(profile);
    result.detail.title = document.querySelector("#detailTitle").textContent.trim();
    result.detail.description = "";
    result.detail.sections = [
      {
        title: "自定义详情",
        blocks: [{ subtitle: "编辑内容", body: customText }]
      }
    ];
  }

  setPanelEditing(panel, false);
  if (persist) {
    await saveProjectDraft();
    await saveProjectRecord();
  }
  if (!quiet && saveTabButton) {
    saveTabButton.textContent = "已保存";
    setTimeout(() => {
      saveTabButton.textContent = "保存";
    }, 900);
  }
  if (!quiet) setStatus("当前模块已保存", "ok");
}

function legacyBuildDetailFromProfile(profile) {
  const name = profile.projectName || "未命名项目";
  const workflow = buildExpandedWorkflow(profile, `${profile.coreProblem || ""}\n${(profile.technicalModules || []).join("\n")}`);
  const modules = (profile.technicalModules || []).map(cleanDisplayText).filter(Boolean);
  const evidence = (profile.evidenceFiles || []).map(cleanDisplayText).filter(Boolean);
  const values = profile.businessValue || [];
  return {
    title: `${name}完整项目介绍`,
    description: `${name} 是一个${profile.positioning}。它围绕真实业务问题，把项目事实、技术实现、工程判断和展示价值整理成可复用的项目资产。`,
    sections: [
      {
        title: "一、项目概述",
        blocks: [
          { subtitle: "1.1 项目定位", body: profile.positioning },
          { subtitle: "1.2 核心价值", list: values }
        ]
      },
      {
        title: "二、问题定义与机会分析",
        blocks: [
          { subtitle: "2.1 核心问题", body: profile.coreProblem },
          { subtitle: "2.2 场景痛点", list: buildPainPoints(profile) },
          { subtitle: "2.3 目标用户", list: profile.targetUsers || [] }
        ]
      },
      {
        title: "三、产品架构与核心流程",
        blocks: [
          { subtitle: "3.1 核心流程", list: workflow },
          { subtitle: "3.2 技术模块", list: modules },
          { subtitle: "3.3 模块协作逻辑", list: buildModuleCollaboration(modules) }
        ]
      },
      {
        title: "四、工程判断与证据链",
        blocks: [
          { subtitle: "4.1 工程判断", list: profile.engineeringDecisions || [] },
          { subtitle: "4.2 证据文件", list: evidence },
          { subtitle: "4.3 风险边界", list: buildRiskBoundaries(profile) }
        ]
      },
      {
        title: "五、商业化与展示包装",
        blocks: [
          { subtitle: "5.1 可售卖模块", list: profile.sellableModules || [] },
          { subtitle: "5.2 展示表达", list: buildDisplayAngles(profile) }
        ]
      }
    ]
  };
}

function buildPainPoints(profile) {
  const text = `${profile.coreProblem || ""}\n${(profile.technicalModules || []).join("\n")}`;
  const points = [];
  if (/登录|会话|Cookie|Token/i.test(text)) points.push("真实页面任务经常受登录、会话过期或权限状态影响，不能只按理想路径执行。");
  if (/评论|review|采集|商品|页面/i.test(text)) points.push("目标页面结构、分页加载和数据字段可能变化，采集结果需要校验和复盘。");
  if (/导出|Excel|CSV|Markdown|表格/i.test(text)) points.push("结果如果没有统一格式，后续整理、分析和交付成本会变高。");
  if (/日志|队列|任务|状态|错误/i.test(text)) points.push("任务失败时如果没有状态记录和证据链，很难解释失败原因或继续恢复。");
  points.push("项目介绍不能停留在源码层，需要转译成业务问题、工程动作和可展示成果。");
  return [...new Set(points)].slice(0, 5);
}

function buildModuleCollaboration(modules) {
  if (!modules.length) return ["先补充 README、入口文件和运行截图，再把模块协作关系补齐。"];
  const first = modules[0];
  const second = modules[1] || "数据整理模块";
  const third = modules[2] || "结果输出模块";
  return [
    `${first} 负责建立任务入口和业务上下文。`,
    `${second} 承接核心处理过程，把页面、文件或接口中的信息转成可分析数据。`,
    `${third} 负责把过程结果沉淀为文档、表格、页面或可交付资产。`,
    "这些模块共同证明项目不是零散脚本，而是一条从输入到交付的工作链路。"
  ];
}

function buildRiskBoundaries(profile) {
  const text = `${profile.coreProblem || ""}\n${(profile.technicalModules || []).join("\n")}`;
  const risks = [];
  if (/采集|评论|review|商品|页面/i.test(text)) risks.push("页面结构或平台限制变化时，需要保留人工校验和采集失败处理入口。");
  if (/登录|会话|Cookie|Token/i.test(text)) risks.push("登录态属于不稳定依赖，应该在展示时说明人工确认、暂停恢复或重新授权机制。");
  if (/OCR|截图|图片/i.test(text)) risks.push("图像识别结果需要证据截图和人工复核，避免错误数据直接进入交付结果。");
  if (/API|接口|服务|server/i.test(text)) risks.push("接口封装要明确输入输出和错误语义，避免前端展示无法解释后端失败。");
  risks.push("展示页面应优先讲清业务闭环和证据链，不把源码路径当成最终文案。");
  return [...new Set(risks)].slice(0, 5);
}

function buildDisplayAngles(profile) {
  return [
    `交付角度：突出${profile.projectName}解决的真实业务场景和完整执行闭环。`,
    "复盘角度：说明从问题拆解、模块设计到结果验证的关键判断。",
    "证据角度：用流程图、架构图和证据文件说明项目不是概念描述。",
    "沉淀角度：把方法、模板、执行清单和复盘文档整理成可复用资料。"
  ];
}

function buildProjectDeliverables(profile) {
  const text = `${profile.projectName || ""}\n${profile.coreProblem || ""}\n${(profile.workflow || []).join("\n")}\n${(profile.technicalModules || []).join("\n")}`;
  const deliverables = [];
  if (/评论|review|amazon/i.test(text)) deliverables.push("评论数据文件", "星级分类结果", "异常页面记录", "采集执行说明", "结果复盘文档");
  if (/采集|爬取|商品|页面/i.test(text)) deliverables.push("采集结果表", "字段整理模板", "异常处理记录");
  if (/OCR|截图|图片|识别/i.test(text)) deliverables.push("识别截图证据", "人工复核记录", "识别失败样例");
  if (/Excel|表格|CSV|导出/i.test(text)) deliverables.push("导出表格模板", "字段说明文档", "交付清单");
  if (/API|接口|FastAPI|server|服务/i.test(text)) deliverables.push("接口说明", "任务状态记录", "错误码说明");
  const unique = [...new Set(deliverables)].slice(0, 6);
  return unique.length ? unique : ["流程说明", "执行清单", "结果样例", "异常记录", "复盘文档"];
}

function buildDiagramsFromProfile(profile, projectPath = "") {
  const name = profile.projectName || "项目";
  // The source includes historical evidence and migration notes; it must not decide the active project template.
  const isPdd = isPddProjectProfile(profile, projectPath);
  if (isPdd) {
    return [
      {
        title: "\u4efb\u52a1\u8fd0\u884c\u673a\u5236",
        description: "\u4ece\u5e97\u94fa\u6216\u5546\u54c1\u94fe\u63a5\u5f00\u59cb\uff0c\u7ecf\u8fc7\u767b\u5f55\u786e\u8ba4\u3001\u91c7\u96c6\u3001\u8bc6\u522b\u548c\u6821\u9a8c\uff0c\u5f02\u5e38\u8282\u70b9\u4fdd\u7559\u73b0\u573a\u5e76\u4ece\u65ad\u70b9\u6062\u590d\u3002",
        metrics: [
          { label: "\u4e3b\u6d41\u7a0b", value: "7 \u9636" },
          { label: "\u4eba\u5de5\u8282\u70b9", value: "3 \u5904" },
          { label: "\u4ea4\u4ed8\u7ed3\u679c", value: "Excel + \u8bc1\u636e" }
        ],
        mermaid: `flowchart LR
  S1["\u8f93\u5165\uff1a\u5e97\u94fa/\u5546\u54c1\u94fe\u63a5"] --> S2["\u786e\u8ba4\uff1a\u767b\u5f55\u72b6\u6001"]
  S2 --> S3["\u5b9a\u4f4d\uff1a\u5546\u54c1\u5217\u8868"]
  S3 --> S4["\u91c7\u96c6\uff1a\u8be6\u60c5\u4e0e SKU"]
  S4 --> S5["\u8bc6\u522b\uff1a\u622a\u56fe/OCR \u4ef7\u683c"]
  S5 --> S6["\u6821\u9a8c\uff1a\u5b57\u6bb5/\u53bb\u91cd"]
  S6 --> S7["\u4ea4\u4ed8\uff1aExcel + \u590d\u67e5\u8bc1\u636e"]
  S2 -. \u9700\u767b\u5f55 .-> H1["\u6682\u505c\uff1a\u4eba\u5de5\u767b\u5f55"]
  H1 -. \u786e\u8ba4\u540e\u6062\u590d .-> S3
  S5 -. \u8bc6\u522b\u5931\u8d25 .-> H2["\u6821\u51c6\uff1a\u4ef7\u683c\u533a\u57df"]
  H2 -. \u6821\u51c6\u540e\u91cd\u8bd5 .-> S5
  S6 -. \u5b57\u6bb5\u7f3a\u5931 .-> H3["\u590d\u6838\uff1a\u8865\u9f50\u6570\u636e"]
  H3 -. \u901a\u8fc7\u540e\u7ee7\u7eed .-> S7`
      },
      {
        title: "\u7cfb\u7edf\u652f\u6491\u67b6\u6784",
        description: "\u4e1a\u52a1\u8f93\u5165\u3001\u4efb\u52a1\u63a7\u5236\u3001\u53ef\u89c1\u6267\u884c\u3001\u6570\u636e\u5904\u7406\u548c\u7ed3\u679c\u4ea4\u4ed8\u5206\u5c42\u627f\u8f7d\uff0c\u72b6\u6001\u3001\u8bc1\u636e\u548c\u4ea4\u4ed8\u5206\u652f\u53ef\u56de\u67e5\u3002",
        metrics: [
          { label: "\u652f\u6491\u5c42\u7ea7", value: "5 \u5c42" },
          { label: "\u72b6\u6001\u5206\u652f", value: "3 \u7c7b" },
          { label: "\u4e3b\u8981\u8f93\u51fa", value: "\u6570\u636e + \u8bc1\u636e" }
        ],
        mermaid: `flowchart LR
  A["\u4e1a\u52a1\u5165\u53e3\uff1a\u94fe\u63a5/\u4efb\u52a1"] --> B["\u4efb\u52a1\u63a7\u5236\uff1a\u6392\u961f/\u6682\u505c"]
  B --> C["\u6267\u884c\u5c42\uff1a\u53ef\u89c1\u9875\u9762\u64cd\u4f5c"]
  C --> D["\u5904\u7406\u5c42\uff1aSKU/OCR/\u5b57\u6bb5\u89c4\u5219"]
  D --> E["\u4ea4\u4ed8\u5c42\uff1aExcel/\u8bc1\u636e\u6e05\u5355"]
  B -. \u4efb\u52a1\u72b6\u6001 .-> F["\u8fd0\u884c\u8bb0\u5f55"]
  C -. \u73b0\u573a\u5f02\u5e38 .-> G["\u622a\u56fe\u8bc1\u636e"]
  D -. \u4eba\u5de5\u786e\u8ba4 .-> H["\u590d\u6838\u7ed3\u679c"]`
      },
      {
        title: "\u6570\u636e\u8f6c\u5316\u94fe\u8def",
        description: "\u5c06\u9875\u9762\u4e2d\u7684\u5546\u54c1\u3001SKU\u3001\u4ef7\u683c\u548c\u89c4\u683c\u8f6c\u4e3a\u6a21\u677f\u5b57\u6bb5\uff0c\u5728\u4ea4\u4ed8\u524d\u901a\u8fc7\u6821\u9a8c\u3001\u53bb\u91cd\u548c\u4eba\u5de5\u590d\u6838\u3002",
        metrics: [
          { label: "\u8f6c\u5316\u9636\u6bb5", value: "5 \u6bb5" },
          { label: "\u8d28\u91cf\u95e8", value: "2 \u5904" },
          { label: "\u7ed3\u679c\u683c\u5f0f", value: "Excel \u6a21\u677f" }
        ],
        mermaid: `flowchart LR
  I["\u539f\u59cb\u8f93\u5165\uff1a\u94fe\u63a5/\u9875\u9762"] --> V["\u53ef\u89c1\u4fe1\u606f\uff1a\u5217\u8868/\u8be6\u60c5/SKU"]
  V --> R["\u7ed3\u6784\u5316\u5b57\u6bb5\uff1a\u5546\u54c1/\u89c4\u683c/\u4ef7\u683c"]
  R --> Q["\u8d28\u91cf\u95e8\uff1a\u6821\u9a8c/\u4e1a\u52a1\u952e\u53bb\u91cd"]
  Q --> O["\u4ea4\u4ed8\uff1aExcel \u5b57\u6bb5\u6a21\u677f"]
  V -. \u9875\u9762\u53d8\u5316 .-> X["\u622a\u56fe\u4e0e\u8bc6\u522b\u8bc1\u636e"]
  X -. \u590d\u6838\u540e .-> Q
  R -. \u5b57\u6bb5\u7f3a\u5931 .-> M["\u4eba\u5de5\u8865\u9f50"]
  M -. \u8865\u9f50\u540e .-> Q`
      },
      {
        title: "\u5f02\u5e38\u6062\u590d\u95ed\u73af",
        description: "\u5f02\u5e38\u4e0d\u76f4\u63a5\u4e22\u5931\u4efb\u52a1\uff0c\u800c\u662f\u5148\u7559\u5b58\u73b0\u573a\u3001\u6682\u505c\u3001\u4eba\u5de5\u5904\u7406\u540e\u518d\u4ece\u65ad\u70b9\u6062\u590d\uff0c\u5e76\u6807\u8bb0\u6700\u7ec8\u72b6\u6001\u3002",
        metrics: [
          { label: "\u95ed\u73af\u72b6\u6001", value: "6 \u6b65" },
          { label: "\u5f02\u5e38\u7c7b\u578b", value: "3 \u7c7b" },
          { label: "\u6062\u590d\u65b9\u5f0f", value: "\u65ad\u70b9\u7ee7\u7eed" }
        ],
        mermaid: `flowchart LR
  T1["\u4efb\u52a1\u5f00\u59cb"] --> T2["\u6267\u884c\u5e76\u8bb0\u5f55"]
  T2 --> T3["\u68c0\u6d4b\u5f02\u5e38"]
  T3 --> T4["\u4fdd\u7559\u73b0\u573a\u5e76\u6682\u505c"]
  T4 --> T5["\u4eba\u5de5\u786e\u8ba4/\u6821\u51c6"]
  T5 --> T6["\u4ece\u65ad\u70b9\u6062\u590d\u6267\u884c"]
  T6 --> T7["\u5b8c\u6210\u6216\u6807\u8bb0\u672a\u5b8c\u6210"]
  T3 -. \u767b\u5f55\u6216\u9875\u9762\u5f02\u5e38 .-> A1["\u6682\u505c\u5f85\u786e\u8ba4"]
  T3 -. OCR \u8bc6\u522b\u5931\u8d25 .-> A2["\u6821\u51c6\u8bc6\u522b\u533a\u57df"]
  T3 -. \u5b57\u6bb5\u4e0d\u5b8c\u6574 .-> A3["\u590d\u6838\u6570\u636e\u5b8c\u6574\u6027"]`
      }
    ];
  }
  if (isRedditProjectProfile(profile, projectPath)) return buildRedditDiagrams(profile);
  return buildGeneralDiagrams(profile);
}

function isRedditProjectProfile(profile, projectPath = "") {
  const normalizedPath = String(projectPath || getActiveProjectPath() || "").replace(/\//g, "\\").toLowerCase();
  const text = [
    profile?.projectName,
    ...(Array.isArray(profile?.workflow) ? profile.workflow : []),
    ...(Array.isArray(profile?.technicalModules) ? profile.technicalModules : [])
  ].join("\n");
  if (/\\reddit(?:\\|$)/.test(normalizedPath)) return true;
  if (/reddit|帖子|社区|需求挖掘/i.test(text)) return true;
  return /评论/i.test(text) && /RAG|知识块|训练/i.test(text);
}

function buildRedditDiagrams(profile) {
  const name = profile?.projectName || "Reddit 需求挖掘平台";
  return [
    {
      title: "任务运行机制",
      description: `${name} 从社区入口开始，先确认登录状态和采集范围，再采集帖子与评论、筛选高价值讨论、整理需求证据，最后生成并测试可检索知识块。`,
      metrics: [
        { label: "主流程", value: "7 阶" },
        { label: "人工节点", value: "3 处" },
        { label: "交付结果", value: "需求证据 + 知识块" }
      ],
      mermaid: `flowchart LR
  S1["输入：社区/帖子范围"] --> S2["确认：登录状态与页面"]
  S2 --> S3["采集：帖子与评论"]
  S3 --> S4["筛选：高价值讨论"]
  S4 --> S5["整理：需求与证据"]
  S5 --> S6["生成：知识块与检索字段"]
  S6 --> S7["交付：测试结果与资料"]
  S2 -. 需要登录 .-> H1["暂停：人工登录"]
  H1 -. 确认后恢复 .-> S3
  S3 -. 页面异常 .-> H2["重试：保留采集现场"]
  H2 -. 页面恢复 .-> S3
  S5 -. 证据不完整 .-> H3["复核：补充来源"]
  H3 -. 复核后继续 .-> S6`
    },
    {
      title: "系统支撑架构",
      description: "业务入口、任务控制、可见页面采集、内容处理和知识交付分层承载；运行状态、页面现场和人工复核结果分别保留，保证结果可以回查。",
      metrics: [
        { label: "支撑层级", value: "5 层" },
        { label: "状态分支", value: "3 类" },
        { label: "主要输出", value: "知识块 + 证据" }
      ],
      mermaid: `flowchart LR
  A["业务入口：社区/帖子任务"] --> B["任务控制：排队/暂停"]
  B --> C["可见执行：页面采集"]
  C --> D["内容处理：筛选/结构化"]
  D --> E["知识交付：检索/测试"]
  B -. 任务状态 .-> F["运行记录"]
  C -. 访问异常 .-> G["现场留存"]
  D -. 人工确认 .-> H["复核结果"]
  H -. 通过后 .-> E`
    },
    {
      title: "数据转化链路",
      description: "把帖子、评论和媒体上下文转成主题、痛点、需求、方案和来源字段，经过完整性、重复项和引用关系校验后再形成知识块。",
      metrics: [
        { label: "转换阶段", value: "6 段" },
        { label: "质量门", value: "3 处" },
        { label: "结果格式", value: "知识块 + 来源" }
      ],
      mermaid: `flowchart LR
  I["原始输入：帖子/评论"] --> V["内容清洗：文本与媒体"]
  V --> R["结构化字段：主题/痛点/方案"]
  R --> Q["证据校验：来源/重复/完整"]
  Q --> K["知识块：标题/问答/引用"]
  K --> O["交付：可检索资料"]
  V -. 内容不完整 .-> M["人工补齐"]
  M -. 补齐后继续 .-> Q
  R -. 主题不明确 .-> N["人工归类"]
  N -. 归类后继续 .-> Q
  O -. 检索结果不达标 .-> T["复测：调整知识块"]
  T -. 复测后交付 .-> O`
    },
    {
      title: "交付闭环",
      description: "交付不止生成文件，还要经过来源回查、知识块测试和人工确认；发现证据缺失或检索结果不稳定时回到对应节点修正。",
      metrics: [
        { label: "闭环状态", value: "7 步" },
        { label: "复核节点", value: "2 处" },
        { label: "最终资产", value: "可复查知识资产" }
      ],
      mermaid: `flowchart LR
  T1["任务开始"] --> T2["采集结果"]
  T2 --> T3["筛选与去重"]
  T3 --> T4["需求证据整理"]
  T4 --> T5["知识块生成"]
  T5 --> T6["检索与回答测试"]
  T6 --> T7["归档与交付"]
  T3 -. 讨论重复 .-> A1["人工复核"]
  A1 -. 确认后继续 .-> T4
  T4 -. 来源不足 .-> A2["补充证据"]
  A2 -. 补齐后继续 .-> T5
  T6 -. 测试未通过 .-> A3["调整知识块"]
  A3 -. 调整后复测 .-> T6`
    }
  ];
}

function buildGeneralDiagrams(profile) {
  const name = profile?.projectName || "项目";
  const workflowSteps = (Array.isArray(profile?.workflow) ? profile.workflow : [])
    .filter(Boolean)
    .map((item) => summarizeProfileWorkflowStep(item))
    .filter(Boolean);
  const steps = [
    "输入：项目资料与任务范围",
    "确认：目标、边界与执行条件",
    workflowSteps[0] || "整理：关键资料与业务对象",
    workflowSteps[1] || "处理：核心任务与规则",
    "校验：结果、证据与异常",
    "交付：结构化结果与复查入口"
  ];
  const stepNodes = steps.map((step, index) => `  S${index + 1}["${mermaidLabel(step)}"]`).join("\n");
  const stepEdges = steps.slice(0, -1).map((_, index) => `  S${index + 1} --> S${index + 2}`).join("\n");
  return [
    {
      title: "任务运行机制",
      description: `${name} 从输入资料和任务边界开始，经过条件确认、核心处理、质量校验与人工确认，最终形成可复查的结构化交付结果。`,
      metrics: [
        { label: "主流程", value: "6 阶" },
        { label: "人工节点", value: "3 处" },
        { label: "交付结果", value: "结果 + 证据" }
      ],
      mermaid: `flowchart LR
${stepNodes}
${stepEdges}
  S2 -. 范围不清 .-> H1["人工确认"]
  H1 -. 确认后恢复 .-> S3
  S4 -. 处理异常 .-> H2["保留现场并重试"]
  H2 -. 条件满足后继续 .-> S4
  S5 -. 结果不完整 .-> H3["补齐资料并复核"]
  H3 -. 复核后交付 .-> S6`
    },
    {
      title: "系统支撑架构",
      description: "业务入口、任务控制、核心处理、质量校验和结果交付分层协作；任务状态、过程证据和人工确认结果分别保留，避免异常被静默覆盖。",
      metrics: [
        { label: "支撑层级", value: "5 层" },
        { label: "状态分支", value: "3 类" },
        { label: "主要输出", value: "结构化结果 + 证据" }
      ],
      mermaid: `flowchart LR
  A["业务入口：资料/任务"] --> B["任务控制：排队/暂停"]
  B --> C["核心处理：规则与执行"]
  C --> D["质量校验：字段/结果"]
  D --> E["结果交付：文件/页面"]
  B -. 任务状态 .-> F["运行记录"]
  C -. 执行异常 .-> G["过程证据"]
  D -. 人工确认 .-> H["复核结果"]
  H -. 通过后 .-> E`
    },
    {
      title: "数据转化链路",
      description: "把原始项目资料转成可处理的业务对象和结构化字段，在规则校验、重复检查和人工复核通过后再生成最终交付物。",
      metrics: [
        { label: "转换阶段", value: "6 段" },
        { label: "质量门", value: "3 处" },
        { label: "结果格式", value: "结构化交付" }
      ],
      mermaid: `flowchart LR
  I["原始输入：项目资料"] --> V["内容整理：筛选与归类"]
  V --> R["结构化字段：对象与规则"]
  R --> Q["质量校验：完整/重复/一致"]
  Q --> O["交付结果：文件/页面"]
  O --> E["证据留存：可复查记录"]
  V -. 资料缺失 .-> M["人工补齐"]
  M -. 补齐后继续 .-> R
  R -. 规则不明确 .-> N["人工确认"]
  N -. 确认后继续 .-> Q
  Q -. 校验未通过 .-> T["调整结果"]
  T -. 调整后复测 .-> Q`
    },
    {
      title: "交付闭环",
      description: "交付闭环包含生成、检查、人工确认、问题修正和最终归档；未通过的结果回到对应处理节点，不把半完成内容直接当作完成。",
      metrics: [
        { label: "闭环状态", value: "7 步" },
        { label: "复核节点", value: "2 处" },
        { label: "最终资产", value: "可复查交付物" }
      ],
      mermaid: `flowchart LR
  T1["任务开始"] --> T2["准备输入"]
  T2 --> T3["执行核心处理"]
  T3 --> T4["生成结构化结果"]
  T4 --> T5["人工复核与修正"]
  T5 --> T6["验收关键指标"]
  T6 --> T7["归档与交付"]
  T3 -. 执行失败 .-> A1["保留现场"]
  A1 -. 重试条件满足 .-> T3
  T4 -. 结果不完整 .-> A2["补齐数据"]
  A2 -. 补齐后复核 .-> T5
  T6 -. 验收未通过 .-> A3["回退调整"]
  A3 -. 调整后复测 .-> T6`
    }
  ];
}

function summarizeProfileWorkflowStep(text) {
  const value = cleanDisplayText(text);
  if (!value) return "待补充";
  if (/Step1|登录|页面准备|确认/.test(value)) return "确认登录与页面";
  if (/RAG|知识块|检索|回答|评估/.test(value)) return "生成并测试知识块";
  if (/提取|问题|方案|证据|审核/.test(value)) return "整理需求证据";
  if (/筛选|门槛|匹配|价值/.test(value)) return shortText(value.replace(/[，；。].*$/, ""), 20);
  if (/社区|帖子|评论|对话簇/.test(value)) return "采集社区讨论";
  if (/采集|抓取|商品|详情|SKU|价格|图片|平台|发布|任务/.test(value)) {
    return shortText(value.replace(/[，；。].*$/, ""), 20);
  }
  return shortText(value.replace(/[，；。].*$/, ""), 18);
}

function compactDiagramLabel(text, title = "") {
  const value = cleanDisplayText(text).replace(/[“”"']/g, "").trim();
  if (!value) return "待补充";
  if (value.length <= 12 && !/[，；。]/.test(value)) return value;
  if (/总流程|运行机制|主流程/.test(title)) {
    if (/^确认登录|登录确认/.test(value)) return "确认登录";
    if (/^交付\s*Excel/.test(value)) return "交付 Excel";
    if (/登录|会话|任务范围|准备|链接/.test(value) && !/进入|定位|采集/.test(value)) return "准备任务";
    if (/商品列表|商品详情|SKU|定位商品|进入/.test(value)) return "采集商品";
    if (/价格|OCR|识别/.test(value)) return "识别价格";
    if (/字段|校验|去重|整理/.test(value)) return "校验结果";
    if (/Excel|交付|输出|导出/.test(value)) return "交付结果";
    if (/状态|异常|证据|复查/.test(value)) return "记录证据";
  }
  if (/架构|支撑关系/.test(title)) {
    if (/输入|页面|资料/.test(value)) return "业务入口";
    if (/能力模块|处理/.test(value)) return "核心处理";
    if (/结果|交付/.test(value)) return "结果交付";
    if (/登录|会话/.test(value)) return "登录控制";
  }
  if (/数据|转化链路/.test(title)) {
    if (/原始|页面|资料/.test(value)) return "原始资料";
    if (/清洗|筛选/.test(value)) return "资料清洗";
    if (/分析|结构化/.test(value)) return "结构化字段";
    if (/结果|交付/.test(value)) return "交付结果";
  }
  if (/交付|闭环/.test(title)) {
    if (/证据|截图/.test(value)) return "过程证据";
    if (/结果|样例/.test(value)) return "结果样例";
    if (/文档|资料/.test(value)) return "交付文档";
  }
  return shortText(value.replace(/[，；。].*$/, ""), 16);
}

function normalizeDiagramForProductView(diagram, index) {
  const title = diagram?.title || ["任务运行机制", "系统支撑架构", "数据转化链路", "交付闭环"][index] || "项目图示";
  const mermaid = normalizeMermaidForProductView(diagram?.mermaid || "", title);
  return {
    ...diagram,
    title,
    metrics: Array.isArray(diagram?.metrics)
      ? diagram.metrics.filter((item) => item && item.label && item.value && !["—", "-", "待补充"].includes(String(item.value))).slice(0, 4)
      : [],
    mermaid
  };
}

function normalizeMermaidForProductView(mermaid, title) {
  return String(mermaid || "").replace(/\[([^\]]+)\]/g, (_, label) => {
    const safeLabel = compactDiagramLabel(label, title).replace(/[\"]+/g, "");
    return `["${mermaidLabel(safeLabel)}"]`;
  });
}

function mermaidLabel(text) {
  return shortText(text, 34).replace(/["<>]/g, "").replace(/\|/g, "/");
}

function renderDetail(detail, profile) {
  const safeDetail = detail || buildDetailFromProfile(profile || buildLocalProfile(titleInput.value, sourceInput.value, getActiveProjectPath()));
  document.querySelector("#detailTitle").textContent = safeDetail.title || "完整项目介绍";
  const article = document.querySelector("#detailArticle");
  const sections = safeDetail.sections || [];
  article.innerHTML = `
    <div class="detail-intro">
      <p>${escapeHtml(safeDetail.description || "")}</p>
      <div class="image-placeholder" data-image-scope="detail-hero">项目截图区域：上传首页、流程、结果或表格截图后可放入这里。</div>
      <div class="image-strip section-images" data-image-preview="detail-hero"></div>
    </div>
    ${sections
      .map(
        (section, sectionIndex) => `
          <section class="detail-section">
            <div class="content-tools">
              <label class="ghost-button compact image-action">添加图片<input type="file" accept="image/*" multiple data-image-scope="detail-hero"></label>
            </div>
            <h4>${escapeHtml(section.title)}</h4>
            ${(section.blocks || [])
              .map(
                (block) => `
                  <div class="detail-block">
                    <h5>${escapeHtml(block.subtitle || "")}</h5>
                    ${block.body ? `<p>${escapeHtml(block.body)}</p>` : ""}
                    ${Array.isArray(block.list) ? `<ul>${block.list.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}
                  </div>
                `
              )
              .join("")}
          </section>
        `
      )
      .join("")}
  `;
  const heroDrop = article.querySelector('[data-image-scope="detail-hero"]');
  if (heroDrop) {
    heroDrop.classList.add("paste-image-zone");
    heroDrop.tabIndex = 0;
  }
}

function renderDiagrams(diagrams, profileOverride = null, projectPath = "") {
  const list = document.querySelector("#diagramList");
  const activeProjectPath = projectPath || getActiveProjectPath();
  const profile = profileOverride || currentAnalysisResult?.projectProfile || buildLocalProfile(titleInput.value, sourceInput.value, activeProjectPath);
  const profileDiagrams = buildDiagramsFromProfile(profile, activeProjectPath);
  const safeDiagrams = Array.isArray(diagrams) && diagrams.length ? diagrams : [];
  const isCurrentPddProject = isPddProjectProfile(profile, activeProjectPath);
  const isCurrentRedditProject = isRedditProjectProfile(profile, activeProjectPath);
  const savedDiagramOwnerPath = normalizeProjectPath(currentAnalysisResult?.diagramProjectPath || "");
  const activeProjectPathKey = normalizeProjectPath(activeProjectPath);
  const hasMismatchedDiagramOwner = Boolean(savedDiagramOwnerPath && activeProjectPathKey && savedDiagramOwnerPath !== activeProjectPathKey);
  const savedDiagramText = safeDiagrams
    .map((diagram) => `${diagram?.title || ""}\n${diagram?.mermaid || ""}`)
    .join("\n");
  const hasLegacyPddDiagramSet = /\u5e97\u94fa\/\u5546\u54c1\u94fe\u63a5|\u622a\u56fe\/OCR \u4ef7\u683c|\u8be6\u60c5\u4e0e SKU|\u6821\u51c6\uff1a\u4ef7\u683c\u533a\u57df|\u4ea4\u4ed8\uff1aExcel\s*\+ \u590d\u67e5\u8bc1\u636e/.test(savedDiagramText);
  const hasRedditDiagramSet = /Reddit|帖子|评论|社区|RAG|知识块|需求挖掘/i.test(savedDiagramText);
  const hasForeignProjectDiagramSet = (hasRedditDiagramSet && !isCurrentRedditProject) || (hasLegacyPddDiagramSet && !isCurrentPddProject);
  const hasThinDiagramSet = safeDiagrams.some((diagram) => {
    const nodeCount = (String(diagram?.mermaid || "").match(/\b[A-Za-z]\w*\s*\[/g) || []).length;
    const metricCount = Array.isArray(diagram?.metrics) ? diagram.metrics.filter((item) => item?.label && item?.value && !["—", "-", "待补充"].includes(String(item.value))).length : 0;
    return !String(diagram?.description || "").trim() || metricCount < 2 || nodeCount < 6 || !/-\./.test(String(diagram?.mermaid || ""));
  });
  const shouldUseStandardSet = isCurrentPddProject && safeDiagrams.some((diagram) => /项目总流程|平台承载关系|技术模块架构|任务运行机制|系统支撑架构/.test(String(diagram?.title || "")));
  const shouldRebuildFromCurrentProfile = !safeDiagrams.length || hasMismatchedDiagramOwner || hasForeignProjectDiagramSet || shouldUseStandardSet || (!isCurrentPddProject && hasThinDiagramSet);
  const effectiveDiagrams = shouldRebuildFromCurrentProfile || isCurrentPddProject ? profileDiagrams : safeDiagrams;
  if (currentAnalysisResult && activeProjectPathKey) {
    currentAnalysisResult.diagrams = JSON.parse(JSON.stringify(effectiveDiagrams));
    currentAnalysisResult.diagramProjectPath = activeProjectPathKey;
    currentAnalysisResult.diagramProjectName = String(profile.projectName || "").trim();
  }
  const viewDiagrams = effectiveDiagrams.map(normalizeDiagramForProductView);
  list.innerHTML = viewDiagrams
    .map(
      (diagram, diagramIndex) => `
        <article class="diagram-card">
          <div class="diagram-heading-row">
            <h4>${escapeHtml(diagram.title)}</h4>
            <div class="content-tools">
              <button class="ghost-button compact" type="button" data-copy-target="diagram-card">复制文字</button>
              <button class="image-add-button diagram-add-button image-paste-zone" type="button" data-add-image-scope="diagram-${diagramIndex}" data-paste-image-scope="diagram-${diagramIndex}" aria-label="添加流程图配图，可直接粘贴" title="点击选择图片，或按 Ctrl+V 粘贴">+</button>
              <input class="image-scope-input" type="file" accept="image/*" multiple data-image-scope="diagram-${diagramIndex}" aria-label="添加流程图配图">
            </div>
          </div>
          ${diagram.description ? `<p class="diagram-description">${escapeHtml(diagram.description)}</p>` : ""}
          ${renderDiagramMetrics(diagram.metrics)}
          <div class="visual-flow">${renderVisualFlow(diagram.mermaid || "", diagram.title)}</div>
          <div class="image-strip section-images" data-image-preview="diagram-${diagramIndex}" data-image-scope="diagram-${diagramIndex}" tabindex="0" aria-label="${escapeHtml(diagram.title)}配图"></div>
          <pre class="mermaid-code" hidden>${escapeHtml(diagram.mermaid || "")}</pre>
        </article>
      `
    )
    .join("");
  list.querySelectorAll(".diagram-card").forEach((card, diagramIndex) => {
    const preview = card.querySelector(`[data-image-preview="diagram-${diagramIndex}"]`);
    if (!preview) return;
    renderImagePreview(`diagram-${diagramIndex}`, preview);
  });
}

function renderDiagramMetrics(metrics) {
  if (!Array.isArray(metrics) || !metrics.length) return "";
  return `<div class="diagram-metrics" aria-label="关键指标">${metrics
    .map((item) => `<span class="diagram-metric"><small>${escapeHtml(item.label)}</small><strong>${escapeHtml(item.value)}</strong></span>`)
    .join("")}</div>`;
}

function isPddProjectProfile(profile, projectPath = "") {
  const normalizedPath = String(projectPath || getActiveProjectPath() || "").replace(/\//g, "\\").toLowerCase();
  const projectName = String(profile?.projectName || "");
  const isPddPath = /\\pdd(?:\\see)?$/.test(normalizedPath);
  const isRedditPath = /\\reddit(?:\\|$)/.test(normalizedPath);
  if (isRedditPath) return false;
  const isPddName = /(^|\b)PDD\b|拼多多/i.test(projectName);
  // 业务资料可以合法提到 PDD、商品、SKU、OCR 或 Excel；这些词不能覆盖当前项目身份。
  // 只有显式项目路径或项目名称确认是 PDD 时，才允许使用 PDD 专用流程图模板。
  return isPddPath || isPddName;
}

function renderVisualFlow(mermaid, title = "项目图示") {
  const graph = parseMermaidGraph(mermaid, title);
  if (!graph.nodes.length) return `<div class="flow-empty">暂无可展示的流程</div>`;
  const linearNodeIds = new Set(graph.edges.filter((edge) => !edge.label).flatMap((edge) => [edge.from, edge.to]));
  const mainNodes = graph.nodes.filter((node) => linearNodeIds.has(node.id)).slice(0, 8);
  const visibleNodes = mainNodes.length ? mainNodes : graph.nodes.slice(0, 8);
  const mainHtml = visibleNodes.map((node, index) => renderFlowNode(node, index)).join("");
  const branchHtml = renderFlowBranches(graph);
  return `<div class="flow-diagram" role="img" aria-label="${escapeHtml(title)}"><div class="flow-main">${mainHtml}</div>${branchHtml ? `<div class="flow-branches">${branchHtml}</div>` : ""}</div>`;
}

function renderFlowBranches(graph) {
  const labeledEdges = graph.edges.filter((edge) => edge.label);
  const used = new Set();
  return labeledEdges
    .map((edge, index) => {
      if (used.has(index)) return "";
      const returnIndex = labeledEdges.findIndex((candidate, candidateIndex) => candidateIndex !== index && candidate.from === edge.to);
      const returnEdge = returnIndex >= 0 ? labeledEdges[returnIndex] : null;
      used.add(index);
      if (returnEdge) used.add(returnIndex);
      const from = graph.nodeMap.get(edge.from);
      const to = graph.nodeMap.get(edge.to);
      const returnTarget = returnEdge ? graph.nodeMap.get(returnEdge.to) : null;
      const trigger = [from?.label || "流程节点", edge.label].filter(Boolean).join(" · ");
      const returnHtml = returnEdge && returnTarget
        ? `<span class="flow-branch-return"><span class="flow-return-icon" aria-hidden="true">↺</span>${escapeHtml(returnEdge.label)} · ${escapeHtml(returnTarget.label)}</span>`
        : "";
      return `<div class="flow-branch"><span class="flow-branch-trigger">${escapeHtml(trigger)}</span><span class="flow-arrow" aria-hidden="true">→</span>${renderFlowNode(to || { label: "人工处理" }, 0, true)}${returnHtml ? `<span class="flow-arrow" aria-hidden="true">→</span>${returnHtml}` : ""}</div>`;
    })
    .join("");
}

function parseMermaidGraph(mermaid, title) {
  const nodes = [];
  const nodeMap = new Map();
  const addNode = (id, rawLabel = "") => {
    if (!id || nodeMap.has(id)) return;
    const label = compactDiagramLabel(rawLabel || id, title);
    const node = { id, label };
    nodes.push(node);
    nodeMap.set(id, node);
  };
  for (const match of String(mermaid || "").matchAll(/\b([A-Za-z]\w*)\s*\["?([^\]"\n]+)"?\]/g)) {
    addNode(match[1], match[2]);
  }
  const edges = [];
  for (const line of String(mermaid || "").split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z]\w*)(?:\s*\[[^\]]+\])?\s*(?:-->|-\.\s*(.*?)\s*\.->)\s*([A-Za-z]\w*)/);
    if (!match) continue;
    const edge = { from: match[1], label: String(match[2] || "").trim(), to: match[3] };
    addNode(edge.from);
    addNode(edge.to);
    edges.push(edge);
  }
  return { nodes, nodeMap, edges };
}

function renderFlowNode(node, index, branch = false) {
  const number = branch ? "↳" : String(index + 1).padStart(2, "0");
  return `<span class="flow-node${branch ? " flow-node-branch" : ""}"><span class="flow-step-number">${number}</span><span class="flow-node-label">${escapeHtml(node.label || "待补充")}</span></span>`;
}

function renderProfile(profile) {
  document.querySelector("#profileTitle").textContent = profile.projectName || "项目画像";
  document.querySelector("#profilePositioning").textContent = profile.positioning || "待分析";
  document.querySelector("#profileProblem").textContent = profile.coreProblem || "待分析";
  renderList("#profileUsers", profile.targetUsers);
  renderList("#profileWorkflow", profile.workflow);
  renderList("#profileModules", profile.technicalModules);
  renderList("#profileDecisions", profile.engineeringDecisions);
}

function renderAudit(audit) {
  const safeAudit = audit || buildManualAudit(sourceInput?.value || "");
  renderReadSummary(safeAudit);
  const counts = safeAudit.counts || {};
  const mode = document.querySelector("#analysisMode");
  const state = document.querySelector("#auditState");
  const headline = document.querySelector("#auditHeadline");
  const nextAction = document.querySelector("#auditNextAction");
  const stats = document.querySelector("#auditStats");
  const confirmed = document.querySelector("#auditConfirmed");
  const limitations = document.querySelector("#auditLimitations");
  const evidence = document.querySelector("#auditEvidenceLedger");
  const artifacts = document.querySelector("#auditArtifacts");
  if (!mode || !state || !headline || !nextAction || !stats || !confirmed || !limitations || !evidence || !artifacts) return;

  mode.textContent = [safeAudit.mode, safeAudit.analysisMode].filter(Boolean).join(" · ") || "分析状态待确认";
  state.textContent = safeAudit.statusLabel || "状态待确认";
  state.className = `audit-state ${safeAudit.status === "partial" ? "is-warning" : safeAudit.status === "manual" ? "is-risk" : "is-good"}`;
  headline.textContent = safeAudit.headline || "暂无读取审计结果";
  nextAction.textContent = safeAudit.nextAction || "请先读取项目目录。";
  stats.innerHTML = [
    ["候选文本文件", counts.candidateFiles ?? 0],
    ["已读取摘要", counts.selectedTextFiles ?? 0],
    ["待解析交付物", counts.unparsedArtifacts ?? 0],
    ["关联成长档案", counts.linkedGrowthDocs ?? 0]
  ]
    .map(([label, value]) => `<article><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></article>`)
    .join("");
  confirmed.innerHTML = (safeAudit.confirmed?.length ? safeAudit.confirmed : ["暂无已确认事实"]) 
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
  limitations.innerHTML = (safeAudit.limitations?.length ? safeAudit.limitations : ["暂无未验证项"]) 
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
  evidence.innerHTML = (safeAudit.evidenceLedger?.length ? safeAudit.evidenceLedger : [])
    .map(
      (item) => `
        <article class="audit-evidence-row">
          <div><strong>${escapeHtml(item.claim)}</strong><span>${escapeHtml(item.evidenceType || "证据")}</span></div>
          <p>${escapeHtml(item.sourceFile || "未标明来源")} · ${escapeHtml(item.status || "待核验")}</p>
        </article>
      `
    )
    .join("") || `<p class="audit-empty">暂无文件证据，请先读取项目目录。</p>`;
  artifacts.innerHTML = (safeAudit.unparsedArtifacts?.length ? safeAudit.unparsedArtifacts : [])
    .slice(0, 40)
    .map((item) => `<li>${escapeHtml(item.relative)} · ${escapeHtml(item.kind || "待解析交付物")} · ${escapeHtml(item.status || "存在")}</li>`)
    .join("") || `<li>暂无待解析交付物</li>`;
}

function renderReadSummary(audit) {
  const state = document.querySelector("#readSummaryState");
  const headline = document.querySelector("#readSummaryHeadline");
  const risk = document.querySelector("#readSummaryRisk");
  const files = document.querySelector("#readSummaryFiles");
  const artifacts = document.querySelector("#readSummaryArtifacts");
  const growth = document.querySelector("#readSummaryGrowth");
  if (!state || !headline || !risk) return;
  const limitations = Array.isArray(audit.limitations) ? audit.limitations : [];
  const counts = audit.counts || {};
  state.textContent = audit.statusLabel || "等待读取项目";
  state.className = `read-summary-state ${audit.status === "partial" ? "is-warning" : audit.status === "manual" ? "is-risk" : "is-good"}`;
  const selectedFiles = Number(counts.selectedTextFiles || 0);
  headline.textContent = selectedFiles ? `已读取 ${selectedFiles} 项` : "待读取";
  risk.textContent = limitations.length ? `待核验 ${limitations.length} 项` : "暂无异常";
  if (files) files.textContent = String(counts.selectedTextFiles || 0);
  if (artifacts) artifacts.textContent = String(counts.unparsedArtifacts || 0);
  if (growth) growth.textContent = String(counts.linkedGrowthDocs || 0);
  renderInputReadiness();
}

function renderList(selector, items) {
  const safeItems = Array.isArray(items) && items.length ? items : ["待分析"];
  document.querySelector(selector).innerHTML = safeItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function resetOutputPanels() {
  currentReadAudit = null;
  renderAudit(buildManualAudit(sourceInput?.value || ""));
  document.querySelector("#profileTitle").textContent = "项目画像";
  document.querySelector("#profilePositioning").textContent = "先读取项目，再生成项目定位、用户痛点、核心流程和证据链。";
  document.querySelector("#profileProblem").textContent = "待分析";
   ["#profileUsers", "#profileWorkflow", "#profileModules", "#profileDecisions"].forEach((selector) => renderList(selector, ["待分析"]));
  document.querySelector("#detailTitle").textContent = "完整项目介绍";
  document.querySelector("#detailArticle").innerHTML = "";
  document.querySelector("#diagramList").innerHTML = "";
  document.querySelector("#landingTitle").textContent = "待生成";
  document.querySelector("#landingText").textContent = "新建项目后，读取资料并生成落地页内容。";
  document.querySelector("#landingBullets").innerHTML = "";
  document.querySelector("#briefText").textContent = "待生成";
  document.querySelector("#promoFlow").innerHTML = "";
  document.querySelector("#promoList").innerHTML = "";
  renderCommercialPlan({
    name: "项目拆解售卖包",
    price: "待定",
    deliverables: [],
    commercialization: buildCommercializationPlan("项目拆解售卖包")
  });
  renderPricingPage();
}

function addProjectCard(title, summary, provider) {
  const rail = document.querySelector("#projectRail");
  const existing = Array.from(rail.querySelectorAll(".project-card h3")).find((item) => item.textContent === title);
  if (existing) return;
  const card = document.createElement("article");
  card.className = "project-card";
  card.innerHTML = `
    <span class="tag">${escapeHtml(provider || "Generated")}</span>
    <h3>${escapeHtml(title)}</h3>
    <div class="metric-row">
      <span>生成来源</span>
      <strong>项目拆解</strong>
    </div>
  `;
  rail.prepend(card);
}

function resetWorkDbConnection() {
  const currentPromise = workDbPromise;
  workDbPromise = null;
  if (currentPromise) {
    currentPromise.then((db) => {
      try {
        db.close();
      } catch {
        // The connection may already be closed.
      }
    }).catch(() => {});
  }
}

function openWorkDb() {
  if (workDbPromise) return workDbPromise;
  if (!window.indexedDB) {
    const error = new Error("浏览器不支持本机数据库");
    error.code = "WORK_STORAGE_UNAVAILABLE";
    return Promise.reject(error);
  }
  workDbPromise = new Promise((resolve, reject) => {
    const request = window.indexedDB.open(workDbName, workDbVersion);
    let settled = false;
    const finishError = (error) => {
      if (settled) return;
      settled = true;
      workDbPromise = null;
      reject(error || new Error("本机作品数据库打开失败"));
    };
    const blockedTimer = window.setTimeout(() => {
      const error = new Error("本机作品数据库被其他页面占用");
      error.code = "WORK_STORAGE_BLOCKED";
      finishError(error);
    }, 1500);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(workDbStore)) {
        db.createObjectStore(workDbStore, { keyPath: "id" });
      }
    };
    request.onsuccess = () => {
      if (settled) return;
      window.clearTimeout(blockedTimer);
      const db = request.result;
      if (!db.objectStoreNames.contains(workDbStore)) {
        try {
          db.close();
        } catch {
          // Ignore a connection that is already closed.
        }
        const error = new Error("本机作品数据库缺少作品存储区");
        error.code = "WORK_STORAGE_SCHEMA_INVALID";
        finishError(error);
        return;
      }
      settled = true;
      db.onversionchange = () => db.close();
      resolve(db);
    };
    request.onerror = () => {
      window.clearTimeout(blockedTimer);
      finishError(request.error);
    };
    request.onabort = () => {
      window.clearTimeout(blockedTimer);
      finishError(request.error || new Error("本机作品数据库升级失败"));
    };
  });
  return workDbPromise;
}

function runWorkDbTransaction(mode, operation) {
  return openWorkDb().then((db) => new Promise((resolve, reject) => {
    let transaction;
    let request;
    let result;
    let settled = false;
    const finishError = (error) => {
      if (settled) return;
      settled = true;
      reject(error || new Error("本机作品保存事务失败"));
    };
    try {
      transaction = db.transaction(workDbStore, mode);
      request = operation(transaction.objectStore(workDbStore));
      request.onsuccess = () => {
        result = request.result;
      };
      request.onerror = () => finishError(request.error);
      transaction.oncomplete = () => {
        if (settled) return;
        settled = true;
        resolve(result);
      };
      transaction.onabort = () => finishError(transaction.error);
      transaction.onerror = () => finishError(transaction.error);
    } catch (error) {
      finishError(error);
    }
  }));
}

function getWorkStorageKey(id) {
  return `${workLocalStoragePrefix}${encodeURIComponent(String(id || ""))}`;
}

const browserWorkFallbackMaxBytes = 220000;

function buildBrowserFallbackWork(work) {
  const cover = String(work?.cover || "");
  return {
    id: String(work?.id || ""),
    title: String(work?.title || "未命名项目"),
    summary: String(work?.summary || ""),
    tag: String(work?.tag || "项目展示"),
    value: String(work?.value || ""),
    oneLine: String(work?.oneLine || ""),
    keywords: Array.isArray(work?.keywords) ? work.keywords.slice(0, 8) : [],
    projectPath: String(work?.projectPath || ""),
    pricing: work?.pricing?.products?.length ? serializePricingPage(work.pricing) : null,
    status: String(work?.status || "generated"),
    visibility: work?.visibility === "hidden" ? "hidden" : "visible",
    published: Boolean(work?.published),
    publishedAt: String(work?.publishedAt || ""),
    createdAt: String(work?.createdAt || ""),
    sortOrder: Number.isFinite(work?.sortOrder) ? work.sortOrder : 999,
    featuredShowcase: Boolean(work?.featuredShowcase),
    hideCardActions: Boolean(work?.hideCardActions),
    cover: cover && !cover.startsWith("data:image/") ? cover : ""
  };
}

function isBrowserStorageQuotaError(error) {
  return error?.name === "QuotaExceededError" || error?.code === 22 || error?.code === 1014;
}

function pruneOversizedBrowserFallbackRecords(excludeKey = "") {
  try {
    Object.keys(window.localStorage)
      .filter((key) => key.startsWith(workLocalStoragePrefix))
      .forEach((key) => {
        const value = window.localStorage.getItem(key) || "";
        if (key === excludeKey || value.length > browserWorkFallbackMaxBytes) {
          window.localStorage.removeItem(key);
        }
      });
  } catch {
    // 本机备用存储只承担降级作用，清理失败不应影响服务端和 IndexedDB。
  }
}

function getBrowserWorkRecords() {
  try {
    return Object.keys(window.localStorage)
      .filter((key) => key.startsWith(workLocalStoragePrefix))
      .map((key) => {
        try {
          return JSON.parse(window.localStorage.getItem(key) || "null");
        } catch {
          return null;
        }
      })
      .filter((work) => work && work.id);
  } catch {
    return [];
  }
}

function saveBrowserWorkRecord(work) {
  const key = getWorkStorageKey(work.id);
  const payload = JSON.stringify(buildBrowserFallbackWork(work));
  try {
    window.localStorage.setItem(key, payload);
  } catch (error) {
    if (!isBrowserStorageQuotaError(error)) throw error;
    pruneOversizedBrowserFallbackRecords(key);
    window.localStorage.setItem(key, payload);
  }
}

function deleteBrowserWorkRecord(id) {
  try {
    window.localStorage.removeItem(getWorkStorageKey(id));
    return true;
  } catch {
    return false;
  }
}

function mergeWorkRecords(primary, fallback) {
  const records = new Map();
  [...(fallback || []), ...(primary || [])].forEach((work) => {
    if (work?.id) records.set(String(work.id), work);
  });
  return [...records.values()];
}

async function saveWorkRecord(work) {
  if (work?.id) workMemoryRecords.set(String(work.id), work);
  let lastError;
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      await runWorkDbTransaction("readwrite", (store) => store.put(work));
      try {
        saveBrowserWorkRecord(work);
      } catch (error) {
        console.warn("本机作品备用存储不可用，IndexedDB 已保存", error);
      }
      return { storage: "indexeddb" };
    } catch (error) {
      lastError = error;
      console.warn(`本机作品保存第 ${attempt + 1} 次失败，准备恢复本机存储`, error);
      resetWorkDbConnection();
      if (["WORK_STORAGE_BLOCKED", "WORK_STORAGE_SCHEMA_INVALID"].includes(String(error?.code || ""))) break;
    }
  }

  try {
    saveBrowserWorkRecord(work);
    return { storage: "browser-fallback" };
  } catch (fallbackError) {
    const error = new Error("浏览器本机存储不可用");
    error.code = "WORK_STORAGE_UNAVAILABLE";
    error.cause = lastError || fallbackError;
    throw error;
  }
}

async function getWorkRecords() {
  const fallback = getBrowserWorkRecords();
  try {
    const works = await runWorkDbTransaction("readonly", (store) => store.getAll());
    return mergeWorkRecords(works, [...fallback, ...workMemoryRecords.values()]);
  } catch (error) {
    console.warn("读取本机作品失败，改用浏览器备用存储", error);
    resetWorkDbConnection();
    return mergeWorkRecords([], [...fallback, ...workMemoryRecords.values()]);
  }
}

function normalizeProjectPath(path) {
  return String(path || "")
    .trim()
    .replace(/\//g, "\\")
    .replace(/[\\]+$/, "")
    .toLowerCase();
}

function getActiveProjectPath() {
  return String(projectPathInput?.value || currentRecordProjectPath || "").trim();
}

function openDraftDb() {
  if (draftDbPromise) return draftDbPromise;
  draftDbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(draftDbName, 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore(draftDbStore, { keyPath: "pathKey" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  return draftDbPromise;
}

function getBrowserDraftStorageKey(pathKey) {
  return `display-os-project-draft:${encodeURIComponent(pathKey)}`;
}

function getBrowserDrafts() {
  try {
    return Object.keys(localStorage)
      .filter((key) => key.startsWith("display-os-project-draft:"))
      .map((key) => {
        try {
          return JSON.parse(localStorage.getItem(key) || "null");
        } catch {
          return null;
        }
      })
      .filter((draft) => draft?.pathKey && draft?.path)
      .sort((a, b) => new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0));
  } catch {
    return [];
  }
}

function saveBrowserDraft(draft) {
  try {
    localStorage.setItem(getBrowserDraftStorageKey(draft.pathKey), JSON.stringify(draft));
    return true;
  } catch {
    return false;
  }
}

async function getAllProjectDrafts() {
  const fallback = getBrowserDrafts();
  if (!window.indexedDB) return fallback;
  try {
    const db = await openDraftDb();
    const drafts = await new Promise((resolve, reject) => {
      const request = db.transaction(draftDbStore, "readonly").objectStore(draftDbStore).getAll();
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error);
    });
    const validDrafts = drafts
      .filter((draft) => draft?.pathKey && draft?.path)
      .sort((a, b) => new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0));
    return validDrafts.length ? validDrafts : fallback;
  } catch {
    return fallback;
  }
}

async function deleteProjectDraftByPath(projectPath) {
  const pathKey = normalizeProjectPath(projectPath);
  if (!pathKey) return false;
  try {
    localStorage.removeItem(getBrowserDraftStorageKey(pathKey));
  } catch {
    // IndexedDB deletion below remains the authoritative local cleanup path.
  }
  if (!window.indexedDB) return true;
  try {
    const db = await openDraftDb();
    await new Promise((resolve, reject) => {
      const request = db.transaction(draftDbStore, "readwrite").objectStore(draftDbStore).delete(pathKey);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } catch {
    return false;
  }
  return true;
}

async function deleteProjectHistoryEntry({ key, source, path, title }) {
  const normalizedSource = String(source || "local");
  const projectPath = String(path || "").trim();
  let responseData = null;

  if (normalizedSource === "record") {
    const recordKey = String(key || "").replace(/^record:/, "");
    const response = await fetch(`/api/project-records/${encodeURIComponent(recordKey)}`, { method: "DELETE" });
    responseData = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(responseData.error || "项目记录删除失败");
  } else if (normalizedSource === "server") {
    const showcaseId = String(key || "").replace(/^server:/, "");
    const response = await fetch(`/api/showcase-projects/${encodeURIComponent(showcaseId)}`, { method: "DELETE" });
    responseData = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(responseData.error || "展示记录删除失败");
  }

  if (projectPath && !(await deleteProjectDraftByPath(projectPath))) {
    throw new Error("项目本地草稿删除失败");
  }
  return {
    title: responseData?.title || title || "项目",
    projectPath,
    sourcePreserved: responseData?.sourcePreserved !== false,
    assetPreserved: responseData?.assetPreserved !== false
  };
}

const legacyGeneratedProjectTitles = new Set([
  featuredProject.title,
  "PDD 店铺商品采集平台",
  "PDD商品可视化采集平台"
]);

function getProjectTitleFromSource(source) {
  const firstHeading = String(source || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find((line) => /^#\s+/.test(line));
  if (!firstHeading) return "";
  const match = firstHeading.match(/^#\s+(?:读取整理稿|精选示例整理稿|项目名称)\s*[:：]?\s*(.+)$/i);
  return String(match?.[1] || firstHeading.replace(/^#\s+/, ""))
    .replace(/\s+/g, " ")
    .trim();
}

function resolveProjectTitle(record) {
  const explicitTitle = String(record?.title || "").trim();
  const sourceTitle = getProjectTitleFromSource(record?.source);
  if (sourceTitle && (!explicitTitle || legacyGeneratedProjectTitles.has(explicitTitle))) {
    return sourceTitle;
  }
  return explicitTitle || sourceTitle || "未命名项目";
}

async function getRecoveredProjectDrafts() {
  const recovered = [];
  try {
    const response = await fetch("/api/project-records", { cache: "no-store" });
    if (response.ok) {
      const data = await response.json();
     const records = Array.isArray(data.records) ? data.records : [];
      for (const record of records) {
        if (!record?.key) continue;
        let hydratedRecord = record;
        if (legacyGeneratedProjectTitles.has(String(record.title || "").trim())) {
          try {
            const detailResponse = await fetch("/api/project-records/" + encodeURIComponent(record.key), { cache: "no-store" });
            const detailData = await detailResponse.json().catch(() => ({}));
            hydratedRecord = detailData.record || record;
          } catch {
            // 列表接口仍可提供项目路径和保存时间，详情读取失败时保留列表标题。
          }
        }
        recovered.push({
          pathKey: "record:" + (hydratedRecord.key || record.key),
          path: hydratedRecord.projectPath || record.projectPath || "",
          title: resolveProjectTitle(hydratedRecord),
          updatedAt: hydratedRecord.updatedAt || record.updatedAt || "",
          sourceType: "record",
          recordKey: hydratedRecord.key || record.key
        });
      }
    }
  } catch {
    // The browser cache can still provide local drafts when the service is unavailable.
  }
  try {
    const projects = await fetchRestoredShowcaseProjects();
    projects
      .filter((project) => project?.id)
      .forEach((project) => {
        recovered.push({
          pathKey: `server:${project.id}`,
          path: project.projectPath || project.title || "服务端项目档案",
          title: project.title || "未命名项目",
          updatedAt: project.updatedAt || "",
          sourceType: "server",
          projectId: project.id
        });
      });
  } catch {
    // Curated showcase records are optional and should not block project recovery.
  }
  return recovered;
}

function mergeProjectHistory(localDrafts, recoveredDrafts) {
  const seen = new Set();
  const merged = [];
  for (const draft of [...recoveredDrafts, ...localDrafts]) {
    const normalizedPath = normalizeProjectPath(draft.path);
    const identity = normalizedPath
      ? `path:${normalizedPath}`
      : `source:${draft.sourceType || "local"}:${String(draft.pathKey || "").toLowerCase()}`;
    if (!identity || seen.has(identity)) continue;
    seen.add(identity);
    merged.push(draft);
  }
  return merged;
}

function formatProjectUpdatedAt(value) {
  const date = new Date(value || 0);
  if (Number.isNaN(date.getTime())) return "已保存";
  return `最近保存 ${date.toLocaleString("zh-CN", { hour12: false })}`;
}

async function renderProjectHistoryOptions() {
  if (!projectHistoryMenu) return;
  const localDrafts = await getAllProjectDrafts();
  const recoveredDrafts = await getRecoveredProjectDrafts();
  const drafts = mergeProjectHistory(localDrafts, recoveredDrafts);
  const currentKey = normalizeProjectPath(projectPathInput.value);
  if (!drafts.length) {
    projectHistoryMenu.innerHTML = `<div class="project-history-empty">暂无历史项目</div>`;
    return;
  }
  projectHistoryMenu.innerHTML = drafts
    .map((draft) => {
      const active = draft.pathKey === currentKey || normalizeProjectPath(draft.path) === currentKey ? " is-active" : "";
      const sourceLabel = draft.sourceType === "server"
        ? "已恢复档案"
        : draft.sourceType === "record"
          ? "已保存记录"
          : "本地草稿";
      return `
        <div class="project-history-item${active}">
          <button class="project-history-open" type="button" title="${escapeHtml(draft.path || "项目路径未记录")}" data-project-key="${escapeHtml(draft.pathKey)}" data-project-source="${escapeHtml(draft.sourceType || "local")}" data-project-path="${escapeHtml(draft.path || "")}">
            <span class="project-history-title">${escapeHtml(draft.title || "未命名项目")} · ${escapeHtml(sourceLabel)}</span>
            <span class="project-history-path">项目目录：${escapeHtml(draft.path || "未记录")}</span>
            <span class="project-history-time">${escapeHtml(formatProjectUpdatedAt(draft.updatedAt))}</span>
          </button>
          <button class="project-history-delete" type="button" data-delete-project-key="${escapeHtml(draft.pathKey)}" data-delete-project-source="${escapeHtml(draft.sourceType || "local")}" data-delete-project-path="${escapeHtml(draft.path || "")}" aria-label="删除项目记录" title="删除记录">×</button>
        </div>
      `;
    })
    .join("");
}

async function restoreProjectDraftByKey(pathKey) {
  if (!pathKey) return false;
  if (String(pathKey).startsWith("record:")) {
    return restoreRemoteProjectRecord(String(pathKey).slice("record:".length));
  }
  if (String(pathKey).startsWith("server:")) {
    return restoreRecoveredProject(String(pathKey).slice("server:".length));
  }
  const drafts = await getAllProjectDrafts();
  const draft = drafts.find((item) => item.pathKey === pathKey);
  if (!draft) return false;
  return restoreProjectDraft(draft.path);
}

async function applyProjectRecord(record, statusLabel = "") {
  if (!record?.projectPath) return false;
  clearRetainedShowcaseForNewProject();
  isRestoringDraft = true;
  let loadedAnalysisPrice = "";
  try {
    const recordPathKey = normalizeProjectPath(record.projectPath);
    projectPathInput.value = record.projectPath || "";
      titleInput.value = resolveProjectTitle(record);
      setSourceText(record.source || "");
      currentAnalysisResult = record.analysis || null;
      loadedAnalysisPrice = currentAnalysisResult?.paidIdea?.price || "";
      currentPublishedShowcase = record.showcase?.published ? record.showcase : null;
      currentPricingPage = record.pricing?.products?.length ? record.pricing : null;
      currentRecordProjectPath = recordPathKey;
      currentShowcaseOwnerPath = currentPublishedShowcase ? recordPathKey : "";
      currentPricingOwnerPath = currentPricingPage ? recordPathKey : "";
      if (currentPublishedShowcase || currentPricingPage) clearRetainedShowcaseForNewProject();
      currentReadAudit = currentAnalysisResult?.audit || null;
    hasReadProject = Boolean(currentReadAudit && currentReadAudit.status !== "manual");
    supplementalMaterialName = "";
    resetImageStore(record.images || {});
    currentImageProjectKey = getProjectImageStorageKey();
    try {
      await setStoredProjectImages(currentImageProjectKey, imageStore);
    } catch {
      // Server-side record remains the source of truth when browser storage is unavailable.
    }
    if (currentAnalysisResult) {
      await renderAnalysis(currentAnalysisResult);
    } else {
      await renderAllPanelImages();
      resetOutputPanels();
    }
    activateTab(record.activeTab || "profile");
  } finally {
    isRestoringDraft = false;
  }
  if (currentAnalysisResult?.paidIdea && currentAnalysisResult.paidIdea.price !== loadedAnalysisPrice) {
    await saveProjectRecord({ silent: true }).catch(() => {});
  }
  await renderPricingPage(currentPricingPage);
  await renderGeneratedWorks({ onlyCurrent: false }).catch(() => {});
  await renderProjectHistoryOptions();
  updateGenerateShowcaseButtonLabel();
  if (statusLabel) setStatus(statusLabel, "ok");
  return true;
}

async function restoreRemoteProjectRecord(recordKey) {
  const response = await fetch(`/api/project-records/${encodeURIComponent(recordKey)}`, { cache: "no-store" });
  if (!response.ok) return false;
  const data = await response.json();
  const normalized = normalizePddRecordForDisplay(data.record);
  const applied = await applyProjectRecord(normalized, "当前项目已就绪");
  if (applied && normalized !== data.record) await saveProjectRecord({ silent: true }).catch(() => {});
  return applied;
}

async function restoreLatestProjectRecord() {
  const response = await fetch("/api/project-records/latest", { cache: "no-store" });
  if (!response.ok) return false;
  const data = await response.json();
  if (!data.record) return false;
  const normalized = normalizePddRecordForDisplay(data.record);
  const applied = await applyProjectRecord(normalized, "当前项目已就绪");
  if (applied && normalized !== data.record) await saveProjectRecord({ silent: true }).catch(() => {});
  return applied;
}

async function restoreSavedProjectAsset(asset, audit, projectPath, authoritativeTitle = "") {
  if (!asset) return false;
  const projectPathKey = normalizeProjectPath(projectPath);
  const repairedAsset = isStalePddAnalysisForProject(asset.analysis, projectPath)
    ? {
        ...asset,
        analysis: buildLocalAnalysis(
          authoritativeTitle || asset.manifest?.title || asset.project?.title || "Reddit RAG Training Console",
          asset.source || sourceInput.value || "",
          audit || asset.analysis?.audit || null,
          projectPath
        )
      }
    : asset;
  const restoredTitle = String(
    authoritativeTitle ||
    repairedAsset.manifest?.title ||
    repairedAsset.project?.title ||
    repairedAsset.analysis?.projectProfile?.projectName ||
    ""
  ).trim();
  if (!titleInput.value.trim() && restoredTitle) {
    titleInput.value = restoredTitle;
  }
  currentAnalysisResult = repairedAsset.analysis
    ? { ...repairedAsset.analysis, audit: audit || repairedAsset.analysis.audit || null }
    : null;
  currentPublishedShowcase = repairedAsset.showcase?.published ? repairedAsset.showcase : null;
  currentPricingPage = repairedAsset.pricing?.products?.length ? repairedAsset.pricing : null;
  currentRecordProjectPath = projectPathKey;
  currentShowcaseOwnerPath = currentPublishedShowcase ? projectPathKey : "";
  currentPricingOwnerPath = currentPricingPage ? projectPathKey : "";
  if (currentPublishedShowcase || currentPricingPage) clearRetainedShowcaseForNewProject();
  currentReadAudit = audit || currentAnalysisResult?.audit || null;
  hasReadProject = Boolean(currentReadAudit || currentAnalysisResult || repairedAsset.source);
  supplementalMaterialName = "";
  if (currentAnalysisResult) {
    await renderAnalysis(currentAnalysisResult);
  } else {
    resetOutputPanels();
  }
  resetImageStore(repairedAsset.images || {});
  currentImageProjectKey = getProjectImageStorageKey();
  try {
    await setStoredProjectImages(currentImageProjectKey, imageStore);
  } catch {
    // 项目目录资产包仍是恢复来源，浏览器缓存不可用不阻断恢复。
  }
  renderImagePreview("input", inputImagePreview);
  await renderAllPanelImages();
  await renderPricingPage(currentPricingPage);
  activateTab(repairedAsset.uiState?.activeTab || "profile");
  updateGenerateShowcaseButtonLabel();
  updateGeneratePricingButtonState();
  return true;
}

function normalizePddRecordForDisplay(record) {
  if (!record) return record;
  if (isStalePddAnalysisForProject(record.analysis, record.projectPath)) {
    return {
      ...record,
      analysis: buildLocalAnalysis(
        resolveProjectTitle(record) || "Reddit RAG Training Console",
        record.source || "",
        record.analysis?.audit || null,
        record.projectPath
      )
    };
  }
  const profile = record.analysis?.projectProfile;
  const hasUsableProfile = Boolean(
    profile &&
    typeof profile.positioning === "string" &&
    profile.positioning.trim() &&
    Array.isArray(profile.workflow) &&
    profile.workflow.length
  );
  if (hasUsableProfile || record.analysis?.profileVersion === "pdd-profile-20260807") return record;
  const normalizedPath = String(record.projectPath || "").replace(/\//g, "\\").toLowerCase();
  const isPddProject = /\\pdd(?:\\see)?$/.test(normalizedPath);
  if (!isPddProject) return record;
  return {
    ...record,
    title: resolveProjectTitle(record),
    source: record.source || featuredProject.source,
    analysis: JSON.parse(JSON.stringify(featuredProject.result))
  };
}

function isStalePddAnalysisForProject(analysis, projectPath = "") {
  if (!analysis || isPddProjectPath(projectPath)) return false;
  const profileName = String(analysis.projectProfile?.projectName || "");
  const landingTitle = String(analysis.landingTitle || "");
  return analysis.profileVersion === "pdd-profile-20260807" ||
    /PDD 店铺商品采集平台|PDD 商品|拼多多店铺|商品采集平台/i.test(`${profileName}\n${landingTitle}`);
}

function isPddProjectPath(projectPath = "") {
  const normalized = String(projectPath || "").replace(/\//g, "\\").toLowerCase();
  return /\\pdd(?:\\see)?$/i.test(normalized);
}

async function saveProjectRecord({ silent = false } = {}) {
  const save = async () => {
  if (isEditingProjectPath) return null;
  const projectPath = projectPathInput.value.trim();
  if (!projectPath) return null;
  const projectPathKey = normalizeProjectPath(projectPath);
  const ownsCurrentProjectState = currentRecordProjectPath === projectPathKey ||
    (currentRecordProjectPath === "" && Boolean(currentAnalysisResult && hasReadProject));
  if (ownsCurrentProjectState && currentAnalysisResult?.paidIdea) {
    repairProjectSpecificCommercialization(currentAnalysisResult.paidIdea);
  }
  const showcaseStateLoadedForProject = ownsCurrentProjectState && currentShowcaseOwnerPath === projectPathKey;
  const pricingStateLoadedForProject = ownsCurrentProjectState && currentPricingOwnerPath === projectPathKey;
  const imageStateLoadedForProject = currentImageProjectKey === getProjectImageStorageKey();
  const showcasePayload = showcaseStateLoadedForProject
    ? (currentPublishedShowcase ? serializeShowcaseSnapshot(currentPublishedShowcase) : null)
    : undefined;
  const pricingPayload = pricingStateLoadedForProject
    ? (currentPricingPage ? serializePricingPage(currentPricingPage) : null)
    : undefined;
  const response = await fetch("/api/project-records", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      projectPath,
      title: titleInput.value.trim(),
      ...(ownsCurrentProjectState ? { source: sourceInput.value, analysis: currentAnalysisResult } : {}),
      ...(imageStateLoadedForProject ? { images: imageStore } : {}),
      showcase: showcasePayload,
      pricing: pricingPayload,
      activeTab: getActiveTabId()
    })
  });
  const data = await response.json().catch(() => ({}));
  const serverErrorCode = data.code || "INTERNAL_ERROR";
  const serverErrorRetryable = Boolean(data.retryable);
  if (!response.ok || !data.record) {
    const error = new Error(data.error || "项目最新记录保存失败");
    if (!silent) setStatus("项目记录保存失败，请检查服务后重试", "error");
    error.code = serverErrorCode;
    error.retryable = serverErrorRetryable;
    throw error;
  }
  currentRecordProjectPath = projectPathKey;
  if (!silent && data.record.assetSaved === false) {
    setStatus("项目档案已保存，但项目目录资产包未写入，请检查目录权限", "warning");
  }
  return data.record;
  };
  const next = projectRecordSaveQueue.then(save, save);
  projectRecordSaveQueue = next.catch(() => {});
  return next;
}

async function saveProjectRecordWithRetry({ silent = false, attempts = 2 } = {}) {
  let lastError = null;
  const totalAttempts = Math.max(1, Number(attempts) || 1);
  for (let attempt = 0; attempt < totalAttempts; attempt += 1) {
    try {
      return await saveProjectRecord({ silent });
    } catch (error) {
      lastError = error;
      if (!error?.retryable || attempt >= totalAttempts - 1) break;
      await new Promise((resolve) => setTimeout(resolve, 180 * (attempt + 1)));
    }
  }
  throw lastError || new Error("项目档案保存失败");
}

async function clearActiveProjectRecord() {
  try {
    await fetch("/api/project-records/active", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: null })
    });
  } catch {
    // A blank new-project state should remain usable even if the service is unavailable.
  }
}

async function restoreRecoveredProject(projectId) {
  const response = await fetch(`/api/showcase-projects/${encodeURIComponent(projectId)}`, { cache: "no-store" });
  if (!response.ok) return false;
  const data = await response.json();
  const project = data.project;
  if (!project) return false;
  isRestoringDraft = true;
  const projectPathKey = normalizeProjectPath(project.projectPath || project.title);
  projectPathInput.value = project.projectPath || "";
  titleInput.value = project.title || "";
  setSourceText(project.source || "");
  const result = buildLocalAnalysis(project.title || "", project.source || "", null, project.projectPath || "");
  if (project.detail) result.detail = project.detail;
  currentAnalysisResult = result;
  currentPublishedShowcase = project.published ? project : null;
  clearRetainedShowcaseForNewProject();
  currentReadAudit = null;
  currentRecordProjectPath = projectPathKey;
  currentShowcaseOwnerPath = projectPathKey;
  currentPricingOwnerPath = "";
  hasReadProject = false;
  supplementalMaterialName = "";
  await renderAnalysis(result);
  await loadProjectImages({ force: true });
  await renderAllPanelImages();
  isRestoringDraft = false;
  await saveProjectDraft();
  await renderProjectHistoryOptions();
  setStatus("已恢复项目记录", "ok");
  return true;
}

async function saveProjectDraft() {
  const path = projectPathInput.value.trim();
  const pathKey = normalizeProjectPath(path);
  if (!pathKey || isRestoringDraft) return;
  const draft = {
    pathKey,
    path,
    title: titleInput.value.trim(),
    source: sourceInput.value,
    analysis: currentAnalysisResult,
    activeTab: getActiveTabId(),
    updatedAt: new Date().toISOString()
  };
  saveBrowserDraft(draft);
  if (window.indexedDB) {
    try {
      const db = await openDraftDb();
      await new Promise((resolve, reject) => {
        const request = db.transaction(draftDbStore, "readwrite").objectStore(draftDbStore).put(draft);
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
      });
    } catch {
      // localStorage fallback already contains the same draft.
    }
  }
  await renderProjectHistoryOptions();
}

function scheduleProjectDraftSave() {
  clearTimeout(draftSaveTimer);
  draftSaveTimer = setTimeout(() => {
    saveProjectDraft().catch(() => {});
  }, 350);
  clearTimeout(remoteDraftSaveTimer);
  remoteDraftSaveTimer = setTimeout(() => {
    saveProjectRecord({ silent: true }).catch(() => {});
  }, 1000);
}

async function getProjectDraft(path) {
  const pathKey = normalizeProjectPath(path);
  if (!pathKey) return null;
  const browserDraft = getBrowserDrafts().find((draft) => draft.pathKey === pathKey) || null;
  if (!window.indexedDB) return browserDraft;
  try {
    const db = await openDraftDb();
    const draft = await new Promise((resolve, reject) => {
      const request = db.transaction(draftDbStore, "readonly").objectStore(draftDbStore).get(pathKey);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
    return draft || browserDraft;
  } catch {
    return browserDraft;
  }
}

async function restoreProjectDraft(path) {
  const draft = await getProjectDraft(path);
  if (!draft || isReadingProject) return false;
  clearRetainedShowcaseForNewProject();
  isRestoringDraft = true;
  const draftPathKey = normalizeProjectPath(draft.path || path);
  projectPathInput.value = draft.path || path;
  titleInput.value = resolveProjectTitle(draft);
  setSourceText(draft.source || "");
  currentAnalysisResult = draft.analysis || null;
  currentReadAudit = currentAnalysisResult?.audit || null;
  currentRecordProjectPath = draftPathKey;
  currentShowcaseOwnerPath = "";
  currentPricingOwnerPath = "";
  hasReadProject = Boolean(currentReadAudit && currentReadAudit.status !== "manual");
  supplementalMaterialName = "";
  if (currentAnalysisResult) {
    await renderAnalysis(currentAnalysisResult);
  } else {
    await loadProjectImages({ force: true });
    await renderAllPanelImages();
    resetOutputPanels();
  }
  activateTab(draft.activeTab || "profile");
  isRestoringDraft = false;
  await renderPricingPage();
  await renderProjectHistoryOptions();
  setStatus("已恢复历史项目草稿", "ok");
  return true;
}

async function deleteWorkRecord(id) {
  workMemoryRecords.delete(String(id));
  let indexedDbError;
  try {
    await runWorkDbTransaction("readwrite", (store) => store.delete(id));
  } catch (error) {
    indexedDbError = error;
    resetWorkDbConnection();
  }
  const fallbackDeleted = deleteBrowserWorkRecord(id);
  if (indexedDbError && !fallbackDeleted) throw indexedDbError;
}

async function updateRemoteShowcase(id, patch = {}) {
  const response = await fetch(`/api/showcase-projects/${encodeURIComponent(id)}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ showcase: patch })
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "作品展示状态保存失败");
  return data.project || null;
}

async function deleteRemoteShowcase(id) {
  const response = await fetch(`/api/showcase-projects/${encodeURIComponent(id)}`, { method: "DELETE" });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "作品展示记录删除失败");
  return data;
}

function getCurrentShowcaseIdentity() {
  return normalizeProjectPath(
    projectPathInput?.value || currentPublishedShowcase?.projectPath || currentPublishedShowcase?.id || ""
  );
}

function clearRetainedShowcaseForNewProject() {
  retainedShowcaseProjectIdentity = "";
  retainedShowcaseSnapshot = null;
  retainedPricingPage = null;
}

function capturePreviousProjectDisplay() {
  const identity = normalizeProjectPath(
    currentShowcaseOwnerPath ||
      currentPricingOwnerPath ||
      (!currentPublishedShowcase && retainedShowcaseProjectIdentity
        ? retainedShowcaseProjectIdentity
        : projectPathInput?.value || "")
  );
  if (!identity) return "";
  retainedShowcaseProjectIdentity = identity;
  retainedShowcaseSnapshot = currentPublishedShowcase?.published
    ? JSON.parse(JSON.stringify(currentPublishedShowcase))
    : null;
  retainedPricingPage = currentPricingPage?.products?.length
    ? serializePricingPage(currentPricingPage)
    : null;
  return identity;
}

function getRequestedShowcaseIdentity(projectIdentity = "", onlyCurrent = true) {
  const explicitIdentity = normalizeProjectPath(projectIdentity);
  if (explicitIdentity) return explicitIdentity;
  const currentIdentity = getCurrentShowcaseIdentity();
  const currentOwnsShowcase = Boolean(
    currentPublishedShowcase?.published && currentShowcaseOwnerPath === currentIdentity
  );
  if (
    retainedShowcaseProjectIdentity &&
    retainedShowcaseProjectIdentity !== currentIdentity &&
    !currentOwnsShowcase
  ) {
    return retainedShowcaseProjectIdentity;
  }
  return onlyCurrent && currentOwnsShowcase ? currentIdentity : "";
}

function getWorkIdentity(work) {
  const stableId = String(work?.id || work?.showcase?.id || work?.projectKey || "").trim();
  return stableId ? stableId.toLowerCase() : normalizeProjectPath(work?.projectPath || "");
}

async function clearIndexedDbWorkRecordsExcept(keepId) {
  const keepIdentity = normalizeProjectPath(keepId);
  const db = await openWorkDb();
  await new Promise((resolve, reject) => {
    let transaction;
    let settled = false;
    const finishError = (error) => {
      if (settled) return;
      settled = true;
      reject(error || new Error("本机作品清理失败"));
    };
    try {
      transaction = db.transaction(workDbStore, "readwrite");
      const request = transaction.objectStore(workDbStore).openCursor();
      request.onsuccess = () => {
        const cursor = request.result;
        if (!cursor) return;
        if (normalizeProjectPath(cursor.value?.projectPath || cursor.value?.id) !== keepIdentity) {
          cursor.delete();
        }
        cursor.continue();
      };
      request.onerror = () => finishError(request.error);
      transaction.oncomplete = () => {
        if (settled) return;
        settled = true;
        resolve();
      };
      transaction.onabort = () => finishError(transaction.error);
      transaction.onerror = () => finishError(transaction.error);
    } catch (error) {
      finishError(error);
    }
  });
}

async function clearOtherWorkRecords(keepId) {
  const keepIdentity = normalizeProjectPath(keepId);
  [...workMemoryRecords.entries()].forEach(([id, work]) => {
    if (getWorkIdentity(work || { id }) !== keepIdentity) workMemoryRecords.delete(id);
  });
  getBrowserWorkRecords().forEach((work) => {
    if (getWorkIdentity(work) !== keepIdentity) deleteBrowserWorkRecord(work.id);
  });
  try {
    await clearIndexedDbWorkRecordsExcept(keepId);
  } catch (error) {
    console.warn("其他本机作品清理未完成，继续按当前项目渲染", error);
  }
}

async function clearOtherRemoteShowcases(keepId) {
  const response = await fetch(`/api/showcase-projects?keepId=${encodeURIComponent(keepId)}`, { method: "DELETE" });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "其他作品展示清理失败");
  return data;
}

function updateGenerateShowcaseButtonLabel() {
  if (!generateShowcaseButton) return;
  const currentPathKey = normalizeProjectPath(projectPathInput?.value || "");
  const hasPublished = Boolean(currentPublishedShowcase?.published && currentShowcaseOwnerPath === currentPathKey);
  const canPublish = Boolean(currentAnalysisResult && !isAnalyzing);
  generateShowcaseButton.textContent = hasPublished ? "重新生成" : "生成展示";
  generateShowcaseButton.setAttribute("aria-label", hasPublished ? "重新生成作品展示" : "生成作品展示");
  generateShowcaseButton.disabled = !canPublish || generateShowcaseButton.dataset.busy === "true";
  generateShowcaseButton.title = canPublish
    ? (hasPublished ? "基于最新项目分析重新生成落地展示" : "基于当前项目分析生成落地展示")
    : "请先读取项目并完成项目分析";
}

function updateGeneratePricingButtonState() {
  if (!generatePricingButton || generatePricingButton.dataset.busy === "true") return;
  const canGenerate = Boolean(currentAnalysisResult && !isReadingProject && !isAnalyzing);
  generatePricingButton.disabled = !canGenerate;
  generatePricingButton.title = canGenerate
    ? "根据当前项目分析生成售价方案"
    : "请先读取项目并完成项目分析";
}

function openPricingDb() {
  if (pricingDbPromise) return pricingDbPromise;
  pricingDbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(pricingDbName, 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore(pricingDbStore, { keyPath: "pathKey" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  return pricingDbPromise;
}

function getCurrentDraftKey() {
  return normalizeProjectPath(projectPathInput.value.trim() || titleInput.value.trim() || "untitled");
}

function serializePricingPage(page) {
  if (!page || !Array.isArray(page.products) || !page.products.length) return null;
  return {
    pricingVersion: String(page.pricingVersion || "project-fit-v2").trim(),
    pathKey: String(page.pathKey || getCurrentDraftKey()).trim(),
    title: String(page.title || titleInput.value.trim() || "项目拆解包").trim(),
    summary: String(page.summary || "").trim(),
    createdAt: String(page.createdAt || new Date().toISOString()),
    selectedProductId: String(page.selectedProductId || "").trim(),
    products: page.products
      .filter((product) => product && typeof product === "object")
      .slice(0, 10)
      .map((product, index) => ({
        id: String(product.id || `commercial-tier-${index + 1}`).trim(),
        name: String(product.name || "售价方案").trim(),
        description: String(product.description || "").trim(),
        price: String(product.price || "待定").trim(),
        comparePrice: String(product.comparePrice || "").trim(),
        badge: String(product.badge || "数字交付").trim(),
        cta: String(product.cta || "查看详情").trim(),
        discount: String(product.discount || "按范围报价").trim(),
        items: (Array.isArray(product.items) ? product.items : [])
          .map((item) => String(item || "").trim())
          .filter(Boolean)
          .slice(0, 10)
      }))
  };
}

async function savePricingPage(page) {
  const snapshot = serializePricingPage(page);
  if (!snapshot) return;
  currentPricingPage = snapshot;
  currentPricingOwnerPath = normalizeProjectPath(projectPathInput.value);
  const db = await openPricingDb();
  await new Promise((resolve, reject) => {
    const request = db.transaction(pricingDbStore, "readwrite").objectStore(pricingDbStore).put(snapshot);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

async function getPricingPage(pathKey = getCurrentDraftKey()) {
  if (!pathKey) return null;
  const db = await openPricingDb();
  return new Promise((resolve, reject) => {
    const request = db.transaction(pricingDbStore, "readonly").objectStore(pricingDbStore).get(pathKey);
    request.onsuccess = () => resolve(repairLegacyPricingPage(request.result || null, pathKey));
    request.onerror = () => reject(request.error);
  });
}

async function getPricingPages() {
  const db = await openPricingDb();
  return new Promise((resolve, reject) => {
    const request = db.transaction(pricingDbStore, "readonly").objectStore(pricingDbStore).getAll();
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
  });
}

function parsePrice(value, fallback = 299) {
  const match = String(value || "").replace(/,/g, "").match(/\d+/);
  return match ? Number(match[0]) : fallback;
}

function isLegacyGenericPricingPage(page, pathKey = "") {
  if (!isRedditProjectIdentity(pathKey || page?.pathKey)) return false;
  if (String(page?.pricingVersion || "").trim() === "project-fit-v2") return false;
  const prices = (Array.isArray(page?.products) ? page.products : [])
    .map((product) => String(product?.price || ""))
    .join("|");
  return /499/.test(prices) && /1[，,]?999/.test(prices) && /4[，,]?999/.test(prices) && /699/.test(prices);
}

function buildProjectSpecificPricingPage(pathKey, title, summary = "") {
  const safePathKey = normalizeProjectPath(pathKey || "");
  const safeTitle = String(title || (isRedditProjectIdentity(safePathKey) ? "Reddit RAG 项目" : "项目")).trim();
  const plan = buildCommercializationPlan(safeTitle, `${safePathKey}\n${summary}`, {}, {}, safePathKey);
  const items = [...new Set([
    ...(plan.paidPoints || []),
    ...(plan.tiers || []).map((tier) => tier.deliverable),
    "完整项目拆解文档",
    "项目流程与证据链说明",
    "售价落地页文案"
  ].filter(Boolean))].slice(0, 10);
  return {
    pricingVersion: "project-fit-v2",
    pathKey: safePathKey,
    title: safeTitle,
    summary: plan.strategy || summary,
    createdAt: new Date().toISOString(),
    selectedProductId: "",
    products: (plan.tiers || []).map((tier, index) => {
      const priceNumber = parsePrice(tier.price, index === 0 ? 799 : 3999);
      return {
        id: `commercial-tier-${index + 1}`,
        name: `${safeTitle} · ${tier.name}`,
        description: `${tier.audience}。${tier.deliverable}。${tier.economics}`,
        price: tier.price,
        comparePrice: `¥${Math.max(priceNumber * 2, priceNumber + 800)}`,
        badge: index === 1 ? "主推套餐" : index === 0 ? "低门槛" : "进阶服务",
        cta: "查看详情",
        discount: index === 1 ? `目标毛利${plan.targetMargin}` : "按范围报价",
        items: [...new Set([tier.deliverable, ...items].filter(Boolean))].slice(0, 10)
      };
    })
  };
}

function repairLegacyPricingPage(page, pathKey = "", title = "", summary = "") {
  if (!isLegacyGenericPricingPage(page, pathKey)) return page;
  return buildProjectSpecificPricingPage(pathKey, title || page?.title, summary || page?.summary);
}

function buildPricingPage() {
  const result = ensureAnalysisResult();
  const profile = result.projectProfile || buildLocalProfile(result.landingTitle || titleInput.value, sourceInput.value, getActiveProjectPath());
  const paidIdea = ensureCommercializationPlan(result);
  const commercial = buildCommercialViewModel(paidIdea);
  const deliverables = result.paidIdea?.deliverables?.length ? result.paidIdea.deliverables : profile.sellableModules || [];
  const title = result.landingTitle || titleInput.value.trim() || "项目拆解包";
  const completeItems = [
    ...deliverables,
    "完整项目拆解文档",
    "项目流程与证据链说明",
    "项目介绍与交付说明",
    "售价落地页文案",
    "执行清单与复盘要点"
  ];
  const items = [...new Set(completeItems.filter(Boolean))].slice(0, 10);
  return {
    pricingVersion: "project-fit-v2",
    pathKey: getCurrentDraftKey(),
    title,
    summary: commercial.strategy || result.landingText || result.brief || profile.positioning,
    createdAt: new Date().toISOString(),
    products: commercial.tiers.map((tier, index) => {
      const priceNumber = parsePrice(tier.price, index === 0 ? 499 : 1999);
      return {
        id: `commercial-tier-${index + 1}`,
        name: `${title} · ${tier.name}`,
        description: `${tier.audience}。${tier.deliverable}。${tier.economics}`,
        price: tier.price,
        comparePrice: `¥${Math.max(priceNumber * 2, priceNumber + 500)}`,
        badge: index === 1 ? "主推套餐" : index === 0 ? "低门槛" : "进阶服务",
        cta: "查看详情",
        discount: index === 1 ? `目标毛利${commercial.margin || "待校准"}` : "按范围报价",
        items: [...new Set([tier.deliverable, ...items].filter(Boolean))].slice(0, 10)
      };
    })
  };
}

function getPricingProductLabel(product) {
  const name = String(product?.name || "").trim();
  const projectTitle = String(product?.projectTitle || "").trim();
  const prefix = projectTitle ? `${projectTitle} · ` : "";
  return prefix && name.startsWith(prefix) ? name.slice(prefix.length) : name || "售价方案";
}

function renderPricingCard(products, selectedProductId = "", summaryId = "pricingSelectionSummary") {
  const selectedProduct = products.find((product) => product.id === selectedProductId || product.sourceProductId === selectedProductId)
    || products.find((product) => product.badge === "主推套餐")
    || products[0];
  if (!selectedProduct) return `<div class="pricing-empty">暂无售价方案</div>`;
  const selectedId = selectedProduct.id;
  const projectTitle = selectedProduct.projectTitle ? `<span class="pricing-project">${escapeHtml(selectedProduct.projectTitle)}</span>` : "";
  const selectedLabel = getPricingProductLabel(selectedProduct);

  return `
    <article class="pricing-card pricing-selector-card" data-pricing-selector data-selected-product="${escapeHtml(selectedId)}">
      <div class="pricing-selector-header">
        <div>
          <span class="pricing-badge">售价方案</span>
          ${projectTitle}
          <h3>选择内容售价</h3>
        </div>
        <span class="pricing-selection-status">可选 ${products.length} 档</span>
      </div>
      <div class="pricing-option-list" role="tablist" aria-label="选择内容售价">
        ${products.map((product) => {
          const isSelected = product.id === selectedId;
          return `
            <button class="pricing-option${isSelected ? " is-selected" : ""}" type="button" role="tab"
              data-pricing-select="${escapeHtml(product.id)}" aria-selected="${isSelected}" aria-controls="${escapeHtml(summaryId)}">
              <span>${escapeHtml(getPricingProductLabel(product))}</span>
              <strong>${escapeHtml(product.price)}</strong>
            </button>
          `;
        }).join("")}
      </div>
      <div class="pricing-selection-summary" id="${escapeHtml(summaryId)}" data-pricing-selection-summary aria-live="polite">
        <div class="pricing-selection-summary-head">
          <span class="pricing-badge" data-pricing-selected-badge>${escapeHtml(selectedProduct.badge || "数字交付")}</span>
          <span class="pricing-selection-discount" data-pricing-selected-discount>${escapeHtml(selectedProduct.discount || "按范围报价")}</span>
        </div>
        <h3 data-pricing-selected-name>${escapeHtml(selectedLabel)}</h3>
      </div>
      <div class="pricing-card-footer">
        <div>
          <span class="pricing-selected-label">当前售价</span>
          <strong data-pricing-selected-price>${escapeHtml(selectedProduct.price)}</strong>
          <s data-pricing-selected-compare>${escapeHtml(selectedProduct.comparePrice || "")}</s>
        </div>
        <button class="primary-button compact-action" type="button" data-pricing-detail="${escapeHtml(selectedId)}">查看详情</button>
      </div>
    </article>
  `;
}

function normalizePricingProducts(pricingPage) {
  const products = Array.isArray(pricingPage.products) ? pricingPage.products : [];
  if (!products.length) return [];
  return products.map((product, index) => ({
    ...product,
    id: `${pricingPage.pathKey || pricingPage.title}::${product.id || `tier-${index + 1}`}`,
    sourceProductId: product.id,
    projectTitle: pricingPage.title,
    projectSummary: pricingPage.summary,
    pathKey: pricingPage.pathKey
  }));
}

function updatePricingSelection(product, selector = null) {
  const targetSelector = selector || pricingGrid?.querySelector("[data-pricing-selector]");
  if (!targetSelector || !product) return;
  if (currentPricingPage?.products?.length) {
    currentPricingPage.selectedProductId = product.sourceProductId || product.id;
  }
  targetSelector.dataset.selectedProduct = product.id;
  targetSelector.querySelectorAll("[data-pricing-select]").forEach((option) => {
    const isSelected = option.dataset.pricingSelect === product.id;
    option.classList.toggle("is-selected", isSelected);
    option.setAttribute("aria-selected", String(isSelected));
  });
  const selectedBadge = targetSelector.querySelector("[data-pricing-selected-badge]");
  const selectedDiscount = targetSelector.querySelector("[data-pricing-selected-discount]");
  const selectedName = targetSelector.querySelector("[data-pricing-selected-name]");
  const selectedPrice = targetSelector.querySelector("[data-pricing-selected-price]");
  const selectedCompare = targetSelector.querySelector("[data-pricing-selected-compare]");
  if (selectedBadge) selectedBadge.textContent = product.badge || "数字交付";
  if (selectedDiscount) selectedDiscount.textContent = product.discount || "按范围报价";
  if (selectedName) selectedName.textContent = getPricingProductLabel(product);
  if (selectedPrice) selectedPrice.textContent = product.price || "待定";
  if (selectedCompare) selectedCompare.textContent = product.comparePrice || "";
  targetSelector.querySelectorAll("[data-pricing-detail]").forEach((button) => {
    button.dataset.pricingDetail = product.id;
  });
}

async function renderPricingPage(page = null) {
  const hasExplicitPage = arguments.length > 0;
  const currentProjectKey = getCurrentDraftKey();
  const currentPageBelongsToProject = !currentPricingOwnerPath || currentPricingOwnerPath === currentProjectKey;
  let savedPage = page?.products?.length
    ? page
    : hasExplicitPage
      ? null
      : currentPageBelongsToProject
        ? currentPricingPage
        : null;
  if (!savedPage && !hasExplicitPage) {
    savedPage = await getPricingPage(getCurrentDraftKey()).catch(() => null);
  }
  currentPricingPage = serializePricingPage(savedPage);
  const products = currentPricingPage ? normalizePricingProducts(currentPricingPage) : [];
  pricingGrid.innerHTML = "";
  if (!products.length) {
    pricingGrid.innerHTML = `<div class="pricing-empty">暂无售价方案</div>`;
    delete pricingGrid.dataset.pricingPage;
    delete pricingGrid.dataset.pricingProducts;
    return;
  }
  pricingGrid.dataset.pricingProducts = JSON.stringify(products);
  pricingGrid.innerHTML = renderPricingCard(products, currentPricingPage.selectedProductId);
}

function openPricingModal(product) {
  document.querySelector("#pricingModalDiscount").textContent = product.discount || "限时优惠";
  document.querySelector("#pricingModalTitle").textContent = product.name;
  document.querySelector("#pricingModalDescription").textContent = product.description;
  document.querySelector("#pricingModalPrice").textContent = product.price;
  document.querySelector("#pricingModalCompare").textContent = product.comparePrice || "";
  document.querySelector("#pricingModalSave").textContent = product.discount || "数字交付";
  document.querySelector("#pricingModalItems").innerHTML = (product.items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  document.querySelector("#pricingModalArt").textContent = product.badge || "Display OS";
  pricingModal.hidden = false;
}

function closePricingModal() {
  pricingModal.hidden = true;
}

function getCurrentProjectCover() {
  return imageStore.input?.[0]?.src || imageStore.panels["detail-hero"]?.[0]?.src || "";
}

function getCoverFromImages(images = {}) {
  return images.input?.[0]?.src || images.panels?.["detail-hero"]?.[0]?.src || "";
}

function cloneProjectImagesByScope() {
  const panels = {};
  Object.entries(imageStore.panels || {}).forEach(([scope, images]) => {
    panels[scope] = cleanImages(images).map((image) => ({ ...image }));
  });
  return {
    input: cleanImages(imageStore.input).map((image) => ({ ...image })),
    panels
  };
}

function serializeShowcaseSnapshot(work) {
  if (!work?.id) return null;
  const { images, restoredFromServer, ...snapshot } = work;
  return {
    ...snapshot,
    published: true,
    status: "generated",
    visibility: snapshot.visibility === "hidden" ? "hidden" : "visible",
    publishedAt: snapshot.publishedAt || new Date().toISOString()
  };
}

function uniquePortfolioItems(items, fallback = ["待补充"], limit = 8) {
  const values = (Array.isArray(items) ? items : [items])
    .flatMap((item) => (Array.isArray(item) ? item : [item]))
    .map((item) => String(item || "").replace(/\s+/g, " ").trim())
    .filter(Boolean);
  const unique = [...new Set(values)];
  return (unique.length ? unique : fallback).slice(0, limit);
}

function portfolioText(value, fallback = "待补充") {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  return text || fallback;
}

function buildPortfolioId(projectId) {
  const safe = String(projectId || Date.now()).replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase();
  return `portfolio-${safe || Date.now()}`;
}

function buildPortfolioFromProject(project, result, images = { input: [], panels: {} }) {
  const source = String(project?.source || sourceInput?.value || "");
  const profile = result?.projectProfile || buildLocalProfile(project?.title || result?.landingTitle || "", source, project?.projectPath || getActiveProjectPath());
  const facts = buildProjectReviewFacts(profile, source);
  const detailSections = Array.isArray(result?.detail?.sections) ? result.detail.sections : [];
  const detailEvidence = detailSections
    .flatMap((section) => (section?.blocks || []).flatMap((block) => [block?.subtitle, block?.body, ...(block?.list || [])]))
    .filter(Boolean);
  const audit = result?.audit || {};
  const evidenceStatus = audit.status === "complete" || audit.status === "confirmed" ? "资料已读取，仍需现场验收" : "待现场验收";
  const evidenceItems = uniquePortfolioItems(
    [...(facts.evidence || []), ...(audit.evidenceLedger || []).map((item) => item?.sourceFile)],
    ["当前项目分析资料"],
    8
  ).map((item, index) => ({
    label: `证据 ${index + 1}`,
    supports: item,
    status: evidenceStatus,
    details: portfolioText(detailEvidence[index] || "用于支撑对应项目判断，原始技术信息默认收起。", "待补充")
  }));
  const decisions = [
    {
      title: "先定义业务边界，再设计自动化",
      decision: facts.systemChange,
      reason: facts.oldFlowDefect,
      tradeoff: "保留可控的人工确认，换取结果可信度和可复查性。",
      evidence: evidenceItems.slice(0, 2).map((item) => item.supports)
    },
    {
      title: "异常节点暂停，不让错误结果静默流入交付",
      decision: uniquePortfolioItems(facts.manualConfirmation, ["关键异常需要人工确认"], 4).join("；"),
      reason: "动态页面、登录状态和识别结果存在不确定性，继续执行会放大错误。",
      tradeoff: "牺牲部分无人值守速度，换取业务可控性。",
      evidence: evidenceItems.slice(1, 3).map((item) => item.supports)
    },
    {
      title: "结果必须带着证据和交付格式离开系统",
      decision: uniquePortfolioItems(facts.outputs, ["结构化结果和可复查证据"], 4).join("、"),
      reason: "只有数字没有来源、状态和异常边界，运营人员无法复核或继续处理。",
      tradeoff: "增加证据整理成本，但降低返工和争议成本。",
      evidence: evidenceItems.slice(2, 4).map((item) => item.supports)
    }
  ];
  const responsibilities = uniquePortfolioItems([
    `把${facts.scenario}拆成目标用户、输入、流程、异常和交付结果。`,
    `明确产品要解决的核心问题：${facts.originalProblem}；并把旧流程缺陷转成可验证的改造目标。`,
    `设计从${uniquePortfolioItems(facts.inputs, ["业务输入"], 3).join("、")}到${uniquePortfolioItems(facts.outputs, ["结构化交付结果"], 3).join("、")}的端到端工作流。`,
    `把${uniquePortfolioItems(facts.manualConfirmation, ["关键异常"], 3).join("、")}设为人工确认边界，避免自动化越过无法可靠判断的节点。`,
    "用代码、文档、测试和运行记录区分已实现能力、资料证据与仍待现场验收的指标。"
  ], ["待从项目资料补充我的具体职责"], 8);
  const hasAiSignal = /\bAI\b|大模型|模型|LLM|Codex|OpenAI|Ollama|智能体|OCR|识别辅助/i.test(`${source}\n${result?.brief || ""}\n${facts.modules.join(" ")}`);
  const aiRole = {
    ai: hasAiSignal
      ? ["辅助读取、整理和结构化项目资料，形成可解释的项目画像。", "在识别或内容理解环节提供候选结果，但不直接替代业务复核。"]
      : ["当前资料未证明运行时模型参与；AI主要用于资料分析和表达辅助，不能把规则逻辑包装成模型能力。"],
    rules: ["用业务规则、状态和证据约束自动化输出。", "对不确定结果设置暂停、复核和失败重跑入口。"],
    automation: uniquePortfolioItems([...facts.modules, ...facts.workflow], ["流程自动化与结构化交付"], 6),
    human: uniquePortfolioItems(facts.manualConfirmation, ["用户确认登录、身份、异常和最终交付"], 6)
  };
  const resultItems = [
    {
      label: "已形成的业务交付",
      value: uniquePortfolioItems(facts.outputs, ["结构化项目结果"], 5).join("、"),
      status: evidenceStatus,
      evidence: evidenceItems.slice(0, 3).map((item) => item.supports)
    },
    {
      label: "已建立的人机协作边界",
      value: uniquePortfolioItems(facts.manualConfirmation, ["关键异常人工确认"], 5).join("、"),
      status: "已定义",
      evidence: evidenceItems.slice(1, 4).map((item) => item.supports)
    },
    {
      label: "可复查与可复用资产",
      value: uniquePortfolioItems([...facts.reusableValue, ...facts.evidence], ["流程、证据和模板"], 5).join("、"),
      status: evidenceStatus,
      evidence: evidenceItems.slice(2, 5).map((item) => item.supports)
    },
    {
      label: "仍待量化的成果",
      value: "准确率、处理时长、人工介入率和批量稳定性待真实账号抽样",
      status: "待验证",
      evidence: []
    }
  ];
  const challenges = uniquePortfolioItems([...facts.exceptionHandling, ...facts.boundary], ["项目边界和验证范围待补充"], 6).map((challenge, index) => ({
    challenge,
    judgment: decisions[index % decisions.length].title,
    solution: index < facts.exceptionHandling.length ? "通过状态、证据和人工确认把异常纳入流程。" : "保留限制说明，避免把未验证能力写成确定性承诺。"
  }));
  const now = new Date().toISOString();
  const projectId = String(project?.id || `${Date.now()}`);
  return {
    portfolioId: buildPortfolioId(projectId),
    projectId,
    status: "generated",
    visibility: project?.visibility === "hidden" ? "hidden" : "visible",
    manualEdited: false,
    createdAt: now,
    updatedAt: now,
    hero: {
      title: portfolioText(project?.title || facts.name, "未命名项目"),
      subtitle: portfolioText(facts.systemChange, "项目能力展示"),
      category: portfolioText(project?.tag || facts.keywords[0], "项目展示"),
      tags: uniquePortfolioItems(project?.keywords || facts.keywords, ["项目能力"], 6),
      summary: portfolioText(project?.summary || result?.brief || facts.systemChange, "待补充"),
      cover: portfolioText(project?.cover || getCoverFromImages(images), "")
    },
    background: {
      targetUsers: uniquePortfolioItems(facts.targetUsers, ["待补充"], 5),
      scenario: portfolioText(facts.scenario),
      oldFlow: portfolioText(facts.oldFlowDefect)
    },
    problems: uniquePortfolioItems([facts.originalProblem, facts.oldFlowDefect, ...facts.exceptionHandling.slice(0, 3)], ["待从项目资料补充"], 6),
    objectives: uniquePortfolioItems([facts.systemChange, ...facts.outputs.slice(0, 3)], ["待从项目资料补充"], 6),
    solution: {
      overview: portfolioText(facts.systemChange),
      steps: uniquePortfolioItems(facts.workflow, ["待补充"], 8),
      inputs: uniquePortfolioItems(facts.inputs, ["待补充"], 6),
      judgment: uniquePortfolioItems(facts.manualConfirmation, ["关键节点需要人工确认"], 5),
      humanGate: uniquePortfolioItems(facts.manualConfirmation, ["关键异常人工确认"], 5),
      outputs: uniquePortfolioItems(facts.outputs, ["待补充"], 6)
    },
    capabilities: uniquePortfolioItems(facts.modules, ["待补充"], 8).map((name, index) => ({
      name,
      problem: uniquePortfolioItems(facts.exceptionHandling, [facts.oldFlowDefect], 5)[index % Math.max(1, Math.min(5, facts.exceptionHandling.length))],
      approach: uniquePortfolioItems(facts.workflow, [facts.systemChange], 6)[index % Math.max(1, Math.min(6, facts.workflow.length))],
      value: uniquePortfolioItems(facts.outputs, ["结构化交付"], 6)[index % Math.max(1, Math.min(6, facts.outputs.length))]
    })),
    aiRole,
    workflow: uniquePortfolioItems(facts.workflow, ["待补充"], 8),
    keyDecisions: decisions,
    results: resultItems,
    responsibilities,
    challenges,
    maturity: {
      implemented: uniquePortfolioItems([...facts.modules, ...facts.outputs], ["已形成项目分析与展示结构"], 8),
      verified: uniquePortfolioItems(audit.confirmed, ["已有项目资料证据，仍需现场抽样验收"], 6),
      pending: uniquePortfolioItems(audit.limitations, ["真实账号大批量稳定性", "准确率、处理时长和人工介入率"], 6),
      risks: uniquePortfolioItems(facts.boundary, ["待补充"], 6)
    },
    value: uniquePortfolioItems(facts.reusableValue, ["把项目能力沉淀为可复查、可交付和可复用资产"], 6),
    evidence: evidenceItems
  };
}

function mergePortfolioSnapshot(base, generated) {
  if (!base?.manualEdited) return generated;
  return {
    ...generated,
    ...base,
    portfolioId: base.portfolioId || generated.portfolioId,
    projectId: base.projectId || generated.projectId,
    status: "generated",
    updatedAt: new Date().toISOString()
  };
}

function buildWorkRecordFromProject(project, result, images = { input: [], panels: {} }) {
  const source = String(project.source || "");
  const profile = result.projectProfile || buildLocalProfile(project.title || result.landingTitle || "", source, project.projectPath || getActiveProjectPath());
  const insights = buildContentInsights(profile, source);
  const card = insights.card || {};
  const promotion = result.promoStructure && typeof result.promoStructure === "object" ? result.promoStructure : {};
  const displayCapability = (item) => {
    const value = String(item || "").replace(/\s+/g, " ").trim();
    if (!value || /[\\/]|\.(?:py|js|ts|tsx|html|json|md)(?:\b|$)|\b(?:server|src|api|http)\b/i.test(value)) return "";
    return value;
  };
  const resultProfileKeywords = [
    ...(Array.isArray(profile.sellableModules) ? profile.sellableModules : []),
    ...(Array.isArray(promotion.coreAdvantages) ? promotion.coreAdvantages.map((item) => item?.title || "") : []),
    ...(Array.isArray(profile.businessValue) ? profile.businessValue : []),
    ...(Array.isArray(profile.technicalModules) ? profile.technicalModules : [])
  ].map(displayCapability).filter(Boolean).filter((item, index, list) => list.indexOf(item) === index).slice(0, 5);
  const resultTitle = String(result.landingTitle || profile.projectName || "").trim();
  const resultSummary = String(result.landingText || result.brief || promotion.oneLine || "").trim();
  const resultOneLine = String(promotion.oneLine || result.landingText || result.brief || "").trim();
  const resultValue = resultProfileKeywords.join(" / ") || String(profile.businessValue?.[0] || "").trim();
  const resultKeywords = resultProfileKeywords.length ? resultProfileKeywords : (Array.isArray(profile.businessValue) ? profile.businessValue.slice(0, 5) : []);
  const projectKeywords = Array.isArray(project.keywords) && project.keywords.length ? project.keywords : resultKeywords;
  const generatedPortfolio = buildPortfolioFromProject(project, result, images);
  const portfolio = mergePortfolioSnapshot(project.portfolio || project.showcase?.portfolio, generatedPortfolio);
  return {
    id: String(project.id || `${Date.now()}`),
    title: project.title || resultTitle || card.title || "未命名项目",
    summary: resultSummary || project.summary || card.summary || "",
    cover: project.cover || getCoverFromImages(images),
    tag: project.tag || profile.projectType || card.tag || "AI Workflow",
    value: resultValue || project.value || (card.keywords || []).slice(0, 5).join(" / ") || "待补充",
    oneLine: resultOneLine || project.oneLine || card.oneLine || "",
    keywords: resultKeywords.length ? resultKeywords : (projectKeywords.length ? projectKeywords : (card.keywords || [])),
    detail: project.detail || result.detail || buildDetailFromProfile(profile, source),
    diagrams: project.diagrams || result.diagrams || [],
    images,
    brief: result.brief || "",
    promo: project.promo || result.promo || [],
    promoStructure: project.promoStructure || result.promoStructure || insights.promoStructure || {},
    paidIdea: project.paidIdea || result.paidIdea || {},
    pricing: project.pricing?.products?.length ? serializePricingPage(project.pricing) : null,
    portfolio,
    status: project.status || project.showcase?.status || "generated",
    visibility: project.visibility || project.showcase?.visibility || portfolio.visibility || "visible",
    projectPath: project.projectPath || "",
    imageProjectTitle: project.title || result.landingTitle || "",
    createdAt: project.createdAt || project.updatedAt || new Date().toISOString(),
    displayOrder: Number.isFinite(Number(project.displayOrder)) ? Number(project.displayOrder) : 999,
    sortOrder: Number.isFinite(project.sortOrder) ? project.sortOrder : 999,
    featuredShowcase: Boolean(project.featuredShowcase),
    hideCardActions: Boolean(project.hideCardActions),
    published: Boolean(project.published || project.showcase?.published),
    publishedAt: project.publishedAt || project.showcase?.publishedAt || "",
    restoredFromServer: Boolean(project.source)
  };
}

function buildWorkRecord() {
  const result = ensureAnalysisResult();
  const project = {
    id: getCurrentDraftKey() || `${Date.now()}`,
    title: titleInput.value.trim() || result.landingTitle || "未命名项目",
    source: sourceInput.value,
    projectPath: projectPathInput.value.trim()
  };
  return buildWorkRecordFromProject(project, result, cloneProjectImagesByScope());
}

const projectReviewCardCopy = [
  {
    match: /亚马逊评论采集平台|Amazon 评论|评论采集|星级评论|Review/i,
    title: "亚马逊评论采集平台",
    tag: "评论采集",
    oneLine: "把逐页复制 Amazon 评论，整理成可分类、可回查的评论数据采集流程。",
    intro:
      "面向电商运营和用户反馈分析人员，解决评论散落在商品页面、星级样本难分类、复制结果无法复查的问题。系统从商品或评论页读取评论内容，按星级、商品和采集批次整理为 Markdown 或数据文件，并保留采集来源、失败页面和异常样本，方便后续做差评归因、卖点提炼和选品判断。",
    keywords: ["评论采集", "星级分类", "文本整理", "失败样本", "Markdown 输出"],
    deliverables: ["星级评论文件", "商品评论样本", "采集结果目录", "异常页面记录", "用户反馈文本"]
  },
  {
    match: /跨境电商选品平台|选品平台|选品智能体|商品机会判断|智能体辅助选品/i,
    title: "跨境电商选品平台",
    tag: "选品任务",
    oneLine: "把人工选类目和分散跑脚本，整理成可控的选品任务控制台。",
    intro:
      "面向跨境电商选品负责人和商品数据分析人员，解决类目范围容易误选、任务状态分散、失败记录难回查的问题。系统按站点、目标网站、类目层级或 Excel 输入创建任务，通过控制台触发采集、记录进度、暂停、断点续跑和结果下载，最终沉淀选品结果文件、任务记录和异常样本。",
    keywords: ["类目边界", "任务编排", "断点续跑", "失败重跑", "结果导出"],
    deliverables: ["类目选择规则", "任务控制台截图", "任务日志", "Excel/Markdown 输出", "失败项重跑记录"]
  },
  {
    match: /PDD 店铺商品数据自动采集平台|PDD 店铺|拼多多|SKU|OCR 价格/i,
    title: "PDD 店铺商品采集平台",
    tag: "商品采集",
    oneLine: "把一次性店铺采集脚本，整理成带状态、截图证据和表格交付的采集工作台。",
    intro:
      "面向电商运营和商品资料整理人员，解决 PDD 登录确认、商品列表、详情 SKU、价格图片和表格交付混在脚本里的问题。系统把登录暂停、列表定位、详情采集、OCR 价格识别、人工校验和 Excel 导出拆成可观察步骤，并保留任务日志与截图证据，最后形成可复查的商品数据表。",
    keywords: ["商品采集", "SKU 解析", "OCR", "Excel 导出", "人工校验"],
    deliverables: ["商品 Excel 表", "SKU 采集记录", "OCR 截图证据", "任务日志", "异常恢复记录"]
  }
];

function normalizeWorkCardCopy(work) {
  if (work.restoredFromServer) return work;
  const text = [
    work.title,
    work.summary,
    work.oneLine,
    work.value,
    work.projectPath,
    work.brief,
    work.detail?.title,
    work.detail?.description,
    ...(Array.isArray(work.promo) ? work.promo : []),
    ...(Array.isArray(work.keywords) ? work.keywords : [])
  ]
    .filter(Boolean)
    .join(" ");
  const copy = projectReviewCardCopy.find((item) => item.match.test(text));
  if (!copy) return work;
  return {
    ...work,
    title: copy.title,
    tag: copy.tag,
    oneLine: copy.oneLine,
    summary: `${copy.oneLine} ${copy.intro}`,
    value: copy.keywords.join(" / "),
    keywords: copy.keywords,
    reviewDeliverables: copy.deliverables
  };
}

function buildShowcaseCardViewModel(work) {
  const normalized = normalizeWorkCardCopy(work || {});
  const visibility = normalized.visibility === "hidden" ? "hidden" : "visible";
  const capabilities = Array.from(new Set([
    ...(Array.isArray(normalized.keywords) ? normalized.keywords : []),
    ...String(normalized.value || "").split(/[\/·|]/)
  ].map((item) => String(item || "").trim()).filter(Boolean))).slice(0, 5);
  return {
    id: String(normalized.id || ""),
    title: String(normalized.title || "未命名项目").trim(),
    tag: String(normalized.tag || "项目展示").trim(),
    oneLine: String(normalized.oneLine || normalized.summary || "").trim(),
    value: String(normalized.value || "待补充").trim(),
    capabilities,
    cover: String(normalized.cover || "").trim(),
    featuredShowcase: Boolean(normalized.featuredShowcase),
    hideCardActions: Boolean(normalized.hideCardActions),
    visibility,
    visibilityLabel: visibility === "hidden" ? "已隐藏" : "已展示"
  };
}

function renderWorkCard(work) {
  const view = buildShowcaseCardViewModel(work);
  const actions = view.hideCardActions
    ? ""
    : `<div class="work-card-actions">
        <button class="ghost-button compact" type="button" data-${view.visibility === "hidden" ? "restore" : "hide"}-work="${escapeHtml(view.id)}">${view.visibility === "hidden" ? "恢复展示" : "隐藏"}</button>
        <button class="ghost-button compact" type="button" data-delete-work="${escapeHtml(view.id)}">删除</button>
      </div>`;
  const cover = view.cover
    ? `<img class="work-card-cover" src="${view.cover}" alt="${escapeHtml(view.title)}" />`
    : `<div class="work-card-cover empty">项目展示</div>`;
  const capabilities = view.capabilities.length
    ? `<div class="work-card-capabilities" aria-label="核心能力">${view.capabilities.map((item) => `<span class="work-card-capability">${escapeHtml(item)}</span>`).join("")}</div>`
    : "";
  return `
    <article class="project-card generated-work${view.featuredShowcase ? " featured-showcase" : ""}" data-work-id="${escapeHtml(view.id)}">
      ${actions}
      ${cover}
      <div class="work-card-info">
        <span class="tag">${escapeHtml(view.tag)}</span>
        <h3>${escapeHtml(view.title)}</h3>
        <p class="work-card-one-line">${escapeHtml(view.oneLine)}</p>
        ${capabilities}
        <a class="detail-link work-card-detail-link" href="project.html?id=${encodeURIComponent(view.id)}" target="_blank" rel="noopener">查看作品详情 ↗</a>
      </div>
      ${view.visibility === "hidden" ? `<span class="work-card-status">${escapeHtml(view.visibilityLabel)}</span>` : ""}
    </article>
  `;
}

async function fetchRestoredShowcaseProjects() {
  const response = await fetch("/api/showcase-projects", { cache: "no-store" });
  if (!response.ok) throw new Error("项目档案暂时无法读取");
  const data = await response.json();
  return Array.isArray(data.projects) ? data.projects : [];
}

async function syncRestoredShowcaseProjects() {
  const remoteProjects = await fetchRestoredShowcaseProjects();
  lastRemoteShowcaseIdentities = new Set(remoteProjects.map((project) => getWorkIdentity(project)).filter(Boolean));
  const existingWorks = await getWorkRecords();
  const existingById = new Map(existingWorks.map((work) => [String(work.id), work]));
  const memoryWorks = [];
  let restoredCount = 0;

  for (const project of remoteProjects) {
    if (!project?.id) continue;
    const existing = existingById.get(String(project.id));
    const persisted = project.analysis && typeof project.analysis === "object" ? project.analysis : null;
    const result = persisted
      ? {
          ...persisted,
          projectProfile: persisted.projectProfile || {},
          landingTitle: persisted.landingTitle || project.title || "未命名项目",
          landingText: persisted.landingText || project.summary || "",
          brief: persisted.brief || project.summary || "",
          promo: persisted.promo || project.promo || [],
          promoStructure: persisted.promoStructure || project.promoStructure || null,
          detail: persisted.detail || project.detail || null,
          paidIdea: persisted.paidIdea || project.paidIdea || {}
        }
      : buildLocalAnalysis(project.title || "未命名项目", project.source || "", null, project.projectPath || "");
    const restoredImages = existing?.images || { input: [], panels: {} };
    const generated = buildWorkRecordFromProject(
      { ...project, cover: project.cover || existing?.cover || "" },
      result,
      restoredImages
    );
    const restoredWork = {
      ...(existing || {}),
      ...generated,
      portfolio: mergePortfolioSnapshot(existing?.portfolio, generated.portfolio),
      visibility: existing?.visibility || project.visibility || generated.visibility
    };
    try {
      await saveWorkRecord(restoredWork);
    } catch (error) {
      console.warn("服务端作品已读取，但本机缓存不可用，使用当前页面内存展示", error);
      memoryWorks.push(restoredWork);
    }
    if (!existing) restoredCount += 1;
  }

  if (restoredCount) setStatus(`已恢复 ${restoredCount} 个完整项目`, "ok");
  return mergeWorkRecords(await getWorkRecords(), memoryWorks);
}

function getShowcaseSortOrder(work) {
  const displayOrder = Number(work.displayOrder);
  if (Number.isFinite(displayOrder) && displayOrder < 999) return displayOrder;
  const projectPath = normalizeProjectPath(work?.projectPath || work?.id || "");
  if (/\\(?:erp\\)?pdd(?:\\see)?$/.test(projectPath)) return 1;
  if (/\\reddit$/.test(projectPath)) return 2;
  const order = Number(work.sortOrder);
  return Number.isFinite(order) && order < 999 ? order : 999;
}

async function renderGeneratedWorks({ includeHidden = showHiddenWorks, onlyCurrent = false, projectIdentity = "" } = {}) {
  const renderId = ++latestShowcaseRenderId;
  const isLatestRender = () => renderId === latestShowcaseRenderId;
  const rail = document.querySelector("#projectRail");
  const market = pricingMarket;
  let works = [];
  let restoreFailed = false;
  try {
    works = await syncRestoredShowcaseProjects();
  } catch {
    restoreFailed = true;
    lastRemoteShowcaseIdentities = null;
    works = await getWorkRecords();
  }
  if (!isLatestRender()) return;
  const currentPublishedWork = currentPublishedShowcase?.published ? currentPublishedShowcase : null;
  works = works.filter((work) => {
    const isPublished = work?.published === true || work?.showcase?.published === true;
    const isCanonicalRemoteWork = restoreFailed || !lastRemoteShowcaseIdentities || lastRemoteShowcaseIdentities.has(getWorkIdentity(work));
    return isPublished && isCanonicalRemoteWork;
  });
  if (!isLatestRender()) return;
  if (currentPublishedWork && !works.some((work) => getWorkIdentity(work) === getWorkIdentity(currentPublishedWork))) {
    works.unshift(currentPublishedWork);
  }
  const currentIdentity = getCurrentShowcaseIdentity();
  const requestedIdentity = getRequestedShowcaseIdentity(projectIdentity, onlyCurrent);
  if ((onlyCurrent || projectIdentity) && requestedIdentity) {
    works = requestedIdentity ? works.filter((work) => getWorkIdentity(work) === requestedIdentity) : [];
  }
  if (
    retainedShowcaseSnapshot &&
    requestedIdentity === retainedShowcaseProjectIdentity &&
    !works.some((work) => getWorkIdentity(work) === retainedShowcaseProjectIdentity)
  ) {
    works.unshift({
      ...retainedShowcaseSnapshot,
      pricing: retainedShowcaseSnapshot.pricing?.products?.length
        ? retainedShowcaseSnapshot.pricing
        : retainedPricingPage,
      projectPath: retainedShowcaseSnapshot.projectPath || retainedShowcaseProjectIdentity,
      published: true,
      visibility: retainedShowcaseSnapshot.visibility || "visible"
    });
  }
  works = works.sort((a, b) => {
    const orderDiff = getShowcaseSortOrder(a) - getShowcaseSortOrder(b);
    if (orderDiff) return orderDiff;
    return String(b.createdAt || "").localeCompare(String(a.createdAt || ""));
  });
  const seenWorkIdentities = new Set();
  works = works.filter((work) => {
    const identityKey = getWorkIdentity(work) || String(work.title || work.id || "").replace(/\s+/g, " ").trim().toLowerCase();
    if (!identityKey || seenWorkIdentities.has(identityKey)) return false;
    seenWorkIdentities.add(identityKey);
    return true;
  });
  const hiddenCount = works.filter((work) => work.visibility === "hidden").length;
  works = works.filter((work) => includeHidden || work.visibility !== "hidden");
  const toggleHiddenButton = document.querySelector("#toggleHiddenWorks");
  if (toggleHiddenButton) {
    toggleHiddenButton.textContent = includeHidden ? "隐藏已隐藏项目" : `显示隐藏项目${hiddenCount ? `（${hiddenCount}）` : ""}`;
    toggleHiddenButton.setAttribute("aria-pressed", String(includeHidden));
  }
  if (!isLatestRender()) return;
  if (market) market.hidden = true;
  rail.innerHTML = "";
  if (!works.length) {
    rail.innerHTML = restoreFailed
      ? `<article class="project-card project-empty-card"><span class="tag">展示状态</span><h3>无法恢复项目</h3></article>`
      : `<article class="project-card project-empty-card"><span class="tag">展示状态</span><h3>${includeHidden ? "暂无项目" : hiddenCount ? "当前没有公开展示项目" : "暂无项目"}</h3></article>`;
    return;
  }
  setShowcaseHidden(false);
  rail.innerHTML = works.map((work) => {
    const identity = getWorkIdentity(work);
    const projectTitle = escapeHtml(work.title || "项目");
    return `
      <article class="showcase-project-unit" data-project-unit data-project-identity="${escapeHtml(identity)}">
        ${renderWorkCard(work)}
      </article>
    `;
  }).join("");

  for (const [index, work] of works.entries()) {
    if (!isLatestRender()) return;
    const unit = rail.children[index];
    const pricingRoot = unit?.querySelector("[data-project-pricing]");
    const grid = unit?.querySelector("[data-project-pricing-grid]");
    if (!pricingRoot || !grid) continue;
    const pricingIdentity = getWorkIdentity(work);
    let pricingSnapshot = work?.pricing?.products?.length ? work.pricing : null;
    if (!pricingSnapshot && pricingIdentity) {
      pricingSnapshot = pricingIdentity === retainedShowcaseProjectIdentity
        ? retainedPricingPage || await getPricingPage(pricingIdentity).catch(() => null)
        : await getPricingPage(pricingIdentity).catch(() => null);
    }
    pricingSnapshot = repairLegacyPricingPage(
      pricingSnapshot,
      pricingIdentity,
      work.title,
      work.oneLine || work.summary || ""
    );
    if (pricingSnapshot?.products?.length) {
      pricingSnapshot = {
        ...pricingSnapshot,
        pathKey: pricingSnapshot.pathKey || pricingIdentity,
        title: pricingSnapshot.title || work.title || "项目"
      };
      const products = normalizePricingProducts(pricingSnapshot);
      const serializedProducts = JSON.stringify(products);
      pricingRoot.dataset.pricingProducts = serializedProducts;
      grid.dataset.pricingProducts = serializedProducts;
      grid.innerHTML = renderPricingCard(products, pricingSnapshot.selectedProductId, `pricingSelectionSummary-${index}`);
    } else {
      pricingRoot.dataset.pricingProducts = "[]";
      grid.dataset.pricingProducts = "[]";
      grid.innerHTML = `<div class="pricing-empty">暂无售价方案</div>`;
    }
  }
  syncPagePagerForShowcaseContent();
}

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, (char) => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };
    return map[char];
  });
}

async function readImageFiles(files, scope = "input") {
  const imageFiles = Array.from(files || []).filter((file) => file.type.startsWith("image/"));
  if (!imageFiles.length) return;
  await loadProjectImages();
  const images = await Promise.all(
    imageFiles.map(async (file) => ({
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: file.name || "pasted-image",
      src: await optimizeProjectImage(file)
    }))
  );
  if (scope === "input") {
    imageStore.input.push(...images);
    await saveProjectImages();
    renderImagePreview("input", inputImagePreview);
    renderInputReadiness();
    return;
  }
  imageStore.panels[scope] = imageStore.panels[scope] || [];
  imageStore.panels[scope].push(...images);
  await saveProjectImages();
  renderScopedImages(scope);
}

const projectImageMaxEdge = 1800;
const projectImageMaxBytes = 4 * 1024 * 1024;

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error || new Error("图片读取失败"));
    reader.readAsDataURL(file);
  });
}

function loadImageForOptimization(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("图片解析失败"));
    image.src = src;
  });
}

async function optimizeProjectImage(file) {
  const original = await readFileAsDataUrl(file);
  if (!original) return original;
  try {
    const image = await loadImageForOptimization(original);
    const width = image.naturalWidth || image.width;
    const height = image.naturalHeight || image.height;
    const needsResize = Math.max(width, height) > projectImageMaxEdge;
    const needsCompress = Number(file.size || 0) > projectImageMaxBytes;
    if (!needsResize && !needsCompress) return original;

    const scale = Math.min(1, projectImageMaxEdge / width, projectImageMaxEdge / height);
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(width * scale));
    canvas.height = Math.max(1, Math.round(height * scale));
    const context = canvas.getContext("2d");
    if (!context) return original;
    context.fillStyle = "#fffdf8";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/jpeg", 0.84);
  } catch {
    return original;
  }
}

function pasteImagesFromClipboard(event, scope = "input") {
  const clipboard = event.clipboardData;
  const itemFiles = Array.from(clipboard?.items || [])
    .filter((item) => item.kind === "file" && item.type.startsWith("image/"))
    .map((item) => item.getAsFile?.())
    .filter(Boolean);
  const fileList = Array.from(clipboard?.files || []).filter((file) => file.type.startsWith("image/"));
  const files = itemFiles.length ? itemFiles : fileList;
  if (!files.length) return false;
  event.preventDefault();
  event.stopPropagation();
  readImageFiles(files, scope);
  return true;
}

function getProjectImageStorageKey() {
  const title = titleInput.value.trim() || "untitled";
  const path = projectPathInput.value.trim() || "no-path";
  return `display-os-images:${path}::${title}`;
}

function cleanImages(images) {
  return (Array.isArray(images) ? images : []).filter((image) => {
    const source = String(image?.src || "");
    return source.startsWith("data:image/") || (window.__DISPLAY_OS_STATIC_MODE__ && /^(?:\.\/)?assets\//.test(source));
  });
}

function resetImageStore(nextStore = {}) {
  imageStore.input = cleanImages(nextStore.input);
  const nextPanels = {};
  Object.entries(nextStore.panels && typeof nextStore.panels === "object" ? nextStore.panels : {}).forEach(([scope, images]) => {
    nextPanels[scope] = cleanImages(images);
  });
  imageStore.panels = nextPanels;
}

function openImageDb() {
  if (imageDbPromise) return imageDbPromise;
  imageDbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(imageDbName, 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore(imageDbStore);
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  return imageDbPromise;
}

async function getStoredProjectImages(key) {
  if (!window.indexedDB) {
    return JSON.parse(localStorage.getItem(key) || "{}");
  }
  const db = await openImageDb();
  return new Promise((resolve, reject) => {
    const request = db.transaction(imageDbStore, "readonly").objectStore(imageDbStore).get(key);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
}

async function setStoredProjectImages(key, value) {
  if (!window.indexedDB) {
    localStorage.setItem(key, JSON.stringify(value));
    return;
  }
  const db = await openImageDb();
  await new Promise((resolve, reject) => {
    const request = db.transaction(imageDbStore, "readwrite").objectStore(imageDbStore).put(value, key);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

async function migrateLocalStorageImages(key) {
  if (!window.indexedDB) return null;
  const raw = localStorage.getItem(key);
  if (!raw) return null;
  try {
    const legacy = JSON.parse(raw);
    await setStoredProjectImages(key, legacy);
    localStorage.removeItem(key);
    return legacy;
  } catch {
    return null;
  }
}

async function loadProjectImages({ force = false } = {}) {
  const nextKey = getProjectImageStorageKey();
  if (!force && currentImageProjectKey === nextKey) return;
  currentImageProjectKey = nextKey;
  try {
    resetImageStore((await getStoredProjectImages(nextKey)) || (await migrateLocalStorageImages(nextKey)) || {});
  } catch {
    resetImageStore();
  }
}

async function saveProjectImages() {
  currentImageProjectKey = getProjectImageStorageKey();
  try {
    await setStoredProjectImages(currentImageProjectKey, imageStore);
    await saveProjectRecord({ silent: true }).catch(() => {});
  } catch (error) {
    setStatus("图片暂存失败，请减少图片数量或压缩后再上传", "error");
  }
}

async function removeImage(scope, imageId) {
  await loadProjectImages();
  if (scope === "input") {
    imageStore.input = imageStore.input.filter((image) => image.id !== imageId);
    await saveProjectImages();
    renderImagePreview("input", inputImagePreview);
    renderInputReadiness();
    return;
  }
  imageStore.panels[scope] = (imageStore.panels[scope] || []).filter((image) => image.id !== imageId);
  await saveProjectImages();
  renderScopedImages(scope);
}

function renderImagePreview(scope, container) {
  if (!container) return;
  const images = scope === "input" ? imageStore.input : imageStore.panels[scope] || [];
  container.classList.toggle("large-images", images.length > 0);
  container.classList.toggle("cover-images", scope === "input" && images.length > 0);
  if (scope === "input") {
    inputImageDrop?.classList.toggle("has-image", images.length > 0);
  }
  const imageMarkup = images
    .map(
      (image) => {
        const displayTitle = getImageDisplayTitle(scope, image);
        return `
        <figure class="image-thumb">
          <button class="image-remove" type="button" data-remove-image="${escapeHtml(image.id)}" data-image-scope="${escapeHtml(scope)}" aria-label="删除图片">×</button>
          <img src="${image.src}" alt="${escapeHtml(displayTitle)}" title="${escapeHtml(displayTitle)}" />
          <figcaption>${escapeHtml(displayTitle)}</figcaption>
        </figure>
      `;
      }
    )
    .join("");
  const addMarkup = scope === "input" || String(scope).startsWith("diagram-")
    ? ""
    : `<button class="image-add-button image-paste-zone" type="button" data-add-image-scope="${escapeHtml(scope)}" data-paste-image-scope="${escapeHtml(scope)}" aria-label="继续添加图片，可直接粘贴" title="点击选择图片，或按 Ctrl+V 粘贴">+</button>`;
  container.innerHTML = `${imageMarkup}${addMarkup}`;
  if (scope !== "input") {
    container.dataset.pasteImageScope = scope;
    container.classList.add("image-paste-zone");
    const baseAriaLabel = container.dataset.baseAriaLabel || container.getAttribute("aria-label") || "流程图配图";
    container.dataset.baseAriaLabel = baseAriaLabel.replace(/，可直接粘贴图片$/, "");
    container.setAttribute("aria-label", `${container.dataset.baseAriaLabel}，可直接粘贴图片`);
  }
}

function getImageDisplayTitle(scope, image) {
  if (String(scope).startsWith("diagram-")) return image.title || "前端展示";
  return image.title || image.name || "已添加图片";
}

function renderScopedImages(scope) {
  document.querySelectorAll(`[data-image-preview="${scope}"]`).forEach((container) => renderImagePreview(scope, container));
}

async function renderAllPanelImages() {
  await loadProjectImages();
  renderImagePreview("input", inputImagePreview);
  Object.keys(imageStore.panels).forEach(renderScopedImages);
}

function getActivePanel() {
  return document.querySelector(".tab-panel.active");
}

async function copyText(text) {
  const value = String(text || "").trim();
  if (!value) return;
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }
  const temp = document.createElement("textarea");
  temp.value = value;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand("copy");
  temp.remove();
}

function getCopyTextFromElement(element) {
  if (!element) return "";
  const clone = element.cloneNode(true);
  clone.querySelectorAll(".content-tools, .section-image-drop, .image-placeholder, .image-strip, .mermaid-code, input, button, label").forEach((item) => item.remove());
  return clone.innerText.replace(/\n{3,}/g, "\n\n").trim();
}

function setStatus(text, tone = "neutral") {
  if (!apiStatus) return;
  clearTimeout(statusVisibilityTimer);
  apiStatus.textContent = text;
  apiStatus.dataset.tone = tone;
  const isActionFeedback = tone === "error" || (tone === "ok" && /新建|保存|读取项目|当前项目已就绪/.test(text));
  apiStatus.classList.toggle("is-visible", isActionFeedback);
  if (tone === "ok" && isActionFeedback) {
    statusVisibilityTimer = setTimeout(() => apiStatus.classList.remove("is-visible"), 4800);
  }
}

function setPublishSyncStatus(text, tone = "neutral") {
  if (!publishSyncStatus) return;
  publishSyncStatus.textContent = text;
  publishSyncStatus.dataset.tone = tone;
}

function updateTopbarPublishActions() {
  const busy = isUpdatingCurrentProject || isSyncingGithub;
  if (updateCurrentProjectButton) {
    updateCurrentProjectButton.disabled = busy || isReadingProject || isAnalyzing;
    updateCurrentProjectButton.setAttribute("aria-busy", String(isUpdatingCurrentProject));
  }
  if (syncGithubButton) {
    syncGithubButton.disabled = busy;
    syncGithubButton.setAttribute("aria-busy", String(isSyncingGithub));
  }
}

function updateChecklistItem(node, state, detail) {
  if (!node) return;
  node.classList.remove("is-ready", "is-risk", "is-pending");
  node.classList.add(`is-${state}`);
  const description = node.querySelector("small");
  if (description) description.textContent = detail;
}

function renderAnalysisSteps(activeStep = 1) {
  analysisStepItems.forEach((item, index) => {
    const step = index + 1;
    item.classList.toggle("is-active", step === activeStep);
    item.classList.toggle("is-complete", step < activeStep);
  });
}

function renderInputReadiness() {
  const path = projectPathInput?.value.trim() || "";
  const title = titleInput?.value.trim() || "";
  const source = sourceInput?.value.trim() || "";
  const selectedFiles = Number(currentReadAudit?.counts?.selectedTextFiles || 0);
  const sourceReady = Boolean(path && hasReadProject && source);
  const titleReady = Boolean(title);
  const hasSupplement = Boolean(supplementalMaterialName || imageStore.input.length);
  const ready = sourceReady && titleReady;

  updateChecklistItem(
    sourceReadyCheck,
    sourceReady ? "ready" : currentReadAudit?.status === "error" ? "risk" : "pending",
    sourceReady ? (selectedFiles ? `已读取 ${selectedFiles} 项关键资料` : "项目资料已读取") : path ? "请点击“读取项目”" : "等待读取"
  );
  updateChecklistItem(titleReadyCheck, titleReady ? "ready" : sourceReady ? "risk" : "pending", titleReady ? "已填写" : "等待填写");
  updateChecklistItem(
    evidenceReadyCheck,
    hasSupplement ? "ready" : "optional",
    hasSupplement
      ? `${imageStore.input.length ? `${imageStore.input.length} 张图片` : ""}${imageStore.input.length && supplementalMaterialName ? "、" : ""}${supplementalMaterialName || ""}`
      : "可选"
  );

  if (inputPanelState) {
    const stateLabel = isReadingProject
      ? "正在读取"
      : isAnalyzing
        ? "正在生成分析"
      : currentAnalysisResult && hasReadProject
        ? "分析完成，待核验"
        : hasReadProject
          ? "已读取，待核验"
          : currentAnalysisResult
            ? "已有历史结果，待读取"
          : path
            ? "待读取"
            : "待选择";
    inputPanelState.textContent = stateLabel;
    inputPanelState.className = `workflow-state visually-hidden ${isAnalyzing ? "is-pending" : ready ? "is-ready" : currentReadAudit?.status === "error" ? "is-risk" : "is-pending"}`;
  }

  const activeStep = isReadingProject || hasReadProject ? (isAnalyzing ? 3 : currentAnalysisResult && hasReadProject ? 4 : 2) : 1;
  renderAnalysisSteps(activeStep);

  if (preflightSummary) {
    preflightSummary.textContent = isAnalyzing ? "正在生成" : ready ? "可以生成" : path || title ? "还需完成" : "尚未就绪";
    preflightSummary.className = `preflight-summary ${isAnalyzing ? "" : ready ? "is-ready" : currentReadAudit?.status === "error" ? "is-risk" : ""}`;
  }

  if (fileStatus) {
    fileStatus.textContent = supplementalMaterialName
      ? `已添加：${supplementalMaterialName}`
      : imageStore.input.length
        ? `已添加 ${imageStore.input.length} 张图片`
        : "尚未添加补充材料";
  }

  if (generateButton) {
    generateButton.disabled = !ready || isReadingProject;
    generateButton.title = ready ? "开始生成项目分析" : "请先读取项目并填写项目名称";
  }
  updateGenerateShowcaseButtonLabel();
  updateGeneratePricingButtonState();
  updateTopbarPublishActions();
}

function openDemandModal() {
  if (jobDemandInput && !jobDemandInput.value.trim()) {
    const savedDraft = localStorage.getItem(demandDraftKey);
    jobDemandInput.value = savedDraft?.trim() || demandSampleJD;
  }
  demandModal.hidden = false;
  jobDemandInput.focus();
}

function closeDemandModal() {
  demandModal.hidden = true;
}

function showDemandEmptyState(title, message = "") {
  if (!demandEmptyState) return;
  const titleElement = demandEmptyState.querySelector("h3");
  if (titleElement) titleElement.textContent = title;
  if (demandEmptyStateMessage) {
    demandEmptyStateMessage.textContent = message;
    demandEmptyStateMessage.hidden = !message;
  }
  demandEmptyState.hidden = false;
}

async function loadJdEvidenceSkillContext() {
  if (jdEvidenceSkillContext) return jdEvidenceSkillContext;
  if (demandSkillStatus) demandSkillStatus.textContent = "正在加载 jd-evidence-analysis 证据链框架...";
  const response = await fetch("/api/jd-evidence-skill");
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "jd-evidence-analysis skill 加载失败");
  }
  jdEvidenceSkillContext = {
    name: data.name,
    status: data.status,
    summary: data.summary,
    rules: Array.isArray(data.rules) ? data.rules : [],
    linkedSkills: Array.isArray(data.linkedSkills) ? data.linkedSkills : [],
    missingSkills: Array.isArray(data.missingSkills) ? data.missingSkills : []
  };
  if (demandSkillSources) {
    const labels = jdEvidenceSkillContext.linkedSkills.map((item) => item.label).filter(Boolean);
    demandSkillSources.textContent = labels.length ? `已加载：${labels.join(" · ")}` : "未加载岗位匹配技能";
  }
  if (demandSkillStatus) {
    demandSkillStatus.textContent = `已关联 ${jdEvidenceSkillContext.name}：${jdEvidenceSkillContext.summary}`;
  }
  return jdEvidenceSkillContext;
}

function textIncludesAny(text, words) {
  const value = String(text || "").toLowerCase();
  return words.some((word) => value.includes(String(word).toLowerCase()));
}

function countTermHits(text, words) {
  const value = String(text || "").toLowerCase();
  return words.filter((word) => value.includes(String(word).toLowerCase())).length;
}

function getWorkSearchText(work) {
  return [
    work.title,
    work.summary,
    work.tag,
    work.value,
    work.brief,
    work.detail?.description,
    work.paidIdea?.name,
    ...(work.promo || []),
    ...(work.paidIdea?.deliverables || []),
    ...(work.detail?.sections || []).map((section) => [
      section.title,
      ...(section.blocks || []).map((block) => [block.subtitle, block.body, ...(block.list || [])].join(" "))
    ].join(" "))
  ].join(" ");
}

async function collectDemandWorks() {
  const storedWorks = await getWorkRecords();
  if (storedWorks.length) return storedWorks;
  const result = currentAnalysisResult || featuredProject.result;
  return [
    {
      id: "current-analysis",
      title: result.landingTitle || titleInput.value.trim() || "当前项目",
      summary: result.landingText || result.brief || "当前分析区项目",
      tag: result.projectProfile?.projectType || "AI Workflow",
      value: "工程 + 业务",
      brief: result.brief,
      detail: result.detail,
      promo: result.promo,
      paidIdea: result.paidIdea
    }
  ];
}

function getDemandCapabilityModel(jdText) {
  const text = jdText || "";
  return {
    roleEssence: "跨境电商业务场景下，能推动 AI 产品和 AI 中台落地的高级 AI 产品经理。",
    hardNeeds: [
      { title: "5 年以上产品经理经验", terms: ["5年", "五年", "产品经理经验", "产品管理经验"] },
      { title: "2 年以上 AI/ML 产品直接负责经历", terms: ["2年", "两年", "ai/ml", "机器学习产品", "AI产品", "直接负责"] },
      { title: "电商或零售核心业务链路", terms: ["电商", "零售", "选品", "供应链", "营销", "交易", "履约", "客服"] },
      { title: "AI 产品研发流程与评估方法", terms: ["准确率", "召回率", "A/B", "ROI", "评估体系", "转化率", "采纳率"] },
      { title: "数据分析与 SQL 驱动决策", terms: ["SQL", "数据分析", "指标", "ROI", "数据驱动"] },
      { title: "跨团队推动能力", terms: ["跨团队", "算法", "工程", "运营", "设计", "协同", "推进"] }
    ],
    advancedNeeds: [
      { title: "LLM / RAG / Agent / 多模态产品化", terms: ["LLM", "RAG", "Agent", "多模态", "NLP", "图像识别", "Embedding"] },
      { title: "AI 中台与基础设施规划", terms: ["AI中台", "模型训练平台", "特征平台", "推理服务", "向量数据库", "LLM网关", "数据标注"] },
      { title: "模型生命周期与效果监控", terms: ["模型生命周期", "版本管理", "效果监控", "漂移", "Prompt版本", "模型版本"] },
      { title: "AI 治理、隐私、合规、可解释性", terms: ["合规", "隐私", "可解释", "备案", "治理", "脱敏", "跨区域"] },
      { title: "从 0 到 1 推向生产环境", terms: ["0到1", "生产环境", "上线", "落地", "发布", "规模化"] }
    ],
    bonusNeeds: [
      { title: "跨境电商业务结果", terms: ["跨境", "Amazon", "亚马逊", "海外", "多语言"] },
      { title: "多语言 NLP 与评论洞察", terms: ["评论", "VOC", "情感分析", "主题聚类", "差评归因", "机器翻译"] },
      { title: "Agent 工作流编排", terms: ["Agent", "工作流", "自动生成周报", "人工审核"] },
      { title: "图像识别与商品属性抽取", terms: ["图像识别", "商品属性", "图片", "视觉"] }
    ],
    jdDemandHits: demandNeedRules
      .map((rule) => ({ title: rule.label, hitCount: countTermHits(text, rule.terms) }))
      .filter((item) => item.hitCount > 0)
      .sort((a, b) => b.hitCount - a.hitCount)
      .slice(0, 6)
      .map((item) => item.title)
  };
}

function evaluateEvidenceItems(items, evidenceText) {
  return items.map((item) => {
    const hitCount = countTermHits(evidenceText, item.terms);
    if (hitCount >= 2) {
      return { title: item.title, status: "有基础证据", tone: "good", evidence: "项目材料中出现相关能力线索，可继续补充职责、指标和结果。", gap: "需要补真实场景、个人职责和业务结果。" };
    }
    if (hitCount === 1) {
      return { title: item.title, status: "证据较弱", tone: "warn", evidence: "目前只有单点线索，不能支撑高匹配判断。", gap: "需要补项目原文、指标口径、上线范围或协作证据。" };
    }
    return { title: item.title, status: "暂无证据", tone: "risk", evidence: "当前展示项目没有直接证明这一项。", gap: "不应计入高匹配；只能作为待补齐能力或项目升级方向。" };
  });
}

function scoreEvidenceGroup(items) {
  const total = Math.max(1, items.length * 2);
  const points = items.reduce((sum, item) => sum + (item.tone === "good" ? 2 : item.tone === "warn" ? 1 : 0), 0);
  return Math.round((points / total) * 100);
}

function scoreWorkAgainstEvidence(work, model) {
  const searchText = getWorkSearchText(work);
  const aiHits = countTermHits(searchText, ["LLM", "RAG", "Agent", "NLP", "OCR", "图像识别", "模型", "Embedding", "多模态"]);
  const businessHits = countTermHits(searchText, ["电商", "商品", "评论", "选品", "运营", "价格", "SKU", "跨境", "Amazon", "亚马逊"]);
  const metricHits = countTermHits(searchText, ["准确率", "召回率", "ROI", "转化率", "A/B", "采纳率", "效率", "成本", "%"]);
  const governanceHits = countTermHits(searchText, ["合规", "隐私", "脱敏", "治理", "版本", "监控", "可解释"]);
  const platformHits = countTermHits(searchText, ["中台", "向量数据库", "LLM网关", "RAG", "推理", "标注", "训练平台"]);
  const matchedNeeds = [...model.hardNeeds, ...model.advancedNeeds, ...model.bonusNeeds]
    .filter((need) => textIncludesAny(searchText, need.terms))
    .map((need) => need.title)
    .slice(0, 5);
  const score = Math.min(78, 34 + businessHits * 5 + aiHits * 5 + metricHits * 4 + governanceHits * 4 + platformHits * 4);
  return {
    ...work,
    score,
    matchedNeeds,
    projectType: inferProjectUpgradeType(work),
    evidenceLevel: aiHits >= 2 && metricHits >= 1 ? "可升级为 AI 产品案例" : "目前更像数据/自动化底座"
  };
}

function inferProjectUpgradeType(work) {
  const title = `${work.title || ""} ${work.summary || ""}`;
  if (textIncludesAny(title, ["评论", "Amazon", "亚马逊", "VOC"])) {
    return {
      upgradedName: "跨境电商 VOC 评论洞察与竞品分析平台",
      aiModules: ["多语言评论清洗", "主题聚类", "情感分析", "差评归因", "RAG 问答", "Agent 周报"],
      metrics: ["洞察准确率", "运营采纳率", "报告生成时间下降", "选品命中率"],
      jdLink: "多语言 NLP、跨境场景、LLM 应用、运营决策支持"
    };
  }
  if (textIncludesAny(title, ["PDD", "商品", "采集", "选品"])) {
    return {
      upgradedName: "商品情报与智能选品 Copilot",
      aiModules: ["商品机会评分", "竞品聚类", "价格带分析", "图像属性抽取", "LLM 选品报告", "人工审核闭环"],
      metrics: ["选品成功率", "毛利预测准确率", "分析效率提升", "运营采纳率"],
      jdLink: "电商业务场景、AI 产品设计、数据驱动、ROI 估算"
    };
  }
  return {
    upgradedName: "运营分析 Agent 工作流",
    aiModules: ["任务拆解", "数据接入", "LLM 分析", "人工确认", "报告生成", "反馈闭环"],
    metrics: ["处理时间下降", "人工采纳率", "错误率下降", "使用频次"],
    jdLink: "Agent 工作流、效率提升、产品化落地"
  };
}

function buildDemandAnalysis(jdText, works, skillContext) {
  const model = getDemandCapabilityModel(jdText);
  const evidenceText = works.map(getWorkSearchText).join(" ");
  const hardEvidence = evaluateEvidenceItems(model.hardNeeds, evidenceText);
  const advancedEvidence = evaluateEvidenceItems(model.advancedNeeds, evidenceText);
  const bonusEvidence = evaluateEvidenceItems(model.bonusNeeds, evidenceText);
  const keywordCoverageScore = Math.min(88, 46 + model.jdDemandHits.length * 7 + countTermHits(jdText, ["LLM", "RAG", "Agent", "AI中台", "ROI", "合规"]) * 3);
  const hardScore = scoreEvidenceGroup(hardEvidence);
  const advancedScore = scoreEvidenceGroup(advancedEvidence);
  const bonusScore = scoreEvidenceGroup(bonusEvidence);
  const experienceMatchScore = Math.round(hardScore * 0.62 + advancedScore * 0.28 + bonusScore * 0.1);
  const interviewReadyScore = Math.max(32, Math.round(experienceMatchScore - countEvidenceRisk(hardEvidence, advancedEvidence) * 4));
  const score = Math.min(78, Math.round(keywordCoverageScore * 0.22 + experienceMatchScore * 0.48 + interviewReadyScore * 0.3));
  const projectAnalyses = works.map((work) => scoreWorkAgainstEvidence(work, model));
  return {
    score,
    keywordCoverageScore,
    experienceMatchScore,
    interviewReadyScore,
    model,
    roleEssence: model.roleEssence,
    needs: hardEvidence.map((item) => `${item.title}：${item.status}`),
    advancedNeeds: advancedEvidence.map((item) => `${item.title}：${item.status}`),
    bonusNeeds: bonusEvidence.map((item) => `${item.title}：${item.status}`),
    strengths: buildEvidenceStrengths(projectAnalyses),
    weaknesses: buildEvidenceWeaknesses(hardEvidence, advancedEvidence),
    evidenceMap: [...hardEvidence, ...advancedEvidence],
    projectAnalyses,
    riskQuestions: buildInterviewRiskQuestions(),
    portfolioStrategy: buildPortfolioStrategy(),
    truthWarning: "可以优化项目背景、产品职责、指标口径和表达结构；但没有真实负责过的 AI 产品、A/B 实验、生产上线、AI 中台、模型治理和业务结果，不能写成已完成经历。可如实写为方案设计、PoC、内部工具或原型验证。",
    skillContext
  };
}

function countEvidenceRisk(hardEvidence, advancedEvidence) {
  return [...hardEvidence, ...advancedEvidence].filter((item) => item.tone === "risk").length;
}

function buildEvidenceStrengths(projectAnalyses) {
  const hasEcom = projectAnalyses.some((item) => textIncludesAny(getWorkSearchText(item), ["电商", "商品", "评论", "SKU", "价格", "Amazon", "亚马逊"]));
  const strengths = [];
  if (hasEcom) strengths.push("可包装优势：已有电商数据、商品或评论处理素材，可作为跨境电商 AI 产品的业务底座。");
  strengths.push("可包装优势：自动化流程和数据结构化能力较强，适合延展为运营效率或智能决策产品。");
  strengths.push("弱优势：已有项目能证明落地执行能力，但还需要产品职责、指标体系和 AI 效果证据支撑。");
  return strengths;
}

function buildEvidenceWeaknesses(hardEvidence, advancedEvidence) {
  const risks = [...hardEvidence, ...advancedEvidence].filter((item) => item.tone === "risk").slice(0, 6);
  return risks.map((item) => `${item.title}缺少直接证据，不能靠关键词包装成高匹配。`);
}

function readDemandHistory() {
  try {
    return JSON.parse(localStorage.getItem(demandHistoryKey) || "[]");
  } catch {
    return [];
  }
}

function saveDemandHistory(analysis) {
  const history = readDemandHistory();
  history.push({
    score: analysis.score,
    keywordCoverageScore: analysis.keywordCoverageScore,
    experienceMatchScore: analysis.experienceMatchScore,
    interviewReadyScore: analysis.interviewReadyScore,
    createdAt: new Date().toISOString()
  });
  localStorage.setItem(demandHistoryKey, JSON.stringify(history.slice(-10)));
}

function renderDemandList(selector, items) {
  document.querySelector(selector).innerHTML = items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderDemandScoreChange(score) {
  const previous = readDemandHistory().at(-1);
  if (!previous) return "暂无历史对比，本次结果会用于下次比较。";
  const delta = score - previous.score;
  if (delta > 0) return `相比上次提升 ${delta}%，但仍需看真实经历和面试可验证度是否同步提升。`;
  if (delta < 0) return `相比上次下降 ${Math.abs(delta)}%，通常说明这份 JD 更强调硬门槛、中台、治理或生产落地证据。`;
  return "相比上次持平，建议优先补真实项目证据，而不是继续堆关键词。";
}

function renderDemandAnalysis(analysis) {
  if (demandSkillSources) {
    const labels = Array.isArray(analysis.skillContext?.linkedSkills)
      ? analysis.skillContext.linkedSkills.map((item) => String(item?.label || "").trim()).filter(Boolean)
      : [];
    demandSkillSources.textContent = labels.length ? `已加载：${labels.join(" · ")}` : "未加载岗位匹配技能";
  }
  if (demandSkillStatus) {
    if (analysis.analysisMode) {
      demandSkillStatus.textContent = `本次由${analysis.analysisMode}完成，依据当前 JD 与项目证据生成；未使用固定规则降级。`;
    } else if (analysis.skillContext?.name) {
      demandSkillStatus.textContent = `本次已按 ${analysis.skillContext.name} 执行：${analysis.skillContext.rules.slice(0, 3).join("；")}`;
    }
  }
  document.querySelector("#demandMatchScore").textContent = `${analysis.score}%`;
  document.querySelector("#demandAnalysisMode").textContent = analysis.analysisMode || "分析方式待确认";
  document.querySelector("#demandScoreChange").textContent = renderDemandScoreChange(analysis.score);
  document.querySelector("#keywordCoverageScore").textContent = `${analysis.keywordCoverageScore}%`;
  document.querySelector("#experienceMatchScore").textContent = `${analysis.experienceMatchScore}%`;
  document.querySelector("#interviewReadyScore").textContent = `${analysis.interviewReadyScore}%`;
  document.querySelector("#roleEssence").textContent = analysis.roleEssence;
  document.querySelector("#demandDiagnosis").innerHTML = `
    <strong>${escapeHtml(buildDiagnosisTitle(analysis.score))}</strong>
    <p>${escapeHtml(buildDiagnosisCopy(analysis))}</p>
  `;
  renderDemandList("#demandNeedList", analysis.needs);
  renderDemandList("#advancedNeedList", analysis.advancedNeeds);
  renderDemandList("#bonusNeedList", analysis.bonusNeeds);
  renderDemandList("#demandStrengthList", analysis.strengths);
  renderDemandList("#demandWeaknessList", analysis.weaknesses);
  renderEvidenceMap(analysis.evidenceMap);
  document.querySelector("#demandProjectAdvice").innerHTML = analysis.projectAnalyses
    .map(
      (work) => `
        <article class="demand-project-card">
          <header>
            <strong>${escapeHtml(work.title)}</strong>
            <span>项目匹配度 ${work.score}%</span>
          </header>
          <h4>建议升级为：${escapeHtml(work.projectType.upgradedName)}</h4>
          <p>${escapeHtml(work.advice || buildProjectUpgradeAdvice(work))}</p>
          <ul>
            <li>新增 AI 模块：${escapeHtml(work.projectType.aiModules.join("、"))}</li>
            <li>必须补的指标：${escapeHtml(work.projectType.metrics.join("、"))}</li>
            <li>对应 JD：${escapeHtml(work.projectType.jdLink)}</li>
          </ul>
        </article>
      `
    )
    .join("");
  renderRiskQuestions(analysis.riskQuestions);
  renderPortfolioStrategy(analysis.portfolioStrategy);
  document.querySelector("#truthWarningText").textContent = analysis.truthWarning;
  renderResumeReference(analysis);
  demandEmptyState.hidden = true;
  demandResultPanel.hidden = false;
  saveDemandHistory(analysis);
}

function buildProjectUpgradeAdvice(work) {
  if (work.evidenceLevel === "可升级为 AI 产品案例") {
    return "已有 AI 或评估线索，可继续补齐产品职责、上线范围、指标体系和业务结果。";
  }
  if (work.matchedNeeds.length) {
    return `当前更像数据/自动化底座，已关联 ${work.matchedNeeds.slice(0, 3).join("、")}；需要补 AI 产品方案、评估指标和人工审核闭环。`;
  }
  return "与高级 AI 产品经理 JD 关联偏弱，不建议作为核心项目；除非能补出真实 AI 应用场景和业务结果。";
}

function buildDiagnosisTitle(score) {
  if (score >= 82) return "高匹配，但仍需逐条核验证据";
  if (score >= 68) return "中等偏上，有潜力但不能按高匹配准备";
  if (score >= 52) return "中等匹配，项目可升级但硬证据不足";
  return "低到中等匹配，需要先补核心经历";
}

function buildDiagnosisCopy(analysis) {
  if (analysis.score >= 82) {
    return "当前材料已经接近岗位要求，但仍要确认 AI 产品负责人经历、生产落地、评估体系和业务结果都能被面试追问验证。";
  }
  return "现有项目更像电商数据与自动化底座，能支撑 AI 产品方向升级；但 AI 产品负责人经历、AI 评估体系、AI 中台、治理合规和生产级结果仍是主要缺口。";
}

function renderEvidenceMap(items) {
  document.querySelector("#evidenceMap").innerHTML = items
    .map(
      (item) => `
        <article class="evidence-row">
          <div>
            <strong>${escapeHtml(item.title)}</strong>
            <span class="evidence-status ${item.tone === "good" ? "is-good" : item.tone === "risk" ? "is-risk" : ""}">${escapeHtml(item.status)}</span>
          </div>
          <p>${escapeHtml(item.evidence)}</p>
          <p>${escapeHtml(item.gap)}</p>
        </article>
      `
    )
    .join("");
}

function buildInterviewRiskQuestions() {
  return [
    {
      title: "AI 产品是否真的负责过",
      questions: ["你负责的 AI 产品解决了哪个业务问题？", "你如何判断这个场景适合用 AI？", "你负责的是需求定义、路线图、方案设计还是开发实现？"]
    },
    {
      title: "评估体系是否站得住",
      questions: ["准确率、召回率、转化率、ROI 怎么衡量？", "模型效果不好时怎么迭代？", "A/B 实验的样本、周期和指标怎么设？"]
    },
    {
      title: "LLM / RAG / Agent 是否有真实理解",
      questions: ["RAG 知识库怎么构建和评测召回质量？", "LLM 幻觉如何处理？", "Agent 哪些步骤自动执行，哪些必须人工确认？"]
    },
    {
      title: "中台、治理与合规是否有证据",
      questions: ["如何管理模型、Prompt 和数据版本？", "如何做效果监控和漂移监控？", "跨境数据隐私和平台规则怎么处理？"]
    }
  ];
}

function renderRiskQuestions(groups) {
  document.querySelector("#riskQuestionList").innerHTML = groups
    .map(
      (group) => `
        <article class="risk-question-card">
          <h4>${escapeHtml(group.title)}</h4>
          <ul>${group.questions.map((question) => `<li>${escapeHtml(question)}</li>`).join("")}</ul>
        </article>
      `
    )
    .join("");
}

function buildPortfolioStrategy() {
  return [
    {
      title: "业务应用型 AI 产品",
      body: "商品情报与智能选品 Copilot，证明跨境电商场景挖掘、AI 产品设计、ROI 和业务转化。"
    },
    {
      title: "AI 洞察/分析型产品",
      body: "亚马逊评论 VOC 洞察与竞品分析平台，证明多语言 NLP、评论分析、RAG、LLM 报告和运营决策支持。"
    },
    {
      title: "AI 平台/治理型项目",
      body: "LLM 应用评测与 Prompt 版本管理平台，证明 AI 中台、模型生命周期、效果监控、版本管理、成本控制和合规意识。"
    }
  ];
}

function renderPortfolioStrategy(items) {
  document.querySelector("#portfolioStrategyList").innerHTML = items
    .map(
      (item) => `
        <article class="portfolio-strategy-card">
          <h4>${escapeHtml(item.title)}</h4>
          <p>${escapeHtml(item.body)}</p>
        </article>
      `
    )
    .join("");
}

function renderResumeReference(analysis) {
  const panel = document.querySelector("#resumeReferencePanel");
  const list = document.querySelector("#resumeReferenceList");
  if (analysis.score < 78 || analysis.experienceMatchScore < 70 || analysis.interviewReadyScore < 68) {
    panel.hidden = true;
    list.innerHTML = "";
    return;
  }
  const topWorks = [...analysis.projectAnalyses].sort((a, b) => b.score - a.score).slice(0, 2);
  list.innerHTML = topWorks
    .map(
      (work) => `
        <article class="resume-reference-card">
          <h4>${escapeHtml(work.title)}</h4>
          <ul>
            <li>项目背景：围绕 ${escapeHtml(analysis.needs.slice(0, 3).join("、"))} 建设可展示项目。</li>
            <li>产品职责：明确需求定义、路线图、方案设计、指标体系和跨团队推进边界。</li>
            <li>AI 能力：只写真实使用过的 NLP、Embedding、RAG、LLM、Agent、图像识别或评测能力。</li>
            <li>评估指标：补充准确率、召回率、采纳率、报告生成时间、ROI 或运营使用率。</li>
            <li>风险治理：写清隐私脱敏、数据来源合规、人工审核、低置信度提示和效果监控。</li>
          </ul>
        </article>
      `
    )
    .join("");
  panel.hidden = false;
}

async function analyzeDemandFromJD() {
  const jdText = jobDemandInput.value.trim();
  if (!jdText) {
    demandResultPanel.hidden = true;
    showDemandEmptyState("需要岗位 JD", "请先粘贴岗位职责或任职要求，再进行匹配分析。");
    jobDemandInput.focus();
    return;
  }
  analyzeJobDemandButton.disabled = true;
  analyzeJobDemandButton.textContent = "Codex 分析中...";
  if (demandSkillStatus) {
    demandSkillStatus.textContent = "正在启动本机 Codex，读取岗位与当前项目证据；本次不会使用固定规则结果。";
  }
  document.querySelector("#demandAnalysisMode").textContent = "Codex 实时分析中...";
  if (demandSkillSources) demandSkillSources.textContent = "正在加载岗位拆解 · 简历定向 · ATS 表达";
  try {
    const works = await collectDemandWorks();
    const demandWorks = works.map((work) => ({
      title: work.title,
      summary: work.summary,
      tag: work.tag,
      value: work.value,
      brief: work.brief,
      detail: work.detail,
      promo: work.promo,
      paidIdea: work.paidIdea
    }));
    const response = await fetch("/api/codex-jd-analysis", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jdText,
        projectPath: projectPathInput.value.trim(),
        projectTitle: titleInput.value.trim(),
        works: demandWorks
      })
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.result) {
      throw new Error(data.error || "本机 Codex 未返回 JD 分析结果");
    }
    renderDemandAnalysis(data.result);
  } catch (error) {
    demandResultPanel.hidden = true;
    showDemandEmptyState("Codex 实时分析失败", "本次未使用固定规则替代结果。请确认本机 Codex 已登录、Display OS 服务已启动，然后重试。");
    console.error("JD 匹配分析失败", error);
    if (demandSkillStatus) demandSkillStatus.textContent = "Codex 实时分析失败，未生成替代分数。";
    document.querySelector("#demandAnalysisMode").textContent = "Codex 分析失败";
  } finally {
    analyzeJobDemandButton.disabled = false;
    analyzeJobDemandButton.textContent = "分析";
  }
}

async function requestCodexAnalysis() {
  const title = titleInput.value.trim();
  const source = sourceInput.value.trim();
  const projectPath = projectPathInput.value.trim();
  if (!projectPath) {
    throw new Error("请先填写项目本地地址");
  }
  const response = await fetch("/api/codex-analysis", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      source,
      projectPath,
      audit: currentReadAudit
    })
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.result) {
    throw new Error(data.error || "本机 Codex 没有返回分析结果");
  }
  return data.result;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const title = titleInput.value.trim();
  const source = sourceInput.value.trim();
  if (!hasReadProject) {
    setStatus("请先读取项目，确认资料范围后再生成分析", "error");
    projectPathInput.focus();
    renderInputReadiness();
    return;
  }
  if (!title) {
    setStatus("请先填写项目名称，再生成分析", "error");
    titleInput.focus();
    renderInputReadiness();
    return;
  }
  if (!source) {
    setStatus("请先输入项目资料", "error");
    sourceInput.focus();
    return;
  }

  generateButton.disabled = true;
  isAnalyzing = true;
  renderInputReadiness();
  setStatus("正在调用本机 Codex，只读分析项目", "neutral");
  generateButton.textContent = "项目分析中...";

  try {
    const result = await requestCodexAnalysis();
    await renderAnalysis(result);
    await saveProjectDraft();
    await saveProjectRecord();
    await renderGeneratedWorks({ onlyCurrent: false }).catch(() => {});
    setStatus("分析已生成，结论仍需按证据状态核验", "ok");
  } catch (error) {
    const label = String(error.message || "").includes("项目") ? "项目记录保存失败" : "Codex 分析失败";
    setStatus(`${label}：${error.message}`, "error");
  } finally {
    isAnalyzing = false;
    generateButton.disabled = false;
    generateButton.textContent = "开始生成项目分析";
    renderInputReadiness();
  }
});

function buildProjectEvidenceSignature(audit) {
  const counts = audit?.counts || {};
  const selectedFiles = Array.isArray(audit?.selectedFiles)
    ? audit.selectedFiles
        .map((file) => `${file.relative || ""}|${Number(file.size || 0)}|${Number(file.readChars || 0)}`)
        .sort()
    : [];
  return JSON.stringify({
    counts: {
      candidateFiles: Number(counts.candidateFiles || 0),
      selectedTextFiles: Number(counts.selectedTextFiles || 0),
      unparsedArtifacts: Number(counts.unparsedArtifacts || 0),
      ignoredDirectories: Number(counts.ignoredDirectories || 0),
      skippedLargeFiles: Number(counts.skippedLargeFiles || 0),
      depthLimitHits: Number(counts.depthLimitHits || 0)
    },
    selectedFiles
  });
}

async function readCurrentProjectFromSource({ mode = "read" } = {}) {
  const projectPath = projectPathInput.value.trim();
  if (!projectPath) {
    throw new Error("请先填写项目本地地址");
  }

  const previousSource = sourceInput.value.trim();
  const previousTitle = titleInput.value.trim();

  if (mode === "update") {
    const activePanel = getActiveTabPanel();
    if (activePanel?.classList.contains("is-editing")) {
      await saveActiveTabEdits({ quiet: true });
    }
  }

  const projectPathKey = normalizeProjectPath(projectPath);
  const loadedProjectPathKey = normalizeProjectPath(currentRecordProjectPath);
  const readTitle =
    isEditingProjectPath || (loadedProjectPathKey && loadedProjectPathKey !== projectPathKey)
      ? ""
      : titleInput.value.trim();
  if (readTitle === "") {
    titleInput.value = "";
  }
  isEditingProjectPath = false;
  readProject.disabled = true;
  readProject.textContent = mode === "update" ? "更新中..." : "读取中...";
  setStatus(mode === "update" ? "正在读取当前项目最新文件" : "正在读取项目文件", "neutral");
  isReadingProject = true;
  hasReadProject = false;
  currentAnalysisResult = null;
  currentReadAudit = null;
  isAnalyzing = false;
  renderInputReadiness();

  try {
    const response = await fetch("/api/read-project", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        path: projectPath,
        title: readTitle
      })
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "读取项目失败");
    }
    if (!titleInput.value.trim()) {
      titleInput.value = data.projectName || "";
    }
    currentReadAudit = data.audit || null;
    hasReadProject = Boolean(data.source || data.fileCount || currentReadAudit || data.savedAsset);
    setSourceText(data.source || data.savedAsset?.source || sourceInput.value);
    renderAudit(currentReadAudit || buildManualAudit(sourceInput.value));
    const restoredAsset = await restoreSavedProjectAsset(
      data.savedAsset,
      currentReadAudit,
      projectPath,
      data.projectName || ""
    );
    if (!restoredAsset) {
      currentRecordProjectPath = normalizeProjectPath(projectPath);
      await loadProjectImages({ force: true });
      await renderAllPanelImages();
    }

    if (mode === "update") {
      const savedAudit = data.savedAsset?.analysis?.audit || data.savedAsset?.audit || null;
      const currentEvidenceSignature = buildProjectEvidenceSignature(data.audit);
      const savedEvidenceSignature = buildProjectEvidenceSignature(savedAudit);
      const sourceChanged = savedAudit
        ? currentEvidenceSignature !== savedEvidenceSignature
        : String(data.source || data.savedAsset?.source || "").trim() !== previousSource;
      const savedTitle = String(data.savedAsset?.manifest?.title || "").trim();
      const titleChanged = Boolean(savedTitle && previousTitle && savedTitle !== previousTitle);
      if (!sourceChanged && !titleChanged && restoredAsset) {
        currentRecordProjectPath = normalizeProjectPath(projectPath);
        setStatus("当前项目已检查，未发现资料变化，保留原有分析结果", "ok");
        return {
          mode,
          changed: false,
          fileCount: Number(data.fileCount || 0),
          restoredAsset
        };
      }
      setStatus("正在重新分析当前项目", "neutral");
      isAnalyzing = true;
      renderInputReadiness();
      const result = await requestCodexAnalysis();
      await renderAnalysis(result);
      await saveProjectDraft();
      await saveProjectRecordWithRetry({ silent: true, attempts: 2 });
      await renderGeneratedWorks({ onlyCurrent: false }).catch(() => {});
      setStatus("当前项目已更新，项目分析页面已刷新", "ok");
      return {
        mode,
        changed: true,
        fileCount: Number(data.fileCount || 0),
        restoredAsset
      };
    }

    await saveProjectDraft();
    try {
      await saveProjectRecord();
      await renderGeneratedWorks({ onlyCurrent: false }).catch(() => {});
      const pending = Number(currentReadAudit?.counts?.unparsedArtifacts || 0);
      setStatus(
        restoredAsset
          ? `已读取并恢复项目分析${pending ? `，另有 ${pending} 项待核验` : ""}`
          : pending
          ? `已读取 ${data.fileCount} 项关键资料，另有 ${pending} 项待核验`
          : `已读取 ${data.fileCount} 项关键资料，可以开始生成分析`,
        "ok"
      );
    } catch {
      setStatus(`已读取 ${data.fileCount} 个关键文本文件，但项目记录保存失败`, "error");
    }
    return { mode, fileCount: Number(data.fileCount || 0), restoredAsset };
  } finally {
    isAnalyzing = false;
    isReadingProject = false;
    readProject.disabled = false;
    readProject.textContent = "读取项目";
    renderInputReadiness();
  }
}

readProject.addEventListener("click", async () => {
  try {
    await readCurrentProjectFromSource();
  } catch (error) {
    hasReadProject = false;
    setStatus(`读取失败：${error.message}`, "error");
    projectPathInput.focus();
  }
});

async function updateCurrentProjectFromSource() {
  if (isUpdatingCurrentProject || isSyncingGithub) return;
  if (!projectPathInput.value.trim()) {
    setPublishSyncStatus("待选择项目", "error");
    setStatus("请先选择项目目录，再点击更新", "error");
    projectPathInput.focus();
    return;
  }

  isUpdatingCurrentProject = true;
  setPublishSyncStatus("正在更新", "running");
  setStatus("正在更新当前项目：读取最新资料并重新分析", "neutral");
  updateTopbarPublishActions();
  try {
    const result = await readCurrentProjectFromSource({ mode: "update" });
    setPublishSyncStatus(result?.changed === false ? "无变化" : "已更新", "ok");
  } catch {
    setPublishSyncStatus("更新失败", "error");
    setStatus("当前项目更新失败，请检查项目目录和服务状态后重试", "error");
  } finally {
    isUpdatingCurrentProject = false;
    updateTopbarPublishActions();
  }
}

async function syncSavedProjectsToGithub() {
  if (isUpdatingCurrentProject || isSyncingGithub) return;

  isSyncingGithub = true;
  setPublishSyncStatus("正在同步", "running");
  setStatus("正在把已保存项目同步到 GitHub Pages", "neutral");
  updateTopbarPublishActions();
  try {
    const response = await fetch("/api/publish-static-github", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mode: "published-projects" })
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.published) {
      throw new Error(data.error || "GitHub 同步失败");
    }
    const projectCount = Number(data.projectCount || 0);
    const statusText = data.changed
      ? `已同步 ${projectCount} 个项目`
      : "GitHub 页面已是最新";
    setPublishSyncStatus("已同步", "ok");
    setStatus(`${statusText}，公开页面正在更新`, "ok");
  } catch {
    setPublishSyncStatus("同步失败", "error");
    setStatus("GitHub 同步失败，请检查登录状态和网络后重试", "error");
  } finally {
    isSyncingGithub = false;
    updateTopbarPublishActions();
  }
}

updateCurrentProjectButton?.addEventListener("click", updateCurrentProjectFromSource);
syncGithubButton?.addEventListener("click", syncSavedProjectsToGithub);

async function loadFeaturedProject({ shouldScroll = true } = {}) {
  titleInput.value = demo.title;
  projectPathInput.value = demo.path || "";
  hasReadProject = true;
  supplementalMaterialName = "精选示例资料";
  setSourceText(demo.source);
  await renderAnalysis(demo.result || buildLocalAnalysis(demo.title, demo.source, null, getActiveProjectPath()));
  await saveProjectDraft();
  await saveProjectRecord({ silent: true }).catch(() => {});
  setStatus("已载入精选示例，非当前项目读取结果", "neutral");
  if (shouldScroll) {
    navigateToPageId("analysis");
  }
}

loadDemo.addEventListener("click", () => loadFeaturedProject());

function hasUnsavedProjectContent() {
  return Boolean(
    projectPathInput.value.trim() ||
    titleInput.value.trim() ||
    sourceInput.value.trim() ||
    currentAnalysisResult ||
    imageStore.input?.length ||
    Object.values(imageStore.panels || {}).some((images) => images?.length)
  );
}

async function persistProjectBeforeNew() {
  const projectPath = projectPathInput.value.trim();
  if (!projectPath) {
    if (hasUnsavedProjectContent()) {
      throw new Error("当前内容还没有关联项目目录，请先填写项目地址后再新建");
    }
    return null;
  }

  const activePanel = getActiveTabPanel();
  if (activePanel?.classList.contains("is-editing")) {
    setStatus("正在保存当前编辑内容，请稍候", "neutral");
    await saveActiveTabEdits({ quiet: true });
  }

  await saveProjectDraft();
  const record = await saveProjectRecordWithRetry({ silent: true, attempts: 2 });
  if (!record?.key) {
    throw new Error("项目记录未确认保存");
  }
  if (record.assetSaved === false) {
    throw new Error("项目目录资产包写入失败，请检查目录权限后重试");
  }
  return record;
}

async function saveAllProjectContent() {
  const projectPath = projectPathInput.value.trim();
  if (!projectPath) {
    setStatus("请先填写项目目录，再保存项目", "error");
    projectPathInput.focus();
    return null;
  }
  if (isEditingProjectPath) {
    setStatus("请先完成项目目录输入，再保存项目", "error");
    projectPathInput.focus();
    return null;
  }
  const activePanel = getActiveTabPanel();
  const originalLabel = saveProjectButton?.textContent || "保存项目";
  if (saveProjectButton) {
    saveProjectButton.disabled = true;
    saveProjectButton.setAttribute("aria-busy", "true");
    saveProjectButton.textContent = "保存中...";
  }
  try {
    if (activePanel?.classList.contains("is-editing")) {
      await saveActiveTabEdits({ quiet: true, persist: false });
    }
    await saveProjectDraft();
    const record = await saveProjectRecordWithRetry({ silent: true, attempts: 2 });
    if (!record?.key) throw new Error("项目记录未确认保存");
    if (record.assetSaved === false) {
      throw new Error("项目目录资产未写入，请检查目录权限后重试");
    }
    await renderProjectHistoryOptions();
    await renderGeneratedWorks({ onlyCurrent: false }).catch(() => {});
    setStatus("项目全部内容已保存，后续可从项目记录恢复", "ok");
    return record;
  } catch (error) {
    setStatus(`项目保存失败：${error.message || "请检查服务状态后重试"}`, "error");
    return null;
  } finally {
    if (saveProjectButton) {
      saveProjectButton.disabled = false;
      saveProjectButton.removeAttribute("aria-busy");
      saveProjectButton.textContent = originalLabel;
    }
  }
}

saveProjectButton?.addEventListener("click", saveAllProjectContent);

newProjectButton.addEventListener("click", async () => {
  if (newProjectButton.disabled) return;
  const previousProjectIdentity = capturePreviousProjectDisplay();
  const originalLabel = newProjectButton.textContent;
  newProjectButton.disabled = true;
  newProjectButton.setAttribute("aria-busy", "true");
  newProjectButton.textContent = "保存当前项目...";
  try {
    await persistProjectBeforeNew();
    await clearActiveProjectRecord();
    clearTimeout(draftSaveTimer);
    clearTimeout(remoteDraftSaveTimer);
    isRestoringDraft = true;
    projectPathInput.value = "";
    titleInput.value = "";
    setSourceText("");
    if (sourceDetails) sourceDetails.open = false;
    fileInput.value = "";
    projectImagesInput.value = "";
    supplementalMaterialName = "";
    currentAnalysisResult = null;
    currentReadAudit = null;
    hasReadProject = false;
    isAnalyzing = false;
    currentPublishedShowcase = null;
    currentPricingPage = null;
    currentRecordProjectPath = "";
    currentShowcaseOwnerPath = "";
    currentPricingOwnerPath = "";
    currentImageProjectKey = "";
    resetImageStore();
    renderImagePreview("input", inputImagePreview);
    resetOutputPanels();
    renderInputReadiness();
    isRestoringDraft = false;
    await renderGeneratedWorks({ onlyCurrent: false });
    await renderProjectHistoryOptions();
    setStatus("已保存当前项目并新建空白项目", "ok");
    projectPathInput.focus();
  } catch (error) {
    isRestoringDraft = false;
    setStatus(`新建已取消：${error.message || "当前项目未能安全保存"}`, "error");
  } finally {
    newProjectButton.disabled = false;
    newProjectButton.removeAttribute("aria-busy");
    newProjectButton.textContent = originalLabel || "新建";
  }
});

fileInput.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;
  supplementalMaterialName = file.name || "已添加文本材料";
  currentReadAudit = null;
  setSourceText(await file.text());
  if (sourceDetails) sourceDetails.open = true;
  if (!titleInput.value.trim()) {
    titleInput.value = file.name.replace(/\.[^.]+$/, "");
  }
  await loadProjectImages({ force: true });
  await renderAllPanelImages();
  await saveProjectDraft();
  await saveProjectRecord({ silent: true }).catch(() => {});
  renderInputReadiness();
});

projectImagesInput.addEventListener("change", (event) => {
  readImageFiles(event.target.files, "input");
  event.target.value = "";
});

inputImageDrop.addEventListener("click", () => projectImagesInput.click());
inputImageDrop.addEventListener("paste", (event) => {
  pasteImagesFromClipboard(event, "input");
});

document.addEventListener("change", (event) => {
  const input = event.target.closest("[data-image-scope]");
  if (!input) return;
  readImageFiles(input.files, input.dataset.imageScope);
  input.value = "";
});

document.addEventListener("click", async (event) => {
  const addImageButton = event.target.closest("[data-add-image-scope]");
  if (addImageButton) {
    const scope = addImageButton.dataset.addImageScope;
    addImageButton.focus({ preventScroll: true });
    const fileInput = Array.from(document.querySelectorAll("input[type=\"file\"][data-image-scope]"))
      .find((input) => input.dataset.imageScope === scope);
    fileInput?.click();
    return;
  }
  const removeButton = event.target.closest("[data-remove-image]");
  if (removeButton) {
    await removeImage(removeButton.dataset.imageScope, removeButton.dataset.removeImage);
    return;
  }
  const hideWorkButton = event.target.closest("[data-hide-work]");
  if (hideWorkButton) {
    const id = hideWorkButton.dataset.hideWork;
    const work = (await getWorkRecords()).find((item) => String(item.id) === String(id));
    if (!work) return;
    hideWorkButton.disabled = true;
    const updated = {
      ...work,
      visibility: "hidden",
      portfolio: { ...(work.portfolio || {}), visibility: "hidden", updatedAt: new Date().toISOString() }
    };
    try {
      await updateRemoteShowcase(id, { visibility: "hidden", portfolio: updated.portfolio });
    } catch (error) {
      if (!/不存在|404/.test(error.message || "")) {
        setStatus("隐藏失败，原作品仍保持展示", "error");
        hideWorkButton.disabled = false;
        return;
      }
    }
    await saveWorkRecord(updated);
    await renderGeneratedWorks();
    setStatus("作品已隐藏，原始项目资料未删除", "ok");
    return;
  }
  const restoreWorkButton = event.target.closest("[data-restore-work]");
  if (restoreWorkButton) {
    const id = restoreWorkButton.dataset.restoreWork;
    const work = (await getWorkRecords()).find((item) => String(item.id) === String(id));
    if (!work) return;
    restoreWorkButton.disabled = true;
    const updated = {
      ...work,
      visibility: "visible",
      portfolio: { ...(work.portfolio || {}), visibility: "visible", updatedAt: new Date().toISOString() }
    };
    try {
      await updateRemoteShowcase(id, { visibility: "visible", portfolio: updated.portfolio });
    } catch (error) {
      if (!/不存在|404/.test(error.message || "")) {
        setStatus("恢复失败，请检查服务状态", "error");
        restoreWorkButton.disabled = false;
        return;
      }
    }
    await saveWorkRecord(updated);
    await renderGeneratedWorks();
    setStatus("作品已恢复展示", "ok");
    return;
  }
  const deleteWorkButton = event.target.closest("[data-delete-work]");
  if (deleteWorkButton) {
    const id = deleteWorkButton.dataset.deleteWork;
    if (!window.confirm("确认删除该作品展示记录？\n删除后只会移除作品集展示，原始项目资料和分析结果不会删除。")) return;
    if (!window.confirm("请再次确认：该展示记录将从公开作品集移除，是否继续？")) return;
    deleteWorkButton.disabled = true;
    try {
      await deleteRemoteShowcase(id);
    } catch (error) {
      if (!/不存在|404/.test(error.message || "")) {
        setStatus("删除失败，原作品仍保留", "error");
        deleteWorkButton.disabled = false;
        return;
      }
    }
    await deleteWorkRecord(id);
    if (currentPublishedShowcase?.id === id) {
      currentPublishedShowcase = null;
      updateGenerateShowcaseButtonLabel();
    }
    await renderGeneratedWorks();
    setStatus("展示作品已删除，原始项目资料未删除", "ok");
    return;
  }
  const pricingOption = event.target.closest("[data-pricing-select]");
  if (pricingOption) {
    const pricingRoot = pricingOption.closest("[data-project-pricing]") || pricingGrid;
    const selector = pricingOption.closest("[data-pricing-selector]");
    const products = JSON.parse(pricingRoot?.dataset.pricingProducts || pricingGrid?.dataset.pricingProducts || "[]");
    const product = products.find((item) => item.id === pricingOption.dataset.pricingSelect);
    if (product) {
      updatePricingSelection(product, selector);
      setStatus(`已选择${getPricingProductLabel(product)}，当前售价 ${product.price}`, "neutral");
    }
    return;
  }
  const pricingDetailButton = event.target.closest("[data-pricing-detail]");
  if (pricingDetailButton) {
    const pricingRoot = pricingDetailButton.closest("[data-project-pricing]") || pricingGrid;
    const products = JSON.parse(pricingRoot?.dataset.pricingProducts || pricingGrid?.dataset.pricingProducts || "[]");
    const product = products.find((item) => item.id === pricingDetailButton.dataset.pricingDetail);
    if (product) openPricingModal(product);
    return;
  }
  const button = event.target.closest("[data-copy-target]");
  if (!button) return;
  const target = button.closest(`.${button.dataset.copyTarget}`);
  await copyText(getCopyTextFromElement(target));
});

function setShowcaseHidden(hidden) {
  const showcase = document.querySelector("#showcase");
  const isHidden = Boolean(hidden);
  showcase.classList.toggle("is-hidden", isHidden);
  hideShowcaseButton.textContent = isHidden ? "显示区域" : "隐藏区域";
  showShowcaseButton.hidden = !isHidden;
}

hideShowcaseButton.addEventListener("click", () => {
  const showcase = document.querySelector("#showcase");
  setShowcaseHidden(!showcase.classList.contains("is-hidden"));
});

showShowcaseButton.addEventListener("click", async () => {
  setShowcaseHidden(false);
  await renderGeneratedWorks();
  navigateToPageId("showcase");
});

toggleHiddenWorksButton?.addEventListener("click", async () => {
  showHiddenWorks = !showHiddenWorks;
  await renderGeneratedWorks({ includeHidden: showHiddenWorks });
  setStatus(showHiddenWorks ? "已显示隐藏项目，可恢复展示或删除" : "已返回公开展示项目", "neutral");
});

titleInput.addEventListener("change", async () => {
  await loadProjectImages({ force: true });
  await renderAllPanelImages();
  await saveProjectDraft();
  await saveProjectRecord({ silent: true }).catch(() => {});
});

projectPathInput.addEventListener("change", async () => {
  if (isReadingProject) return;
  isEditingProjectPath = false;
  const nextPathKey = normalizeProjectPath(projectPathInput.value);
  const pathChangedFromLoadedProject = Boolean(
    currentRecordProjectPath && currentRecordProjectPath !== nextPathKey
  );
  const shouldClearProjectTitle = pathChangedFromLoadedProject || !currentRecordProjectPath;
  const previousDisplayProjectIdentity = capturePreviousProjectDisplay();
  hasReadProject = false;
  currentReadAudit = null;
  currentAnalysisResult = null;
  isAnalyzing = false;
  currentPublishedShowcase = null;
  currentPricingPage = null;
  currentRecordProjectPath = "";
  currentShowcaseOwnerPath = "";
  currentPricingOwnerPath = "";
  if (shouldClearProjectTitle) {
    titleInput.value = "";
  }
  supplementalMaterialName = "";
  setSourceText("");
  resetOutputPanels();
  await loadProjectImages({ force: true });
  await renderAllPanelImages();
  renderInputReadiness();
  await renderGeneratedWorks({ onlyCurrent: false }).catch(() => {});
});

function openProjectHistoryMenu() {
  renderProjectHistoryOptions().then(() => {
    if (projectHistoryMenu) projectHistoryMenu.hidden = false;
  });
}

function closeProjectHistoryMenu() {
  if (projectHistoryMenu) projectHistoryMenu.hidden = true;
}

projectPathInput.addEventListener("focus", openProjectHistoryMenu);
projectPathInput.addEventListener("click", openProjectHistoryMenu);
toggleProjectHistory?.addEventListener("click", (event) => {
  event.preventDefault();
  if (!projectHistoryMenu) return;
  if (projectHistoryMenu.hidden) {
    openProjectHistoryMenu();
    projectPathInput.focus();
  } else {
    closeProjectHistoryMenu();
  }
});

projectHistoryMenu?.addEventListener("mousedown", (event) => {
  event.preventDefault();
});

projectHistoryMenu?.addEventListener("click", async (event) => {
  const deleteButton = event.target.closest("[data-delete-project-key]");
  if (deleteButton) {
    event.preventDefault();
    event.stopPropagation();
    const title = deleteButton.closest(".project-history-item")?.querySelector(".project-history-title")?.textContent || "该项目";
    if (!window.confirm(`确认从历史记录中删除“${title}”？\n只删除记录，不删除项目目录中的原始资料和资产包。`)) return;
    deleteButton.disabled = true;
    try {
      const result = await deleteProjectHistoryEntry({
        key: deleteButton.dataset.deleteProjectKey,
        source: deleteButton.dataset.deleteProjectSource,
        path: deleteButton.dataset.deleteProjectPath,
        title
      });
      const currentPath = normalizeProjectPath(projectPathInput.value);
      if (result.projectPath && normalizeProjectPath(result.projectPath) === currentPath) {
        currentRecordProjectPath = "";
        clearTimeout(draftSaveTimer);
        clearTimeout(remoteDraftSaveTimer);
        setStatus("项目记录已删除，当前页面内容仍保留，项目目录资料未删除", "ok");
      } else {
        setStatus("项目记录已删除，项目目录资料未删除", "ok");
      }
      await renderProjectHistoryOptions();
    } catch (error) {
      deleteButton.disabled = false;
      setStatus(`删除失败：${error.message || "请稍后重试"}`, "error");
    }
    return;
  }
  const item = event.target.closest("[data-project-key]");
  if (!item) return;
  const restored = await restoreProjectDraftByKey(item.dataset.projectKey);
  closeProjectHistoryMenu();
  if (!restored) {
    setStatus("没有找到对应的历史项目", "error");
    await renderProjectHistoryOptions();
  }
});

document.addEventListener("click", (event) => {
  if (event.target.closest(".project-path-wrap")) return;
  closeProjectHistoryMenu();
});

sourceInput.addEventListener("input", () => {
  currentReadAudit = null;
  scheduleProjectDraftSave();
  renderInputReadiness();
});
projectPathInput.addEventListener("input", () => {
  if (isReadingProject) return;
  isEditingProjectPath = true;
  clearTimeout(remoteDraftSaveTimer);
  const typedPathKey = normalizeProjectPath(projectPathInput.value);
  if (
    titleInput.value.trim() &&
    (!currentRecordProjectPath || typedPathKey !== currentRecordProjectPath)
  ) {
    titleInput.value = "";
  }
  renderInputReadiness();
});
titleInput.addEventListener("input", () => {
  scheduleProjectDraftSave();
  renderInputReadiness();
});

document.addEventListener("paste", (event) => {
  const active = document.activeElement;
  const scoped = active?.closest?.(".paste-image-zone, .image-paste-zone, .image-strip[data-image-scope], [data-image-scope], [data-paste-image-scope]");
  const scope = scoped?.dataset.imageScope || scoped?.dataset.pasteImageScope || "input";
  pasteImagesFromClipboard(event, scope);
});

const showcasePublishStageLabels = {
  scope: "清理其他作品",
  sync: "同步宣传内容",
  snapshot: "生成发布快照",
  local: "保存本机作品",
  archive: "保存项目档案",
  verify: "确认服务端展示",
  cards: "刷新作品卡片"
};

function formatShowcaseStageError(stage, error) {
  const retryable = Boolean(error?.retryable) || ["EPERM", "EACCES", "EBUSY", "ENOENT"].includes(String(error?.code || ""));
  if (String(error?.code || "") === "ANALYSIS_REQUIRED") {
    return "生成未开始：请先读取项目并完成项目分析，确认分析结果后再生成落地展示";
  }
  const messages = {
    sync: "生成失败：宣传内容同步失败，请先保存当前模块后重试",
    snapshot: "生成失败：落地展示快照生成失败，请检查当前项目资料后重试",
    local: String(error?.code || "") === "WORK_STORAGE_UNAVAILABLE"
      ? "生成失败：浏览器暂时无法保存本机作品，请关闭其他本地标签页或清理本站点存储后重试"
      : "生成失败：本机作品保存失败，请检查浏览器存储后重试",
    archive: retryable
      ? "生成未完成：本机作品已保留，但项目档案正在被占用；请检查服务后再次点击“重新生成”"
      : "生成未完成：本机作品已保留，但项目档案未同步；请检查服务后再次点击“重新生成”",
    verify: "已生成本机作品，但服务端暂未确认发布；请检查服务后刷新落地展示",
    cards: "作品已发布，但卡片暂未刷新；请重新打开落地展示"
  };
  return messages[stage] || `生成失败：${error?.message || "请检查项目资料和服务状态"}`;
}

async function verifyPublishedShowcase(showcaseId) {
  const response = await fetch(`/api/showcase-projects/${encodeURIComponent(showcaseId)}`, { cache: "no-store" });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.project?.published) {
    const error = new Error(data.error || "服务端尚未确认展示");
    error.code = data.code || (response.status >= 500 ? "SHOWCASE_VERIFY_FAILED" : "SHOWCASE_NOT_PUBLISHED");
    error.retryable = response.status >= 500 || Boolean(data.retryable);
    throw error;
  }
  return data.project;
}

async function publishShowcaseSnapshot({ isRegenerate = false } = {}) {
  let stage = "sync";
  let localStorageWarning = null;
  const setStage = (nextStage, message) => {
    stage = nextStage;
    setStatus(message || `正在${showcasePublishStageLabels[nextStage] || "处理展示"}`, "neutral");
  };
  const markStageError = (error) => {
    if (error && typeof error === "object") error.showcaseStage = stage;
    throw error;
  };

  try {
    if (!currentAnalysisResult) {
      const error = new Error("请先读取项目并完成项目分析");
      error.code = "ANALYSIS_REQUIRED";
      throw error;
    }
    setStage("sync", "正在同步当前宣传模块");
    const activePanel = getActiveTabPanel();
    if (activePanel?.classList.contains("is-editing")) {
      await saveActiveTabEdits({ quiet: true });
    }

    setStage("snapshot", isRegenerate ? "正在生成新的落地展示快照" : "正在生成落地展示快照");
    await loadProjectImages();
    const work = buildWorkRecord();
    work.published = true;
    work.status = "generated";
    work.visibility = "visible";
    work.portfolio = {
      ...(work.portfolio || {}),
      status: "generated",
      visibility: "visible",
      manualEdited: false,
      updatedAt: new Date().toISOString()
    };
    work.publishedAt = new Date().toISOString();
    clearRetainedShowcaseForNewProject();
    currentPublishedShowcase = work;
    currentShowcaseOwnerPath = normalizeProjectPath(projectPathInput.value);
    setStage("scope", "正在确认当前项目范围");

    setStage("local", "正在保存本机作品");
    try {
      await saveWorkRecord(work);
    } catch (error) {
      localStorageWarning = error;
      console.warn("浏览器本机缓存不可用，继续使用服务端作品档案完成发布", error);
    }
    await saveProjectDraft().catch((error) => {
      console.warn("项目草稿保存失败，不阻断作品发布", error);
    });

    setStage("archive", "正在保存项目档案");
    try {
      await saveProjectRecordWithRetry({ silent: true, attempts: 2 });
    } catch (error) {
      console.warn("作品已保存在本机，但项目档案同步失败", error);
      await renderGeneratedWorks().catch((renderError) => {
        console.warn("本机作品已生成，但卡片刷新失败", renderError);
      });
      return { status: "local_only", work, error, stage, localStorageWarning };
    }

    setStage("verify", "正在确认服务端展示");
    let publishedProject;
    try {
      publishedProject = await verifyPublishedShowcase(work.id);
    } catch (error) {
      console.warn("项目档案已保存，但服务端展示确认失败", error);
      await renderGeneratedWorks().catch((renderError) => {
        console.warn("服务端确认失败，同时卡片刷新失败", renderError);
      });
      return { status: "server_unconfirmed", work, error, stage, localStorageWarning };
    }
    currentPublishedShowcase = { ...work, ...publishedProject, published: true };

    setStage("cards", "正在刷新作品卡片");
    try {
      await renderGeneratedWorks();
    } catch (error) {
      console.warn("作品已发布，但卡片刷新失败", error);
      return { status: "published_cards_pending", work, publishedProject, error, stage, localStorageWarning };
    }
    return { status: "published", work, publishedProject, stage: "done", localStorageWarning };
  } catch (error) {
    return markStageError(error);
  }
}

// 使用捕获阶段接管旧监听器，保证“生成展示”按业务发布事务执行；旧逻辑保留作兼容代码但不会重复触发。
generateShowcaseButton.addEventListener("click", async (event) => {
  event.stopImmediatePropagation();
  if (generateShowcaseButton.disabled) return;
  const isRegenerate = Boolean(currentPublishedShowcase?.published && currentShowcaseOwnerPath === normalizeProjectPath(projectPathInput.value));
  if (isRegenerate) {
    const hasManualEdits = Boolean(currentPublishedShowcase?.portfolio?.manualEdited);
    const warning = hasManualEdits
      ? "当前作品集包含手工修改。重新生成会用最新项目分析替换作品集内容，手工修改可能被覆盖。是否继续？"
      : "当前项目已经有作品展示。重新生成会用最新项目分析更新展示内容，是否继续？";
    if (!window.confirm(warning)) return;
  }
  generateShowcaseButton.disabled = true;
  generateShowcaseButton.dataset.busy = "true";
  const previousPublishedShowcase = currentPublishedShowcase;
  const previousShowcaseOwnerPath = currentShowcaseOwnerPath;
  try {
    const result = await publishShowcaseSnapshot({ isRegenerate });
    const view = buildShowcaseCardViewModel(result.work);
    updateGenerateShowcaseButtonLabel();
    if (result.status === "local_only") {
      setStatus(`已在本机生成「${view.title}」作品展示，但项目档案未同步；请检查服务后再次点击“重新生成”`, "warning");
      navigateToPageId("showcase");
      return;
    }
    if (result.status === "server_unconfirmed") {
      setStatus(`已生成「${view.title}」作品，但服务端暂未确认发布；请检查服务后刷新落地展示`, "warning");
      navigateToPageId("showcase");
      return;
    }
    if (result.status === "published_cards_pending") {
      setStatus(`已发布「${view.title}」作品展示，但作品卡片暂未刷新；请重新打开落地展示`, "warning");
      navigateToPageId("showcase");
      return;
    }
    const publishMessage = `${isRegenerate ? "已重新生成" : "已生成"}「${view.title}」作品展示，服务端已确认保存，其他项目保持不变，当前页面仅展示本项目`;
    setStatus(
      result.localStorageWarning
        ? `${publishMessage}；浏览器本机缓存不可用，刷新时将从服务端档案恢复`
        : publishMessage,
      result.localStorageWarning ? "warning" : "ok"
    );
    navigateToPageId("showcase");
  } catch (error) {
    console.error("生成展示失败", error);
    currentPublishedShowcase = previousPublishedShowcase;
    currentShowcaseOwnerPath = previousShowcaseOwnerPath;
    setStatus(formatShowcaseStageError(error?.showcaseStage || "snapshot", error), "error");
  } finally {
    generateShowcaseButton.disabled = false;
    delete generateShowcaseButton.dataset.busy;
    updateGenerateShowcaseButtonLabel();
  }
}, true);

generateShowcaseButton.addEventListener("click", async () => {
  if (generateShowcaseButton.disabled) return;
  const isRegenerate = Boolean(currentPublishedShowcase?.published && currentShowcaseOwnerPath === normalizeProjectPath(projectPathInput.value));
  if (isRegenerate) {
    const hasManualEdits = Boolean(currentPublishedShowcase?.portfolio?.manualEdited);
    const warning = hasManualEdits
      ? "当前作品集包含手工修改。重新生成会用最新项目分析替换作品集内容，手工修改可能被覆盖。是否继续？"
      : "当前项目已经有作品展示。重新生成会用最新项目分析更新展示内容，是否继续？";
    if (!window.confirm(warning)) return;
  }
  generateShowcaseButton.disabled = true;
  generateShowcaseButton.dataset.busy = "true";
  const previousPublishedShowcase = currentPublishedShowcase;
  const previousShowcaseOwnerPath = currentShowcaseOwnerPath;
  setStatus(isRegenerate ? "正在重新整理作品集并保存新版本" : "正在整理作品集并保存展示记录", "neutral");
  try {
    const activePanel = getActiveTabPanel();
    if (activePanel?.classList.contains("is-editing")) {
      await saveActiveTabEdits({ quiet: true });
    }
    await loadProjectImages();
    const work = buildWorkRecord();
    work.published = true;
    work.status = "generated";
    work.visibility = "visible";
    work.portfolio = {
      ...(work.portfolio || {}),
      status: "generated",
      visibility: "visible",
      manualEdited: false,
      updatedAt: new Date().toISOString()
    };
    work.publishedAt = new Date().toISOString();
    clearRetainedShowcaseForNewProject();
    currentPublishedShowcase = work;
    currentShowcaseOwnerPath = normalizeProjectPath(projectPathInput.value);
    await saveWorkRecord(work);
    await saveProjectDraft();
    let projectRecordSynced = true;
    try {
      await saveProjectRecordWithRetry({ silent: true, attempts: 2 });
    } catch (error) {
      projectRecordSynced = false;
      console.warn("作品展示已保存在本机，但项目档案同步失败", error);
    }
    await renderGeneratedWorks();
    const view = buildShowcaseCardViewModel(work);
    updateGenerateShowcaseButtonLabel();
    if (!projectRecordSynced) {
      setStatus(`已在本机生成「${view.title}」作品展示，但项目档案同步失败；请检查服务后再次点击“重新生成”`, "warning");
      navigateToPageId("showcase");
      return;
    }
    setStatus(`${isRegenerate ? "已重新生成" : "已生成"}「${view.title}」作品展示，可打开独立作品页查看`, "ok");
    navigateToPageId("showcase");
  } catch (error) {
    console.error("生成展示失败", error);
    currentPublishedShowcase = previousPublishedShowcase;
    currentShowcaseOwnerPath = previousShowcaseOwnerPath;
    const retryablePublishFailure = Boolean(error?.retryable) || ["EPERM", "EACCES", "EBUSY", "ENOENT"].includes(String(error?.code || ""));
    const publishFailureMessage = retryablePublishFailure
      ? "生成失败：项目档案正在被同时保存，展示尚未发布；请点击“重新生成”重试"
      : String(error?.code || "") === "INTERNAL_ERROR" || error?.message === "Internal error"
        ? "生成失败：展示记录未保存，服务暂时不可用；请检查服务状态后点击“重新生成”"
        : `生成失败：${error?.message || "请检查项目资料和服务状态"}`;
    setStatus(publishFailureMessage, "error");
  } finally {
    generateShowcaseButton.disabled = false;
    delete generateShowcaseButton.dataset.busy;
    updateGenerateShowcaseButtonLabel();
  }
});

generatePricingButton?.addEventListener("click", async () => {
  if (generatePricingButton.dataset.busy === "true") return;

  generatePricingButton.dataset.busy = "true";
  generatePricingButton.disabled = true;
  generatePricingButton.setAttribute("aria-busy", "true");
  generatePricingButton.textContent = "生成中…";
  setStatus("正在生成定价方案", "neutral");

  const persistenceWarnings = [];
  try {
    const page = buildPricingPage();

    try {
      await savePricingPage(page);
    } catch (error) {
      console.warn("定价方案本地保存未完成，继续更新当前页面", error);
      persistenceWarnings.push("本地保存未完成");
    }

    // 先把当前生成结果映射到页面，避免任一本地持久化失败阻断用户看到结果。
    await renderPricingPage(page);

    try {
      await saveProjectDraft();
    } catch (error) {
      console.warn("定价生成后的项目草稿保存未完成", error);
      persistenceWarnings.push("草稿保存未完成");
    }

    try {
      await saveProjectRecord({ silent: true });
    } catch (error) {
      console.warn("定价生成后的项目记录同步未完成", error);
      persistenceWarnings.push("项目记录同步未完成");
    }

    await renderGeneratedWorks({ onlyCurrent: false }).catch(() => {});

    const resultMessage = persistenceWarnings.length
      ? `定价已生成，已更新 ${page.products.length} 档方案；${persistenceWarnings.join("、")}，可再次点击重试`
      : `定价已生成，已更新 ${page.products.length} 档方案，可继续检查套餐价格`;
    setStatus(resultMessage, persistenceWarnings.length ? "warning" : "ok");
    navigateToMarketSection();
  } catch (error) {
    console.error("生成定价失败", error);
    const message = /读取项目|执行 Codex 分析/.test(String(error?.message || ""))
      ? "请先读取项目并完成项目分析"
      : "定价生成未完成，请检查项目资料后重试";
    setStatus(message, "error");
  } finally {
    generatePricingButton.textContent = "生成定价";
    generatePricingButton.removeAttribute("aria-busy");
    delete generatePricingButton.dataset.busy;
    updateGeneratePricingButtonState();
  }
});

editTabButton?.addEventListener("click", startEditActiveTab);
saveTabButton?.addEventListener("click", saveActiveTabEdits);
if (saveTabButton) saveTabButton.disabled = true;

pricingModal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-pricing]")) {
    closePricingModal();
  }
});

openDemandAnalysisButton?.addEventListener("click", openDemandModal);
fillDemandSampleButton?.addEventListener("click", () => {
  jobDemandInput.value = demandSampleJD;
  localStorage.setItem(demandDraftKey, demandSampleJD);
  jobDemandInput.focus();
});
jobDemandInput?.addEventListener("input", () => {
  localStorage.setItem(demandDraftKey, jobDemandInput.value);
});
analyzeJobDemandButton?.addEventListener("click", analyzeDemandFromJD);
demandModal?.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-demand]")) {
    closeDemandModal();
  }
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activateTab(tab.dataset.tab);
    scheduleProjectDraftSave();
  });
});

setupPagePager();

async function initializeProjectState() {
  let restored = false;
  setPublishSyncStatus("正在恢复", "running");
  setStatus("正在恢复最近项目，请稍候", "neutral");
  try {
    restored = await restoreLatestProjectRecord();
  } catch {
    // Fall back to the browser draft when the service-side record is unavailable.
  }
  if (!restored) {
    try {
      const [latestDraft] = await getAllProjectDrafts();
      if (latestDraft) restored = await restoreProjectDraft(latestDraft.path);
    } catch {
      // The empty state remains usable when both persistence layers are unavailable.
    }
  }
  try {
    await renderProjectHistoryOptions();
  } catch {
    projectHistoryMenu && (projectHistoryMenu.innerHTML = `<div class="project-history-empty">暂无可恢复项目</div>`);
  }
  await renderGeneratedWorks({ onlyCurrent: false }).catch(() => {});
  if (!restored) {
    setPublishSyncStatus("待选择项目", "neutral");
    setStatus(projectPathInput.value.trim() ? "项目路径已保留，请点击“读取项目”" : "等待选择项目", "neutral");
  } else {
    setPublishSyncStatus("待同步", "neutral");
  }
}

let seconds = 6 * 60 * 60;
setInterval(() => {
  if (!countdown) return;
  seconds = Math.max(0, seconds - 1);
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  countdown.textContent = `${h}:${m}:${s}`;
}, 1000);

initializeProjectState().catch(() => setStatus("项目记录恢复失败，请选择历史项目", "error"));
renderInputReadiness();
renderPricingPage();
