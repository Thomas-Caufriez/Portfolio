console.log('music.js loaded')

const audio = document.querySelector("#music");
const mute = document.querySelector(".musicBtn");

audio.volume = 0.05;

mute.addEventListener("click", () => {

    const muted = mute.classList.contains("muted");

    if (muted) {

        audio.play();
        mute.classList.remove("muted");
    } else {

        audio.pause();
        mute.classList.add("muted");
    }
})