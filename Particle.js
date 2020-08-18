class Particle {
    constructor(x, y, r) {
      var options = {
          restitution:0.3,
          friction:0,
          density:1.2,
          isStatic:false
          

      }
      this.x=x;
     this.y=y;
      this.r=r;
      
      this.body = Bodies.circle(this.x, this.y,this.r/2, options);
      this.color=color(random(0,255),random(0,255),random(0,255));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      push();
      
      translate(pos.x, pos.y);
     
      rectMode(CENTER);
       
      
      fill(this.color)
      ellipse(50,-20,this.r,this.r);
      pop();
   
    }
  };