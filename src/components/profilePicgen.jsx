import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import styles from "../pages/assets/css/profile.module.css";

export function UserProfilePic() {
  const [profilePicUrl, setProfilePicUrl] = useState(null);
  const [firstLetter, setFirstLetter] = useState("");

  useEffect(() => {

    if (auth.currentUser) {
      if (auth.currentUser.photoURL) {
        setProfilePicUrl(auth.currentUser.photoURL);
      } else if (auth.currentUser.email) {
        const firstChar = auth.currentUser.email.charAt(0).toUpperCase();
        setFirstLetter(firstChar);
      }
    }
  }, [auth.currentUser]);

  return (
    <>
      {profilePicUrl ? (
        <img className={styles.profileChild} alt="User profile" src={profilePicUrl} />
      ) : (
        <span className={styles.profileChildText}>{firstLetter}</span>
      )}
    </>
  );
}
