import { TvMockup } from "@/components/tv-mockup";

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

        <div className="mt-12">
          <TvMockup variant="good" className="mx-auto max-w-2xl" />
        </div>

        <ol className="mx-auto mt-12 flex max-w-2xl items-start justify-between gap-4">
          {steps.map(({ number, label }, index) => (
            <li
              key={number}
              className="flex flex-1 flex-col items-center gap-3 text-center"
            >
              <span className="headline flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold/40 bg-gold/10 text-2xl text-gold sm:h-16 sm:w-16 sm:text-3xl">
                {number}
              </span>
              <span className="headline text-lg sm:text-2xl">{label}</span>
              {index < steps.length - 1 && <span className="sr-only">depois</span>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
