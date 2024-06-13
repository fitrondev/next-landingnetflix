import type { Metadata } from "next";
import { Montserrat, Volkhov } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/provider/theme-provider";
import Header from "@/components/layouts/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const volkhov = Volkhov({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-volkhov",
});

export const metadata: Metadata = {
  title: "Netflix Landing Page",
  description: "Netflix landing page clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={(montserrat.variable, volkhov.variable)}>
        <ThemeProvider
          attribute="class"
          // defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
