"use client";

import { useState, useMemo } from "react";
import { MenuItem } from "@/types";
import { MenuCard } from "@/components/ui/MenuCard";
import { Search } from "lucide-react";

interface MenuClientProps {
  initialData: MenuItem[];
  initialCuisine?: string;
}

export function MenuClient({ initialData, initialCuisine = "all" }: MenuClientProps) {
  const [activeCuisine, setActiveCuisine] = useState(initialCuisine);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Get unique categories for the active cuisine
  const categories = useMemo(() => {
    let filtered = initialData;
    if (activeCuisine !== "all") {
      filtered = filtered.filter(item => item.cuisine === activeCuisine);
    }
    const cats = new Set(filtered.map(item => item.category));
    return ["All", ...Array.from(cats)];
  }, [activeCuisine, initialData]);

  // Filter items based on all criteria
  const filteredItems = useMemo(() => {
    return initialData.filter(item => {
      // 1. Filter by cuisine
      if (activeCuisine !== "all" && item.cuisine !== activeCuisine) return false;
      
      // 2. Filter by category
      if (activeCategory !== "All" && item.category !== activeCategory) return false;
      
      // 3. Filter by search
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
        );
      }
      
      return true;
    });
  }, [initialData, activeCuisine, activeCategory, searchQuery]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Cuisine Tabs - Apple Style Segmented Control */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-[var(--color-brand-surface)]/50 backdrop-blur-xl p-1.5 rounded-full border border-white/5 overflow-x-auto hide-scrollbar max-w-full">
          {["all", "thai", "indian", "cafe"].map(cuisine => (
            <button
              key={cuisine}
              onClick={() => {
                setActiveCuisine(cuisine);
                setActiveCategory("All");
              }}
              className={`relative px-4 md:px-8 py-2.5 rounded-full font-ui text-xs md:text-sm font-medium tracking-wide transition-all duration-300 whitespace-nowrap ${
                activeCuisine === cuisine 
                  ? "bg-white/10 text-white shadow-sm" 
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              {cuisine === "all" ? "Full Menu" : cuisine === "thai" ? "Thai & Asian" : cuisine === "indian" ? "South Indian" : "Drinks & Desserts"}
            </button>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-md mx-auto mb-8 relative">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none z-10">
          <Search className="h-4 w-4 text-[var(--color-brand-ivory)]/50" strokeWidth={1.5} />
        </div>
        <input
          type="text"
          placeholder="Search dishes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[var(--color-brand-surface)]/50 backdrop-blur-xl border border-white/5 hover:border-white/10 focus:border-[var(--color-brand-gold)]/50 text-[var(--color-brand-ivory)] rounded-full pl-11 pr-4 py-2.5 font-ui text-sm transition-colors placeholder:text-white/30 focus:outline-none focus:ring-4 focus:ring-[var(--color-brand-gold)]/10"
        />
      </div>

      {/* Category Chips */}
      <div className="w-full overflow-x-auto pb-4 mb-8 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar">
        <div className="flex gap-2 md:justify-center min-w-max">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full font-ui text-sm transition-colors ${
                activeCategory === cat
                  ? "bg-[var(--color-brand-gold)] text-[var(--color-brand-obsidian)] font-medium"
                  : "bg-[var(--color-brand-surface)] text-[var(--color-brand-ivory)]/70 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-[var(--color-brand-ivory)]/50 font-ui text-lg mb-4">No dishes found matching your criteria.</p>
          <button 
            onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
            className="text-[var(--color-brand-gold)] hover:underline font-ui text-sm uppercase tracking-wider"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* VAT Notice */}
      <div className="flex justify-center mt-12 mb-4">
        <p className="font-ui text-[10px] md:text-xs text-[var(--color-brand-gold)]/60 uppercase tracking-[0.15em] text-center">
          * 5% VAT will be added to the listed prices.
        </p>
      </div>
    </div>
  );
}
