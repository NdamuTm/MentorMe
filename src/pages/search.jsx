import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import styles from "./assets/css/search.module.css";
import { useLocation } from "react-router-dom";

const Search = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  
  // Location to get the URL 
  const location = useLocation();

  useEffect(() => {
    // Load users from Firestore once on mount
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(db, "users");
        const usersSnapshot = await getDocs(usersCollection);
        const usersList = usersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(usersList);
        setFilteredUsers(usersList); // Initially display all users
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };
    fetchUsers();

    // Get search query from URL on mount
    const query = new URLSearchParams(location.search).get("query");
    if (query) {
      setSearchTerm(query.toLowerCase()); // Normalize case for consistent filtering
    }
  }, [location]);

  // Filter users when `searchTerm` or `users` changes
  useEffect(() => {
    if (searchTerm) {
      const results = users.filter((user) => {
        return (
          (user.name || "").toLowerCase().includes(searchTerm) ||
          (user.Campus || "").toLowerCase().includes(searchTerm) ||
          (user.Qualification || "").toLowerCase().includes(searchTerm) ||
          (user.experience || "").toLowerCase().includes(searchTerm) ||
          (user.industry || "").toLowerCase().includes(searchTerm)
        );
      });
      setFilteredUsers(results);
    } else {
      setFilteredUsers(users); // Reset to all users if search is empty
    }
  }, [searchTerm, users]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const UserCard = ({ name, Campus, Qualification, avatar }) => (
    <div className={styles.card_container}>
      <span className={styles.card_info}>
        <span className={styles.aneleNdlovu}>{name}</span>
        <div className={styles.group}>
          <span className={styles.capeTown}>{Campus}</span> -
          <span className={styles.uiuxDesign}>{Qualification}</span>
        </div>
      </span>
    </div>
  );

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
            placeholder="Search for Tutors Here..."
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className={styles.availableMentors}>
          {filteredUsers.length} Available Mentors
        </div>

        <div className={styles.dribbble}>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <UserCard
                key={user.id}
                name={user.name || "Test User"}
                avatar={user.avatar || "/avatar2@2x.png"}
                Qualification={user.Qualification || "Software Engineer"}
                Campus={user.Campus || "NMB Campus"}
              />
            ))
          ) : (
            <div className={styles.noResults}>No results found</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Search;
