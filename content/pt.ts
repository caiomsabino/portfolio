import type { SiteContent } from "./types";
import { SITE_LINKS } from "./links";

export const pt: SiteContent = {
  nav: {
    menuLabel: "Navegação principal",
    about: "Sobre",
    experience: "Experiência",
    projects: "Projetos",
    skills: "Habilidades",
    contact: "Contato",
  },
  hero: {
    name: "Caio Sabino",
    role: "Desenvolvedor Backend e Automação",
    pitch:
      "Acreano em Brasília, estudante de Engenharia de Software na UnB, torcedor do Flamengo. Backend em Java, Spring Boot, NestJS e Ruby. Mantenho em produção uma plataforma que uma escola de karatê usa todos os dias, e gosto mesmo é de transformar trabalho manual em sistema que roda sozinho.",
    ctaProjects: "Ver projetos",
    ctaResume: "Baixar currículo",
    trace: {
      request: "GET /api/alunos",
      status: "200 OK",
      caption: "O caminho que eu construo, da requisição ao banco.",
      steps: ["autenticação", "regras de negócio", "consulta PostgreSQL", "resposta JSON"],
    },
  },
  about: {
    label: "Sobre",
    heading: "Backend, dados e pessoas",
    paragraphs: [
      "Trabalho tanto no código quanto perto de quem usa o sistema. Na V360 conduzo projetos de ponta a ponta, do levantamento de requisitos com o cliente até a entrega, e passo boa parte do tempo traduzindo o que a área de negócio precisa em algo que o time consiga construir.",
      "O backend é onde eu gosto de estar: a regra que precisa estar certa, a query que precisa ser rápida, o número que tem que bater no fim do mês. Modelo dados em PostgreSQL, cubro as regras críticas com testes automatizados e uso Docker para padronizar o ambiente do time.",
    ],
  },
  experience: {
    label: "Experiência",
    heading: "Onde eu trabalhei",
    entries: [
      {
        organization: "V360",
        role: "Gestão de Projetos e Desenvolvimento de Regras de Negócio",
        dates: "02/2026 — atual",
        location: "Brasília, DF",
        bullets: [
          "Conduzo projetos de ponta a ponta, do levantamento de requisitos com o cliente até a entrega, alinhando a expectativa do negócio com o que dá para construir no prazo.",
          "Desenvolvo regras de negócio em Ruby que definem funcionalidades do portal do cliente, traduzindo requisitos das áreas de negócio em lógica de aplicação.",
          "Escrevo e otimizo queries SQL em PostgreSQL para análise exploratória, identificando padrões que orientam decisões operacionais do time.",
          "Investigo incidentes analisando logs de APIs REST e payloads JSON, isolando causas-raiz de falhas em produção.",
          "Implementei automações com Google Apps Script e Claude Cowork, hoje incorporadas à rotina da equipe.",
        ],
      },
      {
        organization: "Engnet Consultoria (Empresa Júnior)",
        role: "Desenvolvedor Fullstack e Modelador de Dados",
        dates: "10/2025 — 06/2026",
        location: "Brasília, DF",
        bullets: [
          "Implementei autenticação JWT com NestJS e Next.js, com middleware de proteção de rotas, persistência de sessão e injeção automática de tokens via Axios Interceptors.",
          "Modelei o banco relacional em PostgreSQL com TypeORM, com relacionamentos complexos alimentando dashboards de KPIs financeiros em tempo real.",
          "Orquestrei o ambiente de desenvolvimento com Docker e Docker Compose, padronizando a instanciação do banco entre a equipe.",
        ],
      },
      {
        organization: "ITRAC (UnB)",
        role: "Pesquisador",
        dates: "05/2025 — 01/2026",
        location: "Brasília, DF",
        bullets: [
          "Apoiei a centralização de serviços governamentais no âmbito do ColaboraGov, aplicando metodologia de Design de Serviços para diagnóstico e estruturação de serviços compartilhados entre órgãos públicos.",
          "Conduzi mapeamentos de processos (AS-IS/TO-BE) para identificar gargalos e oportunidades de melhoria na prestação de serviços ao cidadão.",
          "Facilitei workshops com órgãos públicos, mobilizando stakeholders institucionais para alinhamento e co-construção de soluções.",
          "Produzi pesquisa científica sobre acessibilidade em sites governamentais e escrevi um artigo técnico-acadêmico sobre o tema.",
          "Apliquei metodologias ágeis e técnicas de análise de requisitos para estruturar visualmente problemas complexos em ambiente de laboratório de inovação.",
        ],
      },
      {
        organization: "Universidade de Brasília (UnB)",
        role: "Bacharelado em Engenharia de Software",
        dates: "03/2023 — 12/2027",
        location: "Brasília, DF",
        bullets: ["Conclusão prevista para dezembro de 2027."],
      },
    ],
  },
  projects: {
    label: "Projetos",
    heading: "O que eu construí",
    entries: [
      {
        name: "Plataforma de Gestão para Escola de Karatê",
        tagline: "Site público e sistema de gestão, em produção",
        dates: "06/2026 — atual",
        description:
          "Plataforma de uma escola com 12 turmas ativas, que desenvolvi e mantenho em produção. O painel é usado diariamente pelo cliente para cadastro de alunos e turmas, controle de mensalidades e registro de presença e graduações. Modelei o schema relacional em PostgreSQL no Supabase, isolei o painel administrativo das rotas públicas com Supabase Auth e estruturei o SEO técnico do site.",
        href: SITE_LINKS.karate,
        linkLabel: "gamakarate.com.br",
        tech: ["Next.js", "PostgreSQL", "Supabase", "Vercel"],
      },
      {
        name: "Sistema de Gestão para Barbearia",
        tagline: "API REST em Java e Spring Boot",
        dates: "03/2025 — 07/2025",
        description:
          "API RESTful para agendamentos, usuários e registros financeiros. Construí a segurança com Spring Security, com autenticação stateless via JWT e autorização por perfis, e gerenciei a persistência em PostgreSQL com Spring Data JPA, usando o padrão DTO para eliminar exceções de lazy loading. Cobri as regras de negócio com JUnit e Mockito e mantive o pipeline de CI/CD com deploy no Render.",
        href: null,
        linkLabel: null,
        tech: ["Java", "Spring Boot", "PostgreSQL", "JUnit"],
      },
    ],
  },
  skills: {
    label: "Habilidades",
    heading: "Com o que eu trabalho",
    groups: [
      {
        label: "Linguagens",
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
        label: "Bancos de Dados",
        items: ["PostgreSQL", "Supabase", "MongoDB", "TypeORM", "JPA/Hibernate"],
      },
      {
        label: "Testes, DevOps e IA",
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
        label: "Metodologias",
        items: ["Scrum", "Kanban", "XP", "Engenharia de Requisitos"],
      },
    ],
    languagesLabel: "Idiomas",
    languages: [
      { name: "Português", level: "nativo", proficiency: 4, regions: ["BR", "PT"] },
      { name: "Inglês", level: "fluente", proficiency: 3, regions: ["US", "GB"] },
      { name: "Espanhol", level: "intermediário", proficiency: 2, regions: ["ES"] },
      { name: "Francês", level: "básico", proficiency: 1, regions: ["FR"] },
    ],
  },
  contact: {
    label: "Contato",
    heading: "Vamos conversar",
    blurb:
      "Aberto a conversas sobre backend, dados e automação, e a bons problemas para resolver.",
    emailLabel: "E-mail",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
    resumeLabel: "Currículo (PDF)",
    location: "Brasília, DF — Brasil",
  },
  footer: {
    note: "Feito com Next.js, Tailwind CSS e shadcn/ui.",
  },
};
