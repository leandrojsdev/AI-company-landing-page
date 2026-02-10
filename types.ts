export interface MetricData {
  year: string;
  value: number;
  label: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  stats: string;
}

export enum ChatSender {
  USER = 'user',
  BOT = 'bot',
}

export interface ChatMessage {
  id: string;
  sender: ChatSender;
  text: string;
  isThinking?: boolean;
}

export interface CompanyData {
  name: string;
  mission: string;
  founded: number;
  keyStats: {
    agentsDeployed: string;
    efficiencyIncrease: string;
    uptime: string;
  };
}