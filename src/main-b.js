// Entry for VARIANT B (desire-led / certainty-first). Shares every style, script and
// the design system with Variant A; only the block components, their order, and the
// copy differ. See the copy deck's "WHAT CHANGED vs. VARIANT A" table.

// styles (shared with A, plus B-only blocks)
import './styles/global.css';
import './styles/header.css';
import './styles/hero.css';
import './styles/trust-bar.css';
import './styles/stats.css';
import './styles/prize.css';
import './styles/how-it-works.css';
import './styles/reassure.css';
import './styles/quiz.css';
import './styles/services.css';
import './styles/social-proof.css';
import './styles/why-2026.css';
import './styles/team.css';
import './styles/faq.css';
import './styles/final-cta.css';
import './styles/footer.css';
import './styles/sticky-bar.css';
import './styles/exit-popup.css';

// markup — shared chrome from A, B variants for copy-bearing blocks
import Header from './components/Header.html?raw';
import HeroB from './components/b/HeroB.html?raw';
import TrustBarB from './components/b/TrustBarB.html?raw';
import PrizeB from './components/b/PrizeB.html?raw';
import HowItWorksB from './components/b/HowItWorksB.html?raw';
import ReassuranceB from './components/b/ReassuranceB.html?raw';
import SocialProofB from './components/b/SocialProofB.html?raw';
import WhyPRB from './components/b/WhyPRB.html?raw';
import QuizB from './components/b/QuizB.html?raw';
import TimingB from './components/b/TimingB.html?raw';
import TeamB from './components/b/TeamB.html?raw';
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
  hero: HeroB,
  'trust-bar': TrustBarB,
  prize: PrizeB,
  'how-it-works': HowItWorksB,
  reassurance: ReassuranceB,
  'social-proof': SocialProofB,
  'why-pr': WhyPRB,
  quiz: QuizB,
  timing: TimingB,
  team: TeamB,
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
