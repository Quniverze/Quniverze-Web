import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BUSINESS_MODEL } from '../data/content';

interface BusinessModelProps {
  onExploreProducts: () => void;
  onExploreWork: () => void;
}

export const BusinessModelSection: React.FC<BusinessModelProps> = ({ onExploreProducts, onExploreWork }) => {
  return (
    <section className="py-20 sm:py-28 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Learning Loop */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-[#12151C]/50 mb-4">
                {BUSINESS_MODEL.eyebrow}
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12151C] tracking-tight leading-[1.12]">
                Two primary activities.<br />
                One standard.
              </h2>
              <p className="mt-6 text-base sm:text-lg text-[#12151C]/75 leading-relaxed font-normal">
                {BUSINESS_MODEL.learningLoop}
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-[#E5E7EB] flex items-center gap-6">
              <button
                type="button"
                onClick={onExploreProducts}
                className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#12151C] hover:text-[#3B82F6] transition-colors"
              >
                <span>Explore products</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <span className="text-[#E5E7EB]">/</span>
              <button
                type="button"
                onClick={onExploreWork}
                className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#12151C] hover:text-[#3B82F6] transition-colors"
              >
                <span>View client work</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Line Items (No nested card boxes) */}
          <div className="lg:col-span-7 lg:border-l lg:border-[#E5E7EB] lg:pl-14 space-y-12">
            {/* Side 01: Products */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                <span className="text-[11px] font-mono font-semibold tracking-wider text-[#3B82F6] uppercase">
                  01 · PROPRIETARY PRODUCTS
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#12151C] tracking-tight">
                Software we build, own and operate.
              </h3>
              <p className="mt-2 text-sm text-[#12151C]/70 leading-relaxed font-normal">
                Conceived, developed, deployed, and maintained by Quniverze for real-world operating environments.
              </p>

              {/* Clean line items */}
              <div className="mt-6 divide-y divide-[#E5E7EB] border-t border-b border-[#E5E7EB]">
                <div className="py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-semibold text-[#12151C] text-sm">NivaOps</span>
                  <span className="text-xs text-[#12151C]/60">Property operations software for rental operators</span>
                </div>
                <div className="py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-semibold text-[#12151C] text-sm">Quniverze CRM</span>
                  <span className="text-xs text-[#12151C]/60">Lead & pipeline management software</span>
                </div>
              </div>
            </div>

            {/* Side 02: Selective Work */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#12151C]" />
                <span className="text-[11px] font-mono font-semibold tracking-wider text-[#12151C] uppercase">
                  02 · SELECTIVE WORK
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#12151C] tracking-tight">
                Digital products engineered for selected businesses.
              </h3>
              <p className="mt-2 text-sm text-[#12151C]/70 leading-relaxed font-normal">
                Direct partnerships with companies requiring robust platforms and critical software systems.
              </p>

              {/* Clean line items */}
              <div className="mt-6 divide-y divide-[#E5E7EB] border-t border-b border-[#E5E7EB]">
                <div className="py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-semibold text-[#12151C] text-sm">Boven Frontier</span>
                  <span className="text-xs text-[#12151C]/60">Manufacturing, distribution & wholesale international platform</span>
                </div>
                <div className="py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-semibold text-[#12151C] text-sm">IGCC</span>
                  <span className="text-xs text-[#12151C]/60">Card automation system & verification engine</span>
                </div>
                <div className="py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-semibold text-[#12151C] text-sm">StayB</span>
                  <span className="text-xs text-[#3B82F6] font-mono">Accommodation business · Website & active NivaOps customer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
