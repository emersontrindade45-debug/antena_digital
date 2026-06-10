import { Hero } from "@/components/sections/hero";
import { BeforeAfter } from "@/components/sections/before-after";
import { Benefits } from "@/components/sections/benefits";
import { Demo } from "@/components/sections/demo";
import { Testimonials } from "@/components/sections/testimonials";
import { Offer } from "@/components/sections/offer";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { SiteFooter } from "@/components/site-footer";
import { StickyCta } from "@/components/sticky-cta";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main>
      <Hero />
      <BeforeAfter />
      <Benefits />
      <Demo />
      <Testimonials />
      <Offer />
      <Faq />
      <FinalCta />
      <SiteFooter />
      <StickyCta />
      <WhatsAppButton />
    </main>
  );
}
