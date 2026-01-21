const images = [
    "../img/slide-1.png",
    "../img/slide-2.png",
    "../img/slide-3.png",
    "../img/slide-4.png",
    "../img/slide-5.png",
    "../img/slide-6.png",
    "../img/slide-7.png",
    "../img/slide-8.png",
    "../img/slide-9.png",
    "../img/slide-10.png",
];

let currentIndex = 0;
const sliderImage = document.getElementById("sliderImage");

function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    sliderImage.src = images[currentIndex];
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    sliderImage.src = images[currentIndex];
}
