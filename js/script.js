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


// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    // Get current scroll position
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    // If our current scroll position enters the space where the section is on screen, add .active class to corresponding nav link, else remove it
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(".navbar a[href*=" + sectionId + "]").classList.add("active");
    } else {
        document.querySelector(".navbar a[href*=" + sectionId + "]").classList.remove("active");
    }
    });
}
