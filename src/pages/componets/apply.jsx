import PropTypes from "prop-types";
import styles from "./apply.module.css";

export const Apply = ({ className = "" }) => {
  return (
    <div className={[styles.apply, className].join(" ")}>
      <img className={styles.avatarIcon1} alt="" src="/avatar1@2x.png" />
      <img className={styles.avatarIcon2} alt="" src="/avatar2@2x.png" />
      <img className={styles.avatarIcon3} alt="" src="/avatar3@2x.png" />
      <img className={styles.avatarIcon4} alt="" src="/avatar4@2x.png" />
      <img className={styles.applyChild} alt="" src="/rectangle-527@2x.png" />
      <main className={styles.vectorParent}>
        <section className={styles.groupChild} />
        <div className={styles.time}>
          <input
            className={styles.input}
            placeholder="Full Time "
            type="text"
          />
          <img
            className={styles.antDesignclockCircleOutlinIcon}
            alt=""
            src="/antdesignclockcircleoutlined@2x.png"
          />
        </div>
        <div className={styles.free}>Free</div>
        <div className={styles.uiDesignLead}>UI Design Lead Mentor</div>
        <div className={styles.spotify2}>
          <div className={styles.spotifyInner} />
        </div>
        <div className={styles.spotifyDetails}>
          <div className={styles.spotify3}>Spotify</div>
          <div className={styles.capeTown}>Cape Town</div>
          <div className={styles.spotifyDetailsChild} />
          <img className={styles.locationIcon} alt="" src="/location@2x.png" />
        </div>
        <button className={styles.button}>
          <div className={styles.buttonChild} />
          <div className={styles.description}>Description</div>
        </button>
        <button className={styles.button1}>
          <div className={styles.buttonItem} />
          <div className={styles.company}>Company</div>
        </button>
        <button className={styles.button2}>
          <div className={styles.buttonInner} />
          <div className={styles.reviews}>Reviews</div>
        </button>
        <section className={styles.qualifications}>
          <div className={styles.exceptionalCommunicationSkil}>
            Exceptional communication skills and team working skill
          </div>
          <div className={styles.qualificationsChild} />
          <div className={styles.creativeWithAn}>
            Creative with an eye for shape and colour
          </div>
          <div className={styles.qualificationsItem} />
          <div className={styles.knowThePrincipal}>
            Know the principal of animation and you can create high prtotypes
          </div>
          <div
            className={styles.figmaxdSketch}
          >{`Figma,Xd & Sketch must know about this apps`}</div>
          <div className={styles.qualificationsInner} />
          <div className={styles.ellipseDiv} />
          <div className={styles.qualifications1}>Qualifications:</div>
        </section>
        <button className={styles.button3}>
          <div className={styles.rectangleDiv} />
          <div className={styles.applyNow}>Apply Now</div>
        </button>
        <button className={styles.button4}>
          <div className={styles.buttonChild1} />
          <img className={styles.chatIcon1} alt="" src="/chat1@2x.png" />
        </button>
        <div className={styles.groupItem} />
      </main>
      <img className={styles.avatarIcon5} alt="" src="/avatar9@2x.png" />
    </div>
  );
};

Apply.propTypes = {
  className: PropTypes.string,
};

export default Apply;
