var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

// for (var i = 0; i < 4; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     ctx.fillStyle = "lightgrey";
//     ctx.fillRect(x, y, 100, 100);
// }

// ctx.fillStyle = "black";
// ctx.fillRect(700, 300, 200, 200);

// Line

// ctx.beginPath();
// ctx.moveTo(130, 700);
// ctx.lineTo(450, 170);
// ctx.lineTo(800, 600);
// ctx.lineTo(1100, 600);
// ctx.lineTo(1250, 450);
// ctx.strokeStyle = "orangered";
// ctx.stroke();

// Arc / Circle

function Circle(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;

    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.fillStyle = this.color
    }

    this.update = function() {
        if (this.x + this.radius > innerWidth) {
            this.dx = -this.dx;
        } else if (this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight) {
            this.dy = -this.dy;
        } else if (this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}



var circleArray = [];

for (var i = 0; i < 350; i++) {
    var radius = (Math.random() * ((40 - 5) + 1)) + 5
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 4;
    var dy = (Math.random() - 0.5) * 4;
    function getRandomColour(){
        var red = Math.floor(Math.random()* 255);
        var green = Math.floor(Math.random() * 255);
        var blue = Math.floor(Math.random() * 255);
      
        return "rgb("+red+","+green+"," +blue+" )";  
    }

    circleArray.push(new Circle(x, y, dx, dy, radius, getRandomColour()));
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();
