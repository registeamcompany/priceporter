// Global reveal module. For this audience (45–64) the visual spec caps motion at a
// soft appear-on-scroll, so a lightweight IntersectionObserver over .reveal/.stagger
// is deliberate — no scrub timelines, no parallax. prefers-reduced-motion is handled
// in CSS (elements render visible immediately).

export function initAnimations() {
  const targets = document.querySelectorAll('.reveal, .stagger');
  if (!targets.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );
  targets.forEach((el) => observer.observe(el));
}
