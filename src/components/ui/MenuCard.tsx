import { MenuItem } from "@/types";
import { Flame, Star } from "lucide-react";

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="relative bg-[var(--color-brand-surface)]/80 backdrop-blur-md rounded-2xl overflow-hidden border border-white/5 hover:border-[var(--color-brand-gold)]/40 transition-all duration-300 group flex flex-col h-full shadow-lg hover:shadow-[0_8px_30px_rgb(201,164,74,0.1)]">
      
      <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10">
        
        {/* Title and Price */}
        <div className="flex flex-row justify-between items-start mb-3 md:mb-4 gap-4">
          <div className="flex items-baseline gap-2 md:gap-3">
            <span className="font-display font-normal text-base md:text-lg text-[var(--color-brand-gold)] shrink-0">
              {String(item.serial).padStart(2, '0')}.
            </span>
            <h3 className="font-display font-medium text-lg md:text-xl text-[var(--color-brand-ivory)] group-hover:text-[var(--color-brand-gold)] transition-colors leading-tight">
              {item.name}
            </h3>
          </div>
          <span className="font-ui font-medium text-lg md:text-xl text-[var(--color-brand-gold)] whitespace-nowrap shrink-0">
            ৳{item.price}
          </span>
        </div>

        {/* Description */}
        <p className="text-[var(--color-brand-ivory)]/50 text-sm mb-4 md:mb-6 font-ui font-light flex-grow leading-relaxed">
          {item.description}
        </p>

        {/* Badges Container - Moved below description */}
        {(item.isPopular || item.isSpicy) && (
          <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
            {item.isPopular && (
              <div className="flex items-center gap-1.5 bg-[var(--color-brand-gold)]/10 text-[var(--color-brand-gold)] text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-[var(--color-brand-gold)]/20">
                <Star className="w-3 h-3 fill-current" />
                <span>Popular</span>
              </div>
            )}
            {item.isSpicy && (
              <div className="flex items-center gap-1.5 bg-red-500/10 text-red-400 text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-red-500/20">
                <Flame className="w-3 h-3" />
                <span>Spicy</span>
              </div>
            )}
          </div>
        )}
        
        {/* Variants handling if any */}
        {item.variants && item.variants.length > 0 && (
          <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-white/5">
            <h4 className="font-ui text-[10px] uppercase tracking-[0.2em] text-[var(--color-brand-gold)]/70">Options</h4>
            <div className="space-y-2">
              {item.variants.map((variant) => (
                <div key={variant.id} className="flex justify-between items-center text-sm font-ui group/variant hover:bg-white/5 p-2 rounded-md transition-colors -mx-2">
                  <span className="text-[var(--color-brand-ivory)]/70 pl-2">{variant.label}</span>
                  <span className="text-[var(--color-brand-gold)] pr-2">৳{variant.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
