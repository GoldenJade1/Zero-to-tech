//main.js作为引用总入口，把前三个文件 `export` 出来的函数分别 `import` 进来，再挨个调用一遍。
import { initNav } from "./nav.js";
import { initCardsAnim } from "./cards.js";
import { initScoreAnim } from "./score.js";

initNav();
initCardsAnim();
initScoreAnim();