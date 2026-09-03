import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "PERMISSA",
  description: "Evidence-gated screenplay clearance research.",
  openGraph: {
    title: "PERMISSA",
    description: "Evidence-gated screenplay clearance research.",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
