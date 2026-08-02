// One CTA action for the whole page: every [data-scroll-form] control leads to the
// nearest sensible lead form. On mobile the hero form is collapsed — the CTA opens it.

function scrollToHeroForm() {
  const wrap = document.getElementById('lead-form-anchor');
  if (!wrap) return;
  const isMobile = window.matchMedia('(max-width: 1023px)').matches;
  if (isMobile) wrap.classList.add('is-open');
  requestAnimationFrame(() => {
    const top = wrap.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
    const firstInput = wrap.querySelector('input');
    if (firstInput && isMobile) setTimeout(() => firstInput.focus({ preventScroll: true }), 450);
  });
}

function initScrollToForm() {
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-scroll-form]');
    if (!trigger) return;
    e.preventDefault();
    scrollToHeroForm();
  });
}

function initLeadForms() {
  document.querySelectorAll('[data-lead-form]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      // No backend wired yet: swap to the success state, keep the payload in console
      // so CRM integration has a clear seam.
      const data = Object.fromEntries(new FormData(form).entries());
      console.info('[lead-form] submission', data);
      const fields = form.querySelector('.lp-form__fields');
      const success = form.querySelector('.lp-form__success');
      if (fields) fields.hidden = true;
      if (success) success.hidden = false;
    });
  });
}

export function initLeadFormModule() {
  initScrollToForm();
  initLeadForms();
}

export { scrollToHeroForm };
