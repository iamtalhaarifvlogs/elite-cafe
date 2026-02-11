// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Elite Cafe | Luxury Coffee in Los Angeles",
  description:
    "Elite Cafe is a premium artisan coffee destination in Los Angeles.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Header is a client component with "use client" */}
        <Header />

        {/* Ensure main content has top padding so it's not hidden under fixed header */}
        <main style={{ paddingTop: "70px" }}>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
