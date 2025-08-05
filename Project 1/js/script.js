// Animate placeholder typing effect
const input = document.querySelector("main input");
const placeholderText = "Search for restaurant, cuisine or a dish";
let index = 0;

function typeEffect() {
    if (index <= placeholderText.length) {
        input.setAttribute("placeholder", placeholderText.slice(0, index) + "|");
        index++;
        setTimeout(typeEffect, 100);
    } else {
        input.setAttribute("placeholder", placeholderText);
    }
}

window.onload = () => {
    typeEffect();

    // Fade-in animation for main content
    const mainContent = document.querySelector("main");
    mainContent.style.opacity = 0;
    mainContent.style.transition = "opacity 1.5s ease";
    setTimeout(() => {
        mainContent.style.opacity = 1;
    }, 300);
};
