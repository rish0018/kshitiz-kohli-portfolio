import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import ProfileCard from '../components/ProfileCard';
import { lazy, Suspense } from 'react';
import styles from './Home.module.css';

const Galaxy = lazy(() => import('../components/Galaxy'));

const metrics = [
  { value: '20+', label: 'Years Experience' },
  { value: '$4M+', label: 'Cost Savings' },
];

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(ref.current.querySelector('h1'), { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
      .fromTo(ref.current.querySelector('h2'), { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.4')
      .fromTo(ref.current.querySelector('p'), { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
      .fromTo(ref.current.querySelectorAll('[data-metric]'), { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.4 }, '-=0.2')
      .fromTo(ref.current.querySelector('[data-actions]'), { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, '-=0.1')
      .fromTo(ref.current.querySelector('[data-card]'), { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7 }, '-=0.8');
  }, []);

  return (
    <>
      <div className={styles.bgGalaxy}>
        <Suspense fallback={null}>
          <Galaxy
            mouseRepulsion
            mouseInteraction
            density={1}
            glowIntensity={0.3}
            saturation={0}
            hueShift={140}
            twinkleIntensity={0.3}
            rotationSpeed={0.1}
            repulsionStrength={2}
            autoCenterRepulsion={0}
            starSpeed={0.5}
            speed={1}
          />
        </Suspense>
      </div>
      <div ref={ref} className={styles.hero}>
        <div className={styles.left}>
          <h1 className={styles.name}>Kshitiz Kohli</h1>
          <h2 className={styles.role}>Global Workforce Strategy & Operations Leader</h2>
          <p className={styles.tagline}>
            Driving large-scale workforce transformation, 
            building high-performance global teams, and delivering measurable operational 
            impact across regions.
          </p>
          <div className={styles.metrics}>
            {metrics.map((m, i) => (
              <div key={i} className={styles.metric} data-metric>
                <h3 className={styles.metricValue}>{m.value}</h3>
                <span className={styles.metricLabel}>{m.label}</span>
              </div>
            ))}
          </div>
          <div className={styles.actions} data-actions>
            <Link to="/contact" className={styles.cta}>
              Connect <span className={styles.ctaArrow}>→</span>
            </Link>
            <a
              href="https://www.linkedin.com/in/kshitiz-kohli-1842b515/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedin}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a href="mailto:rkohli1806@gmail.com " className={styles.emailLink}>
              rkohli1806@gmail.com 
            </a>
          </div>
        </div>
        <div className={styles.right} data-card>
          <ProfileCard />
        </div>
      </div>
      <div className={styles.footer}>
        <p className={styles.builtBy}></p>
        <a href="https://rishit-portfolio18.netlify.app/" className={styles.contactEmail}>
          By Rishit Kohli
        </a>
      </div>
    </>
  );
}
