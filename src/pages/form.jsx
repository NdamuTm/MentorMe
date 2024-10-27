import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { auth, db } from "../config/firebase";
import styles from "./assets/css/form.module.css";

const Form = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const receiverId = new URLSearchParams(location.search).get("receiverId");
  
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    campus: "",
    message: "",
    senderId: auth.currentUser?.uid || "", 
    receiverId: receiverId || "", 
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.senderId || !formData.receiverId) {
      setError("Missing user or mentor information.");
      setLoading(false);
      return;
    }

    try {
      // Create a new chat entry
      const chatDocRef = await addDoc(collection(db, "chats"), {
        participants: [formData.senderId, formData.receiverId],
        messages: [],
        createdAt: new Date(),
      });

      // Submit the mentorship application
      await addDoc(collection(db, "mentorshipApplications"), formData);
      alert("Application submitted successfully!");

      // Reset the form data
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        campus: "Bedfordview",
        message: "",
        senderId: auth.currentUser?.uid || "",
        receiverId: receiverId || "",
      });

      // Navigate to the chat page with the chat ID
      navigate(`/chat/${chatDocRef.id}`);

    } catch (err) {
      console.error("Error submitting application: ", err);
      setError("Failed to submit application. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.form}>
      <img className={styles.headerIcon} alt="" src="/header@2x.png" />
      <form className={styles.gap} onSubmit={handleSubmit}>
        <div className={styles.flex}>
          <div className={styles.inputGroup}>
            <label htmlFor="firstname">First Name</label>
            <input
              className={styles.input}
              name="firstname"
              type="text"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="Full Name"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="lastname">Last Name</label>
            <input
              className={styles.input}
              name="lastname"
              type="text"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            className={styles.input}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="campus">Campus</label>
          <select
            name="campus"
            className={styles.input}
            value={formData.campus}
            onChange={handleChange}
          >
            <option>Bedfordview</option>
            <option>Bloemfontein</option>
            <option>Cape Town Mowbray</option>
            <option>Cape Town Tyger Valley</option>
            <option>Durban</option>
            <option>East London</option>
            <option>Mbombela</option>
            <option>Midrand</option>
            <option>Nelson Mandela Bay</option>
            <option>Potchefstroom</option>
            <option>Pretoria</option>
            <option>Vanderbijlpark</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            className={styles.input}
            rows={10}
            value={formData.message}
            onChange={handleChange}
            placeholder="Share your interests and goals..."
          />
        </div>

        <section className={styles.cv}>
          <div className={styles.input}>
            <div className={styles.uploadHere}>Upload Here</div>
            <img className={styles.icon} alt="" src="/icon@2x.png" />
            <div className={styles.cvoptional}>CV(optional)</div>
          </div>
        </section>

        <button className={styles.button} type="submit" disabled={loading}>
          {loading ? "Applying..." : "Apply Now"}
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default Form;
