import {
  Wifi,
  Snowflake,
  ParkingCircle,
  Tv,
  Coffee,
  ConciergeBell,
  Headset,
  Shirt,
  CupSoda,
  Accessibility,
  CigaretteOff,
  type LucideIcon,
} from "lucide-react";
import { amenities } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  wifi: Wifi,
  ac: Snowflake,
  parking: ParkingCircle,
  tv: Tv,
  breakfast: Coffee,
  room: ConciergeBell,
  desk: Headset,
  laundry: Shirt,
  tea: CupSoda,
  access: Accessibility,
  smokefree: CigaretteOff,
};

export default function Amenities() {
  return (
    <section id="amenities" className="section section-plum">
      <div className="container">
        <h2>Amenities</h2>
        <p className="lead">What you get at our stays.</p>

        <ul className="amen-grid">
          {amenities.map((a) => {
            const Icon = icons[a.icon] ?? Wifi;
            return (
              <li key={a.label}>
                <Icon size={26} aria-hidden />
                <span>{a.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
