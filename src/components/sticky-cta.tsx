"use client";

import { useEffect, useState } from "react";
import { CtaButton } from "@/components/cta-button";

/** Barra fixa de CTA no mobile — aparece depois que o Hero sai da tela (RF-03). */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(hero);
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
