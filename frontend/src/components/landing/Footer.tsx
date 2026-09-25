import { MapPin, Mail, Phone, Heart } from "lucide-react";
import { SiInstagram, SiX, SiYoutube, SiFacebook } from "@icons-pack/react-simple-icons";
import { AREAS } from "@/data/content";

interface FooterProps {
  onNavigate: (id: string) => void;
}

const SOCIALS = [
  { icon: SiInstagram, label: "Instagram", testId: "social-instagram" },
  { icon: SiFacebook, label: "Facebook", testId: "social-facebook" },
  { icon: SiX, label: "X", testId: "social-x" },
  { icon: SiYoutube, label: "YouTube", testId: "social-youtube" },
];

const LINKS = [
  { label: "About Foodysh", id: "#top" },
  { label: "Cuisines", id: "#cuisines" },
  { label: "Restaurants", id: "#restaurants" },
  { label: "Partner with us", id: "#get-app" },
  { label: "Ride with us", id: "#get-app" },
];

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer id="contact" data-testid="site-footer" className="grain relative overflow-hidden bg-forest-deep text-green-50">
      <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-brand/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr]">
          <div>
            <div className="inline-block rounded-2xl bg-white p-2">
              <img src="/logo.png" alt="Foodysh" className="h-12 w-auto" data-testid="footer-logo" />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-green-100/70">
              Nashik's very own food delivery — built by foodies, for foodies.
              Good food, faster, happier.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#contact"
                  data-testid={s.testId}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-green-50 transition-all duration-300 hover:bg-brand hover:text-white"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-extrabold uppercase tracking-[0.2em] text-sun">Explore</h3>
            <ul className="mt-5 space-y-3">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <button
                    data-testid={`footer-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => onNavigate(l.id)}
                    className="text-sm font-medium text-green-100/70 transition-colors hover:text-sun"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-extrabold uppercase tracking-[0.2em] text-sun">We deliver to</h3>
            <div className="mt-5 flex flex-wrap gap-2" data-testid="footer-areas">
              {AREAS.map((a) => (
                <span key={a} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-green-100/80">
                  {a}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-extrabold uppercase tracking-[0.2em] text-sun">Say hello</h3>
            <ul className="mt-5 space-y-4 text-sm text-green-100/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                <span data-testid="footer-address">Foodysh Tower, Thatte Nagar,<br />Nashik, Maharashtra 422005</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-brand" />
                <a href="mailto:hello@foodysh.in" data-testid="footer-email" className="transition-colors hover:text-sun">hello@foodysh.in</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-brand" />
                <a href="tel:+912532500890" data-testid="footer-phone" className="transition-colors hover:text-sun">+91 253 250 0890</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-green-100/50 sm:flex-row">
          <p>© 2026 Foodysh Technologies Pvt. Ltd. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="size-3.5 fill-brand text-brand" /> in Nashik
          </p>
        </div>
      </div>
    </footer>
  );
}
