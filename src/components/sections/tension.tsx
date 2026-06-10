import Image from "next/image";

/** Seção emocional: a dor de quase perder o lance por causa do sinal. */
export function Tension() {
  return (
    <section id="tensao" className="relative isolate overflow-hidden">
      <Image
        src="/images/tensao.webp"
        alt="Família apreensiva assistindo a um jogo decisivo na TV"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-night/95 via-night/70 to-night/30"
      />

      <div className="relative mx-auto flex min-h-[70svh] max-w-6xl items-center px-5 py-20">
        <div className="max-w-xl">
          <p className="headline text-sm tracking-widest text-gold/90">
            Você conhece essa sensação
          </p>
          <h2 className="headline mt-4 text-balance text-4xl drop-shadow-[0_2px_16px_rgb(0_0_0/0.7)] sm:text-6xl">
            O coração pode apertar
            <br />
            <span className="text-gold">pelo jogo.</span>
            <br />
            Nunca pelo sinal.
          </h2>
          <p className="mt-6 max-w-md text-pretty text-lg text-foreground/85 drop-shadow-[0_1px_12px_rgb(0_0_0/0.8)]">
            Minuto final, jogo empatado — e a imagem congela. Quem já passou
            por isso sabe: não dá para confiar a emoção da família a um sinal
            ruim.
          </p>
        </div>
      </div>
    </section>
  );
}
