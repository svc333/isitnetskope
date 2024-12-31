const spinButton = document.getElementById("spinButton");
const spinWheel = document.getElementById("spinWheel");
const resultHistory = document.getElementById("resultHistory");
const options = ["YES", "MAYBE", "OF COURSE", "DEFINITELY"];
const spinSound = new Audio('spin.mp3'); // Local spin sound
const dingSound = new Audio('ding.mp3'); // Local ding sound

spinButton.onclick = function () {
    // Play spin sound
    spinSound.currentTime = 0; // Reset sound
    spinSound.play();

    const spinTime = Math.floor(Math.random() * 2000) + 1000; // Random spin time between 1000 and 3000 ms
    const spinDegrees = Math.floor(Math.random() * 360) + 720; // Ensure at least two full spins

    spinWheel.style.transform = "rotate(" + spinDegrees + "deg)";

    setTimeout(function () {
        spinSound.pause(); // Stop spin sound
        dingSound.currentTime = 0; // Reset ding sound
        dingSound.play(); // Play ding sound
        const result = options[Math.floor(Math.random() * options.length)];
        spinWheel.textContent = result;

        // Add result to history
        const listItem = document.createElement("li");
        listItem.textContent = result;
        resultHistory.appendChild(listItem);

        // Trigger confetti
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }, spinTime);
};
