document.addEventListener("DOMContentLoaded", () => {
    const headerPlaceholder = document.getElementById("header-placeholder");
    const footerPlaceholder = document.getElementById("footer-placeholder");

    // Function to load HTML content
    const loadHTML = (url, element) => {
        fetch(url)
            .then(response => response.ok ? response.text() : Promise.reject('File not found'))
            .then(data => {
                element.innerHTML = data;
                if (element.id === 'header-placeholder') {
                    setActiveNavLink();
                    initMobileMenu();
                }
            })
            .catch(error => console.error(`Error loading ${url}:`, error));
    };

    // Function to set the active navigation link
    const setActiveNavLink = () => {
        const currentPage = window.location.pathname.split("/").pop();
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split("/").pop();
            if (linkPage === currentPage) {
                // Remove default styles
                link.classList.remove('text-slate-600', 'dark:text-slate-400', 'hover:text-[#003366]', 'dark:hover:text-blue-200');
                // Add active styles
                link.classList.add('active', 'text-[#001e40]', 'dark:text-white', 'font-semibold');
            }
        });
    };

    // Function to initialize the mobile menu toggle
    const initMobileMenu = () => {
        const toggleBtn = document.getElementById('mobile-menu-toggle');
        const navMenu = document.getElementById('nav-menu');
        const icon = toggleBtn?.querySelector('.material-symbols-outlined');

        if (toggleBtn && navMenu) {
            toggleBtn.addEventListener('click', () => {
                navMenu.classList.toggle('hidden');
                navMenu.classList.toggle('flex');
                if (icon) {
                    icon.textContent = navMenu.classList.contains('hidden') ? 'menu' : 'close';
                }
            });
        }
    };

    // Load header and footer
    if (headerPlaceholder) {
        loadHTML('header.html', headerPlaceholder);
    }
    if (footerPlaceholder) {
        loadHTML('footer.html', footerPlaceholder);
    }

    // Function to initialize scroll animations
    const initScrollAnimations = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
    };

    initScrollAnimations();
});