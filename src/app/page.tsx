import { Header } from "@/components/ui/Header";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[64vh] md:h-[78vh] flex items-center justify-center overflow-hidden bg-[var(--color-logo-espresso)]">
          {/* Background overlay for cinematic effect */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          
          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-[var(--color-brand-ivory)] mb-6 drop-shadow-xl">
              Taste the True Essence
            </h1>
            <p className="font-script text-2xl md:text-4xl text-[var(--color-brand-gold)] mb-8 opacity-90 drop-shadow-md">
              Live Music Lounge
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                href="/menu"
                className="px-8 py-3 bg-[var(--color-brand-gold)] text-[var(--color-brand-obsidian)] font-bold tracking-widest text-sm uppercase rounded-md hover:bg-[#d4b465] transition-colors flex items-center justify-center gap-2"
              >
                Explore Menu <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/location"
                className="px-8 py-3 border border-[var(--color-brand-gold)] text-[var(--color-brand-gold)] font-bold tracking-widest text-sm uppercase rounded-md hover:bg-[var(--color-brand-gold)]/10 transition-colors flex items-center justify-center gap-2"
              >
                Get Directions <MapPin className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Cuisine Gateway */}
        <section className="py-20 px-4 bg-[var(--color-brand-obsidian)]">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl text-[var(--color-brand-ivory)] mb-4">Discover Our Cuisines</h2>
              <div className="w-24 h-1 bg-[var(--color-brand-gold)] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {/* Thai Card */}
              <Link href="/menu?cuisine=thai" className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--color-brand-surface)] flex items-end">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 transition-opacity group-hover:opacity-90"></div>
                <div className="relative z-20 p-6 md:p-8 w-full">
                  <h3 className="font-display text-xl md:text-2xl text-[var(--color-brand-ivory)] mb-1 md:mb-2">Craving Southeast?</h3>
                  <p className="text-[var(--color-brand-gold)] text-xs md:text-sm tracking-wider uppercase font-semibold">Thai & Asian Fusion</p>
                </div>
              </Link>
              
              {/* Indian Card */}
              <Link href="/menu?cuisine=indian" className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--color-brand-surface)] flex items-end">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 transition-opacity group-hover:opacity-90"></div>
                <div className="relative z-20 p-6 md:p-8 w-full">
                  <h3 className="font-display text-xl md:text-2xl text-[var(--color-brand-ivory)] mb-1 md:mb-2">Craving South?</h3>
                  <p className="text-[var(--color-brand-gold)] text-xs md:text-sm tracking-wider uppercase font-semibold">South Indian Cuisine</p>
                </div>
              </Link>

              {/* Cafe Card */}
              <Link href="/menu?cuisine=cafe" className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--color-brand-surface)] flex items-end">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 transition-opacity group-hover:opacity-90"></div>
                <div className="relative z-20 p-6 md:p-8 w-full">
                  <h3 className="font-display text-xl md:text-2xl text-[var(--color-brand-ivory)] mb-1 md:mb-2">Need a Sip?</h3>
                  <p className="text-[var(--color-brand-gold)] text-xs md:text-sm tracking-wider uppercase font-semibold">Drinks & Desserts</p>
                </div>
              </Link>

              {/* All Menu */}
              <Link href="/menu" className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--color-brand-surface)] border border-[var(--color-brand-gold)]/20 flex items-center justify-center">
                <div className="relative z-20 p-6 md:p-8 text-center">
                  <h3 className="font-display text-xl md:text-2xl text-[var(--color-brand-gold)] mb-3 md:mb-4">Explore Full Menu</h3>
                  <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--color-brand-gold)]/10 text-[var(--color-brand-gold)] group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
