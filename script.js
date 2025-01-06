// Smooth scroll for navigation links
document.querySelectorAll('.nav-list a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll to Projects button in Hero section
const scrollBtn = document.getElementById('scroll-btn');
scrollBtn.addEventListener('click', () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

// Dynamic typing effect in Hero section
const heroTitle = document.querySelector('.hero-title');
const phrases = ["Desenvolvedor Full Stack", "Apaixonado por Tecnologia", "Criador de Soluções Interativas"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
        heroTitle.textContent = currentPhrase.slice(0, charIndex--);
    } else {
        heroTitle.textContent = currentPhrase.slice(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, 500); // Pause before typing next phrase
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}
typeEffect();

// Handle contact form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Simulate form submission success
        alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
        contactForm.reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

// Intersection Observer for animations on scroll
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.1,
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});
