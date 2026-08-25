import {
  ClubInfo,
  PurposePillar,
  Committee,
  JoinContributionArea,
} from '../types';

/**
 * =========================================================================
 * GALIPHARM - OFFICIAL CLUB DATA & INFORMATION
 * =========================================================================
 * Official digital identity and presentation of GaliPharm.
 * Faculté de Médecine d'Annaba • Département de Pharmacie
 */

export const CLUB_INFO: ClubInfo = {
  name: 'GaliPharm',
  fullName: 'GaliPharm — Club Estudiantin de Pharmacie',
  tagline: '“Let’s make pharmacy great again.”',
  philosophyStatement: '“One step for the student, a big leap for the pharmacy.”',
  philosophyStatementFr: '« Un pas pour l’étudiant, un grand pas pour la pharmacie. »',
  heroSubtitle:
    'A pharmacy student club where creativity, science, community and student development come together.',
  heroSubtitleFr:
    'Un club estudiantin de pharmacie où créativité, science, communauté et développement étudiant se rencontrent.',
  officialDescriptionFr:
    'GaliPharm est un club estudiantin de pharmacie de la Faculté de Médecine d’Annaba. Il permet aux étudiants de participer à la réalisation de projets et de s’épanouir dans une vie para-universitaire dynamique et variée.\n\nConstitué d’étudiants ambitieux et dévoués, GaliPharm œuvre à valoriser l’étudiant, favoriser les échanges et le partage, et contribuer à une vie estudiantine plus riche et épanouissante au cours des années universitaires.',
  officialDescriptionEn:
    'GaliPharm is a pharmacy student club of the Faculty of Medicine of Annaba. It empowers pharmacy students to participate in project realization and thrive in a dynamic, varied extracurricular university life.\n\nComposed of ambitious and dedicated students, GaliPharm works to empower the student, foster exchange and sharing, and contribute to a richer and more fulfilling student journey throughout the university years.',
  facultyName: 'Faculté de Médecine d’Annaba — Département de Pharmacie',
  universityName: 'Université Badji Mokhtar — Annaba',
  location: 'Faculté de Médecine d’Annaba, Département de Pharmacie',
  socialLinks: {
    instagram: 'https://www.instagram.com/galipharm__?igsi=ajRidDc2dmkydHdx&utm_source=qr',
    facebook: 'https://www.facebook.com/share/19T7MJLZhN/?mibextid=wwXIfr',
    linkedin: 'https://www.linkedin.com/company/galipharm/',
    tiktok: 'https://www.tiktok.com/@galipharm?_r=1&_t=ZS-99BCsOPnOk9',
    email: 'galipharm1@gmail.com',
  },
};

/**
 * GOOGLE FORM RECRUITMENT PLACEHOLDER CONFIGURATION
 */
export const RECRUITMENT_CONFIG = {
  googleFormUrl: 'https://docs.google.com/forms/d/e/[OFFICIAL_GOOGLE_FORM_URL_PLACEHOLDER]/viewform',
  hasLiveFormUrl: false, // Set to true when user provides the official Google Form URL
  formNoticeEn: 'The official recruitment Google Form will be connected here.',
  formNoticeFr: 'Le formulaire Google Form officiel de recrutement sera connecté ici.',
};

/**
 * 6 CORE PURPOSE PILLARS
 */
