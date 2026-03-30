import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './Expertise.module.css';
import g from '../styles/global.module.css';


const expertiseAreas = [
  { title: 'Workforce Management', description: 'End-to-end WFM strategy including scheduling, real-time adherence, and long-range planning across global operations.', num: '01' },
  { title: 'Forecasting & Capacity Planning', description: 'Building predictive models and frameworks that align staffing with demand across diverse markets and channels.', num: '02' },
  { title: 'Strategy & Operating Models', description: 'Designing scalable operating models that drive efficiency, reduce costs, and improve service delivery outcomes.', num: '03' },
  { title: 'Global Command Centers', description: 'Establishing 24/7 command centers with real-time monitoring, incident management, and cross-regional coordination.', num: '04' },
  { title: 'Change Management', description: 'Leading organizational transformation initiatives with structured communication, stakeholder alignment, and measurable adoption.', num: '05' },
  { title: 'Talent Leadership', description: 'Building, mentoring, and scaling high-performance teams across geographies with a focus on culture and development.', num: '06' },
];

export default function Expertise() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current.querySelectorAll('[data-anim]'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.06, duration: 0.5, ease: 'power3.out' });
  }, []);

  return (
    <div className={g.pageContainer}>
      <div className={g.gradientBg} />
      <div ref={ref} className={g.section}>
        <span className={styles.label} data-anim>Domain</span>
        <h1 className={styles.heading} data-anim>Areas of Expertise</h1>
        <div className={styles.list}>
          {expertiseAreas.map((area, i) => (
            <div
              key={i}
              className={`${styles.item} ${activeIndex === i ? styles.itemActive : ''}`}
              data-anim
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className={styles.itemHeader}>
                <span className={styles.num}>{area.num}</span>
                <h3 className={styles.itemTitle}>{area.title}</h3>
                <div className={styles.expandIcon}>
                  <span className={styles.expandLine} />
                  <span className={`${styles.expandLine} ${styles.expandLineV}`} />
                </div>
              </div>
              <div className={styles.itemBody}>
                <p className={styles.itemDesc}>{area.description}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
