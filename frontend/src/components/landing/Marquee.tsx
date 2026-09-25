import { useReducedMotion } from "motion/react";
import { Droplet } from "lucide-react";
import { MARQUEE_ITEMS } from "@/data/content";

export default function Marquee() {
  const reduce = useReducedMotion();
  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div data-testid="marquee-ribbon" className="relative z-20 -my-5 -rotate-[1.4deg] scale-[1.02] overflow-hidden border-y-4 border-forest bg-brand py-4 shadow-[0_18px_40px_rgba(255,92,26,0.25)]">
      <div
        className="flex w-max items-center gap-8 pr-8"
        style={reduce ? undefined : { animation: "marquee 46s linear infinite" }}
      >
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap font-heading text-lg font-extrabold uppercase tracking-wide text-white">
            {item}
            <Droplet className="size-4 fill-sun text-sun" />
          </span>
        ))}
      </div>
    </div>
  );
}
