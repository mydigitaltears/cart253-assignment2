//variables
let avatarX;
let avatarY;
let avatarVX = 0;
let avatarVY = 0;
let avatarSpeed = 2;
let avatarWidth = 50;
let avatarHeight = 50;
let myAvatar;
let orientation;


function preload() {
  animSUP = loadAnimation("assets/images/avatarI_0010.png");
  animSDOWN = loadAnimation("assets/images/avatarI_0001.png");
  animSLEFT = loadAnimation("assets/images/avatarI_0004.png");
  animSRIGHT = loadAnimation("assets/images/avatarI_0007.png");
  animUP = loadAnimation("assets/images/avatarI_0011.png","assets/images/avatarI_0010.png",
  "assets/images/avatarI_0012.png","assets/images/avatarI_0010.png");
  animDOWN = loadAnimation("assets/images/avatarI_0002.png","assets/images/avatarI_0001.png",
  "assets/images/avatarI_0003.png","assets/images/avatarI_0001.png");
  animLEFT = loadAnimation("assets/images/avatarI_0005.png","assets/images/avatarI_0004.png",
  "assets/images/avatarI_0006.png","assets/images/avatarI_0004.png");
  animRIGHT = loadAnimation("assets/images/avatarI_0008.png","assets/images/avatarI_0007.png",
  "assets/images/avatarI_0009.png","assets/images/avatarI_0007.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background("green");
  imageMode(CENTER);
  setupAvatar();
  myAvatar = createSprite(avatarX, avatarY, 40, 40);
  myAvatar.addAnimation("default", animSDOWN);
  myAvatar.shapeColor = color(255);
  myAvatar.velocity.y = 0;
}

function draw() {
  createCanvas(windowWidth,windowHeight);
  background("green");
  handleInput();
  stop();
  //drawAvatar();
  moveAvatar();
  drawSprites();
  myAvatar.position.x = avatarX;
  myAvatar.position.y = avatarY;
  console.log(orientation);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW){
    myAvatar.addAnimation("default", animLEFT);
  }
  else if (keyCode === RIGHT_ARROW){
    myAvatar.addAnimation("default", animRIGHT);
  }
  else if (keyCode === DOWN_ARROW){
    myAvatar.addAnimation("default", animDOWN);
  }
  else if (keyCode === UP_ARROW){
    myAvatar.addAnimation("default", animUP);
  }
}

function stop(){
  if (avatarVX === 0 && avatarVY ===0){
    if (orientation === "LEFT"){
      myAvatar.addAnimation("default", animSLEFT);
    }
    else if (orientation === "RIGHT"){
      myAvatar.addAnimation("default", animSRIGHT);
    }
    else if (orientation === "DOWN"){
      myAvatar.addAnimation("default", animSDOWN);
    }
    else if (orientation === "UP"){
      myAvatar.addAnimation("default", animSUP);
    }
  }
}


//inputs
function handleInput() {
  // Check for horizontal movement
  if (keyIsDown(LEFT_ARROW)) {
    avatarVX = -avatarSpeed;
    orientation = "LEFT";
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    avatarVX = avatarSpeed;
    orientation = "RIGHT";
  }
  else {
    avatarVX = 0;
  }

  // Check for vertical movement
  if (keyIsDown(UP_ARROW)) {
    avatarVY = -avatarSpeed;
    orientation = "UP";
  }
  else if (keyIsDown(DOWN_ARROW)) {
    avatarVY = avatarSpeed;
    orientation = "DOWN";
  }
  else {
    avatarVY = 0;
  }
}

// setup / draw / move for avatar
function setupAvatar(){
  avatarX = width/2;
  avatarY = height/2;
}

function drawAvatar(){
  ellipse(avatarX,avatarY,avatarWidth,avatarHeight);
}

function moveAvatar(){
  avatarX += avatarVX;
  avatarY += avatarVY;
  if (avatarX < 0){
    avatarX = 0;
  }
  if (avatarX > width){
    avatarX = width;
  }
  if (avatarY < 0){
    avatarY = 0;
  }
  if (avatarY > height){
    avatarY = height;
  }
}


// creating some flowers
let flower1= new flowers(0,1,"marguerite");
let flower2= new flowers(0,1,"tulipe");
let flower3= new flowers(0,1,"tournesol");

//Adding flowers to bouquet
let bouquet=[];

//PERSONNAGE PASSE SUR LA FLEUR- EVENT
if(event)
{
  bouquet.push();
}
// flowers Constructor

function flowers(x, y, nom)
{
  this.xPos=x;
  this.yPos=y;
  this.name=nom;

  this.removeFlower=function(){

  }

  this.addFlower=function(){

  }
}
