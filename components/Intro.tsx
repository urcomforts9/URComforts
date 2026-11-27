"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // skip intro for people who turned off motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }
    // lock scrolling while the intro plays
    document.documentElement.style.overflow = "hidden";
    // safety: always remove the intro after 3s
    const t = setTimeout(() => setDone(true), 3000);
    return () => {
      clearTimeout(t);
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (done) document.documentElement.style.overflow = "";
  }, [done]);

  if (done) return null;

  return (
    <div
      className="intro"
      aria-hidden="true"
      onAnimationEnd={(e) => {
        if (e.animationName === "intro-out") setDone(true);
      }}
    >
      <div className="intro-inner">
        <div className="intro-word">
          <span className="intro-ur">UR</span>
          <span className="intro-groups">Groups</span>
        </div>
        <span className="intro-line" />
      </div>
    </div>
  );
}