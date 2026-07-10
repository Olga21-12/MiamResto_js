document.addEventListener("DOMContentLoaded", function () {
    const menuData = {
      starter: [
        { img: "./img/menu/bruschetta.jpg", name: "Bruschetta", ingredients: "Tomate, ail, basilic", price: "$5.99" },
        { img: "./img/menu/soupe_du_jour.jpeg", name: "Soupe du jour", ingredients: "Légumes frais", price: "$4.99" },
        { img: "./img/menu/mini_quiche.jpg", name: "Mini quiche", ingredients: "Oeufs, fromage", price: "$6.50" }
      ],
      breakfast: [
        { img: "./img/menu/croissant.jpg", name: "Croissant", ingredients: "Beurre, farine", price: "$2.99" },
        { img: "./img/menu/omelette.jpg", name: "Omelette", ingredients: "Oeufs, jambon", price: "$5.99" },
        { img: "./img/menu/pancakes.jpg", name: "Pancakes", ingredients: "Sirop, fruits", price: "$6.99" }
      ],
      lunch: [
        { img: "./img/menu/burger.jpeg", name: "Burger", ingredients: "Boeuf, cheddar, salade", price: "$9.99" },
        { img: "./img/menu/wrap-poulet.jpg", name: "Wrap Poulet", ingredients: "Poulet, légumes", price: "$8.50" },
        { img: "./img/menu/salade_cesar.jpg", name: "Salade César", ingredients: "Poulet, parmesan, croûtons", price: "$7.99" }
      ],
      dinner: [
        { img: "./img/menu/steak_frites.jpg", name: "Steak frites", ingredients: "Boeuf, pommes frites", price: "$14.99" },
        { img: "./img/menu/saumon_grille.jpeg", name: "Saumon grillé", ingredients: "Citron, légumes", price: "$16.99" },
        { img: "./img/menu/ratatouille.jpg", name: "Ratatouille", ingredients: "Aubergines, courgettes", price: "$11.50" }
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