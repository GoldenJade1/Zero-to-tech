# zero-to-tech-4-4 · 数据驱动界面（模块 4.4 配套代码）

4.4 的终点成品。相比 4.3，做了三处改动：数据抽进 `src/data/site.js`、输入框接上 state、路由改用 URL。

## 跑起来

```bash
npm install
npm run dev          # http://localhost:5173
```

## 在你的 4.3 项目（`zero-to-tech`）上改成这样

> 全程在你自己的 `zero-to-tech` 项目里操作，从本 demo 对应路径把文件拷过去。不碰 `.git`，本节不装新依赖。

**新增「内容表」`site.js`**

1. 在项目的 `src/` 下，新建一个目录，命名为 `data`。
2. 把本 demo 的 `src/data/site.js`，复制进你刚建的 `src/data/` 目录里。

**新增「小路由」`useRoute.js`**

3. 在项目的 `src/` 下，再新建一个目录，命名为 `router`。
4. 把本 demo 的 `src/router/useRoute.js`，复制进你刚建的 `src/router/` 目录里。

**用本 demo 的版本，覆盖下面这 5 个已有文件**（目录都已存在，直接替换即可）

5. 覆盖 `src/App.jsx`
6. 覆盖 `src/components/HomePage.jsx`
7. 覆盖 `src/components/TextLabPage.jsx`
8. 覆盖 `src/components/InputCard.jsx`
9. 覆盖 `src/css/lab.css`

**跑起来验证**

10. 执行 `npm run dev`，逐项确认：
    - 点导航 → 地址栏在 `/` ↔ `/text-lab` 之间变；在 `/text-lab` 刷新，仍停在该页
    - 输入框打字 → 下面「已输入 N 字」跟着跳
    - 改 `src/data/site.js` 里的 `heroTitle` 存盘 → 页面大标题当场变

三项都对上，就和本 demo 一致了。

## 改了哪些文件

```
src/App.jsx                       ★改   改用 useRoute，看地址栏决定显示哪页
src/data/site.js                  ★新   内容表：网站文案集中在这
src/router/useRoute.js            ★新   小路由：读 / 写地址栏
src/components/HomePage.jsx       ★改   文案改从 site.js 读
src/components/TextLabPage.jsx    ★改   标题改从 site.js 读
src/components/InputCard.jsx      ★改   输入框接上 state，显示字数
src/css/lab.css                   ★改   补一段 .lab-count 样式
其余组件、css                      —    全照 4.3 不动
```
