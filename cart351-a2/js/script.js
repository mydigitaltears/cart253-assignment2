//variables
let avatarX;
let avatarY;
let avatarVX = 0;
let avatarVY = 0;
let avatarSpeed = 2;
let avatarWidth = 40;
let avatarHeight = 40;
let orientation;
let oo;
let upa = false;
let doa = false;
let lea = false;
let ria = false;
//sprites
let myAvatar;
let PFlowers;
let VFlowers;
let WFlowers;
let YFlowers;
let BFlowers;
let TYFlowers;
let TRFlowers;
let myGrass;
let myTree;
//
// misc variables
let nb = 0;
let grass;
let rectX = 0;
let numFlowers = 100;

function preload() {
  //grass = loadImage("assets/images/grass.svg");
  //pinkFlower = loadImage("assets/images/pinkF.png");
  spriteTree = loadAnimation("assets/images/tree.png");
  spriteGrass = loadAnimation("assets/images/grass2.png");
  spriteTYFlower = loadAnimation("assets/images/tulippeJ.png");
  spriteTRFlower = loadAnimation("assets/images/tulippeR.png");
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
  frameRate(30);
  PFlowers = new Group();
  VFlowers = new Group();
  WFlowers = new Group();
  YFlowers = new Group();
  BFlowers = new Group();
  TYFlowers = new Group();
  TRFlowers = new Group();
  myTree = new Group();
  Avatar.setupAvatar();
  myAvatar = createSprite(avatarX, avatarY, 5, 5);
  myAvatar.addAnimation("default", animSDOWN);
  myAvatar.setCollider("rectangle",0,(myAvatar.height/2),myAvatar.width/2,20);
  myAvatar.shapeColor = color(255);
  myAvatar.velocity.y = 0;

  // generating the flowers
  for (var i = 0; i < numFlowers; i++){
    var x = random(0,width);
    var y = random(0,height);
    r = random(0,0.6)
      if (r < 0.1){
        //let aFlower = new flowers(x,y,30,60,"pink");
        var newPFlower = createSprite(x,y,5,5);
        newPFlower.addAnimation("default",spritePFlower);
        newPFlower.setCollider("rectangle",0,(newPFlower.height/2),newPFlower.width/2,20);
        newPFlower.addToGroup(PFlowers);
      }
      else if (r < 0.2){
        //let aFlower = new flowers(x,y,30,60,"purple");
        var newVFlower = createSprite(x,y,5,5);
        newVFlower.addAnimation("default",spriteVFlower);
        newVFlower.setCollider("rectangle",0,(newVFlower.height/2),newVFlower.width/2,20);
        newVFlower.addToGroup(VFlowers);
      }
      else if (r < 0.3){
        //let aFlower = new flowers(x,y,30,60,"white");
        var newWFlower = createSprite(x,y,5,5);
        newWFlower.addAnimation("default",spriteWFlower);
        newWFlower.setCollider("rectangle",0,(newWFlower.height/2),newWFlower.width/2,20);
        newWFlower.addToGroup(WFlowers);
      }
      else if (r < 0.4){
        //let aFlower = new flowers(x,y,30,60,"yellow");
        var newYFlower = createSprite(x,y,5,5);
        newYFlower.addAnimation("default",spriteYFlower);
        newYFlower.setCollider("rectangle",0,(newYFlower.height/2),newYFlower.width/2,20);
        newYFlower.addToGroup(YFlowers);
      }

      else if (r < 0.5){
        //let aFlower = new flowers(x,y,30,60,"yellow");
        var newTYFlower = createSprite(x,y,5,5);
        newTYFlower.addAnimation("default",spriteTYFlower);
        newTYFlower.setCollider("rectangle",0,(newTYFlower.height/2),newTYFlower.width/2,20);
        newTYFlower.addToGroup(TYFlowers);
      }

      else if (r < 0.6){
        //let aFlower = new flowers(x,y,30,60,"yellow");
        var newTRFlower = createSprite(x,y,5,5);
        newTRFlower.addAnimation("default",spriteTRFlower);
        newTRFlower.setCollider("rectangle",0,(newTRFlower.height/2),newTRFlower.width/2,20);
        newTRFlower.addToGroup(TRFlowers);
      }

  }

  // generating the grass
  for (var i = 0; i < 300; i++){
    var x = random(0,width);
    var y = random(0,height);

    myGrass = createSprite(x,y,30,60);
    myGrass.addAnimation("default",spriteGrass);
  }

  // generating the trees
  for (var i = 0; i < 10; i++){
    var x = random(0,width);
    var y = random(0,height);

    var newTree = createSprite(x,y,30,60);
    newTree.addAnimation("default",spriteTree);
    newTree.setCollider("rectangle",0,(newTree.height/2),newTree.width/3,15);
    newTree.addToGroup(myTree);
  }
}

