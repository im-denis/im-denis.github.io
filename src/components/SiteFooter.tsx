import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-16 md:py-24">
        <div className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9] mb-12">
          Let's make<br />something real.
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="font-mono-caps text-xs text-muted-foreground mb-3">Studio</div>
            <div>Munich, Germany</div>
          </div>
          <div>
            <div className="font-mono-caps text-xs text-muted-foreground mb-3">Contact</div>
            <a href="mailto:info@denissimonart.com" className="hover:underline underline-offset-4">info@denissimonart.com</a>
          </div>
          <div>
            <div className="font-mono-caps text-xs text-muted-foreground mb-3">Follow</div>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block hover:underline underline-offset-4">Instagram</a>
            <a href="https://www.etsy.com" target="_blank" rel="noopener noreferrer" className="block hover:underline underline-offset-4">Etsy Shop</a>
          </div>
          <div>
            <div className="font-mono-caps text-xs text-muted-foreground mb-3">Navigate</div>
            <Link to="/" className="block hover:underline underline-offset-4">Work</Link>
            <Link to="/vita" className="block hover:underline underline-offset-4">Vita</Link>
            <Link to="/commissions" className="block hover:underline underline-offset-4">Commissions</Link>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border/60 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 text-xs font-mono-caps text-muted-foreground">
          <span>© 2026 Denis Simon. All rights reserved.</span>
          <span>Acrylic on canvas — Realism & Nature</span>
        </div>
      </div>
    </footer>
  );
}
