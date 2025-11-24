import type { Metadata } from "next";
import "./globals.css";
import { geistSans } from "../lib/fonts";
import { ThemeProvider } from "@/components/ui/theme-provider";


export const metadata: Metadata = {
  title: "TaskFlow",
  description: "Manage your tasks efficiently with TaskFlow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en" suppressHydrationWarning>
        <head />
        <body suppressHydrationWarning>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
  );
}
