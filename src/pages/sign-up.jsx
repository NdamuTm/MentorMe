import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase";
import styles from "./assets/css/sign-up.module.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // State for name
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state
  const [openDialog, setOpenDialog] = useState(false); // State for dialog visibility

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return "This email address is already in use. Please use a different email.";
      case 'auth/weak-password':
        return "The password is too weak. Please choose a stronger password.";
      case 'auth/invalid-email':
        return "The email address is not valid. Please enter a valid email.";
      case 'auth/operation-not-allowed':
        return "This operation is not allowed. Please contact support.";
      default:
        return "An unexpected error occurred. Please try again later.";
    }
  };

  const signIn = async () => {
    setLoading(true); // Set loading to true
    setError(""); // Clear previous errors
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update user profile with name
      await updateProfile(userCredential.user, {
        displayName: name,
      });

      window.location.href = '/set-up'; // Redirect to homepage after signup
    } catch (err) {
      setError(getErrorMessage(err.code)); // Get user-friendly error message
      setOpenDialog(true); // Open dialog on error
      console.error(err);
    } finally {
      setLoading(false); // Set loading to false when done
    }
  };

  const signInWithGoogle = async () => {
    setLoading(true); // Set loading to true
    setError(""); // Clear previous errors
    try {
      await signInWithPopup(auth, googleProvider);
      window.location.href = '/'; // Redirect to homepage after Google sign-in
    } catch (err) {
      setError(getErrorMessage(err.code)); // Get user-friendly error message
      setOpenDialog(true); // Open dialog on error
      console.error(err);
    } finally {
      setLoading(false); // Set loading to false when done
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.signUp}>
      <div className={styles.registerAccount}>Register Account</div>
      <div className={styles.fillYourDetails}>
        Fill your details or continue with Google
      </div>

      {/* Name Input Field */}
      <div className={styles.name}>
        <div className={styles.emailChild} />
        <input
          className={styles.emailAddress}
          name="name"
          id="name"
          placeholder="User Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <img className={styles.unionIcon} alt="" src="/union1.svg" />
      </div>

      {/* Email Input Field */}
      <div className={styles.email}>
        <div className={styles.emailChild} />
        <input
          className={styles.emailAddress}
          name="email"
          id="email"
          placeholder="Email Address"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <img className={styles.messageIcon} alt="" src="/message1.svg" />
      </div>

      {/* Password Input Field */}
      <div className={styles.password}>
        <div className={styles.emailChild} />
        <img className={styles.eyeSlashIcon} alt="" src="/union.svg" />
        <img className={styles.lockIcon} alt="" src="/lockicon1.svg" />
        <input
          className={styles.emailAddress}
          name="password"
          id="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Sign Up Button */}
      <button className={styles.link} id="sign-up" onClick={signIn} disabled={loading}>
        <div className={styles.linkChild} />
        {loading ? <CircularProgress size={24} /> : <div className={styles.signUp1}>SIGN UP</div>}
      </button>

      {/* Link to Log In */}
      <Link className={styles.link1} to="/log-in">
        <div className={styles.alreadyHaveAccountContainer}>
          <span>{`Already Have Account? `}</span>
          <span className={styles.logIn}>Log In</span>
        </div>
      </Link>

      <Link className={styles.link2} to="/log-in">
        <img className={styles.chevronLeftIcon} alt="" src="/chevronleft.svg" />
      </Link>

      {/* Google Sign-In */}
      <div className={styles.or}>
        <div className={styles.orContinueWith}>Or Continue with</div>
        <div className={styles.orChild} />
        <div className={styles.orItem} />
        <div className={styles.social}>
          <button className={styles.link3} id="google-login" onClick={signInWithGoogle} disabled={loading}>
            <div className={styles.linkItem} />
            <img
              className={styles.icon}
              alt="Google Sign-In"
              src="/1421929991558096326-1.svg"
            />
          </button>
          <img className={styles.facebookIcon} alt="Facebook" src="/facebook2.svg" />
        </div>
      </div>

      {/* Dialog for Loading/Error */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          {loading ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress />
            </div>
          ) : (
            <div>{error}</div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SignUp;
