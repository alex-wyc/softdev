console.log('canvas.js loaded');

var c = document.getElementById('ftb2maga');
var ctx = c.getContext('2d');

ctx.strokeStyle = '#000000';
ctx.fillStyle = '#F0000F';
//ctx.strokeRect(0,0,100,100);

// sets the font for the context, in the format of <size> <font family>
ctx.font = "30px Arial"

// draws the specified text onto the canvas, arguments are <text>, <x-cor>,
// <y-cor>
ctx.fillText("Hello World", 190, 30);

// marks the beginning of a path
ctx.beginPath();

// moves the cursor to location (x, y) as supplied
// nlogo pen up --> fd
ctx.moveTo(0, 0);

// moves the cursor to location (x, y) while ``drawing''
// nlogo pen down --> fd
ctx.lineTo(50, 50);
ctx.lineTo(50, 30);
ctx.lineTo(100, 100);
ctx.lineTo(100, 0);

// moves the cursor back to the ``origin''
ctx.closePath();

// make the edges ``drew'' using lineTo actually visible with stokeStyle
ctx.stroke();

// fill in the polygon or whatever created by the path
ctx.fill();

// draws an arc on the canvas with the arguments <center-x>, <center-y>,
// <radius>, <initial angle>, <final angle>
// moves the cursor to the beginning position and draws in the specified
// position.
ctx.arc(70,70,10, 0, 2 * Math.PI);
ctx.stroke();
