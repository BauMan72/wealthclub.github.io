// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll-triggered Fade-in and Fade-out Animation (Only for Main Page)
if (document.querySelector('#main-wrapper')) {
    window.addEventListener('scroll', function () {
        const fadeElements = document.querySelectorAll('.fade-in-on-scroll');

        fadeElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            const elementBottomPosition = element.getBoundingClientRect().bottom;

            // If the element is visible on the screen, add the "visible" class to fade in
            if (elementPosition < windowHeight - 100 && elementBottomPosition > 100) {
                element.classList.add('visible');
            } 
            // If the element is no longer visible, remove the "visible" class to fade out
            else {
                element.classList.remove('visible');
            }
        });
    });
}

// Load animations for the landing page on page load
window.addEventListener('load', function () {
    const fadeInElements = document.querySelectorAll('.fade-in');

    fadeInElements.forEach(element => {
        element.classList.add('visible');
    });
});
