//Code after two slashes like this is a comment. Computers completely ignore comments.
//Comments are used to show thoughts/notes in code and to make it more readable;

//The next three lines declare variables names pos,speed and gravity
var pos; 
var speed;
var gravity;
//the function setup is called by javascript at the beginning of the program.
function setup()
{
    createCanvas(600,400);//Creates a HTML canvas of size 600 by 400
    //The next three lines create vectors<x,y> and set them to the three variables already made
    pos = createVector(0, height);
    speed = createVector(25,-25);
    gravity = createVector(0,1);
}
//The draw function is another function made by p5 that is called once per a frame.
function draw()
{
    //Background is used inorder to set the color of the background but also to clear it for each drawing of the canvas.
    background(255);
    //the next two lines represent the physics of projectile motion. Acceleration is added to the velocity and velocity is added to the position.
    speed.add(gravity);
    pos.add(speed);
    //The next line draws and ellipse with its center at the x and y position and its 50 pixels wide and high.
    ellipse(pos.x,pos.y,50);
}