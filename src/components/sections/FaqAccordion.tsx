'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Dictionary } from '@/lib/dictionaries';

interface FaqAccordionProps {
  dict: Dictionary;
}

export function FaqAccordion({ dict }: FaqAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-20 sm:py-24 bg-[#EAE2D3]/50 text-[#14181D] border-t border-[#14181D]/10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#14181D]/12 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#C85A32]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{dict.faqSection.eyebrow}</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14181D]">
            {dict.faqSection.title}
          </h2>
          <p className="text-base sm:text-lg text-[#4A4F55]">
            {dict.faqSection.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {dict.faqSection.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#14181D]/12 shadow-xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-start font-bold text-base sm:text-lg text-[#14181D] hover:text-[#C85A32] transition-colors cursor-pointer"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C85A32] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-sm sm:text-base text-[#4A4F55] leading-relaxed border-t border-[#14181D]/8">
                    <p className="pt-4">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
