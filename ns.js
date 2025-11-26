// ===== HERO FADE-IN =====
window.addEventListener("load", () => {
    document.querySelector(".hero-content").classList.add("appear");
});

// ===== STAGGERED CARD ANIMATIONS =====
const cards = document.querySelectorAll(".card");
cards.forEach((card, index) => {
    setTimeout(() => {
        card.classList.add("appear");
    }, index * 150);
});

// ===== NAVBAR SHRINK + ACTIVE LINK =====
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }

    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute("href"));
        const rect = section.getBoundingClientRect();
        if(rect.top <= 100 && rect.bottom >= 100){
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

// ===== FAQ ACCORDION =====
const faqButtons = document.querySelectorAll(".faq-question");
faqButtons.forEach(button => {
    button.addEventListener("click", () => {
        faqButtons.forEach(btn => {
            if (btn !== button) {
                btn.parentElement.classList.remove("open");
                btn.nextElementSibling.style.maxHeight = null;
            }
        });

        const answer = button.nextElementSibling;
        const parent = button.parentElement;
        if(parent.classList.contains("open")){
            answer.style.maxHeight = null;
            parent.classList.remove("open");
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            parent.classList.add("open");
        }
    });
});

// ===== MOBILE HAMBURGER MENU =====
const toggle = document.querySelector(".nav-toggle");
const navLinksContainer = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    navLinksContainer.classList.toggle("active");
});
