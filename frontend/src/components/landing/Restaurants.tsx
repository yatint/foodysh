import { useState } from "react";
import { motion } from "motion/react";
import { Clock, Heart, MapPin, ShieldCheck, Star } from "lucide-react";
import { toast } from "sonner";
import { RESTAURANTS } from "@/data/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Restaurants() {
  const [favs, setFavs] = useState<Set<string>>(new Set());

  const toggleFav = (id: string, name: string) => {
    setFavs((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        toast(`Removed ${name} from favourites`);
      } else {
        next.add(id);
        toast.success(`${name} added to favourites!`);
      }
      return next;
    });
  };

  return (
    <section id="restaurants" data-testid="restaurants-section" className="relative overflow-hidden bg-[#FFF4ED] py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sun/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-leaf/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-leaf" data-testid="restaurants-overline">
            Hand-picked & hygiene-checked
          </p>
          <h2 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
            Nashik's most-loved <span className="font-script font-medium italic text-brand">kitchens.</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-testid="restaurant-grid">
          {RESTAURANTS.map((r, i) => (
            <motion.article
              key={r.id}
              data-testid={`restaurant-card-${r.id}`}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: (i % 3) * 0.1, ease: EASE }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl bg-white ring-1 ring-orange-100 transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(234,88,12,0.16)]"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={r.image}
                  alt={r.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 rounded-full bg-sun px-3 py-1 text-xs font-extrabold text-stone-900 shadow">
                  {r.offer}
                </span>
                <button
                  data-testid={`favourite-button-${r.id}`}
                  onClick={() => toggleFav(r.id, r.name)}
                  aria-label={`Favourite ${r.name}`}
                  className="absolute right-4 top-4 rounded-full bg-white/90 p-2.5 backdrop-blur transition-transform duration-300 hover:scale-110 active:scale-90"
                >
                  <Heart
                    className={`size-4 transition-colors ${favs.has(r.id) ? "fill-brand text-brand" : "text-stone-500"}`}
                  />
                </button>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-lg font-extrabold leading-snug text-stone-900">{r.name}</h3>
                  <span className="flex shrink-0 items-center gap-1 rounded-xl bg-leaf px-2.5 py-1 text-sm font-extrabold text-white">
                    {r.rating} <Star className="size-3 fill-white" />
                  </span>
                </div>
                <p className="mt-1.5 text-sm font-medium text-stone-500">{r.cuisines.join(" • ")}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-stone-600">
                  <span className="flex items-center gap-1 rounded-full bg-brand-soft px-2.5 py-1 text-brand-dark">
                    <Clock className="size-3" /> {r.time}
                  </span>
                  <span className="flex items-center gap-1 rounded-full bg-stone-100 px-2.5 py-1">
                    <MapPin className="size-3" /> {r.area}
                  </span>
                  <span className="flex items-center gap-1 rounded-full bg-leaf-soft px-2.5 py-1 text-forest">
                    <ShieldCheck className="size-3" /> Hygiene verified
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
