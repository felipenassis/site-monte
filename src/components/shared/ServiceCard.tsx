import Image from "next/image";

import { urlFor } from "@/lib/sanity/image";
import type { Service } from "@/types/sanity";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
      {service.icon && (
        <Image
          src={urlFor(service.icon).width(96).height(96).url()}
          alt=""
          width={48}
          height={48}
          className="mb-4 rounded-lg"
        />
      )}
      <h3 className="font-display text-lg font-bold">{service.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{service.shortDescription}</p>
    </div>
  );
}
