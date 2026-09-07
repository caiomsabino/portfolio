"use client";

import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useContent } from "@/lib/language-context";

export function Projects() {
  const { projects } = useContent();

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-16 sm:py-20">
      <Reveal className="flex flex-col gap-4">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {projects.label}
        </p>
        <h2 id="projects-heading" className="text-2xl font-semibold tracking-tight">
          {projects.heading}
        </h2>

        <div className="grid gap-6 pt-6 md:grid-cols-2">
          {projects.entries.map((project) => (
            <Card key={project.name} className="flex flex-col overflow-hidden pt-0">
              <div
                aria-hidden="true"
                className="h-32 bg-gradient-to-br from-primary/25 via-primary/10 to-transparent"
              />
              <CardHeader className="gap-1">
                <span className="font-mono text-xs text-muted-foreground">{project.dates}</span>
                <CardTitle role="heading" aria-level={3} className="text-base leading-snug">{project.name}</CardTitle>
                <p className="text-sm text-primary">{project.tagline}</p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.href && project.linkLabel ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {project.linkLabel}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
