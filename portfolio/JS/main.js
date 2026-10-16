const works = [
    {
        title: "TideWatch",
        desc: "观潮",
        detail: "可解释、可插拔、可迭代的网络水军与协同行为识别与跨网络舆情分析引擎。",
        image: "images/tidewatch.png",
        link: "#",
        done: false
    },
    {
        title: "WingMan",
        desc: "聊天僚机",
        detail: "把 QQ/微信聊天记录变成可检索记忆，实时分析对方情绪意图并给出候选回复与走向推演；支持双通道语音采集转写。插件式数据接入 + 可切换模型（云 API / Ollama / Mock）。",
        image: "images/wingman.png",
        link: "#",
        done: true
    },
    {
        title: "Etude",
        desc: "挹曲",
        detail: "给一个词，生成 8 条不同上下文的例句，铺成五种练法（阅读/听力/口语/打字/造句）。基于《学习观 07》的本地语言训练器，内容由大模型生成。",
        image: "images/etude.png",
        link: "#",
        done: true
    }
];


const topbar = document.querySelector("#topbar");

function updateTopbar() {
    if (window.scrollY > 80) {
        topbar.classList.add("scrolled");
    } else {
        topbar.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", updateTopbar);
updateTopbar();


const grid = document.querySelector("#works-grid");

grid.innerHTML = works.map(w => `
    <div class="card">
        <img class="card-img" src="${w.image}" alt="${w.title}">
        <h3>${w.title}</h3>
        <p>${w.desc}</p>
        <span class="status ${w.done ? "done" : "todo"}">${w.done ? "已完成" : "进行中"}</span>
    </div>
`).join("");
