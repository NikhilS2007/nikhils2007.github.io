const words = ["Coding.", "Sports.", "Nature.", "Learning.", "Machine Learning.", "Research."];
let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;
const typedTextElement = document.querySelector('.typed-text');
const cursorElement = document.querySelector('.cursor');

function typeEffect() {
    const fullWord = words[wordIndex];

    if (isDeleting) {
        currentWord = fullWord.substring(0, letterIndex--);
    } else {
        currentWord = fullWord.substring(0, letterIndex++);
    }

    typedTextElement.textContent = currentWord;

    if (!isDeleting && letterIndex === fullWord.length) {
        setTimeout(() => isDeleting = true, 1000); 
    }

    if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; 
    }

    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);


const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(".navbar a[href*=" + sectionId + "]").classList.add("active");
    } else {
        document.querySelector(".navbar a[href*=" + sectionId + "]").classList.remove("active");
    }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');

    menuButton.addEventListener('click', () => {
        navbar.classList.toggle('active');
        const icon = menuButton.querySelector('i');
        icon.classList.toggle('bx-x'); 
        icon.classList.toggle('bx-menu'); 
    });

    // Close navbar when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                const icon = menuButton.querySelector('i');
                icon.classList.remove('bx-x');
                icon.classList.add('bx-menu');
            }
        });
    });
});