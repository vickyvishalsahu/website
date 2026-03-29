import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { NotificationBanner } from "@/components/notification-banner";
import { t } from "@/lib/i18n";
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
  title: {
    default: t.site.title,
    template: t.site.titleTemplate,
  },
  description: t.site.description,
  icons: {
    icon: "/vicky_dp.png",
    apple: "/vicky_dp.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className="flex min-h-screen flex-col font-sans antialiased">
        <Navbar />
        <NotificationBanner />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
