class BlowerMouth{
    constructor(x, y, width, height){
        var options2 ={
            isStatic : true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options2);

        World.add(world, this.body);
    }

    display2() {
        var pos2 = this.body.position;
        push();
        translate(pos2.x, pos2.y);
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
        pop();
    }
}