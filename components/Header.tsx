"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          Elite Cafe
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/reservations">Reservations</Link>
          <Link href="/order">Order Online</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Hamburger Menu */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black text-white flex flex-col space-y-4 px-4 pb-4 transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
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
