import type { Image } from "sanity";

export type SanityImage = Image;

export type SocialLink = {
  platform: "github" | "linkedin" | "instagram" | "twitter";
  url: string;
};

export type SiteSettings = {
  title: string;
  tagline: string;
  description?: string;
  email: string;
  whatsapp?: string;
  socialLinks?: SocialLink[];
  footerText?: string;
  ogImage?: SanityImage;
};

export type Service = {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  icon?: SanityImage;
  order?: number;
};

export type ProjectKind = "case-cliente" | "projeto-pessoal";

export type Project = {
  _id: string;
  title: string;
  slug: string;
  kind: ProjectKind;
  excerpt: string;
  description?: unknown;
  technologies?: string[];
  githubUrl?: string;
  demoUrl?: string;
  coverImage: SanityImage;
  featured: boolean;
  order?: number;
};

export type Testimonial = {
  _id: string;
  clientName: string;
  role?: string;
  company?: string;
  quote: string;
};
