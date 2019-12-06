var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.querySelector(".random")

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


//random color
// function getNewColor(setGradient)
//       {
//         var symbols,color;
//         symbols ="0123456789ABCDEF";
        
// 		color = "#";
//         for(var i =0;i<6;i++)
//         {
// 		  color = color + symbols[Math.floor(Math.random() * 16)];
//         }
// 		document.body.style.background = color;
// 	  }

function randomHex() {
    var letters = "0123456789ABCDEF";
	var color = "#";
	while(color.length <= 6) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function setRandomGradient() {
    color1.value = randomHex();
    color2.value = randomHex();
    setGradient();
}


window.addEventListener('load', setRandomGradient);
randomBtn.addEventListener('click', setRandomGradient);
