var pelotas = [];

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < 100; i++) {
    pelotas[i] = new Ball();
  }
}

function draw() {
  background(220);
  for (var i = 0; i < pelotas.length; i++) {
    pelotas[i].mostrar();
    pelotas[i].moverx();
    pelotas[i].movery();
    if (pelotas[i].salirx()) {
      pelotas[i].botarx();
    }
    if (pelotas[i].saliry()) {
      pelotas[i].botary();
    }
  }
}
