import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { useDocumentMeta } from "@/lib/useDocumentMeta";
import denisArtist from "@/assets/artist/denis-artist.jpg";

export const Route = createFileRoute("/vita")({
  component: VitaPage,
});


function VitaPage() {
  useDocumentMeta({
    title: "Denis Simon",
    description: "The biography and artistic journey of painter Denis Simon.",
  });
  return (
    <PageShell>
      <section className="px-6 md:px-12 pt-16 md:pt-24 pb-20">
        <div className="mx-auto max-w-[1600px]">
          <div className="font-mono-caps text-xs text-muted-foreground mb-8">About</div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl md:text-8xl lg:text-9xl tracking-[-0.06em] leading-[0.85]"
          >
            A painter<br />of the seen.
          </motion.h1>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-24">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img src={denisArtist} alt="Denis Simon at work" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <div className="lg:col-span-7 space-y-8 text-lg md:text-xl leading-relaxed text-foreground/85">
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              I paint to capture the beauty I see in the world — emotional moments, natural
              light, and the quiet details most people overlook. For over a decade, this passion
              has driven my work, each canvas presenting new challenges and deepening my craft.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              Born in Kazakhstan and raised in Germany, art has shaped my perspective since
              childhood. I taught myself the techniques I needed through years of dedicated
              practice. My work spans diverse styles — from imposing landscapes and dreamy
              compositions to portraits, animals, and abstractions — each reflecting my personal
              feelings and a commitment to the truthful representation of nature.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              By day, I work as a IT System Architect. By passion, I paint in my studio in
              Oldenburg, northern Germany. This balance between analytical problem-solving and
              creative expression defines both my professional and artistic life.
            </motion.p>
          </div>
        </div>
      </section>

    </PageShell>
  );
}
