import React from 'react';
import { PRODUCTS_CONTENT } from '../data/content';
import type { ProductItem } from '../data/content';
import { ProductCard } from './ProductCard';

interface ProductSectionProps {
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({ onSelectProduct }) => {
  return (
    <section id="products" className="py-20 sm:py-28 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-[#12151C]/50 mb-3">
            {PRODUCTS_CONTENT.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12151C] tracking-tight leading-[1.12]">
            {PRODUCTS_CONTENT.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#12151C]/70 font-normal">
            {PRODUCTS_CONTENT.subheading}
          </p>
        </div>

        {/* Product Cards Stack */}
        <div className="space-y-10 sm:space-y-12">
          {PRODUCTS_CONTENT.items.map((product) => (
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
