# ONBOARDING — лендінг Price Reporter «Get a GSA Contract»

Інструкція для нового розробника або AI-агента: як влаштований проєкт, як вносити
зміни і як не зламати дизайн-систему. Прочитайте цей файл ПЕРШИМ, потім
`AI_DEVELOPMENT_GUIDE.md` (загальні правила модульної архітектури) і `README.md`
(карта версій і список матеріалів від клієнта).

---

## 1. Що це за проєкт

Direct-response лендінг для платного трафіку Google Ads. Аудиторія — власники
бізнесу 45–64 у США, які шукають «get gsa contract». Одна конверсійна дія на всю
сторінку: заявка на Free Eligibility Assessment (форма або дзвінок).

**Затверджена бойова сторінка — `/index.html`**: тексти Variant B.2 (фінальний
копідек) у дизайні v2 («modern law firm × Stripe clean») з фотографією Капітолія
в hero. Усі інші сторінки — робочі версії для порівняння, вони під `noindex`:

| Сторінка | Entry | Дизайн | Тексти | Статус |
|---|---|---|---|---|
| `/index.html` | `src/main-v2b.js` | v2 + фото-hero | B.2 | **ЗАТВЕРДЖЕНА** |
| `/v2-b.html` | `src/main-v2b.js` | v2 + фото-hero | B.2 | дубль index (для старих прев'ю-лінків) |
| `/v2.html` | `src/main-v2.js` | v2 | Variant A | архів |
| `/v1.html` | `src/main.js` | v1 (flat refresh) | Variant A | архів, заморожена |
| `/variant-b.html` | `src/main-b.js` | v1 (flat refresh) | Variant B | архів, заморожена |

Правило: **зміни вносяться в затверджену сторінку**. Сторінки v1 не чіпаємо
(вони заморожені рішенням клієнта). Якщо блок спільний між сторінками — див.
розділ 5, там написано, як не зачепити зайве.

## 2. Швидкий старт

```bash
npm install
npm run dev      # dev-сервер, http://localhost:5173
npm run build    # продакшн-збірка усіх сторінок → dist/
npm run preview  # локальний перегляд збірки, http://localhost:4173
```

Node 18+. Ніяких інших залежностей, крім Vite, немає. TailwindCSS та UI-бібліотеки
заборонені гайдом — тільки vanilla CSS на токенах дизайн-системи.

## 3. Архітектура (за AI_DEVELOPMENT_GUIDE)

```
/index.html, /v2-b.html, ...   ← ТІЛЬКИ каркаси: <div id="hero"></div> і т.д. Не редагувати,
                                  крім випадку додавання цілком нового блока.
/src/main-v2b.js               ← ядро затвердженої сторінки: імпортує HTML-компоненти (?raw),
                                  монтує їх у каркас, підключає стилі та скрипти.
/src/components/               ← HTML-розмітка блоків, один файл = один блок:
    v2/…                          компоненти дизайну v2 (у т.ч. всі B2-блоки затвердженої сторінки)
    b/…                           компоненти текстів Variant B (v1-дизайн і спільні: Reassurance, Timing…)
    *.html                        спільні: Header, Footer, StickyBar, Faq (v1/A)
/src/styles/                   ← ізольований CSS, один файл = один блок + global.css
    v2/v2.css                     СКІН v2: токен-оверрайди під body.v2 (радіуси, тіні, сітка…)
    v2/hero-photo.css             фото-hero затвердженої сторінки (модифікатор .v2-hero--photo)
/src/scripts/                  ← уся інтерактивність (жодного inline JS у компонентах):
    lead-form.js  quiz.js  faq.js  carousel.js  sticky-ui.js  exit-intent.js  animations.js
/src/ds/                       ← дизайн-система: токени + CSS компонентів (підмножина архіву)
/public/assets/                ← лого, фото Капітолія (hero-capitol-full.jpg), фавікон
"Price Reporter Design System.zip"  ← повний архів дизайн-системи (гайдлайни, специмени, UI-кіти)
```

**Головне правило економії токенів для агентів:** щоб змінити блок X — читайте
ТІЛЬКИ його компонент і його CSS-файл (див. таблицю в розділі 4). Не читайте
`main-*.js`, каркаси і чужі блоки.

## 4. Карта блоків затвердженої сторінки (`/index.html`)

| Блок (id у каркасі) | Компонент | CSS | Скрипт |
|---|---|---|---|
| header (липка шапка) | `components/Header.html` | `styles/header.css` | `sticky-ui.js` |
| hero | `components/v2/HeroBV2.html` | `styles/v2/hero-v2.css` + `v2/hero-photo.css` | `lead-form.js` |
| trust-bar | `components/v2/TrustBarB2.html` | `styles/trust-bar.css` (+ скін) | — |
| prize | `components/v2/PrizeBV2.html` | `styles/prize.css` + `v2/stats-v2.css` | — |
| how-it-works (5 кроків) | `components/v2/HowItWorksB2.html` | `styles/how-it-works.css` (модиф. `--five`) | — |
| reassurance | `components/b/ReassuranceB.html` | `styles/reassure.css` | — |
| social-proof (кейси) | `components/v2/CasesBV2.html` | `styles/v2/cases-v2.css` | — |
| why-pr (Win/Run/Grow) | `components/v2/WhyPRB2.html` | `styles/services.css` | — |
| quiz | `components/v2/QuizB2.html` | `styles/quiz.css` | `quiz.js` |
| timing | `components/b/TimingB.html` | `styles/why-2026.css` | — |
| team | `components/v2/TeamBV2.html` | `styles/v2/team-v2.css` | — |
| faq | `components/v2/FaqB2.html` | `styles/faq.css` | `faq.js` |
| final-cta | `components/b/FinalCtaB.html` | `styles/final-cta.css` | `lead-form.js` |
| footer | `components/Footer.html` | `styles/footer.css` | — |
| sticky-bar (мобайл) | `components/StickyBar.html` | `styles/sticky-bar.css` | `sticky-ui.js` |
| exit-popup (десктоп) | `components/b/ExitPopupB.html` | `styles/exit-popup.css` | `exit-intent.js` |

УВАГА — спільні файли: `ReassuranceB`, `TimingB`, `FinalCtaB`, `ExitPopupB`,
`Header`, `Footer`, `StickyBar` і всі CSS без префікса `v2/` використовуються
ТАКОЖ замороженими v1-сторінками. Правило: **текст правити можна** (v1 —
архівні), але якщо змінюєте ВЕРСТКУ такого файлу — або робіть це через
скін `body.v2 …` у `styles/v2/v2.css`, або створіть B2-копію компонента в
`components/v2/` і підключіть її в `main-v2b.js` (так уже зроблено з
TrustBarB2, HowItWorksB2, QuizB2, FaqB2, WhyPRB2).

## 5. Дизайн-система — обов'язкові правила

Джерело істини: `src/ds/` (токени і CSS) + повний архів
`Price Reporter Design System.zip` (розпакуйте — там `readme.md`, гайдлайни,
специмен-картки і брендбук). Коротка вижимка:

- **Кольори — тільки з токенів** `src/ds/tokens/colors.css`. Нових hex не
  вводити. Оранжевий `--brand-accent (#FF6000)` — ЄДИНИЙ акцент: цифри, CTA,
  лінійки, чеки. Сині: `--blue-700` кнопки/заголовки, `--blue-900/950` темні
  секції. Сірі — з палітри neutral.
- **Шрифти:** Instrument Sans (заголовки, кнопки, цифри — все структурне),
  Roboto (тіло). Підключені локально у `src/ds/assets/fonts` — нічого з CDN.
- **Колізія токена:** `--text-body` означає І колір, І розмір (баг системи).
  Для кольору тексту використовуйте `var(--text-body-color)` (визначений у
  `global.css`). НЕ пишіть `color: var(--text-body)`.
- **Сітка:** зовнішня рейка `.pr-container` (1200px, гаттери 24px) — для всіх
  секцій; вузька читальна рейка `--lp-rail` (800px) — для текстових блоків,
  квіза, FAQ. Інших ширин контенту не вводити. Вертикальний ритм — тільки
  `.pr-section`; відступи — тільки кроки `--space-*` (шкала 4px).
- **Скін v2** (`styles/v2/v2.css`, діє через клас `body.v2`): радіуси 16–20px,
  pill-кнопки, багатошарові м'які тіні, hairline-межі, тоновані секції
  `#f6f9fc`, збільшений дисплейний шрифт, navy-заголовки. Усі нові стилі для
  затвердженої сторінки мають узгоджуватися з цим скіном — беріть змінні, а не
  хардкод.
- **Кнопки:** тільки класи ДС — `pr-btn pr-btn--accent` (головна CTA),
  `--secondary`, `--outline-accent(-dark)`, розміри `--lg`, `--full`.
- **Іконки:** інлайн-SVG Lucide (24px grid, stroke=currentColor) з
  `клас "ic ic--sm|--xs|--lg"`. Джерело — розпакований архів ДС,
  `assets/icons/`. Емодзі заборонені. Стокові фото з людьми, що дивляться в
  камеру / рукостискання — заборонені брендом.
- **Анімації:** лише м'яка поява при скролі — класи `.reveal` (один елемент) і
  `.stagger` (діти по черзі), обробляє `scripts/animations.js`. Нічого не
  їздить і не мигає — аудиторія 45–64, `prefers-reduced-motion` поважається.
- **Мова сторінки** — англійська; тексти беруться ДОСЛІВНО з копідека B.2
  (у чаті/у клієнта). Цифри тільки затверджені: 2006, 20+, 400+, 1000+, 2.5M+,
  1,000,000+, $52B, $2.3M, 5→20 років, 6 місяців, $100K, 62 категорії.
  Нічого не вигадувати, зокрема відгуки й метрики кейсів.

## 6. Інтерактивність — data-атрибути (не ламати!)

Скрипти шукають елементи за цими атрибутами; при редагуванні розмітки їх треба
зберегти:

- `data-scroll-form` — будь-яка CTA, що веде до форми hero (скрол + на мобайлі
  розкриття форми `#lead-form-anchor` → клас `.is-open`).
- `data-lead-form` + всередині `.lp-form__fields` і `.lp-form__success` —
  форми; сабміт показує success і пише payload у `console.info('[lead-form]')`.
- Квіз: контейнер `data-quiz`, кроки `data-quiz-step="0..4|result"`, відповіді
  `data-quiz-answer`, контакт-форма `data-quiz-contact`, прогрес
  `data-quiz-progress-*`, назад `data-quiz-back`.
- FAQ: `data-faq`, айтеми `data-faq-item`, перший відкритий на десктопі —
  `data-open-desktop`.
- Exit-intent: `#exit-popup-root`, кнопки `data-exit-cta` / `data-exit-dismiss`
  (тільки десктоп, раз за сесію).
- Липка шапка/панель: `#site-header`, `#mobile-sticky-bar`, спостерігають за
  `#top` (hero) і формами.

## 7. Плейсхолдери — що чекає на заміну

- Фото-плейсхолдери (клас `.v2-ph`, пунктирні панелі з підписом «Місце під
  фото») у блоках problem (на сторінці /v2.html) і team — замінити на живі
  фото: геометрія готова, треба лише підставити зображення.
- Кейси в `CasesBV2.html`: слоти «Лого клієнта» і приклади метрик — замінити
  реальними даними після погодження (примітка під сіткою тоді видаляється).
- Кнопка відео в team веде на сторінку сайту з наявним відео — за потреби
  замінити на вбудований плеєр.
- Фото hero: `public/assets/hero-capitol-full.jpg` (public domain, Wikimedia).
  Якщо клієнт дасть свій кадр — просто замінити файл, пропорції ~2400×1240.

## 8. Що підключити перед запуском трафіку

1. **CRM:** сабміти форм і квіза зараз лише логують payload у консоль — шов
   для інтеграції у `scripts/lead-form.js` (initLeadForms) і
   `scripts/quiz.js` (сабміт `data-quiz-contact`).
2. Телефон 201-567-6646 зашитий у компонентах — за потреби кол-трекінгу
   замінити глобальним пошуком.
3. Аналітика/півень конверсій — не підключені.

## 9. Чеклист перед комітом

- [ ] `npm run build` проходить без помилок.
- [ ] Перевірені десктоп (1440) і мобайл (390): нічого не переповнюється по
      горизонталі, sticky-панель і форма працюють.
- [ ] Консоль браузера чиста (крім `[lead-form]`/`[quiz]` логів).
- [ ] Не зачеплені заморожені v1-сторінки (`/v1.html`, `/variant-b.html`) —
      якщо правили спільний файл, відкрийте їх і переконайтесь.
- [ ] Нові стилі використовують токени ДС (жодних нових hex/шрифтів/ширин).
- [ ] Тексти відповідають копідеку дослівно; цифри — тільки затверджені.
