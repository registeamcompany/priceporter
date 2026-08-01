// BLOCK 11 — accordion. Desktop opens the first question by default (it sets the tone
// of honesty); mobile starts fully collapsed to save screen height.

export function initFaq() {
  const acc = document.querySelector('[data-faq]');
  if (!acc) return;

  const items = Array.from(acc.querySelectorAll('[data-faq-item]'));

  function setOpen(item, open) {
    const btn = item.querySelector('.pr-acc__btn');
    const panel = item.querySelector('.pr-acc__panel');
    item.dataset.open = String(open);
    btn.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
  }

  items.forEach((item) => {
    const btn = item.querySelector('.pr-acc__btn');
    btn.addEventListener('click', () => {
      setOpen(item, item.dataset.open !== 'true');
    });
    setOpen(item, false);
  });

  if (window.matchMedia('(min-width: 1024px)').matches) {
    const first = acc.querySelector('[data-open-desktop]');
    if (first) setOpen(first, true);
  }
}
