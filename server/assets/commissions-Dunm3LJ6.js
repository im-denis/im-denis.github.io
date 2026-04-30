import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-knzF7_7B.js";
import { P as PageShell, m as motion } from "./PageShell-Cil7sP2v.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-DcC6j76B.js";
const steps = [{
  n: "01",
  title: "Conversation",
  body: "We begin with a call. You describe the subject, the place, the feeling. I listen."
}, {
  n: "02",
  title: "Reference",
  body: "You share photographs — your own, wherever possible. Together we choose the frame."
}, {
  n: "03",
  title: "Proposal",
  body: "I send a written proposal: size, palette direction, timeline, and price. Nothing begins until you agree."
}, {
  n: "04",
  title: "Painting",
  body: "Work takes six to twelve weeks. You receive two progress photographs, no more, no less."
}, {
  n: "05",
  title: "Delivery",
  body: "The finished canvas is varnished, signed, and shipped insured anywhere in the world."
}];
function CommissionsPage() {
  const [sent, setSent] = reactExports.useState(false);
  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 md:px-12 pt-16 md:pt-24 pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1600px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono-caps text-xs text-muted-foreground mb-8", children: "Commissions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }, className: "font-display text-6xl md:text-8xl lg:text-9xl tracking-[-0.06em] leading-[0.85]", children: [
        "Your subject,",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "painted slowly."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
        opacity: 0,
        y: 16
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.7,
        delay: 0.15
      }, className: "mt-10 max-w-2xl text-lg md:text-xl text-foreground/80 leading-relaxed", children: "A place you return to. An animal you love. I accept a small number of private commissions each year. Each painting is acrylic on canvas, signed, varnished, and made to last generations." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 md:px-12 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1600px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border pt-6 mb-10 font-mono-caps text-xs text-muted-foreground", children: "The Process" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.li, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-60px"
      }, transition: {
        duration: 0.5,
        delay: i * 0.06
      }, className: "border-t border-border pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono-caps text-xs text-muted-foreground mb-4", children: s.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl tracking-tight mb-3", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/75 leading-relaxed", children: s.body })
      ] }, s.n)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 md:px-12 pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono-caps text-xs text-muted-foreground mb-6", children: "Enquire" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl tracking-tighter leading-[0.9]", children: [
          "Tell me about",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "your painting."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-foreground/70 leading-relaxed", children: "I reply personally within a few days. No waitlist fee; no obligation." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 12
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "border border-border p-10 md:p-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono-caps text-xs text-muted-foreground mb-4", children: "Sent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl md:text-4xl tracking-tighter", children: "Thank you. I'll be in touch shortly." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", name: "name", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Subject", name: "subject", options: ["Animal Portrait", "Landscape", "Other"] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Approx. Size", name: "size", options: ["Small (up to 60 cm)", "Medium (60–100 cm)", "Large (100 cm +)"] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Tell me about the painting", name: "message", as: "textarea", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-4 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-caps text-xs text-muted-foreground", children: "All fields private" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "font-display text-sm tracking-[0.15em] uppercase bg-foreground text-background px-8 py-4 hover:bg-foreground/85 transition-colors", children: "Send enquiry →" })
        ] })
      ] }) })
    ] }) })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required,
  as
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-caps text-xs text-muted-foreground", children: label }),
    as === "textarea" ? /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name, required, rows: 5, className: "mt-3 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-lg resize-none transition-colors" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name, type, required, className: "mt-3 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-lg transition-colors" })
  ] });
}
function Select({
  label,
  name,
  options
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-caps text-xs text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("select", { name, className: "mt-3 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-lg transition-colors", children: options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: o, children: o }, o)) })
  ] });
}
export {
  CommissionsPage as component
};
