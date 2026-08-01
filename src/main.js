// Core: mounts HTML component strings into the index skeleton, then wires styles and
// scripts. Components are isolated files loaded via Vite ?raw imports.

// styles
import './styles/global.css';
import './styles/header.css';
import './styles/hero.css';
import './styles/trust-bar.css';
import './styles/problem.css';
import './styles/how-it-works.css';
import './styles/quiz.css';
import './styles/services.css';
import './styles/social-proof.css';
import './styles/why-2026.css';
import './styles/stats.css';
import './styles/team.css';
import './styles/faq.css';
import './styles/final-cta.css';
import './styles/footer.css';
import './styles/sticky-bar.css';
import './styles/exit-popup.css';

// markup
import Header from './components/Header.html?raw';
import Hero from './components/Hero.html?raw';
import TrustBar from './components/TrustBar.html?raw';
import Problem from './components/Problem.html?raw';
import HowItWorks from './components/HowItWorks.html?raw';
import Quiz from './components/Quiz.html?raw';
import Services from './components/Services.html?raw';
import SocialProof from './components/SocialProof.html?raw';
import Why2026 from './components/Why2026.html?raw';
import Stats from './components/Stats.html?raw';
import Team from './components/Team.html?raw';
import Faq from './components/Faq.html?raw';
import FinalCta from './components/FinalCta.html?raw';
import Footer from './components/Footer.html?raw';
import StickyBar from './components/StickyBar.html?raw';
import ExitPopup from './components/ExitPopup.html?raw';

// scripts
import { initLeadFormModule } from './scripts/lead-form.js';
import { initQuiz } from './scripts/quiz.js';
import { initFaq } from './scripts/faq.js';
import { initTestimonials } from './scripts/carousel.js';
import { initStickyUi } from './scripts/sticky-ui.js';
import { initExitIntent } from './scripts/exit-intent.js';
import { initAnimations } from './scripts/animations.js';

const mounts = {
  header: Header,
  hero: Hero,
  'trust-bar': TrustBar,
  problem: Problem,
  'how-it-works': HowItWorks,
  quiz: Quiz,
  services: Services,
  'social-proof': SocialProof,
  'why-2026': Why2026,
  stats: Stats,
  team: Team,
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
