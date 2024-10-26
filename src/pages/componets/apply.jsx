import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getMentors } from "../../services/dataService.js";
import styles from "./apply.module.css";

export const Apply = ({ className = "", senderId, receiverId }) => {
  console.log("Apply Component Rendered - Sender:", senderId, "Receiver:", receiverId);

  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const fetchedMentors = await getMentors();
        setMentors(fetchedMentors);
      } catch (err) {
        console.error("Error fetching mentors:", err);
        setError("Failed to load mentors.");
      } finally {
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);


  const mentor = mentors.find((mentor) => mentor.id === receiverId);

  return (
    <div className={[styles.apply, className].join(" ")}>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : mentor ? (
        <div className={[styles.apply, className].join(" ")}>

      <main className={styles.vectorParent}>

        
        {/* Dynamic Mentor Data */}
        <div className={styles.time}>
          
          <div className={styles.input} >Full Time</div>
          <img
            className={styles.antDesignclockCircleOutlinIcon}
            alt=""
            src="/clock.svg"
          />
        </div>
        <div className={styles.free}>Free</div>
        <div className={styles.uiDesignLead}>{mentor?.name} - {mentor?.experience}</div>
        <div className={styles.spotify2}>
          <div className={styles.spotifyInner} />
        </div>
        <div className={styles.spotifyDetails}>
          <div className={styles.spotify3}>{mentor?.industry}</div>
          <div className={styles.capeTown}>{mentor?.city}</div>
          <div className={styles.spotifyDetailsChild} />
          <img className={styles.locationIcon} alt="" src="/Location.svg" />
        </div>
        
        <section className={styles.qualifications}>
          <div className={styles.qualifications1}>Qualifications:</div>
          {mentor?.qualifications?.map((qualification, index) => (
            <div key={index} className={styles.qualificationItem}>
              {qualification}
            </div>
          ))}
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
      <img className={styles.avatarIcon5} alt="" src={mentor?.profilePic} />
    </div>
      ) : (
        <p>Mentor not found</p>
      )}
    </div>
  );
};

Apply.propTypes = {
  className: PropTypes.string,
  senderId: PropTypes.string,
  receiverId: PropTypes.string,
};

export default Apply;
