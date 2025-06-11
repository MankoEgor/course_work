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

    // Scroll event handler for nav backgrounds
    function handleNavScroll(navElement, scrollThreshold = 205) {
        if (!navElement) return;
        
        const winScroll = window.scrollY || window.pageYOffset;
        if (winScroll > scrollThreshold) {
            navElement.classList.add('scrolled');
        } else {
            navElement.classList.remove('scrolled');
        }
    }

    const navGod = document.querySelector('.god_nav');
    const navJesus = document.querySelector('.jesus_nav');
    const backToTop = document.querySelector('.back-to-top');

    [navGod, navJesus].forEach(nav => {
        if (nav) {
            handleNavScroll(nav);
            window.addEventListener('scroll', () => handleNavScroll(nav));
        }
    });

    // Back to top functionality
    if (backToTop) {
        function toggleBackToTop() {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }

        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        window.addEventListener('scroll', toggleBackToTop);
        toggleBackToTop(); // Initial check
    }

    // Scroll effects
    const nav = document.querySelector('.spirit_nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');

    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.card, .timeline-event');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
});