import React from 'react';
import { BRAND_VALUES, ABOUT_CONTENT } from '../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 border-b border-[#E5E7EB] bg-[#F4F6F9]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16 sm:space-y-20">
        {/* Brand Values / Why Quniverze */}
        <div>
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-medium tracking-wider uppercase text-[#12151C]/60 mb-2">
              {BRAND_VALUES.eyebrow}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#12151C] tracking-tight">
              {BRAND_VALUES.heading}
            </h2>
            <p className="mt-3 text-lg font-semibold text-[#12151C]/90">
              {BRAND_VALUES.statement}
            </p>
            <p className="mt-3 text-sm sm:text-base text-[#12151C]/75 leading-relaxed font-normal">
              {BRAND_VALUES.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {BRAND_VALUES.values.map((v, idx) => (
              <div
                key={v.title}
                className="bg-[#FFFFFF] rounded-xl border border-[#E5E7EB] p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-mono text-[#3B82F6] font-bold mb-3 uppercase">
                    PRINCIPLE 0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#12151C] tracking-tight mb-3">
                    {v.title}
                  </h3>
                  <p className="text-sm text-[#12151C]/70 leading-relaxed font-normal">
                    {v.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Quniverze: What, Why, How */}
        <div className="pt-12 border-t border-[#E5E7EB]">
          <div className="bg-[#FFFFFF] rounded-xl border border-[#E5E7EB] p-8 sm:p-12">
            <div className="max-w-3xl">
              <div className="text-xs font-mono font-medium tracking-wider uppercase text-[#12151C]/60 mb-2">
                {ABOUT_CONTENT.eyebrow}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#12151C] tracking-tight mb-4">
                {ABOUT_CONTENT.heading}
              </h3>
              <p className="text-base sm:text-lg text-[#12151C]/85 leading-relaxed font-normal mb-8">
                {ABOUT_CONTENT.body}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#E5E7EB]">
                {ABOUT_CONTENT.principles.map((p) => (
                  <div key={p.label}>
                    <div className="text-xs font-mono font-bold text-[#12151C] uppercase mb-1.5">
                      {p.label}
                    </div>
                    <div className="text-xs text-[#12151C]/70 leading-relaxed font-normal">
                      {p.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
