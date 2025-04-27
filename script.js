const toggleBtn = document.getElementById('theme-toggle');

// Проверка на наличие кнопки и установка сохраненной темы при загрузке
if (toggleBtn) {
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        document.body.classList.add('dark');
    }

    // Обработчик клика по кнопке
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        
        // Сохранение выбранной темы в localStorage
        const newTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
    });
}
