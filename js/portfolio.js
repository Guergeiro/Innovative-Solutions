const modal = document.querySelector(".modal");

document.querySelector("#btn-modal1").addEventListener("click", function () {
	document.querySelector("*").style.overflowY = "hidden";
	modal.style.overflow = "auto";
	modal.style.display = "block";
	modal.querySelector(".modal-header").querySelector("h1").innerHTML = "Travel With Us";
	modal.querySelector(".modal-body").querySelector("#author").innerHTML = "Diogo Falcão";
	modal.querySelector(".modal-body").querySelector("#target").innerHTML = "Everyone that is searching for a place to travel, and needs to know all the best places in the city to go.";
	modal.querySelector(".modal-body").querySelector("#objectives").innerHTML = "We want to build a website that can help a client that don't know nothing about a city to find the places of interest in it, and with our help build a itenerary for the city that he wants to visit.";
	modal.querySelector(".modal-body").querySelector("#colors").innerHTML = "Contrast between dark-colors and white text-color.";
	modal.querySelector(".modal-body").querySelector("#page").src = "https://diogofalken.github.io/Travel-With-Us/";
});

document.querySelector("#btn-modal2").addEventListener("click", function () {
	document.querySelector("*").style.overflowY = "hidden";
	modal.style.overflow = "auto";
	modal.style.display = "block";
	modal.querySelector(".modal-header").querySelector("h1").innerHTML = "Dream Play";
	modal.querySelector(".modal-body").querySelector("#author").innerHTML = "José Monteiro & Stephane Monteiro";
	modal.querySelector(".modal-body").querySelector("#target").innerHTML = "Anyone who is a music lover and/or has curiosity for music.";
	modal.querySelector(".modal-body").querySelector("#objectives").innerHTML = "Build a website that allows the user to be themselves and you find everything from top songs to top artists";
	modal.querySelector(".modal-body").querySelector("#colors").innerHTML = "Dark blue + black and white as text-color to give it contrast";
	modal.querySelector(".modal-body").querySelector("#page").src = "https://stephs10.github.io/DreamPlay/ ";
});

document.querySelector(".fa-times").addEventListener("click", function () {
	modal.style.display = "none";
	document.querySelector("*").style.overflowY = "auto";
});

window.addEventListener("click", function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
		document.querySelector("*").style.overflowY = "auto";
	}
});
