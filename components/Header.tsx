"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";

export default function Header() {
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

  // Close navbar on route change
  useEffect(() => {
    const navCollapse = document.getElementById("navbarSupportedContent");
    if (navCollapse) {
      navCollapse.classList.remove("show");
    }
  }, [pathname]);

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top shadow">
        <div className="container">
          {/* Logo */}
          <Link href="/" className="navbar-brand">
            Elite Cafe
          </Link>

          {/* Hamburger toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              {links.map((link) => (
                <li className="nav-item" key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-link ${
                      pathname === link.href ? "active text-warning" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
