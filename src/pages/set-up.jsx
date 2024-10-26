import {
  CircularProgress
} from "@mui/material";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState } from "react";
import { createMentor, createStudent } from "../services/dataService.js";
import styles from "./assets/css/set-up.module.css";


const SetUp = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

  const auth = getAuth();
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
      console.log("Current user:", currentUser.uid);
    } else {
      setCurrentUser(null);
      window.location.href ="/log-in";
    }
  });
  
  


  const [role, setRole] = useState("Student");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    bio: "",
    city: "",
    province: "",
    campus: "",
    courseName: "",
    year: "",
    interests: "",
    experience: "",
    bio: "",
    organization: "",
    qualifications: "",
    industry: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true); // Set loading to true
    setError(""); 
    const userData = {
      u_id: currentUser.uid,
      name: formData.firstname,
      surname: formData.lastname,
      city: formData.city,
      province: formData.province,
      bio: formData.bio,
      interests: formData.interests.split(","),

      ...(role === "Mentor"
        ? {
            company: formData.organization,
            experience: formData.experience,
            industry: formData.industry,
            qualifications: formData.qualifications.split(","),
          }
        : {
            school: formData.campus,
            major: formData.courseName,
            year: formData.year,


          }),
    };

    role === "Mentor" ? await createMentor(userData) : await createStudent(userData);
    return () => unsubscribe(); 
  };

  return (
    <div className={styles.setup}>

      <div className={styles.flex}>
      <div className={styles.inputGroup}>
        <label htmlFor="firstname">First Name</label>
      <input required className={styles.input} name="firstname" onChange={handleChange} value={formData.firstname} placeholder="First name" />

      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="lastname">Last Name</label>
      <input required className={styles.input} name="lastname" onChange={handleChange} value={formData.lastname} placeholder="Last name" />

      </div>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="email">Email</label>
      <input required className={styles.input} name="email" onChange={handleChange} value={formData.email} placeholder="Email" />

      </div>
      
      <div className={styles.flex}>
      <div className={styles.inputGroup}>
            <label htmlFor="city">City</label>

          <input required className={styles.input} name="city" onChange={handleChange} value={formData.city} placeholder="City" />
          </div>
      <div className={styles.inputGroup}>
            <label htmlFor="province">Province</label>

          <input required className={styles.input} name="province" onChange={handleChange} value={formData.province} placeholder="Province" />
          </div>
      </div>
      <div className={styles.inputGroup}>
            <label htmlFor="interests">Interests</label>
          <input required className={styles.input} name="interests" onChange={handleChange} value={formData.interests} placeholder="Interests" />
          </div>
      <div>
        <label>
          <input required type="radio" name="role" value="Student" checked={role === "Student"} onChange={handleRoleChange} />
          Student
        </label>
        <label>
          <input required type="radio" name="role" value="Mentor" checked={role === "Mentor"} onChange={handleRoleChange} />
          Mentor
        </label>
      </div>
      {role === "Student" ? (
        <>
          <div className={styles.inputGroup}>
            <label htmlFor="campus">Campus</label>
          <select className={styles.input} name="campus" onChange={handleChange} value={formData.campus}>
            <option value="">Select Campus</option>
            <option value="bedfordview">Bedfordview</option>
            {/* Add other campuses */}
          </select>

          </div>  
          <div className={styles.inputGroup}>
            <label htmlFor="courseName">Course Name</label>
          <input required className={styles.input} name="courseName" onChange={handleChange} value={formData.courseName} placeholder="Course Name" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="year">Year</label>
          <select className={styles.input} name="year" onChange={handleChange} value={formData.year} required>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
          </select>
          </div>
          
        </>
      ) : (
        <>
          <div className={styles.inputGroup}>
            <label htmlFor="organization">Organization</label>
            
          <input required className={styles.input} name="organization" onChange={handleChange} value={formData.organization} placeholder="Organization" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="experience">Experience</label>

          <input required className={styles.input} name="experience" onChange={handleChange} value={formData.experience} placeholder="Experience" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="industry">Industry</label>

          <input required className={styles.input} name="industry" onChange={handleChange} value={formData.industry} placeholder="Industry" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="qualifications">Qualifications</label>

          <input required className={styles.input} name="qualifications" onChange={handleChange} value={formData.qualifications} placeholder="Qualifications (comma-separated)" />
          </div>
          
          

        </>
        
      )}
      
          <div className={styles.inputGroup}>
            <label htmlFor="bio">Bio</label>

          <textarea className={styles.input} name="bio" onChange={handleChange} value={formData.bio} placeholder="Write about you..." />
          </div>


      <button className={styles.button} onClick={handleSubmit} disabled={loading}>
      {loading ? <CircularProgress size={24} /> : <div className={styles.logIn1}>Save</div>}
      </button>
    </div>
  );
};



export default SetUp;
