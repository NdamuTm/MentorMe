import { Link } from "react-router-dom";
import styles from "./assets/css/splash.module.css";

const Splash = () => {
  return (
    <div className={styles.splash}>
      <div className={styles.mentorme}>
        <span>Mentor</span>
        <span className={styles.me}>Me</span>
        <span>.</span>
      </div>
      <div className={styles.findThePerfect}>Find the Perfect Tutor Match</div>
      <div className={styles.connectingWithThe}>
        Connecting with the right tutor is now easier and faster with MentorMe!
      </div>
      <Link className={styles.link} to="/log-in">
        <div className={styles.linkChild} />
        <div className={styles.letsGetStarted}>Let’s Get Started</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright.svg" />
      </Link>
      <img
        className={styles.boyStudyingRemotelyWithTut}
        alt=""
        src="/boy-studying-remotely-with-tutor@2x.png"
      />
      <img
        className={styles.boyStudyingRemotelyWithTut1}
        alt=""
        src="/boy-studying-remotely-with-tutor1@2x.png"
      />
    </div>
  );
};

export default Splash;
