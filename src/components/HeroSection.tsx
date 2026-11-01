import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';

const links = ['About', 'Experience', 'Impact', 'Contact'];

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col" style={{ overflowX: 'clip' }}>
      <FadeIn as="nav" delay={0} y={-20} className="flex justify-between px-6 md:px-10 pt-6 md:pt-8">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            {l}
          </a>
        ))}
      </FadeIn>

      {/* above the portrait: its solid backdrop would hide letters when the magnet pulls it up */}
      <div className="relative z-20 overflow-hidden">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[12.5vw] sm:text-[13vw] md:text-[14vw] lg:text-[15vw] mt-6 sm:mt-4 md:-mt-5"
        >
          Hi, i&apos;m sujay
        </FadeIn>
      </div>

      <div className="mt-auto flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="relative z-20 text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          an ib student building ventures that blend innovation, service and learning
        </FadeIn>
        <FadeIn delay={0.5} y={20} className="relative z-20">
          <ContactButton />
        </FadeIn>
      </div>

      {/* positioning lives on a plain div: FadeIn's transform would override Tailwind's translate */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[220px] sm:w-[300px] md:w-[360px] lg:w-[420px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
            {/* photo on black, lifted to the page colour in sujay.webp; the soft bottom fade hides the crop line */}
            <img
              src="/sujay.webp"
              alt="Sujay Reddy Surukunti"
              className="w-full h-auto block"
              style={{
                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
              }}
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
