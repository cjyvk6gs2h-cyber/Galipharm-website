export type Language = 'en' | 'fr';

export type Theme = 'dark' | 'light';

export interface SocialLinks {
  instagram: string;
  facebook: string;
  linkedin: string;
  email: string;
}

export interface ClubInfo {
  name: 'GaliPharm';
  fullName: string;
  establishedYear?: number;
  tagline: string; // “Let’s make pharmacy great again.”
  philosophyStatement: string; // “One step for the student, a big leap for the pharmacy.”
  philosophyStatementFr: string; // « Un pas pour l'étudiant, un grand pas pour la pharmacie. »
  heroSubtitle: string;
  heroSubtitleFr: string;
  officialDescriptionFr: string;
  officialDescriptionEn: string;
  facultyName: string;
  universityName: string;
  location: string;
  socialLinks: SocialLinks;
}

export interface PurposePillar {
  id: string;
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
  icon: string;
}

export interface Committee {
  id: 'scientific' | 'public-health' | 'cultural-sports' | 'media';
  name: string;
  nameFr: string;
  shortName: string;
  icon: string;
  color: string;
  badgeColor: string;
  shortDescription: string;
  shortDescriptionFr: string;
  objective: string;
  objectiveFr: string;
  activities: string[];
  activitiesFr: string[];
  skillsDeveloped: string[];
  skillsDevelopedFr: string[];
  presidentName: string; // Placeholder until provided
  members: string; // Placeholder until provided
}

export interface JoinContributionArea {
  id: string;
  committeeId: 'scientific' | 'public-health' | 'cultural-sports' | 'media';
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
  icon: string;
  highlights: string[];
  highlightsFr: string[];
}
