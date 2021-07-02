const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myworld,myengine;
var backImg,ground;

var asteroid=[];

function preload(){
//backImg=loadImage("maxresdefault.jpg")
}


function setup(){

myengine=Engine.create();
myworld=myengine.world;
createCanvas(displayWidth,displayHeight)
ground=new Ground(displayHeight/2-500,displayHeight/2-100,displayWidth+1900,20)
//ground1=new Ground(displayHeight-100,displayHeight/2-100,displayWidth/10+400,20)
//ground2=new Ground(displayHeight-800,displayHeight/2-100,displayWidth/20+400,20)
console.log(displayHeight);
console.log(displayWidth);

}

function draw(){
    Engine.update(myengine)
background("black");

ground.display();
//ground1.display();
//ground2.display();
if(frameCount%65===0){
   asteroid.push(new Asteroid(random(displayWidth/2+400,displayWidth/2-400,displayWidth/2+600,displayWidth/2-600),10))
 
      }
      console.log(asteroid.y)
      for(var i=0;i<asteroid.length;i++){
        asteroid[i].display();
      }

}