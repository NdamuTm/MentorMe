import { Link } from "react-router-dom";
import styles from "./sign-up.module.css";

const SignUp = () => {
  return (
    <div className={styles.signUp}>
      <div className={styles.registerAccount}>Register Account</div>
      <div className={styles.fillYourDetails}>
        Fill your details or continue with google
      </div>
      <div className={styles.email}>
        <div className={styles.emailChild} />
        <input
          className={styles.emailAddress}
          name="email"
          id="email"
          placeholder="Email Address"
          type="text"
        />
        <img className={styles.messageIcon} alt="" src="/message1.svg" />
      </div>
      <div className={styles.name}>
        <div className={styles.emailChild} />
        <input
          className={styles.emailAddress}
          name="name"
          id="name"
          placeholder="User Name"
          type="text"
        />
        <img className={styles.unionIcon} alt="" src="/union1.svg" />
      </div>
      <div className={styles.password}>
        <div className={styles.emailChild} />
        <img className={styles.eyeSlashIcon} alt="" src="/union.svg" />
        <img className={styles.lockIcon} alt="" src="/lockicon1.svg" />
        <input
          className={styles.emailAddress}
          name="password"
          id="password"
          placeholder="Password"
          type="text"
        />
      </div>
      <button className={styles.link} id="sign-up">
        <div className={styles.linkChild} />
        <div className={styles.signUp1}>SIGN UP</div>
      </button>
      <Link className={styles.link1} to="/log-in">
        <div className={styles.alreadyHaveAccountContainer}>
          <span>{`Already Have Account? `}</span>
          <span className={styles.logIn}>Log In</span>
        </div>
      </Link>
      <Link className={styles.link2} to="/log-in">
        <img className={styles.chevronLeftIcon} alt="" src="/chevronleft.svg" />
      </Link>
      <div className={styles.or}>
        <div className={styles.orContinueWith}>Or Continue with</div>
        <div className={styles.orChild} />
        <div className={styles.orItem} />
        <div className={styles.social}>
          <button className={styles.link3} id="google-login">
            <div className={styles.linkItem} />
            <img
              className={styles.icon}
              alt=""
              src="/1421929991558096326-1.svg"
            />
          </button>
          <img className={styles.facebookIcon} alt="" src="/facebook2.svg" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
