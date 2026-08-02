# ONBOARDING — Лендінг Price Reporter «Get a GSA Contract»

Інструкція для нового розробника або AI-агента: як влаштований проєкт, як вносити зміни і як передати роботу наступному агенту. 

Прочитайте цей файл ПЕРШИМ, потім `AI_DEVELOPMENT_GUIDE.md` і `README.md`.

---

## 1. Поточний статус проєкту & Головний Лендінг

Проєкт розроблено як **єдиний Direct-Response Лендінг** на базі Vite + Vanilla HTML/CSS/JS.

**Єдиний бойовий головний лендінг — `/index.html`** (Entry Script: `/src/main.js`).
Усі застарілі та тестові варіанти сторінок (`v1.html`, `v2.html`, `v2-b.html`, `variant-b.html`) та зайві точки входу скриптів прибрано, щоб не плутати наступних агентів.

### Послідовність блоків на головній сторінці:
1. `header` — Глобальна липка шапка з кнопками зв'язку (`Header.html`)
2. `hero` — Перший екран із фото Капітолія та формою заявки (`HeroBV2.html`)
3. `trust-bar` — Логотипи довіри та акредитації (`TrustBarB2.html`)
4. `prize` — Баннер обсягу ринку $52 Billion (`PrizeBV2.html`)
5. `how-it-works` — 5 кроків отримання контракту (`HowItWorksB2.html`)
6. `reassurance` — Гарантії та зниження ризиків (`ReassuranceB.html`)
7. `social-proof` — Кейси зростання клієнтів (`CasesBV2.html`)
8. `why-pr` — Послуги "Win it. Run it. Grow it." із векторами схем (`WhyPRB2.html`)
9. `quiz` — Інтерактивна перевірка відповідності GSA (`QuizB2.html`)
10. `timing` — Блок "Why right now" із логом аудиту GSA (`TimingB.html`)
11. `team` — Блок "Since 2006. Still picking up the phone." із реальним фото команди (`TeamBV2.html`)
12. `testimonials` — Відгуки клієнтів з реальними логотипами (*Fisher Scientific, Darley, Adorama, SF Cable, FCI Tech*) (`TestimonialsB2.html`)
13. `faq` — Питання та відповіді (`FaqB2.html`)
14. `final-cta` — Фінальна форма заявки (`FinalCtaB.html`)
15. `footer` — Футер (`Footer.html`)

---

## 2. Швидкий старт для розробника / AI-агента

```bash
npm install
npm run dev      # Dev-сервер, http://localhost:5173
npm run build    # Продакшн-збірка сторінки → dist/
npm run preview  # Локальний перегляд збірки, http://localhost:4173
```

Окруження: Node 18+. Жодних TailwindCSS чи сторонніх бібіліотек — тільки нативний модульний Vanilla CSS на токенах дизайн-системи Price Reporter.

---

## 3. Останні зміни, внесені під час сесії

1. **Оновлення блоку послуг (`WhyPRB2.html`)**:
   - Видалено написи `Phase 01/02/03`.
   - Впроваджено векторні схеми процесів:
     - `Win it.`: Векторний Milestone Workflow (`SAM.gov` → `GSA Negotiations` → `GSA Awarded`).
     - `Run it.`: Дашборд моніторингу супроводу (`Modifications`, `5-Year Renewals`, `IFF & TDR Audits`).
     - `Grow it.`: Enterprise Hub (`1,000,000+ Orders Processed` + чіпи інтеграцій *GSA Advantage*, *DOD/DLA*, *FedMall*, *EDI/QuickBooks*).

2. **Оновлення блоку ринку (`TimingB.html`)**:
   - Оформлено у вигляді картки-контейнера `.lp-why-card` (`#f8fafc`).
   - Створено схему **Multiple Award Schedule • GSA Audit Log** з бейджами статусу вендорів.

3. **Оновлення блоку команди (`TeamBV2.html`)**:
   - Встановлено **реальне фото команди Price Reporter** (`public/assets/images/priceteam.jpg`).
   - Інвертовано композицію (Фото ЛІВОРУЧ, текст РАВОРУЧ) для створення візуального ритму.

4. **Новий блок відгуків (`TestimonialsB2.html`)**:
   - Розміщено строго **ПІД блоком команди** (`#team` → `#testimonials`).
   - Створено унікальний UI-дизайн з 3 частин:
     1. Рядок білих фреймів із реальними логотипами клієнтів з `pricereporter.com/testimonials/` (*Fisher Scientific, Darley, Adorama, SF Cable, FCI Tech, Pacific Link*).
     2. Темно-синій редакторський спотлайт-блок для ключової історії OS4.
     3. Горизонтальні рядкові смуги відгуків (`.lp-review-strip`).
   - Прибрано всі стокові зірочки.

5. **Очищення та консолідація**:
   - `index.html` є єдиним файлом збірки.
   - Скрипт ядра збережено у `/src/main.js`.
   - Файли `v1.html`, `v2.html`, `v2-b.html`, `variant-b.html` видалено.

---

## 4. Карта компонентів та стилів

| Блок (id у каркасі) | Компонент | CSS | Скрипт |
|---|---|---|---|
| header | `components/Header.html` | `styles/header.css` | `sticky-ui.js` |
| hero | `components/v2/HeroBV2.html` | `styles/v2/hero-v2.css` + `v2/hero-photo.css` | `lead-form.js` |
| trust-bar | `components/v2/TrustBarB2.html` | `styles/trust-bar.css` | — |
| prize | `components/v2/PrizeBV2.html` | `styles/prize.css` + `v2/stats-v2.css` | — |
| how-it-works | `components/v2/HowItWorksB2.html` | `styles/how-it-works.css` | — |
| reassurance | `components/b/ReassuranceB.html` | `styles/reassure.css` | — |
| social-proof | `components/v2/CasesBV2.html` | `styles/v2/cases-v2.css` | — |
| why-pr | `components/v2/WhyPRB2.html` | `styles/services.css` | — |
| quiz | `components/v2/QuizB2.html` | `styles/quiz.css` | `quiz.js` |
| timing | `components/b/TimingB.html` | `styles/why-2026.css` | — |
| team | `components/v2/TeamBV2.html` | `styles/v2/team-v2.css` | — |
| testimonials | `components/v2/TestimonialsB2.html` | `styles/v2/testimonials-v2.css` | — |
| faq | `components/v2/FaqB2.html` | `styles/faq.css` | `faq.js` |
| final-cta | `components/b/FinalCtaB.html` | `styles/final-cta.css` | `lead-form.js` |
| footer | `components/Footer.html` | `styles/footer.css` | — |

---

## 5. Гайд передачі проєкту іншому AI-агенту

Якщо ви новий AI-агент, який отримав цей проєкт для подальшої роботи:

1. **Не змінюйте текст копідеку**: тексти у розробці є 100% вербатім за узгодженням із замовником.
2. **Для зміни блоку X**: відкривайте ТІЛЬКИ його файл у `src/components/` та `src/styles/`.
3. **Перед комітом / завершенням таски**: завжди запускайте `npm run build` для перевірки відсутності синтаксичних помилок.
