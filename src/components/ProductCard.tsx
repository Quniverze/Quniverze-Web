import React from 'react';
import { ArrowRight } from 'lucide-react';
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
      className="group bg-white rounded-2xl border border-[#E5E7EB] p-6 sm:p-10 hover:border-[#12151C]/30 transition-all duration-200 cursor-pointer shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Product Information */}
        <div className="lg:col-span-5 flex flex-col justify-between py-1">
          <div>
            {/* Status */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-mono font-medium tracking-wider uppercase text-[#12151C]/60">
                {product.status}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#12151C] tracking-tight">
              {product.name}
            </h3>

            <div className="text-sm font-medium text-[#12151C]/70 mt-1">
              {product.positioning}
            </div>

            <p className="mt-4 text-sm text-[#12151C]/70 leading-relaxed font-normal">
              {product.description}
            </p>

            {isNiva && (
              <div className="mt-6 pt-4 border-t border-[#E5E7EB]/80 text-xs font-mono text-[#3B82F6]">
                Production customer: StayB Properties
              </div>
            )}
          </div>

          {/* Action Link */}
          <div className="mt-8 pt-6 border-t border-[#E5E7EB]">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#12151C] group-hover:text-[#3B82F6] transition-colors">
              <span>{product.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-150" />
            </span>
          </div>
        </div>

        {/* Right Column: Real Interface Preview */}
        <div className="lg:col-span-7 w-full overflow-hidden">
          <div className="transform group-hover:scale-[1.008] transition-transform duration-300">
            {isNiva ? <NivaOpsInterfacePreview /> : <CrmInterfacePreview />}
          </div>
        </div>
      </div>
    </div>
  );
};
