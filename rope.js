class rope{
	constructor(ball, len, stifness)
	{
		this.x = ball.position.x;
		this.y = ball.position.y;
		this.len = len;
		//create rope constraint here
		this.rope = Matter.Constraint.create({
			pointA : {x:this.x, y: this.y - len},
			bodyB: ball,
			length: len,
			stiffness : stifness
		});
		console.log(this.rope);
		World.add(world, this.rope);
	}


    //create display() here 
	display(x2, y2){
		push();
		stroke("black");
		strokeWeight(2);
		line(this.x, this.y - this.len, x2, y2);
		pop();
	}

}
