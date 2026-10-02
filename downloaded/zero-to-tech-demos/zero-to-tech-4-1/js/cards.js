/*原代码
(function () {
  anime.animate(".card", {
    opacity: [0, 1],
    translateY: [24, 0],
    delay: anime.stagger(120),
    duration: 700,
    ease: "outBack",
  });
})();
*/
//改写后的代码;- 顶上 `import`：明文声明"我要用 anime.js 里的 `animate` 和 `stagger`"（注意网址末尾的 `+esm`，这是 anime.js 的 **ES 模块版本**）。
//- `export`：把这个函数对外开放，让别的文件能 import 它。?
import { animate, stagger } from "https://cdn.jsdelivr.net/npm/animejs@4/+esm";

export function initCardsAnim() {
  animate(".card", {
    opacity: [0, 1],
    translateY: [24, 0],
    delay: stagger(120),
    duration: 700,
    ease: "outBack",
  });
}