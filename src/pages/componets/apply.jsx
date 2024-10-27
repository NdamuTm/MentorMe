import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getMentors, getStudents } from "../../services/dataService.js";
import styles from "./apply.module.css";

export const Apply = ({ className = "", senderId, receiverId }) => {
  console.log("Apply Component Rendered - Sender:", senderId, "Receiver:", receiverId);

  const [mentors, setMentors] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedMentors = await getMentors();
        const fetchedStudents = await getStudents();
        setMentors(fetchedMentors);
        setStudents(fetchedStudents);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const mentor = mentors.find((mentor) => mentor.id === receiverId);
  const student = students.find((student) => student.id === receiverId);
  const user = mentor || student;

  const navigate = useNavigate();
  const handleClick = (userId) => {
    navigate(`/form?receiverId=${userId}`);
  };

  return (
    <div className={[styles.apply, className].join(" ")}>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : user ? (
        <div className={[styles.apply, className].join(" ")}>
          <main className={styles.vectorParent}>
            <div className={styles.header}>
              <div className={styles.imgBackground}>
                <img className={styles.avatarIcon5} alt="" src={user?.profilePic || "/default_avatar.png"} />
              </div>

              <div className={styles.uiDesignLead}>{user?.name} - {user?.experience || user?.year || "N/A"}</div>
              
              <div className={styles.flex}>
                <div className="flex">
                  <img className={styles.antDesignclockCircleOutlinIcon} alt="" src="/clock.svg" />
                  <div className={styles.input}>Full Time</div>
                </div>
                <div className={styles.free}>Free</div>
              </div>

              <div className={styles.flex}>
                <div className={styles.spotify3}>{user?.industry || user?.major || "N/A"}</div>
                <div className={styles.spotifyDetailsChild} />
                <img className={styles.locationIcon} alt="" src="/Location.svg" />
                <div className={styles.capeTown}>{user?.city}</div>
              </div>
            </div>

            <hr />

            <section className={styles.qualifications}>
              <div className={styles.qualifications1}>Bio:</div>
              <div className={styles.qualificationItem}>{user?.bio || "No bio available"}</div>

              {mentor && (
                <>
                  <div className={styles.qualifications1}>Qualifications:</div>
                  {mentor.qualifications?.map((qualification, index) => (
                    <div key={index} className={styles.qualificationItem}>
                      {qualification}
                    </div>
                  ))}
                </>
              )}
            </section>

            <button className={styles.button3} onClick={() => handleClick(user?.id)}>
              <div className={styles.applyNow}>Apply Now</div>
            </button>
            <button className={styles.button4}>
              <img className={styles.chatIcon1} alt="" src="/Chat.svg" />
            </button>
          </main>
        </div>
      ) : (
        <p>User not found</p>
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
