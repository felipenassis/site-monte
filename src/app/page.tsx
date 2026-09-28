import type { Metadata } from "next";

import { CtaContato } from "@/components/home/CtaContato";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";

export const metadata: Metadata = {
  title: "Monte Tecnologia — Consultoria de tecnologia para e-commerce",
  description:
    "Ajudamos operações de e-commerce a integrar sistemas, ganhar performance e escalar com confiança.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <FeaturedProjects />
      <CtaContato />
    </>
  );
}
