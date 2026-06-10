import Image from "next/image";

const steps = [
  { number: "1", label: "Ligou" },
  { number: "2", label: "Sintonizou" },
  { number: "3", label: "Assistiu" },
];

export function Demo() {
  return (
    <section id="demonstracao" className="px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="headline text-balance text-center text-4xl sm:text-6xl">
          <span className="text-gold">Ligou. Sintonizou. Assistiu.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-muted-foreground">
          Sem complicação para acompanhar seus programas favoritos.
        </p>

        <figure className="relative mx-auto mt-12 aspect-video max-w-3xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50">
          <Image
            src="/images/demo.webp"
            alt="Imagem tão nítida que o jogador parece saltar para fora da TV"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-night/40 to-transparent"
          />
        </figure>

        <ol className="mx-auto mt-12 flex max-w-2xl items-start justify-between gap-4">
          {steps.map(({ number, label }) => (
            <li
              key={number}
              className="flex flex-1 flex-col items-center gap-3 text-center"
            >
              <span className="headline flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold/40 bg-gold/10 text-2xl text-gold sm:h-16 sm:w-16 sm:text-3xl">
                {number}
              </span>
              <span className="headline text-lg sm:text-2xl">{label}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
