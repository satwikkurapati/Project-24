class Paper {
  constructor(x,y){
    var options = {
        isStatic:false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2,
        'radius':70,
    }
    var pos =this.body.position;
    var angle = this.body.angle;
      Display()
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipse(20,20,20,20); 
      circMode(CENTER);
      strokeWeight(4);
      stroke("Pink");
      fill("Pink");
      this.image = loadImage("sprites/paper.png");
      pop();
  }
}