"use client";

import { Reveal } from "@/components/reveal";
import { useContent } from "@/lib/language-context";

export function Experience() {
  const { experience } = useContent();

  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-16 sm:py-20">
      <Reveal className="flex flex-col gap-4">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {experience.label}
        </p>
        <h2 id="experience-heading" className="text-2xl font-semibold tracking-tight">
          {experience.heading}
        </h2>

        <ol className="flex flex-col gap-10 pt-6" role="list">
          {experience.entries.map((entry) => (
            <li
              key={`${entry.organization}-${entry.dates}`}
              className="relative border-l border-border pl-6"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full bg-primary"
              />
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base font-medium text-foreground">{entry.organization}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{entry.dates}</span>
                </div>
                <p className="text-sm text-primary">{entry.role}</p>
                <p className="font-mono text-xs text-muted-foreground">{entry.location}</p>
              </div>
              <ul className="flex list-disc flex-col gap-2 pt-4 pl-4 marker:text-border">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="text-sm leading-relaxed text-muted-foreground">
                    {bullet}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
