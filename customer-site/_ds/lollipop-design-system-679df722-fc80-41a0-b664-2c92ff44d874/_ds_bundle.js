/* @ds-bundle: {"format":3,"namespace":"LollipopDesignSystem_679df7","components":[{"name":"Badge","sourcePath":"components/Badge/Badge.jsx"},{"name":"Button","sourcePath":"components/Button/Button.jsx"},{"name":"Card","sourcePath":"components/Card/Card.jsx"},{"name":"Chip","sourcePath":"components/Chip/Chip.jsx"},{"name":"Input","sourcePath":"components/Input/Input.jsx"},{"name":"MoodScale","sourcePath":"components/MoodScale/MoodScale.jsx"},{"name":"Select","sourcePath":"components/Select/Select.jsx"},{"name":"StatCard","sourcePath":"components/StatCard/StatCard.jsx"}],"sourceHashes":{"components/Badge/Badge.jsx":"4c7977827a57","components/Button/Button.jsx":"57ddb3d84d88","components/Card/Card.jsx":"1862e9e14414","components/Chip/Chip.jsx":"871f1f8dda40","components/Input/Input.jsx":"9d0a291c533b","components/MoodScale/MoodScale.jsx":"5865a07a8562","components/Select/Select.jsx":"f61168904818","components/StatCard/StatCard.jsx":"8ccdae8b7659","ui_kits/employee-app/CheckIn.jsx":"1145c08b88a8","ui_kits/employee-app/Resources.jsx":"2f78594c5346","ui_kits/employee-app/ios-frame.jsx":"be3343be4b51","ui_kits/platform/Conversations.jsx":"9118d399e141","ui_kits/platform/Dashboard.jsx":"d7614b5ecf49","ui_kits/platform/Gestures.jsx":"e00cd08a24c2","ui_kits/platform/Insights.jsx":"b683727bf40c","ui_kits/platform/PlatformShell.jsx":"be2324704ff5","ui_kits/platform/Report.jsx":"0e9a8ffede05","ui_kits/platform/charts.jsx":"c5bc6706ef0b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LollipopDesignSystem_679df7 = window.LollipopDesignSystem_679df7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/Badge/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge / pill label — status, counts, and mood tags.
 */
