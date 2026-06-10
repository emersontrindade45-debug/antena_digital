import {
  BadgeDollarSign,
  MonitorPlay,
  SignalHigh,
  Wallet,
  Wrench,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: SignalHigh,
    title: "Recepção melhor",
    description: "Mais qualidade na recepção dos canais digitais disponíveis na sua região.",
  },
  {
    icon: Wrench,
    title: "Instalação simples",
    description: "Você mesmo instala em poucos minutos, sem precisar de técnico.",
  },
  {
    icon: Wallet,
    title: "Sem mensalidade",
    description: "Pagou uma vez, assistiu para sempre. Zero assinatura, zero boleto.",
  },
  {
    icon: BadgeDollarSign,
    title: "Custo-benefício",
    description: "Uma fração do preço de um ano de TV por assinatura.",
  },
  {
    icon: MonitorPlay,
    title: "Feita para o ao vivo",
    description: "Ideal para futebol, novelas, jornais e tudo que não pode travar.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="bg-night-soft/40 px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="headline text-balance text-center text-4xl sm:text-6xl">
          Tudo que sua TV precisa.
          <br />
          <span className="text-gold">Nada do que você não quer pagar.</span>
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="border-white/8 bg-card/80 transition-colors hover:border-gold/30"
            >
              <CardContent className="flex flex-col gap-3 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/12 text-gold">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="headline text-xl">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
