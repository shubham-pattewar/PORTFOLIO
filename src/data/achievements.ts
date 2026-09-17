import type { Achievement } from '../types';

export const achievements: Achievement[] = [
  {
    id: 'shantadevi-scholarship',
    year: '2024 — 2025',
    title: 'SOU. SHANTADEVI D. PATIL MERIT SCHOLARSHIP',
    organization: 'D. Y. Patil College of Engineering & Technology (DYPCET)',
    category: 'ACADEMIC',
    context: 'Awarded the prestigious merit scholarship with a full fee waiver for securing the highest academic rank across the entire Computer Science & Engineering department.',
    badge: 'DEPARTMENT TOPPER / MERIT AWARD',
    accent: '#FFD83D',
    photos: [
      // Add photos here (supports 1, 2, 3 or more photos per achievement):
      // { url: '/achievements/scholarship-ceremony.jpg', caption: 'Merit Scholarship Felicitation' },
      // { url: '/achievements/scholarship-certificate.jpg', caption: 'Official Rank 1 Merit Certificate' },
    ],
  },
  {
    id: 'sih-national-2024',
    year: '2024',
    title: 'SMART INDIA HACKATHON (SIH)',
    organization: 'Ministry of Education & AICTE, Govt. of India',
    category: 'HACKATHONS',
    context: 'Selected through institutional internal elimination rounds to represent team #TechTitans at the national-level innovation hackathon addressing real-world public governance problems.',
    badge: 'NATIONAL PARTICIPATION',
    accent: '#B7F34A',
    photos: [
      // { url: '/achievements/sih2024-team.jpg', caption: 'Team #TechTitans at SIH 2024' },
      // { url: '/achievements/sih2024-presentation.jpg', caption: 'Prototype Presentation & Defense' },
    ],
  },
  {
    id: 'sih-national-2023',
    year: '2023',
    title: 'SMART INDIA HACKATHON (SIH)',
    organization: 'Ministry of Education & AICTE, Govt. of India',
    category: 'HACKATHONS',
    context: 'Built and pitched rapid prototype engineering solutions for national civic technology problem statements under high-intensity sprint conditions.',
    badge: 'NATIONAL PARTICIPATION',
    accent: '#A855F7',
    photos: [
      // { url: '/achievements/sih2023-prototype.jpg', caption: 'SIH 2023 Prototype Build Session' },
    ],
  },
  {
    id: 'nptel-elite',
    year: '2024',
    title: 'NPTEL ELITE CERTIFICATION — DBMS',
    organization: 'IIT Kharagpur / Ministry of Education, NPTEL',
    category: 'CERTIFICATIONS',
    context: 'Achieved Elite certification status in Database Management Systems covering relational algebra, normalization, query optimization, indexing, and transaction management.',
    badge: 'ELITE CADRE',
    accent: '#FF6B9D',
    photos: [
      // { url: '/achievements/nptel-dbms-cert.jpg', caption: 'IIT Kharagpur NPTEL Elite Certificate' },
    ],
  },
  {
    id: 'coding-competition-lead',
    year: '2024',
    title: 'COLLEGIATE CODING & HACKATHON EXCELLENCE',
    organization: 'Department of Computer Science & Engineering',
    category: 'COMPETITIONS',
    context: 'Spearheaded collegiate competitive coding teams in regional algorithm challenges, algorithmic problem solving sprints, and technical prototype showdowns.',
    badge: 'COMPETITIVE HONORS',
    accent: '#38BDF8',
    photos: [
      // { url: '/achievements/hackathon-showcase.jpg', caption: 'Technical Showcase & Certificate' },
    ],
  },
];
