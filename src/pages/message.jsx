import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../config/firebase"; // Ensure the path is correct
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
  const [chats, setChats] = useState([]);
  const [addMode, setAddMode] = useState([]);
  const userId = auth.currentUser?.uid; 

  useEffect(() => {
    const fetchChats = async () => {
      try {
        if (!userId) return;

        // Query to get chats where the user is either sender or receiver
        const chatsRef = collection(db, "chats");
        const q = query(chatsRef, where("participants", "array-contains", userId));

  
        const chatsSnapshot = await getDocs(q);
        const chatsList = chatsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setChats(chatsList);
      } catch (error) {
        console.error("Error fetching chats: ", error);
      }
    };

    fetchChats();
  }, [userId]);

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
      {chats.map((chat) => (
        
        
        <UserCard
          key={chat.id}
          name={chat.participants.includes(userId) ? "Chat Partner" : "Unknown"}
          avatar={chat.avatar || "/default-avatar.png"}
 
        />
      ))}
      <img className={styles.buttonIcon} alt="" src="/button9@2x.png" />
    </div>
  );
};

export default Message;
