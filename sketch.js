var cat, catImg1, catImg2, catImg3;
var mouse, mouseImg1,  mouseImg2, mouseImg3;
var bgImg;

function preload() {
    //load the images here
    var bgImg = loadImage("garden.png");
    var catImg1 = loadAnimation("images/cat1.png");
    var mouseImg1 = loadAnimation("images/mouse1.png");
    var catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    var mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    var catImg3 = loadAnimation("images/cat4.png");
    var mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(200,700);
    cat.addAnimation("catstill", catImg1);
    mouse = createSprite(900,700);
    cat.addAnimation("mousestill", mouseImg1);

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    
   keyPressed();
   if(cat.x-mouse.x<(cat.width/2+mouse.width/2) && mouse.x-cat.x<(cat.width/2+mouse.width/2)){
    mouse.addAnimation("mousepresent", mouseImg3);
    mouse.changeAnimation("mousepresent");
    cat.addAnimation("catpresent", catImg3);
    cat.changeAnimation("capresent");
   }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
      mouse.addAnimation("mouseTeasing", mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
  }
  else{
      if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing", mouseImg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25;
        cat.addAnimation("catwalking", catImg2);
        cat.changeAnimation("catwalking");
        cat.x = cat.x-5;
      }
      else{
          mouse.changeAnimation("mousestill");
          cat.changeAnimation("catstill");
      }
  
  }

}
