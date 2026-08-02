// BLOCK 7 — mobile behaviors: swipe carousel dots for the two smaller quotes and a
// "Read more" clamp on the featured testimonial.

export function initTestimonials() {
  const isMobile = window.matchMedia('(max-width: 1023px)').matches;

  // Read more on the featured quote
  const quote = document.querySelector('[data-readmore]');
  const readmoreBtn = document.querySelector('[data-readmore-btn]');
  if (quote && readmoreBtn && isMobile) {
    quote.classList.add('is-clamped');
    readmoreBtn.hidden = false;
    readmoreBtn.addEventListener('click', () => {
      const clamped = quote.classList.toggle('is-clamped');
      readmoreBtn.textContent = clamped ? 'Read more' : 'Show less';
    });
  }

  // Dots for the scroll-snap track
  const carousel = document.querySelector('[data-carousel]');
  if (!carousel || !isMobile) return;
  const track = carousel.querySelector('[data-carousel-track]');
  const dotsWrap = carousel.querySelector('[data-carousel-dots]');
  const cards = Array.from(track.children);
  if (cards.length < 2) return;

  dotsWrap.hidden = false;
  cards.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('is-active');
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.children);

  track.addEventListener(
    'scroll',
    () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      const ratio = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
      const active = Math.min(cards.length - 1, Math.max(0, Math.round(ratio * (cards.length - 1))));
      dots.forEach((d, i) => d.classList.toggle('is-active', i === active));
    },
    { passive: true }
  );
}
