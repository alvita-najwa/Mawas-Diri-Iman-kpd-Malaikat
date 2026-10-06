export type ScreenNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19;

export interface LearningObjective {
  id: number;
  numberText: string;
  statement: string;
  details: string;
}

export interface AngelPair {
  id: number;
  pairName: string;
  angel1: {
    name: string;
    arabicName: string;
    title: string;
    duty: string;
    explanation: string;
    symbol: string;
  };
  angel2: {
    name: string;
    arabicName: string;
    title: string;
    duty: string;
    explanation: string;
    symbol: string;
  };
  screenTarget: ScreenNumber;
  pairConcept: string;
}

export interface PillarOfFaith {
  number: number;
  title: string;
  arabic: string;
  description: string;
  isFocus: boolean;
}

export interface AngelCharacteristic {
  id: number;
  title: string;
  description: string;
  detail: string;
  iconName: string;
}

export interface EverydayBehavior {
  id: number;
  title: string;
  scenario: string;
  angelConnection: string;
  reflection: string;
  category: 'Kejujuran' | 'Lisan' | 'Amanah' | 'Tanggung Jawab' | 'Mawas Diri';
}

export interface LkpdQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  objectiveReference: string;
}
