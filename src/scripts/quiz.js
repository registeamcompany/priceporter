// BLOCK 5 — quiz: 4 questions shown one at a time, progress bar, contact step,
// result screen. Answers land in console with the contact payload (CRM seam).
import { sendLead, trackFormSubmit } from './leads.js';

export function initQuiz() {
  const root = document.querySelector('[data-quiz]');
  if (!root) return;

  const steps = Array.from(root.querySelectorAll('[data-quiz-step]'));
  const progressLabel = root.querySelector('[data-quiz-progress-label]');
  const progressFill = root.querySelector('[data-quiz-progress-fill]');
  const progressWrap = root.querySelector('[data-quiz-progress-wrap]');
  const backBtn = root.querySelector('[data-quiz-back]');
  const contactForm = root.querySelector('[data-quiz-contact]');

  const answers = [];
  let current = 0;

  function show(stepKey) {
    steps.forEach((s) => {
      s.hidden = s.dataset.quizStep !== String(stepKey);
    });
    const idx = typeof stepKey === 'number' ? stepKey : null;
    if (idx !== null && idx <= 3) {
      progressLabel.textContent = `Question ${idx + 1} of 4`;
      progressFill.style.width = `${((idx + 1) / 4) * 100}%`;
      progressWrap.hidden = false;
    } else if (stepKey === 4) {
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

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!contactForm.reportValidity()) return;
    const contact = Object.fromEntries(new FormData(contactForm).entries());
    // named keys map 1:1 onto the client lead sheet's question columns
    sendLead('consulting-quiz', {
      ...contact,
      inBusiness: answers[0] || '',
      revenue: answers[1] || '',
      productsOrServices: answers[2] || '',
      note: answers[3] ? `U.S.-made / TAA-compliant: ${answers[3]}` : '',
    });
    trackFormSubmit('consulting-quiz');
    show('result');
  });

  show(0);
}
