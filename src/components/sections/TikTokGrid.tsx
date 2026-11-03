import React from 'react';
import Image from 'next/image';
import { Play, Eye, Star, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Dictionary } from '@/lib/dictionaries';

interface TikTokGridProps {
  dict: Dictionary;
}

export function TikTokGrid({ dict }: TikTokGridProps) {
  return (
    <section
      id="tiktok"
      className="py-20 sm:py-24 bg-[#F4EFE6] text-[#14181D]"
      style={{
        backgroundImage: "url('/brand/pattern-dunes.svg')",
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-block rounded-full bg-[#EAE2D3] border border-[#14181D]/12 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#C85A32]">
              {dict.tiktokSection.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14181D]">
              {dict.tiktokSection.title}
            </h2>
            <p className="text-base sm:text-lg text-[#4A4F55]">
              {dict.tiktokSection.subtitle}
            </p>
          </div>

          <a
            href="https://www.tiktok.com/@IbraSahara"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#14181D] hover:bg-[#C85A32] text-[#F4EFE6] font-bold text-xs sm:text-sm px-6 py-3.5 shadow-md transition-colors shrink-0 self-start md:self-auto"
          >
            <span>{dict.tiktokSection.followCta}</span>
            <ExternalLink className="w-4 h-4 shrink-0" />
          </a>
        </div>

        {/* 4 Vertical 9:16 Aspect Ratio TikTok Reel Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.tiktokSection.reels.map((reel) => (
            <a
              key={reel.id}
              href="https://www.tiktok.com/@IbraSahara"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-9/16 rounded-3xl overflow-hidden bg-[#14181D] shadow-lg border-2 border-white/80 hover:border-[#C85A32] transition-all duration-300 block"
            >
              <Image
                src={reel.image}
                alt={reel.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark Reel Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#14181D]/95 via-[#14181D]/25 to-[#14181D]/45" />

              {/* Top TikTok Handle & Category Pill */}
              <div className="absolute top-4 inset-x-4 flex items-center justify-between gap-2">
                <span className="rounded-full bg-[#14181D]/75 backdrop-blur-xs text-[#F4EFE6] text-[11px] font-bold px-3 py-1 border border-[#F4EFE6]/15">
                  @IbraSahara
                </span>
                <span className="rounded-full bg-[#C85A32] text-white text-[11px] font-bold px-2.5 py-1">
                  {reel.tag}
                </span>
              </div>

              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#F4EFE6]/20 backdrop-blur-md border border-[#F4EFE6]/40 flex items-center justify-center text-white group-hover:bg-[#C85A32] group-hover:scale-110 transition-all shadow-xl">
                  <Play className="w-6 h-6 fill-current ms-0.5" />
                </div>
              </div>

              {/* Bottom Reel Metadata */}
              <div className="absolute bottom-4 inset-x-4 space-y-2 text-[#F4EFE6]">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37]">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{reel.views}</span>
                </div>
                <h3 className="font-bold text-sm sm:text-base leading-snug">
                  {reel.title}
                </h3>
                <p className="text-xs text-[#F4EFE6]/80 line-clamp-2">
                  {reel.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* 3 Verified Client Review Cards with Nationality Flags and 5 Gold Stars */}
        <div className="pt-8 border-t border-[#14181D]/12 space-y-8">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-center text-[#14181D]">
            {dict.tiktokSection.reviewsTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dict.tiktokSection.reviews.map((rev, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-[#14181D]/10 p-6 shadow-sm flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  {/* 5 Gold Stars + Tour Badge */}
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
                      <span>Verified</span>
                    </span>
                  </div>

                  <p className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">
                    {rev.tourType}
                  </p>

                  <p className="text-sm text-[#14181D] leading-relaxed italic">
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
      </div>
    </section>
  );
}
