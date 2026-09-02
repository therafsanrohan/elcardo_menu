"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/offers", label: "Offers" },
    { href: "/about", label: "About" },
    { href: "/location", label: "Location" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? "bg-[var(--color-brand-obsidian)]/80 backdrop-blur-md border-b border-white/10 shadow-lg" 
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="relative w-44 h-14">
            <Image src="/logo.svg" alt="El Cardo Logo" fill className="object-contain object-left" priority />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`font-ui text-sm uppercase tracking-widest transition-colors ${
                    isActive 
                      ? "text-[var(--color-brand-gold)]" 
                      : "text-[var(--color-brand-ivory)] hover:text-[var(--color-brand-gold)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button 
            className="md:hidden p-2 text-[var(--color-brand-ivory)]"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div 
          className={`fixed inset-y-0 right-0 w-[280px] bg-[var(--color-brand-surface)] border-l border-white/5 shadow-2xl transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={e => e.stopPropagation()}
        >
          <div className="p-6 flex justify-end border-b border-white/5">
            <button 
              className="p-2 text-[var(--color-brand-ivory)] hover:text-[var(--color-brand-gold)] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="p-6 flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-ui text-lg uppercase tracking-widest transition-colors ${
                    isActive 
                      ? "text-[var(--color-brand-gold)] font-bold" 
                      : "text-[var(--color-brand-ivory)] hover:text-[var(--color-brand-gold)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
