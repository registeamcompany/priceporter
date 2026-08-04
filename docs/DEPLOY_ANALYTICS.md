# consulting.pricereporter.com — деплой, аналітика, ліди

Технічна пам'ятка за хендофом від 2026-08-04. Що вже зроблено в коді і що треба
зробити руками на боці сервера / Google-акаунтів.

---

## 1. Що вже вшито в код лендінгу

### GTM `GTM-TX2D2N6`
- Сніпет у `<head>` (одразу після `<meta charset>`) та `<noscript>`-iframe одразу
  після `<body>` — `index.html`, 1-в-1 з бойового сайту.
- Жодних окремих пікселів у коді немає і додавати НЕ треба: GA4, Ads, Meta,
  Clarity, Hotjar, Bing, LinkedIn, Reddit приходять зсередини контейнера.

### Контракт dataLayer
Після успішної відправки будь-якої форми пушиться та сама подія, що на основному
сайті (`src/scripts/leads.js` → `trackFormSubmit`):

```js
dataLayer.push({
  event: 'all_form_submit',
  formId: '<ідентифікатор форми>',
  formSubmitUrl: window.location.href,
});
```

Ідентифікатори форм на лендінгу:

| Форма | formId |
|---|---|
| Hero (перший екран) | `consulting-hero-form` |
| Фінальна CTA-форма | `consulting-final-cta-form` |
| Квіз (контактний крок) | `consulting-quiz` |

### Відправка лідів
`src/scripts/leads.js` → `sendLead()`: POST (`text/plain`, `no-cors`,
fire-and-forget) на Apps Script Web App. Поки константа `LEAD_ENDPOINT` порожня —
відправка пропускається, форма все одно показує success і пушить dataLayer.

**Після деплою Apps Script (розділ 3) вставити URL у `LEAD_ENDPOINT` і перезібрати.**

---

## 2. Деплой на сервер

1. `npm run build` → готова статика у `dist/`.
2. Залити вміст `dist/` у `/www/wwwroot/consulting.pricereporter.com` (origin
   157.245.131.130, той самий сервер, що й основний сайт; окремий vhost, WordPress
   не чіпаємо).
3. **Piddомен проксується через Cloudflare** (на відміну від основного домену) —
   після КОЖНОЇ заливки робити purge кешу CF для `consulting.pricereporter.com`,
   інакше правки не видно.

---

## 3. Google Sheets для лідів — ІСНУЮЧА таблиця клієнта

Ліди падають у вже існуючу таблицю клієнта з 25 колонками:

`Timestamp | Form | Page URL | IP | Name | Company | Email | Phone | GSA/VA Contract # | Note | hello | Message | your-company | your-phone | Position | Business Name | Website | Have you been in business for at least 2 years? | Have you generated over $100k in revenue in each of the last 2 consecutive years? | What category of products/services do you sell? | Do you offer products or services? | Checked Manufacturers | utm-tag | Subject | pdf-link`

### Мапінг наших форм на колонки

