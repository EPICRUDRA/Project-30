class Ball{
    constructor(x,y,radius){
        var options = {
            'restitiution':0.8,
            'friction':1.0,
            'density':1.0,
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
        this.ballImg=loadImage("polygon.png");
    }
    display(){
        var pos = this.body.position;
        if(this.body.spedd<3){
            var anglr=this.body.angle;
            var pos = this.body.position;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
        }else{
           push();
            World.remove(world,this.body);
           this.visibility=this.visiblity-5
            tint(255,this.visibility);
           image(polygon.image,ball.position.x,ball.position.y,50,50);
           pop();
        }
        //fill(176, 219, 83);
        imageMode(CENTER);
        image(this.polygonImg,pos.x,pos.y,50,50);
     
    }
}