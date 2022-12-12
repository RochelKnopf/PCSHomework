(function () {
    'use strict';

    const theCanvas = document.querySelector('#theCanvas');
    const context = theCanvas.getContext('2d');
    const add = document.querySelector('#addAnt');

    function resizeCanvas() {
        theCanvas.width = window.innerWidth;
        theCanvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Ant {
        static ANT_SIZE = 4;
        constructor() {
            this.x = window.innerWidth / 2;
            this.y = window.innerHeight / 2;
        }

        draw() {
            context.fillRect(this.x, this.y, Ant.ANT_SIZE, Ant.ANT_SIZE * 2);
        }

        move() {
            this.x += Ant.getRandomNumber(-1, 1);
            this.y += Ant.getRandomNumber(-1, 1);

            this.draw();
        }

        static getRandomNumber(min, max) {
            return Math.floor(Math.random() * ((max - min) + 1)) + min;
        }
    }

    const ants = [];
    add.addEventListener('click', () => {
        ants.push(new Ant());
    });

    setInterval(() => {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ants.forEach(ant => ant.move());
    }, 1);
    ant.draw();

})();