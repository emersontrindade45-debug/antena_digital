import Image from "next/image";
import { SignalHigh, Wallet, Zap } from "lucide-react";
import { CtaButton } from "@/components/cta-button";

const trustBadges = [
  { icon: Wallet, label: "Sem mensalidade" },
  { icon: Zap, label: "Instalação simples" },
  { icon: SignalHigh, label: "Uso imediato" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      {/* Foto de fundo: família imersa no jogo sob refletores */}
      <Image
        src="/images/hero.webp"
        alt="Família reunida no sofá assistindo a um jogo de futebol com imagem nítida na TV"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Camadas de escurecimento para legibilidade do texto */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-night via-night/60 to-night/30"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_100%,oklch(0.17_0.03_255/0.9)_0%,transparent_70%)]"
      />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-5 pb-16 pt-32 text-center sm:pb-24">
        <p className="rise-in rise-in-1 mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-night/60 px-4 py-1.5 text-sm font-semibold tracking-wide text-gold uppercase backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          TV aberta ao vivo, do jeito certo
        </p>

        <h1
          aria-label="Na hora do gol, sua imagem não pode falhar."
          className="headline hero-glint text-balance text-5xl drop-shadow-[0_2px_24px_rgb(0_0_0/0.6)] sm:text-7xl lg:text-8xl"
        >
          <span aria-hidden="true">
            <span className="hero-line">
              {["Na", "hora", "do", "gol,"].map((word, i) => (
                <span
                  key={word}
                  className="hero-word"
                  style={{ "--d": `${0.15 + i * 0.09}s` } as React.CSSProperties}
                >
                  {word}
                  {" "}
                </span>
              ))}
            </span>
            <span className="hero-line text-gold">
              {["sua", "imagem", "não", "pode"].map((word, i) => (
                <span
                  key={word}
                  className="hero-word"
                  style={{ "--d": `${0.58 + i * 0.09}s` } as React.CSSProperties}
                >
                  {word}
                  {" "}
                </span>
              ))}
              <span
                className="hero-word glitch-signal"
                style={{ "--d": "1.02s" } as React.CSSProperties}
              >
                falhar.
              </span>
            </span>
          </span>
        </h1>

        <p className="rise-in rise-in-3 mt-6 max-w-2xl text-pretty text-lg text-foreground/85 drop-shadow-[0_1px_12px_rgb(0_0_0/0.8)] sm:text-xl">
          Resolva o sinal da sua TV com uma antena digital prática, rápida e
          feita para quem não quer perder nenhum lance.
        </p>

        <div className="rise-in rise-in-4 mt-10">
          <CtaButton location="hero" pulse>
            Quero assistir com imagem limpa
          </CtaButton>
        </div>

        <ul className="rise-in rise-in-4 mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-foreground/80">
          {trustBadges.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-gold" aria-hidden />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
