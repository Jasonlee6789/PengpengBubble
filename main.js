// 设置画布

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// 生成随机数的函数

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}


function Ball(x, y, velX, velY, color, size) {
    //x 和 y 坐标 —— 小球在屏幕上最开始时候的坐标。坐标的范围从 0 （左上角）到浏览器视口的宽和高（右下角）。
    this.x = x;
    this.y = y;
    //水平和竖直速度（velX 和 velY）—— 我们会给每个小球一个水平和竖直速度。实际上，当我们让这些球开始运动时候，每过一帧都会给小球的 x 和 y 坐标加一次这些值。
    this.velX = velX;
    this.velY = velY;
    //每一个小球会有自己的颜色。
    this.color = color;
    //每一个小球会有自己的大小 — 也就是小球的半径，以像素为单位。
    this.size = size;
}


Ball.prototype.draw = function () {
    //首先，我们使用 beginPath() 来声明我们现在要开始在纸上画一个图形了。
    ctx.beginPath();
    //然后，我们使用 fillStyle 来定义这个图形的颜色 — 这个值正是小球的颜色属性。
    ctx.fillStyle = this.color;
    //接下来，我们使用 arc() 方法来在纸上画出一段圆弧。
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    //最后，我们使用 fill() 方法，也就是声明我们结束了以 beginPath() 开始的绘画，并且使用我们之前设置的颜色进行填充。 
    ctx.fill();
}


// 更新小球的数据
Ball.prototype.update = function () {
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
        //检查小球的 x 坐标是否大于画布的宽度（小球会从右边缘离开）。
    }
    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
        //检查小球的 x 坐标是否小于0（小球会从左边缘离开）。
    }
    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
        //检查小球的 y 坐标是否大于画布的高度（小球会从下边缘离开）。
    }
    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
        //检查小球的 y 坐标是否小于0（小球会从上边缘离开）。
    }
    this.x += this.velX;
    this.y += this.velY;
    //最后两行，我将 velX 的值加到 x 的坐标上，将 velY 的值加到 y 坐标上 —— 每次调用这个方法的时候小球就移动这么多。
}


// 添加碰撞检测
Ball.prototype.collisionDetect = function () {
    for (let j = 0; j < balls.length; j++) {
        if (this !== balls[j]) {
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].color = this.color = randomColor();
            }

        }
    }
}



//让球动起来 
let balls = [];

while (balls.length < 25) {
    let size = random(10, 20);
    let ball = new Ball(
        // 为避免绘制错误，球至少离画布边缘球本身一倍宽度的距离
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        randomColor(),
        size

    );
    balls.push(ball);
}


function loop() {
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
    }

    requestAnimationFrame(loop);
}

loop();