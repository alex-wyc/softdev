console.log("animate.js loaded");

var c = document.getElementById('playground');
var ctx = c.getContext('2d');
var r = 0, d = 1, requestID;
var logo = new Image();
var x = 250, y = 250, dx = Math.random(), dy = Math.random();
logo.src = 'dojocat.jpg'
ctx.fillStyle = '#FF0000';

// draws a circle, parameters are the context, center-x, center-y, and the
// radius
function draw_circle(ctx, x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

var frame_circ = function() {
    if (r == 0) {
        d = 1;
    }
    if (r == 250) {
        d = -1;
    }
    r = r + d;
    ctx.clearRect(0, 0, 500, 500);
    draw_circle(ctx, 250, 250, r);
    requestID = window.requestAnimationFrame(frame_circ);
}

var frame_bounce = function() {
    if (x <= 0 || x >= 500 - 100) {
        dx = -1 * dx;
    }
    if (y <= 0 || y >= 500 - 100) {
        dy = -1 * dy;
    }

    x = x + dx;
    y = y + dy;

    ctx.clearRect(0, 0, 500, 500);
    ctx.drawImage(logo, x, y, 100, 100);
    requestID = window.requestAnimationFrame(frame_bounce);
}

document.getElementById('start').addEventListener('click', frame_circ);
document.getElementById('bounce').addEventListener('click', frame_bounce);
document.getElementById('stop').addEventListener('click', function(e) {
    window.cancelAnimationFrame(requestID);
});
