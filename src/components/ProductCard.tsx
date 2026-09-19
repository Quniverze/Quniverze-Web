import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { ProductItem } from '../data/content';
import { NivaOpsLogo, CrmLogo } from './BrandLogos';
import { NivaOpsDashboardPreview, CrmDashboardPreview } from './ProductPreviews';

interface ProductCardProps {
  product: ProductItem;
  onSelect: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const isNiva = product.id === 'nivaops';

  return (
    <div
      onClick={() => onSelect(product)}
      className="group relative bg-[#ECEBE4]/70 hover:bg-[#E7E6DE]/90 rounded-2xl border border-[#DFDED6] p-6 sm:p-8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300 flex flex-col justify-between cursor-pointer"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Info Column */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full py-1">
          <div>
            {/* Product Header Logo */}
            <div className="mb-5">
              {isNiva ? <NivaOpsLogo className="h-6 w-6 text-xs" /> : <CrmLogo className="h-6 w-6" />}
            </div>

            {/* Headline */}
            <h3 className="text-lg sm:text-xl font-bold text-[#111827] tracking-tight leading-snug">
              {product.tagline}
            </h3>

            {/* Supporting text */}
            <p className="mt-3 text-sm text-[#4B5563] leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Action Link */}
          <div className="mt-8 pt-2">
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#111827] group-hover:text-neutral-700 transition-colors">
              <span>{product.ctaText.replace(' →', '')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </div>
        </div>

        {/* Right UI Preview Column */}
        <div className="lg:col-span-7 w-full overflow-hidden">
          <div className="transform group-hover:scale-[1.01] transition-transform duration-300">
            {isNiva ? <NivaOpsDashboardPreview /> : <CrmDashboardPreview />}
          </div>
        </div>
      </div>
    </div>
  );
};
