/*
(function () {
  var path = location.pathname.split("/").pop() || "index.html";
  var links = document.querySelectorAll(".nav-link");
  for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute("href");
    if (href === path) links[i].classList.add("active");
    else links[i].classList.remove("active");
  }
})();
*/

//新代码:外层的 `(function () { ... })()` 立即执行包裹，换成了 `export function initNav() { ... }`，中间逻辑一字未改。
// 模块化只管"怎么对外暴露"，不会逼你改写内部逻辑。
export function initNav() {
  var path = location.pathname.split("/").pop() || "index.html";
  var links = document.querySelectorAll(".nav-link");
  for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute("href");
    if (href === path) links[i].classList.add("active");
    else links[i].classList.remove("active");
  }
}