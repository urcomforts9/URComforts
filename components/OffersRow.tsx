"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function OffersRow({ images }: { images: string[] }) {
  const row = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);

  // arrows appear only when the cards don't all fit on screen
  useEffect(() => {
    const el = row.current;
    if (!el) return;
    const check = () => setCanScroll(el.scrollWidth > el.clientWidth + 2);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [images.length]);

  function scroll(dir: 1 | -1) {
    const el = row.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: "smooth" });
  }

  return (
    <div className="offers-wrap">
      <div className="offers-row" ref={row} tabIndex={0} aria-label="Special offers">
        {images.map((src, i) => (
          <div key={src} className="offer-card">
            <img src={src} alt={`Offer ${i + 1}`} loading={i < 5 ? "eager" : "lazy"} />
          </div>
        ))}
      </div>

      {canScroll && (
        <>
          <button type="button" className="offers-arrow offers-prev" onClick={() => scroll(-1)} aria-label="Previous offers">
            <ChevronLeft size={18} />
          </button>
          <button type="button" className="offers-arrow offers-next" onClick={() => scroll(1)} aria-label="Next offers">
            <ChevronRight size={18} />
          </button>
        </>
      )}
    </div>
  );
}