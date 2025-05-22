document.addEventListener("DOMContentLoaded", function () {
    const themeBtn = document.getElementById("themeBtn");
    const bookBtnHeader = document.getElementById("bookBtnHeader");
    const bookBtnHome = document.getElementById("bookBtnHome");
    const body = document.body;
    const nav = document.getElementById("mainNav");

    const homeSection = document.getElementById("home");
    const menuSection = document.getElementById("menu");

    const hexDivider = document.querySelector(".hex-divider");
    const hexDivider2 = document.querySelector(".hex-divider2");
    const hexDivider3 = document.querySelector(".hex-divider3");

   // const menuSection = document.getElementById("menu");

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

      // смена цвета контейнера home et menu
      if (darkMode) {
    homeSection.style.backgroundColor = "#2b2b2b";
  } else {
    homeSection.style.backgroundColor = "#f0f0f0";
  }

 if (darkMode) {
    menuSection.style.backgroundColor = "#2b2b2b";
  } else {
    menuSection.style.backgroundColor = "#f0f0f0";
  }

  /* скрытие разделителя в темной теме */

  if (darkMode) {
      hexDivider.style.display = 'none';
    } else {
      hexDivider.style.display = '';
    }

    if (darkMode) {
      hexDivider2.style.display = 'none';
    } else {
      hexDivider2.style.display = '';
    }

    if (darkMode) {
      hexDivider3.style.display = 'none';
    } else {
      hexDivider3.style.display = '';
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

/* секция меню*/
document.addEventListener("DOMContentLoaded", function () {
    const menuData = {
      starter: [
        { img: "./assets/img/menu/bruschetta.jpg", name: "Bruschetta", ingredients: "Tomate, ail, basilic", price: "$5.99" },
        { img: "./assets/img/menu/soupe_du_jour.jpeg", name: "Soupe du jour", ingredients: "Légumes frais", price: "$4.99" },
        { img: "./assets/img/menu/mini_quiche.jpg", name: "Mini quiche", ingredients: "Oeufs, fromage", price: "$6.50" }
      ],
      breakfast: [
        { img: "./assets/img/menu/croissant.jpg", name: "Croissant", ingredients: "Beurre, farine", price: "$2.99" },
        { img: "./assets/img/menu/omelette.jpg", name: "Omelette", ingredients: "Oeufs, jambon", price: "$5.99" },
        { img: "./assets/img/menu/pancakes.jpg", name: "Pancakes", ingredients: "Sirop, fruits", price: "$6.99" }
      ],
      lunch: [
        { img: "./assets/img/menu/burger.jpeg", name: "Burger", ingredients: "Boeuf, cheddar, salade", price: "$9.99" },
        { img: "./assets/img/menu/wrap-poulet.jpg", name: "Wrap Poulet", ingredients: "Poulet, légumes", price: "$8.50" },
        { img: "./assets/img/menu/salade_cesar.jpg", name: "Salade César", ingredients: "Poulet, parmesan, croûtons", price: "$7.99" }
      ],
      dinner: [
        { img: "./assets/img/menu/steak_frites.jpg", name: "Steak frites", ingredients: "Boeuf, pommes frites", price: "$14.99" },
        { img: "./assets/img/menu/saumon_grille.jpeg", name: "Saumon grillé", ingredients: "Citron, légumes", price: "$16.99" },
        { img: "./assets/img/menu/ratatouille.jpg", name: "Ratatouille", ingredients: "Aubergines, courgettes", price: "$11.50" }
      ]
    };

    const buttons = document.querySelectorAll(".menu-btn");
    const cardContainer = document.getElementById("menu-cards");

    function renderCards(category) {
      cardContainer.innerHTML = "";
      menuData[category].forEach(item => {
        const col = document.createElement("div");
        col.className = "col-md-4";
        col.innerHTML = `
          <div class="menu-card">
            <img src="${item.img}" alt="${item.name}">
            <h5 class="mt-3">${item.name}</h5>
            <p>${item.ingredients}</p>
            <p class="fw-bold">${item.price}</p>
          </div>
        `;
        cardContainer.appendChild(col);
      });
    }

    buttons.forEach(btn => {
      btn.addEventListener("click", function () {
        document.querySelector(".menu-btn.active").classList.remove("active");
        this.classList.add("active");
        const category = this.dataset.category;
        renderCards(category);
      });
    });

    renderCards("starter"); // по умолчанию
  });

  /* иконки  */
const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(container => {
  const icons = container.querySelector('.icons');

  container.addEventListener('mouseover', () => {
    icons.style.display = 'flex';
  });

  container.addEventListener('mouseout', () => {
    icons.style.display = 'none';
  });
});


/* галерея */

  const track = document.querySelector('.gallery-track');
  const leftBtn = document.getElementById('left-btn');
  const rightBtn = document.getElementById('right-btn');

  let currentIndex = 0;
  const visibleImages = 3;
  const imageWidth = 400;
  const totalImages = track.querySelectorAll('img').length;

  rightBtn.addEventListener('click', () => {
    if (currentIndex < totalImages - visibleImages) {
      currentIndex++;
      updateGallery();
    }
  });

  leftBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateGallery();
    }
  });

  function updateGallery() {
    const offset = -currentIndex * imageWidth;
    track.style.transform = `translateX(${offset}px)`;
  }



