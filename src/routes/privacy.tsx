import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { useDocumentMeta } from "@/lib/useDocumentMeta";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  const { t } = useTranslation();

  useDocumentMeta({
    title: t("privacy.title"),
    description: t("privacy.description"),
  });

  const rights = [
    t("privacy.rights.0"),
    t("privacy.rights.1"),
    t("privacy.rights.2"),
    t("privacy.rights.3"),
    t("privacy.rights.4"),
    t("privacy.rights.5"),
  ];

  return (
    <PageShell>
      <section className="px-6 md:px-12 pt-16 md:pt-24 pb-24">
        <div className="mx-auto max-w-[1600px]">
          <div className="font-mono-caps text-xs text-muted-foreground mb-8">
            {t("privacy.label")}
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl md:text-8xl lg:text-9xl tracking-[-0.06em] leading-[0.85]"
          >
            {t("privacy.heading")}
          </motion.h1>

          <div className="mt-14 space-y-12 max-w-3xl text-lg md:text-xl leading-relaxed text-foreground/80">
            <section>
              <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-4">
                {t("privacy.controllerTitle")}
              </h2>
              <p>{t("privacy.controllerText")}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-4">
                {t("privacy.contactTitle")}
              </h2>
              <p>{t("privacy.contactText")}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-4">
                {t("privacy.orderTitle")}
              </h2>
              <ol className="list-decimal list-inside space-y-4">
                <li>{t("privacy.order1")}</li>
                <li>{t("privacy.order2")}</li>
              </ol>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-4">
                {t("privacy.rightsTitle")}
              </h2>
              <p className="mb-4">{t("privacy.rightsIntro")}</p>
              <ul className="list-disc list-inside space-y-2">
                {rights.map((right, i) => (
                  <li key={i}>{right}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-4">
                {t("privacy.retentionTitle")}
              </h2>
              <p>{t("privacy.retentionText")}</p>
            </section>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
