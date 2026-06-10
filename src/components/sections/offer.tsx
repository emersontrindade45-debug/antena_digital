import { Check, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CtaButton } from "@/components/cta-button";

// Valores de exemplo — ajuste com os preços reais via .env ou direto aqui.
const PRICE_ORIGINAL = process.env.NEXT_PUBLIC_PRICE_ORIGINAL ?? "197";
const PRICE = process.env.NEXT_PUBLIC_PRICE ?? "97";

const included = [
  "Antena digital pronta para usar",
  "Cabo e suporte de instalação",
  "Manual passo a passo em português",
  "Garantia contra defeitos",
];

const kits = [
  { name: "1 unidade", note: "Para a sua TV" },
  { name: "Kit 2 unidades", note: "Sala + quarto", highlight: true },
  { name: "Kit 3+ unidades", note: "Família toda ou revenda" },
];

export function Offer() {
  return (
    <section id="oferta" className="floodlight grain relative px-5 py-16 sm:py-24">
      <div className="relative mx-auto max-w-3xl">
        <div className="text-center">
          <Badge className="headline bg-gold text-primary-foreground text-sm tracking-wide">
            Promoção por tempo limitado
          </Badge>
          <h2 className="headline mt-4 text-balance text-4xl sm:text-6xl">
            Garanta a sua antes
            <br />
            <span className="text-gold">do próximo jogo.</span>
          </h2>
        </div>

        <Card className="mt-10 border-gold/25 bg-card/90 shadow-[0_0_80px_-20px] shadow-gold/20">
          <CardContent className="p-6 sm:p-10">
            <div className="flex flex-col items-center gap-1 text-center">
              <p className="text-muted-foreground line-through">
                De R$ {PRICE_ORIGINAL}
              </p>
              <p className="headline text-6xl text-gold sm:text-7xl">
                R$ {PRICE}
              </p>
              <p className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-pitch">
                <Truck className="h-4 w-4" aria-hidden />
                Frete grátis para todo o Brasil
              </p>
            </div>

            <ul className="mx-auto mt-8 grid max-w-md gap-3">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pitch/15 text-pitch">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-2 sm:grid-cols-3">
              {kits.map(({ name, note, highlight }) => (
                <div
                  key={name}
                  className={
                    highlight
                      ? "rounded-lg border border-gold/40 bg-gold/10 p-3 text-center"
                      : "rounded-lg border border-white/10 p-3 text-center"
                  }
                >
                  <p className="font-bold">{name}</p>
                  <p className="text-xs text-muted-foreground">{note}</p>
                  {highlight && (
                    <p className="mt-1 text-xs font-semibold text-gold">
                      Mais vendido
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <CtaButton location="offer" pulse className="w-full sm:w-auto">
                Quero minha antena agora
              </CtaButton>
            </div>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Compra segura • Garantia de 7 dias • Envio imediato
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
