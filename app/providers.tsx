"use client";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

/**
 * Global providers.
 * - @tanstack/react-query removed: no useQuery/useMutation calls exist in this app.
 * - reCAPTCHA removed: loaded lazily inside ReservationSection on first form focus.
 * Keeping this file minimal reduces the client bundle shipped on every page.
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {children}
    </TooltipProvider>
  );
}
