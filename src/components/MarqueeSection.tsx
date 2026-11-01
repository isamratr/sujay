import { useEffect, useRef, useState } from 'react';

const row1 = [
  'Co-Founder · Samroha',
  '₹3,00,000 raised',
  'Founder · Financial Football League',
  '300+ runners · Balamitra Run',
  'IB Diploma Programme',
  'Indus International School',
];
const row2 = [
  'English Olympiad',
  'Math Olympiad',
  'National Innovation Competition',
  'Harvard International Review',
  'AI for Business · UPenn',
  'Hyderabad, India',
];

const tileStyles = [
  { background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)', color: '#FFFFFF' },
  { background: 'transparent', color: '#D7E2EA', border: '2px solid #D7E2EA' },
  { background: '#18181B', color: '#BBCCD7' },
];

function Row({ items, transform }: { items: string[]; transform: string }) {
  return (
    <div className="flex gap-3 w-max" style={{ transform, willChange: 'transform' }}>
      {[...items, ...items, ...items].map((t, i) => (
        <div
          key={i}
          className="h-[110px] sm:h-[140px] md:h-[170px] px-8 sm:px-10 md:px-14 rounded-2xl flex items-center shrink-0 font-black uppercase tracking-tight whitespace-nowrap"
          style={{ ...tileStyles[i % tileStyles.length], fontSize: 'clamp(1.5rem, 3.5vw, 3.25rem)' }}
        >
          {t}
        </div>
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const sectionTop = ref.current.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section ref={ref} className="flex flex-col gap-3 pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden" style={{ background: '#0C0C0C' }}>
      <Row items={row1} transform={`translateX(${offset - 200}px)`} />
      <Row items={row2} transform={`translateX(${-(offset - 200)}px)`} />
    </section>
  );
}
