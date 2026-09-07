"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_LINKS } from "@/content/links";
import { useContent, useLanguage, type Language } from "@/lib/language-context";
import { cn } from "@/lib/utils";

const LANGUAGES: Language[] = ["pt", "en"];

export function SiteHeader() {
  const content = useContent();
  const { language, setLanguage } = useLanguage();

  const links = [
    { href: "#about", label: content.nav.about },
    { href: "#experience", label: content.nav.experience },
    { href: "#projects", label: content.nav.projects },
    { href: "#skills", label: content.nav.skills },
    { href: "#contact", label: content.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#top"
          className="rounded-sm font-mono text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          caio<span className="text-primary">.</span>sabino
        </a>

        <nav aria-label={content.nav.menuLabel} className="hidden gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <a href={SITE_LINKS.resume} download>
              <Download className="size-4" />
              <span className="hidden sm:inline">{content.contact.resumeLabel}</span>
            </a>
          </Button>

          <div className="flex items-center rounded-md border border-border p-0.5">
            {LANGUAGES.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setLanguage(option)}
                aria-pressed={language === option}
                className={cn(
                  "rounded-sm px-2.5 py-1 font-mono text-xs uppercase transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  language === option
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
