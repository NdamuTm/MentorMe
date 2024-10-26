import styles from "./assets/css/form.module.css";

const Form = () => {
  return (
    <div className={styles.form}>
      <img className={styles.headerIcon} alt="" src="/header@2x.png" />
      <div className={styles.first}>
        <input className={styles.firstChild} type="text" />

      </div>
      <div className={styles.emai}>
        <input className={styles.firstChild} type="text" 
           placeholder="Your Email"

        />

        <div className={styles.yourEmail}>Your Email</div>
      </div>
      <div className={styles.country}>
        <input className={styles.firstChild} type="text" />
        <div className={styles.input2}>Port Elizabeth</div>
        <div className={styles.yourEmail}>Location</div>
        <img className={styles.buttonIcon} alt="" src="/button.svg" />
      </div>
      <section className={styles.message}>
        <div className={styles.input3}>
          <div className={styles.inputChild} />
          <div className={styles.input4}>
            I love being a part of the creative process and enjoy the challenge
            of making complicated concepts simple to understand. I specialize in
            User Experience and User Interface design.
          </div>
        </div>
        <div className={styles.message1}>Message</div>
      </section>
      <section className={styles.cv}>
        <div className={styles.input5}>
          <input className={styles.inputItem} type="text" />
          <div className={styles.uploadHereParent}>
            <div className={styles.uploadHere}>Upload Here</div>
            <img className={styles.icon} alt="" src="/icon@2x.png" />
          </div>
        </div>
        <div className={styles.cvoptional}>CV(optional)</div>
      </section>
      <input
        className={styles.lastName}
        name="lastname"
        placeholder="Rasendedza"
        type="text"
      />
      {/* <button className={styles.button}>
        <div className={styles.lastName1}>Last Name</div>
        <div className={styles.button1}>
          <div className={styles.buttonChild} />
        </div>
        <div className={styles.applyNow}>Apply Now</div>
      </button> */}
    </div>
  );
};

export default Form;
