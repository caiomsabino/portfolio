"use client";

import type { SpokenLanguage } from "@/content/types";
import { FLAGS } from "@/content/flags";
import { cn } from "@/lib/utils";

const LEVELS = 4;

function Flag({ code }: { code: string }) {
  const flag = FLAGS[code];
  if (!flag) return null;
  return (
    <svg
      viewBox={flag.viewBox}
      role="img"
      aria-label={code}
      className="h-3.5 w-5 shrink-0 rounded-[2px] ring-1 ring-foreground/10"
      // Static artwork generated into content/flags.ts at author time from a
      // vendored package — never user input, never fetched. The alternative is
      // hand-transcribing each flag's paths, circles and groups into JSX.
      dangerouslySetInnerHTML={{ __html: flag.inner }}
    />
  );
}

export function SpokenLanguages({ languages }: { languages: SpokenLanguage[] }) {
  return (
    <ul className="flex flex-wrap gap-2.5" role="list">
      {languages.map((lang) => (
        <li
          key={lang.name}
          className="group flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2 transition-colors hover:border-primary/40"
        >
          <span className="flex -space-x-1.5">
            {lang.regions.map((code) => (
              <span
                key={code}
                // Overlapped at rest, fanned out on hover: two flags for one
                // language read as a pair rather than two separate entries.
                className="transition-transform duration-200 group-hover:translate-x-0 [&:not(:first-child)]:group-hover:translate-x-1.5 motion-reduce:transition-none"
              >
                <Flag code={code} />
              </span>
            ))}
          </span>

          <span className="flex flex-col leading-tight">
            <span className="text-sm text-foreground">{lang.name}</span>
            <span className="font-mono text-[11px] text-muted-foreground">{lang.level}</span>
          </span>

          <span
            className="flex items-center gap-0.5"
            role="img"
            aria-label={`${lang.proficiency}/${LEVELS}`}
          >
            {Array.from({ length: LEVELS }, (_, i) => (
              <span
                key={i}
                className={cn(
                  "h-3.5 w-1 rounded-full transition-colors",
                  i < lang.proficiency ? "bg-primary" : "bg-muted",
                )}
              />
            ))}
          </span>
        </li>
      ))}
    </ul>
  );
}
