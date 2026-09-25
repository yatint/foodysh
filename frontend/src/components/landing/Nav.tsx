import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Menu, X, Bike } from "lucide-react";
import Logo from "./Logo";

interface NavProps {
  onNavigate: (id: string) => void;
}

const LINKS = [
  { label: "Cuisines", id: "#cuisines", testId: "nav-link-cuisines" },
  { label: "Restaurants", id: "#restaurants", testId: "nav-link-restaurants" },
  { label: "How it works", id: "#how-it-works", testId: "nav-link-how-it-works" },
];

export default function Nav({ onNavigate }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    onNavigate(id);
  };

  return (
    <header
      data-testid="site-nav"
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-500 ${
        scrolled ? "bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_rgba(255,92,26,0.08)]" : "bg-transparent"
      }`}
    >
      <motion.div className="absolute inset-x-0 top-0 h-[3px] origin-left bg-brand" style={{ scaleX }} />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <button
          data-testid="nav-logo-button"
          onClick={() => go("#top")}
          className={`rounded-2xl px-2 py-1 transition-colors ${scrolled ? "" : "bg-white/90 backdrop-blur"}`}
          aria-label="Foodysh home"
        >
          <Logo />
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={l.testId}
              onClick={() => go(l.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:bg-brand-soft hover:text-brand-dark ${
                scrolled ? "text-stone-700" : "text-white drop-shadow-md hover:text-brand-dark"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            data-testid="nav-order-button"
            onClick={() => go("#get-app")}
            className="group hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(255,92,26,0.35)] transition-transform duration-300 hover:scale-105 hover:bg-brand-dark active:scale-95 sm:inline-flex"
          >
            <Bike className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
            Order Now
          </button>
          <button
            data-testid="nav-menu-button"
            onClick={() => setOpen((v) => !v)}
            className={`rounded-full p-2 md:hidden ${scrolled ? "text-stone-800" : "bg-white/90 text-stone-800"}`}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div data-testid="nav-mobile-menu" className="mx-4 mb-4 rounded-3xl bg-white p-3 shadow-xl md:hidden">
          {LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`${l.testId}-mobile`}
              onClick={() => go(l.id)}
              className="block w-full rounded-2xl px-4 py-3 text-left font-semibold text-stone-700 hover:bg-brand-soft"
            >
              {l.label}
            </button>
          ))}
          <button
            data-testid="nav-order-button-mobile"
            onClick={() => go("#get-app")}
            className="mt-1 block w-full rounded-2xl bg-brand px-4 py-3 text-left font-bold text-white"
          >
            Order Now
          </button>
        </div>
      )}
    </header>
  );
}
