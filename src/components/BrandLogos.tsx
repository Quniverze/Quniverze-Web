import React from 'react';

export const NivaOpsLogo: React.FC<{ className?: string; iconOnly?: boolean }> = ({ className = 'h-5 w-5', iconOnly = false }) => (
  <div className="inline-flex items-center gap-2">
    <div className={`flex items-center justify-center rounded-md bg-[#111827] text-white font-bold text-[11px] select-none ${className}`}>
      N
    </div>
    {!iconOnly && <span className="font-semibold text-neutral-900 text-[15px] tracking-tight">NivaOps</span>}
  </div>
);

export const CrmLogo: React.FC<{ className?: string; iconOnly?: boolean }> = ({ className = 'h-5 w-5', iconOnly = false }) => (
  <div className="inline-flex items-center gap-2">
    <div className={`relative flex items-center justify-center rounded-full border-[2.5px] border-[#1e293b] ${className}`}>
      <div className="w-1.5 h-1.5 rounded-full bg-[#1e293b]"></div>
    </div>
    {!iconOnly && <span className="font-semibold text-neutral-900 text-[15px] tracking-tight">Quniverze CRM</span>}
  </div>
);

export const BovenLogo: React.FC<{ className?: string }> = ({ className = 'h-4 w-4' }) => (
  <div className="inline-flex items-center gap-2">
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L1 21h22L12 2zm0 4.5l7.5 13H4.5L12 6.5z" />
    </svg>
    <span className="font-semibold text-neutral-900 text-[15px] tracking-tight">Boven</span>
  </div>
);

export const IgccLogo: React.FC<{ className?: string }> = ({ className = 'h-4 w-4' }) => (
  <div className="inline-flex items-center gap-2">
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M12 2l8 4.5v9l-8 4.5-8-4.5v-9l8-4.5z" />
      <path d="M12 11l8-4.5" />
      <path d="M12 11v10" />
      <path d="M12 11l-8-4.5" />
    </svg>
    <span className="font-semibold text-neutral-900 text-[15px] tracking-tight">IGCC</span>
  </div>
);

export const StayBLogo: React.FC<{ className?: string }> = ({ className = 'h-4 w-4' }) => (
  <div className="inline-flex items-center gap-2">
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 6h6a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H7" />
      <path d="M7 12h7a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H7" />
      <line x1="7" y1="4" x2="7" y2="20" />
    </svg>
    <span className="font-semibold text-neutral-900 text-[15px] tracking-tight">StayB</span>
  </div>
);
