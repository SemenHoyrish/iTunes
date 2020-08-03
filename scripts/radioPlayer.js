export const radioPlayerInit = () => {
    const radio = document.querySelector(".radio"),
        radioCoverImg = document.querySelector(".radio-cover__img"),
        radioNavigation = document.querySelector(".radio-navigation"),
        radioItem = document.querySelectorAll(".radio-item"),
        radioHeaderBig = document.querySelector(".radio-header__big"),
        radioStop = document.querySelector(".radio-stop"),
        audioVolumeProgress = document.querySelector(".audio-volume-progress");

    const audio = new Audio();
    audio.type = "audio/aac";

    radioStop.disabled = true;

    const changeIconPlay = () => {
        if (audio.paused) {
            radio.classList.remove("play");
            radioStop.classList.remove("fa-stop");
            radioStop.classList.add("fa-play");
        } else {
            radio.classList.add("play");
            radioStop.classList.remove("fa-play");
            radioStop.classList.add("fa-stop");
        }
    };

    const selectItem = (elem) => {
        radioItem.forEach((item) => {
            item.classList.remove("select");
        });
        elem.classList.add("select");
    };

    radioNavigation.addEventListener("change", (event) => {
        const target = event.target,
            parrent = target.closest(".radio-item");

        selectItem(parrent);
        const title = parrent.querySelector(".radio-name").textContent,
            urlImg = parrent.querySelector(".radio-img").src;
        radioHeaderBig.textContent = title;
        radioCoverImg.src = urlImg;
        audio.src = target.dataset.radioStantion;
        audio.play();
        radioStop.disabled = false;
        changeIconPlay();
    });

    radioStop.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        changeIconPlay();
    });

    audioVolumeProgress.addEventListener("input", () => {
        audio.volume = audioVolumeProgress.value / 100;
    });
};
// radioPlayer = document.querySelector(".radio-player"),
