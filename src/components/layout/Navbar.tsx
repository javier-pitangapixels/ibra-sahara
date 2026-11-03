'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { Currency, Language } from '@/data/packages';
import { Dictionary } from '@/lib/dictionaries';
import { useCurrency } from '@/lib/currency-context';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

interface NavbarProps {
  lang: Language;
  dict: Dictionary;
}

const CURRENCIES: { code: Currency; label: string }[] = [
  { code: 'EUR', label: 'EUR €' },
  { code: 'USD', label: 'USD $' },
  { code: 'TND', label: 'TND' },
];

const LANGUAGES: { code: Language; slug: string; label: string }[] = [
  { code: 'EN', slug: 'en', label: 'EN' },
  { code: 'FR', slug: 'fr', label: 'FR' },
  { code: 'AR', slug: 'ar', label: 'عربي' },
];

export function Navbar({ lang, dict }: NavbarProps) {
  const { currency, setCurrency } = useCurrency();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const whatsappDirectUrl = buildWhatsAppUrl({ lang });

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 backdrop-blur-md border-b ${
        scrolled
          ? 'bg-[#F4EFE6]/95 border-[#14181D]/12 text-[#14181D] shadow-sm py-2.5'
          : 'bg-[#14181D]/75 border-[#F4EFE6]/15 text-[#F4EFE6] py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        {/* Brand Logo dynamically switching between light and dark horizontal lockup */}
        <Link
          href={`/${lang.toLowerCase()}`}
          className="flex items-center shrink-0 focus:outline-none"
          aria-label="Ibra Sahara Home"
        >
          <Image
            src={
              scrolled
                ? '/brand/logo-horizontal-light.svg'
                : '/brand/logo-horizontal-dark.svg'
            }
            alt="Ibra Sahara - Desert Expeditions"
            width={200}
            height={40}
            priority
            className="h-9 sm:h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Anchor Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <a
            href="#packages"
            className="hover:text-[#C85A32] transition-colors"
          >
            {dict.nav.packages}
          </a>
          <a
            href="#curator"
            className="hover:text-[#C85A32] transition-colors"
          >
            {dict.nav.curator}
          </a>
          <a
            href="#custom-trip"
            className="hover:text-[#C85A32] transition-colors"
          >
            {dict.nav.customTrip}
          </a>
          <a
            href="#reviews"
            className="hover:text-[#C85A32] transition-colors"
          >
            {dict.nav.reviews}
          </a>
          <a
            href="#faq"
            className="hover:text-[#C85A32] transition-colors"
          >
            {dict.nav.faq}
          </a>
        </nav>

        {/* Controls: Segmented Currency Switcher, Language Switcher & WhatsApp CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Segmented Currency Switcher */}
          <div
            role="group"
            aria-label={dict.nav.currencyLabel}
            className={`inline-flex items-center rounded-full p-0.5 text-xs font-semibold border ${
              scrolled
                ? 'bg-[#EAE2D3] border-[#14181D]/10 text-[#14181D]'
                : 'bg-[#14181D]/80 border-[#F4EFE6]/20 text-[#F4EFE6]'
            }`}
          >
            {CURRENCIES.map((item) => {
              const active = currency === item.code;
              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setCurrency(item.code)}
                  className={`px-2 sm:px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                    active
                      ? 'bg-[#C85A32] text-white shadow-xs'
                      : 'hover:opacity-80'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Language Switcher */}
          <div
            role="group"
            aria-label={dict.nav.langLabel}
            className={`inline-flex items-center rounded-full p-0.5 text-xs font-semibold border ${
              scrolled
                ? 'bg-[#EAE2D3] border-[#14181D]/10 text-[#14181D]'
                : 'bg-[#14181D]/80 border-[#F4EFE6]/20 text-[#F4EFE6]'
            }`}
          >
            {LANGUAGES.map((item) => {
              const active = lang === item.code;
              return (
                <Link
                  key={item.code}
                  href={`/${item.slug}`}
                  className={`px-2 sm:px-2.5 py-1 rounded-full transition-all ${
                    active
                      ? 'bg-[#14181D] text-[#F4EFE6] shadow-xs'
                      : 'hover:opacity-80'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Direct WhatsApp Action Button */}
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#1E7E48] hover:bg-[#156236] text-white text-xs sm:text-sm font-semibold px-4 py-2 shadow-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>{dict.nav.whatsappCta}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
