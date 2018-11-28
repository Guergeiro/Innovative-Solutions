var navButton = document.querySelector("#navButton");
var fontawesome = document.querySelector("#fontawesome");
var main = document.querySelector("main");

navButton.addEventListener("click", function () {
	if (fontawesome.classList.contains("fa-bars")) {
		document.querySelector("nav").style.width = navButton.style.marginLeft = "200px";
		main.style.filter = "blur(50px)";
		main.style.cursor = "default";
		fontawesome.classList.remove("fa-bars");
		fontawesome.classList.add("fa-times");
		main.addEventListener("click", close);
	} else {
		close();
	}
});

function close() {
	main.removeEventListener("click", close);
	main.style.filter = "blur(0)";
	main.style.cursor = "initial";
	document.querySelector("nav").style.width = navButton.style.marginLeft = "0";
	fontawesome.classList.remove("fa-times");
	fontawesome.classList.add("fa-bars");
}