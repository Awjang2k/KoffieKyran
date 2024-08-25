// Get the hamburger menu button, navigation menu, and close button
const hamburgerButton = document.querySelector('.hamburger-menu-button');
const navMenu = document.querySelector('.nav-menu');
const closeButton = document.querySelector('.close-btn');

// Function to toggle the navigation menu
function toggleMenu() {
  navMenu.classList.toggle('active');
}

// Function to close the menu when clicking outside
function closeMenu(event) {
  // Check if the click is outside the navMenu and hamburgerButton
  if (!navMenu.contains(event.target) && !hamburgerButton.contains(event.target)) {
    navMenu.classList.remove('active');
  }
}

// Add event listener to the hamburger button
hamburgerButton.addEventListener('click', toggleMenu);

// Add event listener to close button inside the navMenu
closeButton.addEventListener('click', toggleMenu);

// Add event listener to the whole document to detect clicks outside the menu
document.addEventListener('click', closeMenu);

// tombol testimoni
const testimonialWrapper = document.querySelector('.testimonial-wrapper');
const testimonials = document.querySelectorAll('.testimonial-wrapper > figure');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

function updateSliderPosition() {
    const offset = -currentIndex * testimonials[0].clientWidth;
    testimonialWrapper.style.transform = `translateX(${offset}px)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= testimonials.length) {
        currentIndex = 0;  // Kembali ke testimonial pertama
    }
    updateSliderPosition();
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = testimonials.length - 1;  // Kembali ke testimonial terakhir
    }
    updateSliderPosition();
});

// Initial position
updateSliderPosition();
