let som1;
let som2;
let playSom = false;

let amp;

let linhasTotal = 30
let diametro = 30
let linhaElipses;

let img;


function preload() {
    img = loadImage('./download (12).png')
    som1 = loadSound('./721862_xcreenplay_vampire-sleepwaking-pad (online-audio-converter.com).mp3')
    som2 = loadSound('./339501_robinhood76_06451-vampire-slow-hit-scream (online-audio-converter.com).mp3')
}


function setup() {
    createCanvas(windowWidth, windowHeight)

    amp = new p5.Amplitude()
}



function draw() {

    background(img);


    let level = amp.getLevel();
    level = map(level, 0, 1, 10, 600)
    imageMode(CENTER)
    console.log(level)

    image(img, width / 2, height / 2, width + level, height + level)

    for (i = 0; i < linhasTotal; i++) {
        for (j = 0; j < linhasTotal; j += 10) {
            stroke(random(0, 255), random(0, 255), random(0, 255))
            line(random(0, width), random(0, height), random(0, width), random(0, height))

        }
    }
}



function mousePressed() {
    if (playSom == false) {
        som2.play();

    } else if ((playSom == true)) {
        som2.pause();
    }

}


function keyPressed() {

    if (playSom == false && keyCode == 32) {
        som1.play();

    } else if (playSom == true && keyCode == 32) {
        som1.pause();
    }
}