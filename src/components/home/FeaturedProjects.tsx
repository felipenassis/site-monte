import Link from "next/link";

import { ProjectCard } from "@/components/shared/ProjectCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getFeaturedProjects } from "@/lib/sanity/queries";

export async function FeaturedProjects() {
  const projects = await getFeaturedProjects();

  if (projects.length === 0) return null;

  return (
    <section className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Cases" title="Projetos em destaque" />
          <Link href="/projetos" className="text-sm font-semibold text-accent hover:underline">
            Ver todos os projetos →
          </Link>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} variant="case" />
          ))}
        </div>
      </div>
    </section>
  );
}
