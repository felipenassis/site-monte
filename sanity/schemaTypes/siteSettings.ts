import { CogIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Configurações do site",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "title",
      title: "Nome do site / empresa",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      description: "Frase curta de posicionamento, usada no hero da home.",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descrição (SEO)",
      description: "Usada como meta description padrão do site.",
      type: "text",
      rows: 3,
      validation: (rule) => rule.max(160),
    }),
    defineField({
      name: "email",
      title: "E-mail de contato",
      type: "string",
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp",
      description: "Número completo com DDI, ex: 5511999999999",
      type: "string",
    }),
    defineField({
      name: "socialLinks",
      title: "Redes sociais",
      type: "array",
      of: [
        {
          type: "object",
          name: "socialLink",
          fields: [
            defineField({
              name: "platform",
              title: "Plataforma",
              type: "string",
              options: {
                list: [
                  { title: "GitHub", value: "github" },
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "Instagram", value: "instagram" },
                  { title: "X (Twitter)", value: "twitter" },
                ],
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: "platform", subtitle: "url" },
          },
        },
      ],
    }),
    defineField({
      name: "footerText",
      title: "Texto do rodapé",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "ogImage",
      title: "Imagem padrão (Open Graph)",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare() {
      return { title: "Configurações do site" };
    },
  },
});
