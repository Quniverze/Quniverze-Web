import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { CUSTOMER_PROOF_CONTENT } from '../data/content';

interface CustomerProofSectionProps {
  onLearnMore: () => void;
}

export const CustomerProofSection: React.FC<CustomerProofSectionProps> = ({ onLearnMore }) => {
  return (
    <section className="py-16 sm:py-24 border-b border-[#E5E7EB] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Context & Relationship */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#3B82F6]">
                {CUSTOMER_PROOF_CONTENT.eyebrow}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#12151C] tracking-tight">
              {CUSTOMER_PROOF_CONTENT.heading}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#12151C]/80 leading-relaxed font-normal">
              {CUSTOMER_PROOF_CONTENT.statement}
            </p>

            <div className="mt-8 pt-6 border-t border-[#E5E7EB] space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-[#12151C]">
                <Check className="w-4 h-4 text-[#3B82F6] shrink-0" />
                <span className="font-semibold">NivaOps PMS:</span>
                <span className="text-[#718096]">Active reservations and room turnover automation</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#12151C]">
                <Check className="w-4 h-4 text-[#3B82F6] shrink-0" />
                <span className="font-semibold">Digital Website:</span>
                <span className="text-[#718096]">Bespoke direct-booking platform engineered by Quniverze</span>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={onLearnMore}
                className="group inline-flex items-center gap-2 text-xs font-semibold text-[#12151C] hover:text-[#3B82F6] transition-colors"
              >
                <span>Read StayB case relationship</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Typographic & Structural Proof Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#F4F6F9] rounded-xl border border-[#E5E7EB] p-8 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB]">
                <div>
                  <span className="text-xl font-bold text-[#12151C] tracking-tight">StayB</span>
                  <span className="text-xs font-mono text-[#718096] block mt-0.5">Accommodation Business</span>
                </div>
                <div className="px-2.5 py-1 rounded bg-[#12151C] text-[#F4F6F9] text-[10px] font-mono">
                  ACTIVE CUSTOMER
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
                {CUSTOMER_PROOF_CONTENT.stats.map((s) => (
                  <div key={s.label} className="bg-[#FFFFFF] p-3 rounded-lg border border-[#E5E7EB]">
                    <div className="text-[10px] font-mono text-[#718096] uppercase">{s.label}</div>
                    <div className="text-sm font-bold text-[#12151C] mt-1">{s.value}</div>
                  </div>
                ))}
              </div>

              <div className="bg-[#FFFFFF] p-4 rounded-lg border border-[#E5E7EB] text-xs space-y-2">
                <div className="text-[10px] font-mono uppercase text-[#718096]">Operational Integration Model</div>
                <div className="flex items-center justify-between pt-1">
                  <span className="font-semibold text-[#12151C]">Quniverze</span>
                  <span className="text-[10px] font-mono text-[#3B82F6]">Builds & Operates →</span>
                  <span className="font-semibold text-[#12151C]">NivaOps</span>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-[#E5E7EB]">
                  <span className="font-semibold text-[#12151C]">StayB</span>
                  <span className="text-[10px] font-mono text-[#3B82F6]">Runs Operations on →</span>
                  <span className="font-semibold text-[#12151C]">NivaOps PMS</span>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-[#E5E7EB]">
                  <span className="font-semibold text-[#12151C]">Guest Experience</span>
                  <span className="text-[10px] font-mono text-[#12151C]">Built by Quniverze →</span>
                  <span className="font-semibold text-[#12151C]">StayB Website</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
