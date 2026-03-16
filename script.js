// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Simple alert for style demonstration - in production, this would open a mobile nav
    if(navLinks.classList.contains('active')) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#0f172a';
        navLinks.style.padding = '2rem';
    } else {
        navLinks.style.display = 'none';
    }
});

// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Initial call to reveal elements on load
reveal();

// Form Submission (Mock)
const contactForm = document.getElementById('p-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    const originalText = btn.innerText;
    
    btn.innerText = "Transmitting...";
    btn.disabled = true;

    setTimeout(() => {
        alert("Bismillah! Message received, Mejba. Logic processed successfully.");
        contactForm.reset();
        btn.innerText = originalText;
        btn.disabled = false;
    }, 1500);
});

// Smooth scroll highlight logic can be added here
