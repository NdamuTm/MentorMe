import { useState } from "react";
import { UserProfilePic } from "../components/profilePicgen.jsx";
import styles from "./assets/css/profile.module.css";

const Profile = () => {

  const [name, setName] = useState("Ndamulelo Rasendedza");
  const [email, setEmail] = useState("Ndamutm23@gmail.com");
  const [password, setPassword] = useState("");


  const handleSave = (event) => {
    event.preventDefault();
  
    if (!name || !email || (password && password.length < 6)) {
      alert("Please fill all fields correctly. Password must be at least 6 characters long.");
      return;
    }
   
    console.log("Profile saved:", { name, email, password });
    alert("Profile saved successfully!");
  };

  return (
    <div className={styles.profile}>
      <div>{UserProfilePic()}</div>
      <div className={styles.oval} />
      <img className={styles.fill244Icon} alt="" src="/fill-244.svg" />
      <div className={styles.ndamuleloRasendedza}>{name}</div>
      <div className={styles.editProfile}>Edit Profile</div>
      <img className={styles.headerIcon} alt="" src="/header3@2x.png" />

      <form onSubmit={handleSave}>
        <div className={styles.name}>
          <input
            className={styles.input}
            placeholder="Names"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label className={styles.yourEmail}>Name</label>
        </div>

        <div className={styles.emai}>
          <input
            className={styles.input}
            placeholder="Ndamutm23@gmail.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
          <label className={styles.yourEmail}>Your Email</label>
        </div>

        <div className={styles.password}>
          <input
            className={styles.input2}
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
          <label className={styles.yourEmail}>Password</label>
        </div>

        <button className={styles.button} type="submit">
          <div className={styles.buttonChild} />
          <div className={styles.saveNow}>Save Now</div>
        </button>
      </form>
    </div>
  );
};

export default Profile;
