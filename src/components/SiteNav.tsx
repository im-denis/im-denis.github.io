import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import logo from "@/assets/artist/logo.png";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const { location } = useRouterState();
  const { t, i18n } = useTranslation();

  const links = [
    { to: "/#works", label: t("nav.work") },
    { to: "/vita", label: t("nav.about") },
    { to: "/commissions", label: t("nav.commissions") },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langOpen && langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [langOpen]);

  // Close all menus on route change
  useEffect(() => {
    setOpen(false);
    setLangOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/60">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-5 md:py-7 flex items-center justify-between relative">
        {/* Logo and Name */}
        <Link to="/#works" className="h-8 md:h-10 flex items-end">
          <img src={logo} alt="D" className="h-full object-contain" />
          <span className="font-script font-bold leading-none [word-spacing:0.2em] text-[rgb(28,66,111)] text-2xl md:text-3xl -ml-0.5">
            enis Simon
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-display text-sm tracking-[0.15em] uppercase text-foreground/80 hover:text-foreground transition-colors"
              activeProps={{
                className: "text-foreground underline underline-offset-8 decoration-1",
              }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Actions Area (Language + Mobile Toggle) */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Language Selector (Always visible) */}
          <div className="relative" ref={langRef}>
            <button
              aria-label="Language selector"
              className="flex items-center gap-1.5 p-1.5 md:p-2 rounded border border-border/50 hover:bg-accent/10 transition-colors cursor-pointer"
              onClick={() => setLangOpen(!langOpen)}
            >
              <Globe className="h-3.5 w-3.5 md:h-4 md:w-4" />
              <span className="text-xs font-medium uppercase">{i18n.language.toUpperCase()}</span>
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-40 bg-background border border-border/60 rounded-md shadow-xl z-[60] overflow-hidden"
                >
                  <div className="flex flex-col py-1">
                    {["en", "de", "es"].map((lng) => (
                      <button
                        key={lng}
                        onClick={() => changeLanguage(lng)}
                        className={`px-4 py-2 text-sm text-left hover:bg-accent transition-colors cursor-pointer ${
                          i18n.language === lng ? "bg-accent/50 font-bold" : ""
                        }`}
                      >
                        {lng === "en" ? "English" : lng === "de" ? "Deutsch" : "Español"}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden fixed top-[72px] md:top-[96px] left-0 right-0 bg-background/98 backdrop-blur-2xl z-40 border-t border-border/60 overflow-hidden"
            >
              <div className="flex flex-col px-8 py-12 gap-10">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="font-display text-4xl tracking-tighter text-foreground hover:translate-x-2 transition-transform duration-300"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
