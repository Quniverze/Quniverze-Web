import React from 'react';
import { PROCESS_CONTENT } from '../data/content';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-16 sm:py-24 border-b border-[#E5E7EB] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-medium tracking-wider uppercase text-[#12151C]/60 mb-2">
            {PROCESS_CONTENT.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#12151C] tracking-tight">
            {PROCESS_CONTENT.heading}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#12151C]/70 font-normal">
            {PROCESS_CONTENT.subheading}
          </p>
        </div>

        {/* 4 Process Steps (01 → 04 Motif) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_CONTENT.steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#F4F6F9] rounded-xl border border-[#E5E7EB] p-7 flex flex-col justify-between hover:border-[#12151C]/30 transition-colors"
            >
              <div>
                {/* Electric Blue Number Motif */}
                <span className="text-3xl sm:text-4xl font-mono font-bold text-[#3B82F6] block mb-4 tracking-tighter">
                  {step.number}
                </span>

                <h3 className="text-xl font-bold text-[#12151C] tracking-tight mb-4">
                  {step.title}
                </h3>

                {/* Triplets */}
                <div className="space-y-1 mb-6 text-sm font-semibold text-[#12151C]/90 font-mono">
                  {step.triplet.map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#12151C]" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-[#12151C]/70 pt-4 border-t border-[#E5E7EB] leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
