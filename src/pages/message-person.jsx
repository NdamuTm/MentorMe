import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../config/firebase";
import styles from "./assets/css/message-person.module.css";

const MessagePerson = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const senderId = params.get("senderId");
  const receiverId = params.get("receiverId");

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const chatId = senderId < receiverId ? `${senderId}_${receiverId}` : `${receiverId}_${senderId}`;

  useEffect(() => {
    const messagesRef = collection(db, "chats", chatId, "messages");
    const q = query(messagesRef, orderBy("timestamp", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(messagesData);
    });

    return () => unsubscribe();
  }, [chatId]);

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      try {
        const messagesRef = collection(db, "chats", chatId, "messages");
        await addDoc(messagesRef, {
          senderId,
          receiverId,
          text: newMessage,
          timestamp: serverTimestamp()
        });
        setNewMessage("");
      } catch (error) {
        console.error("Error sending message: ", error);
      }
    }
  };

  return (
    <div className={styles.messagePerson}>
      <div className={styles.header}>
        <button className={styles.link}>
          <img className={styles.chevronLeftIcon} alt="Back Button" src="/chevronleft.svg" />
        </button>
        <img className={styles.avatarIcon} alt="User Avatar" src="/avatar5@2x.png" />
        <div className={styles.rozanneBarrientes}>Anaya Sanji</div>
        <img className={styles.buttonIcon} alt="Call Button" src="/button7.svg" />
      </div>

      <section className={styles.message}>
        <div className={styles.myMessage}>
          {messages.map((msg) => (
            <div key={msg.id} className={styles.messageContainer}>
              <div className={styles.hello}>{msg.text}</div>
              <div className={styles.pm}>{msg.timestamp?.toDate().toLocaleTimeString() || "Sending..."}</div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.input}>
        <input
          className={styles.input1}
          placeholder="Type a message"
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className={styles.button1} onClick={handleSendMessage}>
          <img className={styles.buttonIcon1} alt="send message" src="/button8@2x.png" />
        </button>
      </div>
    </div>
  );
};

export default MessagePerson;
