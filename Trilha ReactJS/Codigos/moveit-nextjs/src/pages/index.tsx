import Head from 'next/head';
import CompletedChallenges from '../Components/CompletedChallenges';
import Countdown from '../Components/Countdown';
import { ExperienceBar } from '../Components/ExperienceBar';
import Profile from '../Components/Profile';
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Move.It</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div> </div>
      </section>
    </div>
  );
}
