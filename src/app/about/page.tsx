import { Header } from "@/components/ui/Header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 min-h-screen bg-[var(--color-brand-obsidian)] pt-8 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto mt-12 md:mt-24">
            <div className="text-center mb-20">
              <h1 className="font-display text-4xl md:text-6xl text-[var(--color-brand-ivory)] mb-6 tracking-tight">Our Story</h1>
              <p className="font-ui text-sm md:text-base tracking-[0.2em] uppercase text-[var(--color-brand-ivory)]/50">
                A Tale of Two Culinary Worlds
              </p>
            </div>

            <div className="space-y-16 font-ui text-[var(--color-brand-ivory)]/70 text-lg leading-relaxed">
              <p className="text-2xl md:text-3xl leading-snug text-center font-display text-[var(--color-brand-ivory)] mb-16">
                El Cardo brings together the vibrant spices of South India and the bold flavors of Southeast Asia, served in an immersive live music lounge setting.
              </p>

              <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
                <section className="space-y-6">
                  <h2 className="font-display text-2xl text-[var(--color-brand-ivory)] pb-4 border-b border-white/5">Culinary Journey</h2>
                  <p className="text-[var(--color-brand-ivory)]/60 text-base">
                    Our menu is a tale of two distinct culinary worlds. On one side, the rich, aromatic heritage of authentic South Indian cuisine—crafted with traditional spices, slow-cooked curries, and perfectly fired tandoor delicacies. 
                  </p>
                  <p className="text-[var(--color-brand-ivory)]/60 text-base">
                    On the other side, the dynamic and electrifying tastes of Thailand and Asian Fusion. From our signature Dumplings in Red Chili Oil to our wok-tossed Chow Mein and premium Fusion Platters, every dish is designed to excite the palate.
                  </p>
                </section>

                <section className="space-y-6">
                  <h2 className="font-display text-2xl text-[var(--color-brand-ivory)] pb-4 border-b border-white/5">The Lounge</h2>
                  <p className="text-[var(--color-brand-ivory)]/60 text-base">
                    More than just a dining destination, El Cardo is a sanctuary for those who appreciate good food paired with great ambiance. 
                  </p>
                  <p className="text-[var(--color-brand-ivory)]/60 text-base">
                    Our dark, cinematic lounge aesthetic provides the perfect backdrop for evenings spent enjoying live music, exceptional service, and memorable conversations.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
