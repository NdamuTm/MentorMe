import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase";
import styles from "./assets/css/log-in.module.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state
  const [openDialog, setOpenDialog] = useState(false); // State for dialog visibility

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/user-not-found':
        return "No user found with this email. Please check your email or create an account.";
      case 'auth/wrong-password':
        return "The password is incorrect. Please try again.";
      case 'auth/invalid-email':
        return "The email address is not valid. Please enter a valid email.";
      case 'auth/user-disabled':
        return "This user account has been disabled. Please contact support.";
      case 'auth/operation-not-allowed':
        return "This operation is not allowed. Please contact support.";
      case 'auth/invalid-credential':
        return "Wrong email address or password";
      default:
        return "An unexpected error occurred. Please try again later. " + errorCode;
    }
  };

  const signIn = async () => {
    setLoading(true); // Set loading to true
    setError(""); // Clear previous errors
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = '/'; // Redirect to homepage after login
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
    <div className={styles.logIn}>
      <b className={styles.welcomeBack}>Welcome Back!</b>
      <div className={styles.fillYourDetails}>
        Fill your details or continue with Google
      </div>

      {/* Email Input Field */}
      <div className={styles.email}>
        <input
          className={styles.emailAddress}
          name="email"
          id="email"
          placeholder="Email Address"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <img className={styles.messageIcon} alt="" src="/message.svg" />
              {/* Google Sign-In */}
      <div className={styles.or}>
      <div className={styles.orContinueWith}>Or Continue with</div>
      <button className={styles.link} id="google-login" onClick={signInWithGoogle} disabled={loading}>
          <div className={styles.linkChild} />
          <img
            className={styles.icon}
            alt="Google Sign-In"
            src="/1421929991558096326-1.svg"
          />
        </button>
      </div>
      </div>

      {/* Password Input Field */}
      <div className={styles.password}>
        <img className={styles.unionIcon} alt="" src="/union.svg" />
        <img className={styles.lockIcon} alt="" src="/lockicon.svg" />
        <input
          className={styles.emailAddress}
          name="password"
          id="password"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Log In Button */}
      <button className={styles.link1} id="login" onClick={signIn} disabled={loading}>
        <div className={styles.linkItem} />
        {loading ? <CircularProgress size={24} /> : <div className={styles.logIn1}>LOG IN</div>}
      </button>

      



      {/* Forget Password Link */}
      <div className={styles.button}>
        <div className={styles.forgetPassword}>Forget Password?</div>
      </div>
      {/* Link to Sign Up */}
      <Link className={styles.link2} to="/sign-up">
        <div className={styles.newUserCreateContainer}>
          <span>{`New User? `}</span>
          <span className={styles.createAccount}>Create Account</span>
        </div>
      </Link>

      

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

export default LogIn;
