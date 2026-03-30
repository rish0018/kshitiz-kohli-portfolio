import { useState, useEffect, useRef, ReactNode } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'motion/react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  direction?: 'horizontal' | 'vertical' | 'diagonal';
  pauseOnHover?: boolean;
  yoyo?: boolean;
}

export default function GradientText({
  children,
  className = '',
  colors = ['#5227FF', '#FF9FFC', '#B19EEF'],
  animationSpeed = 8,
  showBorder = false,
  direction = 'horizontal',
  pauseOnHover = false,
  yoyo = true,
}: GradientTextProps) {
  const [isPaused, setIsPaused] = useState(false);
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const animationDuration = animationSpeed * 1000;

  useAnimationFrame((time) => {
    if (isPaused) {
      lastTimeRef.current = null;
      return;
    }
    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
      return;
    }
    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;
    elapsedRef.current += deltaTime;

    if (yoyo) {
      const fullCycle = animationDuration * 2;
      const cycleTime = elapsedRef.current % fullCycle;
      if (cycleTime < animationDuration) {
        progress.set((cycleTime / animationDuration) * 100);
      } else {
        progress.set(100 - ((cycleTime - animationDuration) / animationDuration) * 100);
      }
    } else {
      progress.set((elapsedRef.current / animationDuration) * 100);
    }
  });

  useEffect(() => {
    elapsedRef.current = 0;
    progress.set(0);
  }, [animationSpeed, yoyo]);

  const backgroundPosition = useTransform(progress, (p) => {
    if (direction === 'horizontal') return `${p}% 50%`;
    if (direction === 'vertical') return `50% ${p}%`;
    return `${p}% 50%`;
  });

  const gradientAngle =
    direction === 'horizontal' ? 'to right' : direction === 'vertical' ? 'to bottom' : 'to bottom right';
  const gradientColors = [...colors, colors[0]].join(', ');

  const gradientStyle = {
    backgroundImage: `linear-gradient(${gradientAngle}, ${gradientColors})`,
    backgroundSize: direction === 'horizontal' ? '300% 100%' : direction === 'vertical' ? '100% 300%' : '300% 300%',
    backgroundRepeat: 'repeat' as const,
  };

  return (
    <motion.div
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', position: 'relative', overflow: 'hidden', ...(showBorder ? { padding: '4px 8px', borderRadius: '1.25rem' } : {}) }}
      className={className}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {showBorder && (
        <motion.div
          style={{
            position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', borderRadius: '1.25rem',
            ...gradientStyle, backgroundPosition,
          }}
        >
          <div
            style={{
              position: 'absolute', background: '#050505', borderRadius: '1.25rem', zIndex: -1,
              width: 'calc(100% - 2px)', height: 'calc(100% - 2px)',
              left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
            }}
          />
        </motion.div>
      )}
      <motion.div
        style={{
          display: 'inline-block', position: 'relative', zIndex: 2,
          color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text',
          ...gradientStyle, backgroundPosition,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
