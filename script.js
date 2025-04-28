const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Проверка сохраненной темы
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.add('fa-moon');
} else {
    body.classList.add('light-mode');
    icon.classList.add('fa-sun');
}

// Переключение темы
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light');
    }
});
let lastScrollTop = 0;
const floatingContacts = document.querySelector('.floating-contacts');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Скроллим вниз — прячем
        floatingContacts.style.transform = 'translateY(100px)';
        floatingContacts.style.opacity = '0';
    } else {
        // Скроллим вверх — показываем
        floatingContacts.style.transform = 'translateY(0)';
        floatingContacts.style.opacity = '1';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Для мобильных
});
const contactToggle = document.getElementById('contact-toggle');
const contactLinks = document.getElementById('contact-links');

contactToggle.addEventListener('click', () => {
    contactToggle.classList.toggle('active');
    contactLinks.classList.toggle('show');
});

// Скролл: прятать при прокрутке вниз
let lastScrollTop = 0;
const floatingContacts = document.querySelector('.floating-contacts');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        floatingContacts.style.transform = 'translateY(100px)';
        floatingContacts.style.opacity = '0';
    } else {
        floatingContacts.style.transform = 'translateY(0)';
        floatingContacts.style.opacity = '1';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
