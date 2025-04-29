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
