# UR Groups website

Next.js (App Router) + TypeScript. Plain CSS in `app/globals.css`.

## Run
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Edit content
- Everything (phones, addresses, reviews, amenities, WhatsApp number) is in `lib/data.ts`.
- Search for `REPLACE` to find placeholders.
- Put property photos in `public/images/` and set `image: "/images/xyz.jpg"` in `lib/data.ts`.

## Structure
- `app/` - layout.tsx, page.tsx, globals.css
- `components/` - Navbar, Hero, BookingBar, About, Locations, Reviews, Amenities, Contact, Footer
- `lib/data.ts` - all site content

## Deploy
Push to GitHub, import the repo on Vercel, click Deploy.
