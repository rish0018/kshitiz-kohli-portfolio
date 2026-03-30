import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Experience.module.css';
import g from '../styles/global.module.css';

const experiences = [
  {
    company: 'Uber',
    roles: [
      {
        title: 'Regional Head, Workforce Management — APAC',
        duration: '2022 – Present',
        impacts: [
          'Leading WFM strategy across APAC markets for ride-hailing and delivery operations',
          'Built and scaled the Global Command Center from the ground up',
          'Designed forecasting and capacity planning frameworks used across 15+ countries',
          'Drove operational efficiency improvements saving $4M+ annually',
        ],
      },
      {
        title: 'Head, Global Command Center',
        duration: '2020 – 2022',
        impacts: [
          'Established 24/7 global command center operations',
          'Created real-time monitoring dashboards and incident response protocols',
          'Managed cross-functional teams across 3 continents',
        ],
      },
    ],
  },
  {
    company: 'HSBC',
    roles: [{
      title: 'Vice President — Workforce Strategy',
      duration: '2017 – 2020',
      impacts: [
        'Led workforce transformation for global banking operations',
        'Implemented predictive workforce planning models',
        'Reduced operational costs by 18% through strategic resource optimization',
      ],
    }],
  },
  {
    company: 'American Express',
    roles: [{
      title: 'Director — Service Delivery',
      duration: '2013 – 2017',
      impacts: [
        'Directed service delivery across multiple customer segments',
        'Won Customer Excellence Award for outstanding service metrics',
        'Built and mentored high-performing teams of 200+ agents',
      ],
    }],
  },
  {
    company: 'iGATE (now Capgemini)',
    roles: [{
      title: 'Operations Manager',
      duration: '2010 – 2013',
      impacts: [
        'Managed end-to-end service delivery for enterprise clients',
        'Introduced capacity planning and workforce scheduling systems',
      ],
    }],
  },
  {
    company: 'Dell',
    roles: [{
      title: 'Team Lead — Operations',
      duration: '2007 – 2010',
      impacts: [
        'Led technical support operations team',
        'Consistently exceeded SLA targets and quality benchmarks',
      ],
    }],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const entries = ref.current.querySelectorAll('[data-anim]');
    entries.forEach((entry, i) => {
      gsap.fromTo(entry,
        { y: 40, opacity: 0, x: -20 },
        {
          y: 0, opacity: 1, x: 0,
          duration: 0.7,
          delay: i * 0.12,
          ease: 'power3.out',
        }
      );
    });
    // Animate the timeline line drawing
    const line = ref.current.querySelectorAll('[data-line]');
    line.forEach((l) => {
      gsap.fromTo(l,
        { scaleY: 0, transformOrigin: 'top' },
        { scaleY: 1, duration: 1.5, ease: 'power2.out', delay: 0.3 }
      );
    });
  }, []);

  return (
    <div className={g.pageContainer}>
      <div className={g.gradientBg} />
      <div ref={ref} className={g.section}>
        <span className={styles.label} data-anim>Career</span>
        <h1 className={styles.heading} data-anim>Experience</h1>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.entry} data-anim>
              <div className={styles.marker}>
                <div className={styles.dot} />
                {i < experiences.length - 1 && <div className={styles.line} data-line />}
              </div>
              <div className={styles.content}>
                <h2 className={styles.company}>{exp.company}</h2>
                {exp.roles.map((role, j) => (
                  <div key={j} className={styles.role}>
                    <div className={styles.roleHeader}>
                      <h3 className={styles.roleTitle}>{role.title}</h3>
                      <span className={styles.duration}>{role.duration}</span>
                    </div>
                    <ul className={styles.impacts}>
                      {role.impacts.map((impact, k) => (
                        <li key={k}>{impact}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
