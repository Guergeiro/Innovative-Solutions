var navButton = document.querySelector("#navButton");
var fontawesome = document.querySelector("#fontawesome");

navButton.addEventListener("click", function () {
	if (fontawesome.classList.contains("fa-bars")) {
		document.querySelector("nav").style.width = navButton.style.marginLeft = "200px";
		document.querySelector("main").style.opacity = 0.1;
		fontawesome.classList.remove("fa-bars");
		fontawesome.classList.add("fa-times");
	} else {
		document.querySelector("nav").style.width = navButton.style.marginLeft = "0";
		document.querySelector("main").style.opacity = 1;
		fontawesome.classList.remove("fa-times");
		fontawesome.classList.add("fa-bars");
	}
});