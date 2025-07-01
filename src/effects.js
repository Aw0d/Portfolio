// Lightweight UI effects for Portfolio
// Created 2025-07-01

export function setupEffects() {
  // Fade-in profile photo on load
  const photo = document.querySelector('.photo-profil');
  if(photo){
    photo.style.opacity=0;
    photo.style.transition='opacity .8s ease-out';
    requestAnimationFrame(()=>photo.style.opacity=1);
  }

  // Scroll-reveal for sections and figures
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('section, article, .sae-projets figure').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  // Sticky header blur on scroll
  const header = document.querySelector('header');
  if (header) {
    const toggleSticky = () => {
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    toggleSticky();
    window.addEventListener('scroll', toggleSticky);
  }

  // Add ripple class to nav links and figures
  document.querySelectorAll('header nav a, .sae-projets figure').forEach(el=>el.classList.add('ripple'));

  // Ripple click effect for elements with .ripple
  document.addEventListener('click', e => {
    const target = e.target.closest('.ripple');
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    ripple.className = 'ripple-effect';
    target.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
}
