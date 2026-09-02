import { Header } from "@/components/ui/Header";
import { MapPin, Phone, Clock } from "lucide-react";

export default function LocationPage() {
  return (
    <>
      <Header />
      <main className="flex-1 min-h-screen bg-[var(--color-brand-obsidian)] pt-8 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl text-[var(--color-brand-ivory)] mb-4">Location & Hours</h1>
            <div className="w-16 h-1 bg-[var(--color-brand-gold)] mx-auto"></div>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[var(--color-brand-surface)] p-8 rounded-2xl border border-white/5 shadow-xl">
              <h2 className="font-display text-2xl text-[var(--color-brand-ivory)] mb-8">Visit El Cardo</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-brand-gold)]/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-[var(--color-brand-gold)] w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-ui font-bold text-[var(--color-brand-ivory)] text-sm uppercase tracking-wider mb-2">Address</h3>
                    <p className="font-ui text-[var(--color-brand-ivory)]/70 leading-relaxed">
                      House 01, Road 03, Block G,<br />
                      Banasree, Dhaka 1219<br />
                      Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-brand-gold)]/10 flex items-center justify-center shrink-0">
                    <Clock className="text-[var(--color-brand-gold)] w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <h3 className="font-ui font-bold text-[var(--color-brand-ivory)] text-sm uppercase tracking-wider mb-4">Opening Hours</h3>
                    <ul className="w-full max-w-sm space-y-3">
                      <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-white/5 pb-3 gap-1">
                        <span className="font-ui text-xs uppercase tracking-[0.2em] text-[var(--color-brand-ivory)]/50">Monday - Thursday</span>
                        <span className="font-display text-[var(--color-brand-ivory)] tracking-wide">12:00 PM - 11:00 PM</span>
                      </li>
                      <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-white/5 pb-3 gap-1">
                        <span className="font-ui text-xs uppercase tracking-[0.2em] text-[var(--color-brand-ivory)]/50">Friday</span>
                        <span className="font-display text-[var(--color-brand-ivory)] tracking-wide">02:00 PM - 11:30 PM</span>
                      </li>
                      <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end pb-1 gap-1">
                        <span className="font-ui text-xs uppercase tracking-[0.2em] text-[var(--color-brand-ivory)]/50">Saturday - Sunday</span>
                        <span className="font-display text-[var(--color-brand-ivory)] tracking-wide">12:00 PM - 11:30 PM</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-brand-gold)]/10 flex items-center justify-center shrink-0">
                    <Phone className="text-[var(--color-brand-gold)] w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-ui font-bold text-[var(--color-brand-ivory)] text-sm uppercase tracking-wider mb-2">Contact</h3>
                    <p className="font-ui text-[var(--color-brand-ivory)]/70">
                      <a href="tel:+8801537379794" className="hover:text-[var(--color-brand-gold)] transition-colors">+880 1537-379794</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-brand-surface)] rounded-2xl overflow-hidden min-h-[400px] border border-white/5 shadow-xl relative">
              <iframe
                src="https://maps.google.com/maps?q=El%20Cardo%20House%2001%20Road%2003%20Block%20G%20Banasree&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
