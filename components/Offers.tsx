import { getPropertyImages } from "@/lib/images";
import OffersRow from "./OffersRow";

export default function Offers() {
  const images = getPropertyImages("offers"); // reads public/images/offers/
  if (images.length === 0) return null; // no photos = section hidden

  return (
    <section id="offers" className="section section-plum">
      <div className="container">
        <div className="offers-head">
          <span className="chip">Offers</span>
          <h2>Stay more, pay less.</h2>
        </div>

        <OffersRow images={images} />
      </div>
    </section>
  );
}