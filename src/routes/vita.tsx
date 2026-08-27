import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { useDocumentMeta } from "@/lib/useDocumentMeta";
import { useTranslation } from "react-i18next";
import denisArtist from "@/assets/artist/denis-artist-02.jpg";

export const Route = createFileRoute("/vita")({
  component: VitaPage,
});

function VitaPage() {
  const { t } = useTranslation();

  useDocumentMeta({
    title: t("vita.title"),
    description: t("vita.description"),
  });
  return (
    <PageShell>
      <section className="px-6 md:px-12 pt-16 md:pt-24 pb-20">
        <div className="mx-auto max-w-[1600px]">
          <div className="font-mono-caps text-xs text-muted-foreground mb-8">
            {t("vita.aboutLabel")}
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl md:text-8xl lg:text-9xl tracking-[-0.06em] leading-[0.85]"
          >
            {t("vita.heading")
              .split("\n")
              .map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
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
              <img
                src={denisArtist}
                alt="Denis Simon at work"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="lg:col-span-7 space-y-8 text-lg md:text-xl leading-relaxed text-foreground/85">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t("vita.artistStatement")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t("vita.biography")}
            </motion.p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
