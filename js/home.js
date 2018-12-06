/* Slideshow */
let slides = document.querySelectorAll(".slides"),
    leftArrow = document.querySelector("#arrow-left"),
    rightArrow = document.querySelector("#arrow-right"),
    index = 0;

/* Adds events listener to buttons */
leftArrow.addEventListener("click", function () {
    slides[index].style.right = "0";
    slides[index].style.left = "auto";
    slides[index].style.width = "0";
    slides[index].firstElementChild.style.opacity = 0;
    if (index == 0) {
        index = slides.length;
    }
    slideLeft();
});

rightArrow.addEventListener("click", function () {
    slides[index].style.left = "0";
    slides[index].style.right = "auto";
    slides[index].style.width = "0";
    slides[index].firstElementChild.style.opacity = 0;
    if (index == slides.length - 1) {
        index = -1;
    }
    slideRight();
});

/* Slide left */
function slideLeft() {
    slides[--index].style.left = "0";
    slides[index].style.right = "auto";
    slides[index].style.width = "100%";
    slides[index].firstElementChild.style.opacity = 1;
}

/* Slide right */
function slideRight() {
    slides[++index].style.right = "0";
    slides[index].style.left = "auto";
    slides[index].style.width = "100%";
    slides[index].firstElementChild.style.opacity = 1;
}

/* Auto slides right */
setInterval(function () {
    slides[index].style.left = "0";
    slides[index].style.right = "auto";
    slides[index].style.width = "0";
    slides[index].firstElementChild.style.opacity = 0;
    if (index == slides.length - 1) {
        index = -1;
    }
    slideRight();
}, 5000);

/* Reset Slider */
function resetSlider() {
    slides.forEach(slide => {
        slide.style.width = "0";
        slide.firstElementChild.style.opacity = 0;
    });
}

/* Start Slides */
resetSlider();
slides[index].style.width = "100%";
slides[index].firstElementChild.style.opacity = 1;
slides[index].style.display = "block";