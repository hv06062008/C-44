var canvas;
var bg;
var database;
var form,player,game;

function preload(){
  bg = loadImage('rm2.png');


}

function setup() {
  canvas = createCanvas(displayWidth-20, displayHeight -30);
  database = firebase.database();

  form = new Form();

  
}

function draw() {
  background(bg);
  form.display();
  
  

  
  
}