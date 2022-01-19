function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,110);

    poseNet=ml5.poseNet(video,modelLoaded)
}

function draw()
{
background('#ffb0ab')
}

function modelLoaded()
{
    console.log('Model is Loaded');
    poseNet.on('pose',gotPoses);
}

function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results)
}
}
