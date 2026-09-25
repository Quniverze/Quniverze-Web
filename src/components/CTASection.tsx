import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CTA_CONTENT } from '../data/content';

interface CTASectionProps {
  onStartProject: () => void;
  onExploreProducts: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onStartProject, onExploreProducts }) => {
  return (
    <section id="contact" className="relative w-full bg-[#12151C] text-[#F4F6F9] overflow-hidden border-b border-[#232834]">
      {/* Background Mountain Panorama */}
      <img
        src={CTA_CONTENT.image}
        alt="Dramatic mountain panorama with lone traveler silhouette on a ridge"
        loading="lazy"
        width={1800}
        height={600}
        className="absolute inset-0 w-full h-full object-cover object-[center_60%] opacity-45 contrast-125 saturate-[0.8]"
      />

      {/* Editorial Gradients: Dark on left for text legibility, subtle fade across */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#12151C] via-[#12151C]/80 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#12151C] via-transparent to-[#12151C]/70 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F6F9] leading-[1.12]">
              {CTA_CONTENT.headline}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#F4F6F9]/80 max-w-xl font-normal leading-relaxed">
              {CTA_CONTENT.subtext}
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onStartProject}
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg bg-white text-[#12151C] hover:bg-neutral-100 active:scale-[0.98] transition-all duration-150 shadow-sm"
              >
                <span>{CTA_CONTENT.primaryBtn.replace(' →', '')}</span>
                <ArrowRight className="w-4 h-4 text-[#3B82F6] group-hover:translate-x-1 transition-transform duration-150" />
              </button>

              <button
                type="button"
                onClick={onExploreProducts}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium rounded-lg bg-white/5 text-[#F4F6F9] border border-white/20 hover:bg-white/10 active:scale-[0.98] transition-all duration-150 backdrop-blur-sm"
              >
                <span>{CTA_CONTENT.secondaryBtn}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Typographic Signature */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center pt-6 lg:pt-0 select-none">
            <div className="text-left lg:text-right space-y-1 text-sm sm:text-base font-normal text-white/85">
              {CTA_CONTENT.tagline.lines.map((line) => (
                <div key={line} className="tracking-tight">{line}</div>
              ))}
              <div className="pt-2 text-[#3B82F6] font-mono text-base font-bold">{CTA_CONTENT.tagline.divider}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
