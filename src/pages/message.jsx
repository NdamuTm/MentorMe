import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase"; // Ensure the path is correct
import styles from "./assets/css/message.module.css";

const UserCard = ({ name, avatar, messagecontent }) => (
  <div className={styles.div}>
    <img className={styles.avatarIcon} alt="" src={avatar} />
    <div className={styles.messageContent}>
      <div className={styles.h1}>{name}</div>
      <div className={styles.p}>{messagecontent}</div>
    </div>
    <div className={styles.notification}>2</div>
  </div>
);
const Message = () => {
  const [users, setUsers] = useState([]);

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
  }, []);

  return (
    <div className={styles.message}>
      <section className={styles.navigation}>
        <div className={styles.shadow} />
        <footer className={styles.navigationChild} />
        <img
          className={styles.navigationItem}
          alt=""
          src="/menuindicator@2x.png"
        />
        <div className={styles.link}>
          <img className={styles.homeIcon} alt="" src="/home@2x.png" />
          <div className={styles.home}>Home</div>
        </div>
        <img className={styles.linkIcon} alt="" src="/link1@2x.png" />
        <div className={styles.link1}>
          <img className={styles.profileIcon} alt="" src="/profile@2x.png" />
          <div className={styles.home}>Profile</div>
        </div>
        <div className={styles.link2}>
          <img className={styles.settingIcon} alt="" src="/setting1@2x.png" />
          <div className={styles.home}>Setting</div>
        </div>
      </section>

      <div className={styles.header}>
        <div className={styles.message1}>Message</div>
        <img className={styles.linkIcon1} alt="" src="/chevronleft.svg" />
        <img className={styles.linkIcon2} alt="" src="/link2@2x.png" />
      </div>


      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          avatar={user.avatar || "/default-avatar.png"} 
          messagecontent="Hi, how are you?"
        />
      ))}

      <img className={styles.buttonIcon} alt="" src="/button9@2x.png" />
    </div>
  );
};

export default Message;
