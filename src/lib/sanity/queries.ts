import { client } from "./client";
import type { Project, Service, SiteSettings, Testimonial } from "@/types/sanity";

const REVALIDATE_SECONDS = 60;

async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  try {
    return await client.fetch<T>(query, params, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
  } catch (error) {
    console.error("Falha ao buscar dados no Sanity:", error);
    return null;
  }
}

const siteSettingsQuery = /* groq */ `*[_type == "siteSettings"][0]{
  title,
  tagline,
  description,
  email,
  whatsapp,
  socialLinks,
  footerText,
  ogImage
}`;

export async function getSiteSettings() {
  return sanityFetch<SiteSettings>(siteSettingsQuery);
}

const serviceListQuery = /* groq */ `*[_type == "service"] | order(order asc) {
  _id,
  title,
  "slug": slug.current,
  shortDescription,
  icon,
  order
}`;

export async function getServices() {
  return (await sanityFetch<Service[]>(serviceListQuery)) ?? [];
}

const projectFields = /* groq */ `
  _id,
  title,
  "slug": slug.current,
  kind,
  excerpt,
  description,
  technologies,
  githubUrl,
  demoUrl,
  coverImage,
  featured,
  order
`;

const projectsByKindQuery = /* groq */ `*[_type == "project" && kind == $kind] | order(order asc, _createdAt desc) {
  ${projectFields}
}`;

export async function getProjectsByKind(kind: "case-cliente" | "projeto-pessoal") {
  return (await sanityFetch<Project[]>(projectsByKindQuery, { kind })) ?? [];
}

const featuredProjectsQuery = /* groq */ `*[_type == "project" && featured == true] | order(order asc, _createdAt desc) [0...3] {
  ${projectFields}
}`;

export async function getFeaturedProjects() {
  return (await sanityFetch<Project[]>(featuredProjectsQuery)) ?? [];
}

const projectBySlugQuery = /* groq */ `*[_type == "project" && slug.current == $slug][0] {
  ${projectFields}
}`;

export async function getProjectBySlug(slug: string) {
  return sanityFetch<Project>(projectBySlugQuery, { slug });
}

const projectSlugsQuery = /* groq */ `*[_type == "project" && defined(slug.current)].slug.current`;

export async function getProjectSlugs() {
  return (await sanityFetch<string[]>(projectSlugsQuery)) ?? [];
}

const testimonialsQuery = /* groq */ `*[_type == "testimonial"] | order(_createdAt desc) {
  _id,
  clientName,
  role,
  company,
  quote
}`;

export async function getTestimonials() {
  return (await sanityFetch<Testimonial[]>(testimonialsQuery)) ?? [];
}
