import { useState, useEffect } from "react";
import { whatsappLink } from "../config";
import "./Navbar.css";

const links = [
  { label: "Home",      href: "#hero" },
  { label: "About",     href: "#about" },
  { label: "Gallery",   href: "#gallery" },
  { label: "Services",  href: "#services" },
  { label: "Pricing",   href: "#pricing" },
  { label: "Portfolio", href: "#projects" },
  { label: "Contact",   href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <nav className="navbar-inner container" aria-label="Main navigation">
        <a href="#hero" className="navbar-brand" onClick={() => setMenuOpen(false)}>
          <span className="navbar-brand__mark">MPA</span>
          <span className="navbar-brand__text">
            Detailer<em>Car Care Studio</em>
          </span>
        </a>

        <ul className={`navbar-links${menuOpen ? " navbar-links--open" : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li className="navbar-links__cta">
            <a
              href={whatsappLink("Hi! I'd like to book my car in.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary navbar-cta"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </a>
          </li>
        </ul>

        <button
          className={`navbar-burger${menuOpen ? " navbar-burger--open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
