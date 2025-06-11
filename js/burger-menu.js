document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.querySelector('.burger-icon');
    const menu = document.querySelector('.menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const body = document.body;

    if (burgerIcon && menu && menuOverlay) {
        // Открытие/закрытие меню по клику на бургер
        burgerIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            menu.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
        });

        // Закрытие меню по клику на оверлей
        menuOverlay.addEventListener('click', function() {
            burgerIcon.classList.remove('active');
            menu.classList.remove('active');
            menuOverlay.classList.remove('active');
            body.style.overflow = '';
        });

        // Закрытие меню по клику на ссылку
        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                burgerIcon.classList.remove('active');
                menu.classList.remove('active');
                menuOverlay.classList.remove('active');
                body.style.overflow = '';
            });
        });

        // Закрытие меню по клику вне меню
        document.addEventListener('click', function(e) {
            if (!menu.contains(e.target) && !burgerIcon.contains(e.target) && menu.classList.contains('active')) {
                burgerIcon.classList.remove('active');
                menu.classList.remove('active');
                menuOverlay.classList.remove('active');
                body.style.overflow = '';
            }
        });
    }
}); 