import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import type { ClientWorkItem } from '../data/content';

interface ClientCardProps {
  item: ClientWorkItem;
  onSelect: (item: ClientWorkItem) => void;
}

export const ClientCard: React.FC<ClientCardProps> = ({ item, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(item)}
      className="group relative h-[420px] sm:h-[460px] rounded-2xl overflow-hidden cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-black/10 flex flex-col justify-between p-6 sm:p-7 transition-all duration-300"
    >
      {/* Background Image with modern lazy loading */}
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        width={600}
        height={800}
        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
      />

      {/* Dark Vignette Overlay for Crisp Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

      {/* Top Header Row */}
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
            {item.title}
          </h3>
          <p className="text-xs text-white/70 mt-0.5 font-normal">
            {item.category}
          </p>
        </div>

        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-white/20 group-hover:scale-105 transition-all">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* Middle Tagline */}
      <div className="relative z-10 my-auto py-6">
        <p className="text-lg sm:text-xl font-medium text-white/95 leading-snug tracking-tight max-w-[240px]">
          {item.tagline}
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 pt-4 border-t border-white/15 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/90 group-hover:text-white transition-colors">
          <span>{item.ctaText.replace(' →', '')}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-150" />
        </span>
      </div>
    </div>
  );
};
