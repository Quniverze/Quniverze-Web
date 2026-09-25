import React, { useEffect } from 'react';
import { X, ArrowRight, Check } from 'lucide-react';
import type { ProductItem } from '../data/content';
import { NivaOpsInterfacePreview, CrmInterfacePreview } from './ProductPreviews';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onInquire: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && product) onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;
  const isNiva = product.id === 'nivaops';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#12151C]/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-2xl bg-[#FFFFFF] rounded-xl shadow-2xl border border-[#E5E7EB] overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-[#E5E7EB] flex items-start justify-between bg-[#F4F6F9]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-[#E5E7EB] text-[#12151C]">
                {product.status}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#12151C] tracking-tight mt-2">
              {product.name}
            </h3>
            <p className="text-xs font-mono text-[#718096] mt-0.5">
              {product.positioning}
            </p>
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

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <p className="text-sm text-[#12151C]/80 leading-relaxed font-normal">
            {product.description}
          </p>

          {/* Interface Preview */}
          <div className="rounded-xl overflow-hidden border border-[#E5E7EB]">
            {isNiva ? <NivaOpsInterfacePreview /> : <CrmInterfacePreview />}
          </div>

          {/* Capabilities */}
          <div>
            <div className="text-[10px] font-mono uppercase text-[#718096] tracking-wider mb-3">
              Operational Capabilities
            </div>
            <div className="space-y-2">
              {product.capabilities.map((cap) => (
                <div key={cap} className="flex items-start gap-2.5 text-xs text-[#12151C]/85">
                  <Check className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
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
              <span>{isNiva ? 'Inquire About NivaOps' : 'Request CRM Access'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#3B82F6]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
