import type { SiteContent } from "./types";
import { SITE_LINKS } from "./links";

export const en: SiteContent = {
  nav: {
    menuLabel: "Main navigation",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
  },
  hero: {
    name: "Caio Sabino",
    role: "Backend & Automation Developer",
    pitch:
      "Software Engineering student at UnB looking for a development internship. I work on the backend in Java, Spring Boot, NestJS and Ruby — and I maintain a platform in production that a karate school uses every day.",
    ctaProjects: "View projects",
    ctaResume: "Download CV",
  },
  about: {
    label: "About",
    heading: "Backend, data and automation",
    paragraphs: [
      "I study Software Engineering at the University of Brasília, graduating in December 2027, and I am looking for a software development internship.",
      "My work centers on the backend: REST APIs in Java and Spring Boot, services in NestJS, business rules in Ruby, and data modelling in PostgreSQL. I cover the critical rules with automated tests and use Docker to keep the environment consistent across the team.",
      "Beyond the code, I like automating whatever is repetitive — these days with AI tooling and Google Apps Script, taking manual work out of my team's routine.",
    ],
  },
  experience: {
    label: "Experience",
    heading: "Where I have worked",
    entries: [
      {
        organization: "V360",
        role: "Project Management & Business Rules Development",
        dates: "02/2026 — present",
        location: "Brasília, DF",
        bullets: [
          "I develop business rules in Ruby that define client-portal functionality, translating requirements from the business side into application logic.",
          "I write and optimize SQL queries in PostgreSQL for exploratory analysis, surfacing patterns that guide the team's operational decisions.",
          "I investigate incidents by analysing REST API logs and JSON payloads, isolating root causes of production failures.",
          "I built automations with Google Apps Script and Claude Cowork that are now part of the team's routine.",
        ],
      },
      {
        organization: "Engnet Consultoria (Junior Enterprise)",
        role: "Fullstack Developer & Data Modeler",
        dates: "10/2025 — 06/2026",
        location: "Brasília, DF",
        bullets: [
          "I implemented JWT authentication with NestJS and Next.js, including route-protection middleware, session persistence and automatic token injection via Axios interceptors.",
          "I modeled the relational database in PostgreSQL with TypeORM, with complex relationships feeding real-time financial KPI dashboards.",
          "I orchestrated the development environment with Docker and Docker Compose, standardizing database setup across the team.",
        ],
      },
      {
        organization: "University of Brasília (UnB)",
        role: "BSc in Software Engineering",
        dates: "03/2023 — 12/2027",
        location: "Brasília, DF",
        bullets: ["Expected graduation: December 2027."],
      },
    ],
  },
  projects: {
    label: "Projects",
    heading: "What I have built",
    entries: [
      {
        name: "Karate School Management Platform",
        tagline: "Public site and management system, in production",
        dates: "06/2026 — present",
        description:
          "A platform for a school with 12 active classes, which I built and maintain in production. The client uses the admin panel daily to manage students and classes, track monthly fees, and record attendance and belt gradings. I modeled the relational schema in PostgreSQL on Supabase, isolated the admin panel from public routes with Supabase Auth, and structured the site's technical SEO.",
        href: SITE_LINKS.karate,
        linkLabel: "gamakarate.com.br",
        tech: ["Next.js", "PostgreSQL", "Supabase", "Vercel"],
      },
      {
        name: "Barbershop Management System",
        tagline: "REST API in Java and Spring Boot",
        dates: "03/2025 — 07/2025",
        description:
          "A RESTful API for scheduling, users and financial records. I built security with Spring Security using stateless JWT authentication and role-based authorization, and managed persistence in PostgreSQL with Spring Data JPA, applying the DTO pattern to eliminate lazy-loading exceptions. I covered the business rules with JUnit and Mockito and maintained a CI/CD pipeline deploying to Render.",
        href: null,
        linkLabel: null,
        tech: ["Java", "Spring Boot", "PostgreSQL", "JUnit"],
      },
    ],
  },
  skills: {
    label: "Skills",
    heading: "What I work with",
    groups: [
      {
        label: "Languages",
        items: ["Java", "Python", "Ruby", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
      },
      {
        label: "Frameworks",
        items: [
          "Spring Boot",
          "Spring Security",
          "Spring Data JPA",
          "NestJS",
          "Next.js",
          "React",
          "Express.js",
          "Django",
        ],
      },
      {
        label: "Databases",
        items: ["PostgreSQL", "Supabase", "MongoDB", "TypeORM", "JPA/Hibernate"],
      },
      {
        label: "Testing, DevOps & AI",
        items: [
          "JUnit",
          "Mockito",
          "Pytest",
          "TDD",
          "Docker",
          "Docker Compose",
          "Git",
          "GitHub",
          "CI/CD",
          "Vercel",
          "Render",
          "Claude Cowork",
          "Google Apps Script",
        ],
      },
    ],
    languagesLabel: "Spoken languages",
    languages: "Portuguese (native) · English (fluent) · Spanish (intermediate) · French (basic)",
  },
  contact: {
    label: "Contact",
    heading: "Let's talk",
    blurb:
      "I am looking for a software development internship. If my experience fits what your team needs, get in touch.",
    emailLabel: "Email",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
    resumeLabel: "CV (PDF)",
    location: "Brasília, DF — Brazil",
  },
  footer: {
    note: "Built with Next.js, Tailwind CSS and shadcn/ui.",
  },
};
