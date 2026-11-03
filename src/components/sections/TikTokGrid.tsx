import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { Dictionary } from '@/lib/dictionaries';

interface TikTokGridProps {
  dict: Dictionary;
}

export function TikTokGrid({ dict }: TikTokGridProps) {
  return (
    <section
      id="reviews"
      className="py-20 sm:py-24 bg-[#F4EFE6] text-[#14181D]"
      style={{
        backgroundImage: "url('/brand/pattern-dunes.svg')",
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block rounded-full bg-[#EAE2D3] border border-[#14181D]/12 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#C85A32]">
            {dict.reviewsSection.eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14181D]">
            {dict.reviewsSection.title}
          </h2>
          <p className="text-base sm:text-lg text-[#4A4F55]">
            {dict.reviewsSection.subtitle}
          </p>
        </div>

        {/* 3 Verified Client Review Cards with Nationality Flags and 5 Gold Stars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dict.reviewsSection.reviews.map((rev, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-[#14181D]/10 p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                {/* 5 Gold Stars + Verified Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div
                    className="flex items-center gap-1 text-[#D4AF37]"
                    aria-label="5 out of 5 stars"
                  >
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1E7E48]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Guest</span>
                  </span>
                </div>

                <p className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">
                  {rev.tourType}
                </p>

                <p className="text-sm sm:text-base text-[#14181D] leading-relaxed italic">
                  “{rev.text}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#14181D]/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 font-bold text-[#14181D]">
                  <span className="text-lg">{rev.flag}</span>
                  <span>{rev.name}</span>
                </div>
                <span className="text-[#4A4F55]">
                  {rev.country} • {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
