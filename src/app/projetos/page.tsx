import type { Metadata } from "next";

import { ProjectCard } from "@/components/shared/ProjectCard";
import { getProjectsByKind } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Cases de e-commerce desenvolvidos pela Monte: integrações, performance e produtos digitais entregues para clientes reais.",
};

export default async function ProjetosPage() {
  const projects = await getProjectsByKind("case-cliente");

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="max-w-2xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
          Cases
        </p>
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Projetos entregues para e-commerces
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Alguns dos trabalhos que fizemos para lojas e marketplaces que precisavam vender
          mais, com menos atrito técnico.
        </p>
      </div>

      {projects.length > 0 ? (
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} variant="case" />
          ))}
        </div>
      ) : (
        <p className="mt-12 text-muted-foreground">
          Os primeiros cases serão publicados aqui em breve.
        </p>
      )}
    </div>
  );
}
