class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
           friction:1,
          density:1
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(myworld,this.body);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    this.height=height;this.width=width
}
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y)
        fill("brown")
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}