import styles from './ProfileCard.module.css';

export default function ProfileCard() {
  return (
    <div className={styles.card}>
      <div className={styles.photoWrapper}>
        <div className={styles.photo}>
          {/* Replace src with your actual photo */}
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
            alt="Kshitiz Kohli"
            className={styles.photoImg}
          />
        </div>
        <div className={styles.glow} />
      </div>
      <span className={styles.name}>Kshitiz Kohli</span>
    </div>
  );
}
