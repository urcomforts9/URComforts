"use client";
/* eslint-disable @next/next/no-img-element */

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";

type Props = {
  name: string;
  area: string;
  block: string;
  images: string[];
  tone: number;
};

// change slideshow time
const SLIDE_MS = 2500; // time each photo stays

export default function PropertyMedia({ name, area, block, images, tone }: Props) {
  const [failed, setFailed] = useState<string[]>([]);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [galleryAt, setGalleryAt] = useState<number | null>(null);

  // photos that fail to load are skipped, so a missing file never breaks the card
  const list = images.filter((src) => !failed.includes(src));
  const count = list.length;
  const current = count ? active % count : 0;

  const closeGallery = useCallback(() => setGalleryAt(null), []);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // auto transition (pauses on hover, while gallery is open, or if motion is reduced)
  useEffect(() => {
    if (count < 2 || paused || reduced || galleryAt !== null) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % count), SLIDE_MS);
    return () => clearTimeout(t);
  }, [active, count, paused, reduced, galleryAt]);

  return (
    <div
      className={`loc-img tone-${tone}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {list.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={i === current ? `${name}, ${area} ${block}` : ""}
          aria-hidden={i !== current}
          className={`slide ${i === current ? "is-active" : ""}`}
          loading={i === 0 ? "eager" : "lazy"}
          onError={() => setFailed((f) => [...f, src])}
        />
      ))}

      <span className="loc-tag">{block}</span>


      {count > 0 && (
        <button
          type="button"
          className="gallery-btn"
          onClick={() => setGalleryAt(current)}
          aria-label={`View gallery of ${name}`}
        >
          <Images size={14} aria-hidden /> View gallery
        </button>
      )}

      {galleryAt !== null && (
        <Lightbox name={name} images={list} start={galleryAt} onClose={closeGallery} />
      )}
    </div>
  );
}

function Lightbox({
  name,
  images,
  start,
  onClose,
}: {
  name: string;
  images: string[];
  start: number;
  onClose: () => void;
}) {
  const [i, setI] = useState(start);
  const n = images.length;
  const closeRef = useRef<HTMLButtonElement>(null);

  const prev = useCallback(() => setI((x) => (x - 1 + n) % n), [n]);
  const next = useCallback(() => setI((x) => (x + 1) % n), [n]);

  // lock page scroll + focus the close button
  useEffect(() => {
    const before = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = before;
    };
  }, []);

  // keyboard: Esc closes, arrows move
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${name} gallery`} onClick={onClose}>
      <div className="lb-inner" onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} type="button" className="lb-close" onClick={onClose} aria-label="Close gallery">
          <X size={22} />
        </button>

        <div className="lb-stage">
          {n > 1 && (
            <button type="button" className="lb-nav lb-prev" onClick={prev} aria-label="Previous photo">
              <ChevronLeft size={26} />
            </button>
          )}
          <img src={images[i]} alt={`${name}, photo ${i + 1} of ${n}`} />
          {n > 1 && (
            <button type="button" className="lb-nav lb-next" onClick={next} aria-label="Next photo">
              <ChevronRight size={26} />
            </button>
          )}
        </div>

        <p className="lb-count">
          {name} &middot; {i + 1} / {n}
        </p>

        {n > 1 && (
          <div className="lb-thumbs">
            {images.map((src, idx) => (
              <button
                key={src}
                type="button"
                className={idx === i ? "is-active" : ""}
                onClick={() => setI(idx)}
                aria-label={`Show photo ${idx + 1}`}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}