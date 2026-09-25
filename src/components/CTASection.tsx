import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CONTACT_CONTENT } from '../data/content';

interface CTASectionProps {
  onStartConversation: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onStartConversation }) => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#12151C] text-[#F4F6F9] border-b border-[#232834]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-medium tracking-wider uppercase text-[#3B82F6] mb-3">
            {CONTACT_CONTENT.eyebrow}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F6F9] leading-tight">
            {CONTACT_CONTENT.heading}
          </h2>

          <p className="mt-4 text-lg sm:text-xl text-[#F4F6F9]/80 font-normal leading-relaxed">
            {CONTACT_CONTENT.subtext}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button
              type="button"
              onClick={onStartConversation}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold rounded-lg bg-[#F4F6F9] text-[#12151C] hover:bg-white active:scale-[0.98] transition-all duration-150"
            >
              <span>{CONTACT_CONTENT.ctaText}</span>
              <ArrowRight className="w-4 h-4 text-[#3B82F6] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-[#232834] flex flex-wrap items-center gap-6 text-xs text-[#A0AEC0] font-mono">
            <span>Direct conversation</span>
            <span>·</span>
            <span>No sales scripts</span>
            <span>·</span>
            <span>Direct engineering review</span>
          </div>
        </div>
      </div>
    </section>
  );
};
