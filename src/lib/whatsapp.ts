export function buildWhatsAppUrl(params: {
  packageTitle?: string;
  tierName?: string;
  price?: number;
  currency?: string;
  customDetails?: string;
  lang: 'EN' | 'FR' | 'AR';
}): string {
  const rawEnvPhone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '21621601205';
  const phone = rawEnvPhone.replace(/[^0-9]/g, '') || '21621601205';
  let message = '';

  if (params.customDetails) {
    if (params.lang === 'FR') {
      message = `Bonjour Ibra! Je souhaite organiser un circuit sur mesure dans le désert:\n${params.customDetails}`;
    } else if (params.lang === 'AR') {
      message = `مرحباً إبرا! أود تنظيم رحلة خاصة في الصحراء:\n${params.customDetails}`;
    } else {
      message = `Hi Ibra! I would like to plan a custom desert tour:\n${params.customDetails}`;
    }
  } else if (params.packageTitle) {
    if (params.lang === 'FR') {
      message = `Bonjour Ibra! Je suis intéressé par la formule "${params.packageTitle}" (${params.tierName}) affichée à ${params.price} ${params.currency}. Êtes-vous disponible?`;
    } else if (params.lang === 'AR') {
      message = `مرحباً إبرا! أنا مهتم برحلة "${params.packageTitle}" (${params.tierName}) بسعر ${params.price} ${params.currency}. هل لديك حجز متاح؟`;
    } else {
      message = `Hi Ibra! I'm interested in booking "${params.packageTitle}" (${params.tierName}) shown at ${params.price} ${params.currency}. Are you available?`;
    }
  } else {
    if (params.lang === 'FR') {
      message = `Bonjour Ibra! Je souhaite avoir des informations sur vos excursions dans le désert à Douz.`;
    } else if (params.lang === 'AR') {
      message = `مرحباً إبرا! أود الاستفسار عن رحلات الصحراء في دوز.`;
    } else {
      message = `Hi Ibra! I'd love to inquire about your Sahara desert tours in Douz.`;
    }
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

