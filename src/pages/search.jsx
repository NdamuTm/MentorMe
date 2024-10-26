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
  <div className={styles.dribbble}>
          <div className={styles.fbChild} />
          <div className={styles.facebook}>
            <img className={styles.avatarIcon3} alt="" src={avatar} />
            <div className={styles.facebookItem} />
            <div className={styles.div} />
          </div>
          <div className={styles.aneleNdlovu}>{name}</div>
          <div className={styles.capeTown}>{Campus}</div>
          <div className={styles.uiuxDesign}>{Qualification}</div>
          <button className={styles.button3}>
          <img
              className={styles.ellipseIcon}
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
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            avatar={user.avatar || "/default-avatar.png"} 
            Qualification={user.Qualification}
            Campus={user.Campus}
          /> 
        ))}
       {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className={styles.dribbble}>
          <div className={styles.fbChild} />
          <div className={styles.facebook}>
            <div className={styles.facebookItem} />
            <div className={styles.div} />
          </div>
          <div className={styles.aneleNdlovu}>Anele Ndlovu</div>
          <div className={styles.capeTown}>Johannesburg</div>
          <div className={styles.uiuxDesign}>Product Design Mentor</div>
          <button className={styles.button3}>
            <img
              className={styles.ellipseIcon}
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
        <div className={styles.google}>
          <div className={styles.fbChild} />
          <div className={styles.facebook}>
            <div className={styles.facebookInner} />
          </div>
          <div className={styles.thaboMthembu}>Zinhle Nkosi</div>
          <div className={styles.capeTown}>Google</div>
          <div className={styles.uiuxDesign}>Senior UX Design</div>
          <button className={styles.button3}>
            <img
              className={styles.ellipseIcon}
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
        <div className={styles.shopify}>
          <div className={styles.fbChild} />
          <div className={styles.facebook}>
            <div className={styles.rectangleDiv} />
          </div>
          <div className={styles.thaboMthembu}>Busi Dlamini</div>
          <div className={styles.capeTown}>Durban</div>
          <div className={styles.uiuxDesign}>Visual Design</div>
          <button className={styles.button3}>
            <img
              className={styles.ellipseIcon}
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
        <div className={styles.netflix}>
          <div className={styles.fbChild} />
          <div className={styles.facebook}>
            <div className={styles.facebookChild1} />
          </div>
          <div className={styles.siphoKhumalo}>Sipho Khumalo</div>
          <div className={styles.bloemfontein}>Bloemfontein</div>
          <div className={styles.visualDesign1}>Visual Design</div>
          <button className={styles.button3}>
            <img
              className={styles.ellipseIcon}
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
        <img className={styles.avatarIcon} alt="" src="/avatar8@2x.png" />
        <img className={styles.avatarIcon1} alt="" src="/avatar3@2x.png" />
        <img className={styles.avatarIcon2} alt="" src="/avatar@2x.png" />
      </main>
      <img className={styles.avatarIcon3} alt="" src="/avatar7@2x.png" />
      <img className={styles.avatarIcon4} alt="" src="/avatar4@2x.png" />
    </div>
  );
};

export default Search;
