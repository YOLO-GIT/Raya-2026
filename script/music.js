const music = document.getElementById("bgMusic");
const toggleBtn = document.getElementById("musicToggle");

let isPlaying = false;

toggleBtn.addEventListener("click", () => {

    if (!isPlaying) {
        music.play();
        toggleBtn.textContent = "MUTE";
        isPlaying = true;
    } else {
        music.pause();
        toggleBtn.textContent = "UNMUTE";
        isPlaying = false;
    }

});