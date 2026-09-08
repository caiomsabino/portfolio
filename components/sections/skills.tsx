"use client";

import { Code2, Database, GitBranch, Layers, Workflow } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { TechSphere } from "@/components/tech-sphere";
import { Separator } from "@/components/ui/separator";
import { TECH_ICONS } from "@/content/tech-icons";
import { useContent } from "@/lib/language-context";

// Keyed by position rather than label, since the labels are translated.
const GROUP_ICONS = [Code2, Layers, Database, GitBranch, Workflow];

export function Skills() {
  const { skills } = useContent();

  // Only the items that actually have a brand mark go into the sphere; a
  // floating badge reading "TD" for TDD would be noise, not decoration.
  const orbiting = skills.groups.flatMap((g) => g.items).filter((item) => TECH_ICONS[item]);

  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-16 sm:py-20">
      <Reveal className="flex flex-col gap-4">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {skills.label}
        </p>
        <h2 id="skills-heading" className="text-2xl font-semibold tracking-tight">
          {skills.heading}
        </h2>

        <TechSphere names={orbiting} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.groups.map((group, i) => {
            const Icon = GROUP_ICONS[i] ?? Code2;
            return (
              <div
                key={group.label}
                className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5"
              >
                <h3 className="flex items-center gap-2.5 text-sm font-medium">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-4" />
                  </span>
                  {group.label}
                </h3>
                <ul className="flex flex-wrap gap-1.5" role="list">
                  {group.items.map((item) => {
                    const icon = TECH_ICONS[item];
                    return (
                      <li
                        key={item}
                        className="flex items-center gap-1.5 rounded-md border border-border bg-background px-2 py-1 font-mono text-[11px] text-foreground"
                      >
                        {icon ? (
                          <svg
                            viewBox="0 0 24 24"
                            className="size-3 shrink-0"
                            fill={icon.hex}
                            aria-hidden="true"
                          >
                            <path d={icon.path} />
                          </svg>
                        ) : (
                          <span
                            aria-hidden="true"
                            className="size-1 shrink-0 rounded-full bg-muted-foreground"
                          />
                        )}
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <Separator className="my-6" />

        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {skills.languagesLabel}
          </h3>
          <p className="text-sm text-muted-foreground">{skills.languages}</p>
        </div>
      </Reveal>
    </section>
  );
}
