var canvas, backgroundImage;

var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var f2,f1;

var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img;
var obstacles; // global variable
var S;

//load the songs.
function preload(){
  track = loadImage("../images/track.jpg");

  f2 = loadImage("../images/f1.png");
  S=loadSound("../sound/sliding.mp3");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
}

function setup(){

  canvas = createCanvas(displayWidth , displayHeight);
//local variable
  var W,H;
  
  database = firebase.database();
  gameState = 0;
  distance = 0;
 // finishedPlayers = 0;
  yVel = 0;
  xVel = 0;

  xSet = false;
  game = new Game();
  game.getState();
  game.start();
  
  obstacles= createGroup();
  /*
  Notes:
  declaration of variable: eg: var i;
  intitalization of variable: Eg: var i =10;
  for syntax: for(1st; 2nd; 3rd){
// work to perform
  }

  eg: printing 5 table
  for(var i=1; i<=10; i++){
    var num = i*5;
    console.log(num);
  }
  1st : Intialization 
  2nd : Conditional check(operators: < > <= >= == !==)
  3rd : Increment or Decrement (++(inc by 1) , --(dec by 1), i +=10, i -=10 )
  */
  for(var i=0; i<5; i++)
  {
    W=random(200,950);
    H=random(-height*4,height-300);

    f1 = createSprite(W,H);
    f1.addImage("f1", f2);
    
    obstacles.add(f1);

  }

  
  

}


function draw(){
   //start the game
   background(200, 200, 255);

   //start the game
   if (playerCount === 4 ) {
     game.update(1);
   }
 
   //start the game for real
   if (gameState === 1) {
     game.play();
   }
   if (gameState === 2) {
     console.log("End");
   }}
 
  
