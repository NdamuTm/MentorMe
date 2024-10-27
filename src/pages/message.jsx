import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../config/firebase"; // Ensure the path is correct
import styles from "./assets/css/message.module.css";

const UserCard = ({ avatar, messageContent, chatId, otherUserId, userName }) => (
  <div>
    <Link to={`/chat?chat=${chatId}&senderId=${auth.currentUser.uid}&receiverId=${otherUserId}`} className={styles.div}>
      <img className={styles.avatarIcon} alt={userName} src={avatar} onError={(e) => e.target.src = "/default-avatar.png"} />
      <div className={styles.messageContent}>
        <div className={styles.h1}>{userName || "Unknown User"}</div>
        <div className={styles.p}>{messageContent}</div>
      </div>
      <div className={styles.notification}>2</div>
    </Link>
  </div>
);


const Message = () => {
  const [chats, setChats] = useState([]);
  const [userNames, setUserNames] = useState({});
  const [userAvatars, setUserAvatars] = useState({});
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

        // Fetch user names and avatars for each chat participant
        const userIds = chatsList.flatMap(chat => chat.participants);
        const uniqueUserIds = [...new Set(userIds)]; // Remove duplicates

        const usersData = await Promise.all(uniqueUserIds.map(getUserById));
        const names = Object.fromEntries(usersData.map(user => [user.u_id, user.name]));
        const avatars = Object.fromEntries(usersData.map(user => [user.u_id, user.profilePic || "/default-avatar.png"]));
        setUserNames(names);
        setUserAvatars(avatars);

        // Fetch last messages for each chat
        const updatedChats = await Promise.all(chatsList.map(async (chat) => {
          const lastMessage = await getLastMessage(chat.id);
          return {
            ...chat,
            lastMessage
          };
        }));

        setChats(updatedChats);
      } catch (error) {
        console.error("Error fetching chats: ", error);
      }
    };

    fetchChats();
  }, [userId]);

  // Fetch user data by ID
  const getUserById = async (id) => {
    const userRef = query(collection(db, "users"), where("u_id", "==", id));
    const userSnapshot = await getDocs(userRef);
    const userData = userSnapshot.docs.map(doc => doc.data());
    return userData[0]; // Return the first user found
  };

  // Fetch the last message for a specific chat
  const getLastMessage = async (chatId) => {
    const messagesRef = collection(db, "chats", chatId, "messages");
    const q = query(messagesRef, orderBy("timestamp", "desc"), limit(1));
    const lastMessageSnapshot = await getDocs(q);
    const lastMessageData = lastMessageSnapshot.docs.map(doc => ({ 
      id: doc.id,
      ...doc.data()
    }));

    return lastMessageData.length > 0 ? lastMessageData[0] : null;
  };

  return (
    <div className={styles.message}>
      <section className={styles.navigation}>
        <div className={styles.shadow} />
        <footer className={styles.navigationChild} />
        <img className={styles.navigationItem} alt="" src="/menuindicator@2x.png" />
        <Link to={"/"} className={styles.link}>
          <img className={styles.homeIcon} alt="" src="/home@2x.png" />
          <div className={styles.home}>Home</div>
        </Link>
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
      <Link to={"/"} className={styles.header}>
        <div className={styles.message1}>Message</div>
        <img className={styles.linkIcon1} alt="" src="/chevronleft.svg" />
        <img className={styles.linkIcon2} alt="" src="/link2@2x.png" />
      </Link>
      {chats.map((chat) => {
        // Determine the other user's ID
        const otherUserId = chat.participants.find(participant => participant !== userId);
        return (
          <UserCard
            key={chat.id}
            avatar={userAvatars[otherUserId] || "/default-avatar.png"}
            chatId={chat.id}
            otherUserId={otherUserId}
            userName={userNames[otherUserId] || "Unknown User"}
            messageContent={chat.lastMessage ? chat.lastMessage.text : "No messages yet."}
          />
        );
      })}
    </div>
  );
};

export default Message;
