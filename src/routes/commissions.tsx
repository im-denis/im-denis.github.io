import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { useDocumentMeta } from "@/lib/useDocumentMeta";

export const Route = createFileRoute("/commissions")({
  component: CommissionsPage,
});

const steps = [
  { n: "01", title: "Conversation", body: "We begin with a call. You describe the subject, the place, the feeling. I listen." },
  { n: "02", title: "Reference", body: "You share photographs — your own, wherever possible. Together we choose the frame." },
  { n: "03", title: "Proposal", body: "I send a written proposal: size, palette direction, timeline, and price. Nothing begins until you agree." },
  { n: "04", title: "Painting", body: "Work takes six to twelve weeks. You receive two progress photographs, no more, no less." },
  { n: "05", title: "Delivery", body: "The finished canvas is varnished, signed, and shipped insured anywhere in the world." },
];

function CommissionsPage() {
  useDocumentMeta({
    title: "Denis Simon",
    description: "Commission a custom acrylic painting — landscape or animal portrait — by Denis Simon.",
  });

  return (
    <PageShell>
      <section className="px-6 md:px-12 pt-16 md:pt-24 pb-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="font-mono-caps text-xs text-muted-foreground mb-8">Commissions</div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl md:text-8xl lg:text-9xl tracking-[-0.06em] leading-[0.85]"
          >
            Your subject.<br />Crafted with precision.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-10 max-w-2xl text-lg md:text-xl text-foreground/80 leading-relaxed"
          >
            Places that carry meaning. An animal you love. I accept a small number of private
            commissions each year. Each painting is acrylic on canvas, signed, varnished,
            and made to last generations.
          </motion.p>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-24">
        <div className="mx-auto max-w-[1600px]">
          <div className="border-t border-border pt-6 mb-10 font-mono-caps text-xs text-muted-foreground">The Process</div>
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
              Tell me about<br />your painting.
            </h2>
            <p className="text-lg md:text-xl text-foreground/85 leading-relaxed mb-8">
              Send me a message with details about your vision — the subject, references, dimensions, and timeline. I'll respond with a proposal and next steps.
            </p>
            <a
              href="mailto:mail.simon.denis@gmail.com"
              className="font-display text-sm tracking-[0.15em] uppercase bg-foreground text-background px-8 py-4 hover:bg-foreground/85 transition-colors inline-block"
            >
              Send enquiry →
            </a>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
