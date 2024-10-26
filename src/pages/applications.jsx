import styles from "./assets/css/applications.module.css";

const Applications = () => {
  return (
    <div className={styles.applications}>
      <img className={styles.headerIcon} alt="" src="/header2@2x.png" />
      <div className={styles.yourApplications}>Your Applications</div>
      <div className={styles.facebook}>
        <div className={styles.facebookChild} />
        <div className={styles.facebookIcon}>
          <div className={styles.facebookItem} />
          <img
            className={styles.icon}
            alt=""
            src="/5619258651530103309-1.svg"
          />
        </div>
        <div className={styles.thaboMthembu}>Thabo Mthembu</div>
        <div className={styles.uiuxDesignMentor}>UI/UX Design Mentor</div>
        <div className={styles.capeTown}>Cape Town</div>
        <img className={styles.buttonIcon} alt="" src="/button10@2x.png" />
        <div className={styles.button}>
          <div className={styles.button1} />
        </div>
        <div className={styles.delivered}>Delivered</div>
        <div className={styles.free}>Free</div>
      </div>
      <div className={styles.dribble}>
        <div className={styles.facebookChild} />
        <div className={styles.facebookIcon}>
          <div className={styles.facebookInner} />
          <img
            className={styles.icon1}
            alt=""
            src="/20213282831555590074-1.svg"
          />
        </div>
        <div className={styles.thaboMthembu}>Anele Ndlovu</div>
        <div className={styles.uiuxDesignMentor}>Product Design Mentor</div>
        <div className={styles.capeTown}>Johannesburg</div>
        <img className={styles.buttonIcon} alt="" src="/button10@2x.png" />
        <div className={styles.button}>
          <div className={styles.buttonChild} />
        </div>
        <div className={styles.delivered1}>Delivered</div>
        <div className={styles.free1}>Free</div>
      </div>
      <div className={styles.google}>
        <div className={styles.facebookChild} />
        <img className={styles.facebookIcon} alt="" src="/facebook.svg" />
        <div className={styles.thaboMthembu}>Zinhle Nkosi</div>
        <div className={styles.uiuxDesignMentor}>Senior UX Design Mentor</div>
        <div className={styles.capeTown}>Pretoria</div>
        <img className={styles.buttonIcon} alt="" src="/button10@2x.png" />
        <div className={styles.googleItem} />
        <div className={styles.pending}>Pending</div>
        <div className={styles.free2}>Free</div>
      </div>
      <div className={styles.shopify}>
        <div className={styles.facebookChild} />
        <img className={styles.facebookIcon} alt="" src="/facebook1.svg" />
        <div className={styles.thaboMthembu}>Busi Dlamini</div>
        <div className={styles.uiuxDesignMentor}>Visual Design Mentor</div>
        <div className={styles.capeTown}>Durban</div>
        <img className={styles.buttonIcon} alt="" src="/button10@2x.png" />
        <div className={styles.shopifyItem} />
        <div className={styles.pending1}>Pending</div>
        <div className={styles.free3}>Free</div>
      </div>
    </div>
  );
};

export default Applications;
