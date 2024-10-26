import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserProfilePic } from "../components/profilePicgen.jsx";
import { getMentors, getStudents } from "../services/dataService.js";
import styles from "./assets/css/home.module.css";
import Apply from "./componets/apply.jsx";

const UserCard = ({ name, career, location, avatarSrc, onClick }) => (
  <div className={styles.userCard} onClick={onClick}>
    <div className={styles.flex}>
      <div className={styles.profileIcon}>
        <img className={styles.avatarIcon} alt="" src={avatarSrc} />
      </div>
      <img className={styles.likeBtnIcon} alt="" src="/likebtn@2x.png" />
    </div>
    <div className={styles.cardUsername}>{name}</div>
    <div className={styles.career}>{career}</div>
    <div className={styles.location}>{location}</div>
  </div>
);

const RecentUserCard = ({ name, career, type, avatarSrc }) => (
  <div className={styles.recentUserListChild}>
    <div className={styles.recentTutorsImg}>
      <img className={styles.avatarIcon} alt={`${name}'s avatar`} src={avatarSrc} />
    </div>
    <div className="flex1">
      <div className={styles.recentTutorsName}>{name}</div>
      <div className={styles.recentTutorsCareer}>{career}</div>
    </div>
    <div className={styles.mentorType}>{type}</div>
  </div>
);

const Home = () => {
  const [mentors, setMentors] = useState([]);
  const [students, setStudents] = useState([]);
  const [loadingMentors, setLoadingMentors] = useState(true);
  const [loadingStudents, setLoadingStudents] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const fetchedMentors = await getMentors();
        setMentors(fetchedMentors);
      } catch (err) {
        console.error("Error fetching mentors:", err);
        setError("Failed to load mentors.");
      } finally {
        setLoadingMentors(false);
      }
    };

    const fetchStudents = async () => {
      try {
        const fetchedStudents = await getStudents();
        setStudents(fetchedStudents);
      } catch (err) {
        console.error("Error fetching Students:", err);
        setError("Failed to load Students.");
      } finally {
        setLoadingStudents(false);
      }
    };

    fetchMentors();
    fetchStudents();

    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
        window.location.href ="/log-in";
      }
    });
    console.log("Current user:", currentUser);
    return () => unsubscribe(); 
    
  }, []);

  const senderId = currentUser ? currentUser.uid : null; 

  const handleMentorClick = (mentor) => {
    console.log("Mentor clicked:", mentor); 
    setSelectedMentor(mentor);
  };

  const closeMentorDetail = () => {
    setSelectedMentor(null); 
  };

  if (loadingMentors || loadingStudents) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.home}>
      <div className="main">
        <div className={styles.heading}>
          <Link className={styles.link} to="/menu">
            <div className={styles.linkChild} />
            <img className={styles.buttonIcon} alt="" src="/button1@2x.png" />
          </Link>
          <Link className={styles.link1} to="/profile">
            <UserProfilePic />
          </Link>
        </div>
        
        {/* Search Box */}
        <div className={styles.searchBox}>
          <input
            className={styles.searchForTutors}
            name="search"
            id="search"
            placeholder="Search for Tutors Here..."
            type="text"
          />
          <button className={styles.link2} id="search">
            <div className={styles.linkItem} />
            <img
              className={styles.adjustHorizontalAltIcon}
              alt=""
              src="/adjusthorizontalalt@2x.png"
            />
          </button>
        </div>

        {/* Popular Tutors Section */}
        <section className={styles.popularTutors}>
          <div className={styles.recentTutors}>Popular Tutors</div>
          <div className={styles.showAll}>Show All</div>
          <div className={styles.popularTutorsSlider} id="popular-tutors-slider">
            {mentors.map((mentor) => (
              <UserCard
                key={mentor.id}
                name={`${mentor.name} ${mentor.surname}`}
                career={mentor.industry || "N/A"}
                location={`${mentor.city}, ${mentor.province}`}
                avatarSrc={mentor.profilePic || "default_avatar_url"}
                onClick={() => handleMentorClick(mentor)} 
              />
            ))}
          </div>
        </section>

        {/* Recent Students Section */}
        <section className={styles.recent}>
          <div className={styles.recentTutors}>Recent Tutors</div>
          <div className={styles.showAll1}>Show All</div>
          <div className={styles.recentUserList}>
            {students.map((student) => (
              <RecentUserCard
                key={student.id}
                name={`${student.name} ${student.surname}`}
                career={student.major || "N/A"}
                type={student.year}
                avatarSrc={student.profilePic}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Selected Mentor Detail Section */}
      {selectedMentor && (
  <div className={styles.selectedMentorDetail}>
    <button onClick={closeMentorDetail}>Close</button>
    <Apply
      className={styles.apply}
      senderId={senderId}
      receiverId={selectedMentor.id}
    />
    
  </div>
)}


      <section className={styles.navigation}>
        <div className={styles.shadow} />
        <footer className={styles.navigationChild} />
        <img
          className={styles.menuIndicatorIcon}
          alt=""
          src="/menuindicator@2x.png"
        />
        <img className={styles.linkIcon} alt="" src="/link@2x.png" />
        <Link className={styles.link3} to="/message">
          <img className={styles.chatIcon} alt="" src="/chat@2x.png" />
          <div className={styles.message}>Message</div>
        </Link>
        <Link className={styles.link4} to="/notification">
          <img className={styles.settingIcon} alt="" src="/setting@2x.png" />
          <div className={styles.setting}>Setting</div>
        </Link>
        <Link className={styles.link5} to={"/profile"}>
          <img className={styles.settingIcon} alt="" src="/profile@2x.png" />
          <div className={styles.message}>Profile</div>
        </Link>
      </section>
    </div>
  );
};

export default Home;