| Колонка таблиці | Звідки береться |
|---|---|
| Timestamp | `submittedAt` (ISO, момент сабміту) |
| Form | `formId`: `consulting-hero-form` / `consulting-final-cta-form` / `consulting-quiz` |
| Page URL | `page` |
| IP | — (Apps Script не бачить IP відправника; див. примітку нижче) |
| Name / Company / Email / Phone | однойменні поля форм |
| Note | для квіза: `U.S.-made / TAA-compliant: <відповідь Q4>` |
| Have you been in business…? | квіз Q1 «How long has your company been in business?» |
| Have you generated over $100k…? | квіз Q2 «Is your annual revenue above $100K?» |
| Do you offer products or services? | квіз Q3 «What do you sell?» |
| utm-tag | UTM/click-id параметри з URL приземлення (`utm_*`, gclid, msclkid, fbclid), зберігаються на сесію |
| решта (hello, Message, your-*, Position, Business Name, Website, GSA/VA #, Category, Checked Manufacturers, Subject, pdf-link) | порожні — це поля форм основного сайту |

### Безпека існуючого потоку лідів

Скрипт робить тільки `appendRow` (дописує рядки знизу): шапку, існуючі рядки,
форматування і те, як у таблицю пишуть інші джерела (CF7-конектор тощо), він не
чіпає. Щоб гарантовано не зачепити скрипти, які вже можуть бути прив'язані до
таблиці, робимо **standalone-скрипт** (НЕ через Extensions → Apps Script у самій
таблиці) — він живе окремо і відкриває таблицю за ID.

### Кроки (~10 хв, потрібен доступ на редагування таблиці)

1. Взяти ID таблиці з її URL: `docs.google.com/spreadsheets/d/<SHEET_ID>/edit`.
2. Зайти на **script.google.com** → New project, вставити:

```js
const SHEET_ID = '<SHEET_ID з URL таблиці>';
const SHEET = SpreadsheetApp.openById(SHEET_ID).getSheets()[0]; // перший лист
const NOTIFY_EMAIL = ''; // опційно: 'salesteam@pricereporter.com'

function doPost(e) {
  const d = JSON.parse(e.postData.contents);
  SHEET.appendRow([
    d.submittedAt || new Date().toISOString(), // Timestamp
    d.formId || '',                            // Form
    d.page || '',                              // Page URL
    '',                                        // IP (недоступний з Apps Script)
    d.name || '',                              // Name
    d.company || '',                           // Company
    d.email || '',                             // Email
    d.phone || '',                             // Phone
    '',                                        // GSA/VA Contract #
    d.note || '',                              // Note (квіз: TAA-відповідь)
    '', '', '', '', '', '', '',                // hello…Website (поля основного сайту)
    d.inBusiness || '',                        // Have you been in business ≥2 years?
    d.revenue || '',                           // Have you generated over $100k…?
    '',                                        // What category…? (у квізі немає)
    d.productsOrServices || '',                // Do you offer products or services?
    '',                                        // Checked Manufacturers
    d.utm || '',                               // utm-tag
    '',                                        // Subject
    '',                                        // pdf-link
  ]);
  if (NOTIFY_EMAIL) {
    MailApp.sendEmail(
      NOTIFY_EMAIL,
      'New lead: ' + (d.formId || 'consulting landing'),
      Object.entries(d).map(([k, v]) => k + ': ' + v).join('\n')
    );
  }
  return ContentService.createTextOutput('ok');
}
```

3. Deploy → New deployment → тип **Web app**: Execute as **Me**, Who has access —
   **Anyone**. Скопіювати URL виду `https://script.google.com/macros/s/…/exec`.
   (При першому деплої Google попросить дозвіл на доступ скрипта до таблиці —
   це нормально.)
4. Вставити URL у `LEAD_ENDPOINT` (`src/scripts/leads.js`), `npm run build`,
   перезалити, purge CF.
5. Тест: відправити тестовий лід з лендінгу → у таблиці знизу з'явиться рядок
   з `Form = consulting-…`; існуючі ліди й механізм основного сайту не змінюються.

**Про колонку IP:** Google Apps Script принципово не віддає IP того, хто зробив
запит (запити приходять через проксі Google). Якщо IP критичний — варіант:
на лендінгу перед відправкою робити запит до зовнішнього сервісу (наприклад,
`api.ipify.org`) і слати IP у payload. Це +1 сторонній запит на сторінці —
впроваджуємо тільки якщо клієнт підтвердить, що IP справді потрібен.

---

## 4. Перевірка після першої заливки (5 хв, потрібен доступ до GTM)

1. GTM Preview прямо на `https://consulting.pricereporter.com` — переконатися, що
   контейнер вантажиться і по сабміту форми прилітає `all_form_submit`.
2. **Перевірити тригери 3 тегів конверсій Google Ads**: якщо вони прив'язані до
   URL `pricereporter.com/thanks-page/` або хоста основного домену — додати
   `consulting.pricereporter.com` в умови тригерів.
3. Кросдомен GA4 налаштовувати не треба (той самий домен, cookie спільні).
4. Тестовий сабміт кожної з трьох форм → рядки в Таблиці + події в GTM Preview.
