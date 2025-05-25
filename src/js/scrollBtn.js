document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollToTopBtn");
  const aboutSection = document.getElementById("about");

  window.addEventListener("scroll", () => {
    const aboutTop = aboutSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Показываем кнопку, если верх секции "about" уже выше низа экрана
    if (aboutTop < windowHeight) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  // Скролл вверх при клике
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});