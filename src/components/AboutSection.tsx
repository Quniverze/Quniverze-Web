import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ABOUT_CONTENT, CAREERS_CONTENT } from '../data/content';

interface AboutSectionProps {
  onOpenCareers?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCareers }) => {
  return (
    <section id="about" className="py-20 sm:py-28 border-b border-[#E5E7EB] bg-[#F4F6F9]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20 sm:space-y-28">
        {/* About Quniverze Statement & Guiding Principles */}
        <div>
          <div className="max-w-3xl mb-14">
            <div className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#12151C]/60 mb-3">
              {ABOUT_CONTENT.eyebrow}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12151C] tracking-tight leading-[1.15]">
              {ABOUT_CONTENT.statement}
            </h2>
          </div>

          {/* 3 Principles with Apple-level spacing and hairline dividers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-10 border-t border-[#E5E7EB]">
            {ABOUT_CONTENT.principles.map((p, idx) => (
              <div
                key={p.title}
                className={`flex flex-col justify-between ${
                  idx !== ABOUT_CONTENT.principles.length - 1 ? 'md:border-r md:border-[#E5E7EB] md:pr-8' : ''
                }`}
              >
                <div>
                  <div className="text-xs font-mono font-bold text-[#3B82F6] mb-3 tracking-widest uppercase">
                    0{idx + 1} · PRINCIPLE
                  </div>
                  <h3 className="text-xl font-bold text-[#12151C] tracking-tight mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#12151C]/75 leading-relaxed font-normal">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Careers Block (id="careers") */}
        <div id="careers" className="pt-16 border-t border-[#E5E7EB]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-2xl border border-[#E5E7EB] p-8 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <div className="lg:col-span-8">
              <div className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#12151C]/60 mb-3">
                {CAREERS_CONTENT.eyebrow}
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#12151C] tracking-tight">
                {CAREERS_CONTENT.title}
              </h3>
              <p className="mt-4 text-base text-[#12151C]/75 leading-relaxed max-w-xl font-normal">
                {CAREERS_CONTENT.description}
              </p>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={onOpenCareers}
                  className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-[#12151C] text-[#F4F6F9] hover:bg-[#232834] active:scale-[0.98] transition-all duration-150"
                >
                  <span>{CAREERS_CONTENT.ctaText}</span>
                  <ArrowRight className="w-4 h-4 text-[#3B82F6] group-hover:translate-x-1 transition-transform duration-150" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#E5E7EB] pt-6 lg:pt-0 lg:pl-10 space-y-4">
              <div className="text-xs font-mono text-[#12151C]/60 uppercase tracking-wider">
                Engineering & Design Standards
              </div>
              <div className="space-y-2 text-xs text-[#12151C]/80">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                  <span>Production systems & long-term maintenance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#12151C]" />
                  <span>Low ego, high technical autonomy</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#12151C]" />
                  <span>Direct user impact over bureaucratic ceremony</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
