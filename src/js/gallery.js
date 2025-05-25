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