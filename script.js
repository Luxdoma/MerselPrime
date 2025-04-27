// Переключение темы
const toggleBtn = document.getElementById('theme-toggle');

// Проверка сохраненной темы из localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
}

toggleBtn.addEventListener('click', () => {
    // Переключаем класс темной темы
    document.body.classList.toggle('dark');

    // Сохраняем выбранную тему в localStorage
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
