const cardContainer = document.querySelector('.card-container');
const holo = document.querySelector('.holo');
const card = document.querySelector('.card');

cardContainer.addEventListener('mousemove', (e) => {
    const { offsetWidth: width, offsetHeight: height } = cardContainer;
    const { offsetX: x, offsetY: y } = e;
    const moveX = (x / width) - 0.5;
    const moveY = (y / height) - 0.5;

    // Apply rotation to the card
    card.style.transform = `rotateX(${moveY * 20}deg) rotateY(${moveX * 20}deg)`;

    // Adjust holo effect to match card's rotation
    holo.style.transform = `rotateX(${-moveY * 20}deg) rotateY(${-moveX * 20}deg)`;
    holo.style.backgroundPosition = `${e.clientX}px ${e.clientY}px`;

    // Update CSS variables for holo effect
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
});

cardContainer.addEventListener('mouseleave', () => {
    card.style.transform = ''; // Reset card rotation
    holo.style.transform = ''; // Reset holo effect
});
