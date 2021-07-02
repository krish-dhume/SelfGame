class Asteroid{
constructor(x,y){
    var options={
        restitution:0.3,
        
        friction:2,
        density:2
         
     }
   
     this.body=Bodies.circle(x,y,50,options);
     World.add(myworld,this.body);
     this.radius=50;
    this.image=loadImage("Asteroids.jpg");

 }
 display(){
   var pos=this.body.position;
   var angle=this.body.angle;
   push();
   translate(pos.x,pos.y);
   rotate(angle);
   imageMode(CENTER);
   image(this.image,0,0,this.radius,this.radius);
   pop();
 }
}