import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Locations from "@/components/Locations";
import Reviews from "@/components/Reviews";
import Amenities from "@/components/Amenities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Offers from "@/components/Offers";

export default function Page() {
  return (
    <>
      <Intro />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Locations />
        <Offers />
        <Reviews />
        <Amenities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
