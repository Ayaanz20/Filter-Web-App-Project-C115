noseX=0;
noseY=0;
function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('posenet is initialized');
}
function gotPoses(results)
{
    
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
    }
}
function preload(){

}
function draw(){
image(video,0,0,500,500);
}
function take_snapshot(){
    save('myfilterimage.png');
}