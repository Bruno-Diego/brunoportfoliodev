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
  title: "Bruno Diego Web Developer",
  description: "Websites and application Development",
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Bruno Diego da Silva" }],
  keywords: ['Turin', 'Italy', 'website creation', "e-commerce", "web applications", "digital marketing", "small businesses", "medium businesses", "web", "design", "marketing", "digital", "belinked", "small companies", "medium companies", "website", "website", "customers", "web agency", "full-stack developer",],
  openGraph: {
    title: 'Bruno Diego Dev',
    description: 'I offer digital services, website creation, e-commerce, web applications and digital marketing, I&apos;m based in Turin, Italy.',
    url: 'https://belinked.website',
    siteName: 'Bruno Diego Developer',
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
        {/* <Script
          id="cookieyes"
          type="text/javascript"
          async
          src="https://cdn-cookieyes.com/client_data/3c11a35db5e7e097d7ea4762/script.js"
        /> */}
        <Script
          id="font-awesome"
          type="text/javascript"
          async
          src="https://kit.fontawesome.com/df96160574.js"
        />
        <Script
          id="google-adsense"
          type="text/javascript"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1391817810231795"
        />
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1391817810231795"
     crossorigin="anonymous"></script> */}
      </body>
    </html>
  );
}
