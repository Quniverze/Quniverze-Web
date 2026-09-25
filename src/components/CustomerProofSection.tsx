import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { CUSTOMER_PROOF_CONTENT } from '../data/content';

interface CustomerProofSectionProps {
  onLearnMore: () => void;
}

export const CustomerProofSection: React.FC<CustomerProofSectionProps> = ({ onLearnMore }) => {
  return (
    <section className="py-20 sm:py-28 border-b border-[#E5E7EB] bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Context & Proof */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#3B82F6]">
                  {CUSTOMER_PROOF_CONTENT.eyebrow}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12151C] tracking-tight leading-[1.12]">
                {CUSTOMER_PROOF_CONTENT.heading}
              </h2>

              <p className="mt-5 text-base sm:text-lg text-[#12151C]/75 leading-relaxed font-normal">
                {CUSTOMER_PROOF_CONTENT.statement}
              </p>

              {/* Operational Verification Checklist */}
              <div className="mt-8 pt-6 border-t border-[#E5E7EB] space-y-3.5">
                <div className="flex items-start gap-3 text-sm text-[#12151C]">
                  <Check className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#12151C]">NivaOps PMS: </span>
                    <span className="text-[#12151C]/70">Centralized reservation orchestration, automated housekeeping turns, and direct occupancy control.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-[#12151C]">
                  <Check className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#12151C]">Digital Web Platform: </span>
                    <span className="text-[#12151C]/70">Direct-booking engine and guest experience architecture engineered by Quniverze.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button
                type="button"
                onClick={onLearnMore}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#12151C] hover:text-[#3B82F6] transition-colors"
              >
                <span>Read StayB case relationship</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Atmosphere & Operational Data */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#E5E7EB] bg-[#F4F6F9] shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              {/* Architectural Interior Photo */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={CUSTOMER_PROOF_CONTENT.image}
                  alt="StayB boutique accommodation interior running on NivaOps"
                  loading="lazy"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover object-center grayscale-[10%] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12151C]/90 via-[#12151C]/30 to-transparent pointer-events-none" />
                
                {/* Floating Top Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded bg-[#12151C]/90 backdrop-blur-sm text-[10px] font-mono font-medium text-[#F4F6F9] border border-white/10 uppercase tracking-wider">
                    Customer Proof · StayB
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <div className="text-lg font-bold tracking-tight">StayB Properties</div>
                    <div className="text-xs text-white/75 font-normal">Modern boutique hospitality</div>
                  </div>
                  <span className="text-[11px] font-mono text-[#3B82F6] font-semibold bg-white/10 px-2 py-0.5 rounded backdrop-blur-sm">
                    NivaOps Customer
                  </span>
                </div>
              </div>

              {/* Lower Operational Data Grid */}
              <div className="p-6 bg-white border-t border-[#E5E7EB]">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center sm:text-left">
                  {CUSTOMER_PROOF_CONTENT.stats.map((s) => (
                    <div key={s.label} className="p-2.5 rounded-lg bg-[#F4F6F9] border border-[#E5E7EB]">
                      <div className="text-[10px] font-mono text-[#12151C]/50 uppercase tracking-tight truncate">{s.label}</div>
                      <div className="text-xs sm:text-sm font-bold text-[#12151C] mt-0.5 truncate">{s.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-[11px] text-[#12151C]/70">
                  <span>Relationship: Active Customer & Software Partner</span>
                  <span className="font-mono text-[10px] text-[#3B82F6]">VERIFIED PRODUCTION</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
