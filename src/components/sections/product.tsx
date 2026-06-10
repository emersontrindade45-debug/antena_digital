import {
  Cable,
  CloudSun,
  PlugZap,
  Ruler,
  SignalHigh,
  Tv,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

/*
 * Seção do produto: cada característica técnica vira uma experiência.
 * Vendemos o que a pessoa sente assistindo — a ficha técnica é a prova.
 */

const features = [
  {
    icon: CloudSun,
    title: "Dentro ou fora, ela se vira",
    description:
      "Janela, varanda ou telhado: instale onde o sinal é mais forte. Sol e chuva não são problema — ela foi feita para ficar lá fora, anos a fio.",
    spec: "Uso interno e externo • resistente ao clima",
  },
  {
    icon: Cable,
    title: "5 metros de liberdade",
    description:
      "O cabo longo deixa você caçar o ponto perfeito de sinal pela casa — sem obra, sem furo extra, sem mover a TV do lugar.",
    spec: "Cabo de 5 metros de alta qualidade incluso",
  },
  {
    icon: PlugZap,
    title: "Zero impacto na conta de luz",
    description:
      "Ela trabalha em silêncio, sem tomada e sem gastar um centavo de energia. Ligou uma vez, funciona para sempre.",
    spec: "Antena passiva • não usa energia elétrica",
  },
  {
    icon: SignalHigh,
    title: "Capta onde outras falham",
    description:
      "O ganho de 3.5 DBI foi calibrado para regiões de sinal médio — exatamente onde a TV mais trava e o chuvisco mais aparece.",
    spec: "Ganho de 3.5 DBI em alta definição",
  },
  {
    icon: Tv,
    title: "Conectou, sintonizou, pronto",
    description:
      "Plug-and-play de verdade: conecte na TV ou no conversor, faça a busca de canais e sente no sofá. Sem técnico, sem configuração.",
    spec: "Compatível com TVs e conversores digitais",
  },
  {
    icon: Ruler,
    title: "Discreta na sua sala",
    description:
      "Com 18 cm de altura, ela some na decoração. Quem visita só percebe uma coisa: como a imagem da sua TV é boa.",
    spec: "Altura 18 cm • base de 7 cm de diâmetro",
  },
];

export function Product() {
  return (
    <section id="produto" className="px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="headline text-center text-sm tracking-widest text-gold/90">
          Antena Digital HDTV 3.5 DBI
        </p>
        <h2 className="headline mt-4 text-balance text-center text-4xl sm:text-6xl">
          Pequena na estante.
          <br />
          <span className="text-gold">Gigante na hora do jogo.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
          Você não compra uma antena. Compra a tranquilidade de ligar a TV e
          ela simplesmente funcionar — todo dia, em qualquer tempo.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description, spec }) => (
            <Card
              key={title}
              className="border-white/8 bg-card/80 transition-colors hover:border-gold/30"
            >
              <CardContent className="flex h-full flex-col gap-3 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/12 text-gold">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="headline text-xl">{title}</h3>
                <p className="flex-1 text-sm text-muted-foreground">
                  {description}
                </p>
                <p className="border-t border-white/8 pt-3 text-xs font-semibold uppercase tracking-wide text-gold/80">
                  {spec}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ficha técnica resumida */}
        <dl className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 text-center sm:grid-cols-4">
          {[
            ["Ganho", "3.5 DBI"],
            ["Cabo", "5 metros"],
            ["Altura", "18 cm"],
            ["Base", "7 cm"],
          ].map(([label, value]) => (
            <div key={label} className="bg-night px-4 py-5">
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                {label}
              </dt>
              <dd className="headline mt-1 text-2xl text-gold">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