export const PURPOSE_PILLARS: PurposePillar[] = [
  {
    id: 'empower-student',
    title: 'Empowering the Student',
    titleFr: 'Valoriser l’Étudiant',
    description:
      'Placing the student at the center of every initiative, celebrating individual potential, initiative, and ambition.',
    descriptionFr:
      'Placer l’étudiant au cœur de chaque initiative, en valorisant son potentiel individuel, son esprit d’initiative et son ambition.',
    icon: 'Sparkles',
  },
  {
    id: 'foster-sharing',
    title: 'Fostering Exchange & Sharing',
    titleFr: 'Favoriser les Échanges et le Partage',
    description:
      'Creating open spaces for dialogue, peer collaboration, mutual mentorship, and knowledge transmission across university years.',
    descriptionFr:
      'Créer des espaces de dialogue, d’entraide, de mentorat fraternel et de transmission des connaissances entre promotions.',
    icon: 'Users',
  },
  {
    id: 'develop-skills',
    title: 'Developing Scientific & Personal Skills',
    titleFr: 'Développer les Compétences Scientifiques et Personnelles',
    description:
      'Cultivating pharmaceutical rigor alongside essential soft skills, public speaking, leadership, and critical analysis.',
    descriptionFr:
      'Cultiver la rigueur scientifique pharmaceutique tout en développant l’art oratoire, le leadership et l’analyse critique.',
    icon: 'Compass',
  },
  {
    id: 'encourage-projects',
    title: 'Encouraging Project Realization',
    titleFr: 'Encourager la Réalisation de Projets',
    description:
      'Transforming student ideas into tangible events, scientific symposiums, health initiatives, and cultural experiences.',
    descriptionFr:
      'Transformer les idées étudiantes en projets concrets : symposiums scientifiques, actions de santé et initiatives culturelles.',
    icon: 'Target',
  },
  {
    id: 'dynamic-life',
    title: 'Contributing to Dynamic Student Life',
    titleFr: 'Contribuer à une Vie Para-Universitaire Dynamique',
    description:
      'Enriching campus life outside the lecture halls through engaging cultural, athletic, and community-driven activities.',
    descriptionFr:
      'Dynamiser la vie de campus en dehors des amphithéâtres grâce à des activités culturelles, sportives et citoyennes stimulantes.',
    icon: 'Activity',
  },
  {
    id: 'enriching-experiences',
    title: 'Offering Enriching Experiences',
    titleFr: 'Offrir des Expériences Enrichissantes',
    description:
      'Opening doors to memorable experiences, teamwork, field outings, and lifelong connections in the pharmacy field.',
    descriptionFr:
      'Ouvrir la voie à des expériences humaines inoubliables, au travail d’équipe, aux sorties de terrain et aux amitiés durables.',
    icon: 'HeartHandshake',
  },
];

/**
 * THE FOUR OFFICIAL COMMITTEES OF GALIPHARM
 */
