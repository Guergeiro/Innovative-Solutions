window.onscroll = toggleScrollButton;

var navButton = document.querySelector("#navButton");
var navBar = document.querySelector("nav");

var main = document.querySelector("main");
var footer = document.querySelector("footer");

/* Adds events listener to toggle menu */
navButton.addEventListener("click", toggleMenu);
main.addEventListener("click", closeMenu);
footer.addEventListener("click", closeMenu);

/* Toggle menu */
function toggleMenu() {
	if (!navButton.firstChild.classList.contains("close")) {
		showMenu();
	} else {
		closeMenu();
	}
}

/* Show menu */
function showMenu() {
	/* Shows navbar */
	navBar.style.width = navButton.style.marginLeft = "200px";

	/* Adds blur effect */
	main.style.filter = footer.style.filter = "blur(50px)";
	main.style.cursor = footer.style.cursor = "default";

	/* Adds close class */
	navButton.firstChild.classList.add("close");
	document.body.style.overflow = "hidden";

	/* Hide scrollButton */
	hideScrollButton();
}

/* Close menu */
function closeMenu() {
	/* Hides navbar */
	navBar.style.width = navButton.style.marginLeft = "0";

	/* Removes blur effect */
	main.style.filter = footer.style.filter = "blur(0)";
	main.style.cursor = footer.style.cursor = "initial";

	/* Removes close class */
	navButton.firstChild.classList.remove("close");
	document.body.style.overflow = "initial";

	/* Tries to show scrollButton */
	toggleScrollButton();
}


var scrollButton = document.querySelector("#scrollButton");

scrollButton.addEventListener("click", scrollTop);

/* Scrolls page */
function scrollTop() {
	document.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

/* Check current page position and shows button if necessary */
function toggleScrollButton() {
	if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) {
		showScrollButton();
	} else {
		hideScrollButton();
	}
}

/* Show scrollButton */
function showScrollButton() {
	scrollButton.style.opacity = 1;
	scrollButton.style.pointerEvents = "initial";
}

/* Hide scrollButton */
function hideScrollButton() {
	scrollButton.style.opacity = 0;
	scrollButton.style.pointerEvents = "none";
}