import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Achievements.module.css';
import g from '../styles/global.module.css';


const achievements = [
  { title: 'Customer Excellence Award', org: 'American Express', description: 'Recognized for delivering exceptional customer service metrics and operational excellence.' },
  { title: 'Hercules Award', org: 'Leadership', description: 'Awarded for outstanding leadership and going above and beyond in driving business outcomes.' },
  { title: 'Global Command Center', org: 'Uber', description: 'Built from scratch — a 24/7 operation spanning 3 continents with real-time incident response.' },
  { title: '$4M+ Annual Savings', org: 'APAC Operations', description: 'Drove operational efficiency improvements across APAC resulting in significant cost savings.' },
  { title: 'Team Builder', org: 'Multi-org', description: 'Built and scaled high-performance teams of 200+ across multiple geographies.' },
  { title: 'Leadership Recognition', org: 'Global', description: 'Consistently recognized for strategic thinking and cross-functional delivery.' },
];

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const cards = ref.current.querySelectorAll('[data-anim]');
    gsap.fromTo(cards,
      { y: 40, opacity: 0, scale: 0.96 },
      { y: 0, opacity: 1, scale: 1, stagger: 0.08, duration: 0.6, ease: 'back.out(1.2)' });
  }, []);

  return (
    <div className={g.pageContainer}>
      <div className={g.gradientBg} />
      <div ref={ref} className={g.section}>
        <span className={styles.label} data-anim>Recognition</span>
        <h1 className={styles.heading} data-anim>Achievements</h1>
        <div className={styles.grid}>
          {achievements.map((a, i) => (
            <div key={i} className={styles.card} data-anim>
              <div className={styles.cardHeader}>
                <div className={styles.indicator} />
                <span className={styles.org}>{a.org}</span>
              </div>
              <h3 className={styles.cardTitle}>{a.title}</h3>
              <p className={styles.cardDesc}>{a.description}</p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
