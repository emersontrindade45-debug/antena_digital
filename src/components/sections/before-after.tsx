import { Frown, PartyPopper } from "lucide-react";
import { TvMockup } from "@/components/tv-mockup";

export function BeforeAfter() {
  return (
    <section id="antes-depois" className="px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="headline text-balance text-center text-4xl sm:text-6xl">
          Você merece ver o jogo,
          <br />
          <span className="text-gold">não o chuvisco.</span>
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-8">
          {/* ANTES */}
          <div className="flex flex-col gap-5">
            <TvMockup variant="bad" />
            <div>
              <p className="headline mb-3 inline-flex items-center gap-2 text-2xl text-destructive">
                <Frown className="h-6 w-6" aria-hidden />
                Antes
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• TV travando no melhor momento</li>
                <li>• Sinal ruim e imagem com chuviscos</li>
                <li>• Frustração toda vez que liga a TV</li>
              </ul>
            </div>
          </div>

          {/* DEPOIS */}
          <div className="flex flex-col gap-5">
            <TvMockup variant="good" />
            <div>
              <p className="headline mb-3 inline-flex items-center gap-2 text-2xl text-pitch">
                <PartyPopper className="h-6 w-6" aria-hidden />
                Depois
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Imagem nítida nos canais da sua região</li>
                <li>• Família reunida sem dor de cabeça</li>
                <li>• Jogo, novela e jornal sem interrupções</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
