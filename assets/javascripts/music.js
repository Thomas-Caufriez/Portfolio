console.log('music.js loaded')

const audio = document.querySelector("#music");
const mute = document.querySelector(".musicBtn");

audio.volume = 0.04;

mute.addEventListener("click", () => { // play pause music if click on button

    const muted = mute.classList.contains("muted");

    if (muted) {

        audio.play();
        mute.classList.remove("muted");

    } else {

        audio.pause();
        mute.classList.add("muted");
    }
})

document.addEventListener('visibilitychange', () => { // pause music if changing screen

    if(document.hidden) {

        audio.pause();
        mute.classList.add("muted");
    }
});