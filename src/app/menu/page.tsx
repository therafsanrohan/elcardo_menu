import { Header } from "@/components/ui/Header";
import { MenuClient } from "@/features/menu/MenuClient";
import { menuData } from "@/lib/data";

// In Next.js 15, searchParams is asynchronous.
export default async function MenuPage(props: { searchParams: Promise<{ cuisine?: string }> }) {
  const searchParams = await props.searchParams;
  const initialCuisine = searchParams.cuisine === "thai" || searchParams.cuisine === "indian" 
    ? searchParams.cuisine 
    : "all";

  return (
    <>
      <Header />
      <main className="flex-1 min-h-screen bg-[var(--color-brand-obsidian)] pt-8 pb-20">
        <div className="container mx-auto px-4 mb-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-[var(--color-brand-ivory)] mb-4">Our Menu</h1>
          <div className="w-16 h-1 bg-[var(--color-brand-gold)] mx-auto mb-4"></div>
          <p className="font-ui text-[var(--color-brand-ivory)]/70 max-w-2xl mx-auto">
            Discover a curated selection of authentic Thai, Asian fusion, and South Indian delicacies.
          </p>
        </div>
        
        <MenuClient initialData={menuData} initialCuisine={initialCuisine} />
      </main>
    </>
  );
}
