import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import Fathom from "@/lib/fathom";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open Actions Directory",
  description: "Discover and Build Lens Open Actions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link
        rel="shortcut icon"
        href={`https://open-actions-directory.vercel.app/favicon.ico`}
      />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Fathom />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
