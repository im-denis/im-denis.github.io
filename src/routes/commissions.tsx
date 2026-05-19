import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { useDocumentMeta } from "@/lib/useDocumentMeta";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/commissions")({
  component: CommissionsPage,
});

function CommissionsPage() {
  const { t } = useTranslation();

  const steps = [
    { n: "01", title: t("commissions.steps.0.title"), body: t("commissions.steps.0.body") },
    { n: "02", title: t("commissions.steps.1.title"), body: t("commissions.steps.1.body") },
    { n: "03", title: t("commissions.steps.2.title"), body: t("commissions.steps.2.body") },
    { n: "04", title: t("commissions.steps.3.title"), body: t("commissions.steps.3.body") },
    { n: "05", title: t("commissions.steps.4.title"), body: t("commissions.steps.4.body") },
  ];

  useDocumentMeta({
    title: t("commissions.title"),
    description: t("commissions.description"),
  });

  return (
    <PageShell>
      <section className="px-6 md:px-12 pt-16 md:pt-24 pb-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="font-mono-caps text-xs text-muted-foreground mb-8">
            {t("commissions.label")}
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl md:text-8xl lg:text-9xl tracking-[-0.06em] leading-[0.85]"
          >
            {t("commissions.heading")
              .split("\n")
              .map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-10 max-w-2xl text-lg md:text-xl text-foreground/80 leading-relaxed"
          >
            {t("commissions.intro")}
          </motion.p>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-24">
        <div className="mx-auto max-w-[1600px]">
          <div className="border-t border-border pt-6 mb-10 font-mono-caps text-xs text-muted-foreground">
            {t("commissions.processLabel")}
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6">
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="border-t border-border pt-5"
              >
                <div className="font-mono-caps text-xs text-muted-foreground mb-4">{s.n}</div>
                <div className="font-display text-2xl tracking-tight mb-3">{s.title}</div>
                <p className="text-sm text-foreground/75 leading-relaxed">{s.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-32">
        <div className="mx-auto max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-border p-10 md:p-14 max-w-2xl"
          >
            <h2 className="font-display text-4xl md:text-5xl tracking-tighter leading-[0.9] mb-8">
              {t("commissions.ctaHeading")
                .split("\n")
                .map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
            </h2>
            <p className="text-lg md:text-xl text-foreground/85 leading-relaxed mb-8">
              {t("commissions.ctaText")}
            </p>
            <a
              href="mailto:kontakt@denissimon.de"
              className="font-display text-sm tracking-[0.15em] uppercase bg-foreground text-background px-8 py-4 hover:bg-foreground/85 transition-colors inline-block"
            >
              {t("commissions.ctaButton")}
            </a>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
