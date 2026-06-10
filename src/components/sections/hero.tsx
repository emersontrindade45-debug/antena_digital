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
      className="floodlight grain relative isolate overflow-hidden px-5 pt-20 pb-16 sm:pt-28 sm:pb-24"
    >
      {/* Linha do gramado no horizonte */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-pitch-deep/30 to-transparent"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="rise-in rise-in-1 mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-gold uppercase">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          TV aberta ao vivo, do jeito certo
        </p>

        <h1 className="headline rise-in rise-in-2 text-balance text-5xl sm:text-7xl lg:text-8xl">
          Na hora do gol,
          <br />
          <span className="text-gold">sua imagem não pode falhar.</span>
        </h1>

        <p className="rise-in rise-in-3 mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
          Resolva o sinal da sua TV com uma antena digital prática, rápida e
          feita para quem não quer perder nenhum lance.
        </p>

        <div className="rise-in rise-in-4 mt-10">
          <CtaButton location="hero" pulse>
            Quero assistir com imagem limpa
          </CtaButton>
        </div>

        <ul className="rise-in rise-in-4 mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          {trustBadges.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-pitch" aria-hidden />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
