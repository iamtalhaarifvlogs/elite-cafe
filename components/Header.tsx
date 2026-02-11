"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Elite Cafe</div>

        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/reservations">Reservations</Link>
          <Link href="/order">Order Online</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
