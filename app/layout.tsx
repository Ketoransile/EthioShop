import type { Metadata } from "next";
// import { ThemeProvider } from "@/components/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/general/Navbar";
import { Footer } from "@/components/general/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Inter } from "next/font/google";
import { Montserrat, Roboto_Mono } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EthioElectronics",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div
          className={`px-4 md:px-12 lg:px-20 ${robotoMono.variable} ${geistSans.variable} ${montserrat.variable} ${geistMono.variable} ${inter.variable} antialiased`}
        >
          {children}
          <Toaster />
          <Footer />
        </div>{" "}
      </body>
    </html>
  );
}
