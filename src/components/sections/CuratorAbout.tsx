import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { Dictionary } from '@/lib/dictionaries';
import { BrandIcon } from '@/components/ui/BrandIcon';

interface CuratorAboutProps {
  dict: Dictionary;
}

export function CuratorAbout({ dict }: CuratorAboutProps) {
  return (
    <section
      id="curator"
      className="relative py-20 sm:py-24 bg-[#F4EFE6] text-[#14181D] overflow-hidden"
      style={{
        backgroundImage: "url('/brand/pattern-dunes.svg')",
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Editorial Grid: Story + Real Photo of Ibra Leading the Caravan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block rounded-full bg-[#EAE2D3] border border-[#14181D]/12 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#C85A32]">
              {dict.curator.eyebrow}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14181D] leading-tight">
              {dict.curator.title}
            </h2>

            <p className="text-base sm:text-lg text-[#4A4F55] leading-relaxed">
              {dict.curator.subtitle}
            </p>

            <blockquote className="rounded-2xl bg-white border-s-4 border-[#C85A32] p-6 shadow-sm text-sm sm:text-base font-serif italic text-[#14181D]">
              {dict.curator.quote}
            </blockquote>

            {/* 4 Pillars Grid using Custom Brand Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {dict.curator.pillars.map((pillar, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-[#14181D]/10 p-5 shadow-xs flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#EAE2D3] text-[#C85A32] flex items-center justify-center shrink-0">
                    <BrandIcon name={pillar.icon} className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm sm:text-base text-[#14181D]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4A4F55] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Ibra's Authentic Sahara Caravan Portrait & Highlights Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-4/5 bg-[#14181D]">
              <Image
                src="/images/ibra-guide-leading-camels.jpg"
                alt="Ibra leading camel caravan across Grand Erg Oriental dunes in Douz"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14181D]/90 via-transparent to-transparent" />
              <div className="absolute bottom-5 inset-x-5 flex items-center justify-between gap-3 text-[#F4EFE6]">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold">
                    IBRA SAHARA • DOUZ
                  </p>
                  <p className="text-sm sm:text-base font-serif font-semibold">
                    Grand Erg Oriental, Tunisia
                  </p>
                </div>
                <Image
                  src="/brand/icon-dark.svg"
                  alt="Ibra Sahara Emblem"
                  width={44}
                  height={44}
                  className="w-11 h-11 shrink-0"
                />
              </div>
            </div>

            {/* Warm Hospitality Highlights Card */}
            <div className="rounded-2xl bg-[#14181D] text-[#F4EFE6] p-6 shadow-lg space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                {dict.curator.highlightsTitle}
              </h3>

              <div className="space-y-3">
                {dict.curator.highlightsPoints.map((pt, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F4EFE6]"
                  >
                    <Check className="w-4 h-4 text-[#1E7E48] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
