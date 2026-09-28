import type { Metadata } from "next";

import { ProjectCard } from "@/components/shared/ProjectCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getProjectsByKind, getSiteSettings } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Sobre mim",
  description:
    "Bio, stack técnica e projetos pessoais de Felipe Nassis, desenvolvedor por trás da Monte.",
};

const stackGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend & dados",
    items: ["Node.js", "PostgreSQL", "Docker"],
  },
  {
    title: "IA & automação",
    items: ["LLMs (OpenAI, Claude)", "RAG", "ChromaDB", "Integrações via WhatsApp"],
  },
  {
    title: "Infra & deploy",
    items: ["Vercel", "AWS", "CI/CD"],
  },
];

export default async function SobreMimPage() {
  const [settings, personalProjects] = await Promise.all([
    getSiteSettings(),
    getProjectsByKind("projeto-pessoal"),
  ]);

  const githubLink = settings?.socialLinks?.find((link) => link.platform === "github");
  const linkedinLink = settings?.socialLinks?.find((link) => link.platform === "linkedin");

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="max-w-2xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
          Sobre mim
        </p>
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Desenvolvedor por trás da Monte
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Sou desenvolvedor desde 2018 e hoje à frente da Monte, consultoria de tecnologia
          focada em e-commerce. No dia a dia, transito entre arquitetura de sistemas,
          integrações e aplicações práticas de IA generativa para atendimento e operação de
          lojas online. Gosto de projetos onde código vira resultado de negócio
          mensurável — menos atrito na jornada de compra, mais performance, menos gente
          respondendo pergunta repetida.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          {githubLink && (
            <a
              href={githubLink.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-foreground/40"
            >
              GitHub ↗
            </a>
          )}
          {linkedinLink && (
            <a
              href={linkedinLink.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              LinkedIn ↗
            </a>
          )}
        </div>
      </div>

      <section className="mt-16">
        <SectionHeading eyebrow="Stack" title="Tecnologias que domino" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stackGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-base font-bold">{group.title}</h3>
              <ul className="mt-3 flex flex-col gap-1.5 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading
          eyebrow="Portfólio"
          title="Projetos pessoais e open source"
          description="Projetos fora do trabalho para clientes, geralmente explorando IA aplicada a e-commerce."
        />

        {personalProjects.length > 0 ? (
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {personalProjects.map((project) => (
              <ProjectCard key={project._id} project={project} variant="personal" />
            ))}
          </div>
        ) : (
          <p className="mt-8 text-muted-foreground">
            Os projetos pessoais serão publicados aqui em breve.
          </p>
        )}
      </section>

      <section className="mt-16 rounded-3xl border border-border bg-muted/40 p-8 sm:p-10">
        <h2 className="font-display text-2xl font-bold tracking-tight">
          Quer trocar uma ideia sobre um projeto?
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Fora do escopo da Monte, também topo conversar diretamente sobre projetos
          pontuais, colaborações em open source ou oportunidades como desenvolvedor.
        </p>
        {settings?.email && (
          <a
            href={`mailto:${settings.email}?subject=${encodeURIComponent("Contato via /sobre-mim")}`}
            className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Falar comigo diretamente
          </a>
        )}
      </section>
    </div>
  );
}
