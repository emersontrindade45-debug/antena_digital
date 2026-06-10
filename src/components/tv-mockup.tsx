import Image from "next/image";
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
            <Image
              src="/images/transmissao.webp"
              alt="Transmissão nítida de um jogo de futebol com placar ao vivo"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover"
            />
          )}
        </div>
      </div>
      {/* Pé da TV */}
      <div className="mx-auto h-3 w-1/4 rounded-b-lg bg-gradient-to-b from-black to-zinc-800" />
    </div>
  );
}
