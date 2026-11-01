import { motion } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';

type Tag = keyof JSX.IntrinsicElements;

// motion.create must not run on every render, so cache one component per tag
const cache = new Map<Tag, typeof motion.div>();
const getMotion = (tag: Tag) => {
  if (!cache.has(tag)) cache.set(tag, motion.create(tag) as typeof motion.div);
  return cache.get(tag)!;
};

type Props = {
  children?: ReactNode;
  as?: Tag;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
};

export default function FadeIn({ children, as = 'div', delay = 0, duration = 0.7, x = 0, y = 30, className, style }: Props) {
  const M = getMotion(as);
  return (
    <M
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </M>
  );
}
