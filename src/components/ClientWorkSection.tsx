import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CLIENT_WORK_CONTENT } from '../data/content';
import type { ClientWorkItem } from '../data/content';
import { ClientCard } from './ClientCard';

interface ClientWorkSectionProps {
  onSelectProject: (item: ClientWorkItem) => void;
  onViewAllWork: () => void;
}

export const ClientWorkSection: React.FC<ClientWorkSectionProps> = ({ onSelectProject, onViewAllWork }) => {
  return (
    <section id="work" className="py-16 sm:py-24 border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-neutral-500 mb-2">
              {CLIENT_WORK_CONTENT.eyebrow}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827] tracking-tight">
              {CLIENT_WORK_CONTENT.heading}
            </h2>
          </div>

          <button
            type="button"
            onClick={onViewAllWork}
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-neutral-700 hover:text-black transition-colors self-start sm:self-auto"
          >
            <span>{CLIENT_WORK_CONTENT.viewAllText.replace(' →', '')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
          </button>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENT_WORK_CONTENT.items.map((item) => (
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
