var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init()
{    
    setUpModeButtons();
    setupSquares();
    reset();
}

function setUpModeButtons()
{
    //Mode buttons event listeners
	for(var i=0;i<modeButtons.length;i++)
{
	modeButtons[i].addEventListener("click",function()
	{
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	})
}
}

function setupSquares()
{
	for(var i=0;i< squares.length;i++)
{

	//Add click listeners to squares
	squares[i].addEventListener("click",function()
	{
		//Grab color of clicked square
		var clickedColor = this.style.background;
		//Compare color to pickedColor
		if (clickedColor === pickedColor) 
		{
			changeColors(pickedColor);
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again!";
			h1.style.background = pickedColor;
		}
		else 
		{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}
}



function reset()
{
		//Generate all new colors
	colors = generateRandomColors(numSquares);
	//Pick a new random color from array
	pickedColor = pickColor();
	//Change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;

	resetButton.textContent = "New Colors";

	messageDisplay.textContent = "";
	//Change colors of squares
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
		
	}
	h1.style.background = "steelblue";
}


resetButton.addEventListener("click",function()
{
	reset();
})


function changeColors(color)
{
	//Loop through the squares array
	for(var i=0;i<squares.length;i++)
	{
		//Change each color to matching color
		squares[i].style.background = color;
	}
}

function pickColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	//Make an array
	var arr = []
	//repeat num times
	for(var i=0;i<num;i++)
	{
		//Get random color and push into arr
		arr.push(randomColor());
	}
	//Return that array
	return arr;
}

function randomColor()
{
	//Pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//Pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//Pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}