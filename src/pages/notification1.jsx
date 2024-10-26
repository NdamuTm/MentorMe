import styles from "./assets/css/notification1.module.css";

const Notification1 = () => {
  return (
    <div className={styles.notification}>
      <img className={styles.headerIcon} alt="" src="/header1@2x.png" />
      <div className={styles.div}>
        {/* <img className={styles.switchOffIcon} alt="" src="/switchoff.svg" /> */}
        <div className={styles.switchOffIcon}>

          <div className={styles.container}>
          <input type="checkbox" className={styles.checkbox} id="checkbox"/>
          <label className={styles.switch} for="checkbox">
            <span className={styles.slider}></span>
          </label>
        </div>

        </div>
        <div className={styles.newMentor}>New Mentor</div>
        <div className={styles.ifAnyNew}>If any new mentor update</div>
      </div>
      <div className={styles.div1}>
        {/* <img className={styles.switchOffIcon} alt="" src="/switchoff.svg" /> */}
        <div className={styles.switchOffIcon}>

          <div className={styles.container}>
          <input type="checkbox" className={styles.checkbox} id="checkbox1"/>
          <label className={styles.switch} for="checkbox1">
            <span className={styles.slider}></span>
          </label>
        </div>

        </div>
        <div className={styles.newMentor}>Got Accepted</div>
        <div className={styles.ifAnyNew}>If you get accepted by mentor</div>
      </div>
      <div className={styles.div2}>
        {/* <img className={styles.switchOffIcon} alt="" src="/switchoff1.svg" /> */}
        <div className={styles.switchOffIcon}>

          <div className={styles.container}>
          <input type="checkbox" className={styles.checkbox} id="checkbox2"/>
          <label className={styles.switch} for="checkbox2">
            <span className={styles.slider}></span>
          </label>
        </div>

        </div>
        <div className={styles.newMentor}>Get Rejected</div>
        <div className={styles.ifAnyNew}>If you rejected by by mentor</div>
      </div>
      <div className={styles.div3}>
        {/* <img className={styles.switchOffIcon} alt="" src="/switchoff1.svg" /> */}
        <div className={styles.switchOffIcon}>

          <div className={styles.container}>
          <input type="checkbox" className={styles.checkbox} id="checkbox3"/>
          <label className={styles.switch} for="checkbox3">
            <span className={styles.slider}></span>
          </label>
        </div>

        </div>
        <div className={styles.newMentor}>Massage</div>
        <div className={styles.ifAnyNew}>Got any new massage</div>
      </div>
      <div className={styles.div4}>
        {/* <img className={styles.switchOffIcon} alt="" src="/switchoff1.svg" /> */}
        <div className={styles.switchOffIcon}>

          <div className={styles.container}>
          <input type="checkbox" className={styles.checkbox} id="checkbox4"/>
          <label className={styles.switch} for="checkbox4">
            <span className={styles.slider}></span>
          </label>
        </div>

        </div>

        <div className={styles.newMentor}>Call</div>
        <div className={styles.ifAnyNew}>Have a call</div>
      </div>

      {/* <div className={styles.container}>
        <input type="checkbox" className={styles.checkbox} id="checkbox5"/>
        <label className={styles.switch} for="checkbox">
          <span className={styles.slider}></span>
        </label>
      </div> */}

    </div>
  );
};

export default Notification1;
