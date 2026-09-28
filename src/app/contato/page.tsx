import type { Metadata } from "next";

import { ContactForm } from "@/components/contato/ContactForm";
import { getSiteSettings } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a Monte sobre o seu projeto de e-commerce.",
};

export default async function ContatoPage() {
  const settings = await getSiteSettings();
  const email = settings?.email ?? "contato@montetecnologia.com.br";

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
            Contato
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Vamos falar sobre o seu e-commerce
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Conte um pouco sobre a operação e o desafio atual. Respondemos o quanto antes.
          </p>

          <div className="mt-8 flex flex-col gap-3 text-sm">
            <a href={`mailto:${email}`} className="font-medium text-foreground hover:text-accent">
              {email}
            </a>
            {settings?.whatsapp && (
              <a
                href={`https://wa.me/${settings.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-foreground hover:text-accent"
              >
                WhatsApp
              </a>
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <ContactForm email={email} />
        </div>
      </div>
    </div>
  );
}
