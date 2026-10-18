const works = [
    {
        title: "TideWatch",
        desc: "观潮",
        detail: "可解释、可插拔、可迭代的网络水军与协同行为识别与跨网络舆情分析引擎。",
        image: "images/tidewatch.png",
        link: "",
        done: false
    },
    {
        title: "WingMan",
        desc: "聊天僚机",
        detail: "把 QQ/微信聊天记录变成可检索记忆，实时分析对方情绪意图并给出候选回复与走向推演；支持双通道语音采集转写。插件式数据接入 + 可切换模型（云 API / Ollama / Mock）。",
        image: "images/wingman.png",
        link: "",
        done: true
    },
    {
        title: "Etude",
        desc: "挹曲",
        detail: "给一个词，生成 8 条不同上下文的例句，铺成五种练法（阅读/听力/口语/打字/造句）。基于《学习观 07》的本地语言训练器，内容由大模型生成。",
        image: "images/etude.png",
        link: "",
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

grid.innerHTML = works.map((w, i) => `
    <div class="card" data-index="${i}">
        <img class="card-img" src="${w.image}" alt="${w.title}">
        <h3>${w.title}</h3>
        <p>${w.desc}</p>
        <span class="status ${w.done ? "done" : "todo"}">${w.done ? "已完成" : "进行中"}</span>
    </div>
`).join("");


const modal = document.querySelector("#my-modal");
const modalClose = document.querySelector("#modal-close");
const modalImg = document.querySelector("#modal-img");
const modalTitle = document.querySelector("#modal-title");
const modalDetail = document.querySelector("#modal-detail");
const modalLink = document.querySelector("#modal-link");

grid.addEventListener("click", (e) => {
    // 从被点的元素（可能是图、可能是文字）往上找，找最近的 .card
    const card = e.target.closest(".card");

    // 如果没找到卡片（点在了网格缝隙里），直接 return
    if (!card) return;

    // 拿到卡片上的 data-index，并转换成数字
    const index = Number(card.dataset.index);

    // 取出对应的数据，打开弹窗
    openModal(works[index]);
});

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
    // 只有“被点的就是遮罩本身”才关
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal();
    }
});

let lastFocused = null;
function openModal(w) {
    // 1. 填数据（补上这三行）
    modalImg.src = w.image;
    modalImg.alt = w.title;
    modalTitle.textContent = w.title;
    modalDetail.textContent = w.detail;

    // 2. 处理链接
    if (w.link) {
        modalLink.href = w.link;
        modalLink.classList.remove("hidden");
    } else {
        modalLink.classList.add("hidden");
    }

    // 3. 焦点与开窗
    lastFocused = document.activeElement; 
    modal.classList.add("open");
    modalClose.focus(); 
    document.body.classList.add("modal-open");
}
function closeModal() {
    modal.classList.remove("open");
    document.body.classList.remove("modal-open");
    if (lastFocused) lastFocused.focus(); // 焦点还回去
}