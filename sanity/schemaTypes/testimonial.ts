import { CommentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Depoimento",
  type: "document",
  icon: CommentIcon,
  fields: [
    defineField({
      name: "clientName",
      title: "Nome do cliente",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Cargo",
      type: "string",
    }),
    defineField({
      name: "company",
      title: "Empresa",
      type: "string",
    }),
    defineField({
      name: "quote",
      title: "Depoimento",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "clientName", subtitle: "company" },
  },
});
