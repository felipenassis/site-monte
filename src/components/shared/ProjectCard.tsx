import Image from "next/image";
import Link from "next/link";

import { urlFor } from "@/lib/sanity/image";
import type { Project } from "@/types/sanity";

type ProjectCardProps = {
  project: Project;
  /** "case" linka para a página de detalhe (/projetos/[slug]); "personal" linka direto para GitHub/demo. */
  variant?: "case" | "personal";
};

export function ProjectCard({ project, variant = "case" }: ProjectCardProps) {
  const imageUrl = urlFor(project.coverImage).width(640).height(400).fit("crop").url();

  const media = (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted">
      <Image
        src={imageUrl}
        alt={project.title}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      />
    </div>
  );

  const body = (
    <div className="mt-4">
      <h3 className="font-display text-lg font-bold">{project.title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{project.excerpt}</p>
      {project.technologies && project.technologies.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  if (variant === "case") {
    return (
      <Link href={`/projetos/${project.slug}`} className="group block">
        {media}
        {body}
      </Link>
    );
  }

  return (
    <div className="group block">
      {media}
      {body}
      <div className="mt-3 flex gap-4 text-sm font-medium">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-foreground/80 transition-colors hover:text-accent"
          >
            GitHub ↗
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-foreground/80 transition-colors hover:text-accent"
          >
            Demo ↗
          </a>
        )}
      </div>
    </div>
  );
}
