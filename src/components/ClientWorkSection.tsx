import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SELECTIVE_WORK_CONTENT } from '../data/content';
import type { ClientWorkItem } from '../data/content';
import { ClientCard } from './ClientCard';

interface ClientWorkSectionProps {
  onSelectProject: (item: ClientWorkItem) => void;
  onStartProject?: () => void;
}

export const ClientWorkSection: React.FC<ClientWorkSectionProps> = ({ onSelectProject, onStartProject }) => {
  return (
    <section id="work" className="py-20 sm:py-28 border-b border-[#E5E7EB] bg-[#F4F6F9]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#12151C]/60 mb-3">
              {SELECTIVE_WORK_CONTENT.eyebrow}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12151C] tracking-tight leading-[1.12]">
              {SELECTIVE_WORK_CONTENT.heading}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#12151C]/75 font-normal leading-relaxed">
              Selected client engagements where Quniverze designs and engineers production software systems.
            </p>
          </div>

          {onStartProject && (
            <button
              type="button"
              onClick={onStartProject}
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#12151C] hover:text-[#3B82F6] transition-colors self-start sm:self-auto shrink-0 pb-1"
            >
              <span>Start a project with us</span>
              <ArrowRight className="w-4 h-4 text-[#3B82F6] group-hover:translate-x-1 transition-transform duration-150" />
            </button>
          )}
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
