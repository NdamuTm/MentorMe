import styles from "./assets/css/set-up.module.css";

const SetUp = () => {
  return (
    <div className={styles.setup}>
      <img className={styles.headerIcon} alt="" src="/header3@2x.png" />
      <div className={styles.first}>
        <input className={styles.firstChild} type="text" />
        <div className={styles.input}>Ndamulelo</div>
        <input
          className={styles.firstName}
          name="firstname"
          id="firstname"
          value="First Name"
          placeholder="Ndamulelo"
          type="text"
        />
      </div>
      <div className={styles.emai}>
        <input className={styles.emaiChild} type="text" />
        <div className={styles.input1}>ndamutm23@gmail.com</div>
        <div className={styles.yourEmail}>Your Email</div>
      </div>
      <div className={styles.student}>
        <div className={styles.country}>
          <input className={styles.countryChild} type="text" />
          <div className={styles.input2}>NMB Campus</div>
          <div className={styles.campus}>Campus</div>
          <img className={styles.buttonIcon} alt="" src="/button.svg" />
        </div>
        <div className={styles.country1}>
          <input className={styles.countryChild} type="text" />
          <div className={styles.input2}>Bsc Software Engineering</div>
          <div className={styles.courseName}>Course Name</div>
          <img className={styles.buttonIcon} alt="" src="/button.svg" />
        </div>
        <div className={styles.country2}>
          <input className={styles.countryChild} type="text" />
          <div className={styles.input2}>Second Year Student</div>
          <div className={styles.year}>Year</div>
          <img className={styles.buttonIcon} alt="" src="/button.svg" />
        </div>
      </div>
      <div className={styles.country3}>
        <input className={styles.countryChild} type="text" />
        <div className={styles.input2}>Web Dev</div>
        <div className={styles.interest}>Interest</div>
        <img className={styles.buttonIcon} alt="" src="/button.svg" />
      </div>
      <div className={styles.mentor}>
        <div className={styles.country4}>
          <input className={styles.countryChild} type="text" />
          <div className={styles.input2}>5-8 years</div>
          <div className={styles.experience}>Experience</div>
          <img className={styles.buttonIcon} alt="" src="/button.svg" />
        </div>
        <div className={styles.country}>
          <input className={styles.countryChild} type="text" />
          <div className={styles.input2}>Eduvos</div>
          <div className={styles.organization}>Organization</div>
          <img className={styles.buttonIcon} alt="" src="/button.svg" />
        </div>
        <div className={styles.country6}>
          <input className={styles.countryChild} type="text" />
          <div className={styles.input2}>Bsc Information Technology</div>
          <div className={styles.courseName}>Qualifications</div>
          <img className={styles.buttonIcon} alt="" src="/button.svg" />
        </div>
        <div className={styles.country7}>
          <input className={styles.countryChild} type="text" />
          <div className={styles.input2}>Teaching</div>
          <div className={styles.industry}>Industry</div>
          <img className={styles.buttonIcon} alt="" src="/button.svg" />
        </div>
      </div>
      <section className={styles.message}>
        <div className={styles.input10}>
          <div className={styles.inputChild} />
          <div className={styles.input11}>
            I love being a part of the creative process and enjoy the challenge
            of making complicated concepts simple to understand. I specialize in
            User Experience and User Interface design.
          </div>
        </div>
        <div className={styles.message1}>Bio</div>
      </section>
      <section className={styles.cv}>
        <div className={styles.input12}>
          <input className={styles.inputItem} type="text" />
          <div className={styles.uploadHereParent}>
            <div className={styles.uploadHere}>Upload Here</div>
            <img className={styles.icon} alt="" src="/icon1@2x.png" />
          </div>
        </div>
        <div className={styles.profilePicture}>Profile Picture</div>
      </section>
      <div className={styles.lastName}>
        <div className={styles.lastNameChild} />
        <div className={styles.input13}>Rasendedza</div>
        <input
          className={styles.lastName1}
          name="lastname"
          value="Last Name"
          placeholder="Rasendedza"
          type="text"
        />
      </div>
      <button className={styles.button}>
        <div className={styles.button1}>
          <div className={styles.buttonChild} />
        </div>
        <div className={styles.save}>Save</div>
      </button>
      <div className={styles.div}>
        <img className={styles.switchOffIcon} alt="" src="/switchoff.svg" />
        <div className={styles.mentorOrStudent}>Mentor or Student</div>
      </div>
    </div>
  );
};

export default SetUp;
