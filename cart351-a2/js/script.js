//variables
let avatarX;
let avatarY;
let avatarVX = 0;
let avatarVY = 0;
let avatarSpeed = 2;
let avatarWidth = 40;
let avatarHeight = 40;
//sprites
let myAvatar;
let PFlowers;
let VFlowers;
let WFlowers;
let YFlowers;
let myGrass;
//
let orientation;
let pinkFlower;
let grass;
let oo;
let upa = false;
let doa = false;
let lea = false;
let ria = false;
let index = 0;
let numFlowers = 100;

function preload() {
  grass = loadImage("assets/images/grass.svg");
  pinkFlower = loadImage("assets/images/pinkF.png");
  spriteGrass = loadAnimation("assets/images/grass.svg");
  spritePFlower = loadAnimation("assets/images/pinkF.png");
  spriteVFlower = loadAnimation("assets/images/purpleF.png");
  spriteWFlower = loadAnimation("assets/images/whiteF.png");
  spriteYFlower = loadAnimation("assets/images/yellowF.png");
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
  PFlowers = new Group();
  VFlowers = new Group();
  WFlowers = new Group();
  YFlowers = new Group();
  Avatar.setupAvatar();
  myAvatar = createSprite(avatarX, avatarY, 20, 20);
  myAvatar.scale = 2;
  myAvatar.addAnimation("default", animSDOWN);
  myAvatar.shapeColor = color(255);
  myAvatar.velocity.y = 0;
  for (var i = 0; i < numFlowers; i++){
    var x = random(0,width);
    var y = random(0,height);
    r = random(0,0.4)
      if (r < 0.1){
        //let aFlower = new flowers(x,y,30,60,"pink");
        var newPFlower = createSprite(x,y,5,5);
        newPFlower.addAnimation("default",spritePFlower);
        newPFlower.scale = 0.01;
        newPFlower.addToGroup(PFlowers);
        console.log(newPFlower);
      }
      else if (r < 0.2){
        //let aFlower = new flowers(x,y,30,60,"purple");
        var newVFlower = createSprite(x,y,5,5);
        newVFlower.addAnimation("default",spriteVFlower);
        newVFlower.scale = 0.04;
        newVFlower.addToGroup(VFlowers);
      }
      else if (r < 0.3){
        //let aFlower = new flowers(x,y,30,60,"white");
        var newWFlower = createSprite(x,y,5,5);
        newWFlower.addAnimation("default",spriteWFlower);
        newWFlower.scale = 0.04;
        newWFlower.addToGroup(WFlowers);
      }
      else if (r < 0.4){
        //let aFlower = new flowers(x,y,30,60,"yellow");
        var newYFlower = createSprite(x,y,5,5);
        newYFlower.addAnimation("default",spriteYFlower);
        newYFlower.scale = 0.04;
        newYFlower.addToGroup(YFlowers);
      }

  }
  for (var i = 0; i < 100; i++){
    var x = random(0,width);
    var y = random(0,height);

    myGrass = createSprite(x,y,30,60);
    myGrass.addAnimation("default",spriteGrass);
    myGrass.scale = 0.20;
  }
}

function draw() {
  background("green");
  image(grass, 200, 200, 70, 50);
  Avatar.handleInput();
  Avatar.drawAvatar();
  Avatar.moveAvatar();
  Avatar.stop();
  drawSprites();
  myAvatar.position.x = avatarX;
  myAvatar.position.y = avatarY;
  console.log(oo);
  //console.log(avatarX);
  //console.log(avatarY);
  flower1.drawFlower();
  bflower1.drawbFlower();
  bflower2.drawbFlower();
  //aFlower.drawFlower();

  //set the existing sprites' depths in relation to their position
  for(var i=0; i<allSprites.length; i++) {
    //sprites on the bottom will be drawn first
    allSprites[i].depth = allSprites[i].position.y;

    //you can link the scale to the y position to simulate perspective
    //allSprites[i].scale = map(allSprites[i].position.y, 0, height, 0.2, 1);
  }
  // for(var j = 0; j<myPFlower.length;j++){
  //   var f = myPFlower[j];
  //   if(myAvatar.overlap(myPFlower)){
  //     console.log("overlap");
  //   }
  // }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {

  // Remove function test
  for(var j = 0; j<PFlowers.length;j++){
    var f = PFlowers[j];
    if(keyCode === ENTER){
      if(myAvatar.overlap(PFlowers[j])){
        PFlowers[j].remove();
        console.log("overlap");
      }
    }
  }
  for(var j = 0; j<VFlowers.length;j++){
    var f = VFlowers[j];
    if(keyCode === ENTER){
      if(myAvatar.overlap(VFlowers[j])){
        VFlowers[j].remove();
        console.log("overlap");
      }
    }
  }
  for(var j = 0; j<WFlowers.length;j++){
    var f = WFlowers[j];
    if(keyCode === ENTER){
      if(myAvatar.overlap(WFlowers[j])){
        WFlowers[j].remove();
        console.log("overlap");
      }
    }
  }
  for(var j = 0; j<YFlowers.length;j++){
    var f = YFlowers[j];
    if(keyCode === ENTER){
      if(myAvatar.overlap(YFlowers[j])){
        YFlowers[j].remove();
        console.log("overlap");
      }
    }
  }


  if (keyCode === LEFT_ARROW){
    lea=true;
  }
  if (keyCode === RIGHT_ARROW){
    ria=true;
  }
  if (keyCode === DOWN_ARROW){
    doa=true;
  }
  if (keyCode === UP_ARROW){
    upa=true;
  }
  if (lea === true){
    myAvatar.addAnimation("default", animLEFT);
  }
  if (ria === true){
    myAvatar.addAnimation("default", animRIGHT);
  }
  if (doa === true){
    myAvatar.addAnimation("default", animDOWN);
  }
  if (upa === true){
    myAvatar.addAnimation("default", animUP);
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW){
    lea=false;
  }
  if (keyCode === RIGHT_ARROW){
    ria=false;
  }
  if (keyCode === DOWN_ARROW){
    doa=false;
  }
  if (keyCode === UP_ARROW){
    upa=false;
  }
  if (lea === true){
    myAvatar.addAnimation("default", animLEFT);
  }
  if (ria === true){
    myAvatar.addAnimation("default", animRIGHT);
  }
  if (doa === true){
    myAvatar.addAnimation("default", animDOWN);
  }
  if (upa === true){
    myAvatar.addAnimation("default", animUP);
  }
}

