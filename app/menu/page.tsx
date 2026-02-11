export default function Menu() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <h1>Our Curated Menu</h1>
          <p>Premium ingredients. Elevated presentation.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          <div className="card">
            <h3>Signature Latte</h3>
            <p>$8</p>
          </div>
          <div className="card">
            <h3>Luxury Cappuccino</h3>
            <p>$9</p>
          </div>
          <div className="card">
            <h3>Artisan Croissant</h3>
            <p>$7</p>
          </div>
        </div>
      </section>
    </>
  );
}
