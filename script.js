let canvas = document.querySelector('canvas')
canvas.style.border = '1px solid black'

let ctx = canvas.getContext('2d')
let intervalId = 0

let bg = new Image()
bg.src = 'images/bgnew.png'

let knight = new Image()
knight.src = 'images/kn.png'

let zombie = new Image()
zombie.src = 'images/nz.png'

let ground = new Image()
ground.src = 'images/ground.png'

let knightX = 240;
let knightY = 490;
let knightkeyboard = 10
let knightIncrement = 1
let knightJump = 120

let zombiesX = 800;
let zombiesY = 490;

let zombieSpeed = 10;

let zombiess = [
    {x: canvas.width-20, y: 490}
]

let score = 0

document.onkeydown = (event) => {
    console.log(event.keyCode);
    if (event.keyCode == 39 || event.key == "ArrowRight") {
      knightX += knightkeyboard

      isLeftArrow = false;
    } if (event.keyCode == 37 || event.key == "ArrowLeft") {
      knightX -= knightkeyboard
    }  if (event.keyCode == 32 || event.key == "Space") {
     if (knightY> (canvas.height-120)-120)
      knightY -= knightJump;
  };
}

document.onkeyup = (event) => {
  if (event.keyCode == 32 || event.key == "Space") {
    knightY += knightJump
};

}

function knightCanvasCollision(){
  if (knightX> canvas.width-50){
    knightX = canvas.width-50;
  } else if (knightX-10 <=0){
    knightX = 10;
  }
}
function drawZombies(){
  for (let i=0; i< zombiess.length; i++){
    ctx.drawImage(zombie, zombiess[i].x, zombiess[i].y)
   
    zombiess[i].x-=zombieSpeed

      if (zombiess[i].x == 20) {
      score += 10
      zombiess.push({
            x: zombiesX,
            y: zombiesY,
        })
    }
    }
}

function collision (){
  for (let i=0; i< zombiess.length; i++){
    if (knightX < zombiess[i].x + zombie.width && knightX + knight.width > zombiess[i].x && knightY + knight.height > zombiess[i].y)
    {
      location.href = 'gameover.html'
    }
    // if (knightX === zombiess[i].x && knightY === zombiess[i].y){
    //   // alert ('Zombies moving knight still')
    //   location.href = 'gameover.html'
    // } 
    // else if (knightX - knight.width === zombiess[i].x + zombie.width){
    //   alert ('Zombies on the left of the knight')
    // }
  }
}

function audio (){
  let intro = new Audio('./sounds/game.mp3')
  intro.play()
}

function startGame (){
    audio()
    ctx.drawImage(bg, 0, 0)
    ctx.drawImage(knight, knightX, knightY)
    ctx.drawImage(ground, 0, canvas.height-120)
    knightCanvasCollision()
    drawZombies()
    collision()
}

intervalId = setInterval(()=>{
    requestAnimationFrame(startGame)
}, 50)