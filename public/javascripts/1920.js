var pixels = [];

var c = color(255, 30, 0);

function setup(){
    createCanvas(600,600);
    for(var i = 0; i < 20; i++) {
        pixels[i] = new Array(20);
        for(var j = 0; j < 20; j++) {
            c = color(random(100,255), 0, random(100,255));
            pixels[i][j] = new Pixel(i*30, j*30, c);
        }
    }
}

function draw(){
    background(200);
    for(var i = 0; i < pixels.length; i++) {
        for(var j = 0; j < pixels[i].length; j++) {
            pixels[i][j].show();
        }
    }
}

function mousePressed() {
    for(var i = 0; i < pixels.length; i++) {
        for(var j = 0; j < pixels[i].length; j++) {
            if (pixels[i][j].clicked(mouseX, mouseY)){
                console.log("Clicked");
                pixels[i][j].newColor();
            }
        }
    }
}


function keyPressed() {
    if(keyCode === UP_ARROW){
        translate(0, 15);
        console.log("up arrow");
    } else if (keyCode === DOWN_ARROW){
        translate(0, -15);
        console.log("down arrow");
    } else if (keyCode === RIGHT_ARROW){
        translate(15, 0);
        console.log("rigt arrow");
    } else if (keyCode === LEFT_ARROW){
        translate(-15, 0);
        console.log("left arrow");
    }
}