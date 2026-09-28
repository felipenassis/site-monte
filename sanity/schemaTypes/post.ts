import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

/**
 * Schema de blog deixado pronto para uso futuro.
 * Sem página/rota no site consumindo este tipo ainda.
 */
export default defineType({
  name: "post",
  title: "Post (blog)",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Publicado em",
      type: "datetime",
    }),
    defineField({
      name: "excerpt",
      title: "Resumo",
      type: "text",
      rows: 3,
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: "coverImage",
      title: "Imagem de capa",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "body",
      title: "Conteúdo",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "publishedAt", media: "coverImage" },
  },
});
