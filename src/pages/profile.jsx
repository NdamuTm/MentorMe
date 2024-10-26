import { UserProfilePic } from "../components/profilePicgen.jsx";
import styles from "./assets/css/profile.module.css";


const Profile = () => {




  return (
    <div className={styles.profile}>
      <div>{UserProfilePic()}</div>
      <div className={styles.oval} />
      <img className={styles.fill244Icon} alt="" src="/fill-244.svg" />
      <div className={styles.ndamuleloRasendedza}>Ndamulelo Rasendedza</div>
      <div className={styles.editProfile}>Edit Profile</div>
      <img className={styles.headerIcon} alt="" src="/header3@2x.png" />
      <div className={styles.name}>
        <input
          className={styles.input}
          placeholder="Ndamulelo  Rasendedza"
          type="text"
          
        />
        <div className={styles.yourEmail}>Name</div>
      </div>
      <div className={styles.emai}>
        <input
          className={styles.input}
          placeholder="Ndamutm23@gmail.com"
          type="text"

        />
        <div className={styles.yourEmail}>Your Email</div>
      </div>
      <div className={styles.password}>
        <div className={styles.input2}>
          <div className={styles.inputChild} />
          <input className={styles.text} type="text" />
        </div>
        <div className={styles.yourEmail}>Password</div>
      </div>
      <button className={styles.button}>
        <div className={styles.buttonChild} />
        <div className={styles.saveNow}>Save Now</div>
      </button>
    </div>
  );
};

export default Profile;