let Avatar = new avatar(0,0,80,80,0,0,2,"");


// Avatar class
function avatar(x, y, w, h, vx, vy, s, o){
  avatarX=x;
  avatarY=y;
  avatarWidth=w;
  avatarHeight=h;
  avatarVX=vx;
  avatarVY=vy;
  avatarSpeed=s;
  orientation=o;

  this.setupAvatar = function(){
    avatarX = width/2;
    avatarY = height/2;
  }

  this.drawAvatar = function(){
    ellipse(avatarX,avatarY,avatarWidth,avatarHeight);
  }

  this.moveAvatar = function(){
    avatarX += avatarVX;
    avatarY += avatarVY;
    if (avatarX < 0){
      avatarX= 0;
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

  this.handleInput = function() {
    // Check for horizontal movement
    if (keyIsDown(LEFT_ARROW)) {
      avatarVX = -avatarSpeed;
      orientation = animLEFT;
      oo = "LEFT";
    }
    else if (keyIsDown(RIGHT_ARROW)) {
      avatarVX = avatarSpeed;
      orientation = animRIGHT;
      oo = "RIGHT";
    }
    else {
      avatarVX = 0;
    }

    // Check for vertical movement
    if (keyIsDown(UP_ARROW)) {
      avatarVY = -avatarSpeed;
      orientation = animUP;
      oo = "UP";
    }
    else if (keyIsDown(DOWN_ARROW)) {
      avatarVY = avatarSpeed;
      orientation = animDOWN;
      oo = "DOWN";
    }
    else {
      avatarVY = 0;
    }
  }

  this.stop = function(){
    if (avatarVX === 0 && avatarVY ===0){
      if (orientation === animLEFT){
        myAvatar.addAnimation("default", animSLEFT);
      }
      else if (orientation === animRIGHT){
        myAvatar.addAnimation("default", animSRIGHT);
      }
      else if (orientation === animDOWN){
        myAvatar.addAnimation("default", animSDOWN);
      }
      else if (orientation === animUP){
        myAvatar.addAnimation("default", animSUP);
      }
    }
  }

  this.pickFlower = function(){
    var d = dist(avatarX,avatarY,aFlower.xPos,aFlower.yPos);
    if (d < avatarWidth + aFlower.width){

    }
  }
} // end of Avatar class



// creating some flowers
let flower1= new flowers(20,30,30,60,"marguerite");
let flower2= new flowers(50,100,30,60,"tulipe");
let flower3= new flowers(200,150,30,60,"tournesol");

let bflower1= new bflowers(15,5,20,50,"allo");
let bflower2= new bflowers(20,10,20,50,"allo");



//Adding flowers to bouquet
let bouquet=[];

//PERSONNAGE PASSE SUR LA FLEUR- EVENT
if(event)
{
  bouquet.push();
}

function bflowers(x, y ,w, h, nom){
  this.xPos=x;
  this.yPos=y;
  this.width=w;
  this.height=h;
  this.name=nom;

  this.drawbFlower = function() {
    //rect(this.xPos+avatarX,this.yPos+avatarY,this.width,this.height);
    image(pinkFlower, this.xPos+avatarX, this.yPos+avatarY, this.width, this.height);
  }
}

// flowers Constructor

function flowers(x, y, w, h, nom)
{
  this.xPos=x;
  this.yPos=y;
  this.width=w;
  this.height=h;
  this.name=nom;

  this.removeFlower=function(){
    let d = dist(avatarX, avatarY, this.width,this.height);

  }

  this.addFlower=function(){

  }

  this.drawFlower = function() {
    image(pinkFlower, this.xPos, this.yPos, this.width, this.height);
  }

}
