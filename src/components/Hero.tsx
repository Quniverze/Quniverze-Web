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
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          {/* Left Column: Confident Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="max-w-xl">
              {/* Eyebrow */}
              <div className="text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-[#12151C]/50 mb-6">
                QUNIVERZE · SOFTWARE COMPANY
              </div>

              {/* Dominant Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-[#12151C] tracking-tight leading-[1.06]">
                We build software<br />
                for businesses.
              </h1>

              {/* Supporting Copy */}
              <p className="mt-6 sm:mt-7 text-base sm:text-lg text-[#12151C]/70 leading-relaxed font-normal">
                {HERO_CONTENT.supporting}
              </p>

              {/* Dual CTAs */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
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
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium rounded-lg bg-transparent text-[#12151C] border border-[#E5E7EB] hover:border-[#12151C]/40 hover:bg-white active:scale-[0.98] transition-all duration-150"
                >
                  <span>{HERO_CONTENT.secondaryCta}</span>
                </button>
              </div>
            </div>

            {/* Lower Strip: Minimal hairline typographic index */}
            <div className="mt-14 sm:mt-20 pt-6 border-t border-[#E5E7EB]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#12151C]/40 shrink-0">
                    PRODUCTS
                  </span>
                  <div className="flex items-center gap-5">
                    <NivaOpsLogo />
                    <CrmLogo />
                  </div>
                </div>

                <div className="flex items-center gap-4 flex-wrap sm:pl-4 sm:border-l border-[#E5E7EB]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#12151C]/40 shrink-0">
                    CLIENTS
                  </span>
                  <div className="flex items-center gap-5">
                    <BovenLogo />
                    <IgccLogo />
                    <StayBLogo />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[460px] sm:h-[540px] lg:h-full min-h-[480px] rounded-2xl overflow-hidden border border-[#E5E7EB]">
              <img
                src={HERO_CONTENT.image}
                alt="Modern architectural glass facade representing structured technology and systems"
                fetchPriority="high"
                width={800}
                height={1000}
                className="w-full h-full object-cover object-center grayscale-[12%] contrast-[1.04] hover:scale-[1.015] transition-transform duration-700 ease-out"
              />

              {/* Gradient Vignette for Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20 pointer-events-none" />

              {/* Floating Vertical Text Treatment */}
              <div className="absolute top-8 right-8 text-right text-white select-none">
                <div className="flex flex-col items-end space-y-1 text-sm font-medium tracking-tight text-white/90 drop-shadow-sm">
                  <span>Ideas</span>
                  <span>Systems</span>
                  <span>Growth</span>
                </div>
                <div className="w-5 h-[1.5px] bg-[#3B82F6] ml-auto mt-2.5" />
              </div>

              {/* Bottom Right Tag */}
              <div className="absolute bottom-8 right-8 text-right select-none">
                <div className="text-[10px] font-mono tracking-[0.2em] font-medium text-white/85 uppercase leading-tight drop-shadow-sm">
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
