import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { useDocumentMeta } from "@/lib/useDocumentMeta";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/imprint")({
  component: ImprintPage,
});

function ImprintPage() {
  const { t } = useTranslation();

  useDocumentMeta({
    title: t("imprint.title"),
    description: t("imprint.description"),
  });

  return (
    <PageShell>
      <section className="px-6 md:px-12 pt-16 md:pt-24 pb-24">
        <div className="mx-auto max-w-[1600px]">
          <div className="font-mono-caps text-xs text-muted-foreground mb-8">
            {t("imprint.label")}
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl md:text-8xl lg:text-9xl tracking-[-0.06em] leading-[0.85]"
          >
            {t("imprint.heading")}
          </motion.h1>

          <div className="mt-14 space-y-12 max-w-3xl text-lg md:text-xl leading-relaxed text-foreground/80">
            <section>
              <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-4">
                {t("imprint.infoTitle")}
              </h2>
              <address className="not-italic text-foreground/90">
                {t("imprint.address")
                  .split("\n")
                  .map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
              </address>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-4">
                {t("imprint.contactTitle")}
              </h2>
              <p>
                {t("imprint.phoneLabel")} {t("imprint.phone")}
                <br />
                {t("imprint.emailLabel")}{" "}
                <a
                  href="mailto:mail.simon.denis@gmail.com"
                  className="underline decoration-muted-foreground/30 hover:decoration-foreground"
                >
                  mail.simon.denis@gmail.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-4">
                {t("imprint.editorialTitle")}
              </h2>
              <address className="not-italic text-foreground/90">
                {t("imprint.address")
                  .split("\n")
                  .map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
              </address>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-4">
                {t("imprint.disputeTitle")}
              </h2>
              <p>
                {t("imprint.disputeText")}{" "}
                <a
                  href={t("imprint.disputeLink")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-muted-foreground/30 hover:decoration-foreground"
                >
                  {t("imprint.disputeLink")}
                </a>
                .
              </p>
              <p>{t("imprint.disputeNote")}</p>
            </section>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
