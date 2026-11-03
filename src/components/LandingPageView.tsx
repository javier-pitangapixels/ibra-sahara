'use client';

import React, { useEffect } from 'react';
import { Language } from '@/data/packages';
import { getDictionary } from '@/lib/dictionaries';
import { CurrencyProvider } from '@/lib/currency-context';
import { Navbar } from '@/components/layout/Navbar';
import { MobileBottomBar } from '@/components/layout/MobileBottomBar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { CuratorAbout } from '@/components/sections/CuratorAbout';
import { PackagesGrid } from '@/components/sections/PackagesGrid';
import { CustomTripBuilder } from '@/components/sections/CustomTripBuilder';
import { TikTokGrid } from '@/components/sections/TikTokGrid';
import { FaqAccordion } from '@/components/sections/FaqAccordion';

export function LandingPageView({ lang }: { lang: Language }) {
  const dict = getDictionary(lang);
  const isRtl = lang === 'AR';

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang.toLowerCase();
  }, [isRtl, lang]);

  return (
    <CurrencyProvider>
      <div
        dir={isRtl ? 'rtl' : 'ltr'}
        lang={lang.toLowerCase()}
        className={`min-h-screen flex flex-col bg-[#F4EFE6] text-[#14181D] ${
          isRtl ? 'font-arabic' : 'font-sans'
        }`}
      >
        <Navbar lang={lang} dict={dict} />
        <main className="flex-1">
          <HeroSection lang={lang} dict={dict} />
          <CuratorAbout dict={dict} />
          <PackagesGrid lang={lang} dict={dict} />
          <CustomTripBuilder lang={lang} dict={dict} />
          <TikTokGrid dict={dict} />
          <FaqAccordion dict={dict} />
        </main>
        <Footer lang={lang} dict={dict} />
        <MobileBottomBar lang={lang} dict={dict} />
      </div>
    </CurrencyProvider>
  );
}

