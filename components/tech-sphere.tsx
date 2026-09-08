"use client";

import { useEffect, useRef, useState } from "react";
import { TECH_ICONS } from "@/content/tech-icons";

const RADIUS = 132;
const SPEED = 0.0022;

// Fibonacci distribution: spreads points evenly over a sphere without the
// clustering at the poles that naive lat/long spacing produces.
function spherePoints(count: number) {
  const golden = Math.PI * (3 - Math.sqrt(5));
  return Array.from({ length: count }, (_, i) => {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    return { x: Math.cos(theta) * r, y, z: Math.sin(theta) * r };
  });
}

export function TechSphere({ names }: { names: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const angle = useRef(0);
  const [points] = useState(() => spherePoints(names.length));
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let visible = true;
    let paused = false;

    const render = () => {
      const cos = Math.cos(angle.current);
      const sin = Math.sin(angle.current);
      points.forEach((p, i) => {
        const el = root.children[i] as HTMLElement | undefined;
        if (!el) return;
        const x = p.x * cos - p.z * sin;
        const z = p.x * sin + p.z * cos;
        const depth = (z + 1) / 2;
        el.style.transform = `translate3d(${x * RADIUS}px, ${p.y * RADIUS}px, 0) scale(${0.55 + depth * 0.55})`;
        el.style.opacity = String(0.3 + depth * 0.7);
        el.style.zIndex = String(Math.round(depth * 100));
      });
    };

    const tick = () => {
      if (!paused) angle.current += SPEED;
      render();
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    // A sphere spinning in a section nobody is looking at is wasted battery.
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !reduced.matches) start();
        else stop();
      },
      { threshold: 0.1 },
    );
    observer.observe(root);

    const onEnter = () => {
      paused = true;
    };
    const onLeave = () => {
      paused = false;
    };
    root.addEventListener("pointerenter", onEnter);
    root.addEventListener("pointerleave", onLeave);

    render();
    // Positions are only known after this first render pass. Revealing the
    // sphere here, rather than positioning during SSR, keeps server and client
    // markup byte-identical: emitting computed floats server-side makes React
    // flag a hydration mismatch, because the browser rounds them on parse.
    setReady(true);
    if (!reduced.matches && visible) start();

    const onPrefChange = () => {
      if (reduced.matches) stop();
      else if (visible) start();
    };
    reduced.addEventListener("change", onPrefChange);

    return () => {
      stop();
      observer.disconnect();
      reduced.removeEventListener("change", onPrefChange);
      root.removeEventListener("pointerenter", onEnter);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, [points]);

  return (
    <div
      className={`relative mx-auto h-[340px] w-full max-w-[460px] transition-opacity duration-500 sm:h-[400px] motion-reduce:transition-none ${ready ? "opacity-100" : "opacity-0"}`}
      // The names are already listed as text in the cards below; announcing
      // them twice would only make the section longer to navigate.
      aria-hidden="true"
    >
      <div ref={ref} className="absolute left-1/2 top-1/2 size-0">
        {names.map((name) => {
          const icon = TECH_ICONS[name];
          return (
            <div
              key={name}
              title={name}
              className="absolute -translate-x-1/2 -translate-y-1/2 will-change-transform"
            >
              <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-card shadow-sm">
                {icon ? (
                  <svg viewBox="0 0 24 24" className="size-5" fill={icon.hex} aria-hidden="true">
                    <path d={icon.path} />
                  </svg>
                ) : (
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {name.slice(0, 2)}
                  </span>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
