import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './Expertise.module.css';
import g from '../styles/global.module.css';


const expertiseAreas = [
  { 
    title: 'Workforce Management', 
    description: 'Drove end-to-end workforce strategy across global operations, including forecasting, scheduling, and real-time performance governance.', 
    num: '01' 
  },
  { 
    title: 'Forecasting & Capacity Planning', 
    description: 'Designed predictive models aligning staffing with demand while optimizing cost efficiency and service excellence.', 
    num: '02' 
  },
  { 
    title: 'Strategy & Operating Models', 
    description: 'Built scalable operating frameworks enhancing productivity, streamlining processes, and supporting business growth.', 
    num: '03' 
  },
  { 
    title: 'Global Command Centers', 
    description: 'Established 24/7 command centers with real-time monitoring and cross-regional operational alignment.', 
    num: '04' 
  },
  { 
    title: 'Change & Transformation', 
    description: 'Led large-scale transformation initiatives with structured governance and measurable adoption outcomes.', 
    num: '05' 
  },
  { 
    title: 'Leadership & Talent Development', 
    description: 'Built and mentored high-performing teams across geographies, fostering leadership pipelines.', 
    num: '06' 
  },
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
