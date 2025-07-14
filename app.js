const toggleButton = document.getElementById('themeToggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleButton.classList.toggle('rotate');
  toggleButton.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

const sections = document.querySelectorAll('section');
sections.forEach((section, index) => {
  if (section.id === 'home') return;
  if (index % 2 === 0) {
    section.classList.add('animate-left');
  } else {
    section.classList.add('animate-right');
  }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('animate-left')) {
        entry.target.classList.add('slide-in-left');
      }
      if (entry.target.classList.contains('animate-right')) {
        entry.target.classList.add('slide-in-right');
      }
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  if (section.id !== 'home') {
    observer.observe(section);
  }
});
