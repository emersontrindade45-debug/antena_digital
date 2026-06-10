export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 px-5 py-10 pb-24 text-center text-xs text-muted-foreground md:pb-10">
      <p className="mx-auto max-w-2xl text-pretty">
        A recepção de canais varia conforme a região, a distância das torres de
        transmissão e as condições de instalação. A antena melhora a recepção
        dos canais digitais abertos disponíveis na sua localidade.
      </p>
      <p className="mt-4">
        © {new Date().getFullYear()} Antena Digital. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
