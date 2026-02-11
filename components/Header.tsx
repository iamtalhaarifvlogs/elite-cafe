"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/reservations", label: "Reservations" },
    { href: "/order", label: "Order Online" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <div className="text-2xl font-bold">Elite Cafe</div>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-yellow-400">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-0.5 bg-white ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white ${open ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-black text-white overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } flex flex-col space-y-4 px-4 pb-4`}
      >
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
