import styles from "./assets/css/set-up.module.css";


//firstname, lastname, email, Campus, Course_Name, Year, Interest, Experience, Bio, Organization, Qualifications, Industry
//the save button's name = "Save_btn" and = "id Save_btn"


const SetUp = () => {
  return (
    <div className={styles.setup}>
      <img className={styles.headerIcon} alt="" src="/header3@2x.png" />
      <div className={styles.first}>
        {/* <input className={styles.firstChild} type="text" placeholder="First name"/> */}
        <input
          className={styles.firstChild}
          name="firstname"
          id="firstname"
          
          placeholder="First name"
          type="text"
        />
      </div>
      <div className={styles.emai}>
        <input className={styles.emaiChild} 
        type="text" 
        placeholder="example@gmail.com"
        name = "email"
        id="email"
        />
        <div className={styles.yourEmail}>Your Email</div>
      </div>
      <div className={styles.student} id="Campus_Div">
        <div className={styles.country}>
          {/* <input className={styles.countryChild} 
          type="text" 
          placeholder="NMB Campus"
          name = "email"
          id="email"
          
          /> */}
          <select className={styles.countryChild} name="Campus" id="Campus">
              <option value="">Select</option>
              <option value="bedfordview">Bedfordview</option>
              <option value="bloemfontein">Bloemfontein</option>
              <option value="cape-town-mowbray">Cape Town (Mowbray)</option>
              <option value="cape-town-tyger-valley">Cape Town (Tyger Valley)</option>
              <option value="durban">Durban (Umhlanga)</option>
              <option value="east-london">East London</option>
              <option value="midrand">Midrand</option>
              <option value="mbombela">Mbombela (Nelspruit)</option>
              <option value="potchefstroom">Potchefstroom</option>
              <option value="nelson-mandela-bay">Nelson Mandela Bay (Port Elizabeth)</option>
              <option value="pretoria">Pretoria</option>
              <option value="vanderbijlpark">Vanderbijlpark</option>
        </select>

          <div className={styles.campus} id="Course_Name_Div">Campus</div>
          {/* <img className={styles.buttonIcon} alt="" src="/button.svg" /> */}
        </div>
        <div className={styles.country1}>
          {/* <input className={styles.countryChild} type="text" placeholder="Bsc Software Engineering"/> */}
          <div className={styles.courseName}>Course Name</div>
          {/* <img className={styles.buttonIcon} alt="" src="/button.svg" /> */}

          <select name="Course_Name" id="Course_Name" class={styles.countryChild}>
              <option  label="Select" aria-label="Select">Select</option>
              <option value="Bachelor of Arts (Communication Science and English) - Campus Full Time">Bachelor of Arts (Communication Science and English) - Campus Full Time</option>
              <option value="Bachelor of Arts (Communication Science and English) - Online Part Time">Bachelor of Arts (Communication Science and English) - Online Part Time</option>
              <option value="Bachelor of Arts (Industrial Psychology and English Literature Studies) - Campus Full Time">Bachelor of Arts (Industrial Psychology and English Literature Studies) - Campus Full Time</option>
              <option value="Bachelor of Arts (Industrial Psychology and English Literature Studies) - Online Part Time">Bachelor of Arts (Industrial Psychology and English Literature Studies) - Online Part Time</option>
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
        <div className={styles.country2} id="Year_Div">
          {/* <input className={styles.countryChild} 
              type="text" 
              placeholder="Second Year Student"
              name="Year" 
              id="Year"
              
          /> */}
          <select className={styles.countryChild} name="Year" id="Year">
            <option value="">Select</option>
            <option value="1st Year">1st Year</option>
            <option value="2st Year">2st Year</option>
            <option value="3st Year">3st Year</option>
          </select>

          <div className={styles.year}>Year</div>
          {/* <img className={styles.buttonIcon} alt="" src="/button.svg" /> */}
        </div>
      </div>
      <div className={styles.country3}>
        <input className={styles.countryChild} 
            type="text" 
            placeholder="Web Dev" 
            name="Interest" 
            id="Interest"
            />
        <div className={styles.interest}>Interest</div>
        {/* <img className={styles.buttonIcon} alt="" src="/button.svg" /> */}
      </div>
      <div className={styles.mentor}>
        <div className={styles.country4} id="Experience_Div">
          {/* <input className={styles.countryChild} type="text" placeholder="5-8years"/> */}
          <div className={styles.experience} >Experience</div>
          {/* <img className={styles.buttonIcon} alt="" src="/button.svg" /> */}
          <select className={styles.countryChild} name="Experience" id="Experience">
              <option value="0-1 years">0-1 years</option>
              <option value="1-3 years">1-3 years</option>
              <option value="3-6 years">3-6 years</option>
              <option value="6+ years">6+ years</option>
          </select>
        </div>
        <div className={styles.country} id="Organization_Div">
          <input className={styles.countryChild} 
              type="text" 
              placeholder="Eduvos" 
              name="Organization" 
              id="Organization"
          />
          <div className={styles.organization} >Organization</div>
          {/* <img className={styles.buttonIcon} alt="" src="/button.svg" /> */}
        </div>
        <div className={styles.country6} id="Qualifications_Div">
          <input className={styles.countryChild} 
              type="text" 
              placeholder="Bsc Information Technology" 
              name="Qualifications" 
              id="Qualifications"
          />
          <div className={styles.courseName} >Qualifications</div>
          {/* <img className={styles.buttonIcon} alt="" src="/button.svg" /> */}
        </div>
        <div className={styles.country7} id="Industry_Div">
          <input className={styles.countryChild} 
              type="text" 
              placeholder="Teaching" 
              name="Industry" 
              id="Industry"
          />
          <div className={styles.industry}>Industry</div>
          {/* <img className={styles.buttonIcon} alt="" src="/button.svg" /> */}
        </div>
      </div>
      <section className={styles.message}>
        <div className={styles.input10}>
          <div className={styles.inputChild} />
          <textarea className={styles.input11} 
          name="Bio"
          id="Bio"
          type="text" 
          placeholder="I love being a part of the creative process and enjoy the challenge of making complicated concepts simple to understand. I specialize in User Experience and User Interface design."/>
        </div>
        <div className={styles.message1}>Bio</div>
      </section>
      <section className={styles.cv}>
        <div className={styles.input12}>
          <input className={styles.inputItem} type="text" />
          <div className={styles.uploadHereParent}>
            <div className={styles.uploadHere}>Upload Here</div>
            {/* <img className={styles.icon} alt="" src="/icon1@2x.png" /> */}
          </div>
        </div>

        <input type="file" accept="image/*"></input>
        <div className={styles.profilePicture}>
          Profile Picture
          
          </div>
      </section>
      <div className={styles.lastName}>
        <div className={styles.lastNameChild}/>
        <input
          className={styles.lastNameChild}
          name="lastname"
          id="lastname"
          
          placeholder="Last name"
          type="text"
        />
      </div>
      <button className={styles.button} name="Save_btn" id="Save_btn">
        <div className={styles.button1}>
          <div className={styles.buttonChild} />
        </div>
        <div className={styles.save}>Save</div>
      </button>
      <div className={styles.div}>
        {/* <img className={styles.switchOffIcon} alt="" src="/switchoff.svg" />
        <div className={styles.mentorOrStudent}>Mentor or Student</div> */}


        <form className={styles.mentorOrStudent}>
          <label className={styles.radio_label_1}>
              Student
              <input type="radio" name="Student_rd" id="Student_rd" value="Student" onClick={HideMentor}/>
          </label>

          <label className={styles.radio_label_2}>
              Mentor
              <input type="radio" name="Mentor_rd" id="Mentor_rd" value="Mentor" onClick={HideStudent}/>
          </label>
        </form>
        
      </div>
    </div>
  );
};


