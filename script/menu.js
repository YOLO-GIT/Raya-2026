const menuBtn = document.getElementById("menuBtn");
const menuPanel = document.getElementById("menuPanel");

const homeBtn = document.getElementById("homeBtn");
const aboutBtn = document.getElementById("aboutBtn");
const backBtn = document.getElementById("backBtn");

/* IMPORTANT: define once */
// const startScreen = document.getElementById("startScreen");
// const eidScreen = document.getElementById("eidScreen");
// const aboutScreen = document.getElementById("aboutScreen");

/* toggle menu */
menuBtn.addEventListener("click", () => {
    menuPanel.classList.toggle("hidden");
});

/* go HOME */
homeBtn.addEventListener("click", () => {

    startScreen.classList.remove("hidden");
    eidScreen.classList.add("hidden");
    aboutScreen.classList.add("hidden");

    menuPanel.classList.add("hidden"); // optional: close menu
});

/* go ABOUT */
aboutBtn.addEventListener("click", () => {

    startScreen.classList.add("hidden");
    eidScreen.classList.add("hidden");
    aboutScreen.classList.remove("hidden");

    menuPanel.classList.add("hidden"); // optional
});

/* back button */
backBtn.addEventListener("click", () => {

    aboutScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
});

/* click outside to close menu */
document.addEventListener("click", (e) => {
    if (!menuPanel.contains(e.target) && !menuBtn.contains(e.target)) {
        menuPanel.classList.add("hidden");
    }
});