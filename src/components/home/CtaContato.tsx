import Link from "next/link";

export function CtaContato() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <div className="rounded-3xl border border-border bg-primary px-8 py-14 text-center text-primary-foreground sm:px-16">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Vamos conversar sobre o seu e-commerce?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90">
          Conte o que está travando sua operação — performance, integrações, checkout — e
          vamos ver como a Monte pode ajudar.
        </p>
        <Link
          href="/contato"
          className="mt-8 inline-flex rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          Entrar em contato
        </Link>
      </div>
    </section>
  );
}
