window.onscroll = topChecker;

var navButton = document.querySelector("#navButton");
var scrollButton = document.querySelector("#scrollButton");
var main = document.querySelector("main");
var footer = document.querySelector("footer");

/* Opens menu */
document.querySelector("#navButton").addEventListener("click", function () {
	if (!navButton.firstChild.classList.contains("close")) {
		document.querySelector("nav").style.width = navButton.style.marginLeft = "200px";
		main.style.filter = footer.style.filter = "blur(50px)";
		main.style.cursor = footer.style.cursor = "default";
		navButton.firstChild.classList.add("close");
		main.addEventListener("click", close);
		document.body.style.overflow = "hidden";
		scrollButton.style.opacity = 0;
	} else {
		close();
	}
});

/* Closes menu */
function close() {
	main.removeEventListener("click", close);
	main.style.filter = footer.style.filter = "blur(0)";
	main.style.cursor = footer.style.cursor = "initial";
	document.querySelector("nav").style.width = navButton.style.marginLeft = "0";
	navButton.firstChild.classList.remove("close");
	document.body.style.overflow = "initial";
	topChecker();
}

/* Shows/Hides scrollButton */
function topChecker() {
	if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) {
		scrollButton.style.opacity = 1;
		scrollButton.style.cursor = "pointer";
		scrollButton.addEventListener("click", scrollTop);
	} else {
		scrollButton.style.opacity = 0;
		scrollButton.style.cursor = "default";
		scrollButton.removeEventListener("click", scrollTop);
	}
}

/* Scrolls page */
function scrollTop() {
	document.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}