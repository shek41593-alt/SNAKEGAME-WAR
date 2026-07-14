const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
const rows = canvas.width / box;

let snake = [{ x: 10 * box, y: 10 * box }];

let food = {
    x: Math.floor(Math.random() * rows) * box,
    y: Math.floor(Math.random() * rows) * box
};

let score = 0;
let direction = "RIGHT";

document.addEventListener("keydown", changeDirection);

function changeDirection(e) {
    if (e.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
    if (e.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
    if (e.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
    if (e.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
}

function collision(head, body) {
    for (let i = 0; i < body.length; i++) {
        if (head.x === body[i].x && head.y === body[i].y)
            return true;
    }
    return false;
}

function draw() {

    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    // Snake
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i === 0) ? "lime" : "green";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = "black";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    let headX = snake[0].x;
    let headY = snake[0].y;

    if (direction === "LEFT") headX -= box;
    if (direction === "RIGHT") headX += box;
    if (direction === "UP") headY -= box;
    if (direction === "DOWN") headY += box;

    // Eat food
    if (headX === food.x && headY === food.y) {

        score++;
        document.getElementById("score").innerText = score;

        food = {
            x: Math.floor(Math.random() * rows) * box,
            y: Math.floor(Math.random() * rows) * box
        };

    } else {

        snake.pop();

    }

    const newHead = {
        x: headX,
        y: headY
    };

    // Game Over
    if (
        headX < 0 ||
        headY < 0 ||
        headX >= canvas.width ||
        headY >= canvas.height ||
        collision(newHead, snake)
    ) {

        clearInterval(game);

        alert("Game Over!\nScore: " + score);

        return;
    }

    snake.unshift(newHead);
}

const game = setInterval(draw, 120);

// Restart Button
document.getElementById("restartBtn").onclick = function () {

    location.reload();

};
