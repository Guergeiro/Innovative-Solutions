/* Typer */
const typetext = [
	"Dream",
	"Future"
];

let typetext_index = 0,
	i = 0;

document.querySelector(".type-bar").style.opacity = 1;

setInterval(function () {
	if (document.querySelector(".type-bar").style.opacity == 1) {
		document.querySelector(".type-bar").style.opacity = 0;
	} else {
		document.querySelector(".type-bar").style.opacity = 1;
	}
}, 500);

function nextWord() {
	typetext_index++;
	if (typetext_index == typetext.length) {
		typetext_index = 0;
	}
	setTimeout(typeWriter, 500);
}

function deleteWriter() {
	if (i != 0) {
		document.querySelector("#typer").innerHTML = typetext[typetext_index].slice(0, --i);
		setTimeout(deleteWriter, 50);
	} else {
		setTimeout(nextWord, 500);
	}
}

function typeWriter() {
	if (i < typetext[typetext_index].length) {
		document.querySelector("#typer").innerHTML += typetext[typetext_index].charAt(i++);
		setTimeout(typeWriter, Math.floor((Math.random() * 100) + 50));
	} else {
		setTimeout(deleteWriter, 1000);
	}
}

window.addEventListener("load", typeWriter);

/* Slideshow */
let slides = document.querySelectorAll(".slides"),
	leftArrow = document.querySelector("#arrow-left"),
	rightArrow = document.querySelector("#arrow-right"),
	index = 0;

/* Adds events listener to buttons */
leftArrow.addEventListener("click", function () {
	slides[index].style.opacity = 0;
	slides[index].firstElementChild.style.opacity = 0;
	if (index == 0) {
		index = slides.length;
	}
	slideLeft();
});

rightArrow.addEventListener("click", function () {
	slides[index].style.opacity = 0;
	slides[index].firstElementChild.style.opacity = 0;
	if (index == slides.length - 1) {
		index = -1;
	}
	slideRight();
});

/* Slide left */
function slideLeft() {
	slides[--index].style.opacity = 1;
	slides[index].firstElementChild.style.opacity = 1;
}

/* Slide right */
function slideRight() {
	slides[++index].style.opacity = 1;
	slides[index].firstElementChild.style.opacity = 1;
}

/* Auto slides right */
setInterval(function () {
	slides[index].style.opacity = 0;
	slides[index].firstElementChild.style.opacity = 0;
	if (index == slides.length - 1) {
		index = -1;
	}
	slideRight();
}, 5000);

/* Reset Slider */
function resetSlider() {
	slides.forEach(slide => {
		slide.style.opacity = 0;
		slide.style.width = "100%";
		slide.firstElementChild.style.opacity = 0;
	});
}

/* Start Slides */
resetSlider();
slides[index].style.opacity = 1;
slides[index].firstElementChild.style.opacity = 1;