// Lista de colores que se usarán para las cartas,cada color aparece 2 veces
const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colors.concat(colors));// Mezcla los colores y crea el mazo de cartas
let selectedCards = [];// Aquí se guardan las cartas que selecciona el jugador
let score = 0;
let timeLeft = 30;
let gameInterval;

const startbtn = document.getElementById('startbtn');// botón de iniciar
const gameContainer = document.getElementById('game-container');// zona donde van las cartas
const scoreElement = document.getElementById('score');// texto que muestra el puntaje
const timerElement = document.getElementById('timer');// texto que muestra el tiempo

// Crea las cartas y las muestra en la pantalla
function generateCards() {
    for (const color of cards) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = color;
        card.textContent = '?';
        gameContainer.appendChild(card);
    }
}
// Mezcla el orden de las cartas aleatoriamente
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
// Cuando el jugador hace click en una carta
function handleCardClick(event) {
    const card = event.target;
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return;
    }
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}
// Revisa si las dos cartas seleccionadas son iguales
function checkMatch() {
    const [card1, card2] = selectedCards;
    if (card1.dataset.color === card2.dataset.color) { // Si los colores son iguales
        card1.classList.add('matched');// las marca como encontradas
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else { // Si no son iguales, las oculta de nuevo
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectedCards = [];
}
// Esta funcion se ejecuta cuando se hace click en el boton iniciar"
function startGame() {
    let timeLeft = 30;
    startbtn.disabled = true;
    score = 0; // Reiniciar puntaje a cero
    scoreElement.textContent = `Score: ${score}`;
    startGameTimer(timeLeft);
    cards = shuffle(colors.concat(colors)); // Mezcla de nuevo las cartas y las reinicia
    selectedCards = [];
    gameContainer.innerHTML = '';
    generateCards();
    gameContainer.addEventListener('click', handleCardClick);
}
// funcion para manejar el cronometro del juego
function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(gameInterval);
            let timeLeft = 30;
            alert('¡Juego terminado!');
            startbtn.disabled = false;
        }
    }, 1000);
}

   startbtn.addEventListener('click', startGame);
