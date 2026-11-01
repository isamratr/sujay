import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from './FadeIn';

const gradient = 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)';

const ventures = [
  {
    name: 'Samroha',
    category: 'Social Impact',
    period: '2022 – Present',
    stats: [
      { value: '₹3L', label: 'raised for education and medical aid' },
      { value: 'Weekends', label: 'teaching sessions run by student volunteers' },
    ],
    story:
      'Co-founded to support impoverished villages in rural Telangana. Student volunteers teach tribal children on weekends, while fundraising drives bring medical aid and economic opportunity to the communities around them.',
    tags: ['Leadership', 'Fundraising', 'Education'],
  },
  {
    name: 'Financial Football League',
    category: 'Financial Literacy',
    period: '2024 – Present',
    stats: [
      { value: 'Play', label: 'football as the hook for money lessons' },
      { value: '2', label: 'core skills taught: budgeting and investing' },
    ],
    story:
      'Founded at school to make personal finance stick. Students manage budgets and investment decisions through gamified, football-themed models instead of textbook exercises.',
    tags: ['Entrepreneurship', 'Gamification', 'Finance'],
  },
  {
    name: 'Balamitra Run',
    category: 'Community',
    period: '2024 – Present',
    stats: [
      { value: '300+', label: 'participants on race day' },
      { value: '1', label: 'team coordinated from plan to finish line' },
    ],
    story:
      'Coordinated a community run end to end, from planning and volunteer roles to running the event for more than three hundred participants.',
    tags: ['Event Organization', 'Team Leadership'],
  },
];

const radius = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

function Card({ v, index, progress }: { v: (typeof ventures)[number]; index: number; progress: MotionValue<number> }) {
  const targetScale = 1 - (ventures.length - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / ventures.length, 1], [1, targetScale]);

  return (
    <div className="h-[85vh] sticky top-24 md:top-32">
      <motion.div
        className={`relative origin-top border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 flex flex-col gap-6 md:gap-8 ${radius}`}
        style={{ scale, top: `${index * 28}px`, background: '#0C0C0C' }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 text-[#D7E2EA]">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span className="font-black leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-1">
              <span className="font-light uppercase tracking-widest opacity-60 text-xs sm:text-sm md:text-base">{v.category}</span>
              <h3 className="font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                {v.name}
              </h3>
            </div>
          </div>
          <span className="rounded-full border-2 border-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base">
            {v.period}
          </span>
        </div>

        <div className="flex gap-3 sm:gap-4">
          <div className="w-[40%] flex flex-col gap-3 sm:gap-4">
            {v.stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col justify-end p-5 sm:p-8 md:p-10 ${radius}`}
                style={{
                  height: i === 0 ? 'clamp(130px, 16vw, 230px)' : 'clamp(160px, 22vw, 340px)',
                  background: i === 0 ? gradient : '#18181B',
                  color: i === 0 ? '#FFFFFF' : '#D7E2EA',
                }}
              >
                <span className="font-black leading-none" style={{ fontSize: 'clamp(1.75rem, 5vw, 4.5rem)' }}>
                  {s.value}
                </span>
                <span className="font-light uppercase tracking-wide mt-2 text-[10px] sm:text-xs md:text-sm opacity-80">{s.label}</span>
              </div>
            ))}
          </div>
          <div className={`w-[60%] flex flex-col justify-between gap-6 p-6 sm:p-10 md:p-12 border-2 border-[#D7E2EA]/20 ${radius}`}>
            <p className="text-[#D7E2EA] font-light leading-relaxed" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.35rem)' }}>
              {v.story}
            </p>
            <div className="flex flex-wrap gap-2">
              {v.tags.map((t) => (
                <span key={t} className="rounded-full bg-[#D7E2EA]/10 text-[#D7E2EA] uppercase tracking-wider px-3 py-1.5 text-[10px] sm:text-xs">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ImpactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  return (
    <section
      id="impact"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Impact
      </FadeIn>
      <div ref={ref} className="max-w-6xl mx-auto">
        {ventures.map((v, i) => (
          <Card key={v.name} v={v} index={i} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
