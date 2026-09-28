import Link from "next/link";

import { getSiteSettings } from "@/lib/sanity/queries";

export async function Hero() {
  const settings = await getSiteSettings();

  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1.3fr_1fr] md:items-center md:py-28">
        <div>
          <p className="mb-4 inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Consultoria de tecnologia para e-commerce
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            {settings?.tagline ?? "Tecnologia sob medida para operações que vendem online."}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            {settings?.description ??
              "Ajudamos lojas e marketplaces a integrar sistemas, ganhar performance e escalar com confiança — do checkout ao pós-venda."}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contato"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Fale sobre seu projeto
            </Link>
            <Link
              href="/servicos"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-foreground/40"
            >
              Ver serviços
            </Link>
          </div>
        </div>

        <div className="hidden md:block" aria-hidden>
          <div
            className="aspect-square rounded-3xl border border-border"
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--color-border) 1.5px, transparent 1.5px)",
              backgroundSize: "22px 22px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
