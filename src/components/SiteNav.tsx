import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import signature from "@/assets/artist/signature.png";

const links = [
  { to: "/", label: "Work" },
  { to: "/vita", label: "About" },
  { to: "/commissions", label: "Commissions" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/60">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-5 md:py-7 flex items-center justify-between">
        <Link to="/" className="h-8 md:h-10 flex items-center">
          <img src={signature} alt="Denis Simon signature" className="h-full object-contain" />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-display text-sm tracking-[0.15em] uppercase text-foreground/80 hover:text-foreground transition-colors"
              activeProps={{ className: "font-display text-sm tracking-[0.15em] uppercase text-foreground underline underline-offset-8 decoration-1" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-border/60 bg-background"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="font-display text-4xl tracking-tighter"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
