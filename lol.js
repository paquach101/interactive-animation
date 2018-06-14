var thing = document.getElementById("thing");
var container = document.getElementById("container");
var mousecoords = document.getElementById("mousecoords");
var canvas = document.getElementById("Canvas");
var context = canvas.getContext("2d");

var radius = 30;
var x = canvas.width / 2;
var y = canvas.height - 30;

var radius1 = 30;
var x1 = canvas.width / 2;
var y1 = canvas.height - 30;

var dy = 3;
var dx = -2;
var dy1 = 3;
var dx1 = -2;

var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;

var dPressed = false;
var aPressed = false;
var wPressed = false;
var sPressed = false;

var speedx;
var speedy;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(k) {
    if (k.keyCode == 65) {
        aPressed = true;
    } else if (k.keyCode == 68) {
        dPressed = true;
    }

     if (k.keyCode == 87) {
        wPressed = true;
    } else if (k.keyCode == 83) {
        sPressed = true;
    }

    if (k.keyCode == 38) {
        upPressed = true;
    } else if (k.keyCode == 40) {
        downPressed = true;
    }

    if (k.keyCode == 39) {
        rightPressed = true;
    } else if (k.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(k) {
    if (k.keyCode == 65) {
        aPressed = false;
    } else if (k.keyCode == 68) {
        dPressed = false;
    }

    if (k.keyCode == 87) {
        wPressed = false;
    } else if (k.keyCode == 83) {
        sPressed = false;
    }

    if (k.keyCode == 38) {
        upPressed = false;
    } else if (k.keyCode == 40) {
        downPressed = false;
    }

    if (k.keyCode == 39) {
        rightPressed = false;
    } else if (k.keyCode == 37) {
        leftPressed = false;
    }
}

function paddle() {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
}

function paddle1() {
    context.beginPath();
    context.arc(x1, y1, radius1, 0, Math.PI * 2);
    context.fillStyle = "blue";
    context.fill();
    context.closePath();
}

container.addEventListener("mousemove", printMouseCoords);

function printMouseCoords(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    mousecoords.textContent = mouseX + ", " + mouseY;
}

container.addEventListener("mousemove", moveThing);

function moveThing(event) {
    var xPosition = event.clientX - container.getBoundingClientRect().left - (thing.clientWidth / 2);
    var yPosition = event.clientY - container.getBoundingClientRect().top - (thing.clientHeight / 2);
    // in case of a wide border, the boarder-width needs to be considered in the formula above
    thing.style.left = xPosition + "px";
    thing.style.top = yPosition + "px";
}

window.addEventListener("keypress", changeThingColor);

function changeThingColor(event) {
    if (event.key === "b") {
        thing.style.background = "blue";
    } else if (event.key === "o") {
        thing.style.background = "orange";
    } else {
        thing.style.background = "green";
    }
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    paddle();
    paddle1();

      if (x > canvas.width + radius || x < 0) {
        dx = -dx;
    } else if (y > canvas.height + radius || y < 0) {
        dy = -dy;
    }
      if (x1 > canvas.width + radius1 || x1 < 0) {
        dx1 = -dx1;
    } else if (y > canvas.height + radius1 || y1 < 0) {
        dy1 = -dy1;
    }

    if (dPressed && x < canvas.width - radius) {
        x += 10;
    } else if (aPressed && x > 0) {
        x -= 10;
    }
    if (sPressed && y < canvas.height - radius) {
        y += 10;
    } else if (wPressed && y > 0) {
        y -= 10;
    }

     if (rightPressed && x1 < canvas.width - radius1) {
        x1 += 10;
    } else if (leftPressed && x1 > 0) {
        x1 -= 10;
    }
    if (downPressed && y1 < canvas.height - radius1) {
        y1 += 10;
    } else if (upPressed && y1 > 0) {
        y1 -= 10;
    }
    x += dx;
    y += dy;

    x1 += dx1;
    y1 += dy1;
}

setInterval(draw, 10);
