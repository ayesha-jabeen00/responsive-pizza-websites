const items = document.querySelectorAll('.menu-item');
let hasAnimated = false;

const showItems = () => {
  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('show');
    }, index * 180); // 180ms delay per item
  });
};

window.addEventListener('scroll', () => {
  const menuSection = document.getElementById('menu');
  const sectionTop = menuSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight - 100;

  if (!hasAnimated && sectionTop < triggerPoint) {
    showItems();
    hasAnimated = true;
  }
});
