import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export const metadata: Metadata = {
  title: "Belinked Web Development",
  description: "Websites and application Development",
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Bruno Diego da Silva" }],
  keywords: ['Turin', 'Italy', 'website creation', "e-commerce", "web applications", "digital marketing", "small businesses", "medium businesses", "web", "design", "marketing", "digital", "belinked", "small companies", "medium companies", "website", "website", "customers", "web agency", "full-stack developer",],
  openGraph: {
    title: 'Belinked - Digital Services in Turin, Italy',
    description: 'We offer digital services, website creation, e-commerce, web applications and digital marketing in Turin, Italy.',
    url: 'https://belinked.website',
    siteName: 'Belinked',
    images: [
      {
        url: 'https://belinked.website/assets/logobelinked-03b7bba9.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          id="cookieyes"
          type="text/javascript"
          async
          src="https://cdn-cookieyes.com/client_data/3c11a35db5e7e097d7ea4762/script.js"
        />
      </body>
    </html>
  );
}
