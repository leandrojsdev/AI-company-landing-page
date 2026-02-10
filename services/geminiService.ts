import { GROWTH_DATA, AGENT_DATA, TIMELINE_EVENTS, COMPANY_NAME } from '../constants';

const mockResponses = {
  revenue: [
    "Argentum Intelligence has demonstrated exceptional revenue growth, expanding from $12M in 2020 to $310M in 2024, representing a 25x increase over four years.",
    "Our revenue trajectory shows consistent year-over-year growth: $35M in 2021, $88M in 2022, $165M in 2023, reaching $310M in 2024.",
    "The company's financial performance has been remarkable, with revenue accelerating from $12M to $310M between 2020-2024, demonstrating strong market adoption."
  ],
  growth: [
    "We've experienced exponential growth across all metrics. Revenue grew 25x from 2020-2024, while our agent deployment expanded from 500 to over 120,000 active agents globally.",
    "Our growth trajectory has been exceptional, with revenue increasing from $12M to $310M and active agent deployment scaling from 500 to 120,000+ in just four years.",
    "Argentum Intelligence has achieved remarkable scaling, with revenue growing 25x and agent deployments expanding 240x since 2020."
  ],
  agents: [
    "We currently have over 120,000 active autonomous agents deployed globally across manufacturing and logistics sectors, making us the leading provider in Europe and North America.",
    "Our agent deployment has scaled significantly from 500 in 2020 to 120,000+ active agents today, demonstrating strong market penetration and customer adoption.",
    "With 120,000+ active agents deployed worldwide, Argentum Intelligence has established itself as the dominant force in autonomous industrial AI solutions."
  ],
  timeline: [
    "Founded in 2019 in Zurich by ex-CERN robotics engineers and deep learning specialists. We secured $85M Series A in 2021 and achieved market dominance by 2024.",
    "Our journey began in 2019 with $85M Series A funding in 2021. We surpassed 10,000 active nodes by 2022 and became the leading provider in Europe and North America by 2024.",
    "From our 2019 inception in Zurich to market leadership in 2024, we've scaled rapidly through strategic funding and technological breakthroughs in autonomous agents."
  ],
  technology: [
    "Our core technologies include Autonomous Deployment infrastructure with 99.999% uptime, Independent LLM-driven agents operating 24/7, and Industrial Robotics with <10ms latency.",
    "We specialize in three key areas: self-healing infrastructure that predicts outages, autonomous agents capable of complex reasoning, and next-gen hardware interfaces for physical action.",
    "Our technology stack encompasses autonomous infrastructure, independent AI agents, and industrial robotics systems, all designed for mission-critical operations."
  ],
  future: [
    "While we project continued strong growth, we cannot disclose specific forward-looking statements. Our focus remains on scaling our autonomous agent technology and expanding market leadership.",
    "We are positioned for continued expansion based on our strong technological foundation and market traction, but specific projections are subject to regulatory guidelines.",
    "Our roadmap focuses on advancing autonomous agent capabilities and geographic expansion, though we maintain our policy regarding specific forward-looking financial guidance."
  ],
  investment: [
    "For investment opportunities and detailed financial information, please contact our investor relations team directly. We're committed to transparent communication with our investment partners.",
    "We welcome qualified investor inquiries and provide comprehensive due diligence materials through our official investor relations channels.",
    "Investment inquiries should be directed to our IR team who can provide detailed information about our growth trajectory and market positioning."
  ],
  default: [
    "Thank you for your interest in Argentum Intelligence. We're the leading provider of autonomous AI agents for industrial applications, with over 120,000 agents deployed globally.",
    "Argentum Intelligence specializes in autonomous AI solutions, with revenue growing from $12M to $310M (2020-2024) and 120,000+ active agents deployed worldwide.",
    "As the market leader in autonomous industrial AI, we've achieved remarkable growth since our 2019 founding, now serving clients across Europe and North America."
  ]
};

const getResponseForQuery = (query: string): string => {
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes('revenue') || lowerQuery.includes('financial') || lowerQuery.includes('income') || lowerQuery.includes('$')) {
    return mockResponses.revenue[Math.floor(Math.random() * mockResponses.revenue.length)];
  }
  
  if (lowerQuery.includes('growth') || lowerQuery.includes('scale') || lowerQuery.includes('expansion')) {
    return mockResponses.growth[Math.floor(Math.random() * mockResponses.growth.length)];
  }
  
  if (lowerQuery.includes('agent') || lowerQuery.includes('deployment') || lowerQuery.includes('active')) {
    return mockResponses.agents[Math.floor(Math.random() * mockResponses.agents.length)];
  }
  
  if (lowerQuery.includes('timeline') || lowerQuery.includes('history') || lowerQuery.includes('founded') || lowerQuery.includes('zurich')) {
    return mockResponses.timeline[Math.floor(Math.random() * mockResponses.timeline.length)];
  }
  
  if (lowerQuery.includes('technology') || lowerQuery.includes('tech') || lowerQuery.includes('product') || lowerQuery.includes('solution')) {
    return mockResponses.technology[Math.floor(Math.random() * mockResponses.technology.length)];
  }
  
  if (lowerQuery.includes('future') || lowerQuery.includes('projection') || lowerQuery.includes('forecast') || lowerQuery.includes('next year')) {
    return mockResponses.future[Math.floor(Math.random() * mockResponses.future.length)];
  }
  
  if (lowerQuery.includes('invest') || lowerQuery.includes('funding') || lowerQuery.includes('ir') || lowerQuery.includes('due diligence')) {
    return mockResponses.investment[Math.floor(Math.random() * mockResponses.investment.length)];
  }
  
  return mockResponses.default[Math.floor(Math.random() * mockResponses.default.length)];
};

export const generateIRResponse = async (userQuery: string): Promise<string> => {
  const delay = Math.random() * 1000 + 500;
  
  await new Promise(resolve => setTimeout(resolve, delay));
  
  try {
    return getResponseForQuery(userQuery);
  } catch (error) {
    console.error("Mock Service Error:", error);
    return "We are experiencing high traffic on our investor channels. Please try again shortly.";
  }
};
