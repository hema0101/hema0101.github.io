import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "../index.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-headline",
});

export const metadata: Metadata = {
  title: "Ibrahim Soliman | Portfolio",
  description: "DevOps and Frontend Engineer specializing in scalable cloud infrastructure and fluid digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-surface text-on-surface`}>
        {children}
      </body>
    </html>
  );
}
