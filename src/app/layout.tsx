import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: undefined,
  title: "Google Ads Agency Trusted by 100+ Brands | Adalytical",
  description:
    "Adalytical is one of the fastest-growing Google Ads agencies in the world — ex-Google team, profit-first management, no lock-in.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
