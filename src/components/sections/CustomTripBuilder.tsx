'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Minus, Plus, MessageCircle, Sparkles } from 'lucide-react';
import { Language } from '@/data/packages';
import { Dictionary } from '@/lib/dictionaries';
import { useCurrency } from '@/lib/currency-context';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { BrandIcon } from '@/components/ui/BrandIcon';

interface CustomTripBuilderProps {
  lang: Language;
  dict: Dictionary;
}

export function CustomTripBuilder({ lang, dict }: CustomTripBuilderProps) {
  const { currency } = useCurrency();

  const defaultTransport = dict.customBuilder.transportOptions[0]?.id || 'Camel Trek';
  const defaultDuration = dict.customBuilder.durationOptions[2]?.id || '2 Days / 1 Night';
  const defaultCamp = dict.customBuilder.campOptions[0]?.id || 'Nomadic Bivouac';
  const defaultMonth = dict.customBuilder.months[10] || dict.customBuilder.months[0];

  const [selectedTransports, setSelectedTransports] = useState<string[]>([
    defaultTransport,
  ]);
  const [selectedDuration, setSelectedDuration] = useState<string>(defaultDuration);
  const [selectedCamp, setSelectedCamp] = useState<string>(defaultCamp);
  const [travelers, setTravelers] = useState<number>(2);
  const [selectedMonth, setSelectedMonth] = useState<string>(defaultMonth);
  const [customNotes, setCustomNotes] = useState<string>('');

  const toggleTransport = (id: string) => {
    setSelectedTransports((prev) => {
      if (prev.includes(id)) {
        return prev.length > 1 ? prev.filter((item) => item !== id) : prev;
      }
      return [...prev, id];
    });
  };

  const travelersText = travelers >= 10 ? '10+' : String(travelers);

  const customDetails =
    lang === 'FR'
      ? `• Transport: ${selectedTransports.join(' + ')}\n• Durée: ${selectedDuration}\n• Campement: ${selectedCamp}\n• Voyageurs: ${travelersText} ${dict.customBuilder.travelersUnit}\n• Mois: ${selectedMonth}\n• Devise préférée: ${currency}${
          customNotes.trim() ? `\n• Note: ${customNotes.trim()}` : ''
        }`
      : lang === 'AR'
      ? `• وسيلة التنقل: ${selectedTransports.join(' + ')}\n• المدة: ${selectedDuration}\n• المخيم: ${selectedCamp}\n• عدد المسافرين: ${travelersText}\n• الشهر: ${selectedMonth}\n• العملة المفضلة: ${currency}${
          customNotes.trim() ? `\n• ملاحظات: ${customNotes.trim()}` : ''
        }`
      : `• Transport: ${selectedTransports.join(' + ')}\n• Duration: ${selectedDuration}\n• Camp Style: ${selectedCamp}\n• Group Size: ${travelersText} ${dict.customBuilder.travelersUnit}\n• Month: ${selectedMonth}\n• Preferred Currency: ${currency}${
          customNotes.trim() ? `\n• Notes: ${customNotes.trim()}` : ''
        }`;

  const previewGreeting =
    lang === 'FR'
      ? 'Bonjour Ibra! Je souhaite organiser un circuit sur mesure dans le désert:'
      : lang === 'AR'
      ? 'مرحباً إبرا! أود تنظيم رحلة خاصة في الصحراء:'
      : 'Hi Ibra! I would like to plan a custom desert tour:';

  const fullPreviewMessage = `${previewGreeting}\n${customDetails}`;

  const whatsappUrl = buildWhatsAppUrl({
    customDetails,
    lang,
  });

  return (
    <section
      id="custom-trip"
      className="py-20 sm:py-24 bg-[#14181D] text-[#F4EFE6] border-y border-[#F4EFE6]/12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C85A32]/20 border border-[#C85A32]/40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>{dict.customBuilder.eyebrow}</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4EFE6]">
            {dict.customBuilder.title}
          </h2>
          <p className="text-base sm:text-lg text-[#9BA3AE]">
            {dict.customBuilder.subtitle}
          </p>
        </div>

        {/* Configurator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left 7 Columns: 4-Step Interactive Configurator */}
          <div className="lg:col-span-7 space-y-8 rounded-3xl bg-[#F4EFE6]/5 border border-[#F4EFE6]/15 p-6 sm:p-8">
            {/* Step 1: Transport Mode (Multi-select pills) */}
            <div className="space-y-3">
              <label className="block text-sm sm:text-base font-bold text-[#F4EFE6]">
                {dict.customBuilder.step1Title}
              </label>
              <p className="text-xs text-[#D4AF37]">
                {dict.customBuilder.step1Hint}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                {dict.customBuilder.transportOptions.map((opt) => {
                  const active = selectedTransports.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleTransport(opt.id)}
                      className={`flex flex-col items-center justify-center gap-2 rounded-2xl p-4 border text-center transition-all cursor-pointer ${
                        active
                          ? 'bg-[#C85A32] border-[#C85A32] text-white shadow-md'
                          : 'bg-[#14181D]/60 border-[#F4EFE6]/15 text-[#F4EFE6] hover:border-[#C85A32]/60'
                      }`}
                    >
                      <BrandIcon name={opt.icon} className="w-6 h-6" />
                      <span className="text-xs sm:text-sm font-semibold">
                        {opt.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Duration (Single-select) */}
            <div className="space-y-3">
              <label className="block text-sm sm:text-base font-bold text-[#F4EFE6]">
                {dict.customBuilder.step2Title}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {dict.customBuilder.durationOptions.map((opt) => {
                  const active = selectedDuration === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedDuration(opt.id)}
                      className={`rounded-2xl px-3.5 py-3 border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        active
                          ? 'bg-[#F4EFE6] border-[#F4EFE6] text-[#14181D] shadow-sm'
                          : 'bg-[#14181D]/60 border-[#F4EFE6]/15 text-[#F4EFE6] hover:border-[#F4EFE6]/40'
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Camp Type (Single-select) */}
            <div className="space-y-3">
              <label className="block text-sm sm:text-base font-bold text-[#F4EFE6]">
                {dict.customBuilder.step3Title}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {dict.customBuilder.campOptions.map((opt) => {
                  const active = selectedCamp === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedCamp(opt.id)}
                      className={`text-start rounded-2xl p-4 border transition-all cursor-pointer ${
                        active
                          ? 'bg-[#C85A32]/20 border-[#C85A32] ring-1 ring-[#C85A32] text-[#F4EFE6]'
                          : 'bg-[#14181D]/60 border-[#F4EFE6]/15 text-[#F4EFE6] hover:border-[#F4EFE6]/35'
                      }`}
                    >
                      <p className="font-bold text-xs sm:text-sm">{opt.label}</p>
                      <p className="text-[11px] text-[#9BA3AE] mt-1 leading-relaxed">
                        {opt.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Group Size Stepper & Month Selector */}
            <div className="space-y-4">
              <label className="block text-sm sm:text-base font-bold text-[#F4EFE6]">
                {dict.customBuilder.step4Title}
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Travelers Stepper (1 to 10+) */}
                <div className="rounded-2xl bg-[#14181D]/80 border border-[#F4EFE6]/15 p-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#9BA3AE]">
                      {dict.customBuilder.travelersLabel}
                    </p>
                    <p className="text-lg font-bold text-[#F4EFE6]">
                      {travelersText} {dict.customBuilder.travelersUnit}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setTravelers((t) => Math.max(1, t - 1))}
                      aria-label="Decrease travelers"
                      className="w-9 h-9 rounded-full bg-[#F4EFE6]/10 hover:bg-[#F4EFE6]/20 flex items-center justify-center text-[#F4EFE6] transition-colors cursor-pointer"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setTravelers((t) => Math.min(10, t + 1))}
                      aria-label="Increase travelers"
                      className="w-9 h-9 rounded-full bg-[#C85A32] hover:bg-[#A94622] flex items-center justify-center text-white transition-colors cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Month Selector */}
                <div className="rounded-2xl bg-[#14181D]/80 border border-[#F4EFE6]/15 p-4 flex flex-col justify-center">
                  <label
                    htmlFor="travel-month-select"
                    className="text-xs text-[#9BA3AE] mb-1"
                  >
                    {dict.customBuilder.monthLabel}
                  </label>
                  <select
                    id="travel-month-select"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="bg-transparent text-[#F4EFE6] font-bold text-sm sm:text-base focus:outline-none cursor-pointer"
                  >
                    {dict.customBuilder.months.map((m) => (
                      <option
                        key={m}
                        value={m}
                        className="bg-[#14181D] text-[#F4EFE6]"
                      >
                        {m}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Optional Special Requests Input */}
              <div>
                <label
                  htmlFor="custom-trip-notes"
                  className="block text-xs text-[#9BA3AE] mb-1.5"
                >
                  {dict.customBuilder.notesLabel}
                </label>
                <input
                  id="custom-trip-notes"
                  type="text"
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder={dict.customBuilder.notesPlaceholder}
                  className="w-full rounded-2xl bg-[#14181D]/80 border border-[#F4EFE6]/15 px-4 py-3 text-sm text-[#F4EFE6] placeholder:text-[#9BA3AE]/60 focus:outline-none focus:border-[#C85A32]"
                />
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Real-time WhatsApp Request Preview & CTA */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 rounded-3xl bg-[#F4EFE6] text-[#14181D] p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-[#14181D]/12 pb-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/brand/social-avatar-1080.png"
                  alt="Ibra Sahara Avatar"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border border-[#C85A32]"
                />
                <div>
                  <p className="font-bold text-sm text-[#14181D]">
                    Ibra Sahara • Douz
                  </p>
                  <p className="text-xs text-[#1E7E48] font-semibold" dir="ltr">
                    WhatsApp +216 21 601 205
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#EAE2D3] text-[#C85A32]">
                {dict.customBuilder.previewLabel}
              </span>
            </div>

            {/* Real-Time Message Bubble Preview */}
            <div className="rounded-2xl bg-[#EAE2D3] border border-[#14181D]/10 p-4 text-xs sm:text-sm font-mono whitespace-pre-line text-[#14181D] leading-relaxed">
              {fullPreviewMessage}
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-[#1E7E48] hover:bg-[#156236] text-white font-bold text-sm sm:text-base px-6 py-4 shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              <span>{dict.customBuilder.sendWhatsappCta}</span>
            </a>

            <p className="text-xs text-center text-[#4A4F55]">
              {dict.customBuilder.responseGuarantee}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
