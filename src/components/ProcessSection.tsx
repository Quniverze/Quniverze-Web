import React from 'react';
import { PROCESS_CONTENT } from '../data/content';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 sm:py-28 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-[#12151C]/50 mb-3">
            {PROCESS_CONTENT.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12151C] tracking-tight leading-[1.12]">
            {PROCESS_CONTENT.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#12151C]/70 font-normal leading-relaxed">
            {PROCESS_CONTENT.subheading}
          </p>
        </div>

        {/* 4 Process Steps: Typography, Numbering, Spacing & Hairline Dividers (No giant cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pt-10 border-t border-[#E5E7EB]">
          {PROCESS_CONTENT.steps.map((step, idx) => (
            <div
              key={step.number}
              className={`flex flex-col justify-between ${
                idx !== PROCESS_CONTENT.steps.length - 1 ? 'lg:border-r lg:border-[#E5E7EB] lg:pr-8' : ''
              }`}
            >
              <div>
                {/* Electric Blue Number Motif */}
                <div className="text-3xl sm:text-4xl font-mono font-bold text-[#3B82F6] tracking-tighter">
                  {step.number}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#12151C] tracking-tight mt-4 mb-2">
                  {step.title}
                </h3>

                {/* Triplets */}
                <div className="text-xs font-mono font-medium text-[#12151C]/50 mb-4 tracking-tight">
                  {step.triplet.join(' · ')}
                </div>
              </div>

              <p className="text-sm text-[#12151C]/70 leading-relaxed font-normal pt-4 border-t border-[#E5E7EB]/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
