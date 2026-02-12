import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mumbai Masala - Modern Indian Dining in Mumbai",
  description:
    "Experience bold Indian flavours inspired by Mumbai street food and home kitchens. Book your table today at our Mumbai restaurant.",
  keywords: ["restaurant", "Indian food", "Mumbai restaurant", "fine dining", "street food", "tandoor"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
