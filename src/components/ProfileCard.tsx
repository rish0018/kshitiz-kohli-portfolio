import styles from './ProfileCard.module.css';

export default function ProfileCard() {
  return (
    <div className={styles.card}>
      <div className={styles.photoWrapper}>
        <div className={styles.photo}>
          <img
            src="/photo.jpeg"
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
