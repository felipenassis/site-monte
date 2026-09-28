import type { Metadata } from "next";

import { ServiceCard } from "@/components/shared/ServiceCard";
import { getServices } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça os serviços da Monte para operações de e-commerce: integrações, performance, arquitetura e produtos digitais.",
};

export default async function ServicosPage() {
  const services = await getServices();

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="max-w-2xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
          Serviços
        </p>
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          O que a Monte faz pelo seu e-commerce
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Atuamos de ponta a ponta: da arquitetura técnica às integrações que mantêm sua
          operação vendendo, sem dor de cabeça.
        </p>
      </div>

      {services.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      ) : (
        <p className="mt-12 text-muted-foreground">
          Os serviços ainda serão publicados aqui em breve.
        </p>
      )}
    </div>
  );
}
