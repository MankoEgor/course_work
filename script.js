document.addEventListener('DOMContentLoaded', () => {
    // Loading animation
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '<div class="loading__spinner"></div>';
    document.body.appendChild(loading);

    // Hide loading after content is loaded
    window.addEventListener('load', () => {
        loading.classList.add('hidden');
        setTimeout(() => {
            loading.remove();
        }, 500);
    });

    // Scroll event handler for nav background
    const nav = document.querySelector('.god_nav');
    
    function checkScroll() {
        const winScroll = window.scrollY || window.pageYOffset;
        
        if (winScroll > 205) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        if (winScroll > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }

    // Initial check and event listener
    checkScroll();
    window.addEventListener('scroll', checkScroll);

    // Back to top click handler
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add animation classes to elements
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const elements = section.querySelectorAll('h2, p, .feature-card, .personality-card');
        elements.forEach((element, index) => {
            if (index % 2 === 0) {
                element.classList.add('slide-in-left');
            } else {
                element.classList.add('slide-in-right');
            }
        });
    });

    // Check if elements are in viewport
    function checkElementsInView() {
        const elements = document.querySelectorAll('.slide-in-left, .slide-in-right, .fade-in, .scale-in');
        
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isInView = (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.bottom >= 0
            );

            if (isInView) {
                element.classList.add('visible');
            }
        });
    }

    // Initial check for elements in viewport
    checkElementsInView();

    // Add hover effects to cards
    const cards = document.querySelectorAll('.feature-card, .personality-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});