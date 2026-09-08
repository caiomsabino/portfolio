"use client";

import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { RequestTrace } from "@/components/request-trace";
import { SITE_LINKS } from "@/content/links";
import { useContent } from "@/lib/language-context";

export function Hero() {
  const { hero, contact } = useContent();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="grid items-center gap-10 pb-14 pt-16 sm:pb-16 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-14"
    >
      <div className="flex flex-col gap-6">
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
          {hero.role}
        </p>
        <h1
          id="hero-heading"
          className="text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
        >
          {hero.name}
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground">{hero.pitch}</p>

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
      </div>

      <RequestTrace />
    </section>
  );
}
