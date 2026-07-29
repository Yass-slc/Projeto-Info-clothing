const display = document.getElementById('result');

// Adiciona os números e operadores na tela
function appendValue(value) {
    // Evita múltiplos pontos seguidos
    if (value === '.' && display.value.includes('.')) {
        // Permite ponto se houver um operador antes (para o segundo número)
        const lastChar = display.value.slice(-1);
        if(!isNaN(lastChar)) return; 
    }
    
    if (display.value === 'Erro') {
        display.value = '';
    }
    
    display.value += value;
}

// Limpa toda a tela (Botão C)
function clearDisplay() {
    display.value = '';
}

// Apaga apenas o último caractere (Botão ⌫)
function deleteLast() {
    if (display.value === 'Erro') {
        display.value = '';
    } else {
        display.value = display.value.slice(0, -1);
    }
}

// Realiza o cálculo matemático
function calculate() {
    try {
        // Substitui símbolos visualmente amigáveis por operadores válidos do JS
        let expression = display.value;
        
        // Se a tela estiver vazia, não faz nada
        if (expression.trim() === '') return;

        // Executa a conta matemática de forma simples
        let result = Function(`"use strict"; return (${expression})`)();
        
        // Tratamento para divisões por zero ou resultados inválidos
        if (result === Infinity || isNaN(result)) {
            display.value = 'Erro';
        } else {
            // Arredonda para evitar problemas de ponto flutuante do JS (ex: 0.1 + 0.2)
            display.value = Number(result.toFixed(8)).toString();
        }
    } catch (error) {
        display.value = 'Erro';
    }
}

const calculator = document.getElementById("myCalculator");
const header = document.getElementById("calculatorHeader");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

// Eventos para Computador (Mouse)
header.addEventListener("mousedown", startDrag);
document.addEventListener("mousemove", drag);
document.addEventListener("mouseup", stopDrag);

// Eventos para Celular/Tablet (Touch)
header.addEventListener("touchstart", startDrag, { passive: false });
document.addEventListener("touchmove", drag, { passive: false });
document.addEventListener("touchend", stopDrag);

function startDrag(e) {
    isDragging = true;

    // Identifica se é touch ou clique de mouse
    const clientX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === "touchstart" ? e.touches[0].clientY : e.clientY;

    // Calcula a distância do clique em relação às bordas da própria calculadora
    offsetX = clientX - calculator.getBoundingClientRect().left;
    offsetY = clientY - calculator.getBoundingClientRect().top;
}

function drag(e) {
    if (!isDragging) return;

    // Previne que a tela do celular role junto enquanto você arrasta a calculadora
    if (e.cancelable) e.preventDefault();

    const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === "touchmove" ? e.touches[0].clientY : e.clientY;

    // Calcula a nova posição baseada no movimento
    let newX = clientX - offsetX;
    let newY = clientY - offsetY;

    // Aplica a nova posição na tela
    calculator.style.left = `${newX}px`;
    calculator.style.top = `${newY}px`;
    
    // Anula as propriedades iniciais do CSS para não dar conflito
    calculator.style.right = 'auto'; 
}

function stopDrag() {
    isDragging = false;
}