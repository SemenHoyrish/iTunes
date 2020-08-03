import { videoPlayerInit } from "./videoPlayer.js";
import { radioPlayerInit } from "./radioPlayer.js";
import { musicPlayerInit } from "./musicPlayer.js";

const playerBtn = document.querySelectorAll(".player-btn"),
    playerBlock = document.querySelectorAll(".player-block"),
    temp = document.querySelector(".temp");

const deacivationItems = () => {
    temp.style.display = "none";
    playerBtn.forEach((btn) => {
        btn.classList.remove("active");
    });
    playerBlock.forEach((block) => {
        block.classList.remove("active");
    });
};

playerBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        deacivationItems();
        btn.classList.add("active");
        playerBlock[i].classList.add("active");
    });
});

videoPlayerInit();
radioPlayerInit();
musicPlayerInit();
