import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { Language } from '@/data/packages';
import { Dictionary } from '@/lib/dictionaries';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

interface FooterProps {
  lang: Language;
  dict: Dictionary;
}

export function Footer({ lang, dict }: FooterProps) {
  const whatsappUrl = buildWhatsAppUrl({ lang });

  return (
    <footer className="bg-[#14181D] text-[#F4EFE6] border-t border-[#F4EFE6]/15 pb-24 md:pb-12 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#F4EFE6]/12">
          {/* Brand Column with Master Stacked Lockup */}
          <div className="md:col-span-5 space-y-4">
            <Image
              src="/brand/logo-stacked-dark.svg"
              alt="Ibra Sahara - Douz Tunisia"
              width={160}
              height={128}
              className="h-28 w-auto object-contain"
            />
            <p className="text-sm font-serif italic text-[#D4AF37]">
              “{dict.meta.tagline}”
            </p>
            <p className="text-sm text-[#9BA3AE] max-w-md leading-relaxed">
              {dict.footer.description}
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C85A32]">
              {dict.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F4EFE6]/85">
              <li>
                <a href="#packages" className="hover:text-[#C85A32] transition-colors">
                  {dict.nav.packages}
                </a>
              </li>
              <li>
                <a href="#curator" className="hover:text-[#C85A32] transition-colors">
                  {dict.nav.curator}
                </a>
              </li>
              <li>
                <a href="#custom-trip" className="hover:text-[#C85A32] transition-colors">
                  {dict.nav.customTrip}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#C85A32] transition-colors">
                  {dict.nav.reviews}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#C85A32] transition-colors">
                  {dict.nav.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Direct WhatsApp */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C85A32]">
              {dict.footer.contactHeading}
            </h3>

            <div className="space-y-2.5 text-sm text-[#9BA3AE]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C85A32] shrink-0 mt-0.5" />
                <span>{dict.footer.locationValue}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1E7E48] shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F4EFE6] font-semibold hover:text-[#1E7E48] transition-colors"
                  dir="ltr"
                >
                  +216 21 601 205 (WhatsApp)
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#1E7E48] hover:bg-[#156236] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{dict.nav.whatsappCta}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9BA3AE]">
          <p>© 2026 IBRA SAHARA. {dict.footer.rights}</p>
          <p dir="ltr">Douz 4260 • Kebili, Tunisia • 33.4663° N, 9.0203° E</p>
        </div>
      </div>
    </footer>
  );
}
