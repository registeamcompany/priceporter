// Entry for VERSION 2 of VARIANT B — Variant B's desire-led copy in the v2 art
// direction ("modern law firm × Stripe clean"). Shares the v2 skin and photo-led
// patterns with /v2.html; copy-bearing B blocks are reused or re-skinned.

// shared block styles
import './styles/global.css';
import './styles/header.css';
import './styles/trust-bar.css';
import './styles/stats.css';
import './styles/prize.css';
import './styles/how-it-works.css';
import './styles/reassure.css';
import './styles/quiz.css';
import './styles/services.css';
import './styles/social-proof.css';
import './styles/why-2026.css';
import './styles/faq.css';
import './styles/final-cta.css';
import './styles/footer.css';
import './styles/sticky-bar.css';
import './styles/exit-popup.css';
// v2 components + skin (skin loads last so its overrides win)
import './styles/v2/hero-v2.css';
import './styles/v2/cases-v2.css';
import './styles/v2/stats-v2.css';
import './styles/v2/team-v2.css';
import './styles/v2/v2.css';

// markup — v2 components where the design changes structurally, B components otherwise
import Header from './components/Header.html?raw';
import HeroBV2 from './components/v2/HeroBV2.html?raw';
import TrustBarB from './components/b/TrustBarB.html?raw';
import PrizeBV2 from './components/v2/PrizeBV2.html?raw';
import HowItWorksB from './components/b/HowItWorksB.html?raw';
import ReassuranceB from './components/b/ReassuranceB.html?raw';
import CasesBV2 from './components/v2/CasesBV2.html?raw';
import WhyPRB from './components/b/WhyPRB.html?raw';
import QuizB from './components/b/QuizB.html?raw';
import TimingB from './components/b/TimingB.html?raw';
import TeamBV2 from './components/v2/TeamBV2.html?raw';
import Faq from './components/Faq.html?raw';
import FinalCtaB from './components/b/FinalCtaB.html?raw';
import Footer from './components/Footer.html?raw';
import StickyBar from './components/StickyBar.html?raw';
import ExitPopupB from './components/b/ExitPopupB.html?raw';

// scripts (all shared)
import { initLeadFormModule } from './scripts/lead-form.js';
import { initQuiz } from './scripts/quiz.js';
import { initFaq } from './scripts/faq.js';
import { initTestimonials } from './scripts/carousel.js';
import { initStickyUi } from './scripts/sticky-ui.js';
import { initExitIntent } from './scripts/exit-intent.js';
import { initAnimations } from './scripts/animations.js';

const mounts = {
  header: Header,
  hero: HeroBV2,
  'trust-bar': TrustBarB,
  prize: PrizeBV2,
  'how-it-works': HowItWorksB,
  reassurance: ReassuranceB,
  'social-proof': CasesBV2,
  'why-pr': WhyPRB,
  quiz: QuizB,
  timing: TimingB,
  team: TeamBV2,
  faq: Faq,
  'final-cta': FinalCtaB,
  footer: Footer,
  'sticky-bar': StickyBar,
  'exit-popup': ExitPopupB,
};

Object.entries(mounts).forEach(([id, html]) => {
  const target = document.getElementById(id);
  if (target) target.innerHTML = html;
});

initLeadFormModule();
initQuiz();
initFaq();
initTestimonials();
initStickyUi();
initExitIntent();
initAnimations();
