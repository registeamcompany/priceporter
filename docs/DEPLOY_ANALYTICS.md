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

## 3. Google Sheets для лідів (робиться з нуля — на основному сайті інтеграції немає)

1. Створити Google Таблицю з листом `Leads` і шапкою:
   `submittedAt | formId | name | company | email | phone | answers | page`
2. Extensions → Apps Script, вставити:

```js
const SHEET_NAME = 'Leads';
const NOTIFY_EMAIL = ''; // опційно: 'salesteam@pricereporter.com'

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  sheet.appendRow([
    data.submittedAt || new Date().toISOString(),
    data.formId || '',
    data.name || '',
    data.company || '',
    data.email || '',
    data.phone || '',
    data.answers || '',
    data.page || '',
  ]);
  if (NOTIFY_EMAIL) {
    MailApp.sendEmail(
      NOTIFY_EMAIL,
      'New lead: ' + (data.formId || 'consulting landing'),
      Object.entries(data).map(([k, v]) => k + ': ' + v).join('\n')
    );
  }
  return ContentService.createTextOutput('ok');
}
```

3. Deploy → New deployment → тип **Web app**: Execute as **Me**, Who has access —
   **Anyone**. Скопіювати URL виду `https://script.google.com/macros/s/…/exec`.
4. Вставити URL у `LEAD_ENDPOINT` (`src/scripts/leads.js`), `npm run build`,
   перезалити, purge CF.

---

## 4. Перевірка після першої заливки (5 хв, потрібен доступ до GTM)

1. GTM Preview прямо на `https://consulting.pricereporter.com` — переконатися, що
   контейнер вантажиться і по сабміту форми прилітає `all_form_submit`.
2. **Перевірити тригери 3 тегів конверсій Google Ads**: якщо вони прив'язані до
   URL `pricereporter.com/thanks-page/` або хоста основного домену — додати
   `consulting.pricereporter.com` в умови тригерів.
3. Кросдомен GA4 налаштовувати не треба (той самий домен, cookie спільні).
4. Тестовий сабміт кожної з трьох форм → рядки в Таблиці + події в GTM Preview.
