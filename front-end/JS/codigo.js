const carousel = document.getElementById('carousel');
const images = carousel.querySelectorAll('img');
let index = 0;

function autoSlide() {
  index++;
  
  // Se chegar na última imagem, volta para a primeira
  if (index >= images.length) {
    index = 0;
  }
  
  // Calcula o deslocamento
  const offset = -index * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

// Define o intervalo (3000ms = 3 segundos)
setInterval(autoSlide, 2000);