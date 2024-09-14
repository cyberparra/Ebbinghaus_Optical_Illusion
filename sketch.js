/*

illusione ottica di Ebbinghaus
by cyberparra

*/

var play,music;
var again;

function preload() {
  play = loadImage("play.png");
   music = loadSound("breatha.mp3");
}

//var de1 = 95;
//var de2 = 30;
//var di = 50;
//var ro1 = 100;
//var ro2 = 45;

var de1 = 0; //left orange circle
var de2 = 0; //right orange circle

var di = 0; //orange circle diam

var ro1 = 0; //left circle ray
var ro2 = 0; //right circle ray

var x, y;
var x1, y1;
//var x2, y2;

var a = 0;
var a1 = 0;
var start = 0;
var k = 0;
var xc1;
var xc2;
var xc3;
var canva;

function setup() {
  canva=createCanvas(windowWidth, windowHeight);
  canva.position(0,0)
  x = windowWidth / 4;
  y = windowHeight / 2;
  xc1 = x;
  xc2 = x * 2;
  xc3 = xc2 - xc1 / 2;

  de1 = x / 2.7; //left orange circle
  de2 = x / 8; //right orange circle

  di = x / 5; //orange circle diam

  ro1 = x / 2.5; //left circle ray
  ro2 = x / 5;

  angleMode(DEGREES);
  play = createImg("play.png", "");
  play.position(xc3, 75);
  play.mousePressed(startON);

  
  //again = createButton("Ripeti");
  
  again = createImg("rotate.png", "");
  again.position(xc3, 100);
  again.mousePressed(rep);
  again.hide();
}

function draw() {
  background(255);

  if (k < 360) {
    fill("orange");
    circle(xc1, y, di);

    fill("#219ebc");
    for (a1 = a; a1 < 360; a1 = a1 + 60) {
      //x1 = cos(n) * ro1 + width / 2;
      //y1 = sin(n) * ro1 + height / 2;
      x1 = cos(a1) * ro1 + xc1;
      y1 = sin(a1) * ro1 + y;

      circle(x1, y1, de1);
    }

    //right

    fill("orange");
    circle(xc2, y, di);

    fill("#219ebc");
    for (a1 = a; a1 < 360; a1 = a1 + 45) {
      //x1 = cos(n) * ro1 + width / 2;
      //y1 = sin(n) * ro1 + height / 2;
      x1 = cos(a1) * ro2 + xc2;
      y1 = sin(a1) * ro2 + y;

      circle(x1, y1, de2);
    }

    if (start == 1) {
      a = a + 0.5;
      k += 0.5;

      if (a > 360) {
        a = 360;
      }
    }
  } else {
    //pop()
    fill("orange");
    circle(xc1, height / 2, di);
    circle(xc2, height / 2, di);
    if (xc1 < xc3) {
      xc1 += 1;
      xc2 -= 1;
    } else {
      again.show();
    }
  }
}

function startON() {
  start = 1;
  play.hide();
  music.play();
}

function rep() {
  k = 0;
  again.hide();
  play.show();
  start = 0;
  a = 0;
  a1 = 0;
  x = windowWidth / 4;
  y = windowHeight / 2;
  xc1 = x;
  xc2 = x * 2;
  xc3 = xc2 - xc1 / 2;
  music.stop()
}
