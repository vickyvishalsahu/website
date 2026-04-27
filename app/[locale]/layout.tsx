import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { NotificationBanner } from "@/components/notification-banner";
import "./globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vicky Vishal Sahu",
  url: "https://vickysahu.dev",
  jobTitle: "Senior Frontend Developer",
  address: { "@type": "PostalAddress", addressLocality: "Berlin", addressCountry: "DE" },
  sameAs: [
    "https://github.com/vickyvishalsahu",
    "https://www.linkedin.com/in/vickyvishal/",
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "site" });

  return {
    metadataBase: new URL("https://vickysahu.dev"),
    title: {
      default: t("title"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    authors: [{ name: "Vicky Vishal Sahu", url: "https://vickysahu.dev" }],
    openGraph: {
      type: "website",
      locale: locale === "de" ? "de_DE" : "en_US",
      url: "https://vickysahu.dev",
      siteName: "Vicky Vishal Sahu",
      title: t("title"),
      description: t("description"),
      images: [{ url: "/vicky_dp.png", width: 400, height: 400, alt: "Vicky Vishal Sahu" }],
    },
    twitter: {
      card: "summary",
      title: t("title"),
      description: t("description"),
      images: ["/vicky_dp.png"],
    },
    icons: {
      icon: "/vicky_dp.png",
      apple: "/vicky_dp.png",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "de")) {
    notFound();
  }

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body suppressHydrationWarning className="flex min-h-screen flex-col font-sans antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <NotificationBanner />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
