import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JWT Decoder - Decode & Inspect JSON Web Tokens | jwt-decoder",
  description:
    "Free online JWT decoder tool. Decode, inspect, and validate JSON Web Tokens instantly in your browser. Check expiration, view claims, and compare tokens. 100% client-side, no data sent to servers.",
  keywords: [
    "jwt decoder",
    "jwt.io alternative",
    "decode jwt token",
    "json web token decoder",
    "jwt inspector",
    "jwt validator",
    "jwt expiration checker",
    "jwt claims viewer",
  ],
  openGraph: {
    title: "JWT Decoder - Decode & Inspect JSON Web Tokens",
    description:
      "Free online JWT decoder. Decode headers, payloads, check expiration, and compare tokens. 100% client-side.",
    type: "website",
    locale: "en_US",
    siteName: "JWT Decoder",
  },
  twitter: {
    card: "summary_large_image",
    title: "JWT Decoder - Decode & Inspect JSON Web Tokens",
    description:
      "Free online JWT decoder. Decode headers, payloads, check expiration, and compare tokens. 100% client-side.",
  },
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "JWT Decoder",
  description:
    "Free online JWT decoder tool. Decode, inspect, and validate JSON Web Tokens instantly in your browser.",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  browserRequirements: "Requires a modern web browser with JavaScript enabled",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
