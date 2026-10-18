# 作品集

线上地址：https://whyao56.github.io/Frontend-Learning/portfolio/
学习站入口：https://whyao56.github.io/Frontend-Learning/

## 结构

```
portfolio/
├── index.html          页面骨架（卡片由 JS 生成）
├── css/style.css       样式
├── js/main.js          数据数组 + 渲染 + 模态框逻辑
└── images/             三张作品截图 + 一张头像
```

## 交互

- 点卡片打开模态框，填图、标题、详情
- 三种关法：× 按钮、点遮罩空白、ESC
- 点弹窗内部不关（判断 `e.target === modal`）
- 页面滚动超过 80px，顶栏换成深绿底、白字

## 已知限制

以下三条是下一版的清单，不是待修的缺陷。

1. **卡片键盘不可达**。卡片是 `div`，没有 `tabindex`，Tab 走不到，Enter 也打不开。鼠标能用的功能，键盘用户用不了。
2. **弹窗没有焦点陷阱**。打开后焦点会落在 × 按钮上，但按 Tab 会继续跑到背景元素里。正确的做法是在弹窗内循环 Tab，以及打开时给背景加 `aria-hidden`。
3. **三个作品的 `link` 都是空字符串**，所以「访问作品 →」永远隐藏。这是诚实的：没上线就是没上线。等哪一个部署了，填进 `main.js` 的 `link` 字段即可。

## 部署说明

本站放在学习站仓库的子目录里，一个仓库挂两个站。有两个坑记在这里：

- **路径大小写**。GitHub Pages 跑在 Linux 上，路径区分大小写。本地 Windows 不区分，所以 `js/` 和 `JS/` 在本地都能加载，推上去就 404。有一次 `js` 目录被记成了 `JS`，线上整页没有卡片，控制台才知道。
- **子目录要用相对上层**。学习站首页在 `基础/index.html`，链到作品集必须写 `../portfolio/`，写 `portfolio/` 会解析成 `基础/portfolio/`，404。
