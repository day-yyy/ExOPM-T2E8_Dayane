let som;
let playSom = false;

let amp;

let linhasTotal = 30
let diametro = 30
let linhaElipses;


function preload() {
    som = loadSound('./721862_xcreenplay_vampire-sleepwaking-pad (online-audio-converter.com).mp3')

}

function setup() {
    createCanvas(windowWidth, windowHeight)

    amp = new p5.Amplitude()

}

let myRate = map(mouseX, 0, width, 0.1, 3.)
som.rate(myRate)

let myVolume = map(mouseY, 0, height, 0., 1.)
som.setVolume(myVolume)

let level = amp.getLevel();

level = map(level, 0, 1, 10, 600)
console.log(level)
fill(130, 7, 7)
stroke(61, 14, 14)
ellipse(width / 2, height / 2, level, level)

function draw() {

    background(109, 76, 112);
    linhaElipses = width / diametro
    stroke(255)
    for (i = 0; i < linhaElipses; i++) {
        for (j = 0; j < height; j += diametro) {
            ellipse(0 + i * diametro, 0 + j, diametro, diametro)

        }
    }

    for (i = 0; i < linhasTotal; i++) {
        for (j = 0; j < linhasTotal; j += 10) {
            stroke(random(0, 255), random(0, 255), random(0, 255))
            line(random(0, width), random(0, height), random(0, width), random(0, height))

        }
    }
}


function mousePressed() {
    if (playSom == false) {

        som.play();


        playSom = true;
    } else if ((playSom == true)) {
        som.pause();

        playSom = false;
    }
}

function keyPressed() {

    if (keyCode == ENTER) {
        som.jump(2)
    }

    if (keyCode == DOWN_ARROW) {
        som.jump(6, 1)
    }

    if (keyCode == UP_ARROW) {
        som.jump(9, 1)
    }

}