window.onscroll = toggleScrollButton;

let navButton = document.querySelector("#navButton"),
	navBar = document.querySelector("nav"),
	main = document.querySelector("main"),
	footer = document.querySelector("footer"),
	scrollButton = document.querySelector("#scrollButton");

/* Adds date to footer */
setInterval(function () {
	let date = new Date();
	document.querySelector("#date").innerHTML = addZero(date.getDate()) + "/" + addZero(date.getMonth() + 1) + "/" + addZero(date.getFullYear()) + "\t" + addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + ":" + addZero(date.getSeconds());

	/* Adds 0 (zero) if < 10 */
	function addZero(number) {
		if (number < 10) {
			return "0" + number;
		}
		return number.toString();
	}
}, 1000);

/* Adds events listener to toggle menu */
navButton.addEventListener("click", toggleMenu);
main.addEventListener("click", closeMenu);
footer.addEventListener("click", closeMenu);

/* Toggle menu */
function toggleMenu() {
	if (!navButton.firstElementChild.classList.contains("close")) {
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
	main.style.opacity = footer.style.opacity = "0.3";
	main.style.cursor = footer.style.cursor = "default";

	/* Adds close class */
	navButton.firstElementChild.classList.add("close");
	document.body.style.overflow = "hidden";

	/* Hide scrollButton */
	hideScrollButton();
}

/* Close menu */
function closeMenu() {
	/* Hides navbar */
	navBar.style.width = navButton.style.marginLeft = "0";

	/* Removes opacity effect */
	main.style.opacity = footer.style.opacity = 1;
	main.style.cursor = footer.style.cursor = "initial";

	/* Removes close class */
	navButton.firstElementChild.classList.remove("close");
	document.body.style.overflow = "initial";

	/* Tries to show scrollButton */
	toggleScrollButton();
}

scrollButton.addEventListener("click", scrollTop);

/* Scrolls page */
function scrollTop() {
	document.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

/* Check current page position and shows button if necessary */
function toggleScrollButton() {
	if ((document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) && (!navButton.firstElementChild.classList.contains("close"))) {
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