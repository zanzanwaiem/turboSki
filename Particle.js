class Particle {
  constructor(position){
    this.acceleration = createVector(0, 0.05);
    this.velocity = p5.Vector.random2D();
    this.velocity.mult(5);
    this.position = position.copy();
    this.lifespan = 255;
    this.color = random(50, 255);
    this.r = 12;
  }
  
  run(){
    this.update();
    this.display();
    this.edge();
  }
  
   edge() {
    if (this.position.y > height - this.r/2) {
      this.position.y = this.r/2;
    }
    
    if (this.position.y < this.r/2) {
      this.position.y = height - this.r/2;
    }
    
    if (this.position.x > width- this.r/2) {
      this.position.x = this.r/2;
    }
    
    if (this.position.x < this.r/2) {
      this.position.x = width- this.r/2;
    }
  }
  
  update(){
    this.mouse = createVector(mouseX, mouseY);
    this.center = createVector(width/2, height/2);
    
    this.force = p5.Vector.sub(this.mouse,this.center);
    this.force.setMag(0.1);
    this.acceleration.add(this.force);
    
    this.velocity.limit(10);
    
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 1;
  }
  
  display() {
    // stroke(200, this.lifespan);
    strokeWeight(2);
    fill(this.color, 0, 0, this.lifespan);
    rectMode(CENTER);
    rect(this.position.x, this.position.y, this.r, this.r);
  }
  
  isDead(){
    return this.lifespan < 0;
  }
}

// 간단한 파티클 클래스
// let Particle = function(position) {
//   this.acceleration = createVector(0, 0.05);
//   this.velocity = createVector(random(-1, 1), random(-1, 0));
//   this.position = position.copy();
//   this.lifespan = 255;
// };

// Particle.prototype.run = function() {
//   this.update();
//   this.display();
// };

// 위치 업데이트를 위한 메소드
// Particle.prototype.update = function(){
//   this.velocity.add(this.acceleration);
//   this.position.add(this.velocity);
//   this.lifespan -= 2;
// };

// // 화면에 보이기 위한 메소드
// Particle.prototype.display = function() {
//   stroke(200, this.lifespan);
//   strokeWeight(2);
//   fill(127, this.lifespan);
//   ellipse(this.position.x, this.position.y, 12, 12);
// };

// // 파티클이 여전히 쓸만한가요?
// Particle.prototype.isDead = function(){
//   return this.lifespan < 0;
// };