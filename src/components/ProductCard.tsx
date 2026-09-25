import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import type { ProductItem } from '../data/content';
import { NivaOpsInterfacePreview, CrmInterfacePreview } from './ProductPreviews';

interface ProductCardProps {
  product: ProductItem;
  onSelect: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const isNiva = product.id === 'nivaops';

  return (
    <div
      onClick={() => onSelect(product)}
      className="group relative bg-[#FFFFFF] rounded-xl border border-[#E5E7EB] p-6 sm:p-8 hover:border-[#12151C]/40 transition-all duration-200 flex flex-col justify-between cursor-pointer"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Product Information */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full py-1">
          <div>
            {/* Status & Name */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-[#E5E7EB] text-[#12151C]">
                {product.status}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            </div>

            <h3 className="text-2xl font-bold text-[#12151C] tracking-tight">
              {product.name}
            </h3>

            <div className="text-sm font-semibold text-[#12151C]/80 mt-1 font-mono">
              {product.positioning}
            </div>

            <p className="mt-4 text-sm text-[#12151C]/70 leading-relaxed font-normal">
              {product.description}
            </p>

            {/* Core Capabilities */}
            <div className="mt-6 pt-5 border-t border-[#E5E7EB] space-y-2">
              <div className="text-[10px] font-mono uppercase text-[#718096] tracking-wider mb-2">
                Operational Capabilities
              </div>
              {product.capabilities.map((cap) => (
                <div key={cap} className="flex items-start gap-2 text-xs text-[#12151C]/85">
                  <Check className="w-3.5 h-3.5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Link */}
          <div className="mt-8 pt-4 border-t border-[#E5E7EB]">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#12151C] group-hover:text-[#3B82F6] transition-colors">
              <span>{product.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>

        {/* Right Column: Real Interface Preview */}
        <div className="lg:col-span-7 w-full overflow-hidden">
          <div className="transform group-hover:scale-[1.01] transition-transform duration-200">
            {isNiva ? <NivaOpsInterfacePreview /> : <CrmInterfacePreview />}
          </div>
        </div>
      </div>
    </div>
  );
};
