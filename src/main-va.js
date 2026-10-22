// Entry for the VA FSS landing (/va.html) — "Get a VA Schedule Contract" deck in the
// approved v2 art direction with the photo hero (medical-supply warehouse shot).
// Shares the v2 skin, scripts and shared chrome; VA blocks live in components/va/.

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
// v2 components + skin, then the VA page styles (load last)
import './styles/v2/hero-v2.css';
import './styles/v2/hero-photo.css';
import './styles/v2/cases-v2.css';
import './styles/v2/stats-v2.css';
import './styles/v2/team-v2.css';
import './styles/v2/v2.css';
import './styles/va/va.css';

// markup
import HeaderVA from './components/va/HeaderVA.html?raw';
import HeroVA from './components/va/HeroVA.html?raw';
import TrustBarVA from './components/va/TrustBarVA.html?raw';
import PrizeVA from './components/va/PrizeVA.html?raw';
import SchedulesVA from './components/va/SchedulesVA.html?raw';
import HowItWorksVA from './components/va/HowItWorksVA.html?raw';
import ReassuranceVA from './components/va/ReassuranceVA.html?raw';
import ResultsVA from './components/va/ResultsVA.html?raw';
import VoicesVA from './components/va/VoicesVA.html?raw';
import WhyPRVA from './components/va/WhyPRVA.html?raw';
import QuizVA from './components/va/QuizVA.html?raw';
import WhyNowVA from './components/va/WhyNowVA.html?raw';
import TeamVA from './components/va/TeamVA.html?raw';
import FaqVA from './components/va/FaqVA.html?raw';
import FinalCtaVA from './components/va/FinalCtaVA.html?raw';
import FooterVA from './components/va/FooterVA.html?raw';
import StickyBar from './components/StickyBar.html?raw';
import ExitPopupVA from './components/va/ExitPopupVA.html?raw';

// scripts (all shared)
import { initLeadFormModule } from './scripts/lead-form.js';
import { initQuiz } from './scripts/quiz.js';
import { initFaq } from './scripts/faq.js';
import { initTestimonials } from './scripts/carousel.js';
import { initStickyUi } from './scripts/sticky-ui.js';
import { initExitIntent } from './scripts/exit-intent.js';
import { initAnimations } from './scripts/animations.js';

const mounts = {
  header: HeaderVA,
  hero: HeroVA,
  'trust-bar': TrustBarVA,
  prize: PrizeVA,
  schedules: SchedulesVA,
  'how-it-works': HowItWorksVA,
  reassurance: ReassuranceVA,
  results: ResultsVA,
  voices: VoicesVA,
  'why-pr': WhyPRVA,
  quiz: QuizVA,
  'why-now': WhyNowVA,
  team: TeamVA,
  faq: FaqVA,
  'final-cta': FinalCtaVA,
  footer: FooterVA,
  'sticky-bar': StickyBar,
  'exit-popup': ExitPopupVA,
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
