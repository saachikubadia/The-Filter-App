function preload(){
}

function setup() {
canvas = createCanvas(640, 480);
canvas.position(110, 250);
video = createCapture(VIDEO);
video.hide();

tintc= "";
}

function draw(){
image(video, 0, 0, 640, 480);
tint(tintc);
}

function filter_tint(){
    tintc=document.getElementById("color_name").value;
}

function take_snapshot(){
    save('saachi.png');
}