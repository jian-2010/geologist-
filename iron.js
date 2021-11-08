class Iron{
constructor(x,y){
    
    var option={

        'restitution' :0.8,
        'friction':3,
        'density':30
    }

    this.body = Bodies.rectangle(x,y,60,50,option)
    this.width=30
    this.height=70

    World.add(world, this.body)
    
}

display(){
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    stroke('white')
    fill('blue')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  };


}