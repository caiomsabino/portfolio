"use client";

import { Reveal } from "@/components/reveal";
import { useContent } from "@/lib/language-context";

export function About() {
  const { about } = useContent();

  return (
    <section id="about" aria-labelledby="about-heading" className="py-16 sm:py-20">
      <Reveal className="flex flex-col gap-4">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {about.label}
        </p>
        <h2 id="about-heading" className="text-2xl font-semibold tracking-tight">
          {about.heading}
        </h2>
        <div className="flex flex-col gap-4 pt-2">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
