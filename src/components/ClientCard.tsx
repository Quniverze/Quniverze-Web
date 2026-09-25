import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { ClientWorkItem } from '../data/content';

interface ClientCardProps {
  item: ClientWorkItem;
  onSelect: (item: ClientWorkItem) => void;
}

export const ClientCard: React.FC<ClientCardProps> = ({ item, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(item)}
      className="group relative bg-[#FFFFFF] rounded-xl border border-[#E5E7EB] p-7 sm:p-8 flex flex-col justify-between hover:border-[#12151C]/40 transition-all duration-200 cursor-pointer shadow-sm"
    >
      <div>
        {/* Top Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#E5E7EB]">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#718096]">
              {item.businessType}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#12151C] tracking-tight mt-1">
              {item.title}
            </h3>
          </div>
          <div className="w-7 h-7 rounded-lg bg-[#F4F6F9] border border-[#E5E7EB] flex items-center justify-center text-[#12151C] group-hover:bg-[#12151C] group-hover:text-white transition-colors">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Contribution Badge */}
        <div className="my-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F4F6F9] border border-[#E5E7EB] text-xs font-mono text-[#12151C]">
            <span className="text-[#3B82F6] font-bold">Contribution:</span>
            <span>{item.contribution}</span>
          </div>
        </div>

        {/* Project Description */}
        <p className="text-sm text-[#12151C]/75 leading-relaxed font-normal">
          {item.description}
        </p>

        {/* Scope Checklist */}
        <div className="mt-6 pt-4 border-t border-[#E5E7EB] space-y-2">
          <div className="text-[10px] font-mono uppercase text-[#718096] tracking-wider mb-2">
            Scope Delivered
          </div>
          {item.scope.map((s) => (
            <div key={s} className="flex items-center gap-2 text-xs text-[#12151C]/85">
              <span className="w-1 h-1 rounded-full bg-[#12151C]" />
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Footer */}
      <div className="mt-8 pt-4 border-t border-[#E5E7EB] flex flex-wrap gap-1.5">
        {item.techStack.map((tech) => (
          <span
            key={tech}
            className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F4F6F9] text-[#718096] border border-[#E5E7EB]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
