import { useState, useEffect } from 'react';
import { Menu, X } from './icons';
import { navItems } from '../types';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#FAF8F5]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#3E2723] [text-shadow:_0_1px_12px_rgb(255_255_255_/_90%)]">
          오늘도빵<span className="text-sm md:text-base font-semibold ml-2 text-[#5C4033]">Bakery & Cafe</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-bold text-[#3E2723] hover:text-black transition-colors [text-shadow:_0_2px_10px_rgb(255_255_255_/_90%)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#5C4033] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-[#FAF8F5] shadow-lg border-t border-[#E8DFD8]">
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-6 py-4 text-lg font-medium text-[#5C4033] hover:bg-[#F0E6DD] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
