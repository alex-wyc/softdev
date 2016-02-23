console.log("animate.js loaded");

var c = document.getElementById('playground');
var ctx = c.getContext('2d');
var r = 0, d = 1;
ctx.fillStyle = '#FF0000';

// draws a circle, parameters are the context, center-x, center-y, and the
// radius
function draw_circle(ctx, x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

var frame = function() {
    console.log(r);
    if (r == 0) {
        d = 1;
    }
    if (r == 250) {
        d = -1;
    }
    r = r + d;
    ctx.clearRect(0, 0, 500, 500);
    draw_circle(ctx, 250, 250, r);
    window.requestAnimationFrame(frame);
}

document.getElementById('start').addEventListener('click', frame);

