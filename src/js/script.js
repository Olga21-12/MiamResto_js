document.addEventListener("DOMContentLoaded", function () {
    const themeBtn = document.getElementById("themeBtn");
    const bookBtnHeader = document.getElementById("bookBtnHeader");
    const bookBtnHome = document.getElementById("bookBtnHome");
    const body = document.body;
    const nav = document.getElementById("mainNav");
    const homeSection = document.getElementById("home");
    const hexDivider = document.querySelector(".hex-divider");

    let darkMode = false;

    themeBtn.addEventListener("click", function () {
      darkMode = !darkMode;

      // Переключение фона и текста на всём body
      body.classList.toggle("bg-light", !darkMode);
      body.classList.toggle("text-dark", !darkMode);
      body.classList.toggle("bg-dark", darkMode);
      body.classList.toggle("text-light", darkMode);

      // Меняем классы навигации
      nav.classList.toggle("bg-light", !darkMode);
      nav.classList.toggle("navbar-light", !darkMode);
      nav.classList.toggle("bg-dark", darkMode);
      nav.classList.toggle("navbar-dark", darkMode);

      // смена цвета контейнера home
      if (darkMode) {
    homeSection.style.backgroundColor = "#2b2b2b";
  } else {
    homeSection.style.backgroundColor = "#f0f0f0";
  }

  /* скрытие разделителя в темной теме */

  if (darkMode) {
      hexDivider.style.display = 'none';
    } else {
      hexDivider.style.display = '';
    }

      // Меняем стили кнопок
      themeBtn.textContent = darkMode ? "Changer en clair" : "Changer de theme";
    themeBtn.classList.toggle("btn-outline-light", darkMode);
    themeBtn.classList.toggle("btn-outline-secondary", !darkMode);

    [bookBtnHeader, bookBtnHome].forEach((btn) => {
      if (btn) {
        btn.classList.toggle("btn-outline-light", darkMode);
        btn.classList.toggle("btn-outline-secondary", !darkMode);
      }
    });
  });

  // Модальное окно
  const modalEl = document.getElementById("customModal");
  if (modalEl) {
    const modal = new bootstrap.Modal(modalEl);

    [bookBtnHeader, bookBtnHome].forEach((btn) => {
      if (btn) {
        btn.addEventListener("click", () => modal.show());
      }
    });
  }
});



