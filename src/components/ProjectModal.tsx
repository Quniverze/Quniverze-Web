import React, { useEffect } from 'react';
import { X, ArrowRight, Check } from 'lucide-react';
import type { ClientWorkItem } from '../data/content';

interface ProjectModalProps {
  item: ClientWorkItem | null;
  onClose: () => void;
  onInquire: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ item, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && item) onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#12151C]/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-xl bg-[#FFFFFF] rounded-xl shadow-2xl border border-[#E5E7EB] overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-[#E5E7EB] flex items-start justify-between bg-[#F4F6F9]">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#718096]">
              {item.businessType}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#12151C] tracking-tight mt-1">
              {item.title}
            </h3>
            <div className="mt-2 text-xs font-mono text-[#3B82F6] font-semibold">
              Contribution: {item.contribution}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#12151C]/50 hover:text-[#12151C] rounded-lg hover:bg-[#E5E7EB] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <div className="text-[10px] font-mono uppercase text-[#718096] tracking-wider mb-2">
              System Context
            </div>
            <p className="text-sm text-[#12151C]/80 leading-relaxed font-normal">
              {item.description}
            </p>
          </div>

          {/* Scope Delivered */}
          <div>
            <div className="text-[10px] font-mono uppercase text-[#718096] tracking-wider mb-3">
              Delivered System Scope
            </div>
            <div className="space-y-2">
              {item.scope.map((s) => (
                <div key={s} className="flex items-center gap-2 text-xs text-[#12151C]/85">
                  <Check className="w-4 h-4 text-[#3B82F6] shrink-0" />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <div className="text-[10px] font-mono uppercase text-[#718096] tracking-wider mb-2">
              Technology Stack
            </div>
            <div className="flex flex-wrap gap-1.5">
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

          {/* Actions */}
          <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-semibold text-[#718096] hover:text-[#12151C]"
            >
              Back to Overview
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onInquire();
              }}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-[#12151C] text-[#F4F6F9] hover:bg-[#232834]"
            >
              <span>Discuss a similar project</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#3B82F6]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
