import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Funciona em qualquer TV?",
    answer:
      "Funciona em TVs com conversor digital integrado (a maioria das TVs fabricadas a partir de 2010). Para TVs mais antigas, basta usar um conversor digital externo.",
  },
  {
    question: "Precisa de internet?",
    answer:
      "Não. A antena capta o sinal digital aberto transmitido pelas emissoras — você assiste sem internet, sem Wi-Fi e sem consumir dados.",
  },
  {
    question: "É fácil instalar?",
    answer:
      "Sim. Você conecta o cabo na TV, posiciona a antena e faz a busca de canais no menu da televisão. O manual em português mostra o passo a passo e a maioria das pessoas termina em poucos minutos.",
  },
  {
    question: "Quais canais posso receber?",
    answer:
      "Você recebe os canais digitais abertos disponíveis na sua região, como os principais canais de TV aberta. A quantidade exata varia conforme a cidade e a distância das torres de transmissão.",
  },
  {
    question: "Funciona em apartamento?",
    answer:
      "Sim. Em apartamentos, recomendamos posicionar a antena perto de uma janela voltada para a direção das torres de transmissão para obter a melhor recepção.",
  },
  {
    question: "Tem garantia?",
    answer:
      "Sim. Você tem 7 dias para devolução conforme o Código de Defesa do Consumidor, além de garantia contra defeitos de fabricação.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-night-soft/40 px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="headline text-balance text-center text-4xl sm:text-6xl">
          Perguntas
          <span className="text-gold"> frequentes</span>
        </h2>

        <Accordion multiple={false} className="mt-10">
          {faqs.map(({ question, answer }) => (
            <AccordionItem key={question} value={question}>
              <AccordionTrigger className="text-left text-base font-semibold sm:text-lg">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
