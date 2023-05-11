(function () {
  'use strict';

  const CELL_SIZE = 64;

  const canvas = document.querySelector('#theCanvas');
  function resizeCanvas() {
    canvas.width = (window.innerWidth - 2) - ((window.innerWidth - 2) % CELL_SIZE);
    canvas.height = (window.innerHeight - 2) - ((window.innerHeight - 2) % CELL_SIZE);
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const context = canvas.getContext('2d');

  //const snakeHead = document.querySelector('image');
  const snakeHead = new Image();
  snakeHead.src = "images/snakehead.png";
  /*setTimeout(() => {
    context.drawImage(snakeHead, 200, 200);
  }, 1000);*/

  const crash = document.querySelector('#crash');
  const crunch = document.querySelector('#crunch');

  let speed = 1000;
  let score = 0;

  class Snake {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.draw();
    }

    draw() {
      context.drawImage(snakeHead, this.x, this.y);
    }

    move() {
      let x = this.x;
      let y = this.y;
      switch (direction) {
        case 'ArrowUp':
          y -= CELL_SIZE;
          break;
        case 'ArrowRight':
          x += CELL_SIZE;
          break;
        case 'ArrowDown':
          y += CELL_SIZE;
          break;
        case 'ArrowLeft':
          x -= CELL_SIZE;
          break;
      }

      if (x < 0 || x > canvas.width - CELL_SIZE
        || y < 0 || y > canvas.height - CELL_SIZE) {
        gameOver = true;
      }

      if (!gameOver) {
        this.x = x;
        this.y = y;

        if (this.x === apple.x && this.y === apple.y) {
          score++;
          speed = speed - (speed * 0.10);
          crunch.currentTime = 0;
          crunch.play();
          apple.move();
        }
      }

      this.draw();
    }
  }

  class Apple {
    constructor() {
      this.move();
    }

    draw() {
      context.drawImage(appleImg, this.x, this.y);
    }

    move() {
      this.x = Apple.getRandomNumber(0, canvas.width - 1);
      this.y = Apple.getRandomNumber(0, canvas.height - 1);
      this.draw();
    }

    static getRandomNumber(min, max) {
      let r = Math.floor(Math.random() * ((max - min) + 1)) + min;
      return r - r % CELL_SIZE;
    }
  }

  function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    snake.move();
    apple.draw();
    context.font = 'bold 32px Arial';
    context.fillStyle = '#ff0000';
    context.fillText(`Score ${score}`, canvas.width - 160, 40);
    if (!gameOver) {
      setTimeout(gameLoop, speed);
    } else {
      crash.currentTime = 0;
      crash.play();
      context.font = 'bold 32px Arial';
      context.fillStyle = '#000000';
      context.fillText(`GAME OVER!!!`, (canvas.width / 2) - 80, (canvas.height / 2) - 16);
    }
  }

  let snake;
  let gameOver = false;
  snakeHead.onload = () => {
    snake = new Snake();
    // context.drawImage(snakeHead, 0, 0);
    setTimeout(gameLoop, speed);
  };

  const appleImg = new Image();
  appleImg.src = 'images/redapple.png';
  let apple = new Apple();
  appleImg.onload = () => {
    apple.draw();
  };

  let direction = 'ArrowRight';
  document.addEventListener('keydown', e => {
    switch (e.key) {
      case 'ArrowUp':
      case 'ArrowRight':
      case 'ArrowDown':
      case 'ArrowLeft':
        direction = e.key;
        break;
    }
  });
}());