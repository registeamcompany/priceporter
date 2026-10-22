// BLOCK 5 — quiz: questions shown one at a time, progress bar, contact step,
// result screen. The contact step posts the lead (answers go into the subject).

import { sendLead, leadSubject } from './submit.js';

export function initQuiz() {
  const root = document.querySelector('[data-quiz]');
  if (!root) return;

  const steps = Array.from(root.querySelectorAll('[data-quiz-step]'));
  const progressLabel = root.querySelector('[data-quiz-progress-label]');
  const progressFill = root.querySelector('[data-quiz-progress-fill]');
  const progressWrap = root.querySelector('[data-quiz-progress-wrap]');
  const backBtn = root.querySelector('[data-quiz-back]');
  const contactForm = root.querySelector('[data-quiz-contact]');
  // question count is derived from the markup, so 4-question (GSA) and
  // 5-question (VA) quizzes share this module
  const total = steps.filter(
    (s) => s.dataset.quizStep !== 'result' && !s.hasAttribute('data-quiz-contact')
  ).length;

  const answers = [];
  let current = 0;

  function show(stepKey) {
    steps.forEach((s) => {
      s.hidden = s.dataset.quizStep !== String(stepKey);
    });
    const idx = typeof stepKey === 'number' ? stepKey : null;
    if (idx !== null && idx < total) {
      progressLabel.textContent = `Question ${idx + 1} of ${total}`;
      progressFill.style.width = `${((idx + 1) / total) * 100}%`;
      progressWrap.hidden = false;
    } else if (stepKey === total) {
      progressLabel.textContent = 'Last step';
      progressFill.style.width = '100%';
      progressWrap.hidden = false;
    } else {
      progressWrap.hidden = true;
    }
    backBtn.hidden = !(typeof stepKey === 'number' && stepKey > 0);
  }

  root.addEventListener('click', (e) => {
    const answerBtn = e.target.closest('[data-quiz-answer]');
    if (!answerBtn) return;
    answers[current] = answerBtn.dataset.quizAnswer;
    current += 1;
    show(current);
  });

  backBtn.addEventListener('click', () => {
    if (current === 0) return;
    current -= 1;
    show(current);
  });

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!contactForm.reportValidity()) return;
    const btn = contactForm.querySelector('[type="submit"]');
    const btnLabel = btn ? btn.textContent : '';
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Sending…';
    }
    const contact = Object.fromEntries(new FormData(contactForm).entries());
    try {
      await sendLead({
        name: contact.name,
        company: contact.company,
        email: contact.email,
        phone: contact.phone,
        subject: leadSubject(`Quiz [${answers.join(' | ')}]`),
      });
    } catch (err) {
      // The visitor already answered the quiz — show the result either way,
      // but keep the failed payload in the console for debugging.
      console.error('[quiz] send failed', err, { answers, contact });
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.textContent = btnLabel;
      }
    }
    show('result');
  });

  show(0);
}
