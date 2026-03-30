import { useState, useRef, useEffect, FormEvent, lazy, Suspense } from 'react';
import { gsap } from 'gsap';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';
import g from '../styles/global.module.css';

const FloatingOrb = lazy(() => import('../components/FloatingOrb'));

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (!pageRef.current) return;
    gsap.fromTo(pageRef.current.querySelectorAll('[data-anim]'),
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: 'power3.out' });
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');
    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className={styles.contactPage}>
      <div className={g.gradientBg} />

      <div ref={pageRef} className={styles.contentWrapper}>
        {/* Form section */}
        <div className={styles.formSection}>
          <span className={styles.label} data-anim>Reach Out</span>
          <h1 className={styles.heading} data-anim>Get in Touch</h1>
          <p className={styles.subtext} data-anim>
            Interested in connecting? Send a message and I'll get back to you.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className={styles.form} data-anim>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="user_name">Name</label>
                <input className={styles.input} type="text" id="user_name" name="user_name" required placeholder="Your name" />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="user_email">Email</label>
                <input className={styles.input} type="email" id="user_email" name="user_email" required placeholder="your@email.com" />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel} htmlFor="message">Message</label>
              <textarea className={styles.textarea} id="message" name="message" required rows={5} placeholder="Your message..." />
            </div>
            <button className={styles.submit} type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <p className={styles.success}>Message sent successfully!</p>}
            {status === 'error' && <p className={styles.error}>Something went wrong. Please try again.</p>}
          </form>
        </div>

        {/* Orb adjacent to form */}
        <div className={styles.orbSection} data-anim>
          <Suspense fallback={<div className={styles.orbPlaceholder} />}>
            <FloatingOrb />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
