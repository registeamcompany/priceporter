// One CTA action for the whole page: every [data-scroll-form] control leads to the
// nearest sensible lead form. On mobile the hero form is collapsed — the CTA opens it.

import { sendLead, leadSubject, warmUpTransport } from './submit.js';

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

function showFormError(form) {
  let err = form.querySelector('.lp-form__error');
  if (!err) {
    err = document.createElement('p');
    err.className = 'lp-form__error';
    err.setAttribute('role', 'alert');
    err.innerHTML =
      'Something went wrong sending your request. Please call <a href="tel:2015676646">201-567-6646</a> or email <a href="mailto:salesteam@pricereporter.com">salesteam@pricereporter.com</a>.';
    const fields = form.querySelector('.lp-form__fields');
    if (fields) fields.appendChild(err);
  }
  err.hidden = false;
}

function initLeadForms() {
  document.querySelectorAll('[data-lead-form]').forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const btn = form.querySelector('[type="submit"]');
      const btnLabel = btn ? btn.textContent : '';
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Sending…';
      }
      const data = Object.fromEntries(new FormData(form).entries());
      const label = form.closest('.lp-final') ? 'Bottom form' : 'Hero form';
      try {
        await sendLead({
          name: data.name,
          company: data.company,
          email: data.email,
          phone: data.phone,
          subject: leadSubject(label),
        });
        const fields = form.querySelector('.lp-form__fields');
        const success = form.querySelector('.lp-form__success');
        if (fields) fields.hidden = true;
        if (success) success.hidden = false;
      } catch (err) {
        console.error('[lead-form] send failed', err);
        showFormError(form);
      } finally {
        if (btn) {
          btn.disabled = false;
          btn.textContent = btnLabel;
        }
      }
    });
  });
}

export function initLeadFormModule() {
  initScrollToForm();
  initLeadForms();
  // Pre-load reCAPTCHA the moment a visitor touches any form field.
  document.addEventListener('focusin', function warm(e) {
    if (!e.target.closest('form')) return;
    document.removeEventListener('focusin', warm);
    warmUpTransport();
  });
}

export { scrollToHeroForm };
