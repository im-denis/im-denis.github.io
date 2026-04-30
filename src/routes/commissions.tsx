import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
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
    title: "Commissions — Denis Simon",
    description: "Commission a custom acrylic painting — landscape or animal portrait — by Denis Simon.",
  });
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

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
            Your subject,<br />painted slowly.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-10 max-w-2xl text-lg md:text-xl text-foreground/80 leading-relaxed"
          >
            A place you return to. An animal you love. I accept a small number of private
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
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="font-mono-caps text-xs text-muted-foreground mb-6">Enquire</div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tighter leading-[0.9]">
              Tell me about<br />your painting.
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed">
              I reply personally within a few days. No waitlist fee; no obligation.
            </p>
          </div>

          <div className="lg:col-span-8">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-border p-10 md:p-14"
              >
                <div className="font-mono-caps text-xs text-muted-foreground mb-4">Sent</div>
                <div className="font-display text-3xl md:text-4xl tracking-tighter">
                  Thank you. I'll be in touch shortly.
                </div>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Field label="Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Select label="Subject" name="subject" options={["Animal Portrait", "Landscape", "Other"]} />
                  <Select label="Approx. Size" name="size" options={["Small (up to 60 cm)", "Medium (60–100 cm)", "Large (100 cm +)"]} />
                </div>
                <Field label="Tell me about the painting" name="message" as="textarea" required />
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="font-mono-caps text-xs text-muted-foreground">All fields private</span>
                  <button
                    type="submit"
                    className="font-display text-sm tracking-[0.15em] uppercase bg-foreground text-background px-8 py-4 hover:bg-foreground/85 transition-colors"
                  >
                    Send enquiry →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  as,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "textarea";
}) {
  return (
    <label className="block">
      <span className="font-mono-caps text-xs text-muted-foreground">{label}</span>
      {as === "textarea" ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          className="mt-3 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-lg resize-none transition-colors"
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className="mt-3 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-lg transition-colors"
        />
      )}
    </label>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="font-mono-caps text-xs text-muted-foreground">{label}</span>
      <select
        name={name}
        className="mt-3 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-lg transition-colors"
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
