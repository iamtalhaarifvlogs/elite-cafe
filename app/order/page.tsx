"use client";
import { useState } from "react";

export default function Order() {
  const [status, setStatus] = useState("");

  async function handleOrder() {
    await fetch("/api/order", {
      method: "POST",
      body: JSON.stringify({
        name: "Online Customer",
        items: ["Latte", "Croissant"],
        total: 18,
      }),
    });

    setStatus("Order placed successfully!");
  }

  return (
    <section>
      <h1>Order Online</h1>
      <p>Latte + Croissant Combo — $18</p>
      <button onClick={handleOrder}>Place Order</button>
      <p>{status}</p>
    </section>
  );
}
