import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BUSINESS_MODEL } from '../data/content';

interface BusinessModelProps {
  onExploreProducts: () => void;
  onExploreWork: () => void;
}

export const BusinessModelSection: React.FC<BusinessModelProps> = ({ onExploreProducts, onExploreWork }) => {
  return (
    <section className="py-16 sm:py-24 border-b border-[#E5E7EB] bg-[#F4F6F9]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Eyebrow & Learning Loop */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-medium tracking-wider uppercase text-[#12151C]/60 mb-3">
            {BUSINESS_MODEL.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#12151C] tracking-tight leading-tight">
            {BUSINESS_MODEL.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#12151C]/80 leading-relaxed font-normal">
            {BUSINESS_MODEL.learningLoop}
          </p>
        </div>

        {/* Two Columns: PRODUCTS & SELECTIVE WORK */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Column 1: Products */}
          <div className="bg-[#FFFFFF] rounded-xl border border-[#E5E7EB] p-8 flex flex-col justify-between hover:border-[#12151C]/30 transition-colors">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E5E7EB]">
                <span className="text-xs font-mono font-bold tracking-wider text-[#3B82F6] uppercase">
                  COLUMN 01 — OWNED PRODUCTS
                </span>
                <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#12151C] tracking-tight">
                {BUSINESS_MODEL.columns[0].tagline}
              </h3>
              <p className="mt-4 text-sm sm:text-base text-[#12151C]/70 leading-relaxed">
                {BUSINESS_MODEL.columns[0].description}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E7EB] flex items-center justify-between">
              <span className="text-xs font-mono text-[#718096]">NivaOps · Quniverze CRM</span>
              <button
                type="button"
                onClick={onExploreProducts}
                className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#12151C] hover:text-[#3B82F6] transition-colors"
              >
                <span>View Products</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Column 2: Selective Work */}
          <div className="bg-[#FFFFFF] rounded-xl border border-[#E5E7EB] p-8 flex flex-col justify-between hover:border-[#12151C]/30 transition-colors">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E5E7EB]">
                <span className="text-xs font-mono font-bold tracking-wider text-[#12151C] uppercase">
                  COLUMN 02 — SELECTIVE WORK
                </span>
                <span className="w-2 h-2 rounded-full bg-[#12151C]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#12151C] tracking-tight">
                {BUSINESS_MODEL.columns[1].tagline}
              </h3>
              <p className="mt-4 text-sm sm:text-base text-[#12151C]/70 leading-relaxed">
                {BUSINESS_MODEL.columns[1].description}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E7EB] flex items-center justify-between">
              <span className="text-xs font-mono text-[#718096]">Boven Frontier · IGCC · StayB</span>
              <button
                type="button"
                onClick={onExploreWork}
                className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#12151C] hover:text-[#3B82F6] transition-colors"
              >
                <span>View Client Work</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
