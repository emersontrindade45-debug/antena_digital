import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Agora assistimos nossos programas com muito mais qualidade.",
    name: "Maria L.",
    detail: "Comprou para a casa da família",
  },
  {
    quote: "Foi simples instalar e funcionou perfeitamente aqui em casa.",
    name: "Carlos S.",
    detail: "Não perde um jogo do seu time",
  },
  {
    quote: "Comprei para o meu pai e ele mesmo instalou. Ficou ótimo.",
    name: "Juliana R.",
    detail: "Presenteou os pais",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-gold" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-night-soft/40 px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="headline text-balance text-center text-4xl sm:text-6xl">
          Quem instalou,
          <span className="text-gold"> recomenda.</span>
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map(({ quote, name, detail }) => (
            <Card key={name} className="border-white/8 bg-card/80">
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <Stars />
                <blockquote className="flex-1 text-pretty text-foreground/90">
                  “{quote}”
                </blockquote>
                <footer className="text-sm">
                  <p className="font-semibold">{name}</p>
                  <p className="text-muted-foreground">{detail}</p>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
