import {
  signOut,
} from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import styles from "./assets/css/menu.module.css";

const Menu = () => {
  const logout = async () => {
    try {
      await signOut(auth);
      window.location.href = "/log-in";
      
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.menu}>
      <img className={styles.menuChild} alt="" src="/rectangle-382@2x.png" />
      <div className={styles.ndamulelo}>{`Ndamulelo `}</div>
      <div className={styles.hellobesnikgmailcom}>hellobesnik@gmail.com</div>
      <button className={styles.link} onClick={logout}>
        <img className={styles.iconLogout} alt="" src="/iconlogout.svg" />
        <div className={styles.logout}>Logout</div>
      </button>
      <div className={styles.link1}>
        <div className={styles.notificationsSettin}>Notifications Settings</div>
        <img
          className={styles.iconSettings}
          alt=""
          src="/iconsettings@2x.png"
        />
      </div>
      <div className={styles.link2}>
        <div className={styles.transactionHistory}>
          <span>{`Applications `}</span>
          <span className={styles.span}>(8)</span>
        </div>
        <img className={styles.iconHistory} alt="" src="/iconhistory@2x.png" />
      </div>
      <Link className={styles.link3}>
        <div className={styles.editProfile}>Edit Profile</div>
        <img className={styles.iconUser} alt="" src="/iconuser.svg" />
      </Link>
      <Link className={styles.link4}>
        <div className={styles.favoriteOutfits26}>Share App</div>
        <img className={styles.iconHeart} alt="" src="/iconheart.svg" />
      </Link>
    </div>
  );
};

export default Menu;
