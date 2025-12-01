export interface Vitamin {
  id: string;
  name: string;
  chemicalName: string;
  category: 'Liposoluble' | 'Hydrosoluble';
  functions: string[];
  rda: {
    male: string;
    female: string;
    children: string;
  };
  sources: {
    food: string;
    density: 'High' | 'Medium' | 'Low';
  }[];
  deficiencySymptoms: string[];
  toxicity?: string;
  description: string;
  color: string;
}

export interface UserProfile {
  diet: 'omnivore' | 'vegetarian' | 'vegan';
  sunExposure: number; // 0 to 10
  energyLevel: number; // 0 to 10
  stressLevel: number; // 0 to 10
  sleepQuality: number; // 0 to 10
  fruitVegIntake: number; // 0 to 10
}

export interface AnalysisResult {
  vitaminId: string;
  score: number; // 0 to 100 (100 is optimal)
  reason: string;
}

export enum AppView {
  HOME = 'HOME',
  EXPLORE = 'EXPLORE',
  ANALYZER = 'ANALYZER',
  TUTOR = 'TUTOR',
  VITAMIN_DETAIL = 'VITAMIN_DETAIL'
}
