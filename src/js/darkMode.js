document.addEventListener("DOMContentLoaded", function () {
    const themeBtn = document.getElementById("themeBtn");
    const bookBtnHeader = document.getElementById("bookBtnHeader");
    const bookBtnHome = document.getElementById("bookBtnHome");
    const body = document.body;
    const nav = document.getElementById("mainNav");

    const homeSection = document.getElementById("home");
    const menuSection = document.getElementById("menu");
    const darkSections = [homeSection, menuSection];

    const hexDividers = document.querySelectorAll(".hex-divider-common");

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

  /* смена цвета контейнера home et menu
  if (darkMode) {
    homeSection.style.backgroundColor = "#2b2b2b";
  } else {
    homeSection.style.backgroundColor = "#f0f0f0";
  }

 if (darkMode) {
    menuSection.style.backgroundColor = "#2b2b2b";
  } else {
    menuSection.style.backgroundColor = "#f0f0f0";
  }*/

  darkSections.forEach(section => {
      section.style.backgroundColor = darkMode ? "#2b2b2b" : "#f0f0f0";
    });

  /* скрытие разделителя в темной теме */

  /*if (darkMode) {
  hexDivider.classList.add('divider-dark');
  hexDivider.classList.remove('divider-light');
} else {
  hexDivider.classList.add('divider-light');
  hexDivider.classList.remove('divider-dark');
}

if (darkMode) {
  hexDivider2.classList.add('divider-dark');
  hexDivider2.classList.remove('divider-light');
} else {
  hexDivider2.classList.add('divider-light');
  hexDivider2.classList.remove('divider-dark');
}

if (darkMode) {
  hexDivider3.classList.add('divider-dark');
  hexDivider3.classList.remove('divider-light');
} else {
  hexDivider3.classList.add('divider-light');
  hexDivider3.classList.remove('divider-dark');
}*/

// Изменение стиля у всех разделителей
    hexDividers.forEach(divider => {
      divider.classList.toggle("divider-dark", darkMode);
      divider.classList.toggle("divider-light", !darkMode);
    });

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
});






