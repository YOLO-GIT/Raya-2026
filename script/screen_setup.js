const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const eidScreen = document.getElementById("eidScreen");
const galleryScreen = document.getElementById("galleryScreen");
const backFromGallery = document.getElementById("backFromGallery");
const flash = document.getElementById("flash");

startBtn.addEventListener("click", () => {

    // fade out start screen
    startScreen.classList.add("fade-out");

    // flash effect
    flash.classList.add("flash-active");

    setTimeout(() => {

        // 🔥 use Tailwind hidden instead of display
        startScreen.classList.add("hidden");
        startScreen.classList.remove("fade-out");

        // show eid screen
        eidScreen.classList.remove("hidden");
        eidScreen.classList.add("fade-in");

        flash.classList.remove("flash-active");
    }, 600);

});