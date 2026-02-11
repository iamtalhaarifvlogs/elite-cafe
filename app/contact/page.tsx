"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    const form = new FormData(e.target);

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        message: form.get("message"),
      }),
    });

    setStatus("Message sent!");
  }

  return (
    <section>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" required />
        <input name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required />
        <button type="submit">Send</button>
      </form>
      <p>{status}</p>
    </section>
  );
}
