import React from 'react';
import { FOOTER_CONTENT } from '../data/content';
import { QuniverzeWordmark } from './BrandLogos';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#12151C] text-[#F4F6F9] py-16 sm:py-20 border-t border-[#232834]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#232834]">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <QuniverzeWordmark className="text-2xl" light />
            <p className="text-xs font-mono text-[#A0AEC0] mt-3">
              {FOOTER_CONTENT.tagline}
            </p>
            <p className="text-xs text-[#A0AEC0]/70 mt-4 leading-relaxed max-w-xs font-normal">
              Software products owned and operated. Thoughtful digital systems engineered for selected businesses.
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {FOOTER_CONTENT.columns.map((col) => (
              <div key={col.title}>
                <div className="text-[10px] font-mono font-bold tracking-wider text-[#A0AEC0] uppercase mb-4">
                  {col.title}
                </div>
                <ul className="space-y-2.5 text-xs">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[#F4F6F9]/75 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A0AEC0] font-mono gap-4">
          <div>{FOOTER_CONTENT.copyright}</div>
          <div className="flex items-center gap-4">
            <span>Built with precision. Operating in the real world.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
