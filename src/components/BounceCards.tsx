import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './BounceCards.module.css';

interface Achievement {
  title: string;
  description: string;
  icon: string;
}

interface BounceCardsProps {
  achievements: Achievement[];
}

export default function BounceCards({ achievements }: BounceCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll(`.${styles.card}`);
    cards.forEach((card, i) => {
      gsap.fromTo(card,
        { y: 40, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, delay: i * 0.15, ease: 'back.out(1.4)' });
    });
  }, []);

  return (
    <div ref={containerRef} className={styles.grid}>
      {achievements.map((a, i) => (
        <div key={i} className={styles.card}>
          <div className={styles.icon}>{a.icon}</div>
          <h3 className={styles.title}>{a.title}</h3>
          <p className={styles.description}>{a.description}</p>
        </div>
      ))}
    </div>
  );
}
