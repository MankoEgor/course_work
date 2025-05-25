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
        
        // Для навигационного меню
        if (winScroll > 205) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    const nav_j = document.querySelector('.jesus_nav');
    function checkScroll() {
        const winScroll = window.scrollY || window.pageYOffset;
        
        // Для навигационного меню
        if (winScroll > 205) {
            nav_j.classList.add('scrolled');
        } else {
            nav_j.classList.remove('scrolled');
        }
    }

    // Initial check and event listener
    checkScroll();
    window.addEventListener('scroll', checkScroll);

    // Back to top click handler (если кнопка существует)
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});