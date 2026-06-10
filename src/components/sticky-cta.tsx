"use client";

import { useEffect, useState } from "react";
import { CtaButton } from "@/components/cta-button";

/**
 * Barra fixa de CTA no mobile (RF-03).
 * Só aparece depois que o visitante percorre a página e chega à seção
 * do produto — primeiro os benefícios, depois o convite à compra.
 */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const product = document.getElementById("produto");
    if (!product) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(product);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-night/95 p-3 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <CtaButton location="sticky" size="default" className="w-full">
        Quero minha antena agora
      </CtaButton>
    </div>
  );
}
