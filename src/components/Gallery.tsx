import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import img26 from "@/assets/paintings/26-owl-40x40-2026.jpg";
import img27 from "@/assets/paintings/27-duck-family-50x40-2026.jpg";
import img23 from "@/assets/paintings/23-strawberry-stilllife-70x50-2025.jpg";
import img24 from "@/assets/paintings/24-cowboy-campfire-40x30-2025.jpg";
import img25 from "@/assets/paintings/25-house-at-ocean-50x40-2025.jpg";
import img21 from "@/assets/paintings/21-lighthouse-100x70-2023.jpg";
import img22 from "@/assets/paintings/22-cabin-80x120-2023.jpg";
import img17 from "@/assets/paintings/17-lavender-field-100x70-2022.png";
import img18 from "@/assets/paintings/18-cowboy-with-horses-50x70-2022.jpg";
import img19 from "@/assets/paintings/19-sunset-landscape-30x40-2022.jpg";
import img20 from "@/assets/paintings/20-bird-40x30-2022.jpg";
import img05 from "@/assets/paintings/05-deer-70x50-2021.jpg";
import img06 from "@/assets/paintings/06-landscape-30x40-2021.jpg";
import img07 from "@/assets/paintings/07-river-24x30-2021.jpg";
import img08 from "@/assets/paintings/08-old-tree-30x40-2021.jpg";
import img09 from "@/assets/paintings/09-butterfly-24x30-2021.jpg";
import img10 from "@/assets/paintings/10-deer-70x50-2021.jpg";
import img11 from "@/assets/paintings/11-forest-path-40x30-2021.jpg";
import img12 from "@/assets/paintings/12-duck-pond-40x30-2021.jpg";
import img13 from "@/assets/paintings/13-campfire-30x40-2021.jpg";
import img14 from "@/assets/paintings/14-mountain-stream-30x40-2021.jpg";
import img15 from "@/assets/paintings/15-mountain-goat-30x40-2021.jpg";
import img16 from "@/assets/paintings/16-red-sea-30x40-2021.jpg";
import img01 from "@/assets/paintings/01-river-30x40-2020.jpg";
import img02 from "@/assets/paintings/02-wine-and-pepper-still-life-100x70-2020.jpg";
import img03 from "@/assets/paintings/03-boat-40x30-2020.jpg";
import img04 from "@/assets/paintings/04-flowers-and-windmill-100x70-2020.jpg";

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
  { src: img26, title: "Owl", no: "No. 26", size: "40 × 40 cm", year: "2026", w: 3 },
  { src: img27, title: "Duck Family", no: "No. 27", size: "50 × 40 cm", year: "2026", w: 3 },
  { src: img23, title: "Strawberry Still Life", no: "No. 23", size: "70 × 50 cm", year: "2025", w: 3 },
  { src: img24, title: "Night Camp", no: "No. 24", size: "40 × 30 cm", year: "2025", w: 3 },
  { src: img25, title: "House at Ocean", no: "No. 25", size: "50 × 40 cm", year: "2025", w: 3 },
  { src: img21, title: "Lighthouse", no: "No. 21", size: "100 × 70 cm", year: "2023", w: 3 },
  { src: img22, title: "Cabin", no: "No. 22", size: "80 × 120 cm", year: "2023", w: 3 },
  { src: img17, title: "Lavender Lady", no: "No. 17", size: "100 × 70 cm", year: "2022", w: 3 },
  { src: img18, title: "Wrangler", no: "No. 18", size: "50 × 70 cm", year: "2022", w: 3 },
  { src: img19, title: "Sunset Landscape", no: "No. 19", size: "30 × 40 cm", year: "2022", w: 3 },
  { src: img20, title: "Bird", no: "No. 20", size: "40 × 30 cm", year: "2022", w: 3 },
  { src: img05, title: "Deer", no: "No. 05", size: "70 × 50 cm", year: "2021", w: 3 },
  { src: img06, title: "Landscape", no: "No. 06", size: "30 × 40 cm", year: "2021", w: 3 },
  { src: img07, title: "River", no: "No. 07", size: "24 × 30 cm", year: "2021", w: 3 },
  { src: img08, title: "Tree", no: "No. 08", size: "30 × 40 cm", year: "2021", w: 3 },
  { src: img09, title: "Butterfly", no: "No. 09", size: "24 × 30 cm", year: "2021", w: 3 },
  { src: img10, title: "Deer", no: "No. 10", size: "70 × 50 cm", year: "2021", w: 3 },
  { src: img11, title: "Forest", no: "No. 11", size: "40 × 30 cm", year: "2021", w: 3 },
  { src: img12, title: "Duck Pond", no: "No. 12", size: "40 × 30 cm", year: "2021", w: 3 },
  { src: img13, title: "Campfire", no: "No. 13", size: "30 × 40 cm", year: "2021", w: 3 },
  { src: img14, title: "Mountain Stream", no: "No. 14", size: "30 × 40 cm", year: "2021", w: 3 },
  { src: img15, title: "Mountain Goat", no: "No. 15", size: "30 × 40 cm", year: "2021", w: 3 },
  { src: img16, title: "Sunset Lake", no: "No. 16", size: "30 × 40 cm", year: "2021", w: 3 },
  { src: img01, title: "River", no: "No. 01", size: "30 × 40 cm", year: "2020", w: 3 },
  { src: img02, title: "Wine and Pepper Still Life", no: "No. 02", size: "100 × 70 cm", year: "2020", w: 3 },
  { src: img03, title: "Mountain Lake", no: "No. 03", size: "40 × 30 cm", year: "2020", w: 3 },
  { src: img04, title: "Windmill", no: "No. 04", size: "100 × 70 cm", year: "2020", w: 3 },
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

