import React from 'react';
import { MessageCircle, ArrowDown, Star, CheckCircle2, ExternalLink } from 'lucide-react';
import { Language } from '@/data/packages';
import { Dictionary } from '@/lib/dictionaries';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

interface HeroSectionProps {
  lang: Language;
  dict: Dictionary;
}

export function HeroSection({ lang, dict }: HeroSectionProps) {
  const whatsappUrl = buildWhatsAppUrl({ lang });

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#14181D] text-[#F4EFE6] pt-24 pb-16">
      {/* Ambient Autoplaying, Loop-Enabled, Muted Background Video + Real Sahara Poster */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/ibra-caravan-dunes.jpg"
          className="w-full h-full object-cover object-center opacity-55 scale-105 transition-transform duration-1000"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-sand-dunes-in-the-desert-41573-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Multi-stop Saharan Night & Warm Terracotta Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#14181D]/80 via-[#14181D]/65 to-[#14181D]/95" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Region and Language Pill */}
        <div className="inline-flex items-center gap-2 rounded-full bg-[#F4EFE6]/12 backdrop-blur-md border border-[#F4EFE6]/20 px-4 py-2 text-xs sm:text-sm font-medium text-[#F4EFE6] shadow-lg">
          <span>{dict.hero.pill}</span>
        </div>

        {/* Primary Heading (H1) */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F4EFE6] max-w-4xl mx-auto leading-[1.12]">
          {dict.hero.h1}
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-[#F4EFE6]/85 max-w-2xl mx-auto leading-relaxed font-normal">
          {dict.hero.subheadline}
        </p>

        {/* Quick Highlights Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-[#D4AF37] font-medium">
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#C85A32]" />
            {dict.hero.verifiedGuide}
          </span>
          <span className="opacity-40">•</span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#C85A32]" />
            {dict.hero.customOrSignature}
          </span>
        </div>

        {/* Direct Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#packages"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[#C85A32] hover:bg-[#A94622] text-white font-semibold text-base px-8 py-4 shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            <span>{dict.hero.exploreCta}</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[#1E7E48] hover:bg-[#156236] text-white font-semibold text-base px-8 py-4 shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{dict.hero.whatsappCta}</span>
          </a>
        </div>

        {/* Platform Trust Bar: Verified Badges linking to TripAdvisor, GetYourGuide, and TikTok */}
        <div className="pt-8 border-t border-[#F4EFE6]/15 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#9BA3AE] mb-4 font-semibold">
            {dict.hero.trustLabel}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            <a
              href="https://www.tripadvisor.com/Attractions-g477973-Activities-Douz_Kebili_Governorate.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#F4EFE6]/10 hover:bg-[#F4EFE6]/18 border border-[#F4EFE6]/15 px-4 py-2 text-xs sm:text-sm font-medium text-[#F4EFE6] transition-colors"
            >
              <span className="flex items-center text-[#D4AF37]">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </span>
              <span>TripAdvisor Verified</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            <a
              href="https://www.getyourguide.com/douz-l148204/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#F4EFE6]/10 hover:bg-[#F4EFE6]/18 border border-[#F4EFE6]/15 px-4 py-2 text-xs sm:text-sm font-medium text-[#F4EFE6] transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#C85A32]" />
              <span>GetYourGuide Partner</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            <a
              href="https://www.tiktok.com/@IbraSahara"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#F4EFE6]/10 hover:bg-[#F4EFE6]/18 border border-[#F4EFE6]/15 px-4 py-2 text-xs sm:text-sm font-medium text-[#F4EFE6] transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#1E7E48]" />
              <span>TikTok @IbraSahara</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

