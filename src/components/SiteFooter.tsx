import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export function SiteFooter() {
  const { t } = useTranslation();

  return (
    <footer className="mt-32 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-16 md:py-24">
        <div className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9] mb-12">
          {t("footer.heading")
            .split("\n")
            .map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
        </div>

        <div className="flex flex-col md:grid md:grid-cols-4 gap-y-10 md:gap-8 text-sm md:max-w-4xl">
          <div>
            <div className="font-mono-caps text-xs text-muted-foreground mb-3">
              {t("footer.studio")}
            </div>
            <div>{t("footer.studioLocation")}</div>
          </div>

          <div>
            <div className="font-mono-caps text-xs text-muted-foreground mb-3">
              {t("footer.contact")}
            </div>
            <a
              href="mailto:kontakt@denissimon.de"
              className="hover:underline underline-offset-4 whitespace-nowrap pr-4"
            >
              kontakt@denissimon.de
            </a>
          </div>

          <div>
            <div className="font-mono-caps text-xs text-muted-foreground mb-3">
              {t("footer.follow")}
            </div>
            <a
              href="https://www.instagram.com/denissimon.art/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline underline-offset-4"
            >
              {t("footer.instagram")}
            </a>
          </div>

          <div>
            <div className="font-mono-caps text-xs text-muted-foreground mb-3">
              {t("footer.navigate")}
            </div>
            <Link to="/" className="block hover:underline underline-offset-4">
              {t("nav.work")}
            </Link>
            <Link to="/vita" className="block hover:underline underline-offset-4">
              {t("nav.about")}
            </Link>
            <Link to="/commissions" className="block hover:underline underline-offset-4">
              {t("nav.commissions")}
            </Link>
            <Link to="/imprint" className="block hover:underline underline-offset-4">
              {t("footer.imprint")}
            </Link>
            <Link to="/privacy" className="block hover:underline underline-offset-4">
              {t("footer.privacy")}
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/60 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 text-xs font-mono-caps text-muted-foreground">
          <span>{t("footer.copyright", { year: new Date().getFullYear() })}</span>
        </div>
      </div>
    </footer>
  );
}
