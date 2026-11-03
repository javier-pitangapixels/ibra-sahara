import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, ExternalLink, MessageCircle } from 'lucide-react';
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
                <a href="#tiktok" className="hover:text-[#C85A32] transition-colors">
                  {dict.nav.tiktok}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#C85A32] transition-colors">
                  {dict.nav.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & OTA Listings */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C85A32]">
              {dict.footer.otaBookings}
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

            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#1E7E48] hover:bg-[#156236] text-white text-xs font-semibold px-3.5 py-2 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://www.tiktok.com/@IbraSahara"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#F4EFE6]/10 hover:bg-[#F4EFE6]/20 text-[#F4EFE6] text-xs font-semibold px-3.5 py-2 transition-colors"
              >
                <span>TikTok @IbraSahara</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://www.getyourguide.com/douz-l148204/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#F4EFE6]/10 hover:bg-[#F4EFE6]/20 text-[#F4EFE6] text-xs font-semibold px-3.5 py-2 transition-colors"
              >
                <span>GetYourGuide</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://www.tripadvisor.com/Attractions-g477973-Activities-Douz_Kebili_Governorate.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#F4EFE6]/10 hover:bg-[#F4EFE6]/20 text-[#F4EFE6] text-xs font-semibold px-3.5 py-2 transition-colors"
              >
                <span>TripAdvisor</span>
                <ExternalLink className="w-3 h-3" />
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
