/* @ds-bundle: {"format":4,"namespace":"PriceReporterDesignSystem_2cd382","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"CTABanner","sourcePath":"components/surfaces/CTABanner.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"LinkTile","sourcePath":"components/surfaces/LinkTile.jsx"},{"name":"SectionHeading","sourcePath":"components/surfaces/SectionHeading.jsx"},{"name":"BoxedHeading","sourcePath":"components/surfaces/SectionHeading.jsx"},{"name":"ServiceCard","sourcePath":"components/surfaces/ServiceCard.jsx"},{"name":"StatCard","sourcePath":"components/surfaces/StatCard.jsx"},{"name":"NumbersBand","sourcePath":"components/surfaces/StatCard.jsx"},{"name":"Testimonial","sourcePath":"components/surfaces/Testimonial.jsx"},{"name":"ValueItem","sourcePath":"components/surfaces/ValueItem.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"302d27bdd78b","components/core/Button.jsx":"bd9eb89a26bb","components/core/Icon.jsx":"a9156731bf89","components/core/IconButton.jsx":"b51d1c9d8e6a","components/core/Logo.jsx":"353fc6823dd0","components/core/Tag.jsx":"b21bb8ed1c0d","components/data/DataTable.jsx":"eb7f6a3eeb01","components/feedback/Alert.jsx":"8c0cd8e81ba8","components/feedback/Dialog.jsx":"527f103a19c6","components/feedback/Tooltip.jsx":"79d239a2606c","components/forms/Checkbox.jsx":"52c1aa70c6ad","components/forms/Input.jsx":"3fe51c40395f","components/forms/Radio.jsx":"bb81a3208154","components/forms/Select.jsx":"a107c6220eb7","components/forms/Switch.jsx":"5e23b6e819a7","components/navigation/Accordion.jsx":"7a1010453546","components/navigation/Breadcrumb.jsx":"b915d476eba3","components/navigation/Tabs.jsx":"d16bd37e9691","components/surfaces/CTABanner.jsx":"1a756e01a5b6","components/surfaces/Card.jsx":"222dc83c07d4","components/surfaces/LinkTile.jsx":"0dc0567905ee","components/surfaces/SectionHeading.jsx":"cdcd9de80287","components/surfaces/ServiceCard.jsx":"48e1686a7f24","components/surfaces/StatCard.jsx":"795bbca39a0a","components/surfaces/Testimonial.jsx":"e54fbe2db60b","components/surfaces/ValueItem.jsx":"25db089c4f9e","ui_kits/landing/LandingPage.jsx":"c7b3a95814ce","ui_kits/landing/LeadForm.jsx":"60e2a9905d96","ui_kits/portal/AppShell.jsx":"3bbaf2a9d00f","ui_kits/portal/CatalogUploadScreen.jsx":"f48ccb7c1385","ui_kits/portal/ComplianceScreen.jsx":"39a83b633a6e","ui_kits/portal/DashboardScreen.jsx":"d64b11bdb273","ui_kits/website/ArticlePage.jsx":"21f62919602e","ui_kits/website/ContactPage.jsx":"ac11a88ad600","ui_kits/website/HomePage.jsx":"86fefa43c34b","ui_kits/website/ServicePage.jsx":"4b2c0a7e596f","ui_kits/website/SiteChrome.jsx":"861669d91ace"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PriceReporterDesignSystem_2cd382 = window.PriceReporterDesignSystem_2cd382 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Masked-SVG icon. Glyphs are Lucide SVGs copied into assets/icons/. */
function Icon({
  name,
  size = 20,
  color,
  base,
  className = '',
  style,
  ...rest
}) {
  const root = base || typeof window !== 'undefined' && window.PR_ICON_BASE || 'assets/icons/';
  const url = `url("${root}${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ('pr-icon ' + className).trim(),
    "aria-hidden": "true",
    style: {
      width: size,
      height: size,
      background: color || 'currentColor',
      WebkitMaskImage: url,
      maskImage: url,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  children,
  tone = 'neutral',
  variant = 'soft',
  icon,
  className = '',
  ...rest
}) {
  const cls = ['pr-badge', 'pr-badge--' + variant, 'pr-badge--' + tone, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  onDark = false,
  href,
  disabled = false,
  className = '',
  ...rest
}) {
  const cls = ['pr-btn', 'pr-btn--' + variant, size !== 'md' ? 'pr-btn--' + size : '', fullWidth ? 'pr-btn--full' : '', onDark ? 'pr-btn--on-dark' : '', className].filter(Boolean).join(' ');
  const iconSize = size === 'lg' ? 20 : 16;
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: iconSize
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: iconSize
  }) : null);
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href
  }, rest), inner);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: rest.type || 'button',
    disabled: disabled
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  className = '',
  ...rest
}) {
  const cls = ['pr-iconbtn', 'pr-iconbtn--' + size, 'pr-iconbtn--' + variant, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: "button",
    "aria-label": label,
    title: label
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 16 : size === 'lg' ? 22 : 18
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILES = {
  'horizontal-color': 'logo-horizontal-color.png',
  'horizontal-mono': 'logo-horizontal-mono.png',
  'stacked-color': 'logo-stacked-color.png',
  'stacked-mono': 'logo-stacked-mono.png',
  'mark-color': 'mark-color.png',
  'mark-mono': 'mark-mono.png'
};
function Logo({
  variant = 'horizontal',
  tone = 'color',
  height = 34,
  base,
  className = '',
  style,
  ...rest
}) {
  const root = base || typeof window !== 'undefined' && window.PR_ASSET_BASE || 'assets/';
  const key = (variant === 'mark' ? 'mark' : variant) + '-' + tone;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ('pr-logo ' + className).trim(),
    style: style
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: root + (FILES[key] || FILES['horizontal-color']),
    alt: "PriceReporter",
    style: {
      height
    }
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  active = false,
  onRemove,
  onClick,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ('pr-tag ' + className).trim(),
    "data-active": active || undefined,
    "data-clickable": onClick ? 'true' : undefined,
    onClick: onClick
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("button", {
    className: "pr-tag__remove",
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DataTable({
  columns = [],
  rows = [],
  compact = false,
  striped = false,
  footer,
  onSort,
  sortKey,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ('pr-table-wrap ' + className).trim()
  }, rest), /*#__PURE__*/React.createElement("table", {
    className: ['pr-table', compact ? 'pr-table--compact' : '', striped ? 'pr-table--striped' : ''].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    "data-align": c.align,
    style: c.width ? {
      width: c.width
    } : undefined
  }, c.sortable && onSort ? /*#__PURE__*/React.createElement("button", {
    className: "pr-table__sort",
    type: "button",
    onClick: () => onSort(c.key)
  }, c.label, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: sortKey === c.key ? 'arrow-down' : 'chevrons-up-down',
    size: 12
  })) : c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.id != null ? r.id : i
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    "data-align": c.align,
    className: c.strong ? 'pr-table__strong' : undefined
  }, c.render ? c.render(r) : r[c.key])))))), footer ? /*#__PURE__*/React.createElement("div", {
    className: "pr-table__foot"
  }, footer) : null);
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICONS = {
  info: 'info',
  success: 'circle-check',
  warning: 'triangle-alert',
  danger: 'circle-alert'
};
function Alert({
  tone = 'info',
  title,
  children,
  onClose,
  icon,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['pr-alert', 'pr-alert--' + tone, className].filter(Boolean).join(' '),
    role: tone === 'danger' ? 'alert' : 'status'
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "pr-alert__icon",
    name: icon || ICONS[tone],
    size: 18
  }), /*#__PURE__*/React.createElement("div", null, title ? /*#__PURE__*/React.createElement("p", {
    className: "pr-alert__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("p", {
    className: "pr-alert__body"
  }, children) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    className: "pr-alert__close",
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 15
  })) : null);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = false,
  title,
  description,
  children,
  footer,
  onClose,
  icon,
  className = '',
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "pr-dialog__scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: ('pr-dialog ' + className).trim(),
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "pr-dialog__head"
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--blue-50)',
      color: 'var(--brand-primary)',
      display: 'grid',
      placeItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 19
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title ? /*#__PURE__*/React.createElement("h3", {
    className: "pr-dialog__title"
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    className: "pr-dialog__desc"
  }, description) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    className: "pr-alert__close",
    type: "button",
    "aria-label": "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 17
  })) : null), children ? /*#__PURE__*/React.createElement("div", {
    className: "pr-dialog__body"
  }, children) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--space-5)'
    }
  }), footer ? /*#__PURE__*/React.createElement("div", {
    className: "pr-dialog__foot"
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  content,
  placement = 'top',
  children,
  className = '',
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ('pr-tooltip ' + className).trim(),
    "data-open": open ? 'true' : undefined,
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: "pr-tooltip__bubble",
    "data-placement": placement,
    role: "tooltip"
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  disabled = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ('pr-check ' + className).trim(),
    "data-disabled": disabled ? 'true' : undefined
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "pr-check__box"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "pr-check__tick",
    name: "check",
    size: 13
  })), /*#__PURE__*/React.createElement("span", {
    className: "pr-check__text"
  }, /*#__PURE__*/React.createElement("span", null, label), description ? /*#__PURE__*/React.createElement("span", {
    className: "pr-check__desc"
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function InputField({
  label,
  hint,
  error,
  required,
  htmlFor,
  children,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ('pr-field ' + className).trim()
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "pr-field__label",
    htmlFor: htmlFor
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "pr-field__req"
  }, "*") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    className: "pr-field__error"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-alert",
    size: 13
  }), error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "pr-field__hint"
  }, hint) : null);
}
function Input({
  label,
  hint,
  error,
  required,
  icon,
  prefix,
  suffix,
  size = 'md',
  multiline = false,
  onDark = false,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  const inputId = id || 'pr-in-' + (rest.name || Math.random().toString(36).slice(2, 7));
  const shellCls = ['pr-input', size !== 'md' ? 'pr-input--' + size : '', multiline ? 'pr-textarea' : '', onDark ? 'pr-input--on-dark' : ''].filter(Boolean).join(' ');
  const El = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement(InputField, {
    label: label,
    hint: hint,
    error: error,
    required: required,
    htmlFor: inputId,
    className: [className, onDark ? 'pr-field--on-dark' : ''].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("span", {
    className: shellCls,
    "data-invalid": error ? 'true' : undefined,
    "data-disabled": disabled ? 'true' : undefined
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "pr-input__icon",
    name: icon,
    size: 17
  }) : null, prefix ? /*#__PURE__*/React.createElement("span", {
    className: "pr-input__affix"
  }, prefix) : null, /*#__PURE__*/React.createElement(El, _extends({
    id: inputId,
    className: "pr-input__el",
    required: required,
    "aria-required": required || undefined,
    disabled: disabled
  }, rest)), suffix ? /*#__PURE__*/React.createElement("span", {
    className: "pr-input__affix"
  }, suffix) : null));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  disabled = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ('pr-check pr-check--radio ' + className).trim(),
    "data-disabled": disabled ? 'true' : undefined
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "pr-check__box"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pr-check__dot"
  })), /*#__PURE__*/React.createElement("span", {
    className: "pr-check__text"
  }, /*#__PURE__*/React.createElement("span", null, label), description ? /*#__PURE__*/React.createElement("span", {
    className: "pr-check__desc"
  }, description) : null));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SelectField({
  label,
  hint,
  error,
  required,
  htmlFor,
  children,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ('pr-field ' + className).trim()
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "pr-field__label",
    htmlFor: htmlFor
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "pr-field__req"
  }, "*") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    className: "pr-field__error"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-alert",
    size: 13
  }), error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "pr-field__hint"
  }, hint) : null);
}
function Select({
  label,
  hint,
  error,
  required,
  options = [],
  size = 'md',
  id,
  className = '',
  ...rest
}) {
  const selectId = id || 'pr-sel-' + (rest.name || Math.random().toString(36).slice(2, 7));
  return /*#__PURE__*/React.createElement(SelectField, {
    label: label,
    hint: hint,
    error: error,
    required: required,
    htmlFor: selectId,
    className: className
  }, /*#__PURE__*/React.createElement("span", {
    className: ['pr-select', size !== 'md' ? 'pr-select--' + size : ''].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    className: "pr-select__el",
    required: required,
    "aria-required": required || undefined
  }, rest), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const text = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "pr-select__chev",
    name: "chevron-down",
    size: 17
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  disabled = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ('pr-switch ' + className).trim(),
    "data-disabled": disabled ? 'true' : undefined
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "pr-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pr-switch__knob"
  })), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  defaultOpen,
  allowMultiple = false,
  className = '',
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen != null ? [defaultOpen] : []);
  const toggle = id => setOpen(cur => cur.includes(id) ? cur.filter(x => x !== id) : allowMultiple ? [...cur, id] : [id]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ('pr-acc ' + className).trim()
  }, rest), items.map(it => {
    const isOpen = open.includes(it.id);
    return /*#__PURE__*/React.createElement("div", {
      className: "pr-acc__item",
      key: it.id,
      "data-open": isOpen ? 'true' : undefined
    }, /*#__PURE__*/React.createElement("button", {
      className: "pr-acc__btn",
      type: "button",
      "aria-expanded": isOpen,
      onClick: () => toggle(it.id)
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      className: "pr-acc__chev",
      name: "chevron-right",
      size: 22
    }), /*#__PURE__*/React.createElement("span", null, it.question)), isOpen ? /*#__PURE__*/React.createElement("div", {
      className: "pr-acc__panel"
    }, it.answer) : null);
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumb({
  items = [],
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ('pr-crumbs ' + className).trim(),
    "aria-label": "Breadcrumb"
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: it.label
  }, i > 0 ? /*#__PURE__*/React.createElement("span", {
    className: "pr-crumbs__sep"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 13
  })) : null, it.href && i < items.length - 1 ? /*#__PURE__*/React.createElement("a", {
    href: it.href
  }, it.label) : /*#__PURE__*/React.createElement("span", {
    className: "pr-crumbs__current",
    "aria-current": "page"
  }, it.label))));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  className = '',
  ...rest
}) {
  const active = value != null ? value : items[0] && items[0].id;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['pr-tabs', variant === 'pill' ? 'pr-tabs--pill' : '', className].filter(Boolean).join(' '),
    role: "tablist"
  }, rest), items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    className: "pr-tab",
    type: "button",
    role: "tab",
    "aria-selected": it.id === active,
    onClick: () => onChange && onChange(it.id)
  }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 16
  }) : null, it.label, it.count != null ? /*#__PURE__*/React.createElement("span", {
    className: "pr-tab__count"
  }, it.count) : null)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/CTABanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CTABanner({
  eyebrow,
  title,
  description,
  actions,
  children,
  tone = 'navy',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    className: ['pr-cta', 'pr-cta--' + tone, className].filter(Boolean).join(' ')
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("div", {
    className: "pr-cta__eyebrow"
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    className: "pr-cta__title"
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    className: "pr-cta__desc"
  }, description) : null, children, actions ? /*#__PURE__*/React.createElement("div", {
    className: "pr-cta__actions"
  }, actions) : null);
}
Object.assign(__ds_scope, { CTABanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/CTABanner.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  eyebrow,
  title,
  footer,
  media,
  mediaAlt = '',
  variant = 'default',
  padding = 'md',
  interactive = false,
  as: As = 'div',
  className = '',
  ...rest
}) {
  const cls = ['pr-card', variant !== 'default' ? 'pr-card--' + variant : '', padding === 'lg' ? 'pr-card--lg' : '', media ? 'pr-card--flush' : '', className].filter(Boolean).join(' ');
  const body = /*#__PURE__*/React.createElement(React.Fragment, null, eyebrow ? /*#__PURE__*/React.createElement("div", {
    className: "pr-card__eyebrow"
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h3", {
    className: "pr-card__title"
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    className: "pr-card__body"
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    className: "pr-card__footer"
  }, footer) : null);
  return /*#__PURE__*/React.createElement(As, _extends({
    className: cls,
    "data-interactive": interactive ? 'true' : undefined
  }, rest), media ? /*#__PURE__*/React.createElement("img", {
    className: "pr-card__media",
    src: media,
    alt: mediaAlt
  }) : null, media ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--card-pad)'
    }
  }, body) : body);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/LinkTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LinkTile({
  label,
  depth = 1,
  head = false,
  icon,
  video = false,
  href = '#',
  className = '',
  ...rest
}) {
  const cls = ['pr-tile', depth > 1 ? 'pr-tile--' + depth : '', head ? 'pr-tile--head' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href
  }, rest), icon || video ? /*#__PURE__*/React.createElement("span", {
    className: "pr-tile__top"
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }) : /*#__PURE__*/React.createElement("span", null), video ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-play",
    size: 22
  }) : null) : null, /*#__PURE__*/React.createElement("span", {
    className: "pr-tile__label"
  }, label));
}
Object.assign(__ds_scope, { LinkTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/LinkTile.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  caps = true,
  className = '',
  ...rest
}) {
  const cls = ['pr-sectionhead', align === 'left' ? 'pr-sectionhead--left' : '', caps ? '' : 'pr-sectionhead--sentence', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("header", _extends({
    className: cls
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("div", {
    className: "pr-sectionhead__eyebrow"
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    className: "pr-sectionhead__title"
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    className: "pr-sectionhead__sub"
  }, description) : null);
}

/** Section heading that sits astride a navy keyline box, as in "OUR NUMBERS TELL THE STORY". */
function BoxedHeading({
  title,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    className: ('pr-boxed-head ' + className).trim()
  }, rest), /*#__PURE__*/React.createElement("h2", {
    className: "pr-boxed-head__title"
  }, title), children);
}
Object.assign(__ds_scope, { SectionHeading, BoxedHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ServiceCard({
  icon,
  title,
  description,
  cta = 'Learn more',
  href = '#',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    className: ('pr-service ' + className).trim(),
    href: href
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    className: "pr-service__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22
  })) : null, /*#__PURE__*/React.createElement("h3", {
    className: "pr-service__title"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "pr-service__rule"
  }), /*#__PURE__*/React.createElement("p", {
    className: "pr-service__desc"
  }, description), cta ? /*#__PURE__*/React.createElement("span", {
    className: "pr-service__cta"
  }, cta) : null);
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatCard({
  value,
  label,
  icon,
  suffixIcon,
  trend,
  trendDirection = 'up',
  tone = 'accent',
  boxed = false,
  className = '',
  ...rest
}) {
  const cls = ['pr-stat', tone !== 'accent' ? 'pr-stat--' + tone : '', boxed ? 'pr-stat--boxed' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    className: "pr-stat__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  })) : null, /*#__PURE__*/React.createElement("span", {
    className: "pr-stat__value"
  }, value, suffixIcon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: suffixIcon,
    size: 30
  }) : null), /*#__PURE__*/React.createElement("span", {
    className: "pr-stat__label"
  }, label), trend ? /*#__PURE__*/React.createElement("span", {
    className: "pr-stat__trend",
    "data-dir": trendDirection
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: trendDirection === 'down' ? 'arrow-down' : 'arrow-up',
    size: 13
  }), trend) : null);
}

/** The site's proof-point row: 7 orange figures with navy labels, inside a BoxedHeading. */
function NumbersBand({
  items = [],
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ('pr-numbers ' + className).trim()
  }, rest), items.map(s => /*#__PURE__*/React.createElement(StatCard, _extends({
    key: s.label
  }, s))));
}
Object.assign(__ds_scope, { StatCard, NumbersBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Testimonial({
  quote,
  brand,
  name,
  role,
  company,
  logo,
  moreHref,
  onPrev,
  onNext,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: ('pr-quote ' + className).trim(),
    style: {
      margin: 0
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "pr-quote__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr-quote__plate"
  }, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: company || ''
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h3)',
      color: 'var(--blue-900)',
      textAlign: 'center'
    }
  }, company)), /*#__PURE__*/React.createElement("div", {
    className: "pr-quote__body"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "pr-quote__title"
  }, "Testimonials"), /*#__PURE__*/React.createElement("blockquote", {
    className: "pr-quote__text",
    style: {
      margin: 0
    }
  }, brand ? /*#__PURE__*/React.createElement("strong", null, brand) : null, brand ? ' ' : null, quote), /*#__PURE__*/React.createElement("figcaption", {
    className: "pr-quote__who"
  }, [name, role, company].filter(Boolean).join(', ')))), moreHref || onPrev || onNext ? /*#__PURE__*/React.createElement("div", {
    className: "pr-quote__foot"
  }, moreHref ? /*#__PURE__*/React.createElement("a", {
    className: "pr-quote__more",
    href: moreHref
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 16
  }), "More testimonials") : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", {
    className: "pr-quote__nav"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Previous",
    onClick: onPrev,
    style: {
      background: 'none',
      border: 0,
      color: '#fff',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Next",
    onClick: onNext,
    style: {
      background: 'none',
      border: 0,
      color: '#fff',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 20
  })))) : null);
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ValueItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ValueItem({
  title,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ('pr-value ' + className).trim()
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "pr-value__glyph"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "pr-value__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "pr-value__body"
  }, children)));
}
Object.assign(__ds_scope, { ValueItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ValueItem.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/LandingPage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Logo,
  Icon,
  Badge,
  Card,
  SectionHeading,
  NumbersBand,
  ServiceCard,
  Testimonial,
  Accordion,
  CTABanner
} = window.PriceReporterDesignSystem_2cd382;
const PROOF = [{
  value: '20+',
  label: 'Years working with GSA'
}, {
  value: '400+',
  label: 'GSA contracts awarded'
}, {
  value: '1000+',
  label: 'Companies served'
}, {
  value: '2.5M+',
  label: 'GSA orders processed'
}, {
  value: '4.9',
  suffixIcon: 'star',
  label: 'Customer rating'
}];
const QUALIFY = [{
  icon: 'circle-check',
  title: 'You already sell commercially',
  body: 'Two years of trading history and financials you can share is the usual bar for a MAS award.'
}, {
  icon: 'shield-check',
  title: 'Your products are US or TAA made',
  body: "If you're unsure, we check country of origin for your whole catalog before you spend a dollar."
}, {
  icon: 'target',
  title: 'You want federal revenue, not a trophy',
  body: 'The average Schedule holder wins around $2.3M a year. It works when someone maintains the contract.'
}];
const SERVICES = [{
  title: 'Win the contract',
  description: 'Credential evaluation, competitor assessment, proposal, catalog and full GSA negotiation through to award.'
}, {
  title: 'Keep it compliant',
  description: 'Pricing optimization, modifications, compliance monitoring and contract extensions for the life of the contract.'
}, {
  title: 'Automate the orders',
  description: 'Our Order Management System streamlines your order life cycle and transactions with federal buyers.'
}, {
  title: 'Upload the catalog',
  description: 'Our GSA Advantage Catalog Upload Portal keeps your catalog current using EDI technology.'
}];
const STEPS = [{
  n: '1',
  t: 'Free consultation',
  d: 'One hour with a GSA specialist. We tell you honestly whether GSA is worth pursuing for your product line.'
}, {
  n: '2',
  t: 'Eligibility & pricing review',
  d: 'We check credentials, TAA compliance and where your prices need to land to be competitive.'
}, {
  n: '3',
  t: 'Proposal & negotiation',
  d: 'We assemble and submit the package, then handle clarifications, resubmissions and price agreement.'
}, {
  n: '4',
  t: 'Award & ongoing management',
  d: 'Catalog uploads, modifications and compliance — so the contract keeps producing revenue.'
}];
const FAQ = [{
  id: 'a',
  question: 'How long does it take to get a GSA contract?',
  answer: 'Preparation typically takes a few weeks; GSA review and negotiation then run several months. We give you a realistic timeline for your category on the first call.'
}, {
  id: 'b',
  question: 'What does it cost to work with Price Reporter?',
  answer: 'Scope and fees are agreed after the free consultation, once we know your category, catalog size and whether you need acquisition or management. No commitment before that.'
}, {
  id: 'c',
  question: 'Do you guarantee an award?',
  answer: 'No one honestly can. What we can tell you before you invest is whether your company is a realistic candidate — and we say so when it is not.'
}, {
  id: 'd',
  question: 'We already hold a Schedule. Can you take it over?',
  answer: 'Yes. Contract management, catalog uploads, modifications and compliance are a large part of what we do — 1500+ contracts are under our management.'
}, {
  id: 'e',
  question: 'How long do GSA contracts last?',
  answer: 'Five years initially, extendable up to 20 years in total.'
}];
function LandingPage() {
  const scrollToForm = () => {
    const el = document.getElementById('lead-top');
    if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 90,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": "refresh"
  }, /*#__PURE__*/React.createElement("header", {
    style: lpStyles.header
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr-container",
    style: lpStyles.headerInner
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 34
  }), /*#__PURE__*/React.createElement("span", {
    style: lpStyles.headerTrust
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "landmark",
    size: 15
  }), "GSA MAS contract specialists since 2006"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "tel:2015676646",
    style: lpStyles.headerPhone
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16
  }), "201.567.6646"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: scrollToForm
  }, "Free consultation"))), /*#__PURE__*/React.createElement("section", {
    style: lpStyles.hero
  }, /*#__PURE__*/React.createElement("span", {
    style: lpStyles.heroPhoto,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pr-container",
    style: lpStyles.heroGrid
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    variant: "solid"
  }, "Free 1-hour consultation"), /*#__PURE__*/React.createElement("h1", {
    style: lpStyles.heroTitle
  }, "Get on a GSA contract \u2014 and actually sell on it"), /*#__PURE__*/React.createElement("p", {
    style: lpStyles.heroLead
  }, "We have helped over 1000 contractors establish and grow their Government business: proposal to award, then pricing, catalog and compliance for the life of the contract."), /*#__PURE__*/React.createElement("ul", {
    style: lpStyles.heroTicks
  }, ['Free eligibility & TAA check', 'We write and negotiate the proposal', 'Catalog uploads and compliance handled after award'].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: lpStyles.heroTick
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 19,
    color: "var(--brand-accent)"
  }), t))), /*#__PURE__*/React.createElement("div", {
    style: lpStyles.heroProof
  }, PROOF.slice(0, 3).map(p => /*#__PURE__*/React.createElement("span", {
    key: p.label,
    style: lpStyles.heroProofItem
  }, /*#__PURE__*/React.createElement("strong", {
    style: lpStyles.heroProofValue
  }, p.value), /*#__PURE__*/React.createElement("span", {
    style: lpStyles.heroProofLabel
  }, p.label))))), /*#__PURE__*/React.createElement("div", {
    id: "lead-top",
    style: lpStyles.formCard
  }, /*#__PURE__*/React.createElement(window.LeadForm, {
    id: "lead-form-top"
  })))), /*#__PURE__*/React.createElement("section", {
    style: lpStyles.proofBar
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr-container"
  }, /*#__PURE__*/React.createElement(NumbersBand, {
    items: PROOF.map(p => ({
      ...p,
      tone: 'inverse'
    }))
  }))), /*#__PURE__*/React.createElement("section", {
    className: "pr-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr-container"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Is a GSA Schedule right for your business?",
    description: "Three things we check on the first call \u2014 before anyone talks about fees."
  }), /*#__PURE__*/React.createElement("div", {
    style: lpStyles.grid3
  }, QUALIFY.map(q => /*#__PURE__*/React.createElement(Card, {
    key: q.title,
    padding: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    style: lpStyles.qIcon
  }, /*#__PURE__*/React.createElement(Icon, {
    name: q.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("h3", {
    style: lpStyles.qTitle
  }, q.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-body)'
    }
  }, q.body)))))), /*#__PURE__*/React.createElement("section", {
    className: "pr-band pr-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr-container"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "What you get",
    description: "The same team that wins the contract is the team that maintains it."
  }), /*#__PURE__*/React.createElement("div", {
    style: lpStyles.grid4
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: s.title
  }, s, {
    cta: "Learn more",
    href: "#",
    onClick: e => {
      e.preventDefault();
      scrollToForm();
    }
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "pr-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr-container"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "How it works"
  }), /*#__PURE__*/React.createElement("div", {
    style: lpStyles.steps
  }, STEPS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: lpStyles.step
  }, /*#__PURE__*/React.createElement("span", {
    style: lpStyles.stepNum
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: lpStyles.stepTitle
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-body)'
    }
  }, s.d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: 'var(--section-y-tight)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr-container"
  }, /*#__PURE__*/React.createElement(Testimonial, {
    brand: "Price Reporter",
    quote: "are helping make my life much easier and helping me feel so much better about our GSA contract. Thanks!!!",
    name: "Kristen Briggs",
    role: "President",
    company: "General Mailing & Shipping Systems, Inc."
  }))), /*#__PURE__*/React.createElement("section", {
    className: "pr-band pr-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr-container",
    style: {
      maxWidth: 940
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Questions we get before the first call"
  }), /*#__PURE__*/React.createElement(Accordion, {
    items: FAQ
  }))), /*#__PURE__*/React.createElement("section", {
    className: "pr-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: lpStyles.closeGrid
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: lpStyles.closeTitle
  }, "Book the free consultation"), /*#__PURE__*/React.createElement("p", {
    className: "pr-lead",
    style: {
      maxWidth: '46ch'
    }
  }, "Tell us about your products and federal experience. In one hour you will know whether GSA is worth it, what it takes, and how long it should take."), /*#__PURE__*/React.createElement("ul", {
    style: lpStyles.closeList
  }, ['No obligation and no commitment', 'You speak to a GSA specialist, not a salesperson', 'Straight answer on whether you qualify'].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: lpStyles.heroTick
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    color: "var(--brand-accent)"
  }), t))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, "Prefer to talk now? ", /*#__PURE__*/React.createElement("a", {
    href: "tel:2015676646",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700
    }
  }, "201.567.6646"))), /*#__PURE__*/React.createElement("div", {
    style: lpStyles.formCard
  }, /*#__PURE__*/React.createElement(window.LeadForm, {
    id: "lead-form-bottom",
    compact: true
  }))))), /*#__PURE__*/React.createElement("footer", {
    className: "pr-inverse",
    style: lpStyles.footer
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr-container",
    style: lpStyles.footerInner
  }, /*#__PURE__*/React.createElement("span", {
    style: lpStyles.footerBrand
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "mark",
    height: 26
  }), /*#__PURE__*/React.createElement("span", {
    style: lpStyles.footerWord
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 500,
      color: 'var(--blue-300)'
    }
  }, "PRICE"), "REPORTER")), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "mailto:salesteam@pricereporter.com"
  }, "salesteam@pricereporter.com"), /*#__PURE__*/React.createElement("a", {
    href: "tel:2015676646"
  }, "201.567.6646"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Privacy policy"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-on-dark-muted)'
    }
  }, "\xA9 2026 Price Reporter"))), /*#__PURE__*/React.createElement("div", {
    style: lpStyles.sticky
  }, /*#__PURE__*/React.createElement("span", {
    style: lpStyles.stickyText
  }, "Free 1-hour GSA consultation \u2014 no obligation"), /*#__PURE__*/React.createElement("span", {
    style: lpStyles.stickyActions
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:2015676646",
    style: lpStyles.stickyPhone
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16
  }), "201.567.6646"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: scrollToForm,
    iconRight: "arrow-right"
  }, "Get my consultation"))));
}
const lpStyles = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 40,
    background: 'rgb(255 255 255 / .94)',
    backdropFilter: 'var(--overlay-blur)',
    borderBottom: '1px solid var(--border-subtle)'
  },
  headerInner: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-6)',
    minHeight: 76
  },
  headerTrust: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 7,
    font: 'var(--type-caption)',
    color: 'var(--text-muted)',
    paddingLeft: 'var(--space-5)',
    borderLeft: '1px solid var(--border-subtle)'
  },
  headerPhone: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 17,
    color: 'var(--blue-900)'
  },
  hero: {
    position: 'relative',
    overflow: 'hidden',
    background: 'var(--gradient-hero)',
    paddingTop: 'var(--space-11)',
    paddingBottom: 'var(--space-11)'
  },
  heroPhoto: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'url(../../assets/hero-capitol.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right bottom',
    backgroundSize: 'auto 112%',
    WebkitMaskImage: 'linear-gradient(to right, transparent 46%, #000 78%)',
    maskImage: 'linear-gradient(to right, transparent 46%, #000 78%)',
    opacity: .8,
    pointerEvents: 'none'
  },
  heroGrid: {
    position: 'relative',
    zIndex: 1,
    display: 'grid',
    gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,.95fr)',
    gap: 'var(--space-10)',
    alignItems: 'start'
  },
  heroTitle: {
    font: 'var(--type-display-1)',
    letterSpacing: 'var(--tracking-display)',
    color: 'var(--text-strong)',
    margin: 'var(--space-5) 0 var(--space-5)',
    maxWidth: '22ch'
  },
  heroLead: {
    font: 'var(--type-lead)',
    color: 'var(--text-body)',
    margin: 0,
    maxWidth: '52ch'
  },
  heroTicks: {
    listStyle: 'none',
    padding: 0,
    margin: 'var(--space-7) 0 0',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-3)'
  },
  heroTick: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    font: 'var(--type-body)',
    color: 'var(--text-strong)',
    margin: 0
  },
  heroProof: {
    display: 'flex',
    gap: 'var(--space-8)',
    marginTop: 'var(--space-8)',
    paddingTop: 'var(--space-6)',
    borderTop: '1px solid rgb(12 65 102 / .14)'
  },
  heroProofItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  },
  heroProofValue: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 30,
    color: 'var(--brand-accent)',
    letterSpacing: '-.02em'
  },
  heroProofLabel: {
    font: 'var(--type-caption)',
    color: 'var(--blue-900)',
    fontFamily: 'var(--font-display)',
    fontWeight: 700
  },
  formCard: {
    background: '#fff',
    border: '1px solid var(--neutral-150)',
    borderRadius: 'var(--radius-xl)',
    boxShadow: 'var(--shadow-lg)',
    padding: 'var(--card-pad-lg)'
  },
  proofBar: {
    background: 'var(--surface-inverse)',
    paddingBlock: 'var(--space-8)'
  },
  grid3: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gap: 'var(--space-6)'
  },
  grid4: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gap: 'var(--space-7)'
  },
  qIcon: {
    width: 46,
    height: 46,
    borderRadius: 'var(--radius-md)',
    display: 'grid',
    placeItems: 'center',
    background: 'var(--orange-50)',
    color: 'var(--brand-accent)',
    marginBottom: 'var(--space-5)'
  },
  qTitle: {
    font: 'var(--type-h4)',
    color: 'var(--text-strong)',
    margin: '0 0 var(--space-3)'
  },
  steps: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gap: 'var(--space-7)'
  },
  step: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-3)',
    paddingTop: 'var(--space-5)',
    borderTop: '3px solid var(--brand-accent)'
  },
  stepNum: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 15,
    color: 'var(--brand-accent)'
  },
  stepTitle: {
    font: 'var(--type-h4)',
    color: 'var(--text-strong)',
    margin: 0
  },
  closeGrid: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0,1fr) minmax(0,.9fr)',
    gap: 'var(--space-10)',
    alignItems: 'center'
  },
  closeTitle: {
    font: 'var(--type-display-2)',
    letterSpacing: 'var(--tracking-display)',
    color: 'var(--text-heading)',
    margin: '0 0 var(--space-4)'
  },
  closeList: {
    listStyle: 'none',
    padding: 0,
    margin: 'var(--space-6) 0 0',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-3)'
  },
  footer: {
    paddingBlock: 'var(--space-7)'
  },
  footerInner: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-6)',
    font: 'var(--type-body)',
    fontSize: 'var(--text-body-sm)',
    flexWrap: 'wrap'
  },
  footerBrand: {
    display: 'flex',
    alignItems: 'center',
    gap: 10
  },
  footerWord: {
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    fontSize: 15,
    letterSpacing: '.02em',
    color: '#fff'
  },
  sticky: {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 50,
    background: 'rgb(12 65 102 / .96)',
    backdropFilter: 'var(--overlay-blur)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 'var(--space-6)',
    padding: 'var(--space-4) var(--space-7)'
  },
  stickyText: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'var(--text-body-sm)'
  },
  stickyActions: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-5)'
  },
  stickyPhone: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    color: '#fff',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 16
  }
};
Object.assign(window, {
  LandingPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/LandingPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/LeadForm.jsx
try { (() => {
const {
  Button,
  Input,
  Select,
  Icon
} = window.PriceReporterDesignSystem_2cd382;
function LeadForm({
  id = 'lead',
  compact = false,
  onSubmit
}) {
  const [sent, setSent] = React.useState(false);
  if (sent) {
    return /*#__PURE__*/React.createElement("div", {
      style: leadFormStyles.done
    }, /*#__PURE__*/React.createElement("span", {
      style: leadFormStyles.doneIcon
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "circle-check",
      size: 28
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: '0 0 8px'
      }
    }, "Request received"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-muted)',
        margin: '0 0 20px'
      }
    }, "A GSA specialist will call you within one business day \u2014 usually the same afternoon."), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setSent(false)
    }, "Send another request"));
  }
  return /*#__PURE__*/React.createElement("form", {
    id: id,
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
      if (onSubmit) onSubmit();
    },
    style: leadFormStyles.form
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: leadFormStyles.title
  }, "Get your free GSA consultation"), /*#__PURE__*/React.createElement("p", {
    style: leadFormStyles.sub
  }, "One hour with a specialist. No obligation, no sales script.")), /*#__PURE__*/React.createElement("div", {
    style: leadFormStyles.row
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    required: true,
    placeholder: "Jane Contractor",
    autoComplete: "name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Company",
    required: true,
    placeholder: "Acme Supply Co.",
    autoComplete: "organization"
  })), /*#__PURE__*/React.createElement("div", {
    style: leadFormStyles.row
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    type: "email",
    required: true,
    icon: "mail",
    placeholder: "you@company.com",
    autoComplete: "email"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    icon: "phone",
    placeholder: "201.567.6646",
    autoComplete: "tel"
  })), compact ? null : /*#__PURE__*/React.createElement(Select, {
    label: "What do you need?",
    options: ['A new GSA contract', 'Help managing an existing contract', 'GSA Advantage catalog uploads', 'Order management automation', "I'm not sure yet"]
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "accent",
    size: "lg",
    fullWidth: true,
    iconRight: "arrow-right"
  }, "Get my free consultation"), /*#__PURE__*/React.createElement("p", {
    style: leadFormStyles.fine
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 13
  }), " Your details are used only to prepare your consultation. No lists, no resale."));
}
const leadFormStyles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-4)'
  },
  title: {
    font: 'var(--type-h3)',
    color: 'var(--text-strong)',
    margin: '0 0 6px'
  },
  sub: {
    font: 'var(--type-body)',
    fontSize: 'var(--text-body-sm)',
    color: 'var(--text-muted)',
    margin: 0
  },
  row: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
    gap: 'var(--space-4)'
  },
  fine: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    font: 'var(--type-caption)',
    color: 'var(--text-muted)',
    margin: 0
  },
  done: {
    textAlign: 'center',
    padding: 'var(--space-8) var(--space-4)'
  },
  doneIcon: {
    width: 60,
    height: 60,
    borderRadius: 'var(--radius-pill)',
    background: 'var(--green-100)',
    color: 'var(--green-500)',
    display: 'inline-grid',
    placeItems: 'center',
    marginBottom: 'var(--space-4)'
  }
};
Object.assign(window, {
  LeadForm
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/LeadForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/AppShell.jsx
try { (() => {
const {
  Logo,
  Icon,
  IconButton,
  Badge,
  Button
} = window.PriceReporterDesignSystem_2cd382;
const NAV = [{
  id: 'dashboard',
  label: 'Dashboard',
  icon: 'chart-column'
}, {
  id: 'orders',
  label: 'Orders',
  icon: 'receipt',
  count: 32
}, {
  id: 'catalog',
  label: 'Catalog upload',
  icon: 'upload'
}, {
  id: 'contracts',
  label: 'Contracts',
  icon: 'gavel'
}, {
  id: 'compliance',
  label: 'Compliance',
  icon: 'shield-check',
  dot: true
}, {
  id: 'reports',
  label: 'Reports',
  icon: 'file-text'
}];
function AppShell({
  route,
  onNavigate,
  title,
  subtitle,
  actions,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: shellStyles.root
  }, /*#__PURE__*/React.createElement("aside", {
    style: shellStyles.side
  }, /*#__PURE__*/React.createElement("div", {
    style: shellStyles.brand
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "mark",
    height: 30
  }), /*#__PURE__*/React.createElement("span", {
    style: shellStyles.brandWord
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 500,
      color: 'var(--blue-300)'
    }
  }, "PRICE"), "REPORTER")), /*#__PURE__*/React.createElement("div", {
    style: shellStyles.sideLabel
  }, "Order Management"), /*#__PURE__*/React.createElement("nav", {
    style: shellStyles.nav
  }, NAV.map(n => {
    const on = n.id === route;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      type: "button",
      onClick: () => onNavigate(n.id),
      style: {
        ...shellStyles.navItem,
        ...(on ? shellStyles.navItemOn : null)
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 17
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        textAlign: 'left'
      }
    }, n.label), n.count != null ? /*#__PURE__*/React.createElement("span", {
      style: shellStyles.navCount
    }, n.count) : null, n.dot ? /*#__PURE__*/React.createElement("span", {
      style: shellStyles.navDot
    }) : null);
  })), /*#__PURE__*/React.createElement("div", {
    style: shellStyles.sideFoot
  }, /*#__PURE__*/React.createElement("div", {
    style: shellStyles.helpCard
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone-call",
    size: 18,
    color: "var(--orange-300)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-on-dark-muted)'
    }
  }, "Your GSA specialist"), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontSize: 14
    }
  }, "Kate M. \xB7 ext. 214")))), /*#__PURE__*/React.createElement("div", {
    style: shellStyles.main
  }, /*#__PURE__*/React.createElement("header", {
    style: shellStyles.topbar
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: shellStyles.title
  }, title), subtitle ? /*#__PURE__*/React.createElement("p", {
    style: shellStyles.subtitle
  }, subtitle) : null), /*#__PURE__*/React.createElement("div", {
    style: shellStyles.topActions
  }, actions, /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: "Alerts",
    variant: "outline"
  }), /*#__PURE__*/React.createElement("span", {
    style: shellStyles.user
  }, /*#__PURE__*/React.createElement("span", {
    style: shellStyles.avatar
  }, "AS"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: shellStyles.userName
  }, "Acme Supply Co."), /*#__PURE__*/React.createElement("span", {
    style: shellStyles.userMeta
  }, "47QSWA18D008F")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 15,
    color: "var(--text-muted)"
  })))), /*#__PURE__*/React.createElement("div", {
    style: shellStyles.content
  }, children)));
}
const shellStyles = {
  root: {
    display: 'grid',
    gridTemplateColumns: '256px minmax(0,1fr)',
    minHeight: '100vh',
    background: 'var(--surface-subtle)'
  },
  side: {
    background: 'var(--surface-inverse)',
    display: 'flex',
    flexDirection: 'column',
    padding: 'var(--space-5) var(--space-4)',
    gap: 'var(--space-5)'
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '0 var(--space-2)'
  },
  brandWord: {
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    fontSize: 15,
    letterSpacing: '.02em',
    color: '#fff'
  },
  sideLabel: {
    font: 'var(--type-eyebrow)',
    letterSpacing: 'var(--tracking-caps)',
    textTransform: 'uppercase',
    color: 'var(--blue-300)',
    padding: '0 var(--space-2)'
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-3)',
    background: 'none',
    border: 0,
    cursor: 'pointer',
    color: 'var(--blue-200)',
    font: 'var(--type-button)',
    fontSize: 'var(--text-body-sm)',
    padding: '10px var(--space-3)',
    borderRadius: 'var(--radius-sm)',
    transition: 'var(--transition-control)'
  },
  navItemOn: {
    background: 'rgb(255 255 255 / .10)',
    color: '#fff',
    boxShadow: 'inset 2px 0 0 var(--orange-500)'
  },
  navCount: {
    font: 'var(--type-micro)',
    fontSize: 11,
    background: 'rgb(255 255 255 / .14)',
    padding: '1px 7px',
    borderRadius: 'var(--radius-pill)'
  },
  navDot: {
    width: 7,
    height: 7,
    borderRadius: '50%',
    background: 'var(--orange-500)'
  },
  sideFoot: {
    marginTop: 'auto'
  },
  helpCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    background: 'rgb(255 255 255 / .06)',
    border: '1px solid var(--border-on-dark)',
    borderRadius: 'var(--radius-md)',
    padding: 'var(--space-4)'
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0
  },
  topbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 'var(--space-6)',
    padding: 'var(--space-5) var(--space-7)',
    background: 'var(--surface-page)',
    borderBottom: '1px solid var(--border-subtle)'
  },
  title: {
    font: 'var(--type-h2)',
    margin: 0,
    color: 'var(--text-strong)'
  },
  subtitle: {
    font: 'var(--type-caption)',
    color: 'var(--text-muted)',
    margin: '4px 0 0'
  },
  topActions: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-3)'
  },
  user: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-3)',
    paddingLeft: 'var(--space-4)',
    borderLeft: '1px solid var(--border-subtle)',
    cursor: 'pointer'
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 'var(--radius-sm)',
    background: 'var(--blue-100)',
    color: 'var(--blue-700)',
    display: 'grid',
    placeItems: 'center',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 13
  },
  userName: {
    display: 'block',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 14,
    color: 'var(--text-strong)'
  },
  userMeta: {
    display: 'block',
    fontFamily: 'var(--font-mono)',
    fontSize: 11,
    color: 'var(--text-muted)'
  },
  content: {
    padding: 'var(--space-7)',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-6)'
  }
};
Object.assign(window, {
  AppShell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/CatalogUploadScreen.jsx
try { (() => {
const {
  Card,
  Button,
  Input,
  Select,
  Checkbox,
  Switch,
  Badge,
  DataTable,
  Alert,
  Icon,
  Dialog,
  Tabs
} = window.PriceReporterDesignSystem_2cd382;
const SKUS = [{
  id: 1,
  sku: 'ACM-1042',
  desc: 'Ruggedized laptop dock, USB-C',
  price: '$184.00',
  gsa: '$161.92',
  origin: 'USA',
  ok: true
}, {
  id: 2,
  sku: 'ACM-1188',
  desc: '27" LED monitor, government spec',
  price: '$312.00',
  gsa: '$274.56',
  origin: 'USA',
  ok: true
}, {
  id: 3,
  sku: 'ACM-2231',
  desc: 'Network switch, 24-port managed',
  price: '$1,120.00',
  gsa: '$985.60',
  origin: '—',
  ok: false
}, {
  id: 4,
  sku: 'ACM-3390',
  desc: 'Ergonomic task chair, mesh back',
  price: '$429.00',
  gsa: '$377.52',
  origin: 'USA',
  ok: true
}, {
  id: 5,
  sku: 'ACM-4410',
  desc: 'Toner cartridge, high yield black',
  price: '$96.50',
  gsa: '$84.92',
  origin: '—',
  ok: false
}];
function CatalogUploadScreen() {
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState('review');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: uploadStyles.stepper
  }, [['File', 'circle-check', true], ['Validation', 'circle-check', true], ['Review', 'eye', false], ['Submit to GSA', 'send', false]].map(([label, ic, done], i) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: uploadStyles.step
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...uploadStyles.stepDot,
      background: done ? 'var(--green-500)' : i === 2 ? 'var(--brand-primary)' : 'var(--neutral-200)',
      color: done || i === 2 ? '#fff' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 15
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 13,
      color: i <= 2 ? 'var(--text-strong)' : 'var(--text-muted)'
    }
  }, label), i < 3 ? /*#__PURE__*/React.createElement("span", {
    style: uploadStyles.stepLine
  }) : null))), /*#__PURE__*/React.createElement("div", {
    style: uploadStyles.grid
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      minWidth: 0
    },
    title: "Catalog file",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      icon: "check"
    }, "EDI ready"), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        display: 'flex',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconLeft: "download"
    }, "Download errors"), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      iconRight: "send",
      onClick: () => setOpen(true)
    }, "Submit to GSA Advantage")))
  }, /*#__PURE__*/React.createElement("div", {
    style: uploadStyles.dropzone
  }, /*#__PURE__*/React.createElement("span", {
    style: uploadStyles.dropIcon
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-check",
    size: 26
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, "acme-supply-catalog-jul26.xlsx"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, "4,182 SKUs \xB7 2.4 MB \xB7 uploaded 31 Jul, 01:58 ET")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconLeft: "refresh-cw"
  }, "Replace"))), /*#__PURE__*/React.createElement(Alert, {
    tone: "danger",
    title: "12 lines need attention"
  }, "Country of origin is required for every TAA-compliant line item."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: step,
    onChange: setStep,
    items: [{
      id: 'review',
      label: 'Flagged lines',
      count: 12
    }, {
      id: 'all',
      label: 'All SKUs',
      count: '4,182'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    compact: true,
    striped: true,
    columns: [{
      key: 'sku',
      label: 'SKU',
      strong: true
    }, {
      key: 'desc',
      label: 'Description'
    }, {
      key: 'price',
      label: 'List',
      align: 'right'
    }, {
      key: 'gsa',
      label: 'GSA price',
      align: 'right'
    }, {
      key: 'origin',
      label: 'Origin',
      align: 'center'
    }, {
      key: 'ok',
      label: 'Status',
      render: r => r.ok ? /*#__PURE__*/React.createElement(Badge, {
        tone: "success"
      }, "Ready") : /*#__PURE__*/React.createElement(Badge, {
        tone: "danger"
      }, "Origin missing")
    }],
    rows: SKUS,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "5 of 4,182 lines"), /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      iconRight: "download"
    }, "Export CSV"))
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    eyebrow: "Submission settings",
    title: "Upload options"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Contract",
    options: ['47QSWA18D008F — MAS', '47QSWA20D009X — MAS']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Upload type",
    options: ['Full catalog replace', 'Price change only', 'Add new SKUs']
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Modification number",
    hint: "Leave blank for routine catalog refresh",
    placeholder: "PA-0042"
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Auto-submit nightly at 02:00 ET",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Email me the EDI response",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "All lines are TAA compliant",
    description: "Required before GSA transmission"
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    variant: "sunken",
    eyebrow: "Last 3 uploads"
  }, /*#__PURE__*/React.createElement("ul", {
    style: uploadStyles.history
  }, [['31 Jul', '4,170 accepted', 'warning'], ['24 Jul', '4,182 accepted', 'success'], ['17 Jul', '4,180 accepted', 'success']].map(([d, r, tone]) => /*#__PURE__*/React.createElement("li", {
    key: d,
    style: uploadStyles.historyItem
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, d), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--text-body-sm)'
    }
  }, r), /*#__PURE__*/React.createElement(Badge, {
    tone: tone
  }, tone === 'success' ? 'Clean' : '12 errors'))))))), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    icon: "upload",
    title: "Submit catalog to GSA Advantage",
    description: "4,170 valid SKUs will be transmitted via EDI. The 12 flagged lines will be skipped.",
    onClose: () => setOpen(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      iconRight: "send",
      onClick: () => setOpen(false)
    }, "Transmit now"))
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Notify my GSA specialist when GSA responds",
    defaultChecked: true
  })));
}
const uploadStyles = {
  stepper: {
    display: 'flex',
    gap: 'var(--space-6)',
    background: 'var(--surface-page)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-card)',
    padding: 'var(--space-4) var(--space-6)'
  },
  step: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    position: 'relative',
    flex: 1
  },
  stepDot: {
    width: 28,
    height: 28,
    borderRadius: '50%',
    display: 'grid',
    placeItems: 'center',
    flex: 'none'
  },
  stepLine: {
    flex: 1,
    height: 1,
    background: 'var(--border-default)',
    marginLeft: 10
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0,1.65fr) minmax(0,.85fr)',
    gap: 'var(--space-5)',
    alignItems: 'start'
  },
  dropzone: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-4)',
    background: 'var(--surface-subtle)',
    border: '1px dashed var(--border-brand)',
    borderRadius: 'var(--radius-md)',
    padding: 'var(--space-5)',
    marginBottom: 'var(--space-5)'
  },
  dropIcon: {
    width: 46,
    height: 46,
    borderRadius: 'var(--radius-md)',
    background: 'var(--blue-100)',
    color: 'var(--brand-primary)',
    display: 'grid',
    placeItems: 'center',
    flex: 'none'
  },
  history: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-3)'
  },
  historyItem: {
    display: 'grid',
    gridTemplateColumns: '54px 1fr auto',
    alignItems: 'center',
    gap: 'var(--space-3)',
    margin: 0
  }
};
Object.assign(window, {
  CatalogUploadScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/CatalogUploadScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/ComplianceScreen.jsx
try { (() => {
const {
  Card,
  Button,
  Badge,
  DataTable,
  Alert,
  Accordion,
  Icon,
  StatCard,
  Tooltip,
  Breadcrumb
} = window.PriceReporterDesignSystem_2cd382;
function ComplianceScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Portal',
      href: '#'
    }, {
      label: 'Contract 47QSWA18D008F',
      href: '#'
    }, {
      label: 'Compliance'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: compStyles.stats
  }, /*#__PURE__*/React.createElement(StatCard, {
    boxed: true,
    tone: "brand",
    value: "97%",
    label: "Compliance score",
    icon: "shield-check",
    trend: "+3 pts this quarter"
  }), /*#__PURE__*/React.createElement(StatCard, {
    boxed: true,
    tone: "brand",
    value: "2",
    label: "Open modifications",
    icon: "file-text"
  }), /*#__PURE__*/React.createElement(StatCard, {
    boxed: true,
    tone: "accent",
    value: "21 days",
    label: "Price list expiry",
    icon: "clock"
  }), /*#__PURE__*/React.createElement(StatCard, {
    boxed: true,
    tone: "brand",
    value: "5 yrs",
    label: "Option period 2 of 4",
    icon: "calendar"
  })), /*#__PURE__*/React.createElement(Alert, {
    tone: "info",
    title: "Your specialist filed EPA modification PA-0042 on 24 July"
  }, "GSA review typically takes 15\u201330 days. We'll notify you the moment it is awarded."), /*#__PURE__*/React.createElement("div", {
    style: compStyles.grid
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      minWidth: 0
    },
    title: "Contract line items",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--text-muted)'
      }
    }, "6 SINs \xB7 4,182 awarded lines"), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconLeft: "pencil"
    }, "Request modification")))
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'sin',
      label: 'SIN',
      strong: true
    }, {
      key: 'name',
      label: 'Category'
    }, {
      key: 'lines',
      label: 'Lines',
      align: 'right'
    }, {
      key: 'sales',
      label: 'FY26 sales',
      align: 'right'
    }, {
      key: 'status',
      label: 'Status',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.tone
      }, r.status)
    }],
    rows: [{
      id: 1,
      sin: '33411',
      name: 'IT hardware',
      lines: '2,940',
      sales: '$1,204,880',
      status: 'Active',
      tone: 'success'
    }, {
      id: 2,
      sin: '511210',
      name: 'Software licences',
      lines: '412',
      sales: '$318,400',
      status: 'Active',
      tone: 'success'
    }, {
      id: 3,
      sin: '339940',
      name: 'Office supplies',
      lines: '618',
      sales: '$142,110',
      status: 'Price mod pending',
      tone: 'warning'
    }, {
      id: 4,
      sin: '561210FS',
      name: 'Facilities support',
      lines: '212',
      sales: '$88,300',
      status: 'Active',
      tone: 'success'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    eyebrow: "Checklist",
    title: "Post-award obligations"
  }, /*#__PURE__*/React.createElement("ul", {
    style: compStyles.list
  }, [['Quarterly sales reporting (72A)', true], ['Industrial Funding Fee remitted', true], ['Price list current on GSA Advantage', true], ['Country of origin on all lines', false], ['Trade Agreements Act compliance', true]].map(([t, ok]) => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: compStyles.item
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ok ? 'circle-check' : 'triangle-alert',
    size: 17,
    color: ok ? 'var(--green-500)' : 'var(--amber-500)'
  }), /*#__PURE__*/React.createElement("span", null, t))))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    eyebrow: "Reference",
    title: "What GSA checks"
  }, /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: "a",
    items: [{
      id: 'a',
      question: 'Pricing',
      answer: 'Your GSA prices must remain the best offered to comparable commercial customers.'
    }, {
      id: 'b',
      question: 'Catalog currency',
      answer: 'The published price list on GSA Advantage must match your awarded contract at all times.'
    }, {
      id: 'c',
      question: 'Reporting',
      answer: 'Sales are reported quarterly and the Industrial Funding Fee remitted within 30 days.'
    }]
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-4)'
    }
  }, "Need the source clause? ", /*#__PURE__*/React.createElement(Tooltip, {
    content: "Federal Acquisition Regulation"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      borderBottom: '1px dotted var(--border-strong)',
      cursor: 'help'
    }
  }, "FAR")), " 552.238-82 applies.")))));
}
const compStyles = {
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gap: 'var(--space-5)'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0,1.6fr) minmax(0,.9fr)',
    gap: 'var(--space-5)',
    alignItems: 'start'
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-3)'
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    font: 'var(--type-body)',
    fontSize: 'var(--text-body-sm)',
    color: 'var(--text-body)',
    margin: 0
  }
};
Object.assign(window, {
  ComplianceScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/ComplianceScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/DashboardScreen.jsx
try { (() => {
const {
  StatCard,
  Card,
  DataTable,
  Badge,
  Button,
  Tabs,
  Alert,
  Icon,
  Tag
} = window.PriceReporterDesignSystem_2cd382;
const ORDERS = [{
  id: 1,
  po: '47QSWA-2261',
  agency: 'Dept. of Veterans Affairs',
  lines: 14,
  total: '$48,210.00',
  status: 'Shipped',
  tone: 'success',
  date: '28 Jul'
}, {
  id: 2,
  po: '47QSWA-2260',
  agency: 'U.S. Army Corps of Engineers',
  lines: 3,
  total: '$7,940.50',
  status: 'Processing',
  tone: 'brand',
  date: '28 Jul'
}, {
  id: 3,
  po: '47QSWA-2258',
  agency: 'GSA Federal Acquisition Service',
  lines: 41,
  total: '$132,004.00',
  status: 'Action needed',
  tone: 'warning',
  date: '27 Jul'
}, {
  id: 4,
  po: '47QSWA-2255',
  agency: 'Dept. of Homeland Security',
  lines: 8,
  total: '$21,880.75',
  status: 'Invoiced',
  tone: 'neutral',
  date: '26 Jul'
}, {
  id: 5,
  po: '47QSWA-2251',
  agency: 'National Park Service',
  lines: 2,
  total: '$3,120.00',
  status: 'Shipped',
  tone: 'success',
  date: '25 Jul'
}];
function DashboardScreen() {
  const [tab, setTab] = React.useState('open');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: dashStyles.stats
  }, /*#__PURE__*/React.createElement(StatCard, {
    boxed: true,
    tone: "brand",
    value: "32",
    label: "Open orders",
    icon: "receipt",
    trend: "+6 this week"
  }), /*#__PURE__*/React.createElement(StatCard, {
    boxed: true,
    tone: "accent",
    value: "$213K",
    label: "Order value, July",
    icon: "dollar-sign",
    trend: "+12% vs. June"
  }), /*#__PURE__*/React.createElement(StatCard, {
    boxed: true,
    tone: "brand",
    value: "4,182",
    label: "Active catalog SKUs",
    icon: "package"
  }), /*#__PURE__*/React.createElement(StatCard, {
    boxed: true,
    tone: "brand",
    value: "21 days",
    label: "To price list expiry",
    icon: "clock",
    trend: "Mod submitted",
    trendDirection: "down"
  })), /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    title: "12 SKUs were rejected in last night's upload",
    onClose: () => {}
  }, "Missing country of origin on 12 line items. Fix them in the catalog file and re-submit \u2014 your specialist has been notified."), /*#__PURE__*/React.createElement("div", {
    style: dashStyles.split
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      minWidth: 0
    },
    title: "Recent GSA orders",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--text-muted)'
      }
    }, "Showing 5 of 32 orders"), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      iconRight: "arrow-right"
    }, "View all orders")))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-4)',
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    value: tab,
    onChange: setTab,
    items: [{
      id: 'open',
      label: 'Open'
    }, {
      id: 'shipped',
      label: 'Shipped'
    }, {
      id: 'all',
      label: 'All'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    active: true,
    onClick: () => {}
  }, "This month"), /*#__PURE__*/React.createElement(Tag, {
    onClick: () => {}
  }, "All agencies"))), /*#__PURE__*/React.createElement(DataTable, {
    compact: true,
    sortKey: "po",
    onSort: () => {},
    columns: [{
      key: 'po',
      label: 'PO number',
      strong: true,
      sortable: true
    }, {
      key: 'agency',
      label: 'Agency'
    }, {
      key: 'lines',
      label: 'Lines',
      align: 'center'
    }, {
      key: 'total',
      label: 'Total',
      align: 'right',
      sortable: true
    }, {
      key: 'date',
      label: 'Received',
      align: 'right'
    }, {
      key: 'status',
      label: 'Status',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.tone
      }, r.status)
    }],
    rows: ORDERS
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    eyebrow: "Catalog health",
    title: "GSA Advantage sync"
  }, /*#__PURE__*/React.createElement("div", {
    style: dashStyles.syncRows
  }, [['Last successful upload', '31 Jul, 02:14 ET', 'success'], ['SKUs accepted', '4,170 of 4,182', 'success'], ['Rejected lines', '12', 'warning'], ['Next scheduled run', 'Tonight, 02:00 ET', 'neutral']].map(([k, v, tone]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: dashStyles.syncRow
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...dashStyles.dot,
      background: tone === 'success' ? 'var(--green-500)' : tone === 'warning' ? 'var(--amber-500)' : 'var(--neutral-300)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 13.5,
      color: 'var(--text-strong)'
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    iconLeft: "upload"
  }, "Upload new catalog"))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    eyebrow: "Compliance",
    title: "Open items"
  }, /*#__PURE__*/React.createElement("ul", {
    style: dashStyles.taskList
  }, [['Price list expires 21 Aug', 'triangle-alert', 'var(--amber-500)'], ['EPA modification pending GSA review', 'clock', 'var(--blue-400)'], ['Annual sales report filed', 'circle-check', 'var(--green-500)']].map(([t, ic, col]) => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: dashStyles.taskItem
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 16,
    color: col
  }), t)))))));
}
const dashStyles = {
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gap: 'var(--space-5)'
  },
  split: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0,1.6fr) minmax(0,.9fr)',
    gap: 'var(--space-5)',
    alignItems: 'start'
  },
  syncRows: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-3)'
  },
  syncRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 'var(--space-4)'
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    display: 'inline-block'
  },
  taskList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-3)'
  },
  taskItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    font: 'var(--type-body)',
    fontSize: 'var(--text-body-sm)',
    color: 'var(--text-body)',
    margin: 0
  }
};
Object.assign(window, {
  DashboardScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ArticlePage.jsx
try { (() => {
const {
  Button,
  Badge,
  Breadcrumb,
  Card,
  CTABanner,
  Icon,
  Tag,
  Testimonial
} = window.PriceReporterDesignSystem_2cd382;
function ArticlePage({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: articleStyles.head
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr-container-narrow"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Resources',
      href: '#'
    }, {
      label: 'GSA contract specialists'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      margin: 'var(--space-5) 0 var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "GSA basics"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "8 min read")), /*#__PURE__*/React.createElement("h1", {
    style: articleStyles.title
  }, "Do you need a GSA contract specialist?"), /*#__PURE__*/React.createElement("p", {
    className: "pr-lead"
  }, "GSA contract specialists can be of great benefit when it comes to navigating the federal marketplace \u2014 here is exactly where they earn their keep."), /*#__PURE__*/React.createElement("div", {
    style: articleStyles.meta
  }, /*#__PURE__*/React.createElement("span", {
    style: articleStyles.avatar
  }, "PR"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: articleStyles.metaName
  }, "Price Reporter GSA desk"), /*#__PURE__*/React.createElement("span", {
    style: articleStyles.metaDate
  }, "Updated 12 June 2026"))))), /*#__PURE__*/React.createElement("div", {
    className: "pr-container",
    style: articleStyles.layout
  }, /*#__PURE__*/React.createElement("article", {
    style: articleStyles.body
  }, /*#__PURE__*/React.createElement("p", null, "GSA contracts require ongoing maintenance and improvement, knowledge of various technical procedures when it comes to modifying the contract and performing uploads of updated catalogs. Moreover, a solid GSA contract specialist can advise on what type of products and services the vendor should offer within their segment, and help price catalogs competitively \u2014 increasing sales flow and overall success with the GSA."), /*#__PURE__*/React.createElement("h2", null, "What the MAS program actually is"), /*#__PURE__*/React.createElement("p", null, "The General Services Administration works behind the scenes of the U.S. Government, streamlining the administrative work that keeps the country running. One way they do this is through the GSA Multiple Award Schedule Program, which enables government agencies to procure top-quality products and services, at reasonable prices, from commercial businesses."), /*#__PURE__*/React.createElement("blockquote", {
    style: articleStyles.quote
  }, "The average GSA Schedule holder wins around $2.3 million worth of business each year through the program."), /*#__PURE__*/React.createElement("h2", null, "Benefits for Schedule holders"), /*#__PURE__*/React.createElement("ul", {
    style: articleStyles.list
  }, [['Exclusivity', 'The MAS Program is a $45 billion government contract, accessible only to Schedule holders.'], ['Longevity', 'Contracts last five years and can be extended up to 20 years in total.'], ['Variety', 'There is an opportunity for every type of business, from IT and security to transportation and engineering.'], ['Outreach', 'Holders can publish their catalog at online government marketplaces.'], ['Streamlining', 'Prices, delivery and other terms are pre-negotiated; GSA manages contract administration.']].map(([k, v]) => /*#__PURE__*/React.createElement("li", {
    key: k,
    style: articleStyles.listItem
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 17,
    color: "var(--blue-400)"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, k, ":"), " ", v)))), /*#__PURE__*/React.createElement("h2", null, "Where it gets hard"), /*#__PURE__*/React.createElement("p", null, "Accessing these opportunities is not without its challenges: checking eligibility and TAA compliance, preparing the proposal and catalog, negotiating with the GSA, and then marketing your company and staying compliant post-award."), /*#__PURE__*/React.createElement("p", null, "You don't have to traverse this territory on your own. You can save yourself the stress, time, and money by seeking help from a GSA contract specialist."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'var(--space-8) 0'
    }
  }, /*#__PURE__*/React.createElement(Testimonial, {
    quote: "They keep our catalogs well maintained and compliant, saving our resources and letting us focus on making sales.",
    name: "Contract Manager",
    company: "IT products reseller"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-8)'
    }
  }, ['GSA MAS', 'Eligibility', 'TAA compliance', 'Catalog upload', 'Pricing'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    onClick: () => {}
  }, t)))), /*#__PURE__*/React.createElement("aside", {
    style: articleStyles.aside
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    eyebrow: "On this page"
  }, /*#__PURE__*/React.createElement("ul", {
    style: articleStyles.toc
  }, ['What the MAS program is', 'Benefits for Schedule holders', 'Where it gets hard', 'How we help'].map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: articleStyles.tocItem
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: i === 0 ? {
      color: 'var(--brand-primary)',
      fontWeight: 500
    } : undefined
  }, t))))), /*#__PURE__*/React.createElement(Card, {
    variant: "inverse",
    padding: "lg",
    title: "Free eligibility check"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-on-dark-muted)'
    }
  }, "We'll tell you in one call whether GSA is worth pursuing for your product line."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    fullWidth: true,
    onClick: () => onNavigate('contact')
  }, "Talk to a specialist")), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    eyebrow: "Related"
  }, /*#__PURE__*/React.createElement("ul", {
    style: articleStyles.related
  }, ['How GSA Advantage catalog uploads work', 'What TAA compliance means for resellers', 'Pricing your GSA catalog competitively'].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: articleStyles.relatedItem
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, t), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 14
  }))))))), /*#__PURE__*/React.createElement("div", {
    className: "pr-container",
    style: {
      paddingBottom: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement(CTABanner, {
    tone: "navy",
    eyebrow: "Free consultation",
    title: "Get GSA contract help from people who do this daily",
    description: "Hundreds of Schedule contracts secured. Over a million orders processed.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      iconRight: "arrow-right",
      onClick: () => onNavigate('contact')
    }, "Contact us")
  })));
}
const articleStyles = {
  head: {
    background: 'var(--gradient-wash)',
    borderBottom: '1px solid var(--border-subtle)',
    paddingTop: 'var(--space-8)',
    paddingBottom: 'var(--space-9)'
  },
  title: {
    font: 'var(--type-display-2)',
    letterSpacing: 'var(--tracking-display)',
    color: 'var(--text-heading)',
    margin: '0 0 var(--space-4)'
  },
  meta: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-3)',
    marginTop: 'var(--space-6)'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 'var(--radius-pill)',
    background: 'var(--blue-100)',
    color: 'var(--blue-700)',
    display: 'grid',
    placeItems: 'center',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 14
  },
  metaName: {
    display: 'block',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 14,
    color: 'var(--text-strong)'
  },
  metaDate: {
    display: 'block',
    font: 'var(--type-caption)',
    color: 'var(--text-muted)'
  },
  layout: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0,1fr) 320px',
    gap: 'var(--space-10)',
    paddingBlock: 'var(--section-y-tight)'
  },
  body: {
    maxWidth: '70ch',
    font: 'var(--type-body)',
    color: 'var(--text-body)'
  },
  quote: {
    margin: 'var(--space-7) 0',
    padding: 'var(--space-5) var(--space-6)',
    borderLeft: '3px solid var(--orange-500)',
    background: 'var(--orange-50)',
    font: 'var(--type-lead)',
    color: 'var(--text-strong)',
    borderRadius: '0 var(--radius-md) var(--radius-md) 0'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 var(--space-6)',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-3)'
  },
  listItem: {
    display: 'flex',
    gap: 10,
    alignItems: 'flex-start',
    margin: 0
  },
  aside: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-5)',
    position: 'sticky',
    top: 120,
    alignSelf: 'start'
  },
  toc: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-3)',
    font: 'var(--type-body)',
    fontSize: 'var(--text-body-sm)'
  },
  tocItem: {
    margin: 0
  },
  related: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-4)',
    fontSize: 'var(--text-body-sm)'
  },
  relatedItem: {
    display: 'flex',
    gap: 10,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    color: 'var(--text-muted)',
    margin: 0
  }
};
Object.assign(window, {
  ArticlePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ArticlePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactPage.jsx
try { (() => {
const {
  Button,
  Input,
  Select,
  Checkbox,
  Radio,
  Card,
  Icon,
  Alert,
  SectionHeading
} = window.PriceReporterDesignSystem_2cd382;
function ContactPage() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", {
    className: "pr-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr-container",
    style: contactStyles.grid
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    caps: false,
    eyebrow: "Free consultation",
    title: "Tell us about your business",
    description: "We'll review your eligibility and come back within one business day with an honest assessment."
  }), /*#__PURE__*/React.createElement("div", {
    style: contactStyles.channels
  }, [{
    icon: 'phone',
    k: 'Call us',
    v: '201.567.6646'
  }, {
    icon: 'mail',
    k: 'Email',
    v: 'salesteam@pricereporter.com'
  }].map(c => /*#__PURE__*/React.createElement("div", {
    key: c.k,
    style: contactStyles.channel
  }, /*#__PURE__*/React.createElement("span", {
    style: contactStyles.channelIcon
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: contactStyles.channelKey
  }, c.k), /*#__PURE__*/React.createElement("span", {
    style: contactStyles.channelVal
  }, c.v))))), /*#__PURE__*/React.createElement(Alert, {
    tone: "info",
    title: "What happens next",
    icon: "info"
  }, "A specialist reviews your products, checks TAA compliance and tells you whether a MAS contract is worth pursuing.")), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 'var(--space-8) 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: contactStyles.doneIcon
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 30
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, "Request received"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "A GSA specialist will contact you within one business day."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "Send another request")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: contactStyles.form
  }, /*#__PURE__*/React.createElement("div", {
    style: contactStyles.row
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    required: true,
    placeholder: "Jane Contractor"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Company",
    required: true,
    placeholder: "Acme Supply Co."
  })), /*#__PURE__*/React.createElement("div", {
    style: contactStyles.row
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    type: "email",
    required: true,
    icon: "mail",
    placeholder: "you@company.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    icon: "phone",
    placeholder: "(555) 000-0000"
  })), /*#__PURE__*/React.createElement("div", {
    style: contactStyles.row
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Annual revenue",
    options: ['Under $1M', '$1M – $10M', '$10M – $50M', 'Over $50M']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Product category",
    options: ['IT & software', 'Office & industrial supplies', 'Furniture', 'Professional services', 'Other']
  })), /*#__PURE__*/React.createElement("div", {
    style: contactStyles.choices
  }, /*#__PURE__*/React.createElement("span", {
    style: contactStyles.choiceLabel
  }, "What do you need?"), /*#__PURE__*/React.createElement(Radio, {
    name: "need",
    defaultChecked: true,
    label: "A new GSA contract",
    description: "We have never held a Schedule contract"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "need",
    label: "Help managing an existing contract",
    description: "Catalog, pricing, compliance or mods"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "need",
    label: "Order management automation"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Anything else we should know?",
    multiline: true,
    rows: 3,
    placeholder: "Tell us about your products and federal experience\u2026"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I confirm our products are US-made or TAA compliant",
    description: "We can verify this for you if you're unsure"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "accent",
    size: "lg",
    fullWidth: true,
    iconRight: "arrow-right"
  }, "Request my free consultation"), /*#__PURE__*/React.createElement("p", {
    style: contactStyles.fine
  }, "We use your details only to prepare your consultation. No lists, no resale.")))));
}
const contactStyles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '.85fr 1.15fr',
    gap: 'var(--space-10)',
    alignItems: 'start'
  },
  channels: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
    gap: 'var(--space-4)',
    margin: 'var(--space-2) 0 var(--space-7)'
  },
  channel: {
    display: 'flex',
    gap: 'var(--space-3)',
    alignItems: 'center'
  },
  channelIcon: {
    width: 38,
    height: 38,
    flex: 'none',
    borderRadius: 'var(--radius-sm)',
    background: 'var(--blue-50)',
    color: 'var(--brand-primary)',
    display: 'grid',
    placeItems: 'center'
  },
  channelKey: {
    display: 'block',
    font: 'var(--type-caption)',
    color: 'var(--text-muted)'
  },
  channelVal: {
    display: 'block',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 15,
    color: 'var(--text-strong)',
    whiteSpace: 'nowrap'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-5)'
  },
  row: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
    gap: 'var(--space-4)'
  },
  choices: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-3)',
    padding: 'var(--space-5)',
    background: 'var(--surface-subtle)',
    borderRadius: 'var(--radius-md)'
  },
  choiceLabel: {
    font: 'var(--type-label)',
    color: 'var(--text-strong)'
  },
  fine: {
    font: 'var(--type-caption)',
    color: 'var(--text-muted)',
    textAlign: 'center',
    margin: 0
  },
  doneIcon: {
    width: 62,
    height: 62,
    borderRadius: 'var(--radius-pill)',
    background: 'var(--green-100)',
    color: 'var(--green-500)',
    display: 'inline-grid',
    placeItems: 'center'
  }
};
Object.assign(window, {
  ContactPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Input,
  SectionHeading,
  BoxedHeading,
  NumbersBand,
  ServiceCard,
  ValueItem,
  Testimonial,
  LinkTile,
  Accordion,
  Icon
} = window.PriceReporterDesignSystem_2cd382;
const HERO_COLUMNS = [{
  depth: 1,
  head: 'Get GSA Contract',
  video: true,
  tiles: [{
    label: 'What is GSA Contract'
  }, {
    label: 'How to get GSA Contract'
  }, {
    label: 'What GSA Buys',
    icon: 'settings'
  }, {
    label: 'Do You Qualify?',
    icon: 'settings'
  }, {
    label: 'GSA Advantage Catalog Upload'
  }, {
    label: 'Get VA Contract'
  }]
}, {
  depth: 2,
  head: 'Build Your Success with GSA',
  video: true,
  tiles: [{
    label: 'Beat Your Competition',
    icon: 'settings'
  }, {
    label: 'GSA Contract Management'
  }, {
    label: 'Compliance Service'
  }, {
    label: 'FedMall and DLA'
  }, {
    label: 'BPA and FSSI'
  }]
}, {
  depth: 3,
  head: 'Deploy Your GSA e-Commerce Suite',
  video: true,
  tiles: [{
    label: 'GSA OMS & Automation'
  }, {
    label: 'e-Commerce Web Store'
  }, {
    label: 'QuickBook Integration'
  }, {
    label: 'Federal Market Intelligence',
    video: true
  }]
}];
const NUMBERS = [{
  value: '20+',
  label: 'Years Working with GSA'
}, {
  value: '400+',
  label: 'GSA Contracts Awarded'
}, {
  value: '1000+',
  label: 'Companies Served'
}, {
  value: '1500+',
  label: 'GSA Contracts under Management'
}, {
  value: '20K+',
  label: 'GSA Contract Modifications Completed'
}, {
  value: '2.5M+',
  label: 'GSA Orders Processed'
}, {
  value: '4.9',
  suffixIcon: 'star',
  label: 'Customer Rating'
}];
const SERVICES = [{
  title: 'GSA Contract Acquisition',
  description: 'Price Reporter has been obtaining GSA contracts and opened doors to Government procurement for hundreds of businesses.'
}, {
  title: 'GSA Contract Management',
  description: 'Price Reporter will manage your GSA contract and optimize your business potential. We ensure your prices remain competitive, your catalog stays current, and compliant.'
}, {
  title: 'GSA Order Management',
  description: "Price Reporter's Order Management System will streamline and automate your Order Life Cycle and the various pertinent transactions with federal buyers."
}, {
  title: 'GSA Advantage Catalog Upload',
  description: "Price Reporter's GSA Catalog Upload Portal stands out as the best choice for seamlessly updating your catalogs on GSA Advantage through the efficient utilization of EDI technology."
}];
const FAQ = [{
  id: 'f1',
  question: 'Should You Use a GSA Contract Specialist, Or Do It Yourself?',
  answer: 'GSA contracts require ongoing maintenance and knowledge of technical procedures for modifications and catalog uploads. A solid specialist also advises which products to offer and how to price them competitively.'
}, {
  id: 'f2',
  question: 'Why get a GSA business contract?',
  answer: 'The GSA MAS Program is a $45 billion government contract, and the average Schedule holder wins around $2.3 million worth of business each year through the program.'
}, {
  id: 'f3',
  question: 'How do we help obtain GSA contracts?',
  answer: 'We evaluate company credentials, assess competitors, prepare and negotiate the proposal, and keep you compliant after award.'
}, {
  id: 'f4',
  question: 'Need help with a GSA schedule?',
  answer: 'Contact us for a free consultation and we will tell you whether GSA is the right fit for your business.'
}, {
  id: 'f5',
  question: 'How long do GSA contracts last?',
  answer: 'MAS contracts last five years and can be extended thereafter for up to 20 years in total.'
}, {
  id: 'f6',
  question: 'Should you hire a GSA schedule consultant?',
  answer: 'If you want to save the stress, time and money of navigating the federal marketplace alone — yes.'
}, {
  id: 'f7',
  question: 'What do GSA schedule consultants do?',
  answer: 'Eligibility checks, proposal preparation, negotiation, catalog uploads, pricing optimization and compliance services.'
}, {
  id: 'f8',
  question: 'Who are GSA schedule consultants?',
  answer: 'Specialists who work with the GSA daily. Price Reporter has done this since 2006.'
}];
const CLIENTS = ['Dan Kain Trophies, Inc.', 'Lucas Promotional Products', 'Orbis', 'Mensch Supply', 'Supply King USA'];
function HomePage({
  onNavigate
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: homeStyles.hero
  }, /*#__PURE__*/React.createElement("span", {
    style: homeStyles.heroPhoto,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pr-container",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: homeStyles.heroTitle
  }, "Expert in business with GSA helping over 1000 GSA contractors to establish and grow Government business"), /*#__PURE__*/React.createElement("hr", {
    className: "pr-rule-black",
    style: {
      maxWidth: 1160
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: homeStyles.heroCols
  }, HERO_COLUMNS.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.head,
    style: homeStyles.heroCol
  }, /*#__PURE__*/React.createElement(LinkTile, {
    head: true,
    video: col.video,
    depth: col.depth,
    label: col.head,
    onClick: e => {
      e.preventDefault();
      onNavigate('gsa');
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: homeStyles.tileGrid
  }, col.tiles.map(t => /*#__PURE__*/React.createElement(LinkTile, _extends({
    key: t.label,
    depth: col.depth
  }, t, {
    onClick: e => {
      e.preventDefault();
      onNavigate('gsa');
    }
  }))))))))), /*#__PURE__*/React.createElement("section", {
    className: "pr-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr-container"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Price Reporter Values"
  }), /*#__PURE__*/React.createElement("div", {
    style: homeStyles.valuesGrid
  }, /*#__PURE__*/React.createElement(ValueItem, {
    title: "Founded in 2006"
  }, "Price Reporter is comprised of a team of experts with many years of experience, doing business with GSA."), /*#__PURE__*/React.createElement(ValueItem, {
    title: "Our Mission"
  }, "is to serve client's unique needs to effectively establish, grow and maximize their GSA business."), /*#__PURE__*/React.createElement(ValueItem, {
    title: "Our Experts"
  }, "utilize a full-range of custom marketing intelligence solutions, providing the insight needed to navigate today's complex Government marketplace.")), /*#__PURE__*/React.createElement(BoxedHeading, {
    title: "Our numbers tell the story",
    style: {
      marginTop: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(NumbersBand, {
    items: NUMBERS
  })))), /*#__PURE__*/React.createElement("section", {
    className: "pr-band pr-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr-container"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Our services"
  }), /*#__PURE__*/React.createElement("div", {
    style: homeStyles.serviceGrid
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: s.title
  }, s, {
    cta: "Learn more",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('gsa');
    }
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBlock: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr-container"
  }, /*#__PURE__*/React.createElement(Testimonial, {
    brand: "Price Reporter",
    quote: "are helping make my life much easier and helping me feel so much better about our GSA contract. Thanks!!!",
    name: "Kristen Briggs",
    role: "President",
    company: "General Mailing & Shipping Systems, Inc.",
    moreHref: "#",
    onPrev: () => {},
    onNext: () => {}
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr-container"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Our clients"
  }), /*#__PURE__*/React.createElement("div", {
    style: homeStyles.clientRow
  }, CLIENTS.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: homeStyles.clientPlate
  }, c))), /*#__PURE__*/React.createElement("p", {
    style: homeStyles.clientNote
  }, "Client logo files were not supplied with this design system \u2014 names stand in for the real marks."))), /*#__PURE__*/React.createElement("section", {
    className: "pr-band",
    style: {
      paddingBlock: 'var(--section-y-tight)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr-inverse",
    style: homeStyles.contactBlock
  }, /*#__PURE__*/React.createElement("h2", {
    style: homeStyles.contactTitle
  }, "Contact Us"), /*#__PURE__*/React.createElement("p", {
    style: homeStyles.contactLead
  }, "Contact us at 201.567.6646 or provide your details below for one hour free consultation"), sent ? /*#__PURE__*/React.createElement("p", {
    style: {
      ...homeStyles.contactLead,
      color: 'var(--orange-300)'
    }
  }, "Thank you \u2014 a GSA specialist will contact you within one business day.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: homeStyles.contactRow
  }, ['Name', 'Company', 'Email', 'Phone', 'Subject'].map(p => /*#__PURE__*/React.createElement(Input, {
    key: p,
    onDark: true,
    placeholder: p,
    "aria-label": p
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "outline-accent-dark",
    size: "lg"
  }, "Get free consultation")))))), /*#__PURE__*/React.createElement("section", {
    className: "pr-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr-container"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "FAQ"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      marginInline: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    items: FAQ
  })))));
}
const homeStyles = {
  hero: {
    position: 'relative',
    overflow: 'hidden',
    background: 'var(--gradient-hero)',
    paddingTop: 'var(--space-9)',
    paddingBottom: 'var(--space-10)'
  },
  heroPhoto: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'url(../../assets/hero-capitol.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right bottom',
    backgroundSize: 'auto 108%',
    WebkitMaskImage: 'linear-gradient(to right, transparent 42%, #000 72%)',
    maskImage: 'linear-gradient(to right, transparent 42%, #000 72%)',
    pointerEvents: 'none'
  },
  heroTitle: {
    font: 'var(--type-display-1)',
    letterSpacing: 'var(--tracking-display)',
    color: 'var(--text-strong)',
    margin: 0,
    maxWidth: '20ch'
  },
  heroCols: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 300px))',
    gap: 'var(--space-7)',
    marginTop: 'var(--space-9)'
  },
  heroCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-5)'
  },
  tileGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 'var(--space-4)'
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 'var(--space-8)'
  },
  serviceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 'var(--space-8)'
  },
  clientRow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 'var(--space-7)'
  },
  clientPlate: {
    font: 'var(--type-h4)',
    color: 'var(--blue-900)',
    opacity: .55,
    textAlign: 'center',
    flex: '1 1 160px'
  },
  clientNote: {
    font: 'var(--type-caption)',
    color: 'var(--text-subtle)',
    textAlign: 'center',
    marginTop: 'var(--space-7)'
  },
  contactBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: 'var(--space-10) var(--space-8)'
  },
  contactTitle: {
    font: 'var(--type-display-2)',
    color: '#fff',
    margin: '0 0 var(--space-4)'
  },
  contactLead: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'var(--text-lead)',
    color: '#fff',
    margin: '0 0 var(--space-8)'
  },
  contactRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, minmax(0,1fr))',
    gap: 'var(--space-5)'
  }
};
Object.assign(window, {
  HomePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicePage.jsx
try { (() => {
const {
  Button,
  Badge,
  Breadcrumb,
  SectionHeading,
  Card,
  CTABanner,
  Icon,
  Tabs,
  Alert,
  DataTable
} = window.PriceReporterDesignSystem_2cd382;
function ServicePage({
  onNavigate
}) {
  const [tab, setTab] = React.useState('what');
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: servicePageStyles.head
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr-container"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Services',
      href: '#'
    }, {
      label: 'GSA Contract'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: servicePageStyles.headGrid
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "pr-eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pr-accent-rule",
    style: {
      width: 24,
      height: 3,
      display: 'inline-block',
      marginRight: 9,
      verticalAlign: 2
    }
  }), "GSA contract specialists"), /*#__PURE__*/React.createElement("h1", {
    style: servicePageStyles.title
  }, "GSA contract help, from eligibility check to award"), /*#__PURE__*/React.createElement("p", {
    className: "pr-lead",
    style: {
      maxWidth: '62ch'
    }
  }, "GSA contracts require ongoing maintenance, knowledge of technical procedures for modifications, and regular catalog uploads. A solid specialist advises which products to offer and how to price them competitively."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-7)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => onNavigate('contact')
  }, "Request a free consultation"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    iconLeft: "file-text"
  }, "Download GSA checklist"))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      alignSelf: 'start'
    },
    eyebrow: "At a glance",
    title: "MAS contract facts"
  }, /*#__PURE__*/React.createElement("dl", {
    style: servicePageStyles.facts
  }, [['Program size', '$45B'], ['Initial term', '5 years'], ['Maximum term', '20 years'], ['Avg. holder sales', '$2.3M / yr']].map(([k, v]) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: k
  }, /*#__PURE__*/React.createElement("dt", {
    style: servicePageStyles.factKey
  }, k), /*#__PURE__*/React.createElement("dd", {
    style: servicePageStyles.factVal
  }, v)))))))), /*#__PURE__*/React.createElement("section", {
    className: "pr-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr-container"
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      id: 'what',
      label: 'What we do',
      icon: 'list-checks'
    }, {
      id: 'process',
      label: 'The process',
      icon: 'clipboard-list'
    }, {
      id: 'pricing',
      label: 'Included services',
      icon: 'percent'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 'var(--space-8)'
    }
  }, tab === 'what' ? /*#__PURE__*/React.createElement("div", {
    style: servicePageStyles.twoCol
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "The General Services Administration, in plain terms"), /*#__PURE__*/React.createElement("p", null, "The GSA works behind the scenes of the U.S. Government, streamlining the administrative work that keeps the country running. One way it does this is the GSA Multiple Award Schedule Program, which enables agencies to procure top-quality products and services at reasonable prices from commercial businesses."), /*#__PURE__*/React.createElement("p", null, "Winning a MAS contract is complex and time-consuming \u2014 and it does not end when your contract is awarded. During our years providing GSA contract help we have secured hundreds of Schedule contracts and processed over one million orders."), /*#__PURE__*/React.createElement(Alert, {
    tone: "info",
    title: "Not sure you qualify?"
  }, "We assess eligibility before you spend anything on a proposal.")), /*#__PURE__*/React.createElement("div", {
    style: servicePageStyles.checkCard
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, "Our comprehensive services"), /*#__PURE__*/React.createElement("ul", {
    style: servicePageStyles.checkList
  }, ['Evaluation of company credentials', 'Competitor assessment', 'Federal market intelligence', 'GSA negotiation', 'Contract management services', 'Pricing optimization', 'Catalog support', 'Compliance services', 'Contract extensions'].map(s => /*#__PURE__*/React.createElement("li", {
    key: s,
    style: servicePageStyles.checkItem
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    color: "var(--green-500)"
  }), s))))) : null, tab === 'process' ? /*#__PURE__*/React.createElement("div", {
    style: servicePageStyles.steps
  }, [{
    icon: 'search',
    t: 'Eligibility & TAA review',
    d: 'We check company credentials, trading history and whether your products are TAA compliant.'
  }, {
    icon: 'file-text',
    t: 'Proposal preparation',
    d: 'Catalog, financials and marketing materials assembled into a submission-ready package.'
  }, {
    icon: 'handshake',
    t: 'GSA negotiation',
    d: 'Clarifications, resubmissions, price agreement and final revisions — handled by our specialists.'
  }, {
    icon: 'shield-check',
    t: 'Post-award compliance',
    d: 'Pricing management, catalog uploads and modifications for the life of the contract.'
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.t,
    style: servicePageStyles.step
  }, /*#__PURE__*/React.createElement("span", {
    style: servicePageStyles.stepIcon
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 22
  })), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Step ", i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 'var(--space-3) 0 var(--space-2)',
      font: 'var(--type-h4)'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      margin: 0
    }
  }, s.d)))) : null, tab === 'pricing' ? /*#__PURE__*/React.createElement(DataTable, {
    striped: true,
    columns: [{
      key: 'svc',
      label: 'Service',
      strong: true
    }, {
      key: 'new',
      label: 'New contract',
      align: 'center'
    }, {
      key: 'mgmt',
      label: 'Contract management',
      align: 'center'
    }, {
      key: 'orders',
      label: 'Order management',
      align: 'center'
    }],
    rows: [{
      svc: 'Eligibility & credential review',
      new: '✓',
      mgmt: '—',
      orders: '—'
    }, {
      svc: 'Proposal preparation & negotiation',
      new: '✓',
      mgmt: '—',
      orders: '—'
    }, {
      svc: 'Catalog uploads to GSA Advantage',
      new: '✓',
      mgmt: '✓',
      orders: '✓'
    }, {
      svc: 'Pricing optimization',
      new: '—',
      mgmt: '✓',
      orders: '—'
    }, {
      svc: 'Compliance monitoring & mods',
      new: '—',
      mgmt: '✓',
      orders: '—'
    }, {
      svc: 'Order life-cycle automation',
      new: '—',
      mgmt: '—',
      orders: '✓'
    }],
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "Scope confirmed after the free consultation."), /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      onClick: () => onNavigate('contact')
    }, "Talk to a specialist"))
  }) : null))), /*#__PURE__*/React.createElement("div", {
    className: "pr-container",
    style: {
      paddingBottom: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement(CTABanner, {
    tone: "soft",
    eyebrow: "Next step",
    title: "Find out whether GSA is right for your business",
    description: "A 30-minute call with a specialist. No obligation.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      iconRight: "arrow-right",
      onClick: () => onNavigate('contact')
    }, "Book the call")
  })));
}
const servicePageStyles = {
  head: {
    background: 'var(--gradient-wash)',
    borderBottom: '1px solid var(--border-subtle)',
    paddingTop: 'var(--space-8)',
    paddingBottom: 'var(--space-11)'
  },
  headGrid: {
    display: 'grid',
    gridTemplateColumns: '1.35fr .65fr',
    gap: 'var(--space-10)',
    marginTop: 'var(--space-6)'
  },
  title: {
    font: 'var(--type-display-2)',
    letterSpacing: 'var(--tracking-display)',
    color: 'var(--text-heading)',
    margin: '0 0 var(--space-5)'
  },
  facts: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: 'var(--space-3) var(--space-4)',
    margin: 0
  },
  factKey: {
    font: 'var(--type-caption)',
    color: 'var(--text-muted)',
    margin: 0
  },
  factVal: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 17,
    color: 'var(--brand-primary)',
    margin: 0,
    textAlign: 'right',
    fontVariantNumeric: 'tabular-nums'
  },
  twoCol: {
    display: 'grid',
    gridTemplateColumns: '1.2fr .8fr',
    gap: 'var(--space-9)',
    alignItems: 'start'
  },
  checkCard: {
    background: 'var(--surface-subtle)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-card)',
    padding: 'var(--card-pad-lg)'
  },
  checkList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-3)'
  },
  checkItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    font: 'var(--type-body)',
    color: 'var(--text-body)',
    margin: 0
  },
  steps: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 'var(--space-5)'
  },
  step: {
    background: '#fff',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-card)',
    padding: 'var(--card-pad)',
    boxShadow: 'var(--shadow-sm)'
  },
  stepIcon: {
    width: 44,
    height: 44,
    borderRadius: 'var(--radius-md)',
    display: 'grid',
    placeItems: 'center',
    background: 'var(--blue-50)',
    color: 'var(--brand-primary)',
    marginBottom: 'var(--space-4)'
  }
};
Object.assign(window, {
  ServicePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
const {
  Button,
  Logo,
  Icon
} = window.PriceReporterDesignSystem_2cd382;
const NAV = [{
  id: 'about',
  label: 'About Us'
}, {
  id: 'services',
  label: 'Services',
  children: ['GSA Contract Acquisition', 'GSA Contract Management', 'GSA Order Management', 'GSA Advantage Catalog Upload']
}, {
  id: 'gsa',
  label: 'Get GSA Contract'
}, {
  id: 'build',
  label: 'Build Success with GSA'
}, {
  id: 'automate',
  label: 'Automate GSA Business'
}, {
  id: 'tools',
  label: 'Tools'
}, {
  id: 'article',
  label: 'Resources'
}];
function SiteHeader({
  route,
  onNavigate
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: siteChromeStyles.header
  }, /*#__PURE__*/React.createElement("div", {
    style: siteChromeStyles.utility
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr-container",
    style: siteChromeStyles.utilityInner
  }, /*#__PURE__*/React.createElement("span", {
    className: "pr-caps-label"
  }, "Experts in GSA consulting:"), /*#__PURE__*/React.createElement("a", {
    href: "tel:2015676646",
    style: siteChromeStyles.phone
  }, "201.567.6646"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    onClick: () => onNavigate('contact')
  }, "Get consultation"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: siteChromeStyles.utilityLink
  }, "Log In ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 13
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      ...siteChromeStyles.utilityLink,
      fontWeight: 700
    },
    onClick: () => onNavigate('contact')
  }, "Contact"))), /*#__PURE__*/React.createElement("div", {
    className: "pr-container",
    style: siteChromeStyles.bar
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('home');
    },
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 38
  })), /*#__PURE__*/React.createElement("nav", {
    style: siteChromeStyles.nav
  }, NAV.map(item => /*#__PURE__*/React.createElement("span", {
    key: item.id,
    style: {
      position: 'relative'
    },
    onMouseEnter: () => item.children && setOpen(true),
    onMouseLeave: () => item.children && setOpen(false)
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onNavigate(item.id === 'services' ? 'gsa' : item.id),
    style: {
      ...siteChromeStyles.navLink,
      ...(route === item.id ? siteChromeStyles.navLinkActive : null)
    }
  }, item.label), item.children && open ? /*#__PURE__*/React.createElement("div", {
    style: siteChromeStyles.menu
  }, item.children.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    type: "button",
    style: siteChromeStyles.menuItem,
    onClick: () => {
      setOpen(false);
      onNavigate('gsa');
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 14,
    color: "var(--brand-accent)"
  }), c))) : null)))));
}
const FOOT = [{
  h: 'Services',
  links: ['Get GSA Contract', 'Manage GSA Contract', 'GSA Advantage Catalog Update', 'GSA Contract Modifications', 'GSA Order Management', 'Contractor Assessment Support', 'GSA Transition to FCP']
}, {
  h: 'Information',
  links: ['Testimonials', 'Case Studies', 'Contact Us', 'Terms of use', 'Cookie Policy', 'Privacy Policy', 'Sitemap']
}, {
  h: 'Resources',
  links: ['Blog', 'Webinars', 'Price Reporter OMS Helpdesk', 'Market Intelligence Report', 'Glossary', 'FAQ']
}];
function SiteFooter({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "pr-inverse",
    style: {
      paddingTop: 'var(--space-11)',
      paddingBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr-container",
    style: siteChromeStyles.footGrid
  }, FOOT.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.h
  }, /*#__PURE__*/React.createElement("h4", {
    style: siteChromeStyles.footHead
  }, col.h), /*#__PURE__*/React.createElement("ul", {
    style: siteChromeStyles.footList
  }, col.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l,
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate(l === 'FAQ' ? 'home' : l === 'Contact Us' ? 'contact' : 'gsa');
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: siteChromeStyles.footHead
  }, "Contact"), /*#__PURE__*/React.createElement("ul", {
    style: siteChromeStyles.footList
  }, /*#__PURE__*/React.createElement("li", {
    style: siteChromeStyles.footContact
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 16
  }), /*#__PURE__*/React.createElement("a", {
    href: "mailto:salesteam@pricereporter.com"
  }, "salesteam@pricereporter.com")), /*#__PURE__*/React.createElement("li", {
    style: siteChromeStyles.footContact
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16
  }), /*#__PURE__*/React.createElement("a", {
    href: "tel:2015676646"
  }, "201.567.6646"))), /*#__PURE__*/React.createElement("p", {
    style: siteChromeStyles.footCopy
  }, "Copyright 2026. Price Reporter"))), /*#__PURE__*/React.createElement("div", {
    className: "pr-container",
    style: siteChromeStyles.footBottom
  }, /*#__PURE__*/React.createElement("span", null, "This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.")));
}
const siteChromeStyles = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 30,
    background: '#fff',
    borderBottom: '1px solid var(--border-subtle)'
  },
  utility: {
    background: 'var(--surface-utility)',
    color: '#fff'
  },
  utilityInner: {
    display: 'flex',
    gap: 'var(--space-5)',
    alignItems: 'center',
    minHeight: 46
  },
  phone: {
    color: '#fff',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 15,
    letterSpacing: '.01em'
  },
  utilityLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    background: 'none',
    border: 0,
    color: '#fff',
    cursor: 'pointer',
    font: 'var(--type-body)',
    fontSize: 'var(--text-body-sm)'
  },
  bar: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-8)',
    minHeight: 72
  },
  nav: {
    display: 'flex',
    gap: 'var(--space-1)',
    marginLeft: 'auto',
    flexWrap: 'wrap',
    justifyContent: 'flex-end'
  },
  navLink: {
    background: 'none',
    border: 0,
    cursor: 'pointer',
    font: 'var(--type-nav)',
    letterSpacing: 'var(--tracking-label)',
    textTransform: 'uppercase',
    color: 'var(--blue-900)',
    padding: '10px 10px',
    whiteSpace: 'nowrap'
  },
  navLinkActive: {
    color: 'var(--brand-accent)'
  },
  menu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    minWidth: 280,
    background: '#fff',
    border: '1px solid var(--border-subtle)',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'var(--shadow-md)'
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    background: 'none',
    border: 0,
    borderBottom: '1px solid var(--border-subtle)',
    cursor: 'pointer',
    textAlign: 'left',
    font: 'var(--type-body)',
    fontSize: 'var(--text-body-sm)',
    color: 'var(--blue-900)',
    padding: '12px 14px'
  },
  footGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 'var(--space-8)'
  },
  footHead: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#fff',
    marginBottom: 'var(--space-5)'
  },
  footList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-4)',
    font: 'var(--type-body)',
    fontSize: 'var(--text-body-sm)'
  },
  footContact: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    margin: 0,
    color: '#fff'
  },
  footCopy: {
    font: 'var(--type-body)',
    fontSize: 'var(--text-body-sm)',
    color: '#fff',
    marginTop: 'var(--space-8)'
  },
  footBottom: {
    textAlign: 'center',
    marginTop: 'var(--space-9)',
    font: 'var(--type-caption)',
    color: 'var(--text-on-dark-muted)'
  }
};
Object.assign(window, {
  SiteHeader,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.CTABanner = __ds_scope.CTABanner;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.LinkTile = __ds_scope.LinkTile;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.BoxedHeading = __ds_scope.BoxedHeading;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.NumbersBand = __ds_scope.NumbersBand;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.ValueItem = __ds_scope.ValueItem;

})();
