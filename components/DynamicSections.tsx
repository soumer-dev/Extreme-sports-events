"use client";
/**
 * DynamicSections
 * Client boundary that holds all dynamic imports for below-the-fold sections.
 * Keeping them here (rather than in the Server Component page.tsx) allows
 * `ssr: false` for purely client-side components like WhatsAppButton.
 */
import dynamic from "next/dynamic";

export const ActivitiesSection = dynamic(
  () => import("@/components/ActivitiesSection").then((m) => ({ default: m.ActivitiesSection })),
  { ssr: true }
);

export const FlyTaghazoutSection = dynamic(
  () => import("@/components/FlyTaghazoutSection").then((m) => ({ default: m.FlyTaghazoutSection })),
  { ssr: true }
);

export const ReservationSection = dynamic(
  () => import("@/components/ReservationSection").then((m) => ({ default: m.ReservationSection })),
  { ssr: true }
);

export const WhatsAppButton = dynamic(
  () => import("@/components/WhatsAppButton").then((m) => ({ default: m.WhatsAppButton })),
  { ssr: false }
);
