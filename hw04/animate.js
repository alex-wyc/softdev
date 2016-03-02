console.log('loaded svg.js');

var pic = document.getElementById('vimage');
var svgNSID = "http://www.w3.org/2000/svg";

var dr = 1;

var logo = new Image();
var x = 250, y = 250, dx = 3, dy = 2;
logo.src = 'dojocat.jpg'

var intervalID;

var grow = function() {
    // initial setup
    var c = document.createElementNS(svgNSID, "circle");
    c.setAttribute('r', 0);
    c.setAttribute('cx', 250);
    c.setAttribute('cy', 250);
    c.setAttribute('fill', 'red');
    c.setAttribute('stroke', 'black');

    // add to dom
    pic.appendChild(c);

    var animate = function() {
        // grab the element
        var c = document.getElementsByTagName("circle")[0];
        var radius = parseInt(c.getAttribute("r"));

        // growing or shrinking
        if (radius == 250) dr = -1;
        if (radius == 0) dr = 1;

        // change and implement
        radius = radius + dr;
        c.setAttribute("r", radius.toString());
    };

    intervalID = window.setInterval(animate, 16);
};

var bounce = function() {
    // initial setup
    var c = document.createElementNS(svgNSID, 'image');
    c.setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'dojocat.jpg');
    c.setAttribute('height', 100);
    c.setAttribute('width', 100);
    c.setAttribute('x', 10);
    c.setAttribute('y', 10);
    c.setAttribute('visibility', 'visible');

    // add to dom
    pic.appendChild(c);

    var move = function() {
        // grab the element
        var c = document.getElementsByTagName("image")[0];
        var x = parseInt(c.getAttribute('x'));
        var y = parseInt(c.getAttribute('y'));

        // change speed at boundary
        if (x >= 400 || x <= 0) dx = -dx;
        if (y >= 400 || y <= 0) dy = -dy;

        // change and implement
        x = x + dx;
        y = y + dy;
        c.setAttribute('x', x.toString());
        c.setAttribute('y', y.toString());
    };

    intervalID = window.setInterval(move, 16);
};

var stop = function() {
    window.clearInterval(intervalID);
};

document.getElementById("grow_circle").addEventListener("click", grow);
document.getElementById('bounce').addEventListener('click', bounce);
document.getElementById("stop").addEventListener("click", stop);
