import { getSiteSettings } from "@/lib/sanity/queries";

import { Logo } from "./Logo";

const socialLabels: Record<string, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  instagram: "Instagram",
  twitter: "X (Twitter)",
};

export async function Footer() {
  const settings = await getSiteSettings();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo />
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            {settings?.footerText ??
              "Consultoria de tecnologia para operações de e-commerce."}
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          {settings?.email && (
            <a
              href={`mailto:${settings.email}`}
              className="text-foreground/80 transition-colors hover:text-foreground"
            >
              {settings.email}
            </a>
          )}
          {settings?.socialLinks?.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-foreground/80 transition-colors hover:text-foreground"
            >
              {socialLabels[link.platform] ?? link.platform}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border px-4 py-4 text-center text-xs text-muted-foreground sm:px-6">
        © {year} Monte. Todos os direitos reservados.
      </div>
    </footer>
  );
}
