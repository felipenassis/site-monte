import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "@/lib/sanity/env";
import { schemaTypes } from "./schemaTypes";
import { structure } from "./structure";

export default defineConfig({
  name: "default",
  title: "Monte — Studio",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schemaTypes,
  },
});
