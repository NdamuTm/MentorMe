import { Link } from "react-router-dom";
import styles from "./log-in.module.css";

const LogIn = () => {
  return (
    <div className={styles.logIn}>
      <b className={styles.welcomeBack}>Welcome Back!</b>
      <div className={styles.fillYourDetails}>
        Fill your details or continue with google
      </div>
      <div className={styles.email}>
        <input
          className={styles.emailAddress}
          name="email"
          id="email"
          placeholder="Email Address"
          type="text"
        />
        <img className={styles.messageIcon} alt="" src="/message.svg" />
        <div className={styles.or}>
          <div className={styles.orContinueWith}>Or Continue with</div>
          <div className={styles.orChild} />
          <div className={styles.orItem} />
          <button className={styles.link} id="google-login">
            <div className={styles.linkChild} />
            <img
              className={styles.icon}
              alt=""
              src="/1421929991558096326-1.svg"
            />
          </button>
        </div>
      </div>
      <div className={styles.password}>
        <img className={styles.unionIcon} alt="" src="/union.svg" />
        <img className={styles.lockIcon} alt="" src="/lockicon.svg" />
        <input
          className={styles.emailAddress}
          name="password"
          id="password"
          placeholder="Password"
          type="text"
        />
      </div>
      <button className={styles.link1} id="login">
        <div className={styles.linkItem} />
        <div className={styles.logIn1}>LOG IN</div>
      </button>
      <div className={styles.button}>
        <div className={styles.forgetPassword}>Forget Password?</div>
      </div>
      <Link className={styles.link2} to="/sign-up">
        <div className={styles.newUserCreateContainer}>
          <span>{`New User? `}</span>
          <span className={styles.createAccount}>Create Account</span>
        </div>
      </Link>
    </div>
  );
};

export default LogIn;
