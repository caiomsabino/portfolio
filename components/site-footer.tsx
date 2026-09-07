"use client";

import { useContent } from "@/lib/language-context";

export function SiteFooter() {
  const { footer } = useContent();

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-2 px-6 py-8">
        <p className="font-mono text-xs text-muted-foreground">© Caio Sabino</p>
        <p className="font-mono text-xs text-muted-foreground">{footer.note}</p>
      </div>
    </footer>
  );
}
