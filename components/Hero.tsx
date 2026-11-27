import BookingBar from "./BookingBar";
import HeroScene from "./HeroScene";
import { getPropertyImages } from "@/lib/images";

export default function Hero() {
  const images = getPropertyImages("hero"); // reads public/images/hero/
  return (
    <section id="home" className="hero">
      <HeroScene images={images} />

      <div className="container hero-inner">
        <div className="glass">
          <h1>Your cozy home away from home.</h1>
          <p>
            Clean, comfortable rooms and a friendly team that is always easy to reach.
          </p>
          <a href="#locations" className="btn btn-marigold">
            See our stays
          </a>
        </div>
      </div>

      <div className="container">
        <BookingBar />
      </div>
    </section>
  );
}