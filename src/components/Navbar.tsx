import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/content';
import { QuniverzeWordmark } from './BrandLogos';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#F4F6F9]/95 backdrop-blur-md border-b border-[#E5E7EB] py-3.5'
          : 'bg-[#F4F6F9] py-5 border-b border-[#E5E7EB]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a href="#" className="flex items-center group">
          <QuniverzeWordmark className="text-xl sm:text-2xl" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#12151C]/75 hover:text-[#12151C] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Primary Action */}
        <div className="hidden md:flex items-center">
          <button
            type="button"
            onClick={onOpenContact}
            className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-[#12151C] text-[#F4F6F9] hover:bg-[#232834] active:scale-[0.98] transition-all duration-150"
          >
            <span>Start a project</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#3B82F6] group-hover:translate-x-0.5 transition-transform duration-150" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#12151C] focus:outline-none"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F4F6F9] border-b border-[#E5E7EB] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#12151C] py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-[#E5E7EB]">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-lg bg-[#12151C] text-[#F4F6F9]"
            >
              <span>Start a project</span>
              <ArrowRight className="w-4 h-4 text-[#3B82F6]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