function Badge({
  children,
  tone = "neutral",
  soft = true,
  style = {},
  ...rest
}) {
  const map = {
    neutral: {
      solid: "var(--ink-700)",
      soft: "var(--fill-200)",
      softText: "var(--ink-700)"
    },
    blue: {
      solid: "var(--blue-500)",
      soft: "var(--info-soft)",
      softText: "var(--blue-700)"
    },
    coral: {
      solid: "var(--coral-500)",
      soft: "var(--critical-soft)",
      softText: "var(--coral-600)"
    },
    positive: {
      solid: "var(--positive)",
      soft: "var(--positive-soft)",
      softText: "#1f7a2c"
    },
    warning: {
      solid: "var(--warning)",
      soft: "var(--warning-soft)",
      softText: "#b8700f"
    },
    critical: {
      solid: "var(--critical)",
      soft: "var(--critical-soft)",
      softText: "var(--coral-600)"
    }
  };
  const t = map[tone] || map.neutral;
  const styles = soft ? {
    background: t.soft,
    color: t.softText
  } : {
    background: t.solid,
    color: "#fff"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "4px 12px",
      fontFamily: "var(--font-brand)",
      fontWeight: 600,
      fontSize: 12.5,
      lineHeight: 1.2,
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...styles,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Badge/Badge.jsx", error: String((e && e.message) || e) }); }

// components/Button/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lollipop Button — pill-shaped, friendly, confident.
 * Primary is Lollipop Blue with a soft lifted glow; accent is Coral.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: 14,
      gap: 6
    },
    md: {
      padding: "12px 22px",
      fontSize: 15,
      gap: 8
    },
    lg: {
      padding: "15px 30px",
      fontSize: 17,
      gap: 10
    }
  };
  const variants = {
    primary: {
      background: "var(--action-primary)",
      color: "var(--text-on-brand)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-brand)"
    },
    accent: {
      background: "var(--action-accent)",
      color: "#fff",
      border: "1px solid transparent",
      boxShadow: "0 8px 24px rgba(255, 77, 98, 0.28)"
    },
    secondary: {
      background: "var(--surface-card)",
      color: "var(--text-heading)",
      border: "1px solid var(--border-card)",
      boxShadow: "var(--shadow-xs)"
    },
    ghost: {
      background: "transparent",
      color: "var(--action-primary)",
      border: "1px solid transparent",
      boxShadow: "none"
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      padding: s.padding,
      width: fullWidth ? "100%" : "auto",
      fontFamily: "var(--font-brand)",
      fontWeight: 600,
      fontSize: s.fontSize,
      lineHeight: 1,
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "transform var(--dur-fast) var(--ease-bounce), filter var(--dur-base) var(--ease-out)",
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.96)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button/Button.jsx", error: String((e && e.message) || e) }); }

// components/Card/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface card — white, rounded, softly elevated. Optional colored
 * left-accent bar (used on report metric cards & gesture cards) and
 * optional tinted pastel background.
 */
function Card({
  children,
  accent = null,
  // "blue" | "coral" | "positive" | "warning" | "critical"
  tint = null,
  // pastel background tone
  elevation = "sm",
  // "none" | "xs" | "sm" | "md" | "lg"
  padding = 20,
  style = {},
  ...rest
}) {
  const accents = {
    blue: "var(--blue-500)",
    coral: "var(--coral-500)",
    positive: "var(--positive)",
    warning: "var(--warning)",
    critical: "var(--critical)"
  };
  const tints = {
    blue: "var(--info-soft)",
    coral: "var(--critical-soft)",
    positive: "var(--positive-soft)",
    warning: "var(--warning-soft)",
    butter: "var(--butter)"
  };
  const shadows = {
    none: "none",
    xs: "var(--shadow-xs)",
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: tint ? tints[tint] || "var(--surface-card)" : "var(--surface-card)",
      border: "1px solid var(--border-card)",
      borderLeft: accent ? `4px solid ${accents[accent] || "var(--blue-500)"}` : "1px solid var(--border-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: shadows[elevation] ?? shadows.sm,
      padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Card/Card.jsx", error: String((e && e.message) || e) }); }

// components/Chip/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chip — selectable pill used for emotion tags ("Happy", "Grateful")
 * and topic/filter selection. Active = solid Coral; idle = white card.
 */
function Chip({
  children,
  selected = false,
  tone = "coral",
  // active color: "coral" | "blue"
  onClick = () => {},
  style = {},
  ...rest
}) {
  const activeBg = tone === "blue" ? "var(--blue-500)" : "var(--coral-500)";
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    "aria-pressed": selected,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "11px 18px",
      fontFamily: "var(--font-brand)",
      fontWeight: 600,
      fontSize: 15,
      lineHeight: 1.1,
      borderRadius: "var(--radius-md)",
      cursor: "pointer",
      transition: "all var(--dur-base) var(--ease-out)",
      background: selected ? activeBg : "var(--surface-card)",
      color: selected ? "#fff" : "var(--text-heading)",
      border: selected ? "1px solid transparent" : "1px solid var(--border-card)",
      boxShadow: selected ? "var(--shadow-sm)" : "var(--shadow-xs)",
      ...style
    },
    onMouseEnter: e => {
      if (!selected) e.currentTarget.style.background = "var(--fill-100)";
    },
    onMouseLeave: e => {
      if (!selected) e.currentTarget.style.background = "var(--surface-card)";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Chip/Chip.jsx", error: String((e && e.message) || e) }); }

// components/Input/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input / textarea with the Lollipop rounded field treatment.
 * Focus lifts the border to Coral with a soft ring.
 */
function Input({
  multiline = false,
  rows = 3,
  label = null,
  placeholder = "",
  value,
  onChange = () => {},
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const base = {
    width: "100%",
    fontFamily: "var(--font-body)",
    fontSize: 16,
    color: "var(--text-body)",
    background: "var(--surface-card)",
    border: `1.5px solid ${focus ? "var(--coral-300)" : "var(--border-card)"}`,
    boxShadow: focus ? "0 0 0 4px var(--critical-soft)" : "var(--shadow-xs)",
    borderRadius: multiline ? "var(--radius-lg)" : "var(--radius-pill)",
    padding: multiline ? "14px 18px" : "13px 20px",
    outline: "none",
    transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
    resize: multiline ? "vertical" : undefined,
    boxSizing: "border-box",
    ...style
  };
  const field = multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: base
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    type: "text",
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: base
  }, rest));
  if (!label) return field;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginBottom: 8,
      fontFamily: "var(--font-brand)",
      fontWeight: 600,
      fontSize: 14,
      color: "var(--text-heading)"
    }
  }, label), field);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Input/Input.jsx", error: String((e && e.message) || e) }); }

// components/MoodScale/MoodScale.jsx
try { (() => {
const MOODS = [{
  key: "terrible",
  label: "Terrible",
  value: 1,
  color: "var(--mood-terrible)"
}, {
  key: "bad",
  label: "Bad",
  value: 2,
  color: "var(--mood-bad)"
}, {
  key: "okay",
  label: "Okay",
  value: 3,
  color: "var(--mood-okay)"
}, {
  key: "good",
  label: "Good",
  value: 4,
  color: "var(--mood-good)"
}, {
  key: "great",
  label: "Great",
  value: 5,
  color: "var(--mood-great)"
}];

/**
 * MoodScale — Lollipop's signature 5-point check-in selector.
 * Renders the five mood faces over the red→green spectrum bar.
 * `iconBase` should point at wherever you copied /assets/moods/.
 */
function MoodScale({
  value = null,
  onChange = () => {},
  iconBase = "assets/moods/",
  size = 64,
  showLabels = true,
  style = {}
}) {
  const base = iconBase.endsWith("/") ? iconBase : iconBase + "/";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 8
    }
  }, MOODS.map(m => {
    const active = value === m.value;
    return /*#__PURE__*/React.createElement("button", {
      key: m.key,
      onClick: () => onChange(m.value, m),
      "aria-pressed": active,
      "aria-label": m.label,
      style: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        background: "transparent",
        border: "none",
        padding: 4,
        cursor: "pointer",
        transition: "transform var(--dur-base) var(--ease-bounce)",
        transform: active ? "scale(1.12)" : "scale(1)",
        filter: value && !active ? "grayscale(0.55) opacity(0.55)" : "none"
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.transform = "scale(1.06)";
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = active ? "scale(1.12)" : "scale(1)";
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: base + m.key + ".png",
      alt: m.label,
      style: {
        width: size,
        height: size,
        display: "block"
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      borderRadius: 999,
      margin: "10px 2px 0",
      background: "linear-gradient(90deg, var(--mood-terrible), var(--mood-bad), var(--mood-okay), var(--mood-good), var(--mood-great))"
    }
  }), showLabels && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 8
    }
  }, MOODS.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.key,
    style: {
      flex: 1,
      textAlign: "center",
      fontFamily: "var(--font-brand)",
      fontWeight: value === m.value ? 700 : 600,
      fontSize: 14,
      color: value === m.value ? "var(--ink-900)" : "var(--ink-500)"
    }
  }, m.label))));
}
Object.assign(__ds_scope, { MoodScale });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/MoodScale/MoodScale.jsx", error: String((e && e.message) || e) }); }

