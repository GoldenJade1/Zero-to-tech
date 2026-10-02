# zero-to-tech-4-3 · React 版（模块 4.3 配套代码）

这是把模块 4.2 那个 vanilla 网站，用 React **重做一遍**之后的成品：两页都成了 React 组件，整个项目只剩**一个空壳 `index.html`**。

> 它是 4.3 的**终点答案册**，不是让你照抄的范本。正确的用法是：在你自己那个 4.2 项目（`zero-to-tech`）上，**跟着下面四拍一步步搭到这个终点**——需要某个文件，就从这个 demo 里把对应文件拷过去。

## 先把它跑起来看看

```bash
npm install      # 照 package.json 把依赖装进 node_modules
npm run dev      # 起本地服务器，浏览器开 http://localhost:5173
```

点顶部导航能在「个人主页 / 文字实验室」之间切。看明白它长什么样，再回到自己项目动手。

## 这个项目的层级

```
index.html              ← 空壳，只提供一个挂载点 <div id="root">
  └─ src/main.jsx        ← 入口：把 App 挂进挂载点
       └─ src/App.jsx    ← 总管：决定显示 HomePage 还是 TextLabPage
            ├─ components/HomePage.jsx      ┐ 两个页面，各是一个组件
            └─ components/TextLabPage.jsx   ┘
                 ├─ components/Nav.jsx            （两页共用）
                 ├─ components/PageHeading.jsx    （两页共用，靠 props 换标题）
                 ├─ components/AnimatedCardGrid.jsx（网格容器 + 卡片飞入动画）
                 ├─ components/InputCard.jsx
                 └─ components/ResultCard.jsx
```

---

## 把你的 4.2 项目改造成这样：四拍

> 全程在你自己的 `zero-to-tech` 项目里改，**不要删整个项目、不要碰 `.git`**。需要的文件从本 demo 的对应路径拷过去即可。

### 先装好 React（四拍都要用，只做一次）

```bash
npm install react react-dom            # 下载 React 两个核心包
npm install -D @vitejs/plugin-react    # 下载"翻译插件"
```

在项目根目录**新建 `vite.config.js`**（4.2 时没有它），把插件挂上：

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

> 下载只是把插件放到本地，`react()` 这一行才真正把它挂进 Vite——两步都做了，Vite 才看得懂 `.jsx`。

还要把**本 demo 仓库**拉到本地——后面每一拍都从这里往你的项目里拷文件（你既然在读这份 README，多半已经拉过了，列在这里只为完整）：

```bash
git clone https://github.com/joylibo/zero-to-tech-demos.git
cd zero-to-tech-demos/zero-to-tech-4-3
```

> 之后所有"拷入 X"都是指：从这个 demo 目录，把文件拷进你自己的 `zero-to-tech` 项目对应位置。

### 第一拍：先把「结果区」一张卡做成 React

1. 拷入 `src/components/ResultCard.jsx`（项目里没有 `src/components/` 目录就先新建）。
2. 新建入口 `src/result.jsx`（**本 demo 没有这个文件，是过渡用的，自己照下面建**）：
   ```jsx
   import { createRoot } from "react-dom/client";
   import ResultCard from "./components/ResultCard.jsx";
   createRoot(document.getElementById("result-root")).render(<ResultCard />);
   ```
3. 改 `text-lab.html`：把「结果区」那整段 `<article class="…result-panel…card">…</article>` **整段删掉**， 换成挂载点 `<div id="result-root" class="panel-half"></div>`，如下所示

改造之前：
```html
            <article class="panel panel-half lab-panel result-panel card">
              <div class="panel-heading">
                <p class="section-kicker">结果区</p>
                <h3>分析结果</h3>
              </div>
              <div class="result-stack">
                <div class="result-item">
                  <span>原文</span>
                  <p>今天的风很轻，适合把脑海里的想法慢慢写下来。</p>
                </div>
                <div class="result-item">
                  <span>拼音</span>
                  <p>jīn tiān de fēng hěn qīng …</p>
                </div>
                <div class="result-grid">
                  <div class="result-badge">
                    <span>情感分数</span>
                    <strong data-score>0.86</strong>
                  </div>
                  <div class="result-badge">
                    <span>情感判断</span>
                    <strong>偏积极</strong>
                  </div>
                </div>
              </div>
            </article>
```
改造之后：
```html
            <div id="result-root" class="panel-half"></div>
```

