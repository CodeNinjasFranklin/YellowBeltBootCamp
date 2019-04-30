var res = 20;
var WIDTH;
var HEIGHT;
var speed;
var snake = [];
var food;

function moveFood() {
    food = createVector(floor(random(0, WIDTH)), floor(random(0, HEIGHT)));
}

function setup() {
    createCanvas(600, 600);
    WIDTH = floor(width / res);
    HEIGHT = floor(height / res);
    speed = createVector(1, 0);
    snake.unshift(createVector(WIDTH / 2, HEIGHT / 2));
    frameRate(10);
    moveFood();
}

function draw() {
    scale(res);
    background(255);
    noStroke();
    fill(255, 0, 0);
    rect(food.x, food.y, 1, 1);
    fill(0);
    snake.push(createVector(snake[snake.length - 1].x + speed.x, snake[snake.length - 1].y + speed.y));
    if (snake[snake.length-1].x == food.x && snake[snake.length-1].y == food.y) {
        moveFood();
    } else {
        snake.shift();
    }
    //code we didn't finish
    if (snake[snake.length-1].x<0||snake[snake.length-1].x>WIDTH||snake[snake.length-1].y<0||snake[snake.length-1].y>HEIGHT)
    {
        snake = [];
        snake.push(createVector(WIDTH/2,HEIGHT/2));
    }
    //End of unfinished code
    for (let i = 0; i < snake.length; i++) {
        //unfinished code
        if(i!=snake.length-1&&snake[i].x==snake[snake.length-1].x&&snake[i].y==snake[snake.length-1].y)
        {
            snake = [];
            snake.push(createVector(WIDTH/2,HEIGHT/2));
            return;
        }
        //end of unfinished code
        rect(snake[i].x, snake[i].y, 1, 1);
    }
}

function keyPressed() {
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