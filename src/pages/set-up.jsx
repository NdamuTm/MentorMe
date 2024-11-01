import { CircularProgress } from "@mui/material";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { createMentor, createStudent } from "../services/dataService.js";
import styles from "./assets/css/set-up.module.css";

const SetUp = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [role, setRole] = useState("Student");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: currentUser?.email || "",  // Add this line
    bio: "",
    city: "",
    province: "",
    campus: "",
    courseName: "",
    year: "",
    interests: "",
    experience: "",
    organization: "",
    qualifications: "",
    industry: ""
  });
  

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setFormData(prevData => ({
          ...prevData,
          email: user.email  // Add this line
        }));
        console.log("Current user:", user.uid);
      } else {
        setCurrentUser(null);
        window.location.href = "/log-in";
      }
    });
    return unsubscribe;  // Cleanup subscription on component unmount
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
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

    try {
      role === "Mentor" ? await createMentor(userData) : await createStudent(userData);
      window.location.href = "/";
    } catch (err) {
      setError("Failed to save user data.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
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
        <input className={styles.input} name="email" value={currentUser?.email || ""} placeholder="Email" readOnly />
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
          <label htmlFor="courseName">Course Name</label>
            <select required className={styles.input} name="courseName" onChange={handleChange} value={formData.courseName}>
              <option value="">Select Course Name</option>
              <option value="Bachelor of Arts (Industrial Psychology and HR Management) - Campus Full Time">Bachelor of Arts (Industrial Psychology and HR Management) - Campus Full Time</option>
              <option value="Bachelor of Arts (Industrial Psychology and HR Management) - Online Part Time">Bachelor of Arts (Industrial Psychology and HR Management) - Online Part Time</option>
              <option value="Bachelor of Arts (Industrial Psychology and Linguistics) - Campus Full Time">Bachelor of Arts (Industrial Psychology and Linguistics) - Campus Full Time</option>
              <option value="Bachelor of Arts (Industrial Psychology and Linguistics) - Online Part Time">Bachelor of Arts (Industrial Psychology and Linguistics) - Online Part Time</option>
              <option value="Bachelor of Arts (Industrial Psychology and Political Science) - Campus Full Time">Bachelor of Arts (Industrial Psychology and Political Science) - Campus Full Time</option>
              <option value="Bachelor of Arts (Industrial Psychology and Political Science) - Online Part Time">Bachelor of Arts (Industrial Psychology and Political Science) - Online Part Time</option>
              <option value="Bachelor of Arts (Law and Economics) - Campus Full Time">Bachelor of Arts (Law and Economics) - Campus Full Time</option>
              <option value="Bachelor of Arts (Law and Economics) - Online Part Time">Bachelor of Arts (Law and Economics) - Online Part Time</option>
              <option value="Bachelor of Arts (Law and Politics) - Campus Full Time">Bachelor of Arts (Law and Politics) - Campus Full Time</option>
              <option value="Bachelor of Arts (Law and Politics) - Online Part Time">Bachelor of Arts (Law and Politics) - Online Part Time</option>
              <option value="Bachelor of Arts (Media Studies) - Campus Full Time">Bachelor of Arts (Media Studies) - Campus Full Time</option>
              <option value="Bachelor of Arts (Media Studies) - Online Part Time">Bachelor of Arts (Media Studies) - Online Part Time</option>
              <option value="Bachelor of Arts (Politics, Philosophy and Economics) - Campus Full Time">Bachelor of Arts (Politics, Philosophy and Economics) - Campus Full Time</option>
              <option value="Bachelor of Arts (Politics, Philosophy and Economics) - Online Part Time">Bachelor of Arts (Politics, Philosophy and Economics) - Online Part Time</option>
              <option value="Bachelor of Arts (Psychology and English Literature Studies) - Campus Full Time">Bachelor of Arts (Psychology and English Literature Studies) - Campus Full Time</option>
              <option value="Bachelor of Arts (Psychology and English Literature Studies) - Online Part Time">Bachelor of Arts (Psychology and English Literature Studies) - Online Part Time</option>
              <option value="Bachelor of Arts (Psychology and HR Management) - Campus Full Time">Bachelor of Arts (Psychology and HR Management) - Campus Full Time</option>
              <option value="Bachelor of Arts (Psychology and HR Management) - Online Part Time">Bachelor of Arts (Psychology and HR Management) - Online Part Time</option>
              <option value="Bachelor of Arts (Psychology and Linguistics) - Campus Full Time">Bachelor of Arts (Psychology and Linguistics) - Campus Full Time</option>
              <option value="Bachelor of Arts (Psychology and Linguistics) - Online Part Time">Bachelor of Arts (Psychology and Linguistics) - Online Part Time</option>
              <option value="Bachelor of Arts (Psychology and Political Science) - Campus Full Time">Bachelor of Arts (Psychology and Political Science) - Campus Full Time</option>
              <option value="Bachelor of Arts (Psychology and Political Science) - Online Part Time">Bachelor of Arts (Psychology and Political Science) - Online Part Time</option>
              <option value="Bachelor of Arts (Tourism) - Campus Full Time">Bachelor of Arts (Tourism) - Campus Full Time</option>
              <option value="Bachelor of Arts Access Programme - Campus Full Time">Bachelor of Arts Access Programme - Campus Full Time</option>
              <option value="Bachelor of Arts Access Programme - Online Full Time">Bachelor of Arts Access Programme - Online Full Time</option>
              <option value="Bachelor of Arts Access Programme - Online Part Time">Bachelor of Arts Access Programme - Online Part Time</option>
              <option value="Bachelor of Arts Honours in Graphic Design - Campus Full Time">Bachelor of Arts Honours in Graphic Design - Campus Full Time</option>
              <option value="Bachelor of Arts Honours in Graphic Design - Online Full Time">Bachelor of Arts Honours in Graphic Design - Online Full Time</option>
              <option value="Bachelor of Arts Honours in Graphic Design - Online Part Time">Bachelor of Arts Honours in Graphic Design - Online Part Time</option>
              <option value="Bachelor of Arts in Graphic Design - Campus Full Time">Bachelor of Arts in Graphic Design - Campus Full Time</option>
              <option value="Bachelor of Arts in Graphic Design - Online Part Time">Bachelor of Arts in Graphic Design - Online Part Time</option>
              <option value="Bachelor of Business Administration - Campus Full Time">Bachelor of Business Administration - Campus Full Time</option>
              <option value="Bachelor of Business Administration - Online Part Time">Bachelor of Business Administration - Online Part Time</option>
              <option value="Bachelor of Commerce - Campus Full Time">Bachelor of Commerce - Campus Full Time</option>
              <option value="Bachelor of Commerce - Distance Full Time">Bachelor of Commerce - Distance Full Time</option>
              <option value="Bachelor of Commerce - Distance Part Time">Bachelor of Commerce - Distance Part Time</option>
              <option value="Bachelor of Commerce - Online Part Time">Bachelor of Commerce - Online Part Time</option>
              <option value="Bachelor of Commerce Honours in Business Management - Campus Full Time">Bachelor of Commerce Honours in Business Management - Campus Full Time</option>
              <option value="Bachelor of Commerce Honours in Business Management - Online Full Time">Bachelor of Commerce Honours in Business Management - Online Full Time</option>
              <option value="Bachelor of Commerce Honours in Business Management - Online Part Time">Bachelor of Commerce Honours in Business Management - Online Part Time</option>
              <option value="Bachelor of Commerce in Accounting - Campus Full Time">Bachelor of Commerce in Accounting - Campus Full Time</option>
              <option value="Bachelor of Commerce in Accounting - Distance Full Time">Bachelor of Commerce in Accounting - Distance Full Time</option>
              <option value="Bachelor of Commerce in Accounting - Distance Part Time">Bachelor of Commerce in Accounting - Distance Part Time</option>
              <option value="Bachelor of Commerce in Accounting - Online Part Time">Bachelor of Commerce in Accounting - Online Part Time</option>
              <option value="Bachelor of Commerce in Human Resource Management - Campus Full Time">Bachelor of Commerce in Human Resource Management - Campus Full Time</option>
              <option value="Bachelor of Commerce in Human Resource Management - Online Part Time">Bachelor of Commerce in Human Resource Management - Online Part Time</option>
              <option value="Bachelor of Commerce in Law - Campus Full Time">Bachelor of Commerce in Law - Campus Full Time</option>
              <option value="Bachelor of Commerce in Law - Distance Part Time">Bachelor of Commerce in Law - Distance Part Time</option>
              <option value="Bachelor of Commerce in Law - Online Full Time">Bachelor of Commerce in Law - Online Full Time</option>
              <option value="Bachelor of Commerce in Law - Online Part Time">Bachelor of Commerce in Law - Online Part Time</option>
              <option value="Bachelor of Commerce in Marketing Management - Campus Full Time">Bachelor of Commerce in Marketing Management - Campus Full Time</option>
              <option value="Bachelor of Commerce in Marketing Management - Online Part Time">Bachelor of Commerce in Marketing Management - Online Part Time</option>
              <option value="Bachelor of Commerce in Tourism Management - Campus Full Time">Bachelor of Commerce in Tourism Management - Campus Full Time</option>
              <option value="Bachelor of Commerce in Tourism Management - Online Part Time">Bachelor of Commerce in Tourism Management - Online Part Time</option>
              <option value="Bachelor of Science Access Programme (Information Technology) - Campus Full Time">Bachelor of Science Access Programme (Information Technology) - Campus Full Time</option>
              <option value="Bachelor of Science Access Programme (Information Technology) - Online Full Time">Bachelor of Science Access Programme (Information Technology) - Online Full Time</option>
              <option value="Bachelor of Science Access Programme (Information Technology) - Online Part Time">Bachelor of Science Access Programme (Information Technology) - Online Part Time</option>
              <option value="Bachelor of Science Access Programme (Science) - Campus Full Time">Bachelor of Science Access Programme (Science) - Campus Full Time</option>
              <option value="Bachelor of Science Honours in Information Technology (Data Science) - Campus Full Time">Bachelor of Science Honours in Information Technology (Data Science) - Campus Full Time</option>
              <option value="Bachelor of Science Honours in Information Technology (Robotics) - Campus Full Time">Bachelor of Science Honours in Information Technology (Robotics) - Campus Full Time</option>
              <option value="Bachelor of Science Honours in Information Technology (Security and Network Engineering) - Campus Full Time">Bachelor of Science Honours in Information Technology (Security and Network Engineering) - Campus Full Time</option>
              <option value="Bachelor of Science Honours in Information Technology (Software Engineering) - Campus Full Time">Bachelor of Science Honours in Information Technology (Software Engineering) - Campus Full Time</option>
              <option value="Bachelor of Science in Biomedicine - Campus Full Time">Bachelor of Science in Biomedicine - Campus Full Time</option>
              <option value="Bachelor of Science in Biotechnology Management - Campus Full Time">Bachelor of Science in Biotechnology Management - Campus Full Time</option>
              <option value="Bachelor of Science in Computer Science - Campus Full Time">Bachelor of Science in Computer Science - Campus Full Time</option>
              <option value="Bachelor of Science in Computer Science - Online Part Time">Bachelor of Science in Computer Science - Online Part Time</option>
              <option value="Bachelor of Science in Information Technology (Data Science) - Campus Full Time">Bachelor of Science in Information Technology (Data Science) - Campus Full Time</option>
              <option value="Bachelor of Science in Information Technology (Data Science) - Online Full Time">Bachelor of Science in Information Technology (Data Science) - Online Full Time</option>
              <option value="Bachelor of Science in Information Technology (Data Science) - Online Part Time">Bachelor of Science in Information Technology (Data Science) - Online Part Time</option>
              <option value="Bachelor of Science in Information Technology (Robotics) - Campus Full Time">Bachelor of Science in Information Technology (Robotics) - Campus Full Time</option>
              <option value="Bachelor of Science in Information Technology (Robotics) - Online Full Time">Bachelor of Science in Information Technology (Robotics) - Online Full Time</option>
              <option value="Bachelor of Science in Information Technology (Robotics) - Online Part Time">Bachelor of Science in Information Technology (Robotics) - Online Part Time</option>
              <option value="Bachelor of Science in Information Technology (Security and Network Engineering) - Campus Full Time">Bachelor of Science in Information Technology (Security and Network Engineering) - Campus Full Time</option>
              <option value="Bachelor of Science in Information Technology (Security and Network Engineering) - Online Full Time">Bachelor of Science in Information Technology (Security and Network Engineering) - Online Full Time</option>
              <option value="Bachelor of Science in Information Technology (Security and Network Engineering) - Online Part Time">Bachelor of Science in Information Technology (Security and Network Engineering) - Online Part Time</option>
              <option value="Bachelor of Science in Information Technology (Software Engineering) - Campus Full Time">Bachelor of Science in Information Technology (Software Engineering) - Campus Full Time</option>
              <option value="Bachelor of Science in Information Technology (Software Engineering) - Online Full Time">Bachelor of Science in Information Technology (Software Engineering) - Online Full Time</option>
              <option value="Bachelor of Science in Information Technology (Software Engineering) - Online Part Time">Bachelor of Science in Information Technology (Software Engineering) - Online Part Time</option>
              <option value="Effective Directorship">Effective Directorship</option>
              <option value="Entrepreneurship">Entrepreneurship</option>
              <option value="Higher Certificate in Art and Design - Campus Full Time">Higher Certificate in Art and Design - Campus Full Time</option>
              <option value="Higher Certificate in Art and Design - Online Full Time">Higher Certificate in Art and Design - Online Full Time</option>
              <option value="Higher Certificate in Art and Design - Online Part Time">Higher Certificate in Art and Design - Online Part Time</option>
              <option value="Higher Certificate in Bioscience - Campus Full Time">Higher Certificate in Bioscience - Campus Full Time</option>
              <option value="Higher Certificate in Business Management - Campus Full Time">Higher Certificate in Business Management - Campus Full Time</option>
              <option value="Higher Certificate in Business Management - Distance Full Time">Higher Certificate in Business Management - Distance Full Time</option>
              <option value="Higher Certificate in Business Management - Distance Part Time">Higher Certificate in Business Management - Distance Part Time</option>
              <option value="Higher Certificate in Business Management - Online Full Time">Higher Certificate in Business Management - Online Full Time</option>
              <option value="Higher Certificate in Business Management - Online Part Time">Higher Certificate in Business Management - Online Part Time</option>
              <option value="Higher Certificate in Business Management (Digital Banking) - Campus Full Time">Higher Certificate in Business Management (Digital Banking) - Campus Full Time</option>
              <option value="Higher Certificate in Business Management (Digital Banking) - Online Full Time">Higher Certificate in Business Management (Digital Banking) - Online Full Time</option>
              <option value="Higher Certificate in Business Management (Employment Relations) - Campus Full Time">Higher Certificate in Business Management (Employment Relations) - Campus Full Time</option>
              <option value="Higher Certificate in Business Management (Employment Relations) - Online Full Time">Higher Certificate in Business Management (Employment Relations) - Online Full Time</option>
              <option value="Higher Certificate in Business Management (Funeral Management) - Distance Full Time">Higher Certificate in Business Management (Funeral Management) - Distance Full Time</option>
              <option value="Higher Certificate in Business Management (Funeral Management) - Distance Part Time">Higher Certificate in Business Management (Funeral Management) - Distance Part Time</option>
              <option value="Higher Certificate in Business Management (Funeral Management) - Online Full Time">Higher Certificate in Business Management (Funeral Management) - Online Full Time</option>
              <option value="Higher Certificate in Business Management (Funeral Management) - Online Part Time">Higher Certificate in Business Management (Funeral Management) - Online Part Time</option>
              <option value="Higher Certificate in Business Management (Tourism) - Campus Full Time">Higher Certificate in Business Management (Tourism) - Campus Full Time</option>
              <option value="Higher Certificate in Business Management (Tourism) - Distance Full Time">Higher Certificate in Business Management (Tourism) - Distance Full Time</option>
              <option value="Higher Certificate in Business Management (Tourism) - Distance Part Time">Higher Certificate in Business Management (Tourism) - Distance Part Time</option>
              <option value="Higher Certificate in Business Management (Tourism) - Online Full Time">Higher Certificate in Business Management (Tourism) - Online Full Time</option>
              <option value="Higher Certificate in Business Management (Tourism) - Online Part Time">Higher Certificate in Business Management (Tourism) - Online Part Time</option>
              <option value="Higher Certificate in Computing (Computer Systems Architecture) - Campus Full Time">Higher Certificate in Computing (Computer Systems Architecture) - Campus Full Time</option>
              <option value="Higher Certificate in Computing (Computer Systems Architecture) - Online Full Time">Higher Certificate in Computing (Computer Systems Architecture) - Online Full Time</option>
              <option value="Higher Certificate in Computing (Data Analytics) - Campus Full Time">Higher Certificate in Computing (Data Analytics) - Campus Full Time</option>
              <option value="Higher Certificate in Computing (Data Analytics) - Online Full Time">Higher Certificate in Computing (Data Analytics) - Online Full Time</option>
              <option value="Higher Certificate in Computing (GameCraft and Development) - Campus Full Time">Higher Certificate in Computing (GameCraft and Development) - Campus Full Time</option>
              <option value="Higher Certificate in Computing (GameCraft and Development) - Online Full Time">Higher Certificate in Computing (GameCraft and Development) - Online Full Time</option>
              <option value="Higher Certificate in Computing (Software Development Lifecycles) - Campus Full Time">Higher Certificate in Computing (Software Development Lifecycles) - Campus Full Time</option>
              <option value="Higher Certificate in Computing (Software Development Lifecycles) - Online Full Time">Higher Certificate in Computing (Software Development Lifecycles) - Online Full Time</option>
              <option value="Higher Certificate in Computing (Strategic Information Systems) - Campus Full Time">Higher Certificate in Computing (Strategic Information Systems) - Campus Full Time</option>
              <option value="Higher Certificate in Computing (Strategic Information Systems) - Online Full Time">Higher Certificate in Computing (Strategic Information Systems) - Online Full Time</option>
              <option value="Higher Certificate in Computing (Website Design and Development) - Campus Full Time">Higher Certificate in Computing (Website Design and Development) - Campus Full Time</option>
              <option value="Higher Certificate in Computing (Website Design and Development) - Online Full Time">Higher Certificate in Computing (Website Design and Development) - Online Full Time</option>
              <option value="Higher Certificate in Information Systems (Cloud Computing) - Campus Full Time">Higher Certificate in Information Systems (Cloud Computing) - Campus Full Time</option>
              <option value="Higher Certificate in Information Systems (Cloud Computing) - Campus Part Time">Higher Certificate in Information Systems (Cloud Computing) - Campus Part Time</option>
              <option value="Higher Certificate in Information Systems (Cyber Security) - Campus Full Time">Higher Certificate in Information Systems (Cyber Security) - Campus Full Time</option>
              <option value="Higher Certificate in Information Systems (Cyber Security) - Campus Part Time">Higher Certificate in Information Systems (Cyber Security) - Campus Part Time</option>
              <option value="Higher Certificate in Information Systems (Data Analytics) - Campus Full Time">Higher Certificate in Information Systems (Data Analytics) - Campus Full Time</option>
              <option value="Higher Certificate in Information Systems (Data Analytics) - Campus Part Time">Higher Certificate in Information Systems (Data Analytics) - Campus Part Time</option>
              <option value="Higher Certificate in Information Systems (Data Analytics) - Online Part Time">Higher Certificate in Information Systems (Data Analytics) - Online Part Time</option>
              <option value="Higher Certificate in Information Systems (Engineering) - Campus Full Time">Higher Certificate in Information Systems (Engineering) - Campus Full Time</option>
              <option value="Higher Certificate in Information Systems (Engineering) - Campus Part Time">Higher Certificate in Information Systems (Engineering) - Campus Part Time</option>
              <option value="Higher Certificate in Information Systems (Engineering) - Online Part Time">Higher Certificate in Information Systems (Engineering) - Online Part Time</option>
              <option value="Higher Certificate in Information Systems (Game Design and Development) - Campus Full Time">Higher Certificate in Information Systems (Game Design and Development) - Campus Full Time</option>
              <option value="Higher Certificate in Information Systems (Game Design and Development) - Campus Part Time">Higher Certificate in Information Systems (Game Design and Development) - Campus Part Time</option>
              <option value="Higher Certificate in Information Systems (Machine Learning) - Campus Full Time">Higher Certificate in Information Systems (Machine Learning) - Campus Full Time</option>
              <option value="Higher Certificate in Information Systems (Machine Learning) - Campus Part Time">Higher Certificate in Information Systems (Machine Learning) - Campus Part Time</option>
              <option value="Higher Certificate in Information Systems (Machine Learning) - Online Part Time">Higher Certificate in Information Systems (Machine Learning) - Online Part Time</option>
              <option value="Higher Certificate in Information Systems (Network Engineering) - Campus Full Time">Higher Certificate in Information Systems (Network Engineering) - Campus Full Time</option>
              <option value="Higher Certificate in Information Systems (Network Engineering) - Campus Part Time">Higher Certificate in Information Systems (Network Engineering) - Campus Part Time</option>
              <option value="Higher Certificate in Information Systems (Open Source) - Campus Full Time">Higher Certificate in Information Systems (Open Source) - Campus Full Time</option>
              <option value="Higher Certificate in Information Systems (Open Source) - Campus Part Time">Higher Certificate in Information Systems (Open Source) - Campus Part Time</option>
              <option value="Higher Certificate in Information Systems (Open Source) - Online Part Time">Higher Certificate in Information Systems (Open Source) - Online Part Time</option>
              <option value="Higher Certificate in Information Systems (Robotics and Intelligent Systems) - Campus Full Time">Higher Certificate in Information Systems (Robotics and Intelligent Systems) - Campus Full Time</option>
              <option value="Higher Certificate in Information Systems (Robotics and Intelligent Systems) - Campus Part Time">Higher Certificate in Information Systems (Robotics and Intelligent Systems) - Campus Part Time</option>
              <option value="Higher Certificate in Information Systems (Robotics and Intelligent Systems) - Online Part Time">Higher Certificate in Information Systems (Robotics and Intelligent Systems) - Online Part Time</option>
              <option value="Higher Certificate in Information Systems (Software Development) - Campus Full Time">Higher Certificate in Information Systems (Software Development) - Campus Full Time</option>
              <option value="Higher Certificate in Information Systems (Software Development) - Campus Part Time">Higher Certificate in Information Systems (Software Development) - Campus Part Time</option>
              <option value="Higher Certificate in Information Systems (Software Development) - Online Part Time">Higher Certificate in Information Systems (Software Development) - Online Part Time</option>
              <option value="Higher Certificate in Information Systems (Web Development) - Campus Full Time">Higher Certificate in Information Systems (Web Development) - Campus Full Time</option>
              <option value="Higher Certificate in Information Systems (Web Development) - Campus Part Time">Higher Certificate in Information Systems (Web Development) - Campus Part Time</option>
              <option value="Management Development Programme">Management Development Programme</option>
              <option value="Microsoft Artificial Intelligence (AI) Engineer - Online Part Time">Microsoft Artificial Intelligence (AI) Engineer - Online Part Time</option>
              <option value="National Certificate in Generic Management: General Management">National Certificate in Generic Management: General Management</option>
              <option value="Postgraduate Diploma in Accounting">Postgraduate Diploma in Accounting</option>
              <option value="Postgraduate Programme: Accounting Bridging to PGDA (CTA1)">Postgraduate Programme: Accounting Bridging to PGDA (CTA1)</option>
              <option value="Pre-degree Foundation Programme (Commerce And Law) - Campus Full Time">Pre-degree Foundation Programme (Commerce And Law) - Campus Full Time</option>
              <option value="Pre-degree Foundation Programme (Graphic Design) - Campus Full Time">Pre-degree Foundation Programme (Graphic Design) - Campus Full Time</option>
              <option value="Pre-degree Foundation Programme (Information Technology) - Campus Full Time">Pre-degree Foundation Programme (Information Technology) - Campus Full Time</option>
              <option value="Pre-degree Foundation Programme (Science) - Campus Full Time">Pre-degree Foundation Programme (Science) - Campus Full Time</option>
              <option value="Pre-degree Foundation Programme (Social Science) - Campus Full Time">Pre-degree Foundation Programme (Social Science) - Campus Full Time</option>
              <option value="Short Course in Leadership and Emotional Intelligence">Short Course in Leadership and Emotional Intelligence</option>
              <option value="Short Course in Managing Finances">Short Course in Managing Finances</option>
              <option value="Short Course in Managing Knowledge and Innovation">Short Course in Managing Knowledge and Innovation</option>
              <option value="Short Course in Managing Operations">Short Course in Managing Operations</option>
              <option value="Short Course in Managing Talent and the Workforce">Short Course in Managing Talent and the Workforce</option>
              <option value="Short Course in Managing Teams">Short Course in Managing Teams</option>
              <option value="Short Learning Programme in Advanced Project Management">Short Learning Programme in Advanced Project Management</option>
              <option value="Short Learning Programme in Basic Programming - Campus Full Time">Short Learning Programme in Basic Programming - Campus Full Time</option>
              <option value="Short Learning Programme in Basic Programming - Campus Part Time">Short Learning Programme in Basic Programming - Campus Part Time</option>
              <option value="Short Learning Programme in Basic Programming - Online Part Time">Short Learning Programme in Basic Programming - Online Part Time</option>
              <option value="Short Learning Programme in Technical Support - Campus Full Time">Short Learning Programme in Technical Support - Campus Full Time</option>
              <option value="Short Learning Programme in Technical Support - Campus Part Time">Short Learning Programme in Technical Support - Campus Part Time</option>
              <option value="Short Learning Programme in Web Design - Campus Full Time">Short Learning Programme in Web Design - Campus Full Time</option>
              <option value="Short Learning Programme in Web Design - Campus Part Time">Short Learning Programme in Web Design - Campus Part Time</option>
              
            </select>
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
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default SetUp;
