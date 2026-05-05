import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { useDocumentMeta } from "@/lib/useDocumentMeta";

export const Route = createFileRoute("/imprint")({
  component: ImprintPage,
});

function ImprintPage() {
  useDocumentMeta({
    title: "Legal Notice - Denis Simon",
    description: "Legal notice and contact information for Denis Simon, artist based in Oldenburg, Germany.",
  });

  return (
    <PageShell>
      <section className="px-6 md:px-12 pt-16 md:pt-24 pb-24">
        <div className="mx-auto max-w-[1600px]">
          <div className="font-mono-caps text-xs text-muted-foreground mb-8">Legal</div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl md:text-8xl lg:text-9xl tracking-[-0.06em] leading-[0.85]"
          >
            Legal Notice
          </motion.h1>

          <div className="mt-14 space-y-12 max-w-3xl text-lg md:text-xl leading-relaxed text-foreground/80">
            <section>
              <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-4">Information according to § 5 DDG</h2>
              <address className="not-italic text-foreground/90">
                Denis Simon<br />
                Schumacherhof 2b<br />
                26123 Oldenburg<br />
                Germany
              </address>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-4">Contact</h2>
              <p>
                Phone: +49 (0) 159 06303066<br />
                E-mail: <a href="mailto:mail.simon.denis@gmail.com" className="underline decoration-muted-foreground/30 hover:decoration-foreground">mail.simon.denis@gmail.com</a>
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-4">Responsible for editorial content according to § 18 Abs. 2 MStV</h2>
              <address className="not-italic text-foreground/90">
                Denis Simon<br />
                Schumacherhof 2b<br />
                26123 Oldenburg<br />
                Germany
              </address>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-4">EU Dispute Resolution</h2>
              <p>
                The European Commission provides a platform for online dispute resolution (ODR):{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-muted-foreground/30 hover:decoration-foreground"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>.
              </p>
              <p>E-mail address can be found above in the contact section.</p>
            </section>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