底部原来的 `js/main.js` 留着，再加一行 `<script type="module" src="/src/result.jsx"></script>`，如下所示：

改造之前：
```
<script type="module" src="js/main.js"></script>
```
改造之后：
```
<script type="module" src="js/main.js"></script>
<script type="module" src="/src/result.jsx"></script>
```


4. `npm run dev`，开 `/text-lab.html`——结果卡变成 React 画的了（它会自己淡入、分数滚动归位），其余仍是 vanilla。**这就是 vanilla 与 React 共存。**


### 第二拍：把结果卡并进整页，文字实验室整页交给 React

1. 拷入这几个组件：`PageHeading.jsx`、`InputCard.jsx`、`Nav.jsx`、`AnimatedCardGrid.jsx`、`TextLabPage.jsx`（都在 `src/components/`），以及整个 `src/css/`（8 个 css）。
2. 删掉 `src/result.jsx`，新建 `src/textlab.jsx`，**完整内容如下**（直接照抄）：

   ```jsx
   import { createRoot } from "react-dom/client";
   import TextLabPage from "./components/TextLabPage.jsx";

   import "./css/reset.css";
   import "./css/variables.css";
   import "./css/layout.css";
   import "./css/hero.css";
   import "./css/nav.css";
   import "./css/cards.css";
   import "./css/lab.css";
   import "./css/responsive.css";

   createRoot(document.getElementById("root")).render(
     <div className="app-shell">
       <div className="page-shell">
         <main className="page-content">
           <TextLabPage current="textlab" onNavigate={() => {}} />
         </main>
       </div>
     </div>,
   );
   ```

3. 把 `text-lab.html` 的 `<body>` 整块换成挂载点：
   ```html
   <body>
     <div id="root"></div>
     <script type="module" src="/src/textlab.jsx"></script>
   </body>
   ```
   
4. 删掉 `text-lab.html` 的 `<head>` 里的整个一段css引入内容，即删除如下8行：
```html
    <link rel="stylesheet" href="css/reset.css" />
    <link rel="stylesheet" href="css/variables.css" />
    <link rel="stylesheet" href="css/layout.css" />
    <link rel="stylesheet" href="css/hero.css" />
    <link rel="stylesheet" href="css/nav.css" />
    <link rel="stylesheet" href="css/cards.css" />
    <link rel="stylesheet" href="css/lab.css" />
    <link rel="stylesheet" href="css/responsive.css" />
```
5. `npm run dev`：`/text-lab.html` 整页 React，`/index.html` 仍是 vanilla——**一个 React 页 + 一个 vanilla 页 共存**。

### 第三拍：把个人主页也抽成组件，收进一个总管 App

1. 拷入 `src/components/HomePage.jsx`——看它如何复用 `Nav`/`PageHeading`（两张卡故意没拆，不是拆得越细越好）。
2. 拷入 `src/App.jsx`——它用 `useState` 装着两个 Page、决定显示哪一页（导航到这一步才真正接上）。
3. 此刻 `App` 还没人挂，先不跑，进第四拍。

### 第四拍：全新入口 main.jsx + 全新 index.html

1. **删掉**：旧的 `index.html`、`text-lab.html`、`src/textlab.jsx`、旧的 `js/`、旧的 `css/`。
2. 拷入 `src/main.jsx`（从 demo 的 `src/main.jsx` 拷过来——它把 `App` 挂进 `#root`，并 import 8 个 css；写法和 `textlab.jsx` 几乎一样，只是渲染的是 `<App />`）。
3. **新建**一个全新的 `index.html`，放在项目根目录，**完整内容如下**（直接照抄，也可以从 demo 根目录的 `index.html` 拷过来）：

   ```html
   <!doctype html>
   <html lang="zh-CN">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Zero to Tech</title>
     </head>
     <body>
       <div id="root"></div>
       <script type="module" src="/src/main.jsx"></script>
     </body>
   </html>
   ```

4. `npm run dev`，开 `/`——两页都是 React，导航可切。**至此你的项目和本 demo 一模一样。**

## 关于过渡文件

`src/result.jsx`、`src/textlab.jsx` 是第一、二拍的**临时入口**，到第四拍会被 `src/main.jsx` 取代删除，所以**本 demo（终点状态）里不包含它们**——按上面步骤自己新建即可。
