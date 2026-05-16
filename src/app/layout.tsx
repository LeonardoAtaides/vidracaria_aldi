import type { Metadata } from "next";
import { Montserrat, Cormorant_SC } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cormorantSC = Cormorant_SC({
  subsets: ["latin"],
  variable: "--font-brand",
  weight: ["400", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${montserrat.variable} ${cormorantSC.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
