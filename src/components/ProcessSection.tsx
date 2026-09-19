import React from 'react';
import { ChevronRight } from 'lucide-react';
import { PROCESS_CONTENT } from '../data/content';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-neutral-500 mb-2">
              {PROCESS_CONTENT.eyebrow}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827] tracking-tight">
              {PROCESS_CONTENT.heading}
            </h2>
          </div>

          <p className="text-sm text-neutral-600 max-w-xs leading-relaxed">
            {PROCESS_CONTENT.statement}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
          {PROCESS_CONTENT.steps.map((step, idx) => (
            <div key={step.number} className="relative flex flex-col justify-between pr-4">
              <div>
                {/* Step Number */}
                <span className="text-xs font-mono font-medium text-neutral-400 block mb-3">
                  {step.number}
                </span>

                {/* Step Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#111827] tracking-tight mb-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Chevron indicator pointing to next step on desktop */}
              {idx < PROCESS_CONTENT.steps.length - 1 && (
                <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 text-neutral-300 pointer-events-none">
                  <ChevronRight className="w-5 h-5 stroke-[1.5]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
