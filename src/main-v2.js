// Entry for VERSION 2 — alternative art direction ("modern law firm × Stripe clean")
// over Variant A's copy. Version 1 pages (index.html, variant-b.html) are untouched:
// this entry loads the shared blocks plus the v2 skin and three photo-led components.

// shared block styles
import './styles/global.css';
import './styles/header.css';
import './styles/trust-bar.css';
import './styles/problem.css';
import './styles/how-it-works.css';
import './styles/quiz.css';
import './styles/services.css';
import './styles/social-proof.css';
import './styles/why-2026.css';
import './styles/stats.css';
import './styles/faq.css';
import './styles/final-cta.css';
import './styles/footer.css';
import './styles/sticky-bar.css';
import './styles/exit-popup.css';
// v2 components + skin (skin loads last so its overrides win)
import './styles/v2/hero-v2.css';
import './styles/v2/problem-v2.css';
import './styles/v2/team-v2.css';
import './styles/v2/v2.css';

// markup — v2 components where the design changes structurally, shared otherwise
import Header from './components/Header.html?raw';
import HeroV2 from './components/v2/HeroV2.html?raw';
import TrustBar from './components/TrustBar.html?raw';
import ProblemV2 from './components/v2/ProblemV2.html?raw';
import HowItWorks from './components/HowItWorks.html?raw';
import Quiz from './components/Quiz.html?raw';
import Services from './components/Services.html?raw';
import SocialProof from './components/SocialProof.html?raw';
import Why2026 from './components/Why2026.html?raw';
import Stats from './components/Stats.html?raw';
import TeamV2 from './components/v2/TeamV2.html?raw';
import Faq from './components/Faq.html?raw';
import FinalCta from './components/FinalCta.html?raw';
import Footer from './components/Footer.html?raw';
import StickyBar from './components/StickyBar.html?raw';
import ExitPopup from './components/ExitPopup.html?raw';

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
  hero: HeroV2,
  'trust-bar': TrustBar,
  problem: ProblemV2,
  'how-it-works': HowItWorks,
  quiz: Quiz,
  services: Services,
  'social-proof': SocialProof,
  'why-2026': Why2026,
  stats: Stats,
  team: TeamV2,
  faq: Faq,
  'final-cta': FinalCta,
  footer: Footer,
  'sticky-bar': StickyBar,
  'exit-popup': ExitPopup,
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
