class Ball {
  constructor() {
    this.x = random(25, width-25);
    this.y = random(25, height-25);
    this.tam = 50;
    this.velx = 10;
    this.vely = 8;
    this.red = random(0, 255);
    this.green = random(0, 255);
    this.blue = random(0, 255);

  }
  mostrar() {
    fill(this.red, this.blue, this.green,20);
    ellipse(this.x, this.y, this.tam, this.tam);
  }
  moverx() {
    this.x = this.x + this.velx;
  }
  salirx() {
    var res;
    if (this.x < 25 || this.x > 375) {
      res = true;
    } else {
      res = false
    }
    return res;
  }
  botarx() {
    this.velx = this.velx * -1
    this.red = random(0, 255);
    this.green = random(0, 255);
    this.blue = random(0, 255);

  }
  movery() {
    this.y = this.y + this.vely;
  }
  saliry() {
    var res;
    if (this.y < 25 || this.y > 375) {
      res = true;
    } else {
      res = false
    }
    return res;
  }
  botary() {
    this.vely = this.vely * -1
  }
}
