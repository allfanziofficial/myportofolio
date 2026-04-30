document.addEventListener('DOMContentLoaded', function() {

    // =============================
    // 1. SIDEBAR NAVIGATION
    // =============================
    const sidebar = document.getElementById('nav-links');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay');

    function openSidebar() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    }

    function closeSidebar() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }

    if (hamburgerBtn && closeBtn && sidebar && overlay) {
        hamburgerBtn.addEventListener('click', openSidebar);
        closeBtn.addEventListener('click', closeSidebar);
        overlay.addEventListener('click', closeSidebar);
    }

    // =============================
    // 2. SMOOTH SCROLL
    // =============================
    const allAnchorLinks = document.querySelectorAll('a[href^="#"]');

    allAnchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);

            if (target) {
                closeSidebar();

                const offsetTop = target.offsetTop - 70;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // =============================
    // 3. ACTIVE NAV LINK
    // =============================
    const navLinks = document.querySelectorAll('nav .nav-links a');

    window.addEventListener('scroll', () => {
        let fromTop = window.scrollY + 80;

        navLinks.forEach(link => {
            let section = document.querySelector(link.getAttribute('href'));

            if (
                section &&
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    // =============================
    // 4. TYPED TEXT (AMAN)
    // =============================
    const subtitle = document.getElementById('animated-subtitle');

    if (subtitle) {
        new Typed('#animated-subtitle', {
            strings: ['PPLG Student', 'Gamer', 'Beginner Web Developer'],
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 2000,
            loop: true
        });
    }

});