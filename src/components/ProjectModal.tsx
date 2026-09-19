import React, { useEffect } from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Banner Image */}
        <div className="relative h-48 sm:h-56 w-full shrink-0 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white/90 hover:text-white hover:bg-black/60 transition-colors backdrop-blur-sm"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-white/80">
              {item.category}
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight mt-0.5">
              {item.title}
            </h3>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-base font-semibold text-neutral-900 mb-1">
              {item.tagline}
            </h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {item.summary}
            </p>
          </div>

          {/* Deliverables */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
              Key Deliverables
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {item.deliverables.map((del) => (
                <div key={del} className="flex items-center gap-2 text-xs font-medium text-neutral-700 bg-neutral-50 px-3 py-2 rounded-lg border border-neutral-200/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2.5">
              Technology Stack
            </h5>
            <div className="flex flex-wrap gap-2">
              {item.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium bg-neutral-100 text-neutral-800 px-2.5 py-1 rounded-md border border-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-semibold text-neutral-500 hover:text-neutral-900"
            >
              Back to Overview
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onInquire();
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg bg-[#111827] text-white hover:bg-neutral-800 transition-colors"
            >
              <span>Discuss a similar project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
