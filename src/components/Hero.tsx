import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BRAND_IDENTITY } from '../data/content';
import { QuniverzeWordmark } from './BrandLogos';
import { QuniverzeOverviewDashboard } from './ProductPreviews';

interface HeroProps {
  onExploreProducts: () => void;
  onWorkWithUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onWorkWithUs }) => {
  return (
    <section className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Typography-led Brand Positioning */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Primary Brand Lockup */}
            <div className="mb-4">
              <QuniverzeWordmark className="text-2xl sm:text-3xl" />
              <div className="text-xs font-mono font-medium tracking-wider uppercase text-[#12151C]/60 mt-1">
                {BRAND_IDENTITY.tagline}
              </div>
            </div>

            {/* Dominant Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-[#12151C] tracking-tight leading-[1.08] max-w-xl">
              We build software<br />
              for businesses.
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 text-base sm:text-lg text-[#12151C]/75 leading-relaxed max-w-lg font-normal">
              {BRAND_IDENTITY.supporting}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onExploreProducts}
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium rounded-lg bg-[#12151C] text-[#F4F6F9] hover:bg-[#232834] active:scale-[0.98] transition-all duration-150"
              >
                <span>{BRAND_IDENTITY.heroCtaPrimary}</span>
                <ArrowRight className="w-4 h-4 text-[#3B82F6] group-hover:translate-x-0.5 transition-transform duration-150" />
              </button>

              <button
                type="button"
                onClick={onWorkWithUs}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium rounded-lg bg-[#FFFFFF] text-[#12151C] border border-[#E5E7EB] hover:border-[#12151C]/30 active:scale-[0.98] transition-all duration-150"
              >
                <span>{BRAND_IDENTITY.heroCtaSecondary}</span>
              </button>
            </div>

            {/* Bottom Statement Micro-strip */}
            <div className="mt-12 pt-6 border-t border-[#E5E7EB] flex items-center gap-6 text-xs text-[#718096]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                <span className="font-semibold text-[#12151C]">Owned Products:</span>
                <span>NivaOps · CRM</span>
              </div>
              <div className="w-[1px] h-3 bg-[#E5E7EB]" />
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#12151C]">Selective Work:</span>
                <span>Boven Frontier · IGCC · StayB</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real Software Interface (No stock photography) */}
          <div className="lg:col-span-6 w-full">
            <div className="relative">
              <div className="absolute -top-3 left-4 z-10 px-2.5 py-0.5 rounded bg-[#12151C] text-[10px] font-mono text-[#F4F6F9] border border-[#232834] flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                <span>REAL SYSTEM INTERFACE</span>
              </div>
              <QuniverzeOverviewDashboard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
