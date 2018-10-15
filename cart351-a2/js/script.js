//avatar variables
let avatarVX = 0;
let avatarVY = 0;
let avatarSpeed = 2;
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
// misc variables
let song;
let birds;
let sbool = false;
let numFlowers = 0;

function preload() {
  birds = loadSound("assets/sounds/birds.mp3");
  song = loadSound("assets/sounds/song2.mp3");
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
  birds.loop();
  PFlowers = new Group();
  VFlowers = new Group();
  WFlowers = new Group();
  YFlowers = new Group();
  BFlowers = new Group();
  TYFlowers = new Group();
  TRFlowers = new Group();
  myTree = new Group();
  myAvatar = createSprite(width/2, height/2, 5, 5);
  myAvatar.addAnimation("default", animSDOWN);
  myAvatar.setCollider("rectangle",0,(myAvatar.height/2),myAvatar.width/2,20);
  myAvatar.shapeColor = color(255);
  // generating the grass
  for (var i = 0; i < 400; i++){
    var x = random(0,width);
    var y = random(0,height);

    myGrass = createSprite(x,y,30,60);
    myGrass.addAnimation("default",spriteGrass);
  }

  // generating the trees
  for (var i = 0; i < 7; i++){
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
  handleInput();
  moveMyAvatar();
  stop();
  drawSprites();
  // collide
  for(var i=0; i<myTree.length; i++){
    myAvatar.collide(myTree[i]);
  }
  //set the existing sprites' depths in relation to their position
  for(var i=0; i<allSprites.length; i++) {
    //sprites on the bottom will be drawn first
    var pos = allSprites[i].position.y;
    var hei = allSprites[i].height/2;
    allSprites[i].depth = pos+hei;
    //you can link the scale to the y position to simulate perspective
    //allSprites[i].scale = map(allSprites[i].position.y, 0, height, 0.2, 1);
  }

  for(var i=0; i<BFlowers.length; i++) {
      let l = 0;
      l = Math.sin(i);
      let p = 0;
      p = Math.cos(i);
      BFlowers[i].position.x = myAvatar.position.x+25+(i/1*l);
      BFlowers[i].position.y = myAvatar.position.y+5+(i/1*p);
  }
} // end of draw()

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

function handleInput() {
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
// animation when avatar is stopped
function stop(){
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

// to resize window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// to remove flowres / avatar sprite animations
function keyPressed() {
  // Remove functions
  for(var j = 0; j<PFlowers.length;j++){
    var f = PFlowers[j];
    if(keyCode === SHIFT){
      if(myAvatar.overlap(PFlowers[j])){
        PFlowers[j].remove();
        newBFlower = createSprite(myAvatar.position.x,myAvatar.position.y,5,5);
        newBFlower.addAnimation("default",spritePFlower);
        newBFlower.addToGroup(BFlowers);
      }
    }
  }
  for(var j = 0; j<VFlowers.length;j++){
    var f = VFlowers[j];
    if(keyCode === SHIFT){
      if(myAvatar.overlap(VFlowers[j])){
        VFlowers[j].remove();
        newBFlower = createSprite(myAvatar.position.x,myAvatar.position.y,5,5);
        newBFlower.addAnimation("default",spriteVFlower);
        newBFlower.addToGroup(BFlowers);
      }
    }
  }
  for(var j = 0; j<WFlowers.length;j++){
    var f = WFlowers[j];
    if(keyCode === SHIFT){
      if(myAvatar.overlap(WFlowers[j])){
        WFlowers[j].remove();
        newBFlower = createSprite(myAvatar.position.x,myAvatar.position.y,5,5);
        newBFlower.addAnimation("default",spriteWFlower);
        newBFlower.addToGroup(BFlowers);
      }
    }
  }
  for(var j = 0; j<YFlowers.length;j++){
    var f = YFlowers[j];
    if(keyCode === SHIFT){
      if(myAvatar.overlap(YFlowers[j])){
        YFlowers[j].remove();
        newBFlower = createSprite(myAvatar.position.x,myAvatar.position.y,5,5);
        newBFlower.addAnimation("default",spriteYFlower);
        newBFlower.addToGroup(BFlowers);
      }
    }
  }
  for(var j = 0; j<TYFlowers.length;j++){
      var f = TYFlowers[j];
      if(keyCode === SHIFT){
        if(myAvatar.overlap(TYFlowers[j])){
          TYFlowers[j].remove();
          newBFlower = createSprite(myAvatar.position.x,myAvatar.position.y,5,5);
          newBFlower.addAnimation("default",spriteTYFlower);
          newBFlower.addToGroup(BFlowers);
        }
      }
  }
  for(var j = 0; j<TRFlowers.length;j++){
      var f = TRFlowers[j];
      if(keyCode === SHIFT){
        if(myAvatar.overlap(TRFlowers[j])){
          TRFlowers[j].remove();
          //console.log("overlap");
          newBFlower = createSprite(myAvatar.position.x,myAvatar.position.y,5,5);
          newBFlower.addAnimation("default",spriteTRFlower);
          newBFlower.addToGroup(BFlowers);
        }
      }
  } // end of remove functions

  // ENTER for song
  if (keyCode === ENTER){
    if (sbool === false){
        song.loop();
        sbool = true;
    }
    else if (sbool === true){
      song.stop();
      sbool = false;
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
  else if (ria === true){
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

function createFlowers(){
  // generating the flowers
  for (var i = 0; i < numFlowers; i++){
    var x = random(0,width);
    var y = random(0,height);
    r = random(0,0.6)
      if (r < 0.1){
        var newPFlower = createSprite(x,y,5,5);
        newPFlower.addAnimation("default",spritePFlower);
        newPFlower.setCollider("rectangle",0,(newPFlower.height/3),newPFlower.width/2,40);
        newPFlower.addToGroup(PFlowers);
      }
      else if (r < 0.2){
        var newVFlower = createSprite(x,y,5,5);
        newVFlower.addAnimation("default",spriteVFlower);
        newVFlower.setCollider("rectangle",0,(newVFlower.height/3),newVFlower.width/2,40);
        newVFlower.addToGroup(VFlowers);
      }
      else if (r < 0.3){
        var newWFlower = createSprite(x,y,5,5);
        newWFlower.addAnimation("default",spriteWFlower);
        newWFlower.setCollider("rectangle",0,(newWFlower.height/3),newWFlower.width/2,40);
        newWFlower.addToGroup(WFlowers);
      }
      else if (r < 0.4){
        var newYFlower = createSprite(x,y,5,5);
        newYFlower.addAnimation("default",spriteYFlower);
        newYFlower.setCollider("rectangle",0,(newYFlower.height/3),newYFlower.width/2,40);
        newYFlower.addToGroup(YFlowers);
      }
      else if (r < 0.5){
        var newTYFlower = createSprite(x,y,5,5);
        newTYFlower.addAnimation("default",spriteTYFlower);
        newTYFlower.setCollider("rectangle",0,(newTYFlower.height/3),newTYFlower.width/2,40);
        newTYFlower.addToGroup(TYFlowers);
      }
      else if (r < 0.6){
        var newTRFlower = createSprite(x,y,5,5);
        newTRFlower.addAnimation("default",spriteTRFlower);
        newTRFlower.setCollider("rectangle",0,(newTRFlower.height/3),newTRFlower.width/2,40);
        newTRFlower.addToGroup(TRFlowers);
      }
  }
}

//creating flowers at intro
function butt1click(){
  numFlowers = 50;
  document.getElementById("items").style.display="none";
  createFlowers();
}

function butt2click(){
  numFlowers = 100;
  document.getElementById("items").style.display="none";
  createFlowers();
}

function butt3click(){
  numFlowers = 250;
  document.getElementById("items").style.display="none";
  createFlowers();
}

function butt4click(){
  numFlowers = 1000;
  document.getElementById("items").style.display="none";
  createFlowers();
}
