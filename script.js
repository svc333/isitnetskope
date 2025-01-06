const spinButton = document.getElementById("spinButton");
const spinWheel = document.getElementById("spinWheel");
const resultHistory = document.getElementById("resultHistory");
const options = ["YES", "MAYBE", "OF COURSE", "DEFINITELY"];
const spinSound = new Audio('spin.mp3'); // Local spin sound
const dingSound = new Audio('ding.mp3'); // Local ding sound

let currentRotation = 0; // To keep track of the current rotation

spinButton.onclick = function () {
    // Play spin sound
    spinSound.currentTime = 0; // Reset sound
    spinSound.play();

    const spinTime = 2000; // Fixed spin time for consistent animation (2 seconds)
    const spinDegrees = Math.floor(Math.random() * 360) + 720; // At least two full spins
    currentRotation += spinDegrees; // Add to the current rotation

    // Apply CSS transformation with smooth transition
    spinWheel.style.transition = `transform ${spinTime}ms ease-out`;
    spinWheel.style.transform = `rotate(${currentRotation}deg)`;

    // Wait for the spin to finish
    setTimeout(function () {
        spinSound.pause(); // Stop spin sound
        dingSound.currentTime = 0; // Reset ding sound
        dingSound.play(); // Play ding sound

        // Calculate the result based on the final rotation
        const normalizedRotation = currentRotation % 360; // Normalize rotation to 0-359 degrees
        const segmentSize = 360 / options.length; // Size of each segment
        const resultIndex = Math.floor(normalizedRotation / segmentSize);
        const result = options[resultIndex];

        // Update the wheel text
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