// components/Select/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — the Lollipop dropdown with a rounded Coral-tinted border,
 * as seen on the Conversation Starters emotion / situational filters.
 */
function Select({
  label = null,
  value,
  onChange = () => {},
  options = [],
  placeholder = "Select…",
  style = {},
  ...rest
}) {
  const field = /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value ?? "",
    onChange: onChange,
    style: {
      width: "100%",
      appearance: "none",
      WebkitAppearance: "none",
      fontFamily: "var(--font-body)",
      fontSize: 16,
      fontWeight: 500,
      color: value ? "var(--text-body)" : "var(--text-muted)",
      background: "var(--surface-card)",
      border: "1.5px solid var(--coral-300)",
      borderRadius: "var(--radius-md)",
      padding: "14px 44px 14px 18px",
      boxShadow: "var(--shadow-xs)",
      outline: "none",
      cursor: "pointer",
      boxSizing: "border-box",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const val = typeof o === "string" ? o : o.value;
    const lab = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 16,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--coral-500)",
      fontSize: 13
    }
  }, "\u25BE"));
  if (!label) return field;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginBottom: 8,
      fontFamily: "var(--font-brand)",
      fontWeight: 600,
      fontSize: 14,
      color: "var(--text-heading)"
    }
  }, label), field);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Select/Select.jsx", error: String((e && e.message) || e) }); }

// components/StatCard/StatCard.jsx
try { (() => {
/**
 * StatCard — the KPI metric tile from the dashboard & Workforce
 * Intelligence report. Eyebrow label, big value, optional delta pill
 * and footnote, with a colored left accent.
 */
function StatCard({
  label,
  value,
  unit = null,
  delta = null,
  // e.g. "-0.11" | "+2.4 pts"
  deltaDirection = null,
  // "up" | "down" — colors & arrow
  footnote = null,
  accent = "blue",
  style = {}
}) {
  const accents = {
    blue: "var(--blue-500)",
    coral: "var(--coral-500)",
    positive: "var(--positive)",
    warning: "var(--warning)",
    critical: "var(--critical)"
  };
  const down = deltaDirection === "down";
  const deltaColor = down ? "var(--coral-600)" : "var(--positive)";
  const deltaBg = down ? "var(--critical-soft)" : "var(--positive-soft)";
  const arrow = down ? "↘" : "↗";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-card)",
      borderLeft: `4px solid ${accents[accent] || accents.blue}`,
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      padding: "16px 18px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8,
      marginTop: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 800,
      fontSize: 34,
      color: "var(--ink-900)",
      lineHeight: 1
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--text-secondary)"
    }
  }, unit), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      padding: "3px 10px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-brand)",
      fontWeight: 600,
      fontSize: 12.5,
      background: deltaBg,
      color: deltaColor
    }
  }, arrow, " ", delta)), footnote && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, footnote));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/StatCard/StatCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/employee-app/CheckIn.jsx
