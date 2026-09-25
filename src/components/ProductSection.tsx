import React from 'react';
import { PRODUCTS_CONTENT } from '../data/content';
import type { ProductItem } from '../data/content';
import { ProductCard } from './ProductCard';

interface ProductSectionProps {
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({ onSelectProduct }) => {
  return (
    <section id="products" className="py-16 sm:py-24 border-b border-[#E5E7EB] bg-[#F4F6F9]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-medium tracking-wider uppercase text-[#12151C]/60 mb-2">
            {PRODUCTS_CONTENT.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#12151C] tracking-tight">
            {PRODUCTS_CONTENT.heading}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#12151C]/70 font-normal">
            {PRODUCTS_CONTENT.subheading}
          </p>
        </div>

        {/* Product Cards Stack */}
        <div className="space-y-8">
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
