import { CtaButton } from "@/components/cta-button";

export function FinalCta() {
  return (
    <section
      id="cta-final"
      className="grain relative overflow-hidden px-5 py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_100%,oklch(0.45_0.12_152/0.35)_0%,transparent_70%)]"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="headline text-balance text-4xl sm:text-6xl">
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
      </div>
    </section>
  );
}
