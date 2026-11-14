import { useState } from "react";
import { ArrowRight, Mail, Menu, Phone, X } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { contactDetails, navigation } from "@/lib/palacewall-content";
import logo from "@/assets/logo.png";

export function PalacewallLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div className="pw-page flex flex-col">
      <a href="#main-content" className="pw-skip">Skip to content</a>
      <div className="pw-topline">
        <div className="pw-container flex min-h-8 items-center justify-between gap-3">
          <span>Canada <span aria-hidden="true">/</span> Nigeria <span aria-hidden="true">/</span> International markets</span>
          <span className="hidden sm:inline">Connecting continents. Creating opportunities. Building legacies.</span>
        </div>
      </div>
      <header className="pw-header">
        <div className="pw-container flex min-h-[5.25rem] items-center justify-between gap-5">
          <Link to="/" className="pw-brand shrink-0" aria-label="Palacewall home">
            <img src={logo} alt="" aria-hidden="true" className="pw-brand-mark" />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg font-semibold text-primary">PALACEWALL</span>
              <span className="text-[.62rem] uppercase text-muted-foreground">Media & Entertainment Ltd.</span>
            </span>
          </Link>
          <nav aria-label="Main navigation" className="hidden flex-1 items-center justify-end gap-x-5 xl:flex">
            {navigation.map((item) => (
              <Link key={item.to} to={item.to} className="pw-nav-link" data-active={pathname === item.to}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Button asChild className="hidden shrink-0 gap-2 md:inline-flex">
            <Link to="/contact">Get in touch <ArrowRight aria-hidden="true" /></Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 xl:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
        {menuOpen && (
          <nav aria-label="Mobile navigation" className="pw-menu-panel border-t border-border bg-background xl:hidden">
            <div className="pw-container grid grid-cols-2 gap-x-5 py-3 sm:grid-cols-3">
              {navigation.map((item) => (
                <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)} className="pw-nav-link py-1" data-active={pathname === item.to}>
                  {item.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="pw-nav-link py-1 font-semibold text-primary md:hidden">Get in touch <ArrowRight className="ml-2 size-4" aria-hidden="true" /></Link>
            </div>
          </nav>
        )}
      </header>

      <main id="main-content" className="flex-1">{children}</main>

      <footer className="pw-footer mt-20">
        <div className="pw-container grid gap-12 py-14 md:grid-cols-[1.2fr_.8fr] md:py-20">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <img src={logo} alt="" aria-hidden="true" className="size-11 object-contain" />
              <span className="flex flex-col leading-tight">
                <span className="font-display text-lg font-semibold">PALACEWALL</span>
                <span className="text-[.62rem] uppercase opacity-70">Media & Entertainment Ltd.</span>
              </span>
            </Link>
            <p className="mt-6 max-w-lg text-sm leading-7 opacity-75">A diversified international enterprise with separately incorporated and affiliated corporate entities in Canada and Nigeria.</p>
            <p className="mt-4 text-xs opacity-65">Canada <span aria-hidden="true">·</span> Nigeria <span aria-hidden="true">·</span> International markets</p>
            <div className="mt-5 flex flex-col items-start gap-2">
              <a href={`mailto:${contactDetails.email}`} className="pw-footer-link inline-flex items-center gap-2 py-1 text-sm">
                <Mail className="size-4" aria-hidden="true" />{contactDetails.email}
              </a>
              <a href={`tel:${contactDetails.phone.replace(/[^+\d]/g, "")}`} className="pw-footer-link inline-flex items-center gap-2 py-1 text-sm">
                <Phone className="size-4" aria-hidden="true" />{contactDetails.phone}
              </a>
            </div>
          </div>
          <div className="md:justify-self-end">
            <p className="pw-kicker !text-sage">Explore</p>
            <nav aria-label="Footer navigation" className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2">
              {navigation.map((item) => (
                <Link key={item.to} to={item.to} className="pw-footer-link py-1 text-sm">{item.label}</Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20">
          <div className="pw-container flex flex-col gap-2 py-5 text-xs opacity-70 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 Palacewall Media & Entertainment Ltd. All rights reserved.</span>
            <span>Connecting continents. Creating opportunities. Building legacies.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}