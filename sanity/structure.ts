import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Conteúdo")
    .items([
      S.listItem()
        .title("Configurações do site")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== "siteSettings"
      ),
    ]);
