// Sticky chrome: desktop top header and mobile bottom bar both appear only after the
// first screen is scrolled. The mobile bar also hides while any lead form is on screen.

export function initStickyUi() {
  const header = document.getElementById('site-header');
  const bar = document.getElementById('mobile-sticky-bar');
  const hero = document.getElementById('top');
  if (!hero) return;

  let formOnScreen = false;
  let heroPassed = false;

  function update() {
    if (header) header.classList.toggle('is-visible', heroPassed);
    if (bar) {
      bar.classList.toggle('is-visible', heroPassed && !formOnScreen);
      bar.setAttribute('aria-hidden', String(!(heroPassed && !formOnScreen)));
    }
  }

  const heroObserver = new IntersectionObserver(
    ([entry]) => {
      heroPassed = !entry.isIntersecting;
      update();
    },
    { rootMargin: '-80px 0px 0px 0px' }
  );
  heroObserver.observe(hero);

  const forms = document.querySelectorAll('[data-lead-form], [data-quiz]');
  const visibleForms = new Set();
  const formObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visibleForms.add(entry.target);
        else visibleForms.delete(entry.target);
      });
      formOnScreen = visibleForms.size > 0;
      update();
    },
    { threshold: 0.2 }
  );
  forms.forEach((f) => formObserver.observe(f));
}
