'use client';

import { useState } from 'react';

const Navbar = () => {
  const NAV_LINKS = [
    'হোম',
    'আমাদের সম্পর্কে',
    'উমরাহ প্যাকেজ',
    'হজ প্যাকেজ',
    'গ্যালারি',
    'যোগাযোগ',
  ];
  const [activeNav, setActiveNav] = useState('হোম');

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-green-600 to-teal-700 flex items-center justify-center text-white font-bold text-lg">
            আ
          </div>
          <div>
            <div className="font-bold text-gray-900 text-sm leading-tight">
              আরমান আবির হজ সার্ভিস
            </div>
            <div className="text-xs text-green-600 font-medium">
              লাইসেন্স নং: ১৪৬৭
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => setActiveNav(link)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${activeNav === link ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-green-50 hover:text-green-700'}`}
            >
              {link}
            </a>
          ))}
        </div>
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="block py-2 text-gray-700 text-sm font-medium border-b border-gray-50 last:border-0"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
