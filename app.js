
const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-interval');
    const startButton = document.getElementById('start');
    const intervalDisplay = document.getElementById('interval-display');
    const timerResult = document.getElementById('timer-result');
    let interval;
    let timer;
    let startTime;

    generateButton.addEventListener('click', () => {
        const min = 10; // 10 seconds
        const max = 300; // 5 minutes
        interval = Math.floor(Math.random() * (max - min + 1)) + min;
        intervalDisplay.textContent = `Generated interval: ${formatTime(interval)}`;
        timerResult.textContent = '';
        startButton.disabled = false;
    });

    startButton.addEventListener('click', () => {
        startTime = Date.now();
        startButton.disabled = true;
        const gotItButton = document.createElement('button');
        gotItButton.textContent = 'Got it!';
        document.body.appendChild(gotItButton);

        gotItButton.addEventListener('click', () => {
            const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
            const difference = Math.abs(interval - elapsedTime);
            timerResult.textContent = `Elapsed time: ${formatTime(elapsedTime)}. Difference: ${difference} seconds.`;
            gotItButton.remove();
        });
    });
});
      
