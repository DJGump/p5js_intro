let x
let y



function setup() {
    createCanvas(windowWidth, windowHeight);
    }

function draw() {
    background(144);
    // noStroke()
    x = noise(frameCount * 0.01, 100) * width
    y = noise(frameCount * 0.01) * height

    strokeWeight(10)
    fill(10,150,75)
    ellipse(x, y, 100)
    // line()
    // x += dx
    // y += dy
}