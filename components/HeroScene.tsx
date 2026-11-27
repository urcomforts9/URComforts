"use client";

import { useEffect, useState } from "react";

// Deterministic values so server and browser render the same thing
const motes = Array.from({ length: 16 }, (_, i) => ({
  left: (i * 53) % 100,
  size: 3 + (i % 4) * 2,
  delay: -(i * 1.7),
  dur: 14 + (i % 5) * 3,
}));

const SLIDE_MS = 2000; // change hero slideshow time (milliseconds)

export default function HeroScene({ images = [] }: { images?: string[] }) {
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // auto change (skipped for 0 or 1 photo, or if motion is reduced)
  useEffect(() => {
    if (images.length < 2 || reduced) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % images.length), SLIDE_MS);
    return () => clearTimeout(t);
  }, [active, images.length, reduced]);

  return (
    <div className="scene" aria-hidden="true">
      {images.length > 0 ? (
        images.map((src, i) => (
          <div
            key={src}
            className={`scene-slide ${i === active ? "is-active" : ""}`}
            style={{ backgroundImage: `url("${src}")` }}
          />
        ))
      ) : (
        <div className="scene-photo" />
      )}

      <div className="scene-tint" />
      <div className="scene-rays" />
      <div className="scene-lamp" />

      {motes.map((m, i) => (
        <span
          key={i}
          className="mote"
          style={{
            left: `${m.left}%`,
            width: m.size,
            height: m.size,
            animationDuration: `${m.dur}s`,
            animationDelay: `${m.delay}s`,
          }}
        />
      ))}
    </div>
  );
}