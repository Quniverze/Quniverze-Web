import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CTA_CONTENT } from '../data/content';

interface CTASectionProps {
  onStartConversation: () => void;
  onLearnMore: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onStartConversation, onLearnMore }) => {
  return (
    <section className="relative w-full bg-[#0E131B] text-white overflow-hidden">
      {/* Background Mountain Panorama */}
      <img
        src="/images/cta-summit.jpg"
        alt="Dramatic mountain panorama with lone traveler silhouette on a ridge"
        loading="lazy"
        width={1800}
        height={600}
        className="absolute inset-0 w-full h-full object-cover object-[center_60%] opacity-55 contrast-125 saturate-[0.85]"
      />

      {/* Editorial Gradients: strong dark on left for text legibility, transparent on right for mountain & silhouette */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E131B] via-[#0E131B]/75 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E131B] via-transparent to-[#0E131B]/60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              {CTA_CONTENT.headline}
            </h2>

            <p className="mt-3.5 text-base sm:text-lg text-neutral-300 max-w-xl font-normal leading-relaxed">
              {CTA_CONTENT.subtext}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onStartConversation}
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg bg-white text-[#111827] hover:bg-neutral-100 active:scale-[0.98] transition-all duration-150 shadow-sm"
              >
                <span>{CTA_CONTENT.primaryBtn.replace(' →', '')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
              </button>

              <button
                type="button"
                onClick={onLearnMore}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium rounded-lg bg-white/5 text-white border border-white/20 hover:bg-white/10 active:scale-[0.98] transition-all duration-150 backdrop-blur-sm"
              >
                <span>{CTA_CONTENT.secondaryBtn}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Typographic Signature */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center pt-6 lg:pt-0 select-none">
            <div className="text-left lg:text-right space-y-1 text-sm sm:text-base font-normal text-white/85">
              {CTA_CONTENT.tagline.lines.map((line) => (
                <div key={line}>{line}</div>
              ))}
              <div className="pt-2 text-white/50">{CTA_CONTENT.tagline.divider}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
