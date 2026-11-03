import { Language } from '@/data/packages';

export interface Dictionary {
  meta: {
    title: string;
    description: string;
    tagline: string;
  };
  nav: {
    packages: string;
    curator: string;
    customTrip: string;
    tiktok: string;
    faq: string;
    whatsappCta: string;
    currencyLabel: string;
    langLabel: string;
  };
  hero: {
    pill: string;
    h1: string;
    subheadline: string;
    exploreCta: string;
    whatsappCta: string;
    trustLabel: string;
    verifiedGuide: string;
    customOrSignature: string;
  };
  curator: {
    eyebrow: string;
    title: string;
    subtitle: string;
    quote: string;
    comparisonTitle: string;
    agencyTitle: string;
    agencyPoints: string[];
    ibraTitle: string;
    ibraPoints: string[];
    pillars: {
      icon: 'camel' | 'quad' | 'tent-luxury' | 'languages';
      title: string;
      description: string;
    }[];
  };
  packagesSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    selectTierLabel: string;
    startingFrom: string;
    perPerson: string;
    itineraryToggleOpen: string;
    itineraryToggleClose: string;
    includedTitle: string;
    bookWhatsappCta: string;
    otaGuaranteeLabel: string;
    bookGyg: string;
    bookTripAdvisor: string;
  };
  customBuilder: {
    eyebrow: string;
    title: string;
    subtitle: string;
    step1Title: string;
    step1Hint: string;
    transportOptions: { id: string; label: string; icon: 'camel' | 'quad' | 'suv-4x4' | 'oasis-palm' }[];
    step2Title: string;
    durationOptions: { id: string; label: string }[];
    step3Title: string;
    campOptions: { id: string; label: string; desc: string }[];
    step4Title: string;
    travelersLabel: string;
    travelersUnit: string;
    monthLabel: string;
    months: string[];
    notesLabel: string;
    notesPlaceholder: string;
    previewLabel: string;
    sendWhatsappCta: string;
    responseGuarantee: string;
  };
  tiktokSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    followCta: string;
    reels: {
      id: string;
      title: string;
      caption: string;
      views: string;
      tag: string;
      image: string;
    }[];
    reviewsTitle: string;
    reviews: {
      name: string;
      country: string;
      flag: string;
      date: string;
      tourType: string;
      text: string;
    }[];
  };
  faqSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  footer: {
    description: string;
    locationLabel: string;
    locationValue: string;
    phoneLabel: string;
    quickLinks: string;
    otaBookings: string;
    rights: string;
  };
  mobileBar: {
    assurance: string;
    subAssurance: string;
    cta: string;
  };
}

