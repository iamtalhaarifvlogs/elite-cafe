"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">Elite Cafe</div>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/reservations">Reservations</Link>
          <Link href="/order">Order Online</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <span className={open ? "bar active" : "bar"} />
          <span className={open ? "bar active" : "bar"} />
          <span className={open ? "bar active" : "bar"} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={open ? "mobile-menu open" : "mobile-menu"}>
        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
        <Link href="/menu" onClick={() => setOpen(false)}>Menu</Link>
        <Link href="/reservations" onClick={() => setOpen(false)}>Reservations</Link>
        <Link href="/order" onClick={() => setOpen(false)}>Order Online</Link>
        <Link href="/about" onClick={() => setOpen(false)}>About</Link>
        <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
        <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </div>
    </header>
  );
}
