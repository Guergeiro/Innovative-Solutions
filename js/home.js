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