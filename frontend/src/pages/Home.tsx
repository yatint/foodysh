import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import Marquee from "@/components/landing/Marquee";
import Cuisines from "@/components/landing/Cuisines";
import Restaurants from "@/components/landing/Restaurants";
import HowItWorks from "@/components/landing/HowItWorks";
import AppDownload from "@/components/landing/AppDownload";
import Footer from "@/components/landing/Footer";

export default function Home() {
  const [cuisine, setCuisine] = useState("all");
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09 });
    lenisRef.current = lenis;
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = (id: string) => {
    lenisRef.current?.scrollTo(id, { offset: id === "#top" ? 0 : -70, duration: 1.4 });
  };

  const explore = (category: string) => {
    setCuisine(category);
    scrollTo("#cuisines");
  };

  return (
    <div className="min-h-screen bg-cream font-sans text-stone-800 antialiased">
      <Nav onNavigate={scrollTo} />
      <main>
        <Hero onExplore={explore} />
        <Marquee />
        <Cuisines filter={cuisine} onFilterChange={setCuisine} />
        <Restaurants />
        <HowItWorks />
        <AppDownload />
      </main>
      <Footer onNavigate={scrollTo} />
      <Toaster position="bottom-right" richColors />
    </div>
  );
}
