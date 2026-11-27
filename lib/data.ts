// ─────────────────────────────────────────────────────────────
// All site content lives here. Edit this file, not the components.
// Anything marked REPLACE is placeholder text.
// ─────────────────────────────────────────────────────────────

export const brand = {
  name: "UR Groups",
  tagline: "Comfortable stays in the heart of Jayanagar",
  city: "Bengaluru, India",
  email: "urcomforts9@gmail.com", // REPLACE
  whatsapp: "+91 8792148111", // REPLACE: country code + number, no + or spaces
};

export type Property = {
  slug: string;
  name: string;
  area: string;
  block: string;
  blurb: string;
  address: string; // REPLACE with full address
  phone: string; // REPLACE
  email?: string; // optional: falls back to brand.email
  mapUrl: string; // REPLACE with Google Maps link
  images?: string[]; // photos in /public/images/<slug>/ , first one shows first
  whatsapp?: string;
};

export const properties: Property[] = [
  {
    slug: "ur-comforts",
    name: "UR Comforts",
    area: "Jayanagar",
    block: "4th Block",
    blurb: "Simple, clean rooms a short walk from the 4th Block market and shops.",
    address: "UR Comforts, Jayanagar 4th Block, Bengaluru",
    phone: "+91 8792148111",
    whatsapp: "918792148111",
    email: "urcomforts9@gmail.com",
    mapUrl: "https://maps.google.com/?q=UR+Comforts+Jayanagar+4th+Block+Bengaluru",
    images: [
      "/images/ur-comforts/1.jpg",
      "/images/ur-comforts/2.jpg",
      "/images/ur-comforts/3.jpg",
      "/images/ur-comforts/4.jpg",
    ],
  },
  {
    slug: "vp-international",
    name: "VP International",
    area: "Jayanagar",
    block: "4th Block",
    blurb: "A comfortable base for work trips and family stays in the 4th Block.",
    address: "VP International, Jayanagar 4th Block, Bengaluru",
    phone: "+91 7019052487",
    whatsapp: "917019052487",
    email: "hotelvpinternational@gmail.com",
    mapUrl: "https://maps.google.com/?q=VP+International+Jayanagar+4th+Block+Bengaluru",
    images: [
      "/images/vp-international/1.jpg",
      "/images/vp-international/2.jpg",
      "/images/vp-international/3.jpg",
      "/images/vp-international/4.jpg",
    ],  
  },
  {
    slug: "ur-stay-in",
    name: "UR Stay Inn",
    area: "Jayanagar",
    block: "9th Block",
    blurb: "A quieter stay in the 9th Block, close to main roads and the metro.",
    address: "UR Stay Inn, Jayanagar 9th Block, Bengaluru",
    phone: "+91 6360475280",
    whatsapp: "916360475280",
    email: "urstayinn@gmail.com",
    mapUrl: "https://maps.google.com/?q=UR+Stay+In+Jayanagar+9th+Block+Bengaluru",
    images: [
      "/images/ur-stay-in/1.jpg",
      "/images/ur-stay-in/2.jpg",
      "/images/ur-stay-in/3.jpg",
      "/images/ur-stay-in/4.jpg",
    ],
  },
];

export const aboutPoints = [
  {
    title: "Three stays, one neighbourhood",
    text: "All our properties are in Jayanagar, so you can pick the block that suits your plans.",
  },
  {
    title: "Easy to get around",
    text: "Shops, restaurants, hospitals and transport are close to every stay.",
  },
  {
    title: "One team to talk to",
    text: "Call or message us once. We help with rooms, check-in and anything you need.",
  },
];

// REPLACE these with real guest reviews before launch.
export const reviews = [
  { name: "Guest name", stay: "UR Comforts", text: "Google review 1" },
  { name: "Guest name", stay: "VP International", text: "Google review 2" },
  { name: "Guest name", stay: "UR Stay Inn", text: "Google review 3" },
  { name: "Guest name", stay: "UR Comforts", text: "Google review 4" },
];

// REPLACE: keep only the amenities you really offer.
// "icon" must match a key in components/Amenities.tsx
export const amenities = [
  { icon: "wifi", label: "High-speed WiFi" },
  { icon: "ac", label: "Air conditioning" },
  { icon: "parking", label: "Parking" },
  { icon: "tv", label: "Smart TV" },
  { icon: "breakfast", label: "Breakfast" },
  { icon: "room", label: "Room service" },
  { icon: "desk", label: "24/7 front desk" },
  { icon: "laundry", label: "Laundry service" },
  { icon: "tea", label: "Tea/coffee maker" },
  { icon: "access", label: "Accessible rooms" },
  { icon: "smokefree", label: "Smoke-free" },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#locations", label: "Locations" },
  { href: "#offers", label: "Offers" },
  { href: "#reviews", label: "Reviews" },
  { href: "#amenities", label: "Amenities" },
  { href: "#contact", label: "Contact" },
];

// Text for each offer card, in the SAME ORDER as the photos in /public/images/offers/
// (1.jpg is the first line, 2.jpg the second, and so on).
// "tag" is optional. Photos with no matching line show as a plain photo card.
export const offerCopy = [
  { tag: "20% off", title: "Call & Book", text: "Book by phone and get 20% off your stay." },
  { title: "REPLACE", text: "REPLACE: describe this offer in one line." },
  { title: "REPLACE", text: "REPLACE: describe this offer in one line." },
  { title: "REPLACE", text: "REPLACE: describe this offer in one line." },
];