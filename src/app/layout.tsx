import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://montetecnologia.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Monte Tecnologia — Consultoria de tecnologia para e-commerce",
    template: "%s | Monte Tecnologia",
  },
  description:
    "Consultoria de tecnologia focada em e-commerce: performance, integrações e produtos digitais para operações que vendem online.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Monte Tecnologia",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var isDark = stored ? stored === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", isDark);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
