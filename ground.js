class Ground {
	constructor()
	{
		var options={
			isStatic:true
			}
        this.body = Bodies.rectangle(750,695,1500,30, options);
        this.width = 1500;
        this.height = 30;
		World.add(world, this.body);
    }
    display(){
        fill("brown");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        }
}