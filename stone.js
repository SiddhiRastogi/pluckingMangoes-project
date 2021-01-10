class Stone {
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution :0,
            friction :1,
            density:1
			}
		this.x=x;
		this.y=y;
		this.r=r
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        this.image=loadImage("stone.png")
		World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*2,this.r*2);
        pop();
    }
}