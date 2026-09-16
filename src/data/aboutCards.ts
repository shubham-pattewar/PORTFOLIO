import type { ConceptCard } from '../types';

export const aboutStatement = "I’m interested in technology when it can turn an idea, problem, or opportunity into something useful.";

export const conceptCards: ConceptCard[] = [
  {
    id: 'curious',
    number: '01',
    title: 'CURIOUS BY DEFAULT',
    explanation: 'I dissect how things work under the hood—from network sockets and execution graphs to rendering pipelines—rather than treating frameworks as magic black boxes.',
    rotation: '-1.5deg',
    accent: '#FFD83D',
    colSpan: 'col-span-12 md:col-span-7',
  },
  {
    id: 'build-break-improve',
    number: '02',
    title: 'BUILD → BREAK → IMPROVE',
    explanation: 'Fast feedback loops beat endless theory. I prototype quickly, stress-test edge cases until the code fails, analyze bottlenecks, and engineer robust solutions.',
    rotation: '1.2deg',
    accent: '#B7F34A',
    colSpan: 'col-span-12 md:col-span-5',
  },
  {
    id: 'ui-to-systems',
    number: '03',
    title: 'FROM UI TO SYSTEMS',
    explanation: 'A clean interface is useless without a reliable engine. I care equally about tactile frontend interactions and the resilient API services, schemas, and pipelines powering them.',
    rotation: '-0.8deg',
    accent: '#A855F7',
    colSpan: 'col-span-12 md:col-span-6',
  },
  {
    id: 'problem-solver',
    number: '04',
    title: 'PROBLEM SOLVER',
    explanation: 'I don’t write code for vanity. Every architecture choice, algorithm, and data model must directly answer a concrete constraint or unblock a real operational challenge.',
    rotation: '1.5deg',
    accent: '#FF6B9D',
    colSpan: 'col-span-12 md:col-span-6',
  },
  {
    id: 'beyond-screen',
    number: '05',
    title: 'BEYOND THE SCREEN',
    explanation: 'Engineering happens in the real world. Hackathons, technical summits, community events, and cross-disciplinary collaborations sharpen perspective and ignite genuine innovation.',
    rotation: '-1.2deg',
    accent: '#FFD83D',
    colSpan: 'col-span-12 md:col-span-12',
  },
];
