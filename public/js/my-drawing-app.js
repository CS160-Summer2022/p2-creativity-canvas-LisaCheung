/* The code for our drawing application! 
Feel free to delete any/all of it and replace with your own functionality. */

var path;
var currentColor = 'black'
var currentWidth = 5

tool.onMouseDown = function (event) { //This code in this function is called whenever the mouse is clicked.
    path = new Path();     // Create a new path each time.
    path.add(event.point);
    path.strokeColor = currentColor;
    path.strokeWidth = currentWidth;
    console.log(event.point); //this commands log to the Console the coordinates of the mouse click. Feel free to delete it! 
}
tool.onMouseDrag = function (event) {
    path.add(event.point); //Add points to the path as the user drags their mouse.
}

$('#default').on('click', function (e) { //jquery click event code for our "pencil" button.
    currentColor = 'black';  //change the color to black
    currentWidth = 5;       //change the width to 5
})
$('#thick-green').on('click', function (e) { //jquery button click code for our "green paint" button.
    currentColor = 'green';
    currentWidth = 15;
})
$('#eraser').on('click', function (e) { //jquery button click code for our eraser button.
    currentColor = 'white';
    currentWidth = 20;
})

$('form').on(
    'submit', function (event) {
        event.preventDefault();
        var val = $("#quantity1").val();
        console.log("hello");
        console.log(val);
    }
)

var color1 = $("#colorpicker1").val();
var color2 = $("#colorpicker2").val();
var color3 = $("#colorpicker3").val();
var strokecol = $("#strokecolor").val();
$('#submitfilter').on('click', function (e) { //jquery button click code for our eraser button.
    var val = $("#colorpicker1").val();
    console.log("hello");
    console.log(val);
    color1 = $("#colorpicker1").val();
    color3 = $("#colorpicker2").val();
    color3 = $("#colorpicker3").val();
    strokecol = $("#strokecolor").val();
    console.log(strokecol);
})

var path;
$("#random-blob").on('click', function (e) {
    var rand_num_pts = 10; //get user input 
    var center = new Point(100, 100);
    path = new Path();
    path.strokeColor = 'black';//get user input 
    path.add(center);
    path.closed = true;
    var rotate;
    var rand_radius;
    for (var i = 0; i < rand_num_pts; i++) {
        rotate = (360 / rand_num_pts) * i;
        rand_radius = Math.floor(Math.random() * (100 - 50) + 50); //between 50 and 100 //get user input 
        path.add(center + new Point({
            length: rand_radius,
            angle: rotate
        }));
    }
    path.smooth();
});

$("#fill-gradient").on('click', function (e) {
    console.log("temp");
    if (Math.random() <= 0.5) {
        path.fillColor = {
            gradient: {
                stops: [[color1, Math.random()], [color2, Math.random()], [color3, Math.random()]],
            },
            origin: path.position,
            destination: path.bounds.rightCenter
        }
    }
    else {
        path.fillColor = {
            gradient: {
                stops: [[color1, Math.random()], [color2, Math.random()], [color3, Math.random()]],
                radial: true
            },
            origin: path.position,
            destination: path.bounds.rightCenter
        }
    }

});


