var gt, rt
var gato, rato
var grd, grn


function preload() {
  gt = loadImage("images/cat1.png");
  rt = loadImage("images/mouse1.png")
  grd = loadImage("images/garden.png")
}





function setup() {
  createCanvas(1000, 800);

  rato = createSprite(70, 700, 15, 15);
  rato.scale = 0.09;
  rato.addImage(rt);
  rato.velocityX=3
  gato = createSprite(700, 700, 20, 20);
  gato.scale = 0.1
  gato.addImage(gt);
  gato.velocityX=-3;

  //create tom and jerry sprites here

}

function draw() {

  background(grd);


  
  //Write condition here to evalute if tom and jerry collide
  teclado();
  drawSprites();
}
function teclado() {
  if (keyDown("space")) {
    gato.x = -5;
  }
}

