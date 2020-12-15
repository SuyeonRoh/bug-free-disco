var r;
var g;
var b;
var a;
let words = [];
let wordFall = setInterval(makeWord, 100);
let letters = ['F', 'R', 'E', 'E','D','O','M','y','a','u']
function setup() {
  createCanvas(window.outerWidth, window.outerHeight);
  textFont('Georgia', 43);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  rectMode(CENTER);
}

function draw() {
  r = random(255);
  g = random(100,200);
  b = random(100);
  a = random(200,255);

  background(0);

  for (var i = words.length - 10; i >= 0; i--) {
    words[i].display();
    words[i].move();

    if (words[i].isOffScreen()) {
      words.splice(i, 15);
    }
  }

}

function makeWord() {
  words.push(new Word());
  console.log(words.length);
}

class Word {
  constructor() {
    this.x = random(width);
    this.y = 15;
    this.speed = 1.3;
    this.l = random(letters);
  }

  move() {
    this.y += this.speed;
  }
  display() {

    fill(r,g,b,a);
    text(this.l, this.x, this.y);
  }
  isOffScreen() {
    if (this.y > height) {
      return true
    }
  }
}

function keyPressed() {
  removeLetter(key);
}

function removeLetter(letter) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].l === letter) {
      print(words[i].l);
      words.splice(i, 1);
      i--;
    }
  }
}

function letterA() {

  for (var i = 0; i < words.length; i++) {
    if (words[i].l === 'A') {
      print(words[i].l);
      words.splice(i, 1);
      i--;
    }
  }
}
