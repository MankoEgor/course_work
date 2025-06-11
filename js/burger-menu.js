document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.querySelector('.burger-icon');
    const menu = document.querySelector('.menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const body = document.body;

    if (burgerIcon && menu && menuOverlay) {
        burgerIcon.addEventListener('click', function() {
            this.classList.toggle('active');
            menu.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
        });

        menuOverlay.addEventListener('click', function() {
            burgerIcon.classList.remove('active');
            menu.classList.remove('active');
            menuOverlay.classList.remove('active');
            body.style.overflow = '';
        });

        // Закрытие меню при клике на ссылку
        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                burgerIcon.classList.remove('active');
                menu.classList.remove('active');
                menuOverlay.classList.remove('active');
                body.style.overflow = '';
            });
        });
    }
}); 