function Piece({ work, index, onOpen }: { work: Work; index: number; onOpen: (work: Work) => void }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ flex: work.w }}
      className="group min-w-0"
    >
      <button
        type="button"
        onClick={() => onOpen(work)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onOpen(work);
          }
        }}
        aria-label={`Open ${work.title} full size`}
        className="text-left"
      >
        <div className="relative overflow-hidden bg-muted aspect-square transition-all duration-500 group-hover:shadow-[0_30px_80px_-20px_rgba(20,15,10,0.25)]">
          <img
            src={work.src}
            alt={work.title}
            loading="lazy"
            width={1024}
            height={1280}
            className="w-full h-full object-contain transition-transform duration-[900ms] ease-out group-hover:scale-[1.035]"
          />
        </div>
        <figcaption className="mt-5 text-sm">
          <div className="text-2xl md:text-3xl font-handwritten leading-tight">{work.title}</div>
          <div className="mt-3 flex flex-wrap items-center gap-3 font-handwritten text-sm text-muted-foreground">
            <span>{work.no}</span>
            <span aria-hidden="true">•</span>
            <span>{work.size}</span>
            <span aria-hidden="true">•</span>
            <span>{work.year}</span>
          </div>
        </figcaption>
      </button>
    </motion.figure>
  );
}

export function Gallery() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  return (
    <>
      <section className="px-6 md:px-12 pb-24">
        <div className="mx-auto max-w-[1600px] space-y-16 md:space-y-28">
          {rows.map((row, ri) => (
            <div key={ri} className="flex flex-col md:flex-row gap-10 md:gap-16">
              {row.map((w, i) => (
                <Piece key={w.no} work={w} index={ri * 3 + i} onOpen={setSelectedWork} />
              ))}
            </div>
          ))}
        </div>
      </section>

      <Dialog open={!!selectedWork} onOpenChange={(open) => !open && setSelectedWork(null)}>
        {selectedWork && (
          <DialogContent onClick={() => setSelectedWork(null)} className="w-full max-w-[95vw] max-h-[95vh] p-0 bg-transparent border-none shadow-none sm:max-w-[1200px]">
            <div className="relative flex items-center justify-center">
              <img
                src={selectedWork.src}
                alt={selectedWork.title}
                className="max-h-[85vh] w-auto object-contain rounded-lg"
              />
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
