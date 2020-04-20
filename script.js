let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

var A_x = 520;
var A_y = 10;
var B_x = 170;
var B_y = 750;
var C_x = 870;
var C_y = 750;

var mid_x = A_x, mid_y = A_y;

var iterations = 50;

function rnd() {
    return (Math.floor(Math.random() * 5) + 1);
}


function drawPt(R_x, R_y, color) {
    ctx.beginPath();
    ctx.arc(R_x, R_y, 2, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.fill();
    ctx.stroke();
}

function drawChaos() {

    // ctx.moveTo(A_x, A_y);
    // ctx.lineTo(A_x, B_y);
    // ctx.stroke();

    ctx.beginPath();
    ctx.arc(A_x, A_y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.strokeStyle = "red";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(B_x, B_y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.strokeStyle = "green";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(C_x, C_y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.strokeStyle = "blue";
    ctx.fill();
    ctx.stroke();


    for (var i = 0; i < iterations; i++) {
        var data = rnd();
        if (data == 1 || data == 2) {
            mid_x = Math.floor((mid_x + A_x) / 2);
            mid_y = Math.floor((mid_y + A_y) / 2);
            drawPt(mid_x, mid_y, "red");
        } else if (data == 3 || data == 4) {
            mid_x = Math.floor((mid_x + B_x) / 2);
            mid_y = Math.floor((mid_y + B_y) / 2);
            drawPt(mid_x, mid_y, "green");
        } else if (data == 5 || data == 6) {
            mid_x = Math.floor((mid_x + C_x) / 2);
            mid_y = Math.floor((mid_y + C_y) / 2);
            drawPt(mid_x, mid_y, "blue");
        }
    }

}

drawChaos();
var slider = document.getElementById("valueRange");
slider.oninput = function () {
    iterations = this.value;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawChaos();
}

