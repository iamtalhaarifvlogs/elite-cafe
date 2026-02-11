import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-content">
          <h1>
            A New Standard of Luxury Coffee in Los Angeles
          </h1>
          <p>
            Elite Cafe delivers artisan craftsmanship,
            curated pastries, and an atmosphere designed for
            the modern lifestyle.
          </p>
          <Link href="/reservations" className="btn-primary">
            Reserve Your Table
          </Link>
        </div>
      </section>

      {/* SIGNATURE */}
      <section className="section">
        <div className="container">
          <h2>Signature Experience</h2>
          <div className="grid-3">
            <div className="card">
              <h3>Artisan Coffee</h3>
              <p>
                Hand-selected beans roasted to perfection.
              </p>
            </div>
            <div className="card">
              <h3>Curated Pastries</h3>
              <p>
                Freshly crafted luxury desserts daily.
              </p>
            </div>
            <div className="card">
              <h3>Refined Atmosphere</h3>
              <p>
                Designed for conversations, creativity,
                and elegance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark">
        <div className="container">
          <h2>Experience Elite Cafe Today</h2>
          <Link href="/order" className="btn-primary">
            Order Online
          </Link>
        </div>
      </section>
    </>
  );
}
