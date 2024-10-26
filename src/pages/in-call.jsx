import styles from "./assets/css/in-call.module.css";

const InCall = () => {
  return (
    <div className={styles.inCall}>
      <img className={styles.inCallChild} alt="" src="/rectangle-2533@2x.png" />
      <div className={styles.controlPanel}>
        <img className={styles.buttonIcon} alt="" src="/button2.svg" />
        <img className={styles.buttonIcon1} alt="" src="/button3.svg" />
        <img className={styles.buttonIcon2} alt="" src="/button4.svg" />
      </div>
      <img className={styles.inCallItem} alt="" src="/rectangle-2532@2x.png" />
      <img className={styles.buttonIcon3} alt="" src="/button5.svg" />
      <div className={styles.additionalInformaion}>
        <div className={styles.div}>09:12</div>
        <div className={styles.darleneRobertson}>Darlene Robertson</div>
      </div>
      <img className={styles.buttonIcon4} alt="" src="/button6.svg" />
    </div>
  );
};

export default InCall;
