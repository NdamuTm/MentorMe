import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserProfilePic } from "../components/profilePicgen.jsx";
import { getMentors, getStudents } from "../services/dataService.js";
import styles from "./assets/css/home.module.css";

const UserCard = ({ name, career, location, avatarSrc }) => (
  <div className={styles.userCard}>
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
  const [loadingMentors, setLoadingMentors] = useState(true);
  const [loadingStudents, setLoadingStudents] = useState(true);
  const [students, setStudents] = useState([]);
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
  }, []); 

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
      <div className={styles.searchBox}>
        <button className={styles.link2} id="search">
          <div className={styles.linkItem} />
          <img
            className={styles.adjustHorizontalAltIcon}
            alt=""
            src="/adjusthorizontalalt@2x.png"
          />
        </button>
        <input
          className={styles.searchBoxChild}
          name="search"
          id="search"
          type="text"
        />
        <input
          className={styles.searchForTutors}
          name="search"
          id="search"
          placeholder="Search for Tutors Here..."
          type="text"
        />
      </div>
      <section className={styles.popularTutors}>
        <div className={styles.recentTutors}>Popular Tutors</div>
        <div className={styles.showAll}>Show All</div>
        <div className={styles.popularTutorsSlider} id="popular-tutors-slider">
          <div className={styles.userCard} id="user-card">

            
            <div className={styles.flex}>
              <div className={styles.profileIcon}>
              <img className={styles.avatarIcon} alt="" src="/avatar1@2x.png" />
            </div>
            <img className={styles.likeBtnIcon} alt="" src="/likebtn@2x.png" />
            </div>
            <div className={styles.cardUsername}>Michael Ndlovu</div>
            <div
              className={styles.career}
            >{`Finance & Accounting`}</div>
            <div className={styles.location}>
              Johannesburg, South Africa
            </div>
         </div>
         {mentors.map((mentor, index) => (
                    <UserCard 
                        key={mentor.id} 
                        name={`${mentor.name} ${mentor.surname}`} 
                        career={mentor.industry || "N/A"} // Provide a default value if industry is empty
                        location={`${mentor.city}, ${mentor.province}`} 
                        avatarSrc={mentor.avatarSrc || "default_avatar_url"} // Replace with a valid URL if available
                    />
                ))}

        </div>
      </section>
      <section className={styles.recent}>
        <div className={styles.recentTutors}>Recent Tutors</div>
        <div className={styles.showAll1}>Show All</div>


        <div className={styles.recentUserList}>
        <RecentUserCard 
          name="Sar" 
          career="Mark" 
          type="Peer Mentor" 
          avatarSrc="/avatar3@2x.png" 
        />
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
          <img className={styles.profileIcon2} alt="" src="/profile@2x.png" />
          <div className={styles.message}>Profile</div>
        </Link>
      </section>

      
      
    
    </div>
  );
};

export default Home;
