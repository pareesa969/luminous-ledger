export type Screen = 'landing' | 'start' | 'dashboard' | 'scenario' | 'analytics' | 'history' | 'portfolio' | 'settings';

export interface Scenario {
  id: number;
  title: string;
  description: string;
  icon: string;
  options: ScenarioOption[];
}

export interface ScenarioOption {
  label: string;
  description: string;
  behavior: 'saver' | 'risk-taker' | 'investor' | 'spender';
  impact: {
    savings?: number;
    debt?: number;
    investments?: number;
    score?: number;
  };
  recommended?: boolean;
}

export interface GameState {
  playerName: string;
  email: string;
  savings: number;
  debt: number;
  investments: number;
  score: number;
  currentScenarioIndex: number;
  history: {
    name: string;
    savings: number;
    investments: number;
    debt: number;
    score: number;
    scenarioTitle: string;
    choiceLabel: string;
  }[];
  behaviorCounts: {
    saver: number;
    'risk-taker': number;
    investor: number;
    spender: number;
  };
}
