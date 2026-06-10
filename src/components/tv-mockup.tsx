import { cn } from "@/lib/utils";

/**
 * TV desenhada em CSS — dois estados: sinal ruim (chuvisco animado)
 * e sinal limpo (transmissão de futebol com placar).
 */
export function TvMockup({
  variant,
  className,
}: {
  variant: "bad" | "good";
  className?: string;
}) {
  return (
    <div className={cn("select-none", className)}>
      <div className="rounded-2xl border border-white/10 bg-black p-2 shadow-2xl shadow-black/60 sm:p-3">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          {variant === "bad" ? (
            <>
              <div className="tv-static absolute inset-0 opacity-90" />
              <div className="glitch-bar absolute inset-x-0 top-[8%] h-[14%] bg-white/30 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
              <p className="headline absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-sm text-white/80 sm:text-lg [text-shadow:0_1px_8px_rgb(0_0_0/0.8)]">
                Sinal fraco ou inexistente
              </p>
            </>
          ) : (
            <>
              {/* Gramado em perspectiva */}
              <div className="absolute inset-0 bg-gradient-to-b from-sky-950 from-15% via-pitch-deep via-40% to-pitch/80" />
              <div className="absolute inset-x-0 bottom-0 h-3/4 [background:repeating-linear-gradient(90deg,transparent_0_12%,oklch(1_0_0/0.05)_12%_24%)]" />
              {/* Círculo central */}
              <div className="absolute left-1/2 top-[68%] h-[40%] w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-[100%] border-2 border-white/35" />
              <div className="absolute inset-x-0 top-[68%] h-px bg-white/35" />
              {/* Placar */}
              <div className="absolute left-2 top-2 flex items-center gap-1.5 rounded-md bg-black/70 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-sm sm:left-3 sm:top-3 sm:px-3 sm:py-1.5 sm:text-xs">
                <span className="text-gold">AO VIVO</span>
                <span className="text-white/50">•</span>
                <span>2º TEMPO 43:12</span>
              </div>
              <div className="absolute bottom-2 left-2 rounded-md bg-black/70 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-sm sm:bottom-3 sm:left-3 sm:px-3 sm:py-1.5 sm:text-xs">
                CASA 1 × 0 VISITANTE
              </div>
            </>
          )}
        </div>
      </div>
      {/* Pé da TV */}
      <div className="mx-auto h-3 w-1/4 rounded-b-lg bg-gradient-to-b from-black to-zinc-800" />
    </div>
  );
}
