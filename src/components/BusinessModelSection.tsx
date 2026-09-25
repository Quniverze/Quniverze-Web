import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BUSINESS_MODEL } from '../data/content';

interface BusinessModelProps {
  onExploreProducts: () => void;
  onExploreWork: () => void;
}

export const BusinessModelSection: React.FC<BusinessModelProps> = ({ onExploreProducts, onExploreWork }) => {
  return (
    <section className="py-20 sm:py-28 border-b border-[#E5E7EB] bg-[#F4F6F9]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#12151C]/60 mb-4">
            {BUSINESS_MODEL.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12151C] tracking-tight leading-[1.12]">
            {BUSINESS_MODEL.heading}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#12151C]/75 leading-relaxed font-normal">
            {BUSINESS_MODEL.learningLoop}
          </p>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 pt-10 border-t border-[#E5E7EB]">
          {/* Side 01: Products */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#E5E7EB]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#3B82F6] uppercase">
                    SIDE 01 — PROPRIETARY PRODUCTS
                  </span>
                </div>
                <span className="text-xs font-mono text-[#12151C]/50">OWNED & OPERATED</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#12151C] tracking-tight">
                {BUSINESS_MODEL.columns[0].tagline}
              </h3>
              <p className="mt-4 text-sm sm:text-base text-[#12151C]/75 leading-relaxed font-normal">
                {BUSINESS_MODEL.columns[0].description}
              </p>

              {/* Products List */}
              <div className="mt-8 space-y-4 pt-6 border-t border-[#E5E7EB]/80">
                <div className="p-4 rounded-lg bg-white border border-[#E5E7EB]">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-bold text-[#12151C] text-base">NivaOps</span>
                    <span className="text-[11px] font-mono font-medium text-[#3B82F6]">Owned Product</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#12151C]/70 font-normal">
                    Property operations software for rental businesses and boutique hospitality.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-white border border-[#E5E7EB]">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-bold text-[#12151C] text-base">Quniverze CRM</span>
                    <span className="text-[11px] font-mono font-medium text-[#12151C]/60">Internal Platform → SaaS</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#12151C]/70 font-normal">
                    Lead and pipeline management software built internally and evolving for teams.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6">
              <button
                type="button"
                onClick={onExploreProducts}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#12151C] hover:text-[#3B82F6] transition-colors"
              >
                <span>Explore proprietary products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
              </button>
            </div>
          </div>

          {/* Side 02: Selective Work */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#E5E7EB]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#12151C]" />
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#12151C] uppercase">
                    SIDE 02 — SELECTIVE WORK
                  </span>
                </div>
                <span className="text-xs font-mono text-[#12151C]/50">CLIENT PARTNERSHIPS</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#12151C] tracking-tight">
                {BUSINESS_MODEL.columns[1].tagline}
              </h3>
              <p className="mt-4 text-sm sm:text-base text-[#12151C]/75 leading-relaxed font-normal">
                {BUSINESS_MODEL.columns[1].description}
              </p>

              {/* Client Work List */}
              <div className="mt-8 space-y-4 pt-6 border-t border-[#E5E7EB]/80">
                <div className="p-4 rounded-lg bg-white border border-[#E5E7EB]">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-bold text-[#12151C] text-base">Boven Frontier</span>
                    <span className="text-[11px] font-mono font-medium text-[#12151C]/60">Client Platform</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#12151C]/70 font-normal">
                    Manufacturing, distribution, wholesale and international trade platform.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-white border border-[#E5E7EB]">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-bold text-[#12151C] text-base">IGCC</span>
                    <span className="text-[11px] font-mono font-medium text-[#12151C]/60">Card Automation</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#12151C]/70 font-normal">
                    Card automation system and high-throughput verification database.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-white border border-[#E5E7EB]">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-bold text-[#12151C] text-base">StayB</span>
                    <span className="text-[11px] font-mono font-medium text-[#3B82F6]">NivaOps Customer</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#12151C]/70 font-normal">
                    Accommodation business. Website by Quniverze. Active NivaOps customer.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6">
              <button
                type="button"
                onClick={onExploreWork}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#12151C] hover:text-[#3B82F6] transition-colors"
              >
                <span>View selective client work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
