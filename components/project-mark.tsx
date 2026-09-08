// Geometric marks standing in for screenshots that do not exist yet. Each one
// says something about its project: a relationship graph for the platform, a
// layered stack for the REST API. Swapping in real screenshots later means
// replacing the block these sit in, not reworking the card.

export function ProjectMark({ variant }: { variant: number }) {
  const common = {
    viewBox: "0 0 120 120",
    className: "h-24 w-24 text-foreground/85",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 2.5,
  };

  if (variant === 0) {
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="60" cy="60" r="15" fill="currentColor" stroke="none" />
        <circle cx="60" cy="18" r="8" />
        <circle cx="96" cy="81" r="8" />
        <circle cx="24" cy="81" r="8" />
        <path d="M60 45V26M71 69l18 8M49 69l-18 8" />
      </svg>
    );
  }

  return (
    <svg {...common} aria-hidden="true">
      <rect x="26" y="26" width="68" height="68" rx="10" />
      <rect x="41" y="41" width="38" height="38" rx="7" />
      <circle cx="60" cy="60" r="7" fill="currentColor" stroke="none" />
      <path d="M60 8v18M60 94v18M8 60h18M94 60h18" />
    </svg>
  );
}
