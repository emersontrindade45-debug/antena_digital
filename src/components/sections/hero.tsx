import Image from "next/image";
import { ChevronDown, SignalHigh, Wallet, Zap } from "lucide-react";

const trustBadges = [
  { icon: Wallet, label: "Sem mensalidade" },
  { icon: Zap, label: "Instalação simples" },
  { icon: SignalHigh, label: "Uso imediato" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Foto de fundo: família à direita, texto protegido à esquerda */}
      <Image
        src="/images/hero.webp"
        alt="Família reunida no sofá assistindo a um jogo de futebol com imagem nítida na TV"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center]"
      />
      {/* Degradê lateral: escuro à esquerda (leitura), revelando a cena à direita */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-night via-night/80 to-night/10 sm:via-night/60 sm:to-transparent"
      />
      {/* Vinheta inferior para transição suave à próxima seção */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-night to-transparent"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:py-32">
        <div className="flex max-w-2xl flex-col items-start text-left">
          <p className="rise-in rise-in-1 mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-night/60 px-4 py-1.5 text-sm font-semibold tracking-wide text-gold uppercase backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            TV aberta ao vivo, do jeito certo
          </p>

          <h1
            aria-label="Na hora do gol, sua imagem não pode falhar."
            className="headline hero-glint text-balance text-4xl drop-shadow-[0_2px_24px_rgb(0_0_0/0.6)] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span aria-hidden="true">
              <span className="hero-line">
                {["Na", "hora", "do", "gol,"].map((word, i) => (
                  <span key={word}>
                    <span
                      className="hero-word"
                      style={{ "--d": `${0.15 + i * 0.09}s` } as React.CSSProperties}
                    >
                      {word}
                    </span>{" "}
                  </span>
                ))}
              </span>
              <span className="hero-line text-gold">
                {["sua", "imagem", "não", "pode"].map((word, i) => (
                  <span key={word}>
                    <span
                      className="hero-word"
                      style={{ "--d": `${0.58 + i * 0.09}s` } as React.CSSProperties}
                    >
                      {word}
                    </span>{" "}
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

          <p className="rise-in rise-in-3 mt-6 max-w-xl text-pretty text-lg text-foreground/85 drop-shadow-[0_1px_12px_rgb(0_0_0/0.8)] sm:text-xl">
            Resolva o sinal da sua TV com uma antena digital prática, rápida e
            feita para quem não quer perder nenhum lance.
          </p>

          <ul className="rise-in rise-in-4 mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-foreground/80">
            {trustBadges.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-gold" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Convite à rolagem: a jornada continua página abaixo */}
      <a
        href="#tensao"
        aria-label="Rolar para ver mais"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce rounded-full border border-white/15 bg-night/50 p-2 text-foreground/70 backdrop-blur-sm transition-colors hover:text-gold"
      >
        <ChevronDown className="h-5 w-5" aria-hidden />
      </a>
    </section>
  );
}
