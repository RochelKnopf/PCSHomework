(function () {
    'use strict';

    let interval;

    const theButton = document.getElementById('start');

    theButton.addEventListener('click', () => {
        if (!interval) {
            startColors();
        }
        else {
            stopColors();
        }
    });

    function getRandomColorPart() {
        return Math.floor(Math.random() * 256); //gets random number between 0 and 255, floor rounds it down
    }

    function getRandomColor() {
        const r = getRandomColorPart();
        const g = getRandomColorPart();
        const b = getRandomColorPart();

        return `rgb(${r}, ${g}, ${b})`;
    }

    function startColors() {
        theButton.innerText = 'stop';
        interval = setInterval(() => {
            document.body.style.color = getRandomColor();
            document.body.style.backgroundColor = getRandomColor();
        }, 1000);
    }

    function stopColors() {
        clearInterval(interval);
        interval = null;
        theButton.innerText = 'start';
    }

})();