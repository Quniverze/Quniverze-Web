import React, { useEffect } from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { ProductItem } from '../data/content';
import { NivaOpsLogo, CrmLogo } from './BrandLogos';
import { NivaOpsDashboardPreview, CrmDashboardPreview } from './ProductPreviews';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-neutral-100 flex items-start justify-between bg-neutral-50/70">
          <div>
            <div className="flex items-center gap-3">
              {isNiva ? <NivaOpsLogo className="h-6 w-6" /> : <CrmLogo className="h-6 w-6" />}
              {product.status && (
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-neutral-200/70 text-neutral-700">
                  {product.status}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#111827] tracking-tight mt-3">
              {product.tagline}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              {product.description}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-800 rounded-lg hover:bg-neutral-200/50 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Live Preview Display */}
          <div className="rounded-xl overflow-hidden border border-neutral-200 bg-[#FAF9F5] p-2">
            {isNiva ? <NivaOpsDashboardPreview /> : <CrmDashboardPreview />}
          </div>

          {/* Key Capabilities */}
          {product.features && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                Core Architectural Capabilities
              </h4>
              <div className="space-y-2">
                {product.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5 text-xs text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Metrics */}
          {product.metrics && (
            <div className="grid grid-cols-3 gap-3 pt-2">
              {product.metrics.map((m) => (
                <div key={m.label} className="p-3 bg-neutral-50 rounded-lg border border-neutral-200/70 text-center">
                  <div className="text-base sm:text-lg font-bold text-neutral-900">{m.value}</div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-semibold text-neutral-500 hover:text-neutral-900"
            >
              Back to Products
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onInquire();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg bg-[#111827] text-white hover:bg-neutral-800 transition-colors"
            >
              <span>{isNiva ? 'Request NivaOps Access' : 'Inquire Early CRM Access'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
