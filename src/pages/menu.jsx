import styles from "./menu.module.css";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <img className={styles.menuChild} alt="" src="/rectangle-382@2x.png" />
      <div className={styles.ndamulelo}>{`Ndamulelo `}</div>
      <div className={styles.hellobesnikgmailcom}>hellobesnik@gmail.com</div>
      <div className={styles.link}>
        <img className={styles.iconLogout} alt="" src="/iconlogout.svg" />
        <div className={styles.logout}>Logout</div>
      </div>
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
      <div className={styles.link3}>
        <div className={styles.editProfile}>Edit Profile</div>
        <img className={styles.iconUser} alt="" src="/iconuser.svg" />
      </div>
      <div className={styles.link4}>
        <div className={styles.favoriteOutfits26}>Share App</div>
        <img className={styles.iconHeart} alt="" src="/iconheart.svg" />
      </div>
    </div>
  );
};

export default Menu;
