import { RocketIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Projeto",
  type: "document",
  icon: RocketIcon,
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
      name: "kind",
      title: "Tipo",
      description:
        "Case de cliente aparece em /projetos. Projeto pessoal aparece em /sobre-mim.",
      type: "string",
      options: {
        list: [
          { title: "Case de cliente (consultoria)", value: "case-cliente" },
          { title: "Projeto pessoal / open source", value: "projeto-pessoal" },
        ],
        layout: "radio",
      },
      initialValue: "case-cliente",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Resumo curto",
      description: "Usado nos cards de listagem.",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: "description",
      title: "Descrição completa",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "technologies",
      title: "Tecnologias",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "githubUrl",
      title: "Link do GitHub",
      type: "url",
    }),
    defineField({
      name: "demoUrl",
      title: "Link da demo",
      type: "url",
    }),
    defineField({
      name: "coverImage",
      title: "Imagem de capa",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Destaque",
      description: "Exibir na home em \"cases em destaque\".",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Ordem de exibição",
      type: "number",
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
    select: { title: "title", subtitle: "kind", media: "coverImage" },
  },
});
