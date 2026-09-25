import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ABOUT_CONTENT, CAREERS_CONTENT } from '../data/content';

interface AboutSectionProps {
  onOpenCareers?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCareers }) => {
  return (
    <section id="about" className="py-20 sm:py-28 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20 sm:space-y-24">
        {/* About Quniverze Statement & Guiding Principles */}
        <div>
          <div className="max-w-3xl mb-14 sm:mb-16">
            <div className="text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-[#12151C]/50 mb-3">
              {ABOUT_CONTENT.eyebrow}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12151C] tracking-tight leading-[1.14]">
              {ABOUT_CONTENT.statement}
            </h2>
          </div>

          {/* 3 Principles with Apple-level spacing and hairline dividers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 pt-10 border-t border-[#E5E7EB]">
            {ABOUT_CONTENT.principles.map((p, idx) => (
              <div
                key={p.title}
                className={`flex flex-col justify-between ${
                  idx !== ABOUT_CONTENT.principles.length - 1 ? 'md:border-r md:border-[#E5E7EB] md:pr-8' : ''
                }`}
              >
                <div>
                  <div className="text-[11px] font-mono font-medium text-[#3B82F6] mb-3 tracking-widest uppercase">
                    0{idx + 1} · PRINCIPLE
                  </div>
                  <h3 className="text-xl font-bold text-[#12151C] tracking-tight mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#12151C]/70 leading-relaxed font-normal">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Careers Block: Pure, Minimal Typography (No checklist box) */}
        <div id="careers" className="pt-16 border-t border-[#E5E7EB]">
          <div className="max-w-2xl">
            <div className="text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-[#12151C]/50 mb-3">
              {CAREERS_CONTENT.eyebrow}
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#12151C] tracking-tight">
              {CAREERS_CONTENT.title}
            </h3>
            <p className="mt-4 text-base sm:text-lg text-[#12151C]/75 leading-relaxed font-normal">
              {CAREERS_CONTENT.description}
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={onOpenCareers}
                className="group inline-flex items-center gap-2 text-xs font-semibold text-[#12151C] hover:text-[#3B82F6] transition-colors"
              >
                <span>{CAREERS_CONTENT.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-150" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
