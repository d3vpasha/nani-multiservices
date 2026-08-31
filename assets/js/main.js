(function () {
  'use strict';

  // Menu mobile
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('menu-principal');

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      burger.setAttribute('aria-label', open ? 'Ouvrir le menu' : 'Fermer le menu');
      nav.dataset.open = String(!open);
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Ouvrir le menu');
        nav.dataset.open = 'false';
      }
    });
  }

  // Apparition au défilement
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var targets = document.querySelectorAll('.reveal');

  if (reduced || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

    targets.forEach(function (el) { observer.observe(el); });
  }

  // Année courante dans le pied de page
  var year = document.querySelector('[data-year]');
  if (year) { year.textContent = String(new Date().getFullYear()); }
})();
