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