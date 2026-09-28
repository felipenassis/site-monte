import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { urlFor } from "@/lib/sanity/image";
import { getProjectBySlug, getProjectSlugs } from "@/lib/sanity/queries";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: "Projeto não encontrado" };
  }

  return {
    title: project.title,
    description: project.excerpt,
    openGraph: {
      images: [urlFor(project.coverImage).width(1200).height(630).url()],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link href="/projetos" className="text-sm font-medium text-accent hover:underline">
        ← Voltar para projetos
      </Link>

      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">{project.excerpt}</p>

      <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-muted">
        <Image
          src={urlFor(project.coverImage).width(1200).height(675).url()}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      {project.technologies && project.technologies.length > 0 && (
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
      )}

      {Array.isArray(project.description) && project.description.length > 0 && (
        <div className="prose prose-neutral mt-8 max-w-none dark:prose-invert prose-headings:font-display">
          <PortableText value={project.description} />
        </div>
      )}

      <div className="mt-10 flex flex-wrap gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-foreground/40"
          >
            Ver no GitHub ↗
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Ver demo ↗
          </a>
        )}
      </div>
    </article>
  );
}
