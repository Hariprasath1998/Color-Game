var numSquares = 6;
var colors = [];
var pickedColor;

var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square")
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var modeButtons = document.querySelectorAll(".mode");
var resetButton = document.getElementById("reset");

resetButton.addEventListener("click", function() {
    reset();
})

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            //toggle the selected class between the difficulty modes
            if (!(this.classList.contains("selected"))) {
                for (var j = 0; j < modeButtons.length; j++) {
                    modeButtons[j].classList.toggle("selected");
                }
            }
            //Setting the number of squares based on difficulty
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        })
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        //Add Event
        squares[i].addEventListener("click", function() {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare it to picked color
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?"
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again!";
            }
        })
    }
}

function reset() {
    //reset the play button
    resetButton.textContent = "New Colors";
    //reset try again button
    messageDisplay.textContent = "";
    //random colors in array
    colors = generateRandomColors(numSquares);
    //Pick a color
    pickedColor = pickColor();
    //Change the text content on top
    colorDisplay.textContent = pickedColor;

    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }
    h1.style.backgroundColor = "steelblue"
}



function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    //Pick Red 0-255
    var r = Math.floor(Math.random() * 256);
    //Pick Green
    var g = Math.floor(Math.random() * 256);
    //Pick Blue
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}