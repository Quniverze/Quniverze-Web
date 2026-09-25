import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CUSTOMER_PROOF_CONTENT } from '../data/content';

interface CustomerProofSectionProps {
  onLearnMore: () => void;
}

export const CustomerProofSection: React.FC<CustomerProofSectionProps> = ({ onLearnMore }) => {
  return (
    <section className="py-20 sm:py-28 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Context & Proof */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                <span className="text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-[#3B82F6]">
                  {CUSTOMER_PROOF_CONTENT.eyebrow}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12151C] tracking-tight leading-[1.12]">
                {CUSTOMER_PROOF_CONTENT.heading}
              </h2>

              <p className="mt-5 text-base sm:text-lg text-[#12151C]/75 leading-relaxed font-normal">
                {CUSTOMER_PROOF_CONTENT.statement}
              </p>

              {/* Minimal metrics in pure typography (no boxed tiles) */}
              <div className="mt-10 pt-8 border-t border-[#E5E7EB] grid grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#12151C] tracking-tight">18+</div>
                  <div className="text-xs text-[#12151C]/60 mt-1">Managed units</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#12151C] tracking-tight">100%</div>
                  <div className="text-xs text-[#12151C]/60 mt-1">Digital turnover</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#3B82F6] tracking-tight">&lt;2h</div>
                  <div className="text-xs text-[#12151C]/60 mt-1">Turnaround avg</div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-[#E5E7EB]">
              <button
                type="button"
                onClick={onLearnMore}
                className="group inline-flex items-center gap-2 text-xs font-semibold text-[#12151C] hover:text-[#3B82F6] transition-colors"
              >
                <span>Read StayB case relationship</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-150" />
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Photography without nested box clutter */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#E5E7EB] h-[380px] sm:h-[440px]">
              <img
                src={CUSTOMER_PROOF_CONTENT.image}
                alt="StayB boutique accommodation interior running on NivaOps"
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover object-center grayscale-[10%] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12151C]/85 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <div className="text-base font-bold tracking-tight">StayB Properties</div>
                  <div className="text-xs text-white/70 font-normal">Modern boutique hospitality</div>
                </div>
                <span className="text-[11px] font-mono text-[#3B82F6] bg-black/40 px-2.5 py-1 rounded backdrop-blur-sm border border-white/10">
                  NivaOps Customer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
