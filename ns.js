document.addEventListener("DOMContentLoaded", () => {
    /* NAVBAR SMOOTH SCROLL */
    const navLinks = document.querySelectorAll(".nav-link");
    const navToggle = document.querySelector(".nav-toggle");
    const navLinksContainer = document.querySelector(".nav-links");

    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = document.getElementById(link.getAttribute("href").substring(1));
            target.scrollIntoView({ behavior: "smooth" });
            navLinksContainer.classList.remove("active");
            navToggle.classList.remove("active");
        });
    });

    /* HERO BUTTON */
    document.querySelector(".hero-btn").addEventListener("click", () => {
        document.getElementById("kontakt").scrollIntoView({ behavior: "smooth" });
    });

    /* ANIMATIONS */
    const faders = document.querySelectorAll(".fade-in, .slide-up");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("appear");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    faders.forEach(el => observer.observe(el));

    /* PARALLAX */
    const layers = {
        bg: document.querySelector(".hero-layer.bg"),
        mid: document.querySelector(".hero-layer.mid"),
        front: document.querySelector(".hero-layer.front")
    };
    window.addEventListener("scroll", () => {
        if(window.innerWidth > 768){
            const y = window.scrollY;
            if(layers.bg) layers.bg.style.transform = `translateY(${y*0.2}px)`;
            if(layers.mid) layers.mid.style.transform = `translateY(${y*0.4}px)`;
            if(layers.front) layers.front.style.transform = `translateY(${y*0.6}px)`;
        }
    });

    /* FAQ TOGGLE */
    const faqButtons = document.querySelectorAll(".faq-question");
    faqButtons.forEach(button => {
        button.addEventListener("click", () => {
            faqButtons.forEach(btn => {
                if(btn !== button){
                    const ans = btn.nextElementSibling;
                    ans.style.maxHeight = null;
                    btn.querySelector(".faq-icon").textContent = "+";
                }
            });
            const answer = button.nextElementSibling;
            const icon = button.querySelector(".faq-icon");
            if(answer.style.maxHeight){
                answer.style.maxHeight = null;
                icon.textContent = "+";
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.textContent = "-";
            }
        });
    });

    /* MOBILE MENU */
    navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("active");
        navLinksContainer.classList.toggle("active");
    });
});
