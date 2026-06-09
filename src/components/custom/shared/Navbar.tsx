'use client';

import Logo from '@/components/custom/shared/Logo';
import { Button } from '@/components/ui/button';
import { Menu, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NAV_LINKS = [
  {
    name: 'হোম',
    href: '/',
  },
  {
    name: 'আমাদের সম্পর্কে',
    href: '/about',
  },
  {
    name: 'উমরাহ প্যাকেজ',
    href: '/umrah-packages',
  },
  {
    name: 'হজ প্যাকেজ',
    href: '/hajj-packages',
  },
  {
    name: 'গ্যালারি',
    href: '/gallery',
  },
  {
    name: 'যোগাযোগ',
    href: '/contact',
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-zinc-950 text-white">
        <div className="container mx-auto flex h-10 items-center justify-between px-4">
          <div className="flex items-center gap-6 text-sm">
            <a
              href="mailto:info@example.com"
              className="flex items-center gap-2 hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              info@example.com
            </a>

            <a
              href="tel:01754532121"
              className="hidden sm:flex items-center gap-2 hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              01754532121
            </a>
          </div>

          <div className="text-xs text-zinc-400">লাইসেন্স নং: ১৪৬৭</div>
        </div>
      </div>

      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
        <div className="container mx-auto">
          <div className="flex h-20 items-center justify-between px-4">
            <Logo />

            {/* Desktop */}
            <nav className="hidden lg:flex items-center gap-2">
              {NAV_LINKS.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant={isActive ? 'default' : 'ghost'}
                      className={
                        isActive ? 'bg-emerald-600 hover:bg-emerald-700' : ''
                      }
                    >
                      {item.name}
                    </Button>
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex">
              <Button asChild>
                <a href="tel:01754532121">যোগাযোগ করুন</a>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* Mobile Menu */}
          {mobileOpen && (
            <div className="lg:hidden border-t bg-background">
              <nav className="flex flex-col p-4">
                {NAV_LINKS.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`
                        rounded-xl px-4 py-3 text-sm font-medium transition-colors
                        ${
                          isActive
                            ? 'bg-emerald-600 text-white'
                            : 'hover:bg-muted'
                        }
                      `}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                <Button className="mt-4" asChild>
                  <a href="tel:01754532121">যোগাযোগ করুন</a>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
