document.querySelector('#detectButton').addEventListener('click', function() {
    const detectionResult = document.getElementById('detectionResult');

    // Simulate a random detection result
    const leakDetected = Math.random() < 0.5; // 50% chance of detecting a leak
    if (leakDetected) {
        detectionResult.textContent = "Alert: Leak Detected!";
        detectionResult.style.color = "red";
    } else {
        detectionResult.textContent = "No leaks detected.";
        detectionResult.style.color = "green";
    }
});
