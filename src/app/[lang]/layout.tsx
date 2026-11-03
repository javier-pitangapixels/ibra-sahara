import type { Metadata } from 'next';
import { Language } from '@/data/packages';
import { getDictionary } from '@/lib/dictionaries';

function normalizeLang(raw: string): Language {
  const upper = raw?.toUpperCase();
  if (upper === 'FR') return 'FR';
  if (upper === 'AR') return 'AR';
  return 'EN';
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }, { lang: 'ar' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);
  const dict = getDictionary(lang);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      images: ['/og-image.jpg'],
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);
  const isRtl = lang === 'AR';

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang.toLowerCase()}>
      {children}
    </div>
  );
}

