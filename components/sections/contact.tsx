"use client";

import { Download, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { Reveal } from "@/components/reveal";
import { SITE_LINKS } from "@/content/links";
import { useContent } from "@/lib/language-context";

export function Contact() {
  const { contact } = useContent();

  const links = [
    {
      href: `mailto:${SITE_LINKS.email}`,
      label: contact.emailLabel,
      value: SITE_LINKS.email,
      icon: Mail,
      external: false,
      download: false,
    },
    {
      href: SITE_LINKS.github,
      label: contact.githubLabel,
      value: "github.com/caiomsabino",
      icon: GithubIcon,
      external: true,
      download: false,
    },
    {
      href: SITE_LINKS.linkedin,
      label: contact.linkedinLabel,
      value: "in/caio-msabino",
      icon: LinkedinIcon,
      external: true,
      download: false,
    },
    {
      href: SITE_LINKS.resume,
      label: contact.resumeLabel,
      value: "Caio_Sabino_curriculo.pdf",
      icon: Download,
      external: false,
      download: true,
    },
  ];

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-16 sm:py-24">
      <Reveal className="flex flex-col gap-4">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {contact.label}
        </p>
        <h2 id="contact-heading" className="text-2xl font-semibold tracking-tight">
          {contact.heading}
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{contact.blurb}</p>

        <div className="grid gap-3 pt-4 sm:grid-cols-2">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                download={link.download || undefined}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:border-primary/50 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Icon className="h-5 w-5 shrink-0 text-primary" />
                <span className="flex min-w-0 flex-col">
                  <span className="text-sm text-foreground">{link.label}</span>
                  <span className="truncate font-mono text-xs text-muted-foreground">
                    {link.value}
                  </span>
                </span>
              </a>
            );
          })}
        </div>

        <p className="flex items-center gap-2 pt-2 font-mono text-xs text-muted-foreground">
          <MapPin className="h-4 w-4" />
          {contact.location}
        </p>
      </Reveal>
    </section>
  );
}
