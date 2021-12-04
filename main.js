noseX=0;
noseY=0;
function preload(){
clownnose= loadImage('https://i.postimg.cc/Ssjpf7m4/m.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    
}
function modelLoaded(){
    console.log("Posenet is initialized");
}
function draw(){
    image(video,0,0,300,300);
   image(clownnose,noseX,noseY,35,35);
}
function take_snapshot(){
    save('moochad.png');
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x-10;
        noseY=results[0].pose.nose.y-10;
        console.log("x coordinate of nose"+noseX);
        console.log("y coordinate of nose"+noseY);
    }
}
