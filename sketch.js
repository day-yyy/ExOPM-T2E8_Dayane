let som;
let playSom = false;

let amp;

function preload() {
    som = loadSound('./339501_robinhood76_06451-vampire-slow-hit-scream (online-audio-converter.com).mp3')

}

function setup() {
    createCanvas(windowWidth, windowHeight)

    amp = new p5.Amplitude()
}

function draw() {
    background(255)

    let myRate = map(mouseX, 0, width, 0.1, 3.)
    som.rate(myRate)

    let myVolume = map(mouseY, 0, height, 0., 1.)
    som.setVolume(myVolume)

    let level = amp.getLevel();

    level = map(level, 0, 1, 10, 600)
    console.log(level)
    fill(0)
    ellipse(width / 2, height / 2, level, level)
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