import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Search, MapPin, Zap, Star, UtensilsCrossed, ChevronDown } from "lucide-react";
import { CUISINE_FILTERS } from "@/data/content";

interface HeroProps {
  onExplore: (category: string) => void;
}

const EASE = [0.22, 1, 0.36, 1] as const;

const CHIPS = [
  { label: "Misal Pav", cat: "nashik" },
  { label: "Biryani", cat: "biryani" },
  { label: "Dosa", cat: "south" },
  { label: "Chaat", cat: "street" },
  { label: "Desserts", cat: "dessert" },
];

function RevealLine({ children, delay, className }: { children: React.ReactNode; delay: number; className?: string }) {
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        initial={{ y: "112%", rotate: 3 }}
        animate={{ y: "0%", rotate: 0 }}
        transition={{ delay, duration: 1, ease: EASE }}
        className={`block origin-left ${className ?? ""}`}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero({ onExplore }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const [query, setQuery] = useState("");
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim().toLowerCase();
    const hit = CUISINE_FILTERS.find(
      (f) => f.id !== "all" && (f.label.toLowerCase().includes(q) || q.includes(f.id)),
    );
    onExplore(hit ? hit.id : "all");
  };

  return (
    <section ref={ref} id="top" data-testid="hero-section" className="relative flex min-h-svh items-end overflow-hidden">
      <motion.div style={reduce ? undefined : { y: videoY, scale: videoScale }} className="absolute inset-0">
        <video
          data-testid="hero-video"
          className="h-full w-full object-cover"
          src="/hero-video.mp4"
          poster="/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,10,6,0.62)_0%,rgba(15,10,6,0.28)_48%,rgba(15,10,6,0.86)_100%)]" />

      {!reduce && (
        <>
          <motion.div
            className="absolute right-[12%] top-[22%] hidden h-16 w-16 rounded-full bg-sun/90 blur-[1px] md:block"
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-[8%] top-[30%] hidden h-10 w-10 rounded-full bg-leaf/80 blur-[1px] md:block"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <motion.div style={reduce ? undefined : { opacity: fade }} className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-36 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: EASE }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md"
          data-testid="hero-location-pill"
        >
          <MapPin className="size-3.5 text-sun" />
          Now delivering across Nashik
        </motion.div>

        <h1 className="font-heading text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
          <RevealLine delay={0.25}>Nashik's</RevealLine>
          <RevealLine delay={0.37}>
            <span className="text-sun">Good Food,</span>
          </RevealLine>
          <RevealLine delay={0.49}>
            <span className="font-script font-medium italic text-brand-soft">delivered happier.</span>
          </RevealLine>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8, ease: EASE }}
          className="mt-5 max-w-xl text-base text-orange-100/90 sm:text-lg"
          data-testid="hero-subtitle"
        >
          From Sadhana's fiery misal to matka biryani at midnight — Foodysh brings 350+ of Nashik's
          favourite kitchens to your doorstep, hot and fast.
        </motion.p>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: EASE }}
          className="mt-8 flex max-w-xl items-center gap-2 rounded-full border border-white/20 bg-white/95 p-2 shadow-2xl backdrop-blur"
          data-testid="hero-search-form"
        >
          <Search className="ml-3 size-5 shrink-0 text-brand" />
          <input
            data-testid="hero-search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Craving misal, biryani, dosa…?"
            className="w-full bg-transparent text-sm font-medium text-stone-800 outline-none placeholder:text-stone-400 sm:text-base"
          />
          <button
            type="submit"
            data-testid="hero-search-button"
            className="shrink-0 rounded-full bg-brand px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-brand-dark hover:shadow-[0_10px_24px_rgba(255,92,26,0.4)] active:scale-95"
          >
            Find Food
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="mt-4 flex flex-wrap items-center gap-2"
        >
          {CHIPS.map((c) => (
            <button
              key={c.cat}
              data-testid={`hero-chip-${c.cat}`}
              onClick={() => onExplore(c.cat)}
              className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur transition-colors hover:bg-sun hover:text-stone-900"
            >
              {c.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.8, ease: EASE }}
          className="mt-10 flex flex-wrap gap-3"
          data-testid="hero-stats"
        >
          {[
            { icon: UtensilsCrossed, text: "350+ Nashik restaurants" },
            { icon: Zap, text: "22 min avg delivery" },
            { icon: Star, text: "4.9/5 foodies rating" },
          ].map((s) => (
            <div
              key={s.text}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur"
            >
              <s.icon className="size-4 text-sun" />
              {s.text}
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-white/70"
      >
        <ChevronDown className="size-6" />
      </motion.div>
    </section>
  );
}
