var noseX,noseY,rightWristX,leftWristX,difference;

function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotposes);
}

function modelLoaded(){
    console.log("Model is loaded");
}

function gotposes(results){
if(results.length>0){
    console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
rightWristX=results[0].pose.rightWrist.x;
leftWristX=results[0].pose.leftWrist.x;
console.log("noseX="+noseX+"noseY="+noseY);
console.log("rightwristX="+rightWristX+"leftwristX="+leftWristX);
}
}

function draw(){
    background("#969A97");
    difference=floor(leftWristX-rightWristX);
    fill("#34a2eb");
    stroke("#34a2eb")
   text("Roshan",noseX,noseY);
  textSize(difference);
    textAlign(CENTER);
}

