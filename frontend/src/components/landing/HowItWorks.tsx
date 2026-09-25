import { motion } from "motion/react";
import { UtensilsCrossed, Zap, Smile, CloudSun, Handshake, Leaf, TicketPercent } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const STEPS = [
  {
    icon: UtensilsCrossed,
    step: "01",
    title: "Pick your craving",
    text: "Browse misal to matka biryani from 350+ curated Nashik kitchens.",
    color: "bg-brand-soft text-brand-dark",
  },
  {
    icon: Zap,
    step: "02",
    title: "Lightning dispatch",
    text: "Live GPS tracking from the kadhai to your doorstep — 22 minutes, average.",
    color: "bg-sun-soft text-yellow-700",
  },
  {
    icon: Smile,
    step: "03",
    title: "Relish & smile",
    text: "Steaming hot, spill-proof, happiness guaranteed. Every single order.",
    color: "bg-leaf-soft text-forest",
  },
];

const PERKS = [
  { icon: CloudSun, title: "Zero monsoon surge", text: "Rain in Nashik never rains on your dinner plans." },
  { icon: Handshake, title: "Fair to local kitchens", text: "Direct partnerships, honest commissions, happier restaurants." },
  { icon: Leaf, title: "Eco thermal bags", text: "Insulated, reusable delivery bags keep food hot, planet cool." },
  { icon: TicketPercent, title: "Food fest passes", text: "Exclusive entry to Nashik food festivals, only on Foodysh." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" data-testid="how-it-works-section" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="text-center"
      >
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand" data-testid="how-it-works-overline">
          Ridiculously simple
        </p>
        <h2 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
          Three steps to <span className="font-script font-medium italic text-leaf">happy.</span>
        </h2>
      </motion.div>

      <div className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8" data-testid="steps-grid">
        <div className="absolute left-[16%] right-[16%] top-10 hidden border-t-2 border-dashed border-orange-200 md:block" />
        {STEPS.map((s, i) => (
          <motion.div
            key={s.step}
            data-testid={`step-card-${s.step}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: EASE }}
            className="relative text-center"
          >
            <div className={`relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-[1.75rem] ${s.color} rotate-3 shadow-lg transition-transform duration-300 hover:rotate-0 hover:scale-105`}>
              <s.icon className="size-9" />
            </div>
            <p className="mt-5 font-script text-lg italic text-brand">{s.step}</p>
            <h3 className="mt-1 font-heading text-xl font-extrabold text-stone-900">{s.title}</h3>
            <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-stone-500">{s.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-testid="perks-grid">
        {PERKS.map((p, i) => (
          <motion.div
            key={p.title}
            data-testid={`perk-${i}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
            whileHover={{ y: -6 }}
            className="rounded-3xl bg-white p-6 ring-1 ring-orange-100 transition-shadow hover:shadow-[0_16px_40px_rgba(255,92,26,0.1)]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-forest text-sun">
              <p.icon className="size-5" />
            </div>
            <h3 className="mt-4 font-heading text-base font-extrabold text-stone-900">{p.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-stone-500">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
