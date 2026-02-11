"use client";
import { useState } from "react";

export default function Reservations() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    setStatus("Reservation request received.");
  }

  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <h1>Reserve Your Experience</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <form className="card">
            <input placeholder="Name" required />
            <input placeholder="Email" required />
            <input type="date" required />
            <input type="number" placeholder="Guests" required />
            <button className="btn-primary">Reserve</button>
          </form>
          <p>{status}</p>
        </div>
      </section>
    </>
  );
}
