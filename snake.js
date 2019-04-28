var res = 20;
var WIDTH;
var HEIGHT;
var speed;
var position;
function setup()
{
    createCanvas(600,600);
    WIDTH = floor(width/res);
    HEIGHT = floor(height/res);
    speed = createVector(1,0);
    position = createVector(WIDTH/2,HEIGHT/2);
    frameRate(10);
}
function draw()
{
    scale(res);
    background(255);
    fill(0);
    position.add(speed);
    rect(position.x,position.y,1,1);
}
function keyPressed()
{
    if(keyCode == LEFT_ARROW)
    {
        speed = createVector(-1,0);
    }
}