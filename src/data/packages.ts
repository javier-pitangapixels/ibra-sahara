export type Currency = 'EUR' | 'USD' | 'TND';
export type Language = 'EN' | 'FR' | 'AR';

export interface PackageTier {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  prices: Record<Currency, number>; // Starting price per person
}

export interface TourPackage {
  id: string;
  slug: string;
  badge: Record<Language, string>;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  transportType: 'camel' | 'quad' | '4x4';
  durationSummary: Record<Language, string>;
  departureSchedule: Record<Language, string>;
  images: string[];
  tiers: PackageTier[];
  itinerary: {
    timeSlot: Record<Language, string>;
    title: Record<Language, string>;
    description: Record<Language, string>;
  }[];
  included: Record<Language, string[]>;
  otaLinks: {
    getYourGuideUrl: string;
    tripAdvisorUrl: string;
  };
}

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  EUR: '€',
  USD: '$',
  TND: 'TND',
};

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'pkg-1',
    slug: 'camel-overnight-2d1n',
    badge: {
      EN: 'Most Authentic',
      FR: 'Le Plus Populaire',
      AR: 'الأكثر طلباً',
    },
    title: {
      EN: 'The Sahara Sunset & Starlight Camel Trek',
      FR: 'Méharée Coucher de Soleil & Nuit Étoilée',
      AR: 'رحلة الجمال عند الغروب والمبيت تحت النجوم',
    },
    subtitle: {
      EN: 'Ride deep into the untouched dunes of the Grand Erg Oriental, bake traditional Mella bread in campfire embers, and sleep beneath the Saharan Milky Way.',
      FR: 'Traversez les dunes vierges du Grand Erg Oriental à dos de dromadaire, dégustez le pain de sable Mella cuit sous la braise et dormez sous la Voie Lactée.',
      AR: 'توغّل على ظهر الإبل في كثبان العرق الشرقي الكبير، وتذوّق خبز "الملا" المخبوز تحت جمر النار، ونم تحت سماء الصحراء المرصعة بالنجوم.',
    },
    transportType: 'camel',
    durationSummary: {
      EN: '2 Days / 1 Night',
      FR: '2 Jours / 1 Nuit',
      AR: 'يومان / ليلة واحدة',
    },
    departureSchedule: {
      EN: 'Starts 3 Hours Before Sunset • Early Morning Return',
      FR: 'Départ 3h Avant le Coucher du Soleil • Retour Matinal',
      AR: 'الانطلاق قبل الغروب بـ 3 ساعات • العودة في الصباح الباكر',
    },
    images: [
      '/images/ibra-caravan-dunes.jpg',
      '/images/ibra-guide-leading-camels.jpg',
      '/images/sahara-lone-camel-dunes.jpg',
    ],
    tiers: [
      {
        id: 'camel-tier-a',
        name: {
          EN: 'Traditional Bivouac Camp',
          FR: 'Bivouac Nomade Traditionnel',
          AR: 'مخيم البدو التقليدي (بيفواك)',
        },
        description: {
          EN: 'Authentic nomad tents, open campfire, freshly baked sand bread (Mella), and shared desert camp facilities.',
          FR: 'Tentes nomades authentiques, feu de camp, pain de sable frais (Mella) et sanitaires partagés au campement.',
          AR: 'خيام بدوية أصيلة، سهرة حول نار الحطب، خبز الرمل الطازج (الملا)، ومرافق مخيم مشتركة.',
        },
        prices: {
          EUR: 65,
          USD: 70,
          TND: 220,
        },
      },
      {
        id: 'camel-tier-b',
        name: {
          EN: 'Upgraded Comfort Desert Camp',
          FR: 'Campement Désert Grand Confort',
          AR: 'مخيم صحراوي فاخر ومريح',
        },
        description: {
          EN: 'Private high-walled tent with real mattress, elevated bed frame, warm blankets, and private bathroom facilities.',
          FR: 'Tente privée spacieuse avec vrai matelas, lit surélevé, couvertures chaudes et salle de bain privative.',
          AR: 'خيمة خاصة واسعة مع سرير ومرتبة مريحة وأغطية دافئة وحمام خاص مستقل.',
        },
        prices: {
          EUR: 115,
          USD: 125,
          TND: 380,
        },
      },
    ],
    itinerary: [
      {
        timeSlot: {
          EN: 'Day 1 • 3h Before Sunset',
          FR: 'Jour 1 • 3h Avant le Coucher du Soleil',
          AR: 'اليوم 1 • قبل الغروب بـ 3 ساعات',
        },
        title: {
          EN: 'Pickup in Douz & Caravan Departure',
          FR: 'Prise en Charge à Douz & Départ de la Caravane',
          AR: 'الانطلاق من دوز وبداية قافلة الجمال',
        },
        description: {
          EN: 'Meet Ibra and your hand-picked dromedaries at the desert gate. Wrap your traditional cheche headscarf and ride into the golden silence of the Grand Erg Oriental as temperatures cool.',
          FR: 'Rencontrez Ibra et vos dromadaires aux portes du désert. Nouez votre chèche traditionnel et partez dans le silence doré du Grand Erg Oriental à la fraîcheur de fin d’après-midi.',
          AR: 'لقاء إبرا والإبل المختارة عند بوابة الصحراء، وارتداء الشاش الصحراوي التقليدي والانطلاق وسط الكثبان الذهبية في أجواء المساء المعتدلة.',
        },
      },
      {
        timeSlot: {
          EN: 'Day 1 • Golden Hour & Nightfall',
          FR: 'Jour 1 • Heure Dorée & Soirée au Feu de Camp',
          AR: 'اليوم 1 • الغروب وسهرة النار تحت النجوم',
        },
        title: {
          EN: 'High Dune Sunset, Mella Sand Bread & Starlight Dinner',
          FR: 'Coucher de Soleil, Pain de Sable Mella & Dîner sous les Étoiles',
          AR: 'مشاهدة الغروب وخبز الملا والعشاء البدوي',
        },
        description: {
          EN: 'Watch the sun sink behind endless dunes. At camp, gather around the fire for mint tea, watch Ibra bake traditional Mella bread directly under hot sand and embers, and enjoy a slow-cooked Bedouin dinner.',
          FR: 'Admirez le soleil plonger derrière les dunes. Au camp, partagez le thé à la menthe, observez la cuisson du pain Mella sous le sable chaud et savourez un dîner bédouin mijoté au feu de bois.',
          AR: 'استمتع بمنظر غروب الشمس فوق الكثبان العالية، وتناول الشاي الأخضر بالنعناع، وشاهد تحضير خبز الملا تحت الرمل والجمر مع عشاء تقليدي شهي.',
        },
      },
      {
        timeSlot: {
          EN: 'Day 2 • Sunrise & Morning',
          FR: 'Jour 2 • Lever du Soleil & Retour Matinal',
          AR: 'اليوم 2 • شروق الشمس والعودة صباحاً',
        },
        title: {
          EN: 'Saharan Sunrise Breakfast & Return to Douz',
          FR: 'Petit-Déjeuner au Lever du Soleil & Retour à Douz',
          AR: 'إفطار الشروق والعودة إلى دوز قبل الحر',
        },
        description: {
          EN: 'Wake up to pastel dawn light over the dunes and fresh desert coffee. Ride back to Douz in the crisp morning air, arriving before midday heat climbs.',
          FR: 'Réveillez-vous face à l’aube sur les dunes avec un café chaud et un petit-déjeuner berbère, puis retournez à Douz à la fraîcheur matinale.',
          AR: 'استيقظ على ألوان الفجر الساحرة مع القهوة والإفطار الصحراوي، ثم عد على ظهر الإبل في هواء الصباح المنعش قبل ارتفاع حرارة الظهيرة.',
        },
      },
    ],
    included: {
      EN: [
        'Private local guide (Ibra) fluent in EN / FR / AR',
        'Healthy, gentle dromedary per traveler + camel handler',
        'Sunset mint tea, freshly baked Mella bread, dinner & breakfast',
        'Overnight camp matching your selected tier',
        'Free pickup & drop-off anywhere in Douz',
      ],
      FR: [
        'Guide local privé (Ibra) parlant FR / EN / AR',
        'Dromadaire calme et bien soigné par voyageur + chamelier',
        'Thé à la menthe, pain de sable Mella, dîner et petit-déjeuner',
        'Nuitée au campement selon la formule choisie',
        'Transfert aller-retour gratuit depuis votre hôtel à Douz',
      ],
      AR: [
        'مرافقة الدليل المحلي إبرا (يتحدث العربية والفرنسية والإنجليزية)',
        'جمل مخصّص لكل مسافر مع مرافق القافلة',
        'شاي الصحراء، خبز الملا على الجمر، وجبة العشاء والإفطار',
        'مبيت في المخيم حسب الفئة المختارة',
        'توصيل مجاني من وإلى مكان إقامتك في دوز',
      ],
    },
    otaLinks: {
      getYourGuideUrl: 'https://www.getyourguide.com/douz-l148204/',
      tripAdvisorUrl: 'https://www.tripadvisor.com/Attractions-g477973-Activities-Douz_Kebili_Governorate.html',
    },
  },
  {
    id: 'pkg-2',
    slug: 'quad-dunes-session',
    badge: {
      EN: 'Adrenaline & Views',
      FR: 'Sensations Fortes',
      AR: 'مغامرة وإثارة',
    },
    title: {
      EN: 'Grand Erg Oriental Quad Bike Sessions',
      FR: 'Sessions Quad dans le Grand Erg Oriental',
      AR: 'مغامرة الدراجات الرباعية (كواد) في الكثبان',
    },
    subtitle: {
      EN: 'Carve across untouched sand ridges on modern, well-maintained desert quads led at your pace—from scenic golden hour rides to full-day deep Sahara raids.',
      FR: 'Franchissez les cordons de dunes sur des quads récents et parfaitement entretenus, adaptés à votre rythme : session coucher de soleil ou raid journée complète.',
      AR: 'انطلق عبر كثبان الرمل الذهبية بدراجات رباعية حديثة ومجهّزة بالكامل، مع خيارات صباحية أو عند الغروب أو يوم كامل في أعماق الصحراء.',
    },
    transportType: 'quad',
    durationSummary: {
      EN: '3–4 Hours or Full Day',
      FR: '3–4 Heures ou Journée Complète',
      AR: '3–4 ساعات أو يوم كامل',
    },
    departureSchedule: {
      EN: 'Morning Cool Air • Sunset Golden Hour • Full-Day Raid',
      FR: 'Matinée Fraîche • Coucher de Soleil • Raid Journée',
      AR: 'جولة صباحية • جولة الغروب • رحلة يوم كامل',
    },
    images: [
      '/images/quad-dunes-session.jpg',
      '/images/sahara-grand-erg-horizon.jpg',
      '/images/ibra-caravan-dunes.jpg',
    ],
    tiers: [
      {
        id: 'quad-tier-a',
        name: {
          EN: 'Half-Day Morning Ride (3–4 Hours)',
          FR: 'Demi-Journée Matinale (3–4 Heures)',
          AR: 'جولة صباحية نصف يوم (3–4 ساعات)',
        },
        description: {
          EN: 'Early cool air, crisp morning shadows on untouched wind-swept dunes, and desert mint tea break.',
          FR: 'Air frais du matin, lumière cristalline sur les dunes vierges et pause thé à la menthe dans le désert.',
          AR: 'انطلاق في هواء الصباح البارد فوق الكثبان البكر مع استراحة شاي صحراوي.',
        },
        prices: {
          EUR: 55,
          USD: 60,
          TND: 185,
        },
      },
      {
        id: 'quad-tier-b',
        name: {
          EN: 'Half-Day Sunset Ride (3–4 Hours)',
          FR: 'Demi-Journée Coucher de Soleil (3–4 Heures)',
          AR: 'جولة الغروب نصف يوم (3–4 ساعات)',
        },
        description: {
          EN: 'Late afternoon departure, summit high dunes for panoramic sunset views, and golden hour photography.',
          FR: 'Départ en fin d’après-midi, panorama au sommet des hautes dunes pour le coucher du soleil et photos à l’heure dorée.',
          AR: 'انطلاق بعد العصر لصعود أعلى الكثبان ومشاهدة الغروب والتقاط أجمل الصور.',
        },
        prices: {
          EUR: 60,
          USD: 65,
          TND: 200,
        },
      },
      {
        id: 'quad-tier-c',
        name: {
          EN: 'Full-Day Deep Sahara Raid',
          FR: 'Raid Journée Complète au Cœur du Sahara',
          AR: 'مغامرة يوم كامل في أعماق الصحراء',
        },
        description: {
          EN: 'Full-day guided navigation deep into the sand sea with open-fire desert lunch and traditional mint tea.',
          FR: 'Navigation guidée toute la journée au cœur de la mer de sable avec déjeuner au feu de bois et thé saharien.',
          AR: 'رحلة يوم كامل في عمق بحر الرمال مع غداء مشوي على الحطب وشاي بالنعناع.',
        },
        prices: {
          EUR: 110,
          USD: 120,
          TND: 370,
        },
      },
    ],
    itinerary: [
      {
        timeSlot: {
          EN: 'Step 1 • Safety & Briefing',
          FR: 'Étape 1 • Briefing & Prise en Main',
          AR: 'المرحلة 1 • شرح السلامة والتدريب السريع',
        },
        title: {
          EN: 'Machine Check, Goggles & Dune Riding Technique',
          FR: 'Équipement, Conseils de Pilotage & Départ',
          AR: 'تجهيز الخوذ والنظارات وتعلّم قيادة الكثبان',
        },
        description: {
          EN: 'No prior quad experience needed. Ibra sources top-condition automatic quads, fits your helmet and sand goggles, and teaches you how to read dune crests safely.',
          FR: 'Aucune expérience requise. Ibra sélectionne des quads automatiques récents, fournit casques et lunettes, et vous montre comment franchir les dunes en toute sécurité.',
          AR: 'لا يشترط خبرة سابقة؛ دراجات أوتوماتيكية حديثة مع خوذ ونظارات رملية وشرح مبسّط لقراءة الكثبان بأمان.',
        },
      },
      {
        timeSlot: {
          EN: 'Step 2 • Deep Dune Corridors',
          FR: 'Étape 2 • Franchissement des Cordons de Dunes',
          AR: 'المرحلة 2 • عبور الممرات الرملية العالية',
        },
        title: {
          EN: 'Navigating the Grand Erg Oriental Ridges',
          FR: 'Navigation dans les Dunes du Grand Erg Oriental',
          AR: 'التوغّل في كثبان العرق الشرقي الكبير',
        },
        description: {
          EN: 'Leave tourist tracks behind and follow Ibra through sweeping valleys and high ridge viewpoints unreachable on foot.',
          FR: 'Quittez les pistes touristiques et suivez Ibra à travers de vastes vallées de sable et des crêtes panoramiques.',
          AR: 'ابتعد عن المسارات المزدحمة واتبع إبرا نحو القمم الرملية البانورامية والوديان الصحراوية الواسعة.',
        },
      },
      {
        timeSlot: {
          EN: 'Step 3 • Desert Tea / Campfire Lunch',
          FR: 'Étape 3 • Pause Thé Saharien / Déjeuner Bédouin',
          AR: 'المرحلة 3 • استراحة الشاي أو غداء النار',
        },
        title: {
          EN: 'Dune Summit Pause & Return to Douz',
          FR: 'Pause Panoramique au Sommet & Retour',
          AR: 'استراحة القمة والعودة إلى دوز',
        },
        description: {
          EN: 'Stop atop a high dune ridge for hot desert tea (plus campfire lunch on the Full-Day Raid) before cruising back to Douz.',
          FR: 'Arrêt au sommet d’une grande dune pour le thé préparé sur la braise (et déjeuner complet sur le raid journée) avant le retour à Douz.',
          AR: 'توقّف فوق الكثبان لشرب الشاي الصحراوي (مع غداء كامل على الحطب في رحلة اليوم الكامل) قبل العودة.',
        },
      },
    ],
    included: {
      EN: [
        'Modern automatic quad bike + fuel included',
        'Helmet, sand goggles & traditional cheche wrap',
        'Private lead guide (Ibra) pacing the route to your skill level',
        'Desert mint tea break (plus campfire lunch on Full-Day Raid)',
        'Free hotel pickup & drop-off in Douz',
      ],
      FR: [
        'Quad automatique récent + carburant inclus',
        'Casque, lunettes de sable et chèche traditionnel',
        'Guide privé (Ibra) adaptant l’itinéraire à votre niveau',
        'Pause thé dans les dunes (et déjeuner sur le raid journée)',
        'Transfert gratuit depuis votre hébergement à Douz',
      ],
      AR: [
        'دراجة كواد أوتوماتيكية حديثة شاملة الوقود',
        'خوذة، نظارات واقية من الرمل، وشاش صحراوي',
        'مرافقة خاصة من الدليل إبرا حسب مستواك',
        'استراحة شاي في الصحراء (وغداء كامل في باقة اليوم الكامل)',
        'نقل مجاني من وإلى الفندق في دوز',
      ],
    },
    otaLinks: {
      getYourGuideUrl: 'https://www.getyourguide.com/douz-l148204/',
      tripAdvisorUrl: 'https://www.tripadvisor.com/Attractions-g477973-Activities-Douz_Kebili_Governorate.html',
    },
  },
  {
    id: 'pkg-3',
    slug: 'ksar-ghilane-4x4-2d1n',
    badge: {
      EN: 'Oasis & Ruins',
      FR: 'Oasis & Aventure 4x4',
      AR: 'واحة وقلاع تاريخية',
    },
    title: {
      EN: 'Ksar Ghilane Oasis 4x4 Expedition',
      FR: 'Expédition 4x4 vers l’Oasis de Ksar Ghilane',
      AR: 'رحلة الدفع الرباعي 4x4 إلى واحة قصر غيلان',
    },
    subtitle: {
      EN: 'Cross the Sahara off-road by 4x4 from Douz to the palm-fringed thermal spring of Ksar Ghilane, explore Roman Fort Tisavar, and sleep in an oasis camp.',
      FR: 'Traversez les pistes de sable en 4x4 de Douz jusqu’à la source thermale de Ksar Ghilane, explorez le fort romain de Tisavar et dormez au cœur de l’oasis.',
      AR: 'عبور الصحراء بسيارة دفع رباعي من دوز إلى واحة قصر غيلان والسباحة في العين الساخنة وزيارة الحصن الروماني تيسافار والمبيت في الواحة.',
    },
    transportType: '4x4',
    durationSummary: {
      EN: '2 Days / 1 Night',
      FR: '2 Jours / 1 Nuit',
      AR: 'يومان / ليلة واحدة',
    },
    departureSchedule: {
      EN: 'Day 1 Off-Road Dune Crossing • Day 2 Scenic Return',
      FR: 'Jour 1 Traversée Piste & Dunes • Jour 2 Retour Panoramique',
      AR: 'اليوم 1 عبور الكثبان نحو الواحة • اليوم 2 عودة بانورامية',
    },
    images: [
      '/images/ksar-ghilane-oasis.jpg',
      '/images/sahara-grand-erg-horizon.jpg',
      '/images/ibra-guide-leading-camels.jpg',
    ],
    tiers: [
      {
        id: 'oasis-tier-a',
        name: {
          EN: 'Standard Oasis Camp (Base 2–4 Pax)',
          FR: 'Campement Oasis Standard (Base 2–4 Pers.)',
          AR: 'مخيم الواحة الكلاسيكي (2–4 أشخاص)',
        },
        description: {
          EN: 'Comfortable desert tents nestled beside the palm grove, traditional dinner, breakfast, and full 4x4 expedition.',
          FR: 'Tentes sahariennes confortables près de la palmeraie, dîner traditionnel, petit-déjeuner et expédition 4x4 complète.',
          AR: 'خيام صحراوية مريحة قرب واحة النخيل، شاملة العشاء والإفطار والرحلة الكاملة بسيارة 4x4.',
        },
        prices: {
          EUR: 140,
          USD: 150,
          TND: 470,
        },
      },
      {
        id: 'oasis-tier-b',
        name: {
          EN: 'Luxury Oasis Glamping Camp (Private En-Suite)',
          FR: 'Campement Oasis Luxe Glamping (Suite Privée)',
          AR: 'مخيم الواحة الفاخر غلامبينغ (جناح خاص)',
        },
        description: {
          EN: 'Five-star air-conditioned luxury desert tent with private en-suite bathroom, king/twin beds, and pool access.',
          FR: 'Tente de luxe climatisée avec salle de bain privative, literie hôtelière haut de gamme et accès piscine.',
          AR: 'خيمة فندقية فاخرة مكيّفة مع حمام خاص مستقل وأسرّة فاخرة وإطلالة مباشرة على الكثبان.',
        },
        prices: {
          EUR: 195,
          USD: 210,
          TND: 650,
        },
      },
    ],
    itinerary: [
      {
        timeSlot: {
          EN: 'Day 1 • Morning Departure',
          FR: 'Jour 1 • Départ Matinal en 4x4',
          AR: 'اليوم 1 • الانطلاق صباحاً بسيارة 4x4',
        },
        title: {
          EN: 'Off-Road Desert Crossing from Douz to Ksar Ghilane',
          FR: 'Traversée Off-Road à Travers les Dunes vers Ksar Ghilane',
          AR: 'عبور المسارات الصحراوية والكثبان من دوز إلى قصر غيلان',
        },
        description: {
          EN: 'Board a spacious, air-conditioned 4x4 in Douz. Deflate tires at the desert edge and cross pure sand tracks and rolling dunes toward the southern oasis.',
          FR: 'Montez à bord d’un 4x4 spacieux et climatisé à Douz. Dégonflage des pneus aux portes de l’Erg et traversée des pistes sablonneuses jusqu’à l’oasis.',
          AR: 'الانطلاق بسيارة دفع رباعي مجهزة ومكيفة من دوز، وتخفيف ضغط الإطارات لعبور المسارات الرملية والكثبان نحو الواحة الجنوبية.',
        },
      },
      {
        timeSlot: {
          EN: 'Day 1 • Afternoon & Sunset',
          FR: 'Jour 1 • Après-Midi & Coucher de Soleil',
          AR: 'اليوم 1 • بعد الظهر والغروب في الواحة',
        },
        title: {
          EN: 'Thermal Spring Swim & Roman Fort Tisavar',
          FR: 'Baignade dans la Source Thermale & Fort Romain Tisavar',
          AR: 'السباحة في العين الساخنة وزيارة الحصن الروماني تيسافار',
        },
        description: {
          EN: 'Swim in Ksar Ghilane’s natural warm spring shaded by date palms, then drive or trek across the red dunes to the 2nd-century Roman outpost of Tisavar for sunset.',
          FR: 'Baignez-vous dans la source d’eau chaude naturelle sous les palmiers, puis rejoignez le fortin romain de Tisavar au milieu des dunes ocres pour le coucher du soleil.',
          AR: 'استمتع بالسباحة في المياه المعدنية الدافئة وسط النخيل، ثم توجه عبر الكثبان الحمراء إلى حصن تيسافار الروماني التاريخي لمشاهدة الغروب.',
        },
      },
      {
        timeSlot: {
          EN: 'Day 2 • Morning & Return',
          FR: 'Jour 2 • Matinée à l’Oasis & Retour',
          AR: 'اليوم 2 • صباح هادئ والعودة إلى دوز',
        },
        title: {
          EN: 'Relaxed Oasis Morning & Scenic Return to Douz',
          FR: 'Matinée Détente & Retour Panoramique vers Douz',
          AR: 'إفطار في الواحة وعودة عبر الطريق البانورامي',
        },
        description: {
          EN: 'Enjoy a leisurely oasis breakfast and morning swim before returning comfortably to Douz (or onward drop-off toward Matmata/Djerba upon request).',
          FR: 'Profitez d’un petit-déjeuner au calme dans la palmeraie avant le retour vers Douz (ou continuation vers Matmata/Djerba sur demande).',
          AR: 'تناول إفطاراً هادئاً في الواحة قبل رحلة العودة المريحة إلى دوز (مع إمكانية التوصيل نحو مطماطة أو جربة حسب الطلب).',
        },
      },
    ],
    included: {
      EN: [
        'Private 4x4 desert vehicle + experienced Sahara driver & guide Ibra',
        'Off-road dune crossing + Roman Fort Tisavar excursion',
        'Access to Ksar Ghilane natural thermal spring',
        'Lunch, dinner & breakfast + overnight oasis camp tier',
        'Door-to-door pickup & return in Douz',
      ],
      FR: [
        'Véhicule 4x4 privé climatisé + chauffeur saharien & guide Ibra',
        'Traversée off-road des dunes + excursion au fort romain Tisavar',
        'Accès à la source thermale naturelle de Ksar Ghilane',
        'Déjeuner, dîner, petit-déjeuner & nuitée selon le camp choisi',
        'Prise en charge aller-retour à votre hôtel à Douz',
      ],
      AR: [
        'سيارة دفع رباعي 4x4 خاصة ومكيفة مع سائق خبير والدليل إبرا',
        'عبور الكثبان الرملية وزيارة الحصن الروماني تيسافار',
        'السباحة في العين الساخنة الطبيعية بقصر غيلان',
        'وجبات الغداء والعشاء والإفطار مع المبيت حسب الفئة المختارة',
        'الاستقبال والتوصيل من وإلى مقر الإقامة في دوز',
      ],
    },
    otaLinks: {
      getYourGuideUrl: 'https://www.getyourguide.com/douz-l148204/',
      tripAdvisorUrl: 'https://www.tripadvisor.com/Attractions-g477973-Activities-Douz_Kebili_Governorate.html',
    },
  },
];

