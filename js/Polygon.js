class Polygon{
    constructor(x, y, r){

        var options ={
            restitution: 0.4,
            friction:1,
            density :1.5
        }
        this.body = Bodies.circle(x, y, r/2, options);
        this.r = r;
        this.image=loadImage("polygon.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image,pos.x, pos.y, this.r, this.r);
    }
}