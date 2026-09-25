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
      className="group relative h-[420px] sm:h-[460px] rounded-2xl overflow-hidden cursor-pointer border border-[#E5E7EB] flex flex-col justify-between p-7 sm:p-8 transition-all duration-300 hover:border-[#12151C]/40"
    >
      {/* Background Editorial Image */}
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        width={600}
        height={800}
        className="absolute inset-0 w-full h-full object-cover object-center grayscale-[15%] contrast-[1.05] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
      />

      {/* Dark Vignette Overlay for Crisp Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#12151C]/95 via-[#12151C]/45 to-[#12151C]/60 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

      {/* Top Header Row */}
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-white/60 block mb-1">
            {item.category}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {item.title}
          </h3>
        </div>

        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-[#3B82F6] group-hover:border-[#3B82F6] transition-all">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* Middle Tagline */}
      <div className="relative z-10 my-auto py-4">
        <p className="text-xl sm:text-2xl font-medium text-white/95 leading-snug tracking-tight max-w-[280px]">
          {item.tagline}
        </p>
      </div>

      {/* Bottom Row */}
      <div className="relative z-10 pt-4 border-t border-white/15 flex items-center justify-between">
        <span className="text-[11px] font-mono text-white/65 truncate max-w-[180px]">
          {item.businessType}
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/90 group-hover:text-[#3B82F6] transition-colors">
          <span>Explore project</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-150" />
        </span>
      </div>
    </div>
  );
};
