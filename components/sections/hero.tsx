"use client";

import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { SITE_LINKS } from "@/content/links";
import { useContent } from "@/lib/language-context";

export function Hero() {
  const { hero, contact } = useContent();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="flex flex-col justify-center gap-6 py-24 sm:py-32"
    >
      <p className="font-mono text-sm text-primary">{hero.role}</p>
      <h1 id="hero-heading" className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {hero.name}
      </h1>
      <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">{hero.pitch}</p>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Button asChild>
          <a href="#projects">
            {hero.ctaProjects}
            <ArrowDown className="h-4 w-4" />
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href={SITE_LINKS.resume} download>
            {hero.ctaResume}
            <Download className="h-4 w-4" />
          </a>
        </Button>
        <div className="flex items-center gap-1">
          <Button asChild variant="ghost" size="icon">
            <a
              href={SITE_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${contact.githubLabel} — Caio Sabino`}
            >
              <GithubIcon className="size-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a
              href={SITE_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${contact.linkedinLabel} — Caio Sabino`}
            >
              <LinkedinIcon className="size-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
