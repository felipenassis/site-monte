import { WrenchIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Serviço",
  type: "document",
  icon: WrenchIcon,
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
      name: "shortDescription",
      title: "Descrição curta",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(240),
    }),
    defineField({
      name: "icon",
      title: "Ícone / imagem",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "Ordem de exibição",
      type: "number",
      description: "Menor número aparece primeiro.",
      validation: (rule) => rule.integer(),
    }),
  ],
  orderings: [
    {
      title: "Ordem de exibição",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "shortDescription", media: "icon" },
  },
});
