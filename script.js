const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('navMenu');

menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('#navMenu a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

// Reveal sections softly as they enter the viewport.
const revealTargets = document.querySelectorAll(
  '.section, .stats-grid > div, .program-card, .why-card, .results-box, .gallery-item, .contact-form'
);

revealTargets.forEach((el, index) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${Math.min((index % 6) * 70, 350)}ms`;
});

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(el => observer.observe(el));