function draw() {
  background("green");
  Avatar.handleInput();
  //Avatar.drawAvatar();
  //Avatar.moveAvatar();
  moveMyAvatar();
  Avatar.stop();
  drawSprites();
  //myAvatar.position.x = avatarX;
  //myAvatar.position.y = avatarY;
  //console.log(oo);
  wind();
  // collide
  for(var i=0; i<myTree.length; i++){
    myAvatar.collide(myTree[i]);
  }
  //set the existing sprites' depths in relation to their position
  for(var i=0; i<allSprites.length; i++) {
    //sprites on the bottom will be drawn first
    var pos = allSprites[i].position.y;
    var hei = allSprites[i].height/2;
    // console.log(hei);
    allSprites[i].depth = pos+hei;
    //you can link the scale to the y position to simulate perspective
    //allSprites[i].scale = map(allSprites[i].position.y, 0, height, 0.2, 1);
  }

  for(var i=0; i<BFlowers.length; i++) {
      let l = 0;
      l = Math.sin(i);
      let p = 0;
      p = Math.cos(i);
      BFlowers[i].position.x = myAvatar.position.x+20+(i/2*l);
      BFlowers[i].position.y = myAvatar.position.y+(i/2*p);
      //console.log(l);
  }
}

function moveMyAvatar(){
  myAvatar.position.x+= avatarVX;
  myAvatar.position.y+= avatarVY;
  if (myAvatar.position.x < 0){
    myAvatar.position.x= 0;
  }
  if (myAvatar.position.x > width){
    myAvatar.position.x = width;
  }
  if (myAvatar.position.y < 0){
    myAvatar.position.y = 0;
  }
  if (myAvatar.position.y > height){
    myAvatar.position.y = height;
  }
}

// to resize window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// wind / cloud test
function wind() {
  rectX += 2;
  noStroke();
  rect(rectX,100+sin(rectX*50)*3,100,5);
  if (rectX > width){
    rectX = -100;
  }
}


// to remove flowres / avatar sprite animations
function keyPressed() {

  // Remove function test
  for(var j = 0; j<PFlowers.length;j++){
    var f = PFlowers[j];
    if(keyCode === ENTER){
      if(myAvatar.overlap(PFlowers[j])){
        PFlowers[j].remove();
        //console.log("overlap");
        newBFlower = createSprite(myAvatar.position.x,myAvatar.position.y,5,5);
        newBFlower.addAnimation("default",spritePFlower);
        newBFlower.addToGroup(BFlowers);
      }
    }
  }

  for(var j = 0; j<VFlowers.length;j++){
    var f = VFlowers[j];
    if(keyCode === ENTER){
      if(myAvatar.overlap(VFlowers[j])){
        VFlowers[j].remove();
        //console.log("overlap");
        newBFlower = createSprite(myAvatar.position.x,myAvatar.position.y,5,5);
        newBFlower.addAnimation("default",spriteVFlower);
        newBFlower.addToGroup(BFlowers);
      }
    }
  }

  for(var j = 0; j<WFlowers.length;j++){
    var f = WFlowers[j];
    if(keyCode === ENTER){
      if(myAvatar.overlap(WFlowers[j])){
        WFlowers[j].remove();
        //console.log("overlap");
        newBFlower = createSprite(myAvatar.position.x,myAvatar.position.y,5,5);
        newBFlower.addAnimation("default",spriteWFlower);
        newBFlower.addToGroup(BFlowers);
      }
    }
  }

  for(var j = 0; j<YFlowers.length;j++){
    var f = YFlowers[j];
    if(keyCode === ENTER){
      if(myAvatar.overlap(YFlowers[j])){
        YFlowers[j].remove();
        //console.log("overlap");
        newBFlower = createSprite(myAvatar.position.x,myAvatar.position.y,5,5);
        newBFlower.addAnimation("default",spriteYFlower);
        newBFlower.addToGroup(BFlowers);
      }
    }
  }

  for(var j = 0; j<TYFlowers.length;j++){
      var f = TYFlowers[j];
      if(keyCode === ENTER){
        if(myAvatar.overlap(TYFlowers[j])){
          TYFlowers[j].remove();
          //console.log("overlap");
          newBFlower = createSprite(myAvatar.position.x,myAvatar.position.y,5,5);
          newBFlower.addAnimation("default",spriteTYFlower);
          newBFlower.addToGroup(BFlowers);
        }
      }
    }

    for(var j = 0; j<TRFlowers.length;j++){
        var f = TRFlowers[j];
        if(keyCode === ENTER){
          if(myAvatar.overlap(TRFlowers[j])){
            TRFlowers[j].remove();
            //console.log("overlap");
            newBFlower = createSprite(myAvatar.position.x,myAvatar.position.y,5,5);
            newBFlower.addAnimation("default",spriteTRFlower);
            newBFlower.addToGroup(BFlowers);
          }
        }
      }


  // orientation for animation
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

// for avatar sprite animations
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

// avatar creation
let Avatar = new avatar(0,0,80,80,0,0,4,"");

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
