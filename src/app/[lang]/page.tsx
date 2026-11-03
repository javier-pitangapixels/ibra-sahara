import React from 'react';
import { Language } from '@/data/packages';
import { LandingPageView } from '@/components/LandingPageView';

function normalizeLang(raw: string): Language {
  const upper = raw?.toUpperCase();
  if (upper === 'FR') return 'FR';
  if (upper === 'AR') return 'AR';
  return 'EN';
}

export default async function LocalizedPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  return <LandingPageView lang={lang} />;
}

