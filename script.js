const phrases = [
    'Venha saborear o melhor açaí!',
    'Estamos no iFood!',
    'Açaí e CIA',
    'Siga nosso Insta!'
];

const subtitleElement = document.querySelector('.subtitle');

let currentIndex = 0;

function changePhrase() {
    subtitleElement.classList.add('fade-out');

    setTimeout(() => {
        subtitleElement.innerHTML = `${phrases[currentIndex]}`;

        subtitleElement.classList.remove('fade-out');

        currentIndex = (currentIndex + 1) % phrases.length;
    }, 500);
}

setInterval(changePhrase, 2300);

const phrases1 = [
    'Açaí Nordestino',
    'Melhor da Cidade',
    'no iFood!',
    'Irresistível',
    'Açai e CIA'
];

const h1Element = document.querySelector('h1');

let currentPhraseIndex = 0;
let currentCharIndex = 0;
let typingSpeed = 100;

function typeWriterEffect() {

    const currentPhrase = phrases1[currentPhraseIndex];
    const staticText = 'Bom Dêmáx - ';
    const typewriterText = currentPhrase.slice(0, currentCharIndex);

    h1Element.innerHTML = `<span class="static-text">${staticText}</span><span class="typewriter-text">${typewriterText}</span>`;
    if (currentCharIndex < currentPhrase.length) {
        currentCharIndex++;
        setTimeout(typeWriterEffect, typingSpeed); // Continue typing
    } else {

        setTimeout(() => {
            currentCharIndex = 0;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases1.length;
            typeWriterEffect();
        }, 1500);
    }
}
typeWriterEffect();
