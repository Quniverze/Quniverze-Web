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

export const NivaOpsBadge: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`inline-flex items-center gap-2 ${className}`}>
    <div className="w-5 h-5 rounded bg-[#12151C] text-white flex items-center justify-center font-bold text-[10px]">
      N
    </div>
    <span className="font-semibold text-xs text-[#12151C] tracking-tight">NivaOps</span>
  </div>
);

export const CrmBadge: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`inline-flex items-center gap-2 ${className}`}>
    <div className="w-5 h-5 rounded border border-[#12151C] flex items-center justify-center">
      <div className="w-1.5 h-1.5 rounded-full bg-[#12151C]" />
    </div>
    <span className="font-semibold text-xs text-[#12151C] tracking-tight">Quniverze CRM</span>
  </div>
);

export const BovenBadge: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`inline-flex items-center gap-1.5 ${className}`}>
    <span className="font-semibold text-xs text-[#12151C] tracking-tight">Boven Frontier</span>
  </div>
);

export const IgccBadge: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`inline-flex items-center gap-1.5 ${className}`}>
    <span className="font-semibold text-xs text-[#12151C] tracking-tight">IGCC</span>
  </div>
);

export const StayBBadge: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`inline-flex items-center gap-1.5 ${className}`}>
    <span className="font-semibold text-xs text-[#12151C] tracking-tight">StayB</span>
  </div>
);
