"use client";
import { useState } from "react";

export default function Reservations() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    const form = new FormData(e.target);

    await fetch("/api/reservation", {
      method: "POST",
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        date: form.get("date"),
        guests: form.get("guests"),
      }),
    });

    setStatus("Reservation submitted!");
  }

  return (
    <section>
      <h1>Reserve a Table</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" required />
        <input name="email" placeholder="Email" required />
        <input name="date" type="date" required />
        <input name="guests" type="number" placeholder="Guests" required />
        <button type="submit">Reserve</button>
      </form>
      <p>{status}</p>
    </section>
  );
}
