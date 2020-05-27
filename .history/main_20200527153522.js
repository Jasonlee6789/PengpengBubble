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