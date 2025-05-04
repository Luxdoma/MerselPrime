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

const form = document.getElementById("booking-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  formData.append("_subject", "Новый запрос на бронирование");
  formData.append("_captcha", "false");

  try {
    const response = await fetch("https://formsubmit.co/haltravelk@gmail.com", {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      form.style.display = "none";           // Скрываем форму
      message.style.display = "block";       // Показываем сообщение
    } else {
      alert("Ошибка при отправке. Попробуйте позже.");
    }
  } catch (error) {
    alert("Ошибка соединения. Проверьте интернет и попробуйте снова.");
  }
});