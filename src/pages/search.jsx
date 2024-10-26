import styles from "./assets/css/search.module.css";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase"; // Ensure the path is correct



const Search = () => {
  const [users, setUsers] = useState([]);


{/* //////////////////////new code///////////////////////////////////////////////////////////////////////////////////////////// */}

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(db, "users");
        const usersSnapshot = await getDocs(usersCollection);
        const usersList = usersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setUsers(usersList);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };

    fetchUsers();
    console.log(users)
  }, []);

const UserCard = ({ name, Campus, Qualification, avatar }) => (
  <div className={styles.card_container}>
          <span className={styles.image_container}>
            <img className={styles.avatarIcon3} alt="" src={avatar} />
            <span className={styles.facebookItem} />
            <span className={styles.div}> </span>
          </span>
          <span className={styles.card_info}>
              <span className={styles.aneleNdlovu}>{name}</span>
              <span className={styles.capeTown}>{Campus}</span>
              <span className={styles.uiuxDesign}>{Qualification}</span>
          </span>
          <button className={styles.button3}>
                <img
                    className={styles.image}
                    alt=""
                    src="/ellipse-58@2x.png"
                  />
                  <img
                    className={styles.path3392Icon}
                    alt=""
                    src="/path-3392@2x.png"
                  />
              </button>
    </div>
);
{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}




  return (
    <div className={styles.search}>
      <main className={styles.headerParent}>
        <img className={styles.headerIcon} alt="" src="/header4@2x.png" />
        <div className={styles.searchBox}>
          <button className={styles.button}>
            <div className={styles.buttonChild} />
            <img
              className={styles.adjustHorizontalAltIcon}
              alt=""
              src="/adjusthorizontalalt@2x.png"
            />
          </button>
          <input
            className={styles.input}
            placeholder="UI Design Tutors"
            type="text"
          />
        </div>
        <div className={styles.availableMentors}>35 Available Mentors</div>
        <div className={styles.most}>
          <button className={styles.button1}>
            <div className={styles.buttonItem} />
            <div className={styles.mostRelevent}>Most Relevent</div>
          </button>
          <button className={styles.button2}>
            <div className={styles.buttonInner} />
            <div className={styles.mostRecent}>Most Recent</div>
          </button>
        </div>
        {/* //////////////////new code//////////////////////////////////////////////////////////////////////// */}

        <div className={styles.dribbble}>

            {users.map((user) => (
              <UserCard
                key={user.id}
                name={user.name || "test user"}
                avatar={user.avatar || "/avatar2@2x.png"} 
                Qualification={user.Qualification || "software engineer"}
                Campus={user.Campus || "NMB campus"}
              /> 
            ))}

        </div>

        
       {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      </main> 
    </div>
  );
};

export default Search;
