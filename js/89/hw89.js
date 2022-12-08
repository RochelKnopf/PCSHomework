(function () {
    'use strict';

    const theCanvas = document.querySelector('#theCanvas');
    const context = theCanvas.getContext('2d');

    const radiusIn = document.getElementById('radiusIn');
    const colorIn = document.getElementById('colorIn');
    const add = document.getElementById('add');

    

    function drawBall(radius, color) {
        let x = radius;
        let y = radius;
        let dx = 1;
        let dy = 1;

        context.fillStyle = `${color.value}`;

        context.clearRect(0, 0, 1000, 500);
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI);
        x += dx;
        y += dy;
        context.fill();

        if (x < radius || x > 1000 - radius) {
            dx = -dx;
        }
        if (y < radius || y > 500 - radius) {
            dy = -dy;
        }
    }
    //setInterval(drawBall, 1);

    add.addEventListener('click', () => {
        setInterval(drawBall(radiusIn.value, colorIn.value), 1);
    });

    /* radiusIn.addEventListener('change', () => {
        setInterval(drawBall, 1);
    });

    colorIn.addEventListener('change', () => {
        context.fillStyle = `${colorIn.value}`;
        console.log(colorIn.value);
    }); */


})();