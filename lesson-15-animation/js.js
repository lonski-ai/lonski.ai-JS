"use strict";
var wrap = document.getElementById('wrapper');
var buttonStart = document.createElement("input");
var scoreBoard = document.createElement("div");
var score1 = 0; //очки 1 игрока
var score2 = 0; //очки 2 игрока
var racquet1 = document.createElement("div");
var racquet2 = document.createElement("div");
var ball = document.createElement("div");

wrap.style.width = 700 + "px";
wrap.style.height = 400 + "px";

requestAnimationFrame(tick);

buttonStart.type = "button";
buttonStart.value = "старт!";
buttonStart.classList.add('buttonStart');
buttonStart = document.body.insertBefore(buttonStart, document.body.children[0]);
buttonStart.onclick = start;

scoreBoard.classList.add('scoreBoard');
scoreBoardInnerHTML();
scoreBoard = document.body.insertBefore(scoreBoard, document.body.children[1]);

racquet1.classList.add('racquet1');
racquet2.classList.add('racquet2');

racquet1 = wrap.appendChild(racquet1);
racquet2 = wrap.appendChild(racquet2);

var racquetObj = {
  racquet1X: wrap.offsetLeft,
  racquet1Y: wrap.offsetTop + wrap.offsetHeight / 2 - racquet1.offsetHeight / 2,
  racquet1Speed: 0,

  racquet2X: wrap.offsetLeft + wrap.offsetWidth - racquet2.offsetWidth,
  racquet2Y: wrap.offsetTop + wrap.offsetHeight / 2 - racquet1.offsetHeight / 2,
  racquet2Speed: 0,
  width: 10,
  height: 120,

  update: function () {
    var racquet1Obj = racquet1;
    var racquet2Obj = racquet2;

    racquet1Obj.style.left = this.racquet1X + "px";
    racquet1Obj.style.top = this.racquet1Y + "px";

    racquet2Obj.style.left = this.racquet2X + "px";
    racquet2Obj.style.top = this.racquet2Y + "px";
  }
};

var racquetAreaH = {
  width: 10,
  height: wrap.offsetHeight
};

racquetObj.update();

ball.classList.add('ball');
ball = wrap.appendChild(ball);

var ballH = {
  posX: wrap.offsetLeft + wrap.offsetWidth / 2 - ball.offsetWidth / 2,
  posY: wrap.offsetTop + wrap.offsetHeight / 2 - ball.offsetHeight / 2,
  speedX: 0,
  speedY: 0,
  width: 30,
  height: 30,
  update: function () {
    var ballObj = ball;
    ballObj.style.left = this.posX + "px";
    ballObj.style.top = this.posY + "px";
  }
};

var areaH = {
  width: wrap.offsetWidth,
  height: wrap.offsetHeight
};

ballH.update();

window.addEventListener("keydown", function (EO) {
  EO = EO || window.event;
  EO.preventDefault();

  if (EO.keyCode === 17) {
    racquetObj.racquet1Speed = 5;
  }

  if (EO.keyCode === 16) {
    racquetObj.racquet1Speed = -5;
  }

  if (EO.keyCode === 40) {
    racquetObj.racquet2Speed = 5;
  }

  if (EO.keyCode === 38) {
    racquetObj.racquet2Speed = -5;
  }
});

window.addEventListener("keyup", function (EO) {
  EO = EO || window.event;
  EO.preventDefault();

  if (EO.keyCode === 17) {
    racquetObj.racquet1Speed = 0;
  }

  if (EO.keyCode === 16) {
    racquetObj.racquet1Speed = 0;
  }

  if (EO.keyCode === 40) {
    racquetObj.racquet2Speed = 0;
  }

  if (EO.keyCode === 38) {
    racquetObj.racquet2Speed = 0;
  }
});

function scoreBoardInnerHTML() {
  scoreBoard.innerHTML = score1 + ":" + score2;
}

function start() {
  ballH.posX = wrap.offsetLeft + wrap.offsetWidth / 2 - ball.offsetWidth / 2;
  ballH.posY = wrap.offsetTop + wrap.offsetHeight / 2 - ball.offsetHeight / 2;
  ballH.speedX = ((Math.random() < 0.5) ? -1 : 1) * Math.random() * 10;
  ballH.speedY = ((Math.random() < 0.5) ? -1 : 1) * Math.random() * 10;
}

function tick() {
  racquetObj.update();
  racquetObj.racquet1Y += racquetObj.racquet1Speed;
  if (racquetObj.racquet1Y + racquetObj.height > (wrap.offsetTop + racquetAreaH.height)) {
    racquetObj.racquet1Y = wrap.offsetTop + racquetAreaH.height - racquetObj.height;
  }

  if (racquetObj.racquet1Y < wrap.offsetTop) {
    racquetObj.racquet1Y = wrap.offsetTop;
  }
  racquetObj.racquet2Y += racquetObj.racquet2Speed;

  if (racquetObj.racquet2Y + racquetObj.height > (wrap.offsetTop + racquetAreaH.height)) {
    racquetObj.racquet2Y = wrap.offsetTop + racquetAreaH.height - racquetObj.height;
  }

  if (racquetObj.racquet2Y < wrap.offsetTop) {
    racquetObj.racquet2Y = wrap.offsetTop;
  }

  ballH.posX -= ballH.speedX;
  if ((ballH.posY + ballH.height < racquetObj.racquet2Y || ballH.posY > (racquetObj.racquet2Y + racquetObj.height)) && ballH.posX + ballH.width >= (wrap.offsetLeft + wrap.offsetWidth)) {
    score1 += 1;
    scoreBoardInnerHTML();
    ballH.speedX = 0;
    ballH.speedY = 0;
    ballH.posX = wrap.offsetLeft + wrap.offsetWidth - ballH.width - 1;

  } else if (!(ballH.posY + ballH.height < racquetObj.racquet2Y || ballH.posY > (racquetObj.racquet2Y + racquetObj.height)) && ballH.posX + ballH.width > (racquetObj.racquet2X)) {
    ballH.speedX = -ballH.speedX;
    ballH.posX = wrap.offsetLeft + wrap.offsetWidth - racquetObj.width - ballH.width;
  }

  if ((ballH.posY + ballH.height < racquetObj.racquet1Y || ballH.posY > (racquetObj.racquet1Y + racquetObj.height)) && ballH.posX <= (wrap.offsetLeft)) {
    score2 += 1;
    scoreBoardInnerHTML();
    ballH.speedX = 0;
    ballH.speedY = 0;
    ballH.posX = wrap.offsetLeft + 1;

  } else if (!(ballH.posY + ballH.height < racquetObj.racquet1Y || ballH.posY > (racquetObj.racquet1Y + racquetObj.height)) && ballH.posX < (racquetObj.width + racquetObj.racquet1X)) {
    ballH.speedX = -ballH.speedX;
    ballH.posX = wrap.offsetLeft + racquetObj.width;
  }

  ballH.posY -= ballH.speedY;
  if (ballH.posY + ballH.height > (wrap.offsetTop + areaH.height)) {
    ballH.speedY = -ballH.speedY;
    ballH.posY = wrap.offsetTop + areaH.height - ballH.height;
  }

  if (ballH.posY < wrap.offsetTop) {
    ballH.speedY = -ballH.speedY;
    ballH.posY = wrap.offsetTop;
  }

  ballH.update();

  requestAnimationFrame(tick);
}