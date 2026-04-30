import { T as jsxRuntimeExports } from "./worker-entry-CBBvfL1l.js";
import { P as PageShell, m as motion } from "./PageShell-BbJTdAqC.js";
import { d as denisArtist } from "./denis-artist-B1aysNzN.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-CocG7-iP.js";
const timeline = [{
  year: "2012",
  text: "First solo exhibition, Munich. Begins working primarily in acrylic on large canvas."
}, {
  year: "2015",
  text: "Studies anatomy and wildlife illustration; develops a signature hyperreal animal portraiture."
}, {
  year: "2018",
  text: "Residency in the Bavarian Alps. Landscape cycle 'Alpine Silence' begins."
}, {
  year: "2021",
  text: "Work acquired by private collections in Zürich, London, and New York."
}, {
  year: "2023",
  text: "Group show 'Nature Observed' — Berlin. Launches commissioned portrait practice."
}, {
  year: "2025",
  text: "Current studio practice: equal devotion to landscape and animal portraiture."
}];
function VitaPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 md:px-12 pt-16 md:pt-24 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1600px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono-caps text-xs text-muted-foreground mb-8", children: "Vita" }),
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
        "A painter",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "of the seen."
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 md:px-12 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 24
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.7
      }, className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: denisArtist, alt: "Denis Simon at work", className: "w-full h-full object-cover" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 space-y-8 text-lg md:text-xl leading-relaxed text-foreground/85", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0,
          y: 16
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.6
        }, children: "Denis Simon paints what most people stop noticing: the weight of a shoulder, the grain of a peak at late afternoon, the pause before an animal looks away. His work is quiet by choice — a slow argument for attention." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0,
          y: 16
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.6,
          delay: 0.1
        }, children: "Working exclusively in acrylic on canvas, he builds paintings through dozens of transparent layers, each one drying before the next is laid. The surface resolves slowly, the way weather resolves. Nothing is hurried." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0,
          y: 16
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.6,
          delay: 0.2
        }, children: "Based in a north-facing studio outside Munich, Denis divides his practice between the Alps — where most of his landscapes begin as field studies — and commissioned animal portraits from clients across Europe and North America." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 md:px-12 pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1600px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border pt-6 mb-12 font-mono-caps text-xs text-muted-foreground", children: "Chronology" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "divide-y divide-border", children: timeline.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.li, { initial: {
        opacity: 0,
        y: 16
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-60px"
      }, transition: {
        duration: 0.5,
        delay: i * 0.04
      }, className: "grid grid-cols-12 gap-4 md:gap-10 py-8 md:py-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 md:col-span-2 font-display text-3xl md:text-5xl tracking-tighter", children: t.year }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 md:col-span-10 text-lg md:text-xl text-foreground/85 leading-relaxed", children: t.text })
      ] }, t.year)) })
    ] }) })
  ] });
}
export {
  VitaPage as component
};
