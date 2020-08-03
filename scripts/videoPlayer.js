export const videoPlayerInit = () => {
    const videoPlayer = document.querySelector(".video-player"),
        videoButtonPlay = document.querySelector(".video-button__play"),
        videoButtonStop = document.querySelector(".video-button__stop"),
        videoProgress = document.querySelector(".video-progress"),
        videoTimePassed = document.querySelector(".video-time__passed"),
        videoTimeTotal = document.querySelector(".video-time__total");

    const toggleIcon = () => {
        if (videoPlayer.paused) {
            videoButtonPlay.classList.remove("fa-pause");
            videoButtonPlay.classList.add("fa-play");
        } else {
            videoButtonPlay.classList.remove("fa-play");
            videoButtonPlay.classList.add("fa-pause");
        }
    };

    const togglePlay = () => {
        if (videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
        toggleIcon();
    };

    const stopPlay = () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        videoButtonPlay.classList.remove("fa-pause");
        videoButtonPlay.classList.add("fa-play");
    };

    const addZero = (n) => (n < 10 ? "0" + n : n);

    videoPlayer.addEventListener("click", togglePlay);
    videoPlayer.addEventListener("timeupdate", () => {
        const currentTime = videoPlayer.currentTime,
            duration = videoPlayer.duration;

        videoProgress.value = (currentTime / duration) * 100;

        let minutesPassed = Math.floor(currentTime / 60),
            secondsPassed = Math.floor(currentTime % 60),
            minutesTotal = Math.floor(duration / 60),
            secondsTotal = Math.floor(duration % 60);

        videoTimePassed.textContent = `${addZero(minutesPassed)}:${addZero(secondsPassed)}`;
        videoTimeTotal.textContent = addZero(minutesTotal) + ":" + addZero(secondsTotal);
    });
    videoButtonPlay.addEventListener("click", togglePlay);
    videoButtonStop.addEventListener("click", stopPlay);

    videoProgress.addEventListener("change", () => {
        const duration = videoPlayer.duration,
            value = videoProgress.value;

        videoPlayer.currentTime = (value * duration) / 100;
    });
};
