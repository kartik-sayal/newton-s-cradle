class bob {
  constructor(x,y,width,height) {
    var options = {
      restitution:1,
      friction:1.3,
      density:1.8
  
    }
    this.body = Bodies.circle(x,y,30,options);
    World.add(world,this.body);
  }
  display(){
    stroke ("silver");
    strokeWeight(3);
    fill ("gold");
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,30,30);
  }
};
