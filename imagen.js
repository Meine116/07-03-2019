class Jolteon {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;

  }

  mostrar() {
    imageMode(CENTER);
    image(img, this.x, this.y, 200, 200);
  }
  derecha() {
    this.x++;
  }
  izquierda() {
    this.x--;
  }


    abajo(){
  this.y++;
}
arriba(){
  this.y--;
}
}
