import { motion } from "framer-motion";
import img01 from "@/assets/paintings/01-deer.jpg";
import img02 from "@/assets/paintings/02-landscape.jpg";
import img03 from "@/assets/paintings/03-river.jpg";
import img04 from "@/assets/paintings/04-old-tree.jpg";
import img05 from "@/assets/paintings/05-lavender-field.png";
import img06 from "@/assets/paintings/06-river.jpg";
import img07 from "@/assets/paintings/07-cowboy-with-horses.jpg";
import img08 from "@/assets/paintings/08-strawberry-stilllife.jpg";
import img09 from "@/assets/paintings/09-wine-and-pepper-still-life.jpg";
import img10 from "@/assets/paintings/10-lighthouse.jpg";
import img11 from "@/assets/paintings/11-mountains-boat.jpg";
import img12 from "@/assets/paintings/12-butterfly.jpg";
import img13 from "@/assets/paintings/13-cowboy-campfire.jpg";
import img14 from "@/assets/paintings/14-sunset-landscape.jpg";
import img15 from "@/assets/paintings/15-deer.jpg";
import img16 from "@/assets/paintings/16-owl.jpg";
import img17 from "@/assets/paintings/17-house-at-ocean.jpg";
import img18 from "@/assets/paintings/18-forest-path.jpg";
import img19 from "@/assets/paintings/19-duck-pond.jpg";
import img20 from "@/assets/paintings/20-campfire-night.jpg";
import img21 from "@/assets/paintings/21-stone-river.jpg";
import img22 from "@/assets/paintings/22-goat-mountain.jpg";
import img23 from "@/assets/paintings/23-red-sea.jpg";
import img24 from "@/assets/paintings/24-flowers-and-windmill.jpg";
import img25 from "@/assets/paintings/25-bird.jpg";
import img26 from "@/assets/paintings/26-lake-cabin.jpg";
import img27 from "@/assets/paintings/27-duck-family.jpg";

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
  { src: img01, title: "Nocturne of the Stag", no: "No. 01", size: "80 × 100 cm", year: "2024", w: 3 },
  { src: img02, title: "Veil of the Distant Plain", no: "No. 02", size: "80 × 100 cm", year: "2024", w: 3 },
  { src: img03, title: "Silver Thread", no: "No. 03", size: "80 × 100 cm", year: "2024", w: 3 },
  { src: img04, title: "Whispering Oak", no: "No. 04", size: "80 × 100 cm", year: "2024", w: 3 },
  { src: img05, title: "Lavender Reverie", no: "No. 05", size: "80 × 100 cm", year: "2024", w: 3 },
  { src: img06, title: "Moonlit Current", no: "No. 06", size: "80 × 100 cm", year: "2024", w: 3 },
  { src: img07, title: "Saddlelight", no: "No. 07", size: "80 × 100 cm", year: "2024", w: 3 },
  { src: img08, title: "Summer Berry Still Life", no: "No. 08", size: "80 × 100 cm", year: "2024", w: 3 },
  { src: img09, title: "Velvet & Spice", no: "No. 09", size: "80 × 100 cm", year: "2024", w: 3 },
  { src: img10, title: "Beacon at Dusk", no: "No. 10", size: "80 × 100 cm", year: "2024", w: 3 },
  { src: img11, title: "Mast Among Peaks", no: "No. 11", size: "80 × 100 cm", year: "2024", w: 3 },
  { src: img12, title: "Ephemeral Flight", no: "No. 12", size: "80 × 100 cm", year: "2024", w: 3 },
  { src: img13, title: "Campfire in the Dust", no: "No. 13", size: "80 × 100 cm", year: "2024", w: 3 },
  { src: img14, title: "Last Light Horizon", no: "No. 14", size: "80 × 100 cm", year: "2024", w: 3 },
  { src: img15, title: "Forest Muse", no: "No. 15", size: "80 × 100 cm", year: "2024", w: 3 },
  { src: img16, title: "Midnight Witness", no: "No. 16", size: "80 × 100 cm", year: "2024", w: 3 },
  { src: img17, title: "House of Tides", no: "No. 17", size: "80 × 100 cm", year: "2024", w: 3 },
  { src: img18, title: "Path of Quiet Pines", no: "No. 18", size: "80 × 100 cm", year: "2024", w: 3 },
  { src: img19, title: "Pond of Floating Petals", no: "No. 19", size: "80 × 100 cm", year: "2024", w: 3 },
  { src: img20, title: "Ember Night", no: "No. 20", size: "80 × 100 cm", year: "2024", w: 3 },
  { src: img21, title: "Stone Song River", no: "No. 21", size: "80 × 100 cm", year: "2024", w: 3 },
  { src: img22, title: "Cliffside Wanderer", no: "No. 22", size: "80 × 100 cm", year: "2024", w: 3 },
  { src: img23, title: "Crimson Sea", no: "No. 23", size: "80 × 100 cm", year: "2024", w: 3 },
  { src: img24, title: "Windmill Bouquet", no: "No. 24", size: "80 × 100 cm", year: "2024", w: 3 },
  { src: img25, title: "Aerial Grace", no: "No. 25", size: "80 × 100 cm", year: "2024", w: 3 },
  { src: img26, title: "Lakeside Solitude", no: "No. 26", size: "80 × 100 cm", year: "2024", w: 3 },
  { src: img27, title: "Family at the Water's Edge", no: "No. 27", size: "80 × 100 cm", year: "2024", w: 3 },
];

// Rows built with width weights; images crop to equal height but vary in width.
const rows: Work[][] = [
  [works[0], works[1], works[2]],
  [works[3], works[4], works[5]],
  [works[6], works[7], works[8]],
  [works[9], works[10], works[11]],
  [works[12], works[13], works[14]],
  [works[15], works[16], works[17]],
  [works[18], works[19], works[20]],
  [works[21], works[22], works[23]],
  [works[24], works[25], works[26]],
];

function Piece({ work, index }: { work: Work; index: number }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
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
              <Piece key={w.no} work={w} index={ri * 3 + i} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
