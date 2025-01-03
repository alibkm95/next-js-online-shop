import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/modules/navbar/Navbar";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Footer from "@/components/modules/footer/Footer";
import { Toaster } from "react-hot-toast";
import { StoreProvider } from "@/providers/StoreProvider";
import ScrollToTop from "@/components/modules/ScrollToTop";

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

export const metadata: Metadata = {
  title: "MEGA Toys",
  description: "A Next JS online shop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ScrollToTop />
            <Navbar />
            {children}
            <Footer />
            <Toaster position="bottom-right" />
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
