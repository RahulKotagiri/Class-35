var hypnoticBall, database;
var player,game,form,playerCount,gameState = 0;

function setup(){
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
}
