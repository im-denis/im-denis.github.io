import { T as jsxRuntimeExports } from "./worker-entry-CBBvfL1l.js";
import { m as motion, P as PageShell } from "./PageShell-BbJTdAqC.js";
import { d as denisArtist } from "./denis-artist-B1aysNzN.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-CocG7-iP.js";
const artMountains = "/denis-artist/assets/art-mountains-tJCY99KE.jpg";
const artLion = "/denis-artist/assets/art-lion-Ch2qHLqr.jpg";
const artHorse = "/denis-artist/assets/art-horse-zCpO3X0p.jpg";
const artForest = "/denis-artist/assets/art-forest-D46ab6WZ.jpg";
const artStag = "/denis-artist/assets/art-stag-DfpjcxvS.jpg";
const artCoast = "/denis-artist/assets/art-coast-b-yEJ1mk.jpg";
const artFox = "/denis-artist/assets/art-fox-8BTnmDLk.jpg";
const artPine = "/denis-artist/assets/art-pine-DlcjX3Rb.jpg";
const works = [
  { src: artMountains, title: "Alpine Silence", no: "No. 01", size: "120 × 90 cm", year: "2025", w: 5 },
  { src: artLion, title: "Sovereign", no: "No. 02", size: "80 × 100 cm", year: "2025", w: 3 },
  { src: artHorse, title: "Chestnut Study", no: "No. 03", size: "70 × 90 cm", year: "2024", w: 3 },
  { src: artForest, title: "Nebelwald", no: "No. 04", size: "100 × 130 cm", year: "2024", w: 4 },
  { src: artStag, title: "Monarch of Autumn", no: "No. 05", size: "90 × 120 cm", year: "2025", w: 3 },
  { src: artCoast, title: "Northern Stacks", no: "No. 06", size: "110 × 85 cm", year: "2024", w: 4 },
  { src: artFox, title: "Vixen", no: "No. 07", size: "60 × 75 cm", year: "2025", w: 3 },
  { src: artPine, title: "Pine, Detail", no: "No. 08", size: "50 × 60 cm", year: "2023", w: 3 }
];
const rows = [
  [works[0], works[1]],
  // 5 + 3
  [works[2], works[3]],
  // 3 + 4  (wider right)
  [works[4], works[5]],
  // 3 + 4
  [works[6], works[7]]
  // 3 + 3
];
function Piece({ work, index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.figure,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.7, delay: index % 2 * 0.08, ease: [0.22, 1, 0.36, 1] },
      style: { flex: work.w },
      className: "group min-w-0",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden bg-muted aspect-[4/5] md:aspect-auto md:h-[62vh] transition-all duration-500 group-hover:shadow-[0_30px_80px_-20px_rgba(20,15,10,0.25)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: work.src,
            alt: work.title,
            loading: "lazy",
            width: 1024,
            height: 1280,
            className: "w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.035]"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-5 flex items-baseline justify-between gap-4 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-4 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-caps text-xs text-muted-foreground shrink-0", children: work.no }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display tracking-tight text-base md:text-lg truncate", children: work.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono-caps text-xs text-muted-foreground shrink-0", children: [
            work.size,
            " · ",
            work.year
          ] })
        ] })
      ]
    }
  );
}
function Gallery() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 md:px-12 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1600px] space-y-16 md:space-y-28", children: rows.map((row, ri) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col md:flex-row gap-10 md:gap-16", children: row.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Piece, { work: w, index: ri * 2 + i }, w.no)) }, ri)) }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 md:px-12 pt-12 md:pt-20 pb-20 md:pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1]
      }, className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono-caps text-xs text-muted-foreground mb-6 md:mb-10", children: "Est. 2012 — Munich Studio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-[18vw] lg:text-[10.5vw] leading-[0.82] tracking-[-0.06em]", children: [
          "DENIS",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "SIMON"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 md:mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 font-display text-xl md:text-3xl tracking-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Acrylic" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "·" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Realism" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "·" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Nature" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 1,
        delay: 0.15,
        ease: [0.22, 1, 0.36, 1]
      }, className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] overflow-hidden bg-muted shadow-[0_40px_100px_-30px_rgba(20,15,10,0.35)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: denisArtist, alt: "Denis Simon in his studio", width: 1024, height: 1280, className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-5 md:p-7 flex items-end justify-between font-mono-caps text-[10px] md:text-xs text-background", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Studio, 2025" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "01 / 01" })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 md:px-12 pb-10 md:pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1600px] flex items-end justify-between border-t border-border pt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono-caps text-xs text-muted-foreground", children: "Selected Works — 2023 / 2025" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono-caps text-xs text-muted-foreground", children: "Eight Paintings" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, {})
  ] });
}
export {
  Index as component
};
