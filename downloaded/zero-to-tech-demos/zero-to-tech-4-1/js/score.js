/*
(function () {
  var btn = document.querySelector(".primary-button");
  var scoreEl = document.querySelector("[data-score]");
  if (!btn || !scoreEl) return;

  btn.addEventListener("click", function () {
    var target = 0.86;
    var frames = 20;
    var step = target / frames;
    var frame = 0;
    scoreEl.textContent = "0.00";
    var interval = setInterval(function () {
      frame++;
      var v = Math.min(target, frame * step);
      scoreEl.textContent = v.toFixed(2);
      if (frame >= frames) clearInterval(interval);
    }, 50);
  });
})();
*/
//新代码：原来 `setInterval` 手写的数字滚动，换成了 anime.js 的 `scrambleText` 特效（这个特效只在 ES 模块版本里才有）。
// `scrambleText({ chars: "0-9" })` 里的 `chars: "0-9"`——它告诉 scrambleText**滚动时只用数字 0~9**。不加这个参数的话，它默认会用字母、符号一起洗，分数滚动过程中就会闪过一堆字母，不像在"算数字"。

import { animate, scrambleText } from "animejs";

export function initScoreAnim() {
  var btn = document.querySelector(".primary-button");
  var scoreEl = document.querySelector("[data-score]");
  if (!btn || !scoreEl) return;

  btn.addEventListener("click", function () {
    animate(scoreEl, {
      innerHTML: scrambleText({ chars: "0-9" }),
      duration: 1500,
    });
  });
}