import React from 'react';
import { FOOTER_CONTENT } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F7F6F2] py-14 border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Brand & Subtext */}
          <div>
            <span className="text-xl font-bold tracking-tight text-[#111827]">
              {FOOTER_CONTENT.brand}
            </span>
            <p className="text-xs text-neutral-500 mt-1 font-normal">
              {FOOTER_CONTENT.tagline}
            </p>
          </div>

          {/* Nav Links, Social Icons & Copyright */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 text-xs">
            {/* Links */}
            <div className="flex items-center gap-6">
              {FOOTER_CONTENT.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-medium text-neutral-600 hover:text-black transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-neutral-600">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-black transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.92 0 1.66-.74 1.66-1.66s-.74-1.66-1.66-1.66a1.66 1.66 0 0 0-1.66 1.66c0 .92.74 1.66 1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="hover:text-black transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-black transition-colors"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-neutral-400">
              {FOOTER_CONTENT.copyright}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
