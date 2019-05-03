//Remember that the two slashes show that this is a comment wich does not change the code in any way.

//The canvas is 600 by 600.
//Snake uses all one size so it is much easier to work with only one unit so we will use a scale.
//res is our variable for the scale.
var res = 20;
//We are making WIDTH and HEIGHT in order to account for scaling.
var WIDTH;
var HEIGHT;
//Speed is the vector for the movement that the snake is making.
var speed;
//We are making a array in order to save the path that the snake is taking.
var snake = [];
//food is a vector for the location for the food in the scaled screen.
var food;

//We are making a function that does not get called by P5 but that we can call on our own.
//This function will move the location of the food.
function moveFood() {
    //we set food to a new vector.
    //we find a random number between 0 and WIDTH or HEIGHT
    //Remeber our all captital width and height is the scaled version to fit our screen.
    //we then floor those random values. Floor just rounds down wich makes it certain that we will have no decimals.
    food = createVector(floor(random(0, WIDTH)), floor(random(0, HEIGHT)));
}
//Setup is a P5 function that runs at the very beginning of the program.
function setup() {
    //We create a canvas of size 600 by 600. Remember that the canvas must be divisible by res.
    createCanvas(600, 600);
    //We set WIDTH and HEIGHT to width and height divided by the resolution.
    //We once again floor them in order to assure that they are not decimals
    WIDTH = floor(width / res);
    HEIGHT = floor(height / res);
    //Speed starts going to the right.
    speed = createVector(1, 0);
    //we start by putting a vector in the middle of the screen in the array for the snake.
    snake.unshift(createVector(WIDTH / 2, HEIGHT / 2));
    //The snake moves really fast so it is beneficial to decrease the framerate to set the games speed. 10 works well.
    frameRate(10);
    //we call our premade function to move the food to its random location.
    moveFood();
}
//draw is another function clled by P5. It is called for the drawing of every frame.
function draw() {
    //scale(res) sets the scale factor for the draing
    scale(res);
    //set the background color to white/reset it on each frame
    background(255);
    //drawing works by making the outline of the shape and then filling it.
    //when you scale it messes with the outline so we set it not to draw the outline with noStroke()
    noStroke();
    //set the fill color for the food
    //We pass it a Red,Green,Blue value so the food will be red.
    fill(255, 0, 0);
    //we then draw our food with width and height of one.
    //Since we are scaling this width and height eill be the res.
    rect(food.x, food.y, 1, 1);
    //set the fill back to black for the snake
    fill(0);
    //we are adding a link to the snake on the end of it.
    //We find the new value vy getting the last value in the array and adding the speed to it.
    //to get a value from and array you do the name[index]
    //the last index is the name.length-1 
    //we add the x to the x and y to y to get the new vector
    snake.push(createVector(snake[snake.length - 1].x + speed.x, snake[snake.length - 1].y + speed.y));
    //we check if the snakes last x is equal to the food x and the y equal to the y
    //&& means and so both have to be true
    if (snake[snake.length-1].x == food.x && snake[snake.length-1].y == food.y) {
        //if the snakes head is on the food it needs to move again
        moveFood();
    } else {
        //if the head is not on the food you must get rid of the first value in the array
        snake.shift();
    }
    //code we didn't finish
    //we check if the snake x has gone below 0 or over WIDTH or y has gone below 0 or above HEIGHT
    //|| means or so if any of the statements are true it will be true
    if (snake[snake.length-1].x<0||snake[snake.length-1].x>WIDTH||snake[snake.length-1].y<0||snake[snake.length-1].y>HEIGHT)
    {
        //if the snake goes on the outside of the board we reset.
        //first you must empty the snakes array
        snake = [];
        //you then add the initial middle value to the snake
        snake.push(createVector(WIDTH/2,HEIGHT/2));
    }
    //End of unfinished code
    //for is a form of loop. Loops are code that repeat a number of times.
    //for starts by setting the i to 0 and then checks if i is less then the length of the snake
    //if it is it runs the code in the curly brackets then i++ adds one to i and checks again
    for (let i = 0; i < snake.length; i++) {
        //unfinished code
        //check if the current part of the snake is on the head of the snake.
        //we use a similar stategy as the food
        //we also check to be sure i is not the head
        //once again && means all must be true
        if(i!=snake.length-1&&snake[i].x==snake[snake.length-1].x&&snake[i].y==snake[snake.length-1].y)
        {
            //we reset the board again by first emptying the snake array
            snake = [];
            //we then add the first value to the snake in the middle
            snake.push(createVector(WIDTH/2,HEIGHT/2));
            //we then use return which ends the current function earlier.
            //we do this so it will not continue drawing.
            return;
        }
        //end of unfinished code
        //we draw this section of the snake with size 1 by 1 which scales to res by res
        rect(snake[i].x, snake[i].y, 1, 1);
    }
}
//Another P5 function wich is called whenever a key is pressed
function keyPressed() {
    //we check if the keycode is each of the arrows and then change speed so that it will shange direction
    if (keyCode == LEFT_ARROW) {
        speed = createVector(-1, 0);
    }
    if (keyCode == RIGHT_ARROW) {
        speed = createVector(1, 0);
    }
    if (keyCode == UP_ARROW) {
        speed = createVector(0, -1);
    }
    if (keyCode == DOWN_ARROW) {
        speed = createVector(0, 1);
    }
}