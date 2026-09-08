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
      "From Acre and based in Brasília, Software Engineering student at UnB and Flamengo supporter. Backend in Java, Spring Boot, NestJS and Ruby. I maintain a platform in production that a karate school uses every day, and what I really enjoy is turning manual work into a system that runs on its own.",
    ctaProjects: "View projects",
    ctaResume: "Download CV",
    trace: {
      request: "GET /api/students",
      status: "200 OK",
      caption: "The path I build, from request to database.",
      steps: ["authentication", "business rules", "PostgreSQL query", "JSON response"],
    },
  },
  about: {
    label: "About",
    heading: "Backend, data and people",
    paragraphs: [
      "I work on the code and close to the people who use it. At V360 I run projects end to end, from gathering requirements with the client through to delivery, and I spend a good part of my time translating what the business needs into something the team can actually build.",
      "The backend is where I like to be: the rule that has to be right, the query that has to be fast, the number that has to add up at the end of the month. I model data in PostgreSQL, cover the critical rules with automated tests, and use Docker to keep the environment consistent across the team.",
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
          "I run projects end to end, from gathering requirements with the client through to delivery, aligning what the business expects with what can realistically be built in the time available.",
          "I develop business rules in Ruby that define client-portal functionality, translating requirements from the business side into application logic.",
          "I write and optimize SQL queries in PostgreSQL for exploratory analysis, surfacing patterns that guide the team's operational decisions.",
          "I investigate incidents by analyzing REST API logs and JSON payloads, isolating root causes of production failures.",
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
        organization: "ITRAC (UnB)",
        role: "Researcher",
        dates: "05/2025 — 01/2026",
        location: "Brasília, DF",
        bullets: [
          "I supported the centralization of government services under ColaboraGov, applying Service Design methodology to diagnose and structure services shared across public agencies.",
          "I ran AS-IS/TO-BE process mapping to identify bottlenecks and opportunities to improve service delivery to citizens.",
          "I facilitated workshops with public agencies, bringing institutional stakeholders together to align on and co-create solutions.",
          "I produced scientific research on accessibility in government websites and wrote a technical-academic paper on it.",
          "I applied agile methodologies and requirements-analysis techniques to visually structure complex problems in an innovation lab.",
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
      {
        label: "Methodologies",
        items: ["Scrum", "Kanban", "XP", "Requirements Engineering"],
      },
    ],
    languagesLabel: "Spoken languages",
    languages: [
      { name: "Portuguese", level: "native", proficiency: 4, regions: ["BR", "PT"] },
      { name: "English", level: "fluent", proficiency: 3, regions: ["US", "GB"] },
      { name: "Spanish", level: "intermediate", proficiency: 2, regions: ["ES"] },
      { name: "French", level: "basic", proficiency: 1, regions: ["FR"] },
    ],
  },
  contact: {
    label: "Contact",
    heading: "Let's talk",
    blurb:
      "Open to conversations about backend, data and automation, and to good problems worth solving.",
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
