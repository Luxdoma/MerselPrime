const body = document.body;

// === Тема ===
const themeToggle = document.getElementById('theme-toggle');
let icon = null;

if (themeToggle) {
    icon = themeToggle.querySelector('i');
    const savedTheme = localStorage.getItem('theme');

    const applyTheme = (theme) => {
        body.classList.remove('light-mode', 'dark-mode');
        if (icon) icon.classList.remove('fa-sun', 'fa-moon');

        if (theme === 'dark') {
            body.classList.add('dark-mode');
            if (icon) icon.classList.add('fa-moon');
        } else {
            body.classList.add('light-mode');
            if (icon) icon.classList.add('fa-sun');
        }

        localStorage.setItem('theme', theme);
    };

    applyTheme(savedTheme === 'dark' ? 'dark' : 'light');

    themeToggle.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-mode');
        applyTheme(isDark ? 'light' : 'dark');
    });
}

// === Контакты ===
const contactToggle = document.getElementById('contact-toggle');
const contactLinks = document.getElementById('contact-links');

if (contactToggle && contactLinks) {
    contactToggle.addEventListener('click', () => {
        contactToggle.classList.toggle('active');
        contactLinks.classList.toggle('show');
    });
}

// === Плавающие контакты при скролле ===
let lastScrollTop = 0;
const floatingContacts = document.querySelector('.floating-contacts');

if (floatingContacts) {
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            floatingContacts.style.transform = 'translateY(100px)';
            floatingContacts.style.opacity = '0';
        } else {
            floatingContacts.style.transform = 'translateY(0)';
            floatingContacts.style.opacity = '1';
        }

        lastScrollTop = Math.max(scrollTop, 0);
    });
}
