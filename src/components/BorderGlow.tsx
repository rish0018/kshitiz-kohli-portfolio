import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './BorderGlow.module.css';

interface BorderGlowProps {
  title: string;
  description: string;
  index?: number;
}

export default function BorderGlow({ title, description, index = 0 }: BorderGlowProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, delay: index * 0.1, ease: 'power2.out',
        scrollTrigger: ref.current });
  }, [index]);

  return (
    <div ref={ref} className={styles.card}>
      <div className={styles.glowBorder} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