export const COMMITTEES: Committee[] = [
  {
    id: 'scientific',
    name: 'Scientific Committee',
    nameFr: 'Comité Scientifique',
    shortName: 'Scientific',
    icon: 'Microscope',
    color: 'from-emerald-600 to-teal-700',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    shortDescription:
      'Focuses on scientific development and pharmacy-related activities, providing students with rigorous scientific experiences while cultivating practical and interpersonal competencies.',
    shortDescriptionFr:
      'Axé sur le développement scientifique et les activités pharmaceutiques, il offre aux étudiants des expériences scientifiques formatrices tout en développant leurs compétences pratiques et relationnelles.',
    objective:
      'To provide students with scientific experiences while helping them develop practical and interpersonal skills.',
    objectiveFr:
      'Fournir aux étudiants des expériences scientifiques tout en les aidant à développer des compétences pratiques et interpersonnelles.',
    activities: [
      'Scientific training sessions',
      'Conferences',
      'Congresses',
      'Specialized scientific days covering different areas of pharmacy',
      'E-posters',
      'Scientific presentations',
      'Development of soft skills for students',
    ],
    activitiesFr: [
      'Sessions de formation scientifique',
      'Conférences',
      'Congrès',
      'Journées scientifiques spécialisées couvrant les divers domaines de la pharmacie',
      'E-posters',
      'Présentations scientifiques',
      'Développement des soft skills pour les étudiants',
    ],
    skillsDeveloped: [
      'Scientific methodology & research rigor',
      'Medical writing & e-poster design',
      'Public speaking & presentation mastery',
      'Critical analysis of pharmaceutical literature',
      'Interpersonal & communication soft skills',
    ],
    skillsDevelopedFr: [
      'Méthodologie et rigueur scientifique',
      'Rédaction médicale et conception d’e-posters',
      'Prise de parole en public et présentation',
      'Analyse critique de la littérature pharmaceutique',
      'Soft skills et communication interpersonnelle',
    ],
    presidentName: '[To be announced / À venir]',
    members: '[Information will be updated soon / Informations à venir]',
  },
  {
    id: 'public-health',
    name: 'Public Health Committee',
    nameFr: 'Comité Santé Publique',
    shortName: 'Public Health',
    icon: 'HeartPulse',
    color: 'from-teal-600 to-cyan-700',
    badgeColor: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20',
    shortDescription:
      'Focuses on awareness, community engagement and social impact, actively encouraging pharmacy students to take a proactive, compassionate role in their community.',
    shortDescriptionFr:
      'Centré sur la sensibilisation, l’engagement communautaire et l’impact social, il encourage activement les étudiants à jouer un rôle dynamique et bienveillant au sein de leur communauté.',
    objective:
      'To encourage students to take an active, responsible role in their community.',
    objectiveFr:
      'Encourager les étudiants à jouer un rôle actif et responsable au sein de leur communauté.',
    activities: [
      'Awareness campaigns',
      'Community outreach',
      'Charitable activities',
      'Field outings',
      'Charitable hikes',
      'Public health initiatives',
    ],
    activitiesFr: [
      'Campagnes de sensibilisation',
      'Actions de proximité communautaire',
      'Activités caritatives et solidaires',
      'Sorties sur le terrain',
      'Randonnées caritatives',
      'Initiatives de santé publique',
    ],
    skillsDeveloped: [
      'Community engagement & citizen leadership',
      'Public health education & communication',
      'Social empathy & humanitarian action',
      'Field logistics & campaign organization',
      'Teamwork in community environments',
    ],
    skillsDevelopedFr: [
      'Engagement citoyen et leadership communautaire',
      'Communication et éducation en santé publique',
      'Empathie sociale et action humanitaire',
      'Logistique de terrain et organisation de campagnes',
      'Travail d’équipe en milieu associatif',
    ],
    presidentName: '[To be announced / À venir]',
    members: '[Information will be updated soon / Informations à venir]',
  },
  {
    id: 'cultural-sports',
    name: 'Cultural & Sports Committee',
    nameFr: 'Comité Culturel & Sportif',
    shortName: 'Cultural & Sports',
    icon: 'Trophy',
    color: 'from-amber-600 to-orange-700',
    badgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    shortDescription:
      'Contributes to the student’s personal development through cultural, artistic and sporting activities, promoting student well-being, creativity, and exchange outside the academic environment.',
    shortDescriptionFr:
      'Contribue à l’épanouissement personnel de l’étudiant à travers des activités culturelles, artistiques et sportives, favorisant le bien-être, la créativité et le partage hors du cadre académique traditionnel.',
    objective:
      'To promote student well-being, creativity, exchange and personal development outside the traditional academic environment.',
    objectiveFr:
      'Promouvoir le bien-être des étudiants, la créativité, l’échange et l’épanouissement personnel en dehors du cadre académique traditionnel.',
    activities: [
      'Debate sessions',
      'Cultural hikes',
      'Art exhibitions',
      'Student startup exhibitions',
      'Sporting activities',
      'Cultural activities',
    ],
    activitiesFr: [
      'Sessions de débat',
      'Randonnées culturelles',
      'Expositions artistiques',
      'Expositions de startups étudiantes',
      'Activités sportives',
      'Activités et rencontres culturelles',
    ],
    skillsDeveloped: [
      'Debate, argumentation & critical reasoning',
      'Artistic expression & creative curation',
      'Team spirit, sportsmanship & athletic endurance',
      'Event coordination & cultural networking',
      'Entrepreneurial mindset & startup promotion',
    ],
    skillsDevelopedFr: [
      'Art du débat, argumentation et esprit critique',
      'Expression artistique et valorisation créative',
      'Esprit d’équipe, fair-play et cohésion sportive',
      'Coordination d’événements et rencontres culturelles',
      'Sens de l’initiative et valorisation de projets étudiants',
    ],
    presidentName: '[To be announced / À venir]',
    members: '[Information will be updated soon / Informations à venir]',
  },
  {
    id: 'media',
    name: 'Media Committee',
    nameFr: 'Comité Média',
    shortName: 'Media',
    icon: 'Camera',
    color: 'from-cyan-600 to-blue-700',
    badgeColor: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
    shortDescription:
      'Gives students the opportunity to express and develop their creative talents, contributing to the visual identity and communication of GaliPharm while gaining practical digital skills.',
    shortDescriptionFr:
      'Offre aux étudiants l’opportunité de développer et d’exprimer leurs talents créatifs, en contribuant à l’identité visuelle et à la communication de GaliPharm tout en acquérant des compétences numériques concrètes.',
    objective:
      'To allow students to contribute to the visual identity and communication of GaliPharm while developing practical creative skills.',
    objectiveFr:
      'Permettre aux étudiants de contribuer à l’identité visuelle et à la communication de GaliPharm tout en développant des compétences créatives pratiques.',
    activities: [
      'Photography',
      'Graphic design',
      'Video editing',
      'Visual content creation',
      'Media coverage',
      'Digital content',
    ],
    activitiesFr: [
      'Photographie',
      'Design graphique',
      'Montage vidéo',
      'Création de contenu visuel',
      'Couverture médiatique',
      'Contenu numérique',
    ],
    skillsDeveloped: [
      'Graphic design & brand identity mastery',
      'Photography & framing techniques',
      'Video editing & audiovisual storytelling',
      'Social media communication & content strategy',
      'Event media coverage & live reporting',
    ],
    skillsDevelopedFr: [
      'Design graphique et identité visuelle',
      'Techniques de photographie et cadrage',
      'Montage vidéo et storytelling audiovisuel',
      'Communication digitale et stratégie de contenu',
      'Couverture médiatique d’événements en direct',
    ],
    presidentName: '[To be announced / À venir]',
    members: '[Information will be updated soon / Informations à venir]',
  },
];

