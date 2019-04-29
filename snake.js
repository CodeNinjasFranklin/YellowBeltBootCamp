var res = 20;
var WIDTH;
var HEIGHT;
var speed;
var position;
var food;
function moveFood()
{
    food = createVector(random(0,WIDTH),random(0,HEIGHT));
}
function setup()
{
    createCanvas(600,600);
    WIDTH = floor(width/res);
    HEIGHT = floor(height/res);
    speed = createVector(1,0);
    position = createVector(WIDTH/2,HEIGHT/2);
    frameRate(10);
    moveFood();
}
function draw()
{
    scale(res);
    background(255);
    noStroke();
    fill(255,0,0);
    rect(food.x,food.y,1,1);
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
    if (keyCode == RIGHT_ARROW)
    {
        speed = createVector(1,0);
    }
    if(keyCode == UP_ARROW)
    {
        speed = createVector(0,-1);
    }
    if (keyCode == DOWN_ARROW)
    {
        speed = createVector(0,1);
    }
}