//variables
let avatarX;
let avatarY;
let avatarVX = 0;
let avatarVY = 0;
let avatarSpeed = 2;
let avatarRadius  = 50;


function preload() {

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background("green");
  imageMode(CENTER);

  setupAvatar();
}

function draw() {
  background("green");
  handleInput();
  drawAvatar();
  moveAvatar();
}

//inputs
function handleInput() {
  // Check for horizontal movement
  if (keyIsDown(LEFT_ARROW)) {
    avatarVX = -avatarSpeed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    avatarVX = avatarSpeed;
  }
  else {
    avatarVX = 0;
  }

  // Check for vertical movement
  if (keyIsDown(UP_ARROW)) {
    avatarVY = -avatarSpeed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    avatarVY = avatarSpeed;
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
  ellipse(avatarX,avatarY,avatarRadius,avatarRadius);
}

function moveAvatar(){
  avatarX += avatarVX;
  avatarY += avatarVY;
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
