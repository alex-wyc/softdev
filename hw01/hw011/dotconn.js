console.log("dotconn.js loaded");

var c = document.getElementById('playground');
var ctx = c.getContext('2d');
ctx.fillStyle = '#FF0000';

// draws a circle, parameters are the context, center-x, center-y, and the
// radius
function draw_circle(ctx, x, y, r) {
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
}

c.addEventListener('click', function(e) {
    draw_circle(ctx, e.offsetX, e.offsetY, 10);
});

document.getElementById('clear').addEventListener('click', function(e) {
    e.preventDefault();
    ctx.clearRect(0, 0, 500, 500);
    ctx.beginPath();
});
