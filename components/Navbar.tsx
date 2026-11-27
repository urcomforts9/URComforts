"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { brand, navLinks, properties } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const callRef = useRef<HTMLDetailsElement>(null);

  // close the call dropdown when clicking outside it, or pressing Esc
  useEffect(() => {
    const closeCall = () => callRef.current?.removeAttribute("open");

    const onClick = (e: MouseEvent) => {
      const el = callRef.current;
      if (el && el.open && !el.contains(e.target as Node)) closeCall();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCall();
    };

    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="logo" aria-label={`${brand.name} home`}>
          <img src="/images/logo.png" alt={`${brand.name} logo`} className="logo-img" />
          <span className="logo-text">
          <span className="logo-top">GROUP</span>
          <span className="logo-sub">of hotels</span>
        </span>
        </a>

        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Main">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <details className="call-menu" ref={callRef}>
            <summary className="btn btn-marigold">
              <Phone size={16} aria-hidden /> Call the desk <ChevronDown size={16} aria-hidden />
            </summary>
            <ul>
              {properties.map((p) => (
                <li key={p.slug}>
                  <a
                    href={`tel:${p.phone.replace(/\s/g, "")}`}
                    onClick={() => callRef.current?.removeAttribute("open")}
                  >
                    <strong>{p.name}</strong>
                    <span>{p.phone}</span>
                  </a>
                </li>
              ))}
            </ul>
          </details>

          <button
            className="menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}