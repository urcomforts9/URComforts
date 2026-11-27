"use client";

import { useState } from "react";
import { Phone, Search } from "lucide-react";
import { brand, properties } from "@/lib/data";

const CALL_DISCOUNT = 20; // % off for bookings made by phone
const today = () => new Date().toISOString().split("T")[0];

function nightsBetween(a: string, b: string) {
  const n = Math.round((Date.parse(b) - Date.parse(a)) / 86400000);
  return n > 0 ? n : 1; // same-day counts as 1
}

export default function BookingBar() {
  const [branch, setBranch] = useState(properties[0].slug);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const p = properties.find((x) => x.slug === branch)!;

  // Call link: dials the selected stay
  const telHref = `tel:${p.phone.replace(/\s/g, "")}`;

  // Google search link: opens hotel results with your dates
  const q = encodeURIComponent(`hotel ${p.name} ${p.area}`).replace(/%20/g, "+");
  const nights = checkIn && checkOut && checkOut >= checkIn ? nightsBetween(checkIn, checkOut) : 1;
  const dates = checkIn ? `#ahotel_dates=${checkIn},${nights}` : "";
  const searchHref = `https://www.google.com/search?q=${q}${dates}`;

  // moving check-in forward also moves check-out if it would be earlier
  function onCheckIn(value: string) {
    setCheckIn(value);
    if (checkOut && checkOut < value) setCheckOut(value);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!checkIn || !checkOut || checkOut < checkIn) return;

    const msg =
      `Hi, I'd like to book a room at ${p.name}, ${p.area} ${p.block}.\n` +
      `Check-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guests}`;

    // each stay's own WhatsApp number, or the main one if it has none
    const number = p.whatsapp ?? brand.whatsapp;
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  return (
    <form className="booking" onSubmit={submit} aria-label="Booking enquiry">
      <label>
        <span>Stay</span>
        <select value={branch} onChange={(e) => setBranch(e.target.value)}>
          {properties.map((x) => (
            <option key={x.slug} value={x.slug}>
              {x.name} - {x.block}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span>Check-in</span>
        <input
          type="date"
          required
          min={today()}
          value={checkIn}
          onChange={(e) => onCheckIn(e.target.value)}
        />
      </label>

      <label>
        <span>Check-out</span>
        <input
          type="date"
          required
          min={checkIn || today()}
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </label>

      <label>
        <span>Guests</span>
        <input
          type="number"
          min={1}
          max={10}
          value={guests}
          onChange={(e) => setGuests(Math.max(1, Number(e.target.value) || 1))}
        />
      </label>

      <div className="booking-actions">
        <button type="submit" className="btn btn-whatsapp">
          Book on WhatsApp
        </button>

        <a href={telHref} className="btn btn-marigold">
          <Phone size={16} aria-hidden /> Call to book
          <span className="badge-off">{CALL_DISCOUNT}% off</span>
        </a>

        <a href={searchHref} target="_blank" rel="noopener noreferrer" className="btn btn-glass">
          <Search size={16} aria-hidden /> Compare prices
        </a>
      </div>
    </form>
  );
}