import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "motion/react";
import { Star, Send, Smartphone } from "lucide-react";
import { toast } from "sonner";

const EASE = [0.22, 1, 0.36, 1] as const;

function AppleMark() {
  return (
    <svg viewBox="0 0 384 512" className="size-5 fill-current" aria-hidden>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function PlayMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden>
      <path d="M3.6 2.3c-.4.2-.6.6-.6 1.1v17.2c0 .5.3.9.7 1.1l.1.1 9.6-9.7v-.2L3.7 2.2l-.1.1z" opacity=".9" />
      <path d="M16.7 16.2 13.4 13 3.6 22.6c.4.2 1 .2 1.6-.1l11.5-6.3z" opacity=".75" />
      <path d="m20.4 10.9-3.6-2-3.8 3.9 3.8 3.8 3.7-2c1.1-.6 1.1-1.7 0-2.2l-.1-.1z" opacity=".6" />
      <path d="M3.6 2.3c.4-.2 1-.2 1.6.1l11.5 6.4-3.3 3.3L3.6 2.3z" opacity=".9" />
    </svg>
  );
}

export default function AppDownload() {
  const [phone, setPhone] = useState("");

  const sendLink = (e: FormEvent) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(phone.trim())) {
      toast.error("Enter a valid 10-digit mobile number");
      return;
    }
    toast.success("App link sent to your phone!", { description: `Foodysh app link is on its way to +91 ${phone}` });
    setPhone("");
  };

  return (
    <section id="get-app" data-testid="app-download-section" className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
      <div className="grain relative overflow-hidden rounded-[3rem] bg-forest-deep px-6 py-16 sm:px-12 lg:px-16">
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-leaf/25 blur-3xl" />

        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-sun" data-testid="app-overline">
              Pocket-sized Nashik
            </p>
            <h2 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              The whole city, <span className="font-script font-medium italic text-sun">one tap away.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-green-100/80 sm:text-base">
              Order ahead, track your rider live, and unlock app-only treats from Nashik's best kitchens.
              Rated 4.8 by 50,000+ foodies.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                data-testid="appstore-button"
                onClick={() => toast.success("Foodysh for iOS is on its way!", { description: "We'll email you the TestFlight invite." })}
                className="flex items-center gap-3 rounded-2xl bg-white px-5 py-3 text-stone-900 transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <AppleMark />
                <span className="text-left leading-tight">
                  <span className="block text-[10px] font-semibold uppercase tracking-wide text-stone-500">Download on the</span>
                  <span className="block font-heading text-sm font-extrabold">App Store</span>
                </span>
              </button>
              <button
                data-testid="playstore-button"
                onClick={() => toast.success("Foodysh for Android is on its way!", { description: "We'll email you the Play Store beta link." })}
                className="flex items-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-5 py-3 text-white backdrop-blur transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <PlayMark />
                <span className="text-left leading-tight">
                  <span className="block text-[10px] font-semibold uppercase tracking-wide text-green-100/70">Get it on</span>
                  <span className="block font-heading text-sm font-extrabold">Google Play</span>
                </span>
              </button>
              <span className="flex items-center gap-1.5 rounded-full bg-sun/15 px-3 py-1.5 text-xs font-bold text-sun" data-testid="app-rating-badge">
                <Star className="size-3.5 fill-sun" /> 4.8 • 50k+ reviews
              </span>
            </div>

            <form onSubmit={sendLink} className="mt-8 flex max-w-md items-center gap-2 rounded-full bg-white/10 p-1.5 ring-1 ring-white/20 backdrop-blur" data-testid="sms-form">
              <Smartphone className="ml-3 size-4 shrink-0 text-green-100/70" />
              <input
                data-testid="sms-input"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                inputMode="numeric"
                placeholder="10-digit mobile number"
                className="w-full bg-transparent text-sm font-medium text-white outline-none placeholder:text-green-100/50"
              />
              <button
                type="submit"
                data-testid="sms-send-button"
                className="flex shrink-0 items-center gap-1.5 rounded-full bg-sun px-4 py-2.5 text-xs font-extrabold text-stone-900 transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <Send className="size-3.5" /> Get app link
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 48, rotate: 6 }}
            whileInView={{ opacity: 1, y: 0, rotate: 3 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative mx-auto w-64 sm:w-72"
            data-testid="app-phone-mockup"
          >
            <div className="overflow-hidden rounded-[2.5rem] border-[10px] border-stone-900 bg-cream shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between bg-brand px-4 pb-3 pt-4">
                <img src="/logo.png" alt="Foodysh" className="h-7 w-auto rounded-lg bg-white/95 px-1.5 py-0.5" />
                <span className="rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-bold text-white">Nashik</span>
              </div>
              <div className="mx-3 mt-3 rounded-full bg-stone-100 px-3 py-2 text-[10px] font-semibold text-stone-400">
                Search "misal pav"…
              </div>
              <img
                src="https://images.pexels.com/photos/12392915/pexels-photo-12392915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Masala dosa on Foodysh app"
                loading="lazy"
                className="mx-3 mt-3 h-36 w-[calc(100%-1.5rem)] rounded-2xl object-cover"
              />
              <div className="px-4 py-3">
                <p className="font-heading text-xs font-extrabold text-stone-900">Crispy Masala Dosa</p>
                <p className="text-[10px] font-semibold text-stone-500">Aaswad South House • 20 min</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="rounded-full bg-leaf-soft px-2 py-0.5 text-[10px] font-bold text-forest">4.7 ★</span>
                  <span className="font-heading text-sm font-extrabold text-brand">₹140</span>
                </div>
              </div>
              <div className="mx-3 mb-4 rounded-full bg-forest py-2 text-center text-[10px] font-extrabold text-white">
                Order in 1 tap
              </div>
            </div>
            <div className="absolute -right-6 top-10 animate-float rounded-2xl bg-sun px-3 py-2 text-xs font-extrabold text-stone-900 shadow-xl">
              50% OFF
            </div>
            <div className="absolute -left-8 bottom-16 animate-float-slow rounded-2xl bg-white px-3 py-2 text-xs font-extrabold text-forest shadow-xl">
              Arriving in 12 min
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
