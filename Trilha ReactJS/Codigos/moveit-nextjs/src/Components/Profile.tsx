import styles from '../styles/components/Profile.module.css';

export default function Profile(params) {
  return (
    <div className={styles.profileContainer}>
      <img src='https://github.com/dienerld.png' alt='Diener Dornelas' />
      <div>
        <strong>Diener Dornelas</strong>
        <p>
          <img src='icons/level.svg' alt='' />
          Level 1
        </p>
      </div>
    </div>
  );
}
