var navButton = document.querySelector("#navButton");
var main = document.querySelector("main");

document.querySelector("#navButton").addEventListener("click", function () {
	if (!navButton.firstChild.classList.contains("close")) {
		document.querySelector("nav").style.width = navButton.style.marginLeft = "200px";
		main.style.filter = "blur(50px)";
		main.style.cursor = "default";
		navButton.firstChild.classList.add("close");
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
	navButton.firstChild.classList.remove("close");
}

var scrollButton = document.querySelector("#scrollButton");

window.onscroll = function () {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		scrollButton.style.opacity = 1;
	} else {
		scrollButton.style.opacity = 0;
	}
}

scrollButton.addEventListener("click", function () {
	document.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});