function HideMentor(){
    //hide divs
    document.getElementById("Organization_Div").style.display = "none"
    document.getElementById("Industry_Div").style.display = "none"
    document.getElementById("Qualifications_Div").style.display = "none"
    document.getElementById("Experience_Div").style.display = "none"
    //uncheck radio button
    document.getElementById("Mentor_rd").checked = false;

    showStudent()//show student options
}
function showMentor(){
  document.getElementById("Organization_Div").style.display = "Block"
  document.getElementById("Industry_Div").style.display = "Block"
  document.getElementById("Qualifications_Div").style.display = "Block"
  document.getElementById("Experience_Div").style.display = "Block"
  //uncheck radio button
  document.getElementById("Mentor_rd").checked = true;

}

function HideStudent(){
  //hide divsz
  document.getElementById("Campus_Div").style.display = "none"
  document.getElementById("Year_Div").style.display = "none"
  //uncheck radio button
  document.getElementById("Student_rd").checked = false;

  showMentor()//show mentor options
}

function showStudent(){
  document.getElementById("Campus_Div").style.display = "Block"
  document.getElementById("Year_Div").style.display = "Block"
  //uncheck radio button
  document.getElementById("Student_rd").checked = true;
}

//firstname, lastname, email, Campus, Course_Name, Year, Interest, Experience, Bio, Organization, Qualifications, Industry


export default SetUp;
