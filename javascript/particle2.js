function Particle(x, y, dx,dy) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;

  this.r = random(4, 32);

  this.update = function() {
    this.x += this.dx/5;
    this.y += this.dy/5;

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  this.show = function() {
    noStroke();
    var px = floor(this.x / vScale);
    var py = floor(this.y / vScale);
    var col = video.get(px, py);
    //console.log(col);
    fill(col[0], col[1], col[2], 10);
    ellipse(this.x, this.y, this.r, this.r);

    if (this.x > width-this.r/2|| this.x< this.r/2) {
         this.dx = - this.dx;
       }

       if (this.y > height- this.r/2|| this.y< this.r/2){
         this.dy = -this.dy;
     }
  }

}
