import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import styles from './CardNav.module.css';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Expertise', path: '/expertise' },
  { label: 'Achievements', path: '/achievements' },
  { label: 'Contact', path: '/contact' },
];

export default function CardNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setAtTop(currentY < 20);
      if (currentY < 20) {
        setVisible(true);
      } else if (currentY > lastScrollY.current + 5) {
        setVisible(false); // scrolling down
      } else if (currentY < lastScrollY.current - 5) {
        setVisible(true); // scrolling up
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' });
    }
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (linksRef.current && mobileOpen) {
      const items = linksRef.current.querySelectorAll('a');
      gsap.fromTo(items, { x: -20, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.05, duration: 0.3, ease: 'power2.out' });
    }
  }, [mobileOpen]);

  return (
    <nav
      ref={navRef}
      className={`${styles.nav} ${!visible ? styles.navHidden : ''} ${!atTop ? styles.navScrolled : ''}`}
    >
      <div className={styles.navInner}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoAccent}>K</span>K
        </Link>
        <div ref={linksRef} className={`${styles.links} ${mobileOpen ? styles.linksOpen : ''}`}>
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.link} ${location.pathname === item.path ? styles.linkActive : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <button className={styles.hamburger} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <span className={`${styles.bar} ${mobileOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${mobileOpen ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${mobileOpen ? styles.barOpen3 : ''}`} />
        </button>
      </div>
    </nav>
  );
}
