import styles from '../styles/components/CompletedChallenges.module.css';
export default function CompletedChallenges() {
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>0</span>
    </div>
  );
}
