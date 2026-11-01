import FadeIn from './FadeIn';

const roles = [
  {
    role: 'Co-Founder',
    org: 'Samroha Organisation · 2022 – Present',
    desc: 'Mobilized student volunteers to teach tribal children in rural Telangana, ran school campaigns to recruit peers for weekend sessions, and raised ₹3,00,000 for education and medical support.',
  },
  {
    role: 'Founder',
    org: 'Financial Football League · 2024 – Present',
    desc: 'Designed an initiative that promotes financial literacy through sport, teaching students budgeting and investing with gamified models.',
  },
  {
    role: 'Coordinator',
    org: 'Balamitra Run · 2024 – Present',
    desc: 'Organized a community run for 300+ participants, leading the team behind planning and on-day execution.',
  },
  {
    role: 'Intern',
    org: 'Volta (Taxi Service Company)',
    desc: 'Spent two months inside a mobility business, gaining first-hand insight into how its business model works.',
  },
  {
    role: 'Learner',
    org: 'AI for Business · University of Pennsylvania',
    desc: 'Pursuing the AI for Business specialization to understand how AI drives modern strategic decisions.',
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn
        as="h2"
        y={40}
        className="font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Experience
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {roles.map((r, i) => (
          <FadeIn
            key={r.org}
            delay={i * 0.1}
            className="flex items-center gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
            style={{ color: '#0C0C0C', borderBottom: i < roles.length - 1 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined }}
          >
            <span className="font-black leading-none shrink-0" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-2 sm:gap-3">
              <h3 className="font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                {r.role}
              </h3>
              <span className="font-medium uppercase tracking-wider text-xs sm:text-sm" style={{ color: '#7621B0' }}>
                {r.org}
              </span>
              <p className="font-light leading-relaxed max-w-2xl" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}>
                {r.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
