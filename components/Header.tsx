"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "#111",
        color: "#fff",
        zIndex: 999,
        boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        {/* Logo */}
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Elite Cafe</div>

        {/* Desktop nav */}
        <nav
          style={{ display: "none", gap: "1rem" }}
          className="desktop-nav"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: pathname === link.href ? "#f0c040" : "#fff",
                fontWeight: pathname === link.href ? "bold" : "normal",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: "block",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          aria-label="Toggle Menu"
        >
          <div
            style={{
              width: 25,
              height: 2,
              background: "#fff",
              margin: "4px 0",
              transform: open ? "rotate(45deg) translate(5px, 5px)" : "none",
              transition: "0.3s",
            }}
          ></div>
          <div
            style={{
              width: 25,
              height: 2,
              background: "#fff",
              margin: "4px 0",
              opacity: open ? 0 : 1,
              transition: "0.3s",
            }}
          ></div>
          <div
            style={{
              width: 25,
              height: 2,
              background: "#fff",
              margin: "4px 0",
              transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none",
              transition: "0.3s",
            }}
          ></div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            background: "#111",
            padding: "1rem",
            gap: "1rem",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                color: pathname === link.href ? "#f0c040" : "#fff",
                fontWeight: pathname === link.href ? "bold" : "normal",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
