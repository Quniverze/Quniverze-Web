import React from 'react';

interface WordmarkProps {
  className?: string;
  light?: boolean;
}

export const QuniverzeWordmark: React.FC<WordmarkProps> = ({ className = 'text-xl font-bold tracking-tight', light = false }) => (
  <span className={`inline-flex items-baseline font-bold font-sans tracking-tight select-none ${light ? 'text-[#F4F6F9]' : 'text-[#12151C]'} ${className}`}>
    <span>Quniverze</span>
    <span className="text-[#3B82F6] font-bold">.</span>
  </span>
);

export const QMonogram: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => (
  <div
    style={{ width: size, height: size }}
    className={`inline-flex items-center justify-center rounded-lg bg-[#12151C] text-[#F4F6F9] font-bold select-none ${className}`}
  >
    <svg viewBox="0 0 32 32" className="w-4/5 h-4/5 fill-current">
      <path d="M16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24C17.6569 24 19.1912 23.498 20.4648 22.6364L22.2929 24.4645C22.6834 24.855 23.3166 24.855 23.7071 24.4645C24.0976 24.074 24.0976 23.4408 23.7071 23.0503L21.9366 21.2798C23.218 19.866 24 18.0212 24 16C24 11.5817 20.4183 8 16 8ZM16 11.5C18.4853 11.5 20.5 13.5147 20.5 16C20.5 18.4853 18.4853 20.5 16 20.5C13.5147 20.5 11.5 18.4853 11.5 16C11.5 13.5147 13.5147 11.5 16 11.5Z" />
    </svg>
  </div>
);

export const NivaOpsLogo: React.FC<{ className?: string; iconOnly?: boolean }> = ({ className = 'h-5 w-5', iconOnly = false }) => (
  <div className="inline-flex items-center gap-2">
    <div className={`flex items-center justify-center rounded-md bg-[#12151C] text-[#F4F6F9] font-bold text-[11px] select-none ${className}`}>
      N
    </div>
    {!iconOnly && <span className="font-semibold text-[#12151C] text-sm tracking-tight">NivaOps</span>}
  </div>
);

export const CrmLogo: React.FC<{ className?: string; iconOnly?: boolean }> = ({ className = 'h-5 w-5', iconOnly = false }) => (
  <div className="inline-flex items-center gap-2">
    <div className={`relative flex items-center justify-center rounded-full border-[2px] border-[#12151C] ${className}`}>
      <div className="w-1.5 h-1.5 rounded-full bg-[#12151C]" />
    </div>
    {!iconOnly && <span className="font-semibold text-[#12151C] text-sm tracking-tight">Quniverze CRM</span>}
  </div>
);

export const BovenLogo: React.FC<{ className?: string }> = ({ className = 'h-4 w-4' }) => (
  <div className="inline-flex items-center gap-2">
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L1 21h22L12 2zm0 4.5l7.5 13H4.5L12 6.5z" />
    </svg>
    <span className="font-semibold text-[#12151C] text-sm tracking-tight">Boven</span>
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
    <span className="font-semibold text-[#12151C] text-sm tracking-tight">IGCC</span>
  </div>
);

export const StayBLogo: React.FC<{ className?: string }> = ({ className = 'h-4 w-4' }) => (
  <div className="inline-flex items-center gap-2">
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 6h6a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H7" />
      <path d="M7 12h7a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H7" />
      <line x1="7" y1="4" x2="7" y2="20" />
    </svg>
    <span className="font-semibold text-[#12151C] text-sm tracking-tight">StayB</span>
  </div>
);
