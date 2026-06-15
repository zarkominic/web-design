import { useRef, type CSSProperties } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

interface CharProps {
  char: string;
  range: [number, number];
  progress: MotionValue<number>;
}

/** A single character: invisible placeholder (reserves space) + animated overlay. */
function Char({ char, range, progress }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const content = char === ' ' ? ' ' : char;
  return (
    <span className="relative inline-block">
      <span className="opacity-0">{content}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {content}
      </motion.span>
    </span>
  );
}

/**
 * Character-by-character scroll reveal: each character fades from 0.2 -> 1
 * opacity based on its position relative to scroll progress through the block.
 */
export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => {
        const start = i / chars.length;
        const end = start + 1 / chars.length;
        return <Char key={i} char={char} range={[start, end]} progress={scrollYProgress} />;
      })}
    </p>
  );
}
