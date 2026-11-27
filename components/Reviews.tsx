/* eslint-disable @next/next/no-img-element */
import { reviews } from "@/lib/data";
import { getPropertyImages } from "@/lib/images";

const SECONDS_PER_IMAGE = 5; // lower = faster scroll

export default function Reviews() {
  const images = getPropertyImages("reviews"); // reads public/images/reviews/

  // repeat the set so the strip is always wider than the screen, then double it for a seamless loop
  const reps = images.length ? Math.max(1, Math.ceil(8 / images.length)) : 0;
  const half = Array.from({ length: reps }, () => images).flat();
  const track = [...half, ...half];

  return (
    <section id="reviews" className="section">
      <div className="container">
        <h2>Voices of our Guests</h2>
      </div>

      {images.length > 0 ? (
        <div className="rev-marquee" aria-label="Guest reviews">
          <div
            className="rev-track"
            style={{ ["--dur" as string]: `${half.length * SECONDS_PER_IMAGE}s` }}
          >
            {track.map((src, i) => (
              <div key={i} className="rev-img" aria-hidden={i >= half.length}>
                <img
                  src={src}
                  alt={i < half.length ? `Guest review ${(i % images.length) + 1}` : ""}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* shown only until you add images to public/images/reviews/ */
        <div className="container">
          <div className="rev-row" tabIndex={0} aria-label="Guest reviews">
            {reviews.map((r, i) => (
              <figure key={i} className="rev-card">
                <blockquote>{r.text}</blockquote>
                <figcaption>
                  <span className="avatar" aria-hidden>
                    {r.name.charAt(0)}
                  </span>
                  <span>
                    <strong>{r.name}</strong>
                    <small>{r.stay}</small>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}