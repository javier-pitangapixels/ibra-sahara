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
    reviews: string;
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
    trustBadges: string[];
    verifiedGuide: string;
    customOrSignature: string;
  };
  curator: {
    eyebrow: string;
    title: string;
    subtitle: string;
    quote: string;
    highlightsTitle: string;
    highlightsPoints: string[];
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
  reviewsSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
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
    contactHeading: string;
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
      curator: 'Meet Ibra',
      customTrip: 'Custom Trip Builder',
      reviews: 'Guest Reviews',
      faq: 'FAQ',
      whatsappCta: 'WhatsApp Ibra',
      currencyLabel: 'Currency',
      langLabel: 'Language',
    },
    hero: {
      pill: '📍 Douz, Tunisia • Guides in 🇬🇧 English, 🇫🇷 Français, 🇹🇳 العربية',
      h1: 'Experience the Real Sahara with Ibra—Your Local Douz Guide.',
      subheadline:
        'Discover the Grand Erg Oriental at your own pace. Choose one of our signature desert routes or craft a 100% private camel, quad, or 4x4 expedition tailored to your group.',
      exploreCta: 'Explore Packages ↓',
      whatsappCta: 'Chat on WhatsApp',
      trustBadges: [
        '5.0 ★ Rated by International Travelers',
        '100% Private & Customizable Routes',
        'Free Hotel Pickup in Douz',
      ],
      verifiedGuide: 'Born & Raised in Douz',
      customOrSignature: 'Private & Flexible Departures',
    },
    curator: {
      eyebrow: 'Your Personal Guide in Douz',
      title: 'Every Sahara Journey Crafted Around You.',
      subtitle:
        'Born and raised at the edge of the dunes in Douz, Ibra plans every expedition around how you want to experience the desert—hand-selecting gentle dromedaries, modern quads, reliable 4x4s, and the camp atmosphere that fits your style, from an authentic Bedouin bivouac under the stars to a private luxury desert suite.',
      quote:
        '“In the Sahara, hospitality is sacred. Tell me how you dream of seeing the dunes—wild campfire under the stars or a private luxury tent—and I will arrange every detail personally.” — Ibra',
      highlightsTitle: 'What to Expect When Traveling with Ibra',
      highlightsPoints: [
        'Hand-picked camels, modern automatic quads & experienced 4x4 desert drivers',
        'Your choice of traditional nomadic bivouac or luxury en-suite desert camp',
        'Personal trip planning and fast coordination directly on WhatsApp',
        'Authentic campfire cooking including freshly baked Mella sand bread',
      ],
      pillars: [
        {
          icon: 'camel',
          title: 'Ethical, Gentle Dromedaries',
          description:
            'Partnered with trusted local Bedouin families in Douz—calm, well-cared-for camels matched to each rider.',
        },
        {
          icon: 'quad',
          title: 'Well-Maintained Quads & 4x4s',
          description:
            'Inspected before every departure so your dune crossing is smooth, powerful, and safe.',
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
      title: 'Signature Sahara Expeditions from Douz',
      subtitle:
        'Select your preferred camp style or ride duration below. You can switch currencies in the top menu to view rates in EUR, USD, or TND.',
      selectTierLabel: 'Choose Your Tier / Option:',
      startingFrom: 'Starting from',
      perPerson: '/ person',
      itineraryToggleOpen: 'View Day-by-Day Schedule & Inclusions',
      itineraryToggleClose: 'Hide Schedule Details',
      includedTitle: 'What’s Included:',
      bookWhatsappCta: 'Book via WhatsApp',
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
    reviewsSection: {
      eyebrow: 'Traveler Stories',
      title: 'What Guests Say About Exploring with Ibra',
      subtitle:
        'Real experiences from travelers who explored the dunes of Douz and Ksar Ghilane with Ibra.',
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
          text: 'We wanted both camels and quads without booking two separate big tours. Ibra arranged quads to meet us in the morning after our bivouac night. Seamless WhatsApp communication from start to finish.',
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
          question: 'How does booking and payment work?',
          answer:
            'Simply message Ibra on WhatsApp to confirm your dates and itinerary. You can pay in cash upon arrival in Douz in Tunisian Dinars (TND), Euros (EUR), or US Dollars (USD).',
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
        'Local Sahara guide in Douz, Tunisia. Private camel treks, quad bike sessions, and custom 4x4 expeditions across the Grand Erg Oriental.',
      locationLabel: 'Base Camp',
      locationValue: 'Douz, Kebili Governorate, Tunisia (Gateway to the Sahara)',
      phoneLabel: 'WhatsApp & Phone',
      quickLinks: 'Explore',
      contactHeading: 'Contact & Direct Booking',
      rights: 'All rights reserved. Crafted in Douz, Tunisia.',
    },
    mobileBar: {
      assurance: 'Chat Directly with Ibra',
      subAssurance: 'Fast reply in EN • FR • AR',
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
      curator: 'Votre Guide',
      customTrip: 'Circuit sur Mesure',
      reviews: 'Avis Voyageurs',
      faq: 'FAQ',
      whatsappCta: 'WhatsApp Ibra',
      currencyLabel: 'Devise',
      langLabel: 'Langue',
    },
    hero: {
      pill: '📍 Douz, Tunisie • Guide en 🇬🇧 English, 🇫🇷 Français, 🇹🇳 العربية',
      h1: 'Vivez le Vrai Sahara avec Ibra—Votre Guide Local à Douz.',
      subheadline:
        'Découvrez le Grand Erg Oriental à votre rythme. Choisissez l’un de nos circuits signatures ou créez une expédition 100 % privée en dromadaire, quad ou 4x4.',
      exploreCta: 'Découvrir les Formules ↓',
      whatsappCta: 'Discuter sur WhatsApp',
      trustBadges: [
        'Noté 5.0 ★ par les Voyageurs',
        'Circuits 100 % Privés & sur Mesure',
        'Prise en Charge Gratuite à Douz',
      ],
      verifiedGuide: 'Enfant du Désert de Douz',
      customOrSignature: 'Départs Privés & Flexibles',
    },
    curator: {
      eyebrow: 'Votre Guide Personnel à Douz',
      title: 'Chaque Expédition Saharienne Façonnée Pour Vous.',
      subtitle:
        'Né aux portes des dunes à Douz, Ibra organise chaque sortie selon vos envies : sélection de dromadaires doux et bien soignés, quads récents, 4x4 fiables et choix du campement qui vous correspond — du bivouac nomade autour du feu jusqu’au campement de luxe avec salle de bain privée.',
      quote:
        '« Dans le Sahara, l’hospitalité est sacrée. Dites-moi comment vous rêvez de vivre les dunes — feu de camp nomade sous les étoiles ou tente privée grand confort — et j’organise chaque détail pour vous. » — Ibra',
      highlightsTitle: 'Ce Qui Rend Votre Expérience Unique',
      highlightsPoints: [
        'Dromadaires choisis avec soin, quads automatiques récents et chauffeurs 4x4 expérimentés',
        'Choix entre bivouac nomade authentique ou campement glamping grand confort',
        'Organisation directe et personnalisée avec Ibra sur WhatsApp',
        'Cuisine saharienne au feu de bois avec cuisson du pain de sable Mella',
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
      title: 'Nos Expéditions Sahariennes au Départ de Douz',
      subtitle:
        'Sélectionnez votre niveau de confort ou la durée souhaitée ci-dessous. Vous pouvez changer de devise dans le menu supérieur (EUR, USD ou TND).',
      selectTierLabel: 'Choisissez Votre Formule :',
      startingFrom: 'À partir de',
      perPerson: '/ pers.',
      itineraryToggleOpen: 'Voir le Programme Détaillé & Inclus',
      itineraryToggleClose: 'Masquer le Programme',
      includedTitle: 'Ce Qui Est Inclus :',
      bookWhatsappCta: 'Réserver via WhatsApp',
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
    reviewsSection: {
      eyebrow: 'Témoignages Voyageurs',
      title: 'Avis des Voyageurs Ayant Exploré avec Ibra',
      subtitle:
        'Découvrez les retours des voyageurs partis dans les dunes de Douz et l’oasis de Ksar Ghilane avec Ibra.',
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
          text: 'Nous voulions combiner dromadaire le soir et quad le matin. Ibra a fait venir les quads directement après notre nuit au bivouac. Organisation parfaite et fluide sur WhatsApp.',
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
          question: 'Comment fonctionnent la réservation et le règlement ?',
          answer:
            'Il suffit de contacter Ibra sur WhatsApp pour confirmer vos dates et votre programme. Le règlement s’effectue sur place à Douz en espèces en Dinars Tunisiens (TND), en Euros (EUR) ou en Dollars (USD).',
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
        'Guide saharien à Douz, Tunisie. Méharées privées à dos de dromadaire, sessions quad et expéditions 4x4 sur mesure dans le Grand Erg Oriental.',
      locationLabel: 'Point de Départ',
      locationValue: 'Douz, Gouvernorat de Kébili, Tunisie (Porte du Sahara)',
      phoneLabel: 'WhatsApp & Téléphone',
      quickLinks: 'Navigation',
      contactHeading: 'Contact & Réservation WhatsApp',
      rights: 'Tous droits réservés. Conçu à Douz, Tunisie.',
    },
    mobileBar: {
      assurance: 'Discuter en Direct avec Ibra',
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
      curator: 'تعرف على إبرا',
      customTrip: 'صمّم رحلتك الخاصة',
      reviews: 'آراء الضيوف',
      faq: 'الأسئلة الشائعة',
      whatsappCta: 'تواصل عبر واتساب',
      currencyLabel: 'العملة',
      langLabel: 'اللغة',
    },
    hero: {
      pill: '📍 دوز، تونس • دليلك يتحدث 🇹🇳 العربية، 🇫🇷 الفرنسية، 🇬🇧 الإنجليزية',
      h1: 'عش تجربة الصحراء الكبرى الحقيقية مع إبرا—دليلك المحلي في دوز.',
      subheadline:
        'اكتشف كثبان العرق الشرقي الكبير بالطريقة التي تناسبك. اختر إحدى باقاتنا المميزة أو صمّم رحلتك الخاصة 100% على ظهر الجمال أو دراجات الكواد أو سيارات الدفع الرباعي 4x4.',
      exploreCta: 'استكشف الباقات ↓',
      whatsappCta: 'تحدث عبر واتساب',
      trustBadges: [
        'تقييم 5.0 ★ من المسافرين',
        'رحلات خاصة ومصممة حسب الطلب',
        'استقبال مجاني من الفندق في دوز',
      ],
      verifiedGuide: 'ابن صحراء دوز الأصيل',
      customOrSignature: 'رحلات خاصة ومرنة بالكامل',
    },
    curator: {
      eyebrow: 'دليلك الشخصي في صحراء دوز',
      title: 'كل رحلة صحراوية مصمّمة خصيصاً لك.',
      subtitle:
        'نشأ إبرا على مشارف كثبان دوز، وهو يرتّب كل رحلة بما يناسب تطلعاتك؛ من اختيار أفضل الإبل الهادئة وأحدث دراجات الكواد وسيارات الدفع الرباعي، إلى تنسيق نمط التخييم الذي تفضّله بين مخيم البدو الأصيل تحت النجوم أو المخيم الفاخر المزوّد بحمام خاص.',
      quote:
        '«في الصحراء، الكرم وحسن الضيافة أمانة. أخبرني كيف تحلم برؤية الكثبان—سهرة بدوية حول النار تحت النجوم أو خيمة فاخرة بحمام خاص—وسأتولى ترتيب كل تفصيل بنفسي.» — إبرا',
      highlightsTitle: 'ما الذي يميّز رحلتك مع إبرا',
      highlightsPoints: [
        'إبل هادئة ومختارة بعناية، ودراجات كواد أوتوماتيكية حديثة، وسائقو صحراء محترفون',
        'حرية الاختيار بين مخيم البدو التقليدي (بيفواك) أو المخيم الفاخر (غلامبينغ)',
        'تخطيط شخصي وتنسيق مباشر وسريع عبر واتساب',
        'ضيافة صحراوية أصيلة تشمل تحضير خبز الملا الطازج تحت الجمر',
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
      title: 'رحلاتنا الصحراوية المميزة من دوز',
      subtitle:
        'اختر فئة المخيم أو مدة الجولة أدناه، ويمكنك تغيير العملة من الشريط العلوي لعرض الأسعار بالدينار التونسي أو اليورو أو الدولار.',
      selectTierLabel: 'اختر الفئة أو البرنامج:',
      startingFrom: 'ابتداءً من',
      perPerson: '/ للشخص',
      itineraryToggleOpen: 'عرض البرنامج التفصيلي وما تشمله الرحلة',
      itineraryToggleClose: 'إخفاء تفاصيل البرنامج',
      includedTitle: 'تشمل الرحلة:',
      bookWhatsappCta: 'احجز عبر واتساب',
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
    reviewsSection: {
      eyebrow: 'آراء وتجارب الضيوف',
      title: 'تجارب المسافرين مع إبرا صحارى',
      subtitle:
        'انطباعات المسافرين الذين خاضوا تجربة الكثبان الرملية في دوز وواحة قصر غيلان مع إبرا.',
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
          text: 'أردنا تجربة الجمال والكواد معاً، فرتّب إبرا وصول دراجات الكواد إلينا صباحاً بعد ليلتنا في المخيم. تنسيق ممتاز وسلس عبر واتساب.',
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
          question: 'كيف يتم الحجز والدفع؟',
          answer:
            'يمكنك التواصل مباشرة مع إبرا عبر واتساب لتأكيد الموعد وتفاصيل البرنامج، ويكون الدفع نقداً عند الوصول إلى دوز بالدينار التونسي (TND) أو اليورو (EUR) أو الدولار الأمريكي (USD).',
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
        'دليلك الصحراوي في دوز، تونس. رحلات جمال خاصة، جولات دراجات كواد، ومغامرات دفع رباعي 4x4 مخصصة في العرق الشرقي الكبير.',
      locationLabel: 'نقطة الانطلاق',
      locationValue: 'دوز، ولاية قبلي، تونس (بوابة الصحراء الكبرى)',
      phoneLabel: 'واتساب وهاتف',
      quickLinks: 'روابط سريعة',
      contactHeading: 'التواصل والحجز المباشر',
      rights: 'جميع الحقوق محفوظة. صُمم في دوز، تونس.',
    },
    mobileBar: {
      assurance: 'تواصل مباشرة مع إبرا',
      subAssurance: 'رد سريع بالعربية • FR • EN',
      cta: 'واتساب إبرا',
    },
  },
};

export function getDictionary(lang: Language): Dictionary {
  return DICTIONARIES[lang] || DICTIONARIES.EN;
}
