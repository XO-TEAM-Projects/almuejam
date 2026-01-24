const images = [
    "../assets/img/slide-1.png",
    "../assets/img/slide-2.png",
    "../assets/img/slide-3.png",
    "../assets/img/slide-4.png",
    "../assets/img/slide-5.png",
    "../assets/img/slide-6.png",
    "../assets/img/slide-7.png",
    "../assets/img/slide-8.png",
    "../assets/img/slide-9.png",
    "../assets/img/slide-10.png",
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
