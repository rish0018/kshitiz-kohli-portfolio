import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './About.module.css';
import g from '../styles/global.module.css';

const strengths = [
  'Global workforce strategy & planning',
  'Building & scaling command centers',
  'Data-driven decision making',
  'Cross-functional stakeholder management',
  'Organizational transformation',
  'P&L ownership & operational efficiency',
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const items = ref.current.querySelectorAll('[data-anim]');
    items.forEach((item, i) => {
      gsap.fromTo(item,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, delay: i * 0.1, ease: 'power3.out' });
    });
    // Animate strength items with stagger
    const strengthItems = ref.current.querySelectorAll('[data-strength]');
    gsap.fromTo(strengthItems,
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.06, duration: 0.5, delay: 0.5, ease: 'power2.out' });
  }, []);

  return (
    <div className={g.pageContainer}>
      <div className={g.gradientBg} />
      <div ref={ref} className={g.section}>
        <span className={styles.label} data-anim>About</span>
        <h1 className={styles.heading} data-anim>
          A seasoned operations leader with 17+ years shaping workforce strategy across global enterprises.
        </h1>

        <div className={styles.columns}>
          <div className={styles.col} data-anim>
            <h2 className={styles.colTitle}>Overview</h2>
            <p className={styles.colText}>
              Kshitiz Kohli is a strategic workforce leader currently serving as Regional Head of Workforce Management for APAC at Uber. With deep expertise in building command centers, forecasting frameworks, and operational models, he has consistently delivered measurable impact across Uber, HSBC, American Express, and other global organizations.
            </p>
          </div>
          <div className={styles.col} data-anim>
            <h2 className={styles.colTitle}>Leadership Philosophy</h2>
            <p className={styles.colText}>
              Leadership is about clarity of vision, empowering teams, and creating systems that scale. His approach centers on removing friction, elevating talent, and driving outcomes — building cultures of accountability, continuous improvement, and data-driven excellence.
            </p>
          </div>
        </div>

        <div className={styles.strengthsSection} data-anim>
          <h2 className={styles.colTitle}>Key Strengths</h2>
          <div className={styles.strengthsGrid}>
            {strengths.map((s, i) => (
              <div key={i} className={styles.strengthItem} data-strength>
                <span className={styles.dot} />
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
