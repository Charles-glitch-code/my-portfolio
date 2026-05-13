// ===============================
// PROFESSIONAL IT PORTFOLIO JS
// ===============================


// SMOOTH SCROLLING NAVIGATION

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const targetId = this.getAttribute('href');

        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: 'smooth'
        });

    });

});


// ===============================
// ACTIVE NAVIGATION LINK
// ===============================

const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }

    });

    navItems.forEach(link => {

        link.classList.remove('active');

        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }

    });

});


// ===============================
// SCROLL ANIMATION
// ===============================

const cards = document.querySelectorAll(
    '.skill-card, .project-card, .certificate-card'
);

cards.forEach(card => {

    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.7s ease';

});


function revealCards() {

    cards.forEach(card => {

        const windowHeight = window.innerHeight;
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < windowHeight - 100) {

            card.style.opacity = '1';
            card.style.transform = 'translateY(0px)';

        }

    });

}

window.addEventListener('scroll', revealCards);

revealCards();


// ===============================
// TYPING EFFECT
// ===============================

const typingText = document.querySelector('.hero-text h3');

const textArray = [
    'IT Student',
    'Web Developer',
    'Frontend Developer',
    'Programmer',
    'UI Designer'
];

let textIndex = 0;
let charIndex = 0;

function typeEffect() {

    if (charIndex < textArray[textIndex].length) {

        typingText.textContent += textArray[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    }
    else {

        setTimeout(eraseEffect, 1500);

    }

}


function eraseEffect() {

    if (charIndex > 0) {

        typingText.textContent =
            textArray[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    }
    else {

        textIndex++;

        if (textIndex >= textArray.length) {
            textIndex = 0;
        }

        setTimeout(typeEffect, 500);

    }

}

typingText.textContent = '';

typeEffect();


// ===============================
// BACK TO TOP BUTTON
// ===============================

// CREATE BUTTON

const topButton = document.createElement('button');

topButton.innerHTML = '↑';

document.body.appendChild(topButton);


// BUTTON STYLE

topButton.style.position = 'fixed';
topButton.style.bottom = '30px';
topButton.style.right = '30px';
topButton.style.padding = '12px 18px';
topButton.style.fontSize = '22px';
topButton.style.border = 'none';
topButton.style.borderRadius = '50%';
topButton.style.background = '#38bdf8';
topButton.style.color = 'white';
topButton.style.cursor = 'pointer';
topButton.style.display = 'none';
topButton.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
topButton.style.zIndex = '1000';
topButton.style.transition = '0.3s';


// SHOW BUTTON WHEN SCROLLING

window.addEventListener('scroll', () => {

    if (window.scrollY > 300) {

        topButton.style.display = 'block';

    }
    else {

        topButton.style.display = 'none';

    }

});


// SCROLL TO TOP

topButton.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});


// ===============================
// HOVER EFFECT FOR BUTTON
// ===============================

topButton.addEventListener('mouseenter', () => {

    topButton.style.transform = 'scale(1.1)';

});

topButton.addEventListener('mouseleave', () => {

    topButton.style.transform = 'scale(1)';

});


// ===============================
// LOADING ANIMATION
// ===============================

window.addEventListener('load', () => {

    document.body.style.opacity = '1';

});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 1s ease';


// ===============================
// CONSOLE MESSAGE
// ===============================

console.log('Professional IT Portfolio Loaded Successfully!');