try { (() => {
const {
  MoodScale,
  Chip,
  Input,
  Button
} = window.LollipopDesignSystem_679df7;
const ASSET_BASE = "../../assets/";
const EMOTIONS_POS = ["Happy", "Excited", "Grateful", "Content", "Optimistic", "Appreciated"];
const EMOTIONS_NEG = ["Sad", "Upset", "Overwhelmed", "Confused", "Worried", "Disrespected"];
function AppHeader() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--butter)",
      paddingTop: 52,
      paddingBottom: 18,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 56,
      right: 16,
      background: "#fff",
      borderRadius: 8,
      border: "1px solid var(--border-card)",
      padding: "5px 10px",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--ink-700)",
      fontFamily: "var(--font-brand)",
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, "English ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-400)",
      fontSize: 10
    }
  }, "\u25BE")), /*#__PURE__*/React.createElement("img", {
    src: ASSET_BASE + "logos/lollipop-mark.png",
    alt: "Lollipop",
    style: {
      width: 92,
      height: 92,
      display: "block",
      margin: "0 auto",
      filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.12))"
    }
  }));
}
function CheckIn({
  onSubmit
}) {
  const [mood, setMood] = React.useState(null);
  const [picked, setPicked] = React.useState([]);
  const [note, setNote] = React.useState("");
  const toggle = t => setPicked(s => s.includes(t) ? s.filter(x => x !== t) : [...s, t]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      minHeight: "100%",
      paddingBottom: 48
    }
  }, /*#__PURE__*/React.createElement(AppHeader, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 22px 0"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: "center",
      fontSize: 19,
      color: "var(--ink-800, #2c2e31)",
      fontWeight: 700,
      lineHeight: 1.35
    }
  }, "Welcome to Your Check In with Lollipop!"), /*#__PURE__*/React.createElement("h1", {
    style: {
      textAlign: "center",
      fontSize: 30,
      color: "var(--blue-500)",
      fontWeight: 800,
      margin: "18px 0 18px"
    }
  }, "How do you feel today?"), /*#__PURE__*/React.createElement(MoodScale, {
    value: mood,
    onChange: setMood,
    iconBase: ASSET_BASE + "moods/",
    size: 52
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      fontSize: 20,
      color: "var(--ink-700)",
      margin: "26px 0 14px"
    }
  }, "Pick all that apply:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 10
    }
  }, [...EMOTIONS_POS, ...EMOTIONS_NEG].map(e => /*#__PURE__*/React.createElement(Chip, {
    key: e,
    selected: picked.includes(e),
    onClick: () => toggle(e),
    style: {
      padding: "12px 6px",
      fontSize: 13.5,
      justifyContent: "center",
      width: "100%"
    }
  }, e))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      fontSize: 19,
      color: "var(--ink-700)",
      margin: "26px 0 14px"
    }
  }, "Anything else you want to tell us?"), /*#__PURE__*/React.createElement(Input, {
    multiline: true,
    rows: 3,
    placeholder: "Share a thought\u2026",
    value: note,
    onChange: e => setNote(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    disabled: !mood,
    onClick: () => onSubmit({
      mood,
      picked,
      note
    })
  }, "Submit check in"))));
}
function CheckInThanks({
  mood,
  onReset,
  onResources
}) {
  const labels = {
    1: "Terrible",
    2: "Bad",
    3: "Okay",
    4: "Good",
    5: "Great"
  };
  const keys = {
    1: "terrible",
    2: "bad",
    3: "okay",
    4: "good",
    5: "great"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      minHeight: "100%",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(AppHeader, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "40px 28px",
      textAlign: "center",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 18
    }
  }, mood && /*#__PURE__*/React.createElement("img", {
    src: ASSET_BASE + "moods/" + keys[mood] + ".png",
    alt: "",
    style: {
      width: 96,
      height: 96
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 28,
      color: "var(--blue-500)",
      fontWeight: 800
    }
  }, "Thanks for checking in!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: "var(--ink-500)",
      lineHeight: 1.6,
      maxWidth: 280
    }
  }, "Your ", mood ? labels[mood].toLowerCase() : "", " day is logged. We'll keep it private and only share team-level trends with your managers."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      width: "100%",
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "secondary",
    onClick: onResources
  }, "View employee resources"), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "ghost",
    onClick: onReset
  }, "Edit my check in"))));
}
Object.assign(window, {
  CheckIn,
  CheckInThanks,
  AppHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/employee-app/CheckIn.jsx", error: String((e && e.message) || e) }); }

// ui_kits/employee-app/Resources.jsx
try { (() => {
const ASSET_BASE_R = "../../assets/";
const RESOURCES = [{
  title: "EMPLOYEE ASSISTANCE PROGRAM",
  line: "Company-provided support — phone, text, chat",
  sub: "Free, confidential, and available 24/7"
}, {
  title: "COMPANY HR CONTACT",
  line: "Kendall Moore · 555-555-5555 · kmoore@acme.com",
  sub: "Reach out confidentially about your supervisor, potential legal violations, discrimination, or other sensitive matters."
}, {
  title: "NAMI HELPLINE",
  line: "Call: 1-800-950-NAMI (6264) · Text: \"HelpLine\" to 62640",
  sub: "Free national peer support and resources."
}, {
  title: "988 SUICIDE & CRISIS LIFELINE",
  line: "Call / text: 988",
  sub: "Free, confidential crisis support, 24/7."
}];
function Resources({
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      minHeight: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--butter)",
      paddingTop: 52,
      paddingBottom: 16,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSET_BASE_R + "logos/lollipop-mark.png",
    alt: "Lollipop",
    style: {
      width: 76,
      height: 76,
      display: "block",
      margin: "0 auto",
      filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.12))"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 22px 40px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      textAlign: "center",
      fontSize: 30,
      color: "var(--ink-900)",
      fontWeight: 800,
      margin: "16px 0 24px"
    }
  }, "Employee Resources"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, RESOURCES.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 12,
      padding: "16px 4px",
      borderBottom: i < RESOURCES.length - 1 ? "1px solid var(--line-200)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--blue-500)",
      fontWeight: 800,
      fontSize: 18,
      lineHeight: 1.2
    }
  }, "\u2192"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 700,
      fontSize: 16,
      color: "var(--ink-900)",
      letterSpacing: "0.01em"
    }
  }, r.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      color: "var(--ink-700)",
      marginTop: 4,
      lineHeight: 1.45
    }
  }, r.line), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--ink-400)",
      marginTop: 4,
      lineHeight: 1.45
    }
  }, r.sub))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(window.LollipopDesignSystem_679df7.Button, {
    fullWidth: true,
    variant: "secondary",
    onClick: onBack
  }, "Back to check in"))));
}
Object.assign(window, {
  Resources
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/employee-app/Resources.jsx", error: String((e && e.message) || e) }); }

// ui_kits/employee-app/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/employee-app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Conversations.jsx
try { (() => {
function Conversations() {
  const {
    Select
  } = window.LollipopDesignSystem_679df7;
  const [emo, setEmo] = React.useState("");
  const [sit, setSit] = React.useState("Burnout");
  const cards = [{
    text: "I can see signs that you might be experiencing burnout. Let's talk about how to help you recharge.",
    tag: "Burnout recognition"
  }, {
    text: "Is there anything on your plate that feels especially heavy or unmanageable right now?",
    tag: "Conversation starter"
  }, {
    text: "What's one thing I could take off your list this week so you can breathe a little?",
    tag: "Offer support"
  }, {
    text: "When did you last take real time off — not checking messages, fully unplugged?",
    tag: "Encourage recovery"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px 32px 48px",
      maxWidth: 1000,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 44,
      fontWeight: 800,
      color: "var(--ink-900)"
    }
  }, "Conversation Starters"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 700,
      fontSize: 17,
      color: "var(--coral-500)",
      marginTop: 8,
      maxWidth: 620,
      marginLeft: "auto",
      marginRight: "auto",
      lineHeight: 1.4
    }
  }, "Simple questions to help you connect with your team and build stronger relationships.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 22,
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      marginBottom: 12
    }
  }, "Emotion Filters"), /*#__PURE__*/React.createElement(Select, {
    placeholder: "Select an emotion\u2026",
    value: emo,
    onChange: e => setEmo(e.target.value),
    options: ["Overwhelmed", "Anxious", "Disengaged", "Grateful", "Frustrated"]
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      marginBottom: 12
    }
  }, "Situational Filters"), /*#__PURE__*/React.createElement(Select, {
    value: sit,
    onChange: e => setSit(e.target.value),
    options: ["Burnout", "New role", "Heavy workload", "Return to office", "After a setback"]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 18
    }
  }, cards.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "#fff",
      border: "1px solid var(--border-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: "var(--ink-900)",
      lineHeight: 1.45,
      marginBottom: 14
    }
  }, c.text), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink-400)",
      marginBottom: 8
    }
  }, c.tag), /*#__PURE__*/React.createElement("button", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      border: "none",
      background: "transparent",
      color: "var(--blue-500)",
      fontFamily: "var(--font-brand)",
      fontWeight: 600,
      fontSize: 14,
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: "lucide:chevron-down",
    width: "16"
  }), " Why it Works")))));
}
Object.assign(window, {
  Conversations
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Conversations.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Dashboard.jsx
try { (() => {
function PageHead({
  title,
  sub,
  subColor = "var(--coral-500)"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 38,
      fontWeight: 800,
      color: "var(--ink-900)"
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 700,
      fontSize: 16,
      color: subColor,
      marginTop: 6
    }
  }, sub));
}
function Panel({
  children,
  title,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid var(--border-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      padding: 22,
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 700,
      fontSize: 14,
      color: "var(--ink-700)",
      textAlign: "center",
      marginBottom: 14
    }
  }, title), children);
}
function Dashboard() {
  const {
    Gauge,
    Donut,
    Bars,
    MOOD
  } = window;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px 32px 48px",
      maxWidth: 1200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 38,
      fontWeight: 800,
      color: "var(--ink-900)"
    }
  }, "Dashboard"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      background: "#fff",
      border: "1px solid var(--border-card)",
      borderRadius: "var(--radius-md)",
      padding: "8px 14px",
      fontFamily: "var(--font-brand)",
      fontWeight: 600,
      fontSize: 14,
      color: "var(--ink-700)"
    }
  }, "Last Week ", /*#__PURE__*/React.createElement("iconify-icon", {
    icon: "lucide:chevron-down",
    width: "16"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1.5px solid var(--coral-300)",
      color: "var(--coral-600)",
      borderRadius: "var(--radius-md)",
      padding: "8px 14px",
      fontFamily: "var(--font-brand)",
      fontWeight: 600,
      fontSize: 14
    }
  }, "Mar 30 \u2013 Apr 05, 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(Gauge, {
    value: 66,
    display: "66%",
    label: "Engagement",
    color: "#a9ee12"
  })), /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(Gauge, {
    value: 84,
    display: "4.2",
    label: "Average Mood",
    color: "#a9ee12"
  })), /*#__PURE__*/React.createElement(Panel, {
    title: "Mood Distribution"
  }, /*#__PURE__*/React.createElement(Donut, {
    segments: [{
      name: "Great",
      value: 32,
      color: MOOD.great
    }, {
      name: "Good",
      value: 34,
      color: MOOD.good
    }, {
      name: "Ok",
      value: 22,
      color: MOOD.okay
    }, {
      name: "Bad",
      value: 8,
      color: MOOD.bad
    }, {
      name: "Terrible",
      value: 4,
      color: MOOD.terrible
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 18,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Sentiment by Team"
  }, /*#__PURE__*/React.createElement(Bars, {
    data: [{
      label: "CEBU PHILIPPINES",
      value: 3.9,
      color: MOOD.okay
    }, {
      label: "FINANCE",
      value: 3.4,
      color: MOOD.okay
    }, {
      label: "MARKETING",
      value: 4.6,
      color: MOOD.good
    }, {
      label: "CEBU 2",
      value: 4.5,
      color: MOOD.good
    }]
  })), /*#__PURE__*/React.createElement(Panel, {
    title: "Daily Sentiment"
  }, /*#__PURE__*/React.createElement(Bars, {
    data: [{
      label: "Sun",
      value: 4.7,
      color: MOOD.good
    }, {
      label: "Mon",
      value: 4.2,
      color: MOOD.good
    }, {
      label: "Tue",
      value: 4.1,
      color: MOOD.good
    }, {
      label: "Wed",
      value: 4.1,
      color: MOOD.good
    }, {
      label: "Thu",
      value: 4.2,
      color: MOOD.good
    }, {
      label: "Fri",
      value: 4.2,
      color: MOOD.good
    }, {
      label: "Sat",
      value: 4.0,
      color: MOOD.good
    }]
  }))));
}
Object.assign(window, {
  Dashboard,
  PageHead,
  Panel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Gestures.jsx
try { (() => {
const CATEGORIES = [{
  name: "Appreciation",
  sub: "Just Because",
  quote: "I see you",
  emoji: "💗",
  bg: "var(--critical-soft)",
  quoteColor: "var(--coral-500)",
  border: "var(--coral-300)"
}, {
  name: "Work Challenge",
  sub: "Professional Support",
  quote: "We've got your back",
  emoji: "💼",
  bg: "var(--info-soft)",
  quoteColor: "var(--blue-600)",
  border: "transparent"
}, {
  name: "Celebration",
  sub: "Work Win",
  quote: "You did it!",
  emoji: "🎉",
  bg: "var(--warning-soft)",
  quoteColor: "#b8700f",
  border: "transparent"
}, {
  name: "Celebration",
  sub: "Life Event",
  quote: "Life's worth celebrating",
  emoji: "🎊",
  bg: "#f1e9fb",
  quoteColor: "#7b4fc0",
  border: "transparent"
}, {
  name: "Personal Challenge",
  sub: "Life Support",
  quote: "I'm here for you",
  emoji: "🌱",
  bg: "var(--positive-soft)",
  quoteColor: "var(--positive)",
  border: "transparent"
}];
const GESTURES = [{
  title: "Behind-the-scenes acknowledgment for usually unseen work",
  body: "Call out the quiet, unglamorous effort that keeps things running — publicly or one-on-one."
}, {
  title: "Quick video message acknowledging hard work",
  body: "A 30-second personal video highlighting contributions lands harder than any Slack emoji."
}, {
  title: "Hand-written note for a tough week",
  body: "Tangible and rare. Name the specific thing they pushed through."
}, {
  title: "Protect their focus time",
  body: "Clear a recurring meeting or shield them from a fire drill so they can do deep work."
}];
function Gestures() {
  const [active, setActive] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px 32px 48px",
      maxWidth: 1120,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 44,
      fontWeight: 800,
      color: "var(--ink-900)"
    }
  }, "Small Authentic Gestures"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 700,
      fontSize: 17,
      color: "var(--coral-500)",
      marginTop: 8,
      maxWidth: 640,
      margin: "8px auto 0",
      lineHeight: 1.4
    }
  }, "Simple acts of care \u2014 when genuine \u2014 build trust, boost morale, and help people feel seen.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 16,
      marginBottom: 34
    }
  }, CATEGORIES.map((c, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setActive(i),
    style: {
      textAlign: "center",
      cursor: "pointer",
      background: c.bg,
      border: `2px solid ${active === i ? c.quoteColor : c.border}`,
      borderRadius: "var(--radius-lg)",
      padding: "20px 14px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6,
      transition: "transform var(--dur-base) var(--ease-out)",
      transform: active === i ? "translateY(-3px)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 30
    }
  }, c.emoji), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 700,
      fontSize: 15,
      color: "var(--ink-900)"
    }
  }, c.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-500)"
    }
  }, c.sub), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      fontWeight: 600,
      fontSize: 13.5,
      color: c.quoteColor,
      marginTop: 2
    }
  }, "\"", c.quote, "\"")))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      marginBottom: 14
    }
  }, "Gestures for You ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-400)",
      fontWeight: 600
    }
  }, "(30)")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, GESTURES.map((g, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "#fff",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      border: "1px solid var(--border-card)",
      borderLeft: "4px solid var(--coral-500)",
      padding: "18px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: "var(--ink-900)",
      lineHeight: 1.3,
      marginBottom: 8
    }
  }, g.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--ink-500)",
      lineHeight: 1.55
    }
  }, g.body)))));
}
Object.assign(window, {
  Gestures
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Gestures.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Insights.jsx
try { (() => {
const TOPICS = ["Appreciation", "Build & Repair Trust", "Difficult Conversations", "Foster Belonging", "Habits of Great Managers", "New Hires", "Rebuild Team Energy", "Support Someone Struggling", "Workplace Conflict"];
const INSIGHTS = {
  "Difficult Conversations": [{
    title: "Start with a Thoughtful First Question",
    insight: "Opening with curiosity lowers defensiveness and signals you're here to understand, not to judge.",
    action: "Try: \"Can you walk me through how last week landed for you?\""
  }, {
    title: "Ask If It's the Right Time",
    insight: "Hard conversations land better when the other person has the capacity to have them.",
    action: "Try: \"Is now a good moment, or should we find time tomorrow?\""
  }, {
    title: "Offer a Reset, Not a Replay",
    insight: "Re-litigating what went wrong keeps people stuck. Point toward what 'good' looks like next.",
    action: "Try: \"What would a better version of this look like for both of us?\""
  }]
};
function Insights() {
  const {
    Chip
  } = window.LollipopDesignSystem_679df7;
  const [tab, setTab] = React.useState("topic");
  const [topic, setTopic] = React.useState("Difficult Conversations");
  const cards = INSIGHTS[topic] || INSIGHTS["Difficult Conversations"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px 32px 48px",
      maxWidth: 1100,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 44,
      fontWeight: 800,
      color: "var(--ink-900)"
    }
  }, "Quick Insights"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 700,
      fontSize: 17,
      color: "var(--coral-500)",
      marginTop: 6
    }
  }, "One-Minute Insights & Actions")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      background: "#fff",
      border: "1px solid var(--border-card)",
      borderRadius: "var(--radius-md)",
      padding: 4,
      boxShadow: "var(--shadow-xs)"
    }
  }, [["topic", "Filter by Topic"], ["emotion", "Filter by Emotion"]].map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setTab(k),
    style: {
      border: "none",
      borderRadius: 10,
      padding: "9px 18px",
      cursor: "pointer",
      fontFamily: "var(--font-brand)",
      fontWeight: 600,
      fontSize: 14,
      background: tab === k ? "var(--fill-100)" : "transparent",
      color: tab === k ? "var(--ink-900)" : "var(--ink-400)"
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 12,
      justifyContent: "center",
      marginBottom: 28
    }
  }, TOPICS.map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t,
    selected: topic === t,
    onClick: () => setTopic(t)
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 18
    }
  }, cards.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "#fff",
      border: "1px solid var(--border-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      padding: 22,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 21,
      fontWeight: 700,
      color: "var(--ink-900)",
      lineHeight: 1.2
    }
  }, c.title), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 700,
      fontSize: 12.5,
      color: "var(--coral-500)",
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      marginBottom: 5
    }
  }, "Insight"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: "var(--ink-700)",
      lineHeight: 1.55
    }
  }, c.insight)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      background: "var(--info-soft)",
      borderRadius: "var(--radius-md)",
      padding: "12px 14px",
      fontSize: 14,
      color: "var(--blue-700)",
      lineHeight: 1.5
    }
  }, c.action)))));
}
Object.assign(window, {
  Insights
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Insights.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/PlatformShell.jsx
try { (() => {
const NAV = [{
  id: "dashboard",
  label: "Dashboard",
  icon: "lucide:layout-dashboard"
}, {
  id: "insights",
  label: "Quick Insights",
  icon: "lucide:zap"
}, {
  id: "conversations",
  label: "Conversation Starters",
  icon: "lucide:messages-square"
}, {
  id: "gestures",
  label: "Small Authentic Gestures",
  icon: "lucide:heart-handshake"
}, {
  id: "report",
  label: "Monthly Report",
  icon: "lucide:file-text"
}];
const ASSET_P = "../../assets/";
function PlatformShell({
  active,
  onNavigate,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      minHeight: "100vh",
      background: "var(--surface-canvas)"
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 264,
      background: "#fff",
      borderRight: "1px solid var(--line-200)",
      display: "flex",
      flexDirection: "column",
      padding: "22px 16px",
      position: "sticky",
      top: 0,
      height: "100vh",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "0 8px 22px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSET_P + "logos/lollipop-mark.png",
    alt: "Lollipop",
    style: {
      width: 38,
      height: 38
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 800,
      fontSize: 20,
      color: "var(--blue-500)",
      letterSpacing: "-0.02em"
    }
  }, "Lollipop")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, NAV.map(n => {
    const on = active === n.id;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => onNavigate(n.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "11px 12px",
        border: "none",
        borderRadius: "var(--radius-md)",
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "var(--font-brand)",
        fontWeight: 600,
        fontSize: 14.5,
        background: on ? "var(--info-soft)" : "transparent",
        color: on ? "var(--blue-700)" : "var(--ink-500)"
      }
    }, /*#__PURE__*/React.createElement("iconify-icon", {
      icon: n.icon,
      width: "20",
      height: "20"
    }), n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 8px",
      borderTop: "1px solid var(--line-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: "50%",
      background: "var(--coral-300)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-brand)",
      fontWeight: 700,
      fontSize: 14
    }
  }, "KM"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 600,
      fontSize: 14,
      color: "var(--ink-900)"
    }
  }, "Kendall Moore"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-400)"
    }
  }, "People Ops \xB7 Acme")))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 32px",
      borderBottom: "1px solid var(--line-200)",
      background: "rgba(251,248,243,0.85)",
      backdropFilter: "blur(8px)",
      position: "sticky",
      top: 0,
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      background: "#fff",
      border: "1px solid var(--border-card)",
      borderRadius: "var(--radius-pill)",
      padding: "9px 16px",
      width: 320,
      color: "var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: "lucide:search",
    width: "18"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "Search teams, people, insights\u2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      color: "var(--ink-500)"
    }
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: "lucide:bell",
    width: "20"
  }), /*#__PURE__*/React.createElement(window.LollipopDesignSystem_679df7.Badge, {
    tone: "positive"
  }, "Org health \xB7 Healthy"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, children)));
}
Object.assign(window, {
  PlatformShell,
  PLATFORM_NAV: NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/PlatformShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Report.jsx
try { (() => {
function Report() {
  const {
    StatCard
  } = window.LollipopDesignSystem_679df7;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "32px 40px 56px",
      maxWidth: 1120,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 24,
      borderBottom: "1px solid var(--line-300)",
      paddingBottom: 22,
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--ink-500)"
    }
  }, "Workforce Intelligence Report"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 52,
      fontWeight: 700,
      color: "var(--ink-900)",
      letterSpacing: "-0.01em",
      lineHeight: 1.02,
      margin: "8px 0 6px"
    }
  }, "Acme Corporation"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--ink-500)"
    }
  }, "Apr 2026 \xB7 Prepared by Lollipop \xB7 Confidence High"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 600,
      fontSize: 13.5,
      color: "var(--blue-500)",
      border: "1px solid var(--blue-200)",
      borderRadius: "var(--radius-pill)",
      padding: "7px 14px",
      textDecoration: "none"
    }
  }, "Dashboard walkthrough"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 600,
      fontSize: 13.5,
      color: "var(--blue-500)",
      border: "1px solid var(--blue-200)",
      borderRadius: "var(--radius-pill)",
      padding: "7px 14px",
      textDecoration: "none"
    }
  }, "support@trylollipop.com"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--positive-soft)",
      border: "1px solid #bfe6c7",
      borderRadius: "var(--radius-md)",
      padding: "14px 18px",
      minWidth: 180
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 700,
      fontSize: 10.5,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "#3f7a4a"
    }
  }, "Organizational Health"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 700,
      fontSize: 26,
      color: "var(--ink-900)"
    }
  }, "Healthy"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--ink-500)"
    }
  }, "74 / 100")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 12.5,
      color: "var(--blue-500)",
      fontWeight: 600
    }
  }, "See Explanatory Note 1"))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 600,
      fontSize: 30,
      color: "var(--ink-900)",
      marginBottom: 4
    }
  }, "Executive snapshot"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--ink-500)",
      marginBottom: 18
    }
  }, "Headline metrics versus prior month"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 14,
      marginBottom: 34
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Average mood",
    value: "3.88",
    unit: "/ 5",
    delta: "-0.11",
    deltaDirection: "down",
    footnote: "v. Mar 2026",
    accent: "critical"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Positive sentiment",
    value: "62.8%",
    delta: "-5.8 pts",
    deltaDirection: "down",
    footnote: "of all check-ins",
    accent: "critical"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Participation rate",
    value: "86.7%",
    delta: "-2.2 pp",
    deltaDirection: "down",
    footnote: "39 of 45 opted-in",
    accent: "blue"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Total responses",
    value: "121",
    delta: "-19",
    deltaDirection: "down",
    footnote: "check-ins this period",
    accent: "warning"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Teams to watch",
    value: "4",
    footnote: "Justin's, Lenia's, Joe's, Shawn's",
    accent: "critical"
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 600,
      fontSize: 30,
      color: "var(--ink-900)",
      marginBottom: 16
    }
  }, "Executive summary"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid var(--border-card)",
      borderLeft: "4px solid var(--blue-500)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      padding: "26px 28px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      fontWeight: 700,
      color: "var(--ink-900)",
      lineHeight: 1.5,
      marginBottom: 20
    }
  }, "Acme Corporation's workforce signal in Apr 2026 is stable with watch-level retention risk. The organization is not showing a broad crisis signal, but the month softened enough to require targeted leadership attention rather than passive monitoring."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 30
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 700,
      fontSize: 11.5,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--ink-500)",
      marginBottom: 8
    }
  }, "Why it matters"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: "var(--ink-700)",
      lineHeight: 1.6
    }
  }, "The most important movement is a 0.11-point decline in average mood and a 5.8-point decline in positive sentiment. Emotional movement is uneven by team; the risk appears concentrated, not systemic.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 700,
      fontSize: 11.5,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--ink-500)",
      marginBottom: 8
    }
  }, "Recommended leadership focus"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: "var(--ink-700)",
      lineHeight: 1.6
    }
  }, "Preserve high-performing team momentum while intervening early where workload, recognition, or communication friction is showing up in comments and team variance. Treat this as a directional early-warning signal, not a crisis finding.")))));
}
Object.assign(window, {
  Report
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Report.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/charts.jsx
try { (() => {
// Lightweight SVG charts for the Lollipop platform dashboard.
// Mood-spectrum colors come straight from the design tokens.
const MOOD = {
  terrible: "#ff5658",
  bad: "#f7931d",
  okay: "#ffd84b",
  good: "#a9ee12",
  great: "#309c3f"
};
function Gauge({
  value,
  max = 100,
  label,
  display,
  color = "#a9ee12"
}) {
  const pct = Math.max(0, Math.min(1, value / max));
  const R = 80,
    C = Math.PI * R; // semicircle circumference
  const dash = C * pct;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 120",
    style: {
      width: "100%",
      maxWidth: 240
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 110 A80 80 0 0 1 180 110",
    fill: "none",
    stroke: "#ecebe6",
    strokeWidth: "22",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 110 A80 80 0 0 1 180 110",
    fill: "none",
    stroke: color,
    strokeWidth: "22",
    strokeLinecap: "round",
    strokeDasharray: `${dash} ${C}`
  }), /*#__PURE__*/React.createElement("text", {
    x: "100",
    y: "104",
    textAnchor: "middle",
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 800,
      fontSize: 30,
      fill: "var(--ink-900)"
    }
  }, display)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 600,
      fontSize: 15,
      color: "var(--ink-700)",
      marginTop: -4
    }
  }, label));
}
function Donut({
  segments,
  label
}) {
  // segments: [{value, color, name}]
  const total = segments.reduce((s, x) => s + x.value, 0);
  const R = 60,
    C = 2 * Math.PI * R;
  let offset = 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 160 160",
    style: {
      width: 150,
      height: 150
    }
  }, /*#__PURE__*/React.createElement("g", {
    transform: "rotate(-90 80 80)"
  }, segments.map((s, i) => {
    const len = s.value / total * C;
    const el = /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: "80",
      cy: "80",
      r: R,
      fill: "none",
      stroke: s.color,
      strokeWidth: "34",
      strokeDasharray: `${len} ${C - len}`,
      strokeDashoffset: -offset
    });
    offset += len;
    return el;
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7
    }
  }, segments.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 13,
      color: "var(--ink-700)",
      fontFamily: "var(--font-brand)",
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: 3,
      background: s.color
    }
  }), s.name))));
}
function Bars({
  data,
  max = 5,
  unit = ""
}) {
  // data: [{label, value, color}]
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 18,
      height: 200,
      padding: "0 4px"
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      height: "100%",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 700,
      fontSize: 12,
      color: "var(--ink-500)"
    }
  }, d.value.toFixed(1), unit), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 64,
      background: d.color,
      height: `${d.value / max * 100}%`,
      borderRadius: "8px 8px 0 0",
      minHeight: 6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-500)",
      textAlign: "center",
      fontWeight: 500,
      letterSpacing: "0.02em"
    }
  }, d.label))));
}
Object.assign(window, {
  Gauge,
  Donut,
  Bars,
  MOOD
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/charts.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.MoodScale = __ds_scope.MoodScale;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.StatCard = __ds_scope.StatCard;

})();
