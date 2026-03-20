const messages = [
    "May your Eid be filled with happiness and blessings.",
    "Kullu 'aamin wa antum bikhair 🤲",
    "Wishing you peace, joy and prosperity this Eid.",
    "May Allah accept all your good deeds.",
    "Eid Mubarak! Stay safe and enjoy the celebration ✨",
    "May the guidance and light of Allah enlighten your path. Eid Mubarak! 🌙",
    "Sending you warm hugs and wishes for a day filled with laughter and love.",
    "May your home be as full of sweets as your heart is of joy today. 🍬",
    "Wishing you a blessed Eid that brings you closer to your family and your dreams."
];

const images = ["🌙", "🕌", "✨", "🌟", "🏮"];

const messageEl = document.getElementById("eidMessage");
const imageEl = document.getElementById("eidImage");
const rerollBtn = document.getElementById("rerollBtn");

rerollBtn.addEventListener("click", () => {

    messageEl.classList.remove("fade-change");
    imageEl.classList.remove("fade-change");

    void messageEl.offsetWidth; // reset animation

    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    const randomImg = images[Math.floor(Math.random() * images.length)];

    messageEl.textContent = randomMsg;
    imageEl.textContent = randomImg;

    messageEl.classList.add("fade-change");
    imageEl.classList.add("fade-change");

});

if (Math.random() < 0.1) {
    messageEl.textContent = "✨ SPECIAL EID BLESSING ✨";
}