import { motion } from "framer-motion";
import artMountains from "@/assets/art-mountains.jpg";
import artLion from "@/assets/art-lion.jpg";
import artHorse from "@/assets/art-horse.jpg";
import artForest from "@/assets/art-forest.jpg";
import artStag from "@/assets/art-stag.jpg";
import artCoast from "@/assets/art-coast.jpg";
import artFox from "@/assets/art-fox.jpg";
import artPine from "@/assets/art-pine.jpg";

type Work = {
  src: string;
  title: string;
  no: string;
  size: string;
  year: string;
  /** relative width weight — images share equal visual height */
  w: number;
};

const works: Work[] = [
  { src: artMountains, title: "Alpine Silence", no: "No. 01", size: "120 × 90 cm", year: "2025", w: 5 },
  { src: artLion, title: "Sovereign", no: "No. 02", size: "80 × 100 cm", year: "2025", w: 3 },
  { src: artHorse, title: "Chestnut Study", no: "No. 03", size: "70 × 90 cm", year: "2024", w: 3 },
  { src: artForest, title: "Nebelwald", no: "No. 04", size: "100 × 130 cm", year: "2024", w: 4 },
  { src: artStag, title: "Monarch of Autumn", no: "No. 05", size: "90 × 120 cm", year: "2025", w: 3 },
  { src: artCoast, title: "Northern Stacks", no: "No. 06", size: "110 × 85 cm", year: "2024", w: 4 },
  { src: artFox, title: "Vixen", no: "No. 07", size: "60 × 75 cm", year: "2025", w: 3 },
  { src: artPine, title: "Pine, Detail", no: "No. 08", size: "50 × 60 cm", year: "2023", w: 3 },
];

// Rows built with width weights; images crop to equal height but vary in width.
const rows: Work[][] = [
  [works[0], works[1]],       // 5 + 3
  [works[2], works[3]],       // 3 + 4  (wider right)
  [works[4], works[5]],       // 3 + 4
  [works[6], works[7]],       // 3 + 3
];

function Piece({ work, index }: { work: Work; index: number }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ flex: work.w }}
      className="group min-w-0"
    >
      <div className="relative overflow-hidden bg-muted aspect-[4/5] md:aspect-auto md:h-[62vh] transition-all duration-500 group-hover:shadow-[0_30px_80px_-20px_rgba(20,15,10,0.25)]">
        <img
          src={work.src}
          alt={work.title}
          loading="lazy"
          width={1024}
          height={1280}
          className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.035]"
        />
      </div>
      <figcaption className="mt-5 flex items-baseline justify-between gap-4 text-sm">
        <div className="flex items-baseline gap-4 min-w-0">
          <span className="font-mono-caps text-xs text-muted-foreground shrink-0">{work.no}</span>
          <span className="font-display tracking-tight text-base md:text-lg truncate">{work.title}</span>
        </div>
        <div className="font-mono-caps text-xs text-muted-foreground shrink-0">
          {work.size} · {work.year}
        </div>
      </figcaption>
    </motion.figure>
  );
}

export function Gallery() {
  return (
    <section className="px-6 md:px-12 pb-24">
      <div className="mx-auto max-w-[1600px] space-y-16 md:space-y-28">
        {rows.map((row, ri) => (
          <div key={ri} className="flex flex-col md:flex-row gap-10 md:gap-16">
            {row.map((w, i) => (
              <Piece key={w.no} work={w} index={ri * 2 + i} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
