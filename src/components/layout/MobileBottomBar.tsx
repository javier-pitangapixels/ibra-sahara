'use client';

import React from 'react';
import { MessageCircle, ShieldCheck } from 'lucide-react';
import { Language } from '@/data/packages';
import { Dictionary } from '@/lib/dictionaries';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

interface MobileBottomBarProps {
  lang: Language;
  dict: Dictionary;
}

export function MobileBottomBar({ lang, dict }: MobileBottomBarProps) {
  const whatsappUrl = buildWhatsAppUrl({ lang });

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[#14181D]/95 backdrop-blur-md border-t border-[#F4EFE6]/15 px-4 py-3 shadow-2xl">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-full bg-[#C85A32]/20 border border-[#C85A32]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div className="truncate">
            <p className="text-xs font-bold text-[#F4EFE6] truncate">
              {dict.mobileBar.assurance}
            </p>
            <p className="text-[11px] text-[#9BA3AE] truncate">
              {dict.mobileBar.subAssurance}
            </p>
          </div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#1E7E48] hover:bg-[#156236] text-white text-xs font-bold px-4 py-2.5 shadow-md shrink-0 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>{dict.mobileBar.cta}</span>
        </a>
      </div>
    </div>
  );
}
