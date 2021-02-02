class Block {
    constructor(x, y) {

        var options = {
            restitution: 0.1,
            friction: 0.4,
            density: 0.5
        }

        this.body = Bodies.rectangle(x, y, 50, 60, options);
        this.width = 50;
        this.height = 60;
        this.visibility = 255;

        World.add(world, this.body);
    }


    display() {

        if (this.body.speed < 3) {
            var pos = this.body.position;

            rectMode(CENTER);
            rect(pos.x, pos.y, this.width, this.height);
        }

        else {
            var pos = this.body.position;
            World.remove(world, this.body);
            push();
            this.visibility= this.visibility-1;
            tint(255, this.visibility);            
            pop();
        }
    }
}