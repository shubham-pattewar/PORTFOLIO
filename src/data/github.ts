import type { GithubRepo } from '../types';

export const GITHUB_CONFIG = {
  username: import.meta.env.VITE_GITHUB_USERNAME || 'shubham-pattewar',
  profileUrl: 'https://github.com/shubham-pattewar',
  totalContributionsEstimate: 428,
  totalStars: 14,
  totalRepos: 18,
};

export const fallbackRepositories: GithubRepo[] = [
  {
    name: 'road-damage-detection',
    description: 'Autonomous road distress & pothole severity classification using PyTorch & OpenCV with FastAPI inference pipeline.',
    language: 'Python',
    stars: 6,
    url: 'https://github.com/shubhampattewar/road-damage-detection',
    updatedAt: '2025-02',
  },
  {
    name: 'food-safe',
    description: 'Full-stack food safety audit and allergen inspection platform with barcode parsing and compliance tracking.',
    language: 'TypeScript',
    stars: 4,
    url: 'https://github.com/shubhampattewar/food-safe',
    updatedAt: '2025-01',
  },
  {
    name: 'orchestrix',
    description: 'Autonomous multi-agent orchestration runtime with DAG workflow scheduling, error reflection, and sandboxed tool execution.',
    language: 'Python',
    stars: 3,
    url: 'https://github.com/shubhampattewar/orchestrix',
    updatedAt: '2024-12',
  },
  {
    name: 'monastery360',
    description: 'Interactive 3D digital heritage portal for historic cultural site exploration using WebGL and spatial annotations.',
    language: 'TypeScript',
    stars: 2,
    url: 'https://github.com/shubhampattewar/monastery360',
    updatedAt: '2024-11',
  },
];

// Helper to generate simulated contribution grid pattern (52 weeks x 7 days)
export const generateSimulatedContributions = () => {
  const weeks = 52;
  const daysPerWeek = 7;
  const grid: number[][] = [];
  
  // Seeded random-like pattern to ensure stable realistic distribution
  for (let w = 0; w < weeks; w++) {
    const weekDays: number[] = [];
    for (let d = 0; d < daysPerWeek; d++) {
      // Deterministic pseudo-pattern with active clusters
      const seed = (w * 7 + d * 13) % 100;
      let level = 0;
      if (seed > 88) level = 4;
      else if (seed > 70) level = 3;
      else if (seed > 50) level = 2;
      else if (seed > 30) level = 1;
      weekDays.push(level);
    }
    grid.push(weekDays);
  }
  return grid;
};
