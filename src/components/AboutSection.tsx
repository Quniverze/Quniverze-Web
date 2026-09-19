import React from 'react';
import { ABOUT_CONTENT } from '../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <div className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-neutral-500 mb-4">
            {ABOUT_CONTENT.eyebrow}
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827] tracking-tight leading-tight">
            {ABOUT_CONTENT.statement}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 pt-8 border-t border-neutral-200/80">
            {ABOUT_CONTENT.principles.map((p) => (
              <div key={p.title}>
                <h3 className="text-base font-bold text-neutral-900 mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
