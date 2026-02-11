import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://elitecafe.la"),
  title: {
    default: "Elite Cafe | Luxury Coffee Experience in Los Angeles",
    template: "%s | Elite Cafe",
  },
  description:
    "Elite Cafe is a premium artisan coffee destination in Los Angeles offering luxury specialty coffee, curated pastries, and refined ambiance.",
  keywords: [
    "Best cafe in Los Angeles",
    "Luxury coffee LA",
    "Premium cafe Los Angeles",
    "Artisan coffee Los Angeles",
  ],
  openGraph: {
    title: "Elite Cafe | Luxury Coffee in LA",
    description:
      "Experience premium coffee, curated pastries, and elevated ambiance.",
    url: "https://elitecafe.la",
    siteName: "Elite Cafe",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <div className="logo">Elite Cafe</div>
          <div className="links">
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/reservations">Reservations</Link>
            <Link href="/order">Order Online</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>

        {children}

        <footer className="footer">
          <p>© {new Date().getFullYear()} Elite Cafe — Los Angeles</p>
        </footer>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CafeOrCoffeeShop",
              name: "Elite Cafe",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Los Angeles",
                addressRegion: "CA",
                addressCountry: "US",
              },
              servesCuisine: "Specialty Coffee, Pastries",
              priceRange: "$$$",
            }),
          }}
        />
      </body>
    </html>
  );
}
