import Image from "next/image";
import { CtaButton } from "@/components/cta-button";

export function FinalCta() {
  return (
    <section
      id="cta-final"
      className="relative isolate overflow-hidden px-5 py-24 sm:py-32"
    >
      <Image
        src="/images/celebracao.webp"
        alt="Amigos vibrando juntos assistindo ao jogo, sala se transformando em estádio"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-night/90 via-night/70 to-night/90"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="headline text-balance text-4xl drop-shadow-[0_2px_16px_rgb(0_0_0/0.7)] sm:text-6xl">
          Não espere sua programação começar
          <br />
          <span className="text-gold">
            para descobrir que o sinal falhou.
          </span>
        </h2>
        <div className="mt-10">
          <CtaButton location="final" pulse>
            Quero minha antena agora
          </CtaButton>
        </div>
        <p className="mt-6 text-sm text-foreground/75">
          Compra segura • Garantia de 7 dias • Envio imediato
        </p>
      </div>
    </section>
  );
}
