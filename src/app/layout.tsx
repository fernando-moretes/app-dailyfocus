import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Fontes locais
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadados para SEO
export const metadata: Metadata = {
  title: {
    default: "DailyFocus | Fernando Moretes",
    template: "%s | DailyFocus",
  },
  description:
    "DailyFocus é uma aplicação bilíngue de produtividade para organizar tarefas, tempo, metas e foco diário. Criada por Fernando Francisco Azevedo.",
  metadataBase: new URL("https://dailyfocus.moretes.com"),
  authors: [
    {
      name: "Fernando Francisco Azevedo",
      url: "https://fernando.moretes.com",
    },
  ],
  creator: "Fernando Francisco Azevedo",
  publisher: "Fernando Francisco Azevedo",
  keywords: [
    "DailyFocus",
    "produtividade",
    "gestão de tarefas",
    "time management",
    "focus app",
    "Fernando Francisco Azevedo",
    "Fernando Moretes",
  ],
  alternates: {
    canonical: "https://dailyfocus.moretes.com",
    languages: {
      "pt-BR": "https://dailyfocus.moretes.com",
      en: "https://dailyfocus.moretes.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    title: "DailyFocus | Produtividade com foco diário",
    description:
      "Aplicação de produtividade para organizar tarefas, tempo e foco diário. Portfolio público de Fernando Moretes.",
    url: "https://dailyfocus.moretes.com",
    siteName: "DailyFocus",
    images: [
      {
        url: "/meta-image.png",
        width: 1200,
        height: 630,
        alt: "DailyFocus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DailyFocus | Produtividade com foco diário",
    description:
      "Organize tarefas, tempo e foco diário com uma aplicação pública do portfolio Fernando Moretes.",
    images: ["/meta-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "DailyFocus",
    url: "https://dailyfocus.moretes.com",
    description:
      "DailyFocus is a bilingual productivity app for daily tasks, time management, goals, and focus.",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "Web Browser",
    author: {
      "@type": "Person",
      name: "Fernando Francisco Azevedo",
      url: "https://fernando.moretes.com",
      sameAs: [
        "https://www.linkedin.com/in/fernando-francisco-azevedo/",
        "https://github.com/fernandofatech",
        "https://fernando.moretes.com",
      ],
    },
  };

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
