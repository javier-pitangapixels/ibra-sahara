'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Clock,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Check,
  Calendar,
} from 'lucide-react';
import { Language, TOUR_PACKAGES, TourPackage } from '@/data/packages';
import { Dictionary } from '@/lib/dictionaries';
import { useCurrency } from '@/lib/currency-context';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { BrandIcon, BrandIconName } from '@/components/ui/BrandIcon';

interface PackagesGridProps {
  lang: Language;
  dict: Dictionary;
}

function getTransportIcon(type: TourPackage['transportType']): BrandIconName {
  if (type === 'camel') return 'camel';
  if (type === 'quad') return 'quad';
  return 'suv-4x4';
}

function PackageCard({
  pkg,
  lang,
  dict,
}: {
  pkg: TourPackage;
  lang: Language;
  dict: Dictionary;
}) {
  const { currency, formatPrice } = useCurrency();
  const [selectedTierIdx, setSelectedTierIdx] = useState(0);
  const [expandedSchedule, setExpandedSchedule] = useState(false);
  const [photoIdx, setPhotoIdx] = useState(0);

  const activeTier = pkg.tiers[selectedTierIdx] || pkg.tiers[0];
  const priceNumber = activeTier.prices[currency];

  const whatsappBookingUrl = buildWhatsAppUrl({
    packageTitle: pkg.title[lang],
    tierName: activeTier.name[lang],
    price: priceNumber,
    currency,
    lang,
  });

  const nextPhoto = () =>
    setPhotoIdx((prev) => (prev + 1) % pkg.images.length);
  const prevPhoto = () =>
    setPhotoIdx((prev) => (prev - 1 + pkg.images.length) % pkg.images.length);

  return (
    <article className="rounded-3xl bg-white border border-[#14181D]/12 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
      {/* Photo Carousel Header */}
      <div className="relative aspect-16/10 bg-[#14181D] overflow-hidden group">
        <Image
          src={pkg.images[photoIdx]}
          alt={`${pkg.title[lang]} - photo ${photoIdx + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14181D]/85 via-[#14181D]/20 to-transparent" />

        {/* Top Highlight Badge & Transport Icon */}
        <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C85A32] text-white text-xs font-bold px-3.5 py-1.5 shadow-sm">
            <BrandIcon
              name={getTransportIcon(pkg.transportType)}
              className="w-4 h-4"
            />
            <span>{pkg.badge[lang]}</span>
          </span>

          <span className="inline-flex items-center gap-1 rounded-full bg-[#14181D]/80 backdrop-blur-xs text-[#F4EFE6] text-xs font-semibold px-3 py-1 border border-[#F4EFE6]/15">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{pkg.durationSummary[lang]}</span>
          </span>
        </div>

        {/* Carousel Prev / Next Controls */}
        {pkg.images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevPhoto}
              aria-label="Previous route photo"
              className="absolute start-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#14181D]/70 hover:bg-[#14181D] text-white flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextPhoto}
              aria-label="Next route photo"
              className="absolute end-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#14181D]/70 hover:bg-[#14181D] text-white flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="absolute bottom-11 inset-x-0 flex items-center justify-center gap-1.5">
              {pkg.images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setPhotoIdx(idx)}
                  aria-label={`Select photo ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    idx === photoIdx
                      ? 'w-5 bg-[#D4AF37]'
                      : 'w-1.5 bg-[#F4EFE6]/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Bottom Schedule Timing Banner */}
        <div className="absolute bottom-2.5 inset-x-3.5 flex items-center gap-1.5 text-xs font-medium text-[#F4EFE6]">
          <Calendar className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
          <span className="truncate">{pkg.departureSchedule[lang]}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#14181D] leading-snug">
              {pkg.title[lang]}
            </h3>
            <p className="text-xs sm:text-sm text-[#4A4F55] leading-relaxed">
              {pkg.subtitle[lang]}
            </p>
          </div>

          {/* Interactive Tier Switcher */}
          <div className="space-y-2 pt-1">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#4A4F55]">
              {dict.packagesSection.selectTierLabel}
            </label>
            <div className="grid grid-cols-1 gap-2">
              {pkg.tiers.map((tier, idx) => {
                const isSelected = idx === selectedTierIdx;
                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelectedTierIdx(idx)}
                    className={`w-full text-start rounded-2xl p-3.5 border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#F4EFE6] border-[#C85A32] ring-1 ring-[#C85A32] shadow-xs'
                        : 'bg-white border-[#14181D]/12 hover:bg-[#F4EFE6]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-xs sm:text-sm text-[#14181D]">
                        {tier.name[lang]}
                      </span>
                      <span
                        className={`text-xs sm:text-sm font-extrabold px-2.5 py-0.5 rounded-full shrink-0 ${
                          isSelected
                            ? 'bg-[#C85A32] text-white'
                            : 'bg-[#EAE2D3] text-[#14181D]'
                        }`}
                      >
                        {formatPrice(tier.prices)}
                      </span>
                    </div>
                    <p className="text-xs text-[#4A4F55] mt-1 leading-relaxed">
                      {tier.description[lang]}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Price Highlight Bar */}
          <div className="rounded-2xl bg-[#14181D] text-[#F4EFE6] p-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#9BA3AE]">
                {dict.packagesSection.startingFrom}
              </p>
              <p className="text-xs text-[#D4AF37] font-medium truncate max-w-[180px]">
                {activeTier.name[lang]}
              </p>
            </div>
            <div className="text-end">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#F4EFE6]">
                {formatPrice(activeTier.prices)}
              </span>
              <span className="text-xs text-[#9BA3AE] block">
                {dict.packagesSection.perPerson}
              </span>
            </div>
          </div>

          {/* Expandable Day-by-Day Schedule Accordion */}
          <div className="border-t border-[#14181D]/10 pt-3">
            <button
              type="button"
              onClick={() => setExpandedSchedule(!expandedSchedule)}
              className="w-full flex items-center justify-between text-xs sm:text-sm font-bold text-[#C85A32] hover:text-[#A94622] py-1.5 transition-colors cursor-pointer"
            >
              <span>
                {expandedSchedule
                  ? dict.packagesSection.itineraryToggleClose
                  : dict.packagesSection.itineraryToggleOpen}
              </span>
              {expandedSchedule ? (
                <ChevronUp className="w-4 h-4 shrink-0" />
              ) : (
                <ChevronDown className="w-4 h-4 shrink-0" />
              )}
            </button>

            {expandedSchedule && (
              <div className="mt-3 space-y-4 text-xs sm:text-sm bg-[#F4EFE6]/70 rounded-2xl p-4 border border-[#14181D]/10">
                <div className="space-y-3">
                  {pkg.itinerary.map((step, idx) => (
                    <div
                      key={idx}
                      className="relative ps-4 border-s-2 border-[#C85A32] space-y-0.5"
                    >
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#C85A32]">
                        {step.timeSlot[lang]}
                      </p>
                      <h4 className="font-bold text-[#14181D]">
                        {step.title[lang]}
                      </h4>
                      <p className="text-xs text-[#4A4F55] leading-relaxed">
                        {step.description[lang]}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#14181D]/10 space-y-1.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#14181D]">
                    {dict.packagesSection.includedTitle}
                  </p>
                  <ul className="space-y-1">
                    {pkg.included[lang].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs text-[#4A4F55]"
                      >
                        <Check className="w-3.5 h-3.5 text-[#1E7E48] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Primary WhatsApp Booking Button */}
        <div className="pt-2 border-t border-[#14181D]/10">
          <a
            href={whatsappBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#1E7E48] hover:bg-[#156236] text-white font-bold text-sm px-5 py-3.5 shadow-md hover:shadow-lg transition-all"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>{dict.packagesSection.bookWhatsappCta}</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export function PackagesGrid({ lang, dict }: PackagesGridProps) {
  return (
    <section
      id="packages"
      className="py-20 sm:py-24 bg-[#EAE2D3]/65 text-[#14181D]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block rounded-full bg-white border border-[#14181D]/12 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#C85A32]">
            {dict.packagesSection.eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14181D]">
            {dict.packagesSection.title}
          </h2>
          <p className="text-base sm:text-lg text-[#4A4F55]">
            {dict.packagesSection.subtitle}
          </p>
        </div>

        {/* 3-Column Responsive Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {TOUR_PACKAGES.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} lang={lang} dict={dict} />
          ))}
        </div>
      </div>
    </section>
  );
}
