import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Clock, Star, Flame } from "lucide-react";
import { toast } from "sonner";
import { CUISINE_FILTERS, DISHES } from "@/data/content";
import type { Dish } from "@/data/content";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface CuisinesProps {
  filter: string;
  onFilterChange: (id: string) => void;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Cuisines({ filter, onFilterChange }: CuisinesProps) {
  const [active, setActive] = useState<Dish | null>(null);
  const dishes = filter === "all" ? DISHES : DISHES.filter((d) => d.category === filter);

  return (
    <section id="cuisines" data-testid="cuisines-section" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand" data-testid="cuisines-overline">
            What's cooking, Nashik?
          </p>
          <h2 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
            Cravings, <span className="font-script font-medium italic text-leaf">categorised.</span>
          </h2>
        </div>
        <p className="max-w-sm text-sm text-stone-500 sm:text-base">
          Tap a dish to peek inside. Every plate below ships from a real Nashik kitchen in under 30 minutes.
        </p>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-2" data-testid="cuisine-filters">
        {CUISINE_FILTERS.map((f) => (
          <button
            key={f.id}
            data-testid={`cuisine-filter-${f.id}`}
            onClick={() => onFilterChange(f.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 active:scale-95 ${
              filter === f.id
                ? "bg-forest text-white shadow-[0_8px_20px_rgba(15,81,37,0.3)]"
                : "bg-white text-stone-600 ring-1 ring-orange-100 hover:bg-brand-soft hover:text-brand-dark"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-testid="dish-grid">
        <AnimatePresence mode="popLayout">
          {dishes.map((d, i) => (
            <motion.button
              layout
              key={d.id}
              data-testid={`dish-card-${d.id}`}
              onClick={() => setActive(d)}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: EASE }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl bg-white text-left ring-1 ring-orange-100/80 transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(255,92,26,0.14)]"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-forest/90 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                  <Flame className="size-3 text-sun" />
                  {d.badge}
                </span>
                <span className="absolute bottom-4 right-4 rounded-full bg-sun px-3 py-1 font-heading text-sm font-extrabold text-stone-900">
                  {d.price}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-extrabold text-stone-900">{d.name}</h3>
                <p className="mt-0.5 text-sm font-medium text-stone-500">{d.restaurant}</p>
                <div className="mt-3 flex items-center gap-3 text-xs font-semibold text-stone-600">
                  <span className="flex items-center gap-1 rounded-full bg-leaf-soft px-2.5 py-1 text-forest">
                    <Star className="size-3 fill-forest" /> {d.rating}
                  </span>
                  <span className="flex items-center gap-1 rounded-full bg-brand-soft px-2.5 py-1 text-brand-dark">
                    <Clock className="size-3" /> {d.time}
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <Dialog open={active !== null} onOpenChange={(open: boolean) => { if (!open) setActive(null); }}>
        <DialogContent data-testid="dish-preview-dialog" className="overflow-hidden rounded-3xl p-0 sm:max-w-lg">
          {active && (
            <div>
              <div className="relative h-64">
                <img src={active.image} alt={active.name} className="h-full w-full object-cover" />
                <span className="absolute bottom-4 left-4 rounded-full bg-sun px-4 py-1.5 font-heading text-base font-extrabold text-stone-900">
                  {active.price}
                </span>
              </div>
              <div className="p-6">
                <DialogHeader>
                  <DialogTitle className="font-heading text-2xl font-extrabold text-stone-900">{active.name}</DialogTitle>
                  <DialogDescription className="text-sm font-semibold text-brand-dark">{active.restaurant}</DialogDescription>
                </DialogHeader>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{active.blurb}</p>
                <div className="mt-4 flex items-center gap-3 text-xs font-semibold">
                  <span className="flex items-center gap-1 rounded-full bg-leaf-soft px-3 py-1.5 text-forest">
                    <Star className="size-3 fill-forest" /> {active.rating} rated
                  </span>
                  <span className="flex items-center gap-1 rounded-full bg-brand-soft px-3 py-1.5 text-brand-dark">
                    <Clock className="size-3" /> {active.time} delivery
                  </span>
                </div>
                <button
                  data-testid="dish-notify-button"
                  onClick={() => {
                    toast.success(`We'll ping you the moment ${active.name} is orderable!`, {
                      description: "Foodysh ordering is launching very soon in Nashik.",
                    });
                    setActive(null);
                  }}
                  className="mt-6 w-full rounded-full bg-brand py-3.5 font-heading text-sm font-extrabold text-white transition-all duration-300 hover:bg-brand-dark active:scale-[0.98]"
                >
                  Notify me when ordering opens
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
