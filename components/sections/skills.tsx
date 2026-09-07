"use client";

import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useContent } from "@/lib/language-context";

export function Skills() {
  const { skills } = useContent();

  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-16 sm:py-20">
      <Reveal className="flex flex-col gap-4">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {skills.label}
        </p>
        <h2 id="skills-heading" className="text-2xl font-semibold tracking-tight">
          {skills.heading}
        </h2>

        <div className="flex flex-col gap-6 pt-6">
          {skills.groups.map((group) => (
            <div key={group.label} className="flex flex-col gap-3">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="outline" className="font-mono text-xs font-normal">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
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
