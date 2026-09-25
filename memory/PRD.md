# Foodysh — PRD

## Original problem statement
"Brand name Foodysh. Online Delivery platform. Create a landing page I have uploaded logo for colour reference. ref site https://www.zomato.com/ https://ownly.food/ https://www.swiggy.com/ I need video in header - brand based in Nashik"

User choices (gathered): food montage video in header; full landing (hero video, popular cuisines, top Nashik restaurants, how it works, app download, contact/footer); static showcase (no real ordering); bright & playful look (white base, orange/green pops matching logo).

## Brand
- Foodysh — Nashik's online food delivery. Tagline: "Good Food • Faster • Happier"
- Palette from uploaded logo: orange #FF5C1A, green #17A34A, yellow #FFC531, forest green #0F5125, cream #FFFDF9
- Uploaded logo hosted at frontend/public/logo.png (transparent PNG, used in nav, footer, phone mockup)
- Original SVG droplet-crown smile mark as favicon (frontend/public/favicon.svg)
- Fonts: Plus Jakarta Sans (headings), DM Sans (body), Playfair Display italic (script accents)

## Architecture
- Frontend: Vite + React 19 + TS + Tailwind v4 + shadcn/ui, motion (framer-motion v12) for reveals/micro-interactions, lenis for smooth momentum scrolling, sonner toasts
- Backend: FastAPI template (default /api/status health endpoints — landing page is content-driven, no app-specific API needed)
- Key files: src/pages/Home.tsx (Lenis + section assembly), src/components/landing/* (Nav, Hero, Marquee, Cuisines, Restaurants, HowItWorks, AppDownload, Footer, Logo), src/data/content.ts (dishes, restaurants, marquee, areas), src/index.css (brand theme, marquee/float keyframes, grain)
- Hero video self-hosted: public/hero-video.mp4 (overhead pizza prep loop) + public/hero-poster.jpg

## User personas
- Nashik foodie browsing for local favourites (misal, biryani, street food)
- Restaurant owner evaluating partnership
- Potential delivery rider

## Core requirements (static)
1. Landing page with brand-matched colours from logo
2. Video in header
3. Nashik-based positioning throughout
4. Sections: hero, cuisines, top restaurants, how it works, app download, contact/footer

## Implemented (2026-09-25)
- Full-bleed autoplay muted looping hero video with gradient scrim + parallax zoom on scroll
- Kinetic masked line-by-line headline reveal ("Nashik's / Good Food, / delivered happier.")
- Hero search + craving chips that filter the cuisine grid and smooth-scroll to it
- Slow editorial marquee ribbon (Nashik delicacies + tagline), rotated, droplet separators
- Cuisine explorer: 7 filter pills, 9 dish cards, layout-animated filtering, dish preview Dialog with notify toast
- Top Nashik restaurants: 6 cards (Sadhana Misal, Barbeque Villa, Panchavati Gaurav, etc.) with offers, ratings, hygiene badges, favourite heart toggle + toast
- How it works (3 steps, dashed connector) + 4 perks grid
- App download: forest-green panel, phone mockup with mini app UI, App Store/Play buttons, 10-digit SMS link form with validation + toast
- Footer: dark forest green, coverage area chips (8 Nashik areas), contact (hello@foodysh.in, +91 253 250 0890, Thatte Nagar address), socials
- Scroll progress bar in nav, glass nav on scroll, mobile menu, data-testids throughout
- Verified: yarn typecheck clean; /api/ + POST /api/status 200 via public URL; browser pass (hero video render, filter flow, dialog, SMS toast) on https://foodish-deploy.preview.emergentagent.com

## Credentials
None — no auth in this app.

## Backlog
- P0: Real ordering flow (cart, checkout, payments) when Foodysh is ready
- P1: Restaurant detail pages, live menu data from backend (Mongo collections exist-ready)
- P1: Real app store links + working SMS via Twilio
- P2: Multi-language (Marathi/Hindi), location detection, live order tracking demo
- P2: Rider/partner signup forms wired to backend

## Next tasks
1. Wire "Notify me" + SMS form to real backend endpoints (Mongo waitlist collection)
2. Add restaurant menu pages
3. Custom AI-generated brand video montage for the hero
