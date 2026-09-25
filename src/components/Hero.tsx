import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_CONTENT } from '../data/content';
import { NivaOpsLogo, CrmLogo, BovenLogo, IgccLogo, StayBLogo } from './BrandLogos';

interface HeroProps {
  onExploreProducts: () => void;
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onStartProject }) => {
  return (
    <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">
          {/* Left Column: Confident Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-between pt-2">
            <div>
              {/* Eyebrow */}
              <div className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#12151C]/60 mb-5">
                {HERO_CONTENT.eyebrow}
              </div>

              {/* Dominant Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-[#12151C] tracking-tight leading-[1.08] max-w-xl">
                We build software<br />
                for businesses.
              </h1>

              {/* Supporting Copy */}
              <p className="mt-6 sm:mt-7 text-base sm:text-lg text-[#12151C]/75 leading-relaxed max-w-lg font-normal">
                {HERO_CONTENT.supporting}
              </p>

              {/* Dual CTAs */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={onExploreProducts}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium rounded-lg bg-[#12151C] text-[#F4F6F9] hover:bg-[#232834] active:scale-[0.98] transition-all duration-150 shadow-sm"
                >
                  <span>{HERO_CONTENT.primaryCta}</span>
                  <ArrowRight className="w-4 h-4 text-[#3B82F6] group-hover:translate-x-0.5 transition-transform duration-150" />
                </button>

                <button
                  type="button"
                  onClick={onStartProject}
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium rounded-lg bg-white text-[#12151C] border border-[#E5E7EB] hover:border-[#12151C]/30 hover:bg-[#F4F6F9] active:scale-[0.98] transition-all duration-150"
                >
                  <span>{HERO_CONTENT.secondaryCta}</span>
                </button>
              </div>
            </div>

            {/* Lower Strip: Two-column Brand Architecture */}
            <div className="mt-14 sm:mt-20 pt-8 border-t border-[#E5E7EB]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6">
                {/* Column 1: Building Our Products */}
                <div className="sm:pr-6 sm:border-r border-[#E5E7EB]">
                  <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase text-[#12151C]/50 mb-0.5">
                    {HERO_CONTENT.lowerStrip.products.label}
                  </div>
                  <div className="text-xs text-[#12151C]/60 mb-4 font-normal">
                    {HERO_CONTENT.lowerStrip.products.sublabel}
                  </div>
                  <div className="flex flex-wrap items-center gap-6">
                    <NivaOpsLogo />
                    <CrmLogo />
                  </div>
                </div>

                {/* Column 2: Building For Our Clients */}
                <div className="sm:pl-2">
                  <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase text-[#12151C]/50 mb-0.5">
                    {HERO_CONTENT.lowerStrip.clients.label}
                  </div>
                  <div className="text-xs text-[#12151C]/60 mb-4 font-normal">
                    {HERO_CONTENT.lowerStrip.clients.sublabel}
                  </div>
                  <div className="flex flex-wrap items-center gap-6">
                    <BovenLogo />
                    <IgccLogo />
                    <StayBLogo />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Architectural Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[450px] sm:h-[540px] lg:h-full min-h-[480px] rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#E5E7EB]">
              {/* LCP Architectural Image */}
              <img
                src={HERO_CONTENT.image}
                alt="Modern architectural glass facade representing structured technology and systems"
                fetchPriority="high"
                width={800}
                height={1000}
                className="w-full h-full object-cover object-center grayscale-[15%] contrast-[1.05] hover:scale-[1.02] transition-transform duration-700 ease-out"
              />

              {/* Gradient Vignette for Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Floating Vertical Text Treatment */}
              <div className="absolute top-10 right-8 text-right text-white select-none">
                <div className="flex flex-col items-end space-y-1 text-sm sm:text-base font-medium tracking-tight text-white/95 drop-shadow-sm">
                  <span>Ideas</span>
                  <span>Systems</span>
                  <span>Growth</span>
                </div>
                <div className="w-6 h-[1.5px] bg-[#3B82F6] ml-auto mt-3" />
              </div>

              {/* Bottom Right Tag */}
              <div className="absolute bottom-8 right-8 text-right select-none">
                <div className="text-[10px] sm:text-[11px] tracking-[0.2em] font-semibold text-white/90 uppercase leading-tight drop-shadow-sm">
                  A MORE USEFUL<br />
                  DIGITAL TOMORROW
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
