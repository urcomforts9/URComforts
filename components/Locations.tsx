import { MapPin, Phone } from "lucide-react";
import { properties } from "@/lib/data";
import PropertyMedia from "./PropertyMedia";
import { getPropertyImages } from "@/lib/images";

export default function Locations() {
  return (
    <section id="locations" className="section section-mist">
      <div className="container">
        <h2>Explore our locations</h2>
        <p className="lead">Three stays in Jayanagar. Same care, different blocks.</p>

        <div className="loc-grid">
          {properties.map((p, i) => (
            <article key={p.slug} className="loc-card">
              <PropertyMedia
                name={p.name}
                area={p.area}
                block={p.block}
                images={getPropertyImages(p.slug)}
                tone={i + 1}
              />

              <div className="loc-body">
                <h3>{p.name}</h3>
                <p className="loc-area">
                  <MapPin size={15} aria-hidden /> {p.area} {p.block}, Bengaluru
                </p>
                <p>{p.blurb}</p>

                <div className="loc-actions">
                  <a className="btn btn-forest" href={`tel:${p.phone.replace(/\s/g, "")}`}>
                    <Phone size={16} aria-hidden /> Call
                  </a>
                  <a className="btn btn-ghost" href={p.mapUrl} target="_blank" rel="noreferrer">
                    View on map
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
