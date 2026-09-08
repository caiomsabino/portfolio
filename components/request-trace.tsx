"use client";

import { useContent } from "@/lib/language-context";

// Waterfall geometry, as fractions of the track. Fixed rather than derived:
// this is an illustration of a request path, not a measurement of one, and
// pretending otherwise with invented millisecond figures would be dishonest.
const SPANS = [
  { start: 0, width: 0.16, color: "var(--trace-auth)" },
  { start: 0.16, width: 0.28, color: "var(--trace-rules)" },
  { start: 0.44, width: 0.42, color: "var(--trace-query)" },
  { start: 0.86, width: 0.14, color: "var(--trace-response)" },
];

export function RequestTrace() {
  const { hero } = useContent();
  const { trace } = hero;

  return (
    <figure className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 sm:p-7">
      <figcaption className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-border pb-3">
        <span className="font-mono text-sm text-foreground">{trace.request}</span>
        <span className="flex items-center gap-2 font-mono text-sm text-primary">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
          {trace.status}
        </span>
      </figcaption>

      <ol className="flex flex-col gap-3.5" role="list">
        {trace.steps.map((step, i) => {
          const span = SPANS[i];
          return (
            <li
              key={step}
              className="flex flex-col gap-1.5 sm:grid sm:grid-cols-[auto_1fr] sm:items-center sm:gap-3"
            >
              {/* Full width on small screens: side-by-side would truncate the
                  longer step names, and a half-shown label is worse than a stack. */}
              <span className="font-mono text-xs text-muted-foreground sm:w-36 sm:shrink-0 sm:truncate">
                {step}
              </span>
              <span className="relative h-2.5 w-full rounded-full bg-muted">
                <span
                  className="absolute inset-y-0 rounded-full"
                  style={{
                    left: `${span.start * 100}%`,
                    width: `${span.width * 100}%`,
                    backgroundColor: span.color,
                  }}
                />
              </span>
            </li>
          );
        })}
      </ol>

      <p className="border-t border-border pt-3 font-mono text-[11px] leading-relaxed text-muted-foreground">
        {trace.caption}
      </p>
    </figure>
  );
}
