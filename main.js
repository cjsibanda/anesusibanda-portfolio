document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for nav anchors
  const scrollLinks = document.querySelectorAll('a.page-scroll');

  scrollLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
});
