import React from 'react';
import { SELECTIVE_WORK_CONTENT } from '../data/content';
import type { ClientWorkItem } from '../data/content';
import { ClientCard } from './ClientCard';

interface ClientWorkSectionProps {
  onSelectProject: (item: ClientWorkItem) => void;
}

export const ClientWorkSection: React.FC<ClientWorkSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="py-16 sm:py-24 border-b border-[#E5E7EB] bg-[#F4F6F9]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-medium tracking-wider uppercase text-[#12151C]/60 mb-2">
            {SELECTIVE_WORK_CONTENT.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#12151C] tracking-tight">
            {SELECTIVE_WORK_CONTENT.heading}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#12151C]/70 font-normal">
            Selected client engagements where Quniverze designs and engineers production software.
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SELECTIVE_WORK_CONTENT.items.map((item) => (
            <ClientCard
              key={item.id}
              item={item}
              onSelect={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
