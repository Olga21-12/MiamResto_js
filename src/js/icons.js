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