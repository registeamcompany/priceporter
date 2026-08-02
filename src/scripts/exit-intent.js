// Exit-intent popup — desktop only, fires once per session on mouse leave toward the
// browser chrome. Mobile relies on the sticky bar instead.
import { scrollToHeroForm } from './lead-form.js';

export function initExitIntent() {
  const root = document.getElementById('exit-popup-root');
  if (!root) return;
  if (window.matchMedia('(max-width: 1023px)').matches) return;

  const KEY = 'pr-exit-shown';

  function close() {
    root.hidden = true;
  }

  document.addEventListener('mouseout', (e) => {
    if (e.relatedTarget || e.clientY > 10) return;
    if (sessionStorage.getItem(KEY)) return;
    sessionStorage.setItem(KEY, '1');
    root.hidden = false;
  });

  root.addEventListener('click', (e) => {
    if (e.target.closest('[data-exit-dismiss]')) {
      close();
      return;
    }
    if (e.target.closest('[data-exit-cta]')) {
      close();
      scrollToHeroForm();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !root.hidden) close();
  });
}
