music1 = "";
music2 = "";

leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;

function preload(){
    music1 = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}
function setup(){
    
        canvas = createCanvas(500,500);
        canvas.center();
        video = createCapture(VIDEO);
        video.hide();
        posenet = ml5.poseNet(video,modelloaded);
        posenet.on('pose',gotposes);
    
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
    }
}


function modelloaded(){
    console.log("modelloaded");
}

function draw(){
    image(video,0,0,500,500);

}
