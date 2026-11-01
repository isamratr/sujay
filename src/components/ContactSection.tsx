import { ArrowUpRight, Linkedin } from 'lucide-react';
import FadeIn from './FadeIn';

export default function ContactSection() {
  return (
    <section id="contact" className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 px-5 sm:px-8 md:px-10 pt-10 pb-12 sm:pb-16">
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading font-black uppercase leading-none tracking-tight text-center"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Let&apos;s connect
      </FadeIn>
      <FadeIn
        as="p"
        delay={0.15}
        className="text-[#D7E2EA] font-light text-center leading-relaxed max-w-[520px]"
        style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
      >
        Working on something in social impact, finance or education? I&apos;d love to hear about it.
      </FadeIn>
      <FadeIn delay={0.3}>
        <a
          href="https://www.linkedin.com/in/sujay-reddy-surukunti/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest"
          style={{
            background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
            boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
            outline: '2px solid white',
            outlineOffset: '-3px',
          }}
        >
          <Linkedin size={18} />
          Message on LinkedIn
          <ArrowUpRight size={18} />
        </a>
      </FadeIn>
      <p className="text-[#D7E2EA]/40 font-light uppercase tracking-widest text-[10px] sm:text-xs text-center mt-10">
        © 2026 Sujay Reddy Surukunti · Hyderabad, India
      </p>
    </section>
  );
}
