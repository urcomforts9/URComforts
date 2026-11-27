import { brand, properties } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">{brand.name}</p>
          <p>{brand.tagline}.</p>
        </div>

        <div>
          <h3>Our stays</h3>
          <ul>
            {properties.map((p) => (
              <li key={p.slug}>
                <a href="#locations">
                  {p.name}, {p.block}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Quick links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#amenities">Amenities</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
      </div>
    </footer>
  );
}
