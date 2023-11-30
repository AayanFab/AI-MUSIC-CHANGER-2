songL = "";
songR = "";
function preload(){
    songL = loadSound("musicL.mp3");
    songR = loadSound("musicR.mp3");
}
function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 600, 500);
}