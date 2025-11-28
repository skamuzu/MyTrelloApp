import type { Metadata } from "next";
import { geistSans } from "@/lib/fonts";
import Navbar from "./_components/marketing-navbar";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${geistSans.className} antialiased w-full min-h-screen m-0 p-0 bg-background text-foreground`}
    >
      <Navbar />
      <div className="pt-24">{children}</div>
    </div>
  );
}
