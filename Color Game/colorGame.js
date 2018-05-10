var numSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	
	setupModeButtons();
	setupSquares();
	reset();
}

// mode button event listeners
function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
			modeButtons[i].addEventListener("click", function(){
				modeButtons[0].classList.remove("selected");
				modeButtons[1].classList.remove("selected");
				this.classList.add("selected");

				// ternary operator
				this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
				
				// conditional version of what ternary operator does
				
				// if(this.textContent == "Easy"){
				// 	numSquares = 3;
				// } else {
				// 	numSquares = 6;
				// }

			reset();
		});
	}
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++){
		//add click listener to squares
		squares[i].addEventListener("click", function(){
			// grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Agian?";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Agian";
			}
		});
	}

	reset();
}

function reset(){
	// generate all new colors
	colors = generateColor(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match pickColor
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	
	// change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"; 
			squares[i].style.backgroundColor = colors[i];
		} else {
				squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function(){
	reset();
});

colorDisplay.textContent = pickedColor;



function changeColors(color){
	// loop through all the squares
	for (var i = 0; i < squares.length; i++){
	//change each color to match the given color 
		squares[i].style.backgroundColor = color;
	}

}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateColor(num){
	// make an array
	var arr = [];
	// repeat num times
	for(var i = 0; i < num; i++){
		// get random color and push into arr
		arr.push(randomColor());
	}
	// retun that array
	return arr;
}

function randomColor(){
	// pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}