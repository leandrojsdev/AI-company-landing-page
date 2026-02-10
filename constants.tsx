import { ChartLine, Box, Cpu, ShieldCheck, Globe, Zap } from 'lucide-react';
import { Product, TimelineEvent } from './types';

export const COMPANY_NAME = "Argentum Intelligence";

export const NAVIGATION_LINKS = [
  { name: 'Vision', href: '#vision' },
  { name: 'Trajectory', href: '#trajectory' },
  { name: 'Impact', href: '#impact' },
  { name: 'Technology', href: '#products' },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '2019',
    title: 'Inception',
    description: 'Founded in Zurich by a coalition of ex-CERN robotics engineers and deep learning specialists.',
  },
  {
    year: '2021',
    title: 'Series A Funding',
    description: 'Secured $85M to scale the "Argent Core" autonomous agent framework.',
  },
  {
    year: '2022',
    title: 'Global Deployment',
    description: 'Surpassed 10,000 active autonomous nodes in manufacturing and logistics sectors.',
  },
  {
    year: '2024',
    title: 'Market Dominance',
    description: 'Recognized as the leading provider of unassisted industrial AI agents in Europe and North America.',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    title: 'Autonomous Deployment',
    description: 'Self-healing infrastructure code that predicts outages before they occur.',
    icon: CloudUploadIcon,
    stats: '99.999% Uptime',
  },
  {
    id: 'p2',
    title: 'Independent Agents',
    description: 'LLM-driven workers capable of complex reasoning and tool use without supervision.',
    icon: Cpu,
    stats: '24/7 Operation',
  },
  {
    id: 'p3',
    title: 'Industrial Robotics',
    description: 'Next-gen hardware interfaces bridging the gap between digital intelligence and physical action.',
    icon: Box,
    stats: '< 10ms Latency',
  },
];

// Helper wrapper for Lucide icon
function CloudUploadIcon(props: any) {
  return <Zap {...props} />;
}

export const GROWTH_DATA = [
  { year: '2020', value: 12, label: 'Revenue ($M)' },
  { year: '2021', value: 35, label: 'Revenue ($M)' },
  { year: '2022', value: 88, label: 'Revenue ($M)' },
  { year: '2023', value: 165, label: 'Revenue ($M)' },
  { year: '2024', value: 310, label: 'Revenue ($M)' },
];

export const AGENT_DATA = [
  { year: '2020', value: 500, label: 'Active Agents' },
  { year: '2021', value: 2500, label: 'Active Agents' },
  { year: '2022', value: 12000, label: 'Active Agents' },
  { year: '2023', value: 45000, label: 'Active Agents' },
  { year: '2024', value: 120000, label: 'Active Agents' },
];

export const SYSTEM_PROMPT = `
You are the Investor Relations AI Assistant for Argentum Intelligence.
Your goal is to answer questions from potential investors professionally, concisely, and persuasively.

Company Context:
- Name: Argentum Intelligence
- Founded: 2019 in Zurich.
- Focus: Autonomous AI agents, Self-healing infrastructure, Industrial Robotics.
- Financials: Exponential revenue growth from $12M in 2020 to $310M in 2024.
- Impact: Over 120,000 active agents deployed globally.
- Values: Precision, Autonomy, Elegance.

Tone: Sophisticated, confident, data-driven.
Do not make up false financial data not provided here. If asked about future projections, say we project continued strong growth but cannot disclose specific forward-looking statements.
`;
