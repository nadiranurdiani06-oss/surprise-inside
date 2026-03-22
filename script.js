// ==================== PRANK SECTION ==================== 

const prankSection = document.getElementById('pranking-section');
const mainContent = document.getElementById('main-content');
const prankBtn = document.getElementById('prank-btn');
const backgroundMusic = document.getElementById('background-music');

prankBtn.addEventListener('click', () => {
    // Putar musik
    backgroundMusic.play().catch(error => {
        console.log('Audio autoplay blocked by browser');
    });

    // Slide up animation
    prankSection.classList.add('hide-prank');
    mainContent.classList.remove('hidden');
});

// ==================== TYPEWRITER EFFECT ==================== 

const loveMessage = `Persahabatan adalah ketika kita bisa tertawa sampai perut sakit karena hal-hal kecil yang tidak masuk akal. Persahabatan adalah ketika kita saling tahu aib tapi tetap mau bersama. Dari SD sampai sekarang, kita sudah lewat banyak cerita - ceria, sedih, dan penuh tawa. Kalian adalah bagian yang tak terpisahkan dari hidup aku. Selamanya, kalian adalah sahabat terbaik aku. Cinta kalian.`;

const typewriterText = document.getElementById('typewriter-text');

function typeWriter(element, text, speed = 50) {
    let index = 0;
    element.textContent = '';

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Intersection Observer untuk Typewriter
const loveLanguageSection = document.getElementById('love-language');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            typeWriter(typewriterText, loveMessage, 30);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

observer.observe(loveLanguageSection);

// ==================== VIRTUAL HUG - FALLING HEARTS ==================== 

const hugBtn = document.getElementById('hug-btn');
const heartsContainer = document.getElementById('hearts-container');

function createFallingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('falling-heart');
    heart.textContent = '❤️';

    const randomLeft = Math.random() * 100;
    heart.style.left = randomLeft + '%';

    const randomDelay = Math.random() * 0.3;
    heart.style.animationDelay = randomDelay + 's';

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3300);
}

hugBtn.addEventListener('click', () => {
    const hugDuration = 4000;
    const heartInterval = setInterval(() => {
        createFallingHeart();
    }, 100);

    setTimeout(() => {
        clearInterval(heartInterval);
    }, hugDuration);

    hugBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        hugBtn.style.transform = 'scale(1)';
    }, 200);
});

// ==================== CONSOLE MESSAGE ==================== 

console.log('%c🎉 Kado Digital dari Nadira!', 'color: #ff6b6b; font-size: 20px; font-weight: bold;');
console.log('%cUntuk sahabat-sahabat terbaik 💖', 'color: #a29bfe; font-size: 14px;');