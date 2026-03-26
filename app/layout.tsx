import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Andres Martinez - System Engineer",
  description:
    "I'm a System Engineer with experience in software development, cloud computing. I have a passion for learning new technologies and solving complex problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background">
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
