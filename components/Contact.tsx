import { Mail, MapPin, Phone } from "lucide-react";
import { brand, properties } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact</h2>

        <ul className="contact-list">
          {properties.map((p) => {
            const email = p.email ?? brand.email;
            return (
              <li key={p.slug} className="contact-item">
                <h3>{p.name}</h3>
                <p className="contact-block">
                  <MapPin size={16} aria-hidden /> {p.area} {p.block}
                </p>

                <a className="contact-phone" href={`tel:${p.phone.replace(/\s/g, "")}`}>
                  <Phone size={18} aria-hidden /> {p.phone}
                </a>

                <a className="contact-email" href={`mailto:${email}`}>
                  <Mail size={18} aria-hidden /> {email}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}