export const DICTIONARIES: Record<Language, Dictionary> = {
  EN: {
    meta: {
      title: 'Ibra Sahara | Local Douz Desert Guide & Custom Sahara Expeditions',
      description:
        'Private, flexible, and custom Sahara desert tours in Douz, Tunisia led by local guide Ibra. Overnight camel treks, quad biking, and 4x4 expeditions to Ksar Ghilane.',
      tagline: 'Your Local Connection to the Real Sahara.',
    },
    nav: {
      packages: 'Signature Tours',
      curator: 'Why Ibra',
      customTrip: 'Custom Trip Builder',
      tiktok: 'Desert Life',
      faq: 'FAQ',
      whatsappCta: 'WhatsApp Ibra',
      currencyLabel: 'Currency',
      langLabel: 'Language',
    },
    hero: {
      pill: '📍 Douz, Tunisia • Guides in 🇬🇧 English, 🇫🇷 Français, 🇹🇳 العربية',
      h1: 'Experience the Real Sahara with Ibra—Your Local Douz Guide.',
      subheadline:
        'Skip rigid tour buses. Choose one of our proven desert routes or craft a 100% private camel, quad, or 4x4 expedition tailored to your pace and camp style.',
      exploreCta: 'Explore Packages ↓',
      whatsappCta: 'Chat on WhatsApp',
      trustLabel: 'Verified Local Guide & Direct Booking Partner',
      verifiedGuide: 'Born & Raised in Douz',
      customOrSignature: 'Private & Flexible Departures',
    },
    curator: {
      eyebrow: 'The Independent Curator Advantage',
      title: 'Zero Conflict of Interest. 100% Tailored to Your Desert Dream.',
      subtitle:
        'Because Ibra does not own a single fixed fleet or one rigid camp, he is never forced to push you into a one-size-fits-all tour. Instead, he acts as your personal Saharan fixer—hand-selecting the healthiest camels, best-maintained quads & 4x4s, and the exact camp tier you want.',
      quote:
        '“In the Sahara, hospitality is sacred. Tell me how you dream of seeing the dunes—wild campfire under the stars or a private luxury tent—and I will arrange every detail personally.” — Ibra',
      comparisonTitle: 'Mass Tour Agencies vs. Direct with Ibra',
      agencyTitle: 'Rigid Tour Agencies',
      agencyPoints: [
        'Locked into a single crowded camp owned by the agency',
        'Fixed departure schedules & rushed photo stops',
        'Hidden middleman markups of 30–50%',
      ],
      ibraTitle: 'Independent Curator (Ibra Sahara)',
      ibraPoints: [
        'Hand-picked camels, newest quads & trusted 4x4 desert drivers',
        'Choose between authentic nomadic bivouac or luxury en-suite glamping',
        'Direct local rates in EUR, USD, or TND with instant WhatsApp coordination',
      ],
      pillars: [
        {
          icon: 'camel',
          title: 'Ethical, Healthy Dromedaries',
          description:
            'Sourced from trusted local Bedouin families in Douz—calm, well-cared-for camels matched to each rider.',
        },
        {
          icon: 'quad',
          title: 'Top-Spec Quads & 4x4s',
          description:
            'Inspected before every departure so your dune crossing is smooth, powerful, and uncompromised on safety.',
        },
        {
          icon: 'tent-luxury',
          title: 'Any Camp Style You Prefer',
          description:
            'From baking Mella bread by an open nomadic fire to five-star oasis glamping with private hot showers.',
        },
        {
          icon: 'languages',
          title: 'Trilingual Local Storytelling',
          description:
            'Fluent in English, French, and Arabic—sharing authentic Saharan navigation, music, and desert traditions.',
        },
      ],
    },
    packagesSection: {
      eyebrow: 'Signature Desert Routes',
      title: 'Proven Sahara Expeditions—Transparent Local Pricing',
      subtitle:
        'Select your preferred camp tier or ride duration below. Switch currencies at the top bar to view instant rates in EUR, USD, or TND.',
      selectTierLabel: 'Choose Your Tier / Option:',
      startingFrom: 'Starting from',
      perPerson: '/ person',
      itineraryToggleOpen: 'View Day-by-Day Schedule & Inclusions',
      itineraryToggleClose: 'Hide Schedule Details',
      includedTitle: 'What’s Included:',
      bookWhatsappCta: 'Book Direct via WhatsApp',
      otaGuaranteeLabel: 'Prefer online card checkout with OTA buyer protection?',
      bookGyg: 'Book on GetYourGuide',
      bookTripAdvisor: 'View on TripAdvisor',
    },
    customBuilder: {
      eyebrow: '100% Custom Expedition Configurator',
      title: 'Build Your Custom Sahara Itinerary in 60 Seconds',
      subtitle:
        'Combine transport modes (e.g. ride a camel into camp and return by quad bike), choose your comfort level, and send your custom brief directly to Ibra on WhatsApp.',
      step1Title: '1. Transport Mode (Select one or combine multiple)',
      step1Hint: 'Tip: Many guests combine a Camel Trek at sunset with Quad Bikes the next morning!',
      transportOptions: [
        { id: 'Camel Trek', label: 'Camel Trek', icon: 'camel' },
        { id: 'Quad Bikes', label: 'Quad Bikes', icon: 'quad' },
        { id: '4x4 Dunes', label: '4x4 Dunes', icon: 'suv-4x4' },
        { id: 'Oasis Route', label: 'Oasis Route (Ksar Ghilane)', icon: 'oasis-palm' },
      ],
      step2Title: '2. Expedition Duration',
      durationOptions: [
        { id: 'Half Day (3–4h)', label: 'Half Day' },
        { id: 'Full Day', label: 'Full Day' },
        { id: '2 Days / 1 Night', label: '2 Days / 1 Night' },
        { id: '3+ Days Expedition', label: '3+ Days Expedition' },
      ],
      step3Title: '3. Desert Camp Style',
      campOptions: [
        {
          id: 'Nomadic Bivouac',
          label: 'Nomadic Bivouac',
          desc: 'Traditional Bedouin tents, campfire & Mella bread',
        },
        {
          id: 'Luxury En-Suite Glamping',
          label: 'Luxury En-Suite Glamping',
          desc: 'Private suite tent with real bed & private bathroom',
        },
        {
          id: 'Open Sky / Day Only',
          label: 'Open Sky (Starlight / No Tent)',
          desc: 'Sleep directly under the Saharan stars around the fire',
        },
      ],
      step4Title: '4. Group Size & Travel Month',
      travelersLabel: 'Number of Travelers',
      travelersUnit: 'travelers',
      monthLabel: 'Preferred Month',
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
        'Flexible Dates',
      ],
      notesLabel: 'Special Requests (Optional)',
      notesPlaceholder: 'e.g., Pickup from Tozeur/Djerba, vegetarian meal, birthday surprise...',
      previewLabel: 'Live WhatsApp Request Preview',
      sendWhatsappCta: 'Send Custom Request to Ibra on WhatsApp →',
      responseGuarantee: 'Direct reply from Ibra—usually within 15–30 minutes when not in deep dunes.',
    },
    tiktokSection: {
      eyebrow: 'Real Moments from the Grand Erg Oriental',
      title: 'Follow Daily Desert Life on TikTok (@IbraSahara)',
      subtitle:
        'No stock studio filters—watch how we bake Mella flatbread beneath glowing sand embers, lead camel caravans at golden hour, and sing around the campfire.',
      followCta: 'Watch Daily Desert Life on TikTok (@IbraSahara) ↗',
      reels: [
        {
          id: 'reel-1',
          title: 'Baking Mella Sand Bread Under Hot Embers',
          caption: 'Our signature desert ritual every night at camp 🔥🫓 #Douz #Sahara #Tunisia',
          views: '48.2K',
          tag: 'Campfire Cuisine',
          image: '/images/ibra-guide-leading-camels.jpg',
        },
        {
          id: 'reel-2',
          title: 'Golden Hour Caravan Into the Deep Erg',
          caption: 'Leaving 3 hours before sunset when the dunes turn pure gold 🐪✨',
          views: '92.5K',
          tag: 'Camel Trek',
          image: '/images/ibra-caravan-dunes.jpg',
        },
        {
          id: 'reel-3',
          title: 'Sunset Quad Ridge Run in Douz',
          caption: 'Untouched wind-rippled dunes as far as the eye can see 🏜️🏁',
          views: '64.1K',
          tag: 'Quad Session',
          image: '/images/quad-dunes-session.jpg',
        },
        {
          id: 'reel-4',
          title: 'Ksar Ghilane Thermal Spring & Oasis Palms',
          caption: 'After crossing the dunes by 4x4, a warm natural spring awaits 🌴🚙',
          views: '53.8K',
          tag: 'Oasis 4x4',
          image: '/images/ksar-ghilane-oasis.jpg',
        },
      ],
      reviewsTitle: 'What Travelers Say About Exploring with Ibra',
      reviews: [
        {
          name: 'Claire & Matthieu L.',
          country: 'France',
          flag: '🇫🇷',
          date: 'October',
          tourType: 'Overnight Camel Trek (Comfort Camp)',
          text: 'Ibra organized a private camel trek for just the two of us. Watching him bake sand bread under the embers while explaining Saharan constellations was the highlight of our trip to Tunisia!',
        },
        {
          name: 'Markus W.',
          country: 'Germany',
          flag: '🇩🇪',
          date: 'November',
          tourType: 'Custom Combo: Sunset Camel + Morning Quad',
          text: 'We wanted both camels and quads without booking two separate big tours. Ibra arranged quads to meet us in the morning after our bivouac night. Seamless WhatsApp communication and fair local price.',
        },
        {
          name: 'Sarah & James K.',
          country: 'United Kingdom',
          flag: '🇬🇧',
          date: 'March',
          tourType: 'Ksar Ghilane 4x4 Expedition (Luxury Camp)',
          text: 'From picking us up in Douz to swimming in the warm oasis spring at Ksar Ghilane and visiting the Roman fort at sunset, Ibra made us feel like family rather than tourists.',
        },
      ],
    },
    faqSection: {
      eyebrow: 'Essential Desert Logistics',
      title: 'Frequently Asked Questions',
      subtitle:
        'Everything you need to know before heading into the Grand Erg Oriental from Douz.',
      items: [
        {
          question: 'Why do overnight camel tours leave 3 hours before sunset and return early morning?',
          answer:
            'The Sahara sun is intense at midday. Departing 3 hours before sunset lets you ride in comfortable temperatures during the most photogenic golden hour light, enjoy dinner and stargazing at camp, and ride back to Douz in the crisp morning air before the heat climbs.',
        },
        {
          question: 'What is the difference between the Traditional Bivouac and Upgraded/Luxury Glamping camps?',
          answer:
            'The Traditional Bivouac offers an authentic nomadic experience with heavy wool Bedouin tents, mattresses on desert carpets, a central campfire, and shared bathroom facilities. The Upgraded Comfort and Luxury Glamping tiers provide a private high-walled tent with a raised bed frame, hotel-grade bedding, and your own private en-suite bathroom and shower.',
        },
        {
          question: 'What payment methods and currencies do you accept?',
          answer:
            'When booking directly via WhatsApp, you pay in cash upon arrival in Douz in Tunisian Dinars (TND), Euros (EUR), or US Dollars (USD)—no upfront wire transfer hurdles. If you prefer to pay online by credit card with platform buyer protection, you can use our GetYourGuide or TripAdvisor links.',
        },
        {
          question: 'Do I need previous experience to drive a desert quad bike?',
          answer:
            'No previous experience is required. All quads are fully automatic and inspected before every session. Ibra provides helmets, goggles, and a hands-on dune riding briefing, then leads the group at a pace tailored to your comfort level.',
        },
        {
          question: 'Is hotel pickup included in Douz? Can you arrange transfers from Tozeur, Djerba, or Matmata?',
          answer:
            'Yes! Pickup and drop-off from any hotel, guesthouse, or bus station in Douz is 100% free. If you are arriving from Tozeur, Djerba, Matmata, or Tunis, just message Ibra on WhatsApp and he can arrange a private 4x4 transfer directly to Douz.',
        },
      ],
    },
    footer: {
      description:
        'Independent local Sahara guide in Douz, Tunisia. Private camel treks, quad bike sessions, and custom 4x4 expeditions across the Grand Erg Oriental.',
      locationLabel: 'Base Camp',
      locationValue: 'Douz, Kebili Governorate, Tunisia (Gateway to the Sahara)',
      phoneLabel: 'Direct WhatsApp & Phone',
      quickLinks: 'Explore',
      otaBookings: 'Verified Listings & Social',
      rights: 'All rights reserved. Crafted in Douz, Tunisia.',
    },
    mobileBar: {
      assurance: 'Direct Local Guide Rates',
      subAssurance: 'Instant reply in EN • FR • AR',
      cta: 'WhatsApp Ibra',
    },
  },
  FR: {
    meta: {
      title: 'Ibra Sahara | Guide Local à Douz & Excursions Désert sur Mesure',
      description:
        'Excursions privées et sur mesure dans le désert du Sahara à Douz, Tunisie avec votre guide local Ibra. Méharées à dos de dromadaire, quad et expéditions 4x4 à Ksar Ghilane.',
      tagline: 'Votre Guide Local au Cœur du Sahara.',
    },
    nav: {
      packages: 'Nos Formules',
      curator: 'L’Avantage Ibra',
      customTrip: 'Circuit sur Mesure',
      tiktok: 'Vie au Désert',
      faq: 'FAQ',
      whatsappCta: 'WhatsApp Ibra',
      currencyLabel: 'Devise',
      langLabel: 'Langue',
    },
    hero: {
      pill: '📍 Douz, Tunisie • Guide en 🇬🇧 English, 🇫🇷 Français, 🇹🇳 العربية',
      h1: 'Vivez le Vrai Sahara avec Ibra—Votre Guide Local à Douz.',
      subheadline:
        'Oubliez les bus touristiques rigides. Choisissez l’un de nos circuits signatures ou créez une expédition 100 % sur mesure en dromadaire, quad ou 4x4 adaptée à votre rythme.',
      exploreCta: 'Découvrir les Formules ↓',
      whatsappCta: 'Discuter sur WhatsApp',
      trustLabel: 'Guide Local Vérifié & Réservation Directe',
      verifiedGuide: 'Enfant du Désert de Douz',
      customOrSignature: 'Départs Privés & Flexibles',
    },
    curator: {
      eyebrow: 'L’Avantage du Guide Indépendant',
      title: 'Zéro Conflit d’Intérêts. 100 % Adapté à Vos Envies.',
      subtitle:
        'Parce qu’Ibra n’est pas lié à une flotte unique ni à un seul campement imposé, il sélectionne en toute liberté les meilleurs dromadaires, les quads les mieux entretenus et le style exact de bivouac ou campement de luxe dont vous rêvez.',
      quote:
        '« Dans le Sahara, l’hospitalité est sacrée. Dites-moi comment vous rêvez de vivre les dunes — feu de camp nomade sous les étoiles ou tente privée grand confort — et j’organise chaque détail pour vous. » — Ibra',
      comparisonTitle: 'Agences Classiques vs. En Direct avec Ibra',
      agencyTitle: 'Agences de Voyages Rigides',
      agencyPoints: [
        'Imposent leur propre campement souvent bondé',
        'Horaires figés et arrêts photos chronométrés en groupe',
        'Commissions d’intermédiaires de 30 à 50 %',
      ],
      ibraTitle: 'Guide Fixeur Indépendant (Ibra Sahara)',
      ibraPoints: [
        'Dromadaires choisis avec soin, quads récents et chauffeurs 4x4 experts',
        'Choix libre entre bivouac nomade authentique ou glamping de luxe',
        'Tarifs locaux directs en EUR, USD ou TND via WhatsApp',
      ],
      pillars: [
        {
          icon: 'camel',
          title: 'Dromadaires Sains & Doux',
          description:
            'Sélectionnés auprès de familles bédouines de confiance à Douz, calmes et parfaitement traités.',
        },
        {
          icon: 'quad',
          title: 'Quads & 4x4 Irréprochables',
          description:
            'Vérifiés avant chaque départ pour franchir les cordons de dunes en toute sécurité.',
        },
        {
          icon: 'tent-luxury',
          title: 'Votre Style de Campement',
          description:
            'Du pain Mella cuit sous la braise en bivouac traditionnel jusqu’au campement luxe avec salle d’eau privée.',
        },
        {
          icon: 'languages',
          title: 'Accueil Trilingue Authentique',
          description:
            'Guidage fluide en français, anglais et arabe pour partager la culture et les secrets du Grand Erg.',
        },
      ],
    },
    packagesSection: {
      eyebrow: 'Nos Expéditions Signatures',
      title: 'Circuits Authentiques au Départ de Douz',
      subtitle:
        'Sélectionnez votre niveau de confort ou la durée souhaitée. Changez de devise en haut de page pour afficher les prix en EUR, USD ou TND.',
      selectTierLabel: 'Choisissez Votre Formule :',
      startingFrom: 'À partir de',
      perPerson: '/ pers.',
      itineraryToggleOpen: 'Voir le Programme Détaillé & Inclus',
      itineraryToggleClose: 'Masquer le Programme',
      includedTitle: 'Ce Qui Est Inclus :',
      bookWhatsappCta: 'Réserver en Direct via WhatsApp',
      otaGuaranteeLabel: 'Vous préférez payer par carte en ligne via une plateforme ?',
      bookGyg: 'Réserver sur GetYourGuide',
      bookTripAdvisor: 'Voir sur TripAdvisor',
    },
    customBuilder: {
      eyebrow: 'Configurateur de Circuit sur Mesure',
      title: 'Créez Votre Expédition Saharienne en 60 Secondes',
      subtitle:
        'Combinez plusieurs moyens de transport (ex. aller à dos de dromadaire et retour en quad), choisissez votre campement et envoyez votre demande directement à Ibra sur WhatsApp.',
      step1Title: '1. Mode de Transport (Un ou plusieurs choix possibles)',
      step1Hint: 'Astuce : Vous pouvez combiner méharée au coucher du soleil et quad le lendemain matin !',
      transportOptions: [
        { id: 'Méharée Dromadaire', label: 'Méharée Dromadaire', icon: 'camel' },
        { id: 'Session Quad', label: 'Session Quad', icon: 'quad' },
        { id: '4x4 Dunes', label: '4x4 dans les Dunes', icon: 'suv-4x4' },
        { id: 'Route des Oasis', label: 'Oasis Ksar Ghilane', icon: 'oasis-palm' },
      ],
      step2Title: '2. Durée de l’Expédition',
      durationOptions: [
        { id: 'Demi-Journée (3–4h)', label: 'Demi-Journée' },
        { id: 'Journée Complète', label: 'Journée Complète' },
        { id: '2 Jours / 1 Nuit', label: '2 Jours / 1 Nuit' },
        { id: 'Expédition 3+ Jours', label: 'Expédition 3+ Jours' },
      ],
      step3Title: '3. Type de Campement',
      campOptions: [
        {
          id: 'Bivouac Nomade',
          label: 'Bivouac Nomade',
          desc: 'Tentes bédouines traditionnelles, feu de camp & pain Mella',
        },
        {
          id: 'Glamping Luxe Privé',
          label: 'Glamping Luxe Suite Privée',
          desc: 'Grande tente privée avec vrai lit & salle de bain privative',
        },
        {
          id: 'Belle Étoile / Journée',
          label: 'À la Belle Étoile',
          desc: 'Dormir directement sous la Voie Lactée près du feu',
        },
      ],
      step4Title: '4. Taille du Groupe & Période',
      travelersLabel: 'Nombre de Voyageurs',
      travelersUnit: 'voyageurs',
      monthLabel: 'Mois Souhaité',
      months: [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Août',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre',
        'Dates Flexibles',
      ],
      notesLabel: 'Précisions ou Demandes Spéciales (Optionnel)',
      notesPlaceholder: 'ex. Transfert depuis Tozeur ou Djerba, repas végétarien, anniversaire...',
      previewLabel: 'Aperçu de Votre Message WhatsApp',
      sendWhatsappCta: 'Envoyer ma Demande sur Mesure à Ibra →',
      responseGuarantee: 'Réponse directe d’Ibra — généralement sous 15 à 30 minutes.',
    },
    tiktokSection: {
      eyebrow: 'Instants Réels dans le Grand Erg Oriental',
      title: 'Suivez le Quotidien du Désert sur TikTok (@IbraSahara)',
      subtitle:
        'Sans artifice : découvrez la cuisson du pain Mella sous le sable brûlant, nos caravanes au coucher du soleil et l’ambiance autour du feu.',
      followCta: 'Voir la Vie du Désert sur TikTok (@IbraSahara) ↗',
      reels: [
        {
          id: 'reel-1',
          title: 'Cuisson du Pain de Sable Mella sous la Braise',
          caption: 'Le rituel incontournable chaque soir au bivouac 🔥🫓 #Douz #Sahara #Tunisie',
          views: '48.2K',
          tag: 'Cuisine Nomade',
          image: '/images/ibra-guide-leading-camels.jpg',
        },
        {
          id: 'reel-2',
          title: 'Caravane à l’Heure Dorée dans le Grand Erg',
          caption: 'Départ 3h avant le coucher du soleil quand le sable devient d’or 🐪✨',
          views: '92.5K',
          tag: 'Méharée',
          image: '/images/ibra-caravan-dunes.jpg',
        },
        {
          id: 'reel-3',
          title: 'Session Quad sur les Crêtes de Douz',
          caption: 'Des dunes vierges à perte de vue au coucher du soleil 🏜️🏁',
          views: '64.1K',
          tag: 'Quad Dunes',
          image: '/images/quad-dunes-session.jpg',
        },
        {
          id: 'reel-4',
          title: 'Source Thermale & Palmeraie de Ksar Ghilane',
          caption: 'Après la traversée des dunes en 4x4, baignade dans la source chaude 🌴🚙',
          views: '53.8K',
          tag: 'Expédition 4x4',
          image: '/images/ksar-ghilane-oasis.jpg',
        },
      ],
      reviewsTitle: 'Avis des Voyageurs Ayant Exploré avec Ibra',
      reviews: [
        {
          name: 'Claire & Matthieu L.',
          country: 'France',
          flag: '🇫🇷',
          date: 'Octobre',
          tourType: 'Méharée Nuit au Désert (Camp Grand Confort)',
          text: 'Ibra a organisé une méharée privée rien que pour nous deux. Le voir cuire le pain de sable sous les braises tout en nous racontant la vie nomade restera notre plus beau souvenir de Tunisie !',
        },
        {
          name: 'Markus W.',
          country: 'Allemagne',
          flag: '🇩🇪',
          date: 'Novembre',
          tourType: 'Sur-Mesure : Dromadaire + Retour en Quad',
          text: 'Nous voulions combiner dromadaire le soir et quad le matin. Ibra a fait venir les quads directement après notre nuit au bivouac. Organisation parfaite sur WhatsApp et tarif local très honnête.',
        },
        {
          name: 'Sarah & James K.',
          country: 'Royaume-Uni',
          flag: '🇬🇧',
          date: 'Mars',
          tourType: 'Expédition 4x4 Ksar Ghilane (Camp Luxe)',
          text: 'De la prise en charge à Douz jusqu’à la baignade dans la source chaude de Ksar Ghilane et au fort romain au coucher du soleil, Ibra nous a reçus comme des amis.',
        },
      ],
    },
    faqSection: {
      eyebrow: 'Infos Pratiques & Logistique',
      title: 'Questions Fréquentes (FAQ)',
      subtitle: 'Tout ce qu’il faut savoir avant votre départ dans le désert depuis Douz.',
      items: [
        {
          question: 'Pourquoi les excursions partent-elles 3 heures avant le coucher du soleil et rentrent-elles tôt le matin ?',
          answer:
            'Pour éviter le soleil brûlant de la mi-journée ! Partir 3 heures avant le coucher du soleil permet de profiter d’une température agréable et de la plus belle lumière dorée sur les dunes, de savourer la soirée au campement, puis de rentrer à Douz dans la fraîcheur matinale.',
        },
        {
          question: 'Quelle est la différence entre le Bivouac Traditionnel et le Campement Luxe Glamping ?',
          answer:
            'Le Bivouac Traditionnel offre une immersion nomade authentique avec tentes bédouines, matelas sur tapis berbères, feu de camp central et sanitaires partagés. Les formules Grand Confort et Luxe Glamping proposent une tente privée spacieuse avec vrai lit surélevé, literie hôtelière et salle de bain privative avec douche chaude.',
        },
        {
          question: 'Quels sont les moyens de paiement et les devises acceptés ?',
          answer:
            'En réservant directement sur WhatsApp, vous réglez sur place à Douz en espèces en Dinars Tunisiens (TND), en Euros (EUR) ou en Dollars (USD). Si vous préférez payer en ligne par carte bancaire avec garantie acheteur, vous pouvez réserver via nos liens GetYourGuide ou TripAdvisor.',
        },
        {
          question: 'Faut-il avoir de l’expérience pour conduire un quad dans les dunes ?',
          answer:
            'Aucune expérience préalable n’est requise. Les quads sont entièrement automatiques. Ibra fournit casques et lunettes, réalise une initiation rapide avant le départ et adapte le parcours à votre niveau en toute sécurité.',
        },
        {
          question: 'La prise en charge à Douz est-elle gratuite ? Proposez-vous des transferts depuis Tozeur, Djerba ou Matmata ?',
          answer:
            'Oui, le transfert aller-retour depuis n’importe quel hôtel ou maison d’hôtes à Douz est 100 % gratuit. Si vous arrivez de Tozeur, Djerba, Matmata ou Gabès, Ibra peut organiser un transfert privé en 4x4 sur simple demande WhatsApp.',
        },
      ],
    },
    footer: {
      description:
        'Guide saharien indépendant à Douz, Tunisie. Méharées privées à dos de dromadaire, sessions quad et expéditions 4x4 sur mesure dans le Grand Erg Oriental.',
      locationLabel: 'Point de Départ',
      locationValue: 'Douz, Gouvernorat de Kébili, Tunisie (Porte du Sahara)',
      phoneLabel: 'WhatsApp & Téléphone Direct',
      quickLinks: 'Navigation',
      otaBookings: 'Plateformes & Réseaux',
      rights: 'Tous droits réservés. Conçu à Douz, Tunisie.',
    },
    mobileBar: {
      assurance: 'Tarif Local en Direct',
      subAssurance: 'Réponse rapide FR • EN • AR',
      cta: 'WhatsApp Ibra',
    },
  },
  AR: {
    meta: {
      title: 'إبرا صحارى | دليلك المحلي في دوز ورحلات الصحراء الكبرى المخصصة',
      description:
        'رحلات صحراوية خاصة ومرنة في دوز، تونس بقيادة الدليل المحلي إبرا. رحلات الجمال والمبيت تحت النجوم، دراجات الكواد، ورحلات الدفع الرباعي 4x4 إلى واحة قصر غيلان.',
      tagline: 'دليلك المحلي إلى قلب الصحراء الكبرى',
    },
    nav: {
      packages: 'الباقات الصحراوية',
      curator: 'لماذا إبرا؟',
      customTrip: 'صمّم رحلتك الخاصة',
      tiktok: 'حياة الصحراء',
      faq: 'الأسئلة الشائعة',
      whatsappCta: 'تواصل عبر واتساب',
      currencyLabel: 'العملة',
      langLabel: 'اللغة',
    },
    hero: {
      pill: '📍 دوز، تونس • دليلك يتحدث 🇹🇳 العربية، 🇫🇷 الفرنسية، 🇬🇧 الإنجليزية',
      h1: 'عش تجربة الصحراء الكبرى الحقيقية مع إبرا—دليلك المحلي في دوز.',
      subheadline:
        'ابتعد عن رحلات الحافلات الجماعية المقيّدة. اختر إحدى باقاتنا المميزة أو صمّم رحلتك الخاصة 100% على ظهر الجمال أو دراجات الكواد أو سيارات الدفع الرباعي 4x4.',
      exploreCta: 'استكشف الباقات ↓',
      whatsappCta: 'تحدث عبر واتساب',
      trustLabel: 'دليل محلي معتمد وحجز مباشر بدون وسطاء',
      verifiedGuide: 'ابن صحراء دوز الأصيل',
      customOrSignature: 'رحلات خاصة ومرنة بالكامل',
    },
    curator: {
      eyebrow: 'ميزة الدليل المحلي المستقل',
      title: 'حرية كاملة في الاختيار.. رحلتك مفصّلة على مقاس أحلامك.',
      subtitle:
        'لأن إبرا لا يقيّدك بمخيم واحد مزدحم أو أسطول تجاري واحد، فإنه يختار لك بعناية أفضل الإبل وأحدث دراجات الكواد وسيارات الدفع الرباعي، ويحجز لك نوع المخيم الذي يناسب ذوقك وميزانيتك تماماً.',
      quote:
        '«في الصحراء، الكرم وحسن الضيافة أمانة. أخبرني كيف تحلم برؤية الكثبان—سهرة بدوية حول النار تحت النجوم أو خيمة فاخرة بحمام خاص—وسأتولى ترتيب كل تفصيل بنفسي.» — إبرا',
      comparisonTitle: 'وكالات السياحة التقليدية مقابل الحجز المباشر مع إبرا',
      agencyTitle: 'الوكالات السياحية التقليدية',
      agencyPoints: [
        'إجبار المسافرين على مخيم واحد مزدحم تملكه الوكالة',
        'مواعيد صارمة ومجموعات كبيرة تفقدك هدوء الصحراء',
        'عمولات وسطاء إضافية تتراوح بين 30% و50%',
      ],
      ibraTitle: 'دليلك المحلي المستقل (إبرا صحارى)',
      ibraPoints: [
        'اختيار أفضل الجمال وأحدث دراجات الكواد وأمهر سائقي الصحراء',
        'حرية الاختيار بين مخيم البدو الأصيل أو المخيم الفاخر (غلامبينغ)',
        'أسعار محلية مباشرة بالدينار التونسي أو اليورو أو الدولار عبر واتساب',
      ],
      pillars: [
        {
          icon: 'camel',
          title: 'إبل أصيلة وهادئة',
          description: 'نختار جمالاً قوية وهادئة من عائلات بدوية موثوقة في دوز لضمان رحلة مريحة وآمنة.',
        },
        {
          icon: 'quad',
          title: 'دراجات كواد وسيارات 4x4 حديثة',
          description: 'فحص شامل قبل كل انطلاقة لضمان أعلى مستويات الأمان والمتعة فوق الكثبان الرملية.',
        },
        {
          icon: 'tent-luxury',
          title: 'كل مستويات التخييم',
          description: 'من خبز الملا تحت الجمر في مخيم بدوي تقليدي إلى الخيام الفندقية الفاخرة المزودة بحمام خاص.',
        },
        {
          icon: 'languages',
          title: 'مرافقة بثلاث لغات',
          description: 'تواصل سلس بالعربية والفرنسية والإنجليزية مع سرد حي لتراث الصحراء وأسرارها.',
        },
      ],
    },
    packagesSection: {
      eyebrow: 'الرحلات الصحراوية المميزة',
      title: 'مسارات صحراوية أصيلة بأسعار محلية شفافة',
      subtitle:
        'اختر فئة المخيم أو مدة الجولة أدناه، ويمكنك تغيير العملة من الشريط العلوي لعرض الأسعار فوراً بالدينار التونسي أو اليورو أو الدولار.',
      selectTierLabel: 'اختر الفئة أو البرنامج:',
      startingFrom: 'ابتداءً من',
      perPerson: '/ للشخص',
      itineraryToggleOpen: 'عرض البرنامج التفصيلي وما تشمله الرحلة',
      itineraryToggleClose: 'إخفاء تفاصيل البرنامج',
      includedTitle: 'تشمل الرحلة:',
      bookWhatsappCta: 'احجز مباشرة عبر واتساب',
      otaGuaranteeLabel: 'تفضّل الدفع الإلكتروني عبر المنصات العالمية؟',
      bookGyg: 'احجز عبر GetYourGuide',
      bookTripAdvisor: 'شاهد على TripAdvisor',
    },
    customBuilder: {
      eyebrow: 'مصمّم الرحلات الخاصة',
      title: 'صمّم برنامج رحلتك الصحراوية في 60 ثانية',
      subtitle:
        'ادمج أكثر من وسيلة تنقّل (مثل الذهاب بالجمال والعودة بدراجات الكواد)، واختر نوع المخيم وعدد المسافرين، ثم أرسل طلبك مباشرة إلى إبرا عبر واتساب.',
      step1Title: '1. وسيلة التنقّل (يمكنك اختيار وسيلة أو دمج أكثر من وسيلة)',
      step1Hint: 'نصيحة: يفضّل الكثير من الضيوف الذهاب على ظهر الجمال وقت الغروب والعودة بدراجات الكواد صباحاً!',
      transportOptions: [
        { id: 'قافلة الجمال', label: 'قافلة الجمال', icon: 'camel' },
        { id: 'دراجات الكواد', label: 'دراجات الكواد', icon: 'quad' },
        { id: 'سيارة دفع رباعي 4x4', label: 'دفع رباعي 4x4 في الكثبان', icon: 'suv-4x4' },
        { id: 'مسار الواحة (قصر غيلان)', label: 'واحة قصر غيلان', icon: 'oasis-palm' },
      ],
      step2Title: '2. مدة الرحلة',
      durationOptions: [
        { id: 'نصف يوم (3–4 ساعات)', label: 'نصف يوم' },
        { id: 'يوم كامل', label: 'يوم كامل' },
        { id: 'يومان / ليلة واحدة', label: 'يومان / ليلة واحدة' },
        { id: 'رحلة 3 أيام أو أكثر', label: '3 أيام أو أكثر' },
      ],
      step3Title: '3. نمط الإقامة والمخيم',
      campOptions: [
        {
          id: 'مخيم بدوي تقليدي (بيفواك)',
          label: 'مخيم بدوي تقليدي',
          desc: 'خيام بدوية أصيلة وسهرة نار وخبز الملا',
        },
        {
          id: 'مخيم فاخر بحمام خاص (غلامبينغ)',
          label: 'مخيم فاخر (جناح خاص)',
          desc: 'خيمة فاخرة واسعة بسرير مريح وحمام خاص مستقل',
        },
        {
          id: 'تحت النجوم مباشرة / جولة نهارية',
          label: 'المبيت تحت النجوم مباشرة',
          desc: 'نوم تحت سماء الصحراء الصافية قرب نار المخيم',
        },
      ],
      step4Title: '4. عدد المسافرين وشهر السفر',
      travelersLabel: 'عدد المسافرين',
      travelersUnit: 'مسافرين',
      monthLabel: 'الشهر المفضّل',
      months: [
        'يناير',
        'فبراير',
        'مارس',
        'أبريل',
        'مايو',
        'يونيو',
        'يوليو',
        'أغسطس',
        'سبتمبر',
        'أكتوبر',
        'نوفمبر',
        'ديسمبر',
        'مواعيد مرنة',
      ],
      notesLabel: 'ملاحظات أو طلبات خاصة (اختياري)',
      notesPlaceholder: 'مثال: استقبال من توزر أو جربة، وجبات نباتية، احتفال خاص...',
      previewLabel: 'معاينة رسالة واتساب المباشرة',
      sendWhatsappCta: 'أرسل طلب الرحلة الخاصة إلى إبرا عبر واتساب ←',
      responseGuarantee: 'رد مباشر من إبرا — غالباً خلال 15 إلى 30 دقيقة.',
    },
    tiktokSection: {
      eyebrow: 'لقطات حقيقية من العرق الشرقي الكبير',
      title: 'تابع يوميات الصحراء على تيك توك (@IbraSahara)',
      subtitle:
        'شاهد الأجواء الحقيقية في صحراء دوز: تحضير خبز الملا تحت الرمل والجمر، قوافل الإبل عند الغروب، وسهرات السمر البدوية.',
      followCta: 'شاهد يوميات الصحراء على تيك توك (@IbraSahara) ↗',
      reels: [
        {
          id: 'reel-1',
          title: 'تحضير خبز الملا تحت الرمل والجمر',
          caption: 'طقسنا الصحراوي الأصيل كل ليلة في المخيم 🔥🫓 #دوز #الصحراء_الكبرى #تونس',
          views: '48.2K',
          tag: 'خبز الرمل',
          image: '/images/ibra-guide-leading-camels.jpg',
        },
        {
          id: 'reel-2',
          title: 'قافلة الغروب نحو أعماق الكثبان',
          caption: 'الانطلاق قبل الغروب بـ 3 ساعات حين تتحول الكثبان إلى ذهب خالص 🐪✨',
          views: '92.5K',
          tag: 'قافلة الجمال',
          image: '/images/ibra-caravan-dunes.jpg',
        },
        {
          id: 'reel-3',
          title: 'جولة الكواد فوق قمم كثبان دوز',
          caption: 'كثبان رملية بكر تمتد بلا نهاية عند ساعة الغروب 🏜️🏁',
          views: '64.1K',
          tag: 'مغامرة كواد',
          image: '/images/quad-dunes-session.jpg',
        },
        {
          id: 'reel-4',
          title: 'العين الساخنة ونخيل واحة قصر غيلان',
          caption: 'بعد عبور الكثبان بسيارة 4x4، استرخاء في المياه المعدنية الدافئة 🌴🚙',
          views: '53.8K',
          tag: 'واحة قصر غيلان',
          image: '/images/ksar-ghilane-oasis.jpg',
        },
      ],
      reviewsTitle: 'تجارب المسافرين مع إبرا صحارى',
      reviews: [
        {
          name: 'كلير وماتيو',
          country: 'فرنسا',
          flag: '🇫🇷',
          date: 'أكتوبر',
          tourType: 'رحلة الجمال والمبيت (مخيم مريح)',
          text: 'نظّم لنا إبرا رحلة جمال خاصة رائعة. مشاهدة طريقة خبز "الملا" تحت الجمر والحديث عن نجوم الصحراء كانت أجمل لحظات رحلتنا في تونس!',
        },
        {
          name: 'ماركوس ف.',
          country: 'ألمانيا',
          flag: '🇩🇪',
          date: 'نوفمبر',
          tourType: 'برنامج مخصّص: جمال عند الغروب + كواد صباحاً',
          text: 'أردنا تجربة الجمال والكواد معاً، فرتّب إبرا وصول دراجات الكواد إلينا صباحاً بعد ليلتنا في المخيم. تنسيق ممتاز عبر واتساب وسعر محلي عادل جداً.',
        },
        {
          name: 'سارة وجيمس',
          country: 'بريطانيا',
          flag: '🇬🇧',
          date: 'مارس',
          tourType: 'رحلة 4x4 إلى قصر غيلان (مخيم فاخر)',
          text: 'من لحظة استقبالنا في دوز إلى السباحة في عين قصر غيلان الدافئة وزيارة الحصن الروماني وقت الغروب، شعرنا بكرم ضيافة حقيقي وكأننا بين أهلنا.',
        },
      ],
    },
    faqSection: {
      eyebrow: 'معلومات هامة للمسافرين',
      title: 'الأسئلة الشائعة',
      subtitle: 'كل ما تحتاج معرفته قبل الانطلاق من دوز إلى صحراء العرق الشرقي الكبير.',
      items: [
        {
          question: 'لماذا تنطلق رحلات المبيت قبل الغروب بـ 3 ساعات وتعود في الصباح الباكر؟',
          answer:
            'لتجنّب حرارة شمس الظهيرة المرتفعة؛ فالانطلاق قبل الغروب بـ 3 ساعات يتيح لك الاستمتاع باعتدال الطقس وأجمل إضاءة ذهبية للتصوير، ثم قضاء الليلة حول النار وتحت النجوم، والعودة صباحاً في الهواء المنعش قبل اشتداد الحرارة.',
        },
        {
          question: 'ما الفرق بين مخيم البدو التقليدي (بيفواك) والمخيم الفاخر (غلامبينغ)؟',
          answer:
            'مخيم البدو التقليدي يمنحك التجربة الصحراوية الأصيلة بخيام بدوية وفرش مريح وسهرة حول النار مع مرافق مشتركة. أما الفئة المريحة والفاخرة (غلامبينغ) فتوفر خيمة خاصة واسعة بسرير مرتفع ومفروشات فندقية وحمام خاص مستقل بمياه ساخنة.',
        },
        {
          question: 'ما هي طرق الدفع والعملات المقبولة؟',
          answer:
            'عند الحجز المباشر عبر واتساب، يكون الدفع نقداً عند الوصول إلى دوز بالدينار التونسي (TND) أو اليورو (EUR) أو الدولار الأمريكي (USD). وإذا كنت تفضّل الدفع بالبطاقة البنكية عبر الإنترنت، يمكنك الحجز عبر روابطنا في GetYourGuide أو TripAdvisor.',
        },
        {
          question: 'هل أحتاج إلى خبرة سابقة لقيادة دراجات الكواد في الكثبان؟',
          answer:
            'لا يلزم أي خبرة سابقة؛ فجميع الدراجات أوتوماتيكية بالكامل وحديثة، ويوفر لك إبرا الخوذة والنظارات الواقية مع تدريب عملي مبسّط قبل الانطلاق ومرافقة مستمرة تناسب سرعتك.',
        },
        {
          question: 'هل التوصيل داخل دوز مجاني؟ وهل يمكن ترتيب النقل من توزر أو جربة أو مطماطة؟',
          answer:
            'نعم، الاستقبال والتوصيل من أي فندق أو دار ضيافة أو محطة في دوز مجاني 100%. كما يمكننا ترتيب سيارة 4x4 خاصة لنقلك من توزر أو جربة أو مطماطة مباشرة إلى دوز عند التواصل عبر واتساب.',
        },
      ],
    },
    footer: {
      description:
        'دليلك المحلي المستقل في صحراء دوز، تونس. رحلات جمال خاصة، جولات دراجات كواد، ومغامرات دفع رباعي 4x4 مخصصة في العرق الشرقي الكبير.',
      locationLabel: 'نقطة الانطلاق',
      locationValue: 'دوز، ولاية قبلي، تونس (بوابة الصحراء الكبرى)',
      phoneLabel: 'واتساب وهاتف مباشر',
      quickLinks: 'روابط سريعة',
      otaBookings: 'منصات الحجز والتواصل',
      rights: 'جميع الحقوق محفوظة. صُمم في دوز، تونس.',
    },
    mobileBar: {
      assurance: 'حجز مباشر بسعر محلي',
      subAssurance: 'رد فوري بالعربية • FR • EN',
      cta: 'واتساب إبرا',
    },
  },
};

export function getDictionary(lang: Language): Dictionary {
  return DICTIONARIES[lang] || DICTIONARIES.EN;
}
