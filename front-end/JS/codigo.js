const carousel = document.getElementById("carousel");
const slides = document.querySelectorAll(".carousel-inner img");

let currentSlide = 0;
let autoPlay;

/* Atualiza a posição do carrossel */
function updateCarousel() {
    carousel.style.transform =
        `translateX(-${currentSlide * 100}%)`;
}

/* Próximo slide */
function nextSlide() {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    updateCarousel();
}

/* Slide anterior ou próximo */
function moveSlide(direction) {
    currentSlide =
        (currentSlide + direction + slides.length) %
        slides.length;

    updateCarousel();
}

/* Inicia autoplay */
function startAutoPlay() {
    autoPlay = setInterval(nextSlide, 3000);
}

/* Pausa autoplay */
function stopAutoPlay() {
    clearInterval(autoPlay);
}

/* Reinicia ao redimensionar a tela */
window.addEventListener("resize", () => {
    updateCarousel();
});

/* Suporte para toque (celular/tablet) */
let startX = 0;
let endX = 0;

carousel.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

carousel.addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX;
});

carousel.addEventListener("touchend", () => {
    const distance = startX - endX;

    if (distance > 50) {
        moveSlide(1); // deslizou para esquerda
    }

    if (distance < -50) {
        moveSlide(-1); // deslizou para direita
    }
});

/* Inicia */
updateCarousel();
startAutoPlay();
