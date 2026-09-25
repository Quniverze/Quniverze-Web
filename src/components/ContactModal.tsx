import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Check } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSubject?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, defaultSubject = '' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: defaultSubject || 'Selective Digital Product',
    message: ''
  });



  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#12151C]/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-lg bg-[#FFFFFF] rounded-2xl shadow-2xl border border-[#E5E7EB] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-[#E5E7EB] flex items-start justify-between bg-[#F4F6F9]">
          <div>
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#3B82F6]">
              DIRECT ENGAGEMENT
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#12151C] tracking-tight mt-1">
              Start a project.
            </h3>
            <p className="text-xs text-[#718096] mt-1 font-normal">
              Tell us what you're building. We review inquiries directly with our engineering team.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#12151C]/50 hover:text-[#12151C] rounded-lg hover:bg-[#E5E7EB] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-10 h-10 bg-[#12151C] text-[#3B82F6] rounded-full flex items-center justify-center mx-auto">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h4 className="text-lg font-bold text-[#12151C]">Inquiry Received</h4>
              <p className="text-xs sm:text-sm text-[#12151C]/75 max-w-sm mx-auto leading-relaxed">
                Thank you. We review technical and product requirements carefully and will respond directly.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-4 px-5 py-2 text-xs font-semibold rounded-lg bg-[#12151C] text-[#F4F6F9] hover:bg-[#232834]"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#12151C] mb-1 font-mono uppercase">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E7EB] text-[#12151C] focus:outline-none focus:border-[#3B82F6] bg-[#F4F6F9]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#12151C] mb-1 font-mono uppercase">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E7EB] text-[#12151C] focus:outline-none focus:border-[#3B82F6] bg-[#F4F6F9]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#12151C] mb-1 font-mono uppercase">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Systems"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E7EB] text-[#12151C] focus:outline-none focus:border-[#3B82F6] bg-[#F4F6F9]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#12151C] mb-1 font-mono uppercase">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E7EB] text-[#12151C] focus:outline-none focus:border-[#3B82F6] bg-[#F4F6F9]"
                  >
                    <option value="Selective Digital Product">Selective Digital Product</option>
                    <option value="NivaOps Property Operations">NivaOps Property Operations</option>
                    <option value="Quniverze CRM Early Access">Quniverze CRM Early Access</option>
                    <option value="Careers / Engineering Roles">Careers / Engineering Roles</option>
                    <option value="General Conversation">General Conversation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#12151C] mb-1 font-mono uppercase">
                  Project Context / Message *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Outline the real problem or systems needed..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E7EB] text-[#12151C] focus:outline-none focus:border-[#3B82F6] bg-[#F4F6F9] resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3.5 py-2 text-xs font-semibold text-[#718096] hover:text-[#12151C]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg bg-[#12151C] text-[#F4F6F9] hover:bg-[#232834]"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#3B82F6]" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
