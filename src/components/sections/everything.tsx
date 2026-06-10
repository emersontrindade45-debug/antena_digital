import Image from "next/image";

const moments = [
  {
    src: "/images/novela.webp",
    alt: "Mulher assistindo novela com imagem nítida na TV",
    label: "Novelas",
    caption: "Capítulo final sem congelar",
  },
  {
    src: "/images/jornal.webp",
    alt: "Homem assistindo ao jornal ao vivo na TV",
    label: "Jornais",
    caption: "Notícia ao vivo, na hora certa",
  },
  {
    src: "/images/dia-a-dia.webp",
    alt: "Homem relaxando no sofá com café assistindo TV durante o dia",
    label: "Todo dia",
    caption: "Da manhã à madrugada",
  },
  {
    src: "/images/series.webp",
    alt: "Homem jantando no sofá assistindo a um filme à noite",
    label: "Filmes e séries",
    caption: "Sessão da noite garantida",
  },
];

/** Posicionamento do PRD: não é só futebol — é a TV da família o ano inteiro. */
export function Everything() {
  return (
    <section id="para-tudo" className="px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="headline text-balance text-center text-4xl sm:text-6xl">
          Não é só futebol.
          <br />
          <span className="text-gold">É tudo que sua família assiste.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-muted-foreground">
          Mais qualidade para assistir TV aberta o ano inteiro — sem depender
          de mensalidades.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {moments.map(({ src, alt, label, caption }) => (
            <figure
              key={label}
              className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/8"
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-night/90 via-transparent to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <p className="headline text-2xl text-gold">{label}</p>
                <p className="text-sm text-foreground/85">{caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
