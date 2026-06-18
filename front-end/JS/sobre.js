// Seleciona a fita do carrossel
const track = document.querySelector('.carousel-track');
// Seleciona o primeiro grupo de imagens
const initialGroup = document.querySelector('.carousel-group');

// Clona o grupo de imagens
const clonedGroup = initialGroup.cloneNode(true);
clonedGroup.setAttribute('aria-hidden', 'true');

// Adiciona o clone logo após o original dentro da fita
track.appendChild(clonedGroup);