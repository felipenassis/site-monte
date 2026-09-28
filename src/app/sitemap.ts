import type { MetadataRoute } from "next";

import { getProjectSlugs } from "@/lib/sanity/queries";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://montetecnologia.com.br";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getProjectSlugs();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/servicos",
    "/projetos",
    "/sobre-mim",
    "/contato",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${siteUrl}/projetos/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
