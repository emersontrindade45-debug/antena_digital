"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { checkoutHref, trackEvent } from "@/lib/tracking";

type CtaButtonProps = {
  children: React.ReactNode;
  location: string;
  size?: "default" | "lg";
  className?: string;
  pulse?: boolean;
};

/**
 * CTA principal: link para o checkout com UTMs preservadas e
 * eventos cta_click + initiate_checkout (GA4 e Pixel Meta).
 */
export function CtaButton({
  children,
  location,
  size = "lg",
  className,
  pulse = false,
}: CtaButtonProps) {
  const [href, setHref] = useState("#oferta");

  useEffect(() => {
    setHref(checkoutHref());
  }, []);

  return (
    <a
      href={href}
      onClick={() => {
        trackEvent("cta_click", { location });
        trackEvent("initiate_checkout", { location });
      }}
      className={cn(
        "headline inline-flex items-center justify-center gap-2 rounded-xl bg-gold text-primary-foreground",
        "transition-transform duration-200 hover:scale-[1.03] hover:bg-gold-deep active:scale-[0.98]",
        "shadow-[0_8px_32px_-8px] shadow-gold/50",
        size === "lg"
          ? "px-8 py-4 text-xl sm:px-10 sm:py-5 sm:text-2xl"
          : "px-6 py-3 text-lg",
        pulse && "cta-pulse",
        className
      )}
    >
      {children}
    </a>
  );
}
