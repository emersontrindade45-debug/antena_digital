import type { Metadata } from "next";
import { Anton, Archivo } from "next/font/google";
import { Analytics } from "@/components/analytics";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Antena Digital — Imagem nítida na TV aberta, sem mensalidade",
  description:
    "Pare de perder o melhor momento da transmissão por causa de um sinal ruim. Antena digital prática, sem mensalidade, com instalação simples. Ideal para futebol, novelas e programas ao vivo.",
  openGraph: {
    title: "Na hora do gol, sua imagem não pode falhar.",
    description:
      "Resolva o sinal da sua TV com uma antena digital prática, rápida e sem mensalidade.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${anton.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
