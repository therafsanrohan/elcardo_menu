import { Header } from "@/components/ui/Header";
import { Info } from "lucide-react";

export default function OffersPage() {
  return (
    <>
      <Header />
      <main className="flex-1 min-h-screen bg-[var(--color-brand-obsidian)] pt-8 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl text-[var(--color-brand-ivory)] mb-4">Special Offers</h1>
            <div className="w-16 h-1 bg-[var(--color-brand-gold)] mx-auto mb-6"></div>
            <p className="font-ui text-[var(--color-brand-ivory)]/70 max-w-2xl mx-auto">
              Discover our latest deals and seasonal specials.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-[var(--color-brand-surface)] p-12 text-center rounded-sm border border-white/5">
            <h2 className="font-display text-2xl text-[var(--color-brand-ivory)] mb-4">No Active Offers</h2>
            <p className="font-ui text-[var(--color-brand-ivory)]/70">
              Check back later for exciting new deals and seasonal specials!
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
