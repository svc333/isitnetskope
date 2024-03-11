const spinButton = document.getElementById("spinButton");
const spinWheel = document.getElementById("spinWheel");
const options = ["YES", "YES"];

spinButton.onclick = function() {
    const spinTime = Math.floor(Math.random() * 2000) + 1000; // Random spin time between 1000 and 3000 ms
    const spinDegrees = Math.floor(Math.random() * 360) + 720; // Ensure at least two full spins

    spinWheel.style.transform = "rotate(" + spinDegrees + "deg)";

    setTimeout(function() {
        // Once the spin stops, display YES or NO randomly
        spinWheel.textContent = options[Math.floor(Math.random() * options.length)];
    }, spinTime);
};
