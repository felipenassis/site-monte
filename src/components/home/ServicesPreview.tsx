import Link from "next/link";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { getServices } from "@/lib/sanity/queries";

export async function ServicesPreview() {
  const services = await getServices();
  const preview = services.slice(0, 4);

  if (preview.length === 0) return null;

  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow="O que fazemos" title="Serviços para escalar seu e-commerce" />
        <Link href="/servicos" className="text-sm font-semibold text-accent hover:underline">
          Ver todos os serviços →
        </Link>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {preview.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </section>
  );
}
