let canvas = document.querySelector("myCanvas");
canvas.style.border = "1px solid black";
let ctx = canvas.getContext("2d");
let intervalId = 0;


//DOM

// startGame

let body = document.querySelector("body")
let splash = document.querySelector("#splash-container")
let button = document.querySelector("#startBtn")



button.addEventListener('click', () => {
  //when clicked removes the splash screen 
  splash.style.display = "none" //remove splash screen
  //add the canvas
  canvas.style.display = "flex"

  intervalId = setInterval (() => {
    requestAnimationFrame(startGame)
  })
})

// Game Over

let gameOver = document.querySelector(".gameover-container")


button.addEventListener('click', () => {
  //when clicked removes the splash screen 
  gameover-container.parentNode.removeChild(gameover) //remove splash screen
  //add the canvas
  body.appendChild("splash-container")

})

// Win

let win = document.querySelector("win-container")

button.addEventListener('click', () => {
  //when clicked removes the splash screen 
  win-container.parentNode.removeChild(splash) //remove splash screen
  //add the canvas
  body.appendChild(canvasContainer)

  canvas = document.querySelector('canvas')

  ctx = canvas.getContext('2d')
  intervalId = 0;

  intervalId = setInterval (() => {
    requestAnimationFrame(restartGame)
  })
})

let bg = new Image();
bg.src = "images/bgnew.png";
let knight = new Image();
knight.src = "images/kn.png";
let zombie = new Image();
zombie.src = "images/nz.png";
let ground = new Image();
ground.src = "images/ground.png";



let knightX = 240;
let knightY = 490;
let knightkeyboard = 10;
let knightIncrement = 1;
let knightJump = 120;

let zombiesX = 800;
let zombiesY = 490;

let zombieSpeed = 10;

let zombiess = [{ x: canvas.width - 20, y: 490 }];

let score = 0;
let lives = 0;

window.onload = function () {
  document.getElementById("play").play();
};

document.onkeydown = (event) => {
  console.log(event.keyCode);
  if (event.keyCode == 39 || event.key == "ArrowRight") {
    knightX += knightkeyboard;

    isLeftArrow = false;
  }
  if (event.keyCode == 37 || event.key == "ArrowLeft") {
    knightX -= knightkeyboard;
  }
  if (event.keyCode == 32 || event.key == "Space") {
    if (knightY > canvas.height - 120 - 120) knightY -= knightJump;
  }
};

document.onkeyup = (event) => {
  if (event.keyCode == 32 || event.key == "Space") {
    knightY += knightJump;
  }
};

// function knightCanvasCollision() {
//   if (knightX > canvas.width - 50) {
//     knightX = canvas.width - 50;
//   } else if (knightX - 10 <= 0) {
//     knightX = 10;
//   }
// }

// function drawZombies() {
//   for (let i = 0; i < zombiess.length; i++) {
//     ctx.drawImage(zombie, zombiess[i].x, zombiess[i].y);

//     zombiess[i].x -= zombieSpeed;

//     if (zombiess)
//       if (zombiess[i].x == 20) {
//         score += 10;
//         zombiess.push({
//           x: zombiesX,
//           y: zombiesY,
//         });
//       }
//   }
// }

// function win(){
//   if (score == 20){
//     console.log(score)
//     clearInterval(intervalId);
//     location.href = "win.html"
//   }
// }

// function drawScore() {
//   ctx.font = "bold 16px Arial";
//   ctx.fillStyle = "#f9f9f9";
//   ctx.fillText("Score: " + score, 10, 20);
// }

// function drawLives(lives) {
//   ctx.font = "bold 16px Arial";
//   ctx.fillStyle = "#FF0000";
//   ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
// }

// function collision() {
//   for (let i = 0; i < zombiess.length; i++) {
//     if (
//       knightX < zombiess[i].x + zombie.width &&
//       knightX + knight.width > zombiess[i].x &&
//       knightY + knight.height > zombiess[i].y
//     ) {
//       lives--;
//       if (lives === 0) {
//         clearInterval(intervalId);
//         // draw the lives wth the 0
//         drawLives(lives);
//         setTimeout(() => {
//           location.href = "gameover.html";
//         }, 500);
//       } else {
//         resetPositions();
//         // clear the set interbval
//         clearInterval(intervalId);

//         intervalId = setInterval(() => {
//           requestAnimationFrame(() => restartGame(lives));
//         }, 50);
//       }
//     }
//   }
// }

// function resetPositions() {
//   knightX = 240;
//   knightY = 490;
//   zombiess = [{ x: canvas.width - 20, y: 490 }];
// }

// function restartGame(life) {
//   console.log(life);
//   lives = life;
//   console.log(lives);
//   ctx.drawImage(bg, 0, 0);
//   ctx.drawImage(knight, knightX, knightY);
//   ctx.drawImage(ground, 0, canvas.height - 120);
//   knightCanvasCollision();
//   drawZombies();
//   drawScore();
//   drawLives(lives);
//   collision();
//   win();
// }

// function startGame() {
//   // audio()
//   restartGame(3);
// }

intervalId = setInterval(() => {
  requestAnimationFrame(startGame);
}, 50);
