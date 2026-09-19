import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS_CONTENT } from '../data/content';
import type { ProductItem } from '../data/content';
import { ProductCard } from './ProductCard';

interface ProductSectionProps {
  onSelectProduct: (product: ProductItem) => void;
  onViewAllProducts: () => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({ onSelectProduct, onViewAllProducts }) => {
  return (
    <section id="products" className="py-16 sm:py-24 border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-neutral-500 mb-2">
              {PRODUCTS_CONTENT.eyebrow}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827] tracking-tight">
              {PRODUCTS_CONTENT.heading}
            </h2>
          </div>

          <button
            type="button"
            onClick={onViewAllProducts}
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-neutral-700 hover:text-black transition-colors self-start sm:self-auto"
          >
            <span>{PRODUCTS_CONTENT.viewAllText.replace(' →', '')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {PRODUCTS_CONTENT.products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
