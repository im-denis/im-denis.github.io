import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { Gallery } from "@/components/Gallery";
import { useDocumentMeta } from "@/lib/useDocumentMeta";
import { useTranslation } from "react-i18next";
import denisArtist from "@/assets/artist/denis-artist.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { t } = useTranslation();

  useDocumentMeta({
    title: t("home.title"),
    description: t("home.description"),
  });
  return (
    <PageShell>
      {/* Hero: split screen */}
      <section className="px-6 md:px-12 pt-12 md:pt-20 pb-20 md:pb-32">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="font-mono-caps text-xs text-muted-foreground mb-6 md:mb-10">
              {t("home.heroSubtitle")}
            </div>
            <h1 className="mask-artist-name font-display text-[18vw] lg:text-[10.5vw] leading-[0.82] tracking-[-0.06em]">
              {t("home.heroTitle")}
              <br />
              {t("home.heroTitleSecond")}
            </h1>
            <div className="mt-8 md:mt-12 flex flex-nowrap items-center gap-x-5 font-display tracking-tight whitespace-nowrap text-[clamp(0.9rem,3vw,1.9rem)] md:text-[clamp(1.25rem,2vw,2.5rem)]">
              <span>{t("home.heroTagline1")}</span>
              <span className="text-muted-foreground">·</span>
              <span>{t("home.heroTagline2")}</span>
              <span className="text-muted-foreground">·</span>
              <span>{t("home.heroTagline3")}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-muted shadow-[0_40px_100px_-30px_rgba(20,15,10,0.35)]">
              <img
                src={denisArtist}
                alt="Denis Simon in his studio"
                width={1024}
                height={1280}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Works index header */}
      <section id="works" className="px-6 md:px-12 pb-10 md:pb-16">
        <div className="mx-auto max-w-[1600px] flex items-end justify-between border-t border-border pt-6">
          <div className="font-mono-caps text-xs text-muted-foreground">
            {t("home.latestWorks")}
          </div>
        </div>
      </section>

      <Gallery />
    </PageShell>
  );
}
