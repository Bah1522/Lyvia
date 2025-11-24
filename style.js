
script.js
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', function() {
            // Alterna a classe 'active' no botão e no menu
            hamburgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Alterna a classe 'no-scroll' no body para evitar rolagem quando o menu está aberto
            document.body.classList.toggle('no-scroll');
        });

        // Fecha o menu ao clicar em um link (para navegação suave)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }
});