/**
 * 4 AREAS OF CONTRIBUTION FOR JOINING GALIPHARM
 */
export const JOIN_CONTRIBUTION_AREAS: JoinContributionArea[] = [
  {
    id: 'area-scientific',
    committeeId: 'scientific',
    title: 'Scientific & Clinical Training',
    titleFr: 'Domaine Scientifique & Formation',
    description:
      'Contribute to organizing conferences, scientific training sessions, congresses, and designing e-posters.',
    descriptionFr:
      'Participez à l’organisation de conférences, sessions de formation scientifique, congrès et conception d’e-posters.',
    icon: 'Microscope',
    highlights: [
      'Conferences & Congresses',
      'Scientific Days & Training',
      'E-posters & Soft Skills',
    ],
    highlightsFr: [
      'Conférences & Congrès',
      'Journées Scientifiques & Formations',
      'E-posters & Soft Skills',
    ],
  },
  {
    id: 'area-public-health',
    committeeId: 'public-health',
    title: 'Public Health & Community Impact',
    titleFr: 'Santé Publique & Impact Communautaire',
    description:
      'Engage in health awareness campaigns, charitable hikes, community outreach, and field outings.',
    descriptionFr:
      'Engagez-vous dans des campagnes de sensibilisation, randonnées caritatives, actions solidaires et sorties de terrain.',
    icon: 'HeartPulse',
    highlights: [
      'Awareness Campaigns',
      'Charitable Hikes & Actions',
      'Field Outings & Community Outreach',
    ],
    highlightsFr: [
      'Campagnes de Sensibilisation',
      'Randonnées & Actions Caritatives',
      'Sorties de Terrain & Proximité',
    ],
  },
  {
    id: 'area-cultural-sports',
    committeeId: 'cultural-sports',
    title: 'Cultural, Debate & Sports',
    titleFr: 'Culturel, Débats & Sports',
    description:
      'Organize debates, cultural hikes, student startup exhibitions, art showcases, and sporting events.',
    descriptionFr:
      'Organisez des débats, randonnées culturelles, expositions de startups étudiantes, événements artistiques et sportifs.',
    icon: 'Trophy',
    highlights: [
      'Debate Sessions & Culture',
      'Art & Startup Exhibitions',
      'Sporting Activities & Hikes',
    ],
    highlightsFr: [
      'Sessions de Débat & Culture',
      'Expositions d’Art & de Startups',
      'Activités Sportives & Randonnées',
    ],
  },
  {
    id: 'area-media',
    committeeId: 'media',
    title: 'Media, Graphic Design & Video',
    titleFr: 'Média, Design Graphique & Vidéo',
    description:
      'Express your creative talent in photography, video editing, graphic design, and media coverage.',
    descriptionFr:
      'Exprimez vos talents créatifs en photographie, montage vidéo, design graphique et couverture médiatique.',
    icon: 'Camera',
    highlights: [
      'Photography & Visual Content',
      'Graphic Design & Branding',
      'Video Editing & Media Coverage',
    ],
    highlightsFr: [
      'Photographie & Contenu Visuel',
      'Design Graphique & Branding',
      'Montage Vidéo & Couverture Média',
    ],
  },
];
