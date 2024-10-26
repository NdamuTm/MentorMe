import "firebase/firestore";
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';



export const fetchData = async (collectionName) => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return data;
  };

// Retrieve all mentors
export async function getMentors() {
    try {
        const mentors = [];
        const querySnapshot = await getDocs(collection(db, 'mentors'));
        querySnapshot.forEach(doc => {
            mentors.push({ id: doc.id, ...doc.data() });
        });
        return mentors;
    } catch (error) {
        console.error("Error fetching mentors:", error);
        return null;
    }
}

// Retrieve all students
export async function getStudents() {
    try {
        const students = [];
        const querySnapshot = await getDocs(collection(db, 'students'));
        querySnapshot.forEach(doc => {
            students.push({ id: doc.id, ...doc.data() });
        });
        return students;
    } catch (error) {
        console.error("Error fetching students:", error);
        return null;
    }
}

// Retrieve all mentorship applications
export async function getMentorshipApplications() {
    try {
        const applications = [];
        const querySnapshot = await getDocs(collection(db, 'mentorshipApplications'));
        querySnapshot.forEach(doc => {
            applications.push({ id: doc.id, ...doc.data() });
        });
        return applications;
    } catch (error) {
        console.error("Error fetching mentorship applications:", error);
        return null;
    }
}

// Retrieve all messages
export async function getMessages() {
    try {
        const messages = [];
        const querySnapshot = await getDocs(collection(db, 'messages'));
        querySnapshot.forEach(doc => {
            messages.push({ id: doc.id, ...doc.data() });
        });
        return messages;
    } catch (error) {
        console.error("Error fetching messages:", error);
        return null;
    }
}

// Retrieve all notifications
export async function getNotifications() {
    try {
        const notifications = [];
        const querySnapshot = await getDocs(collection(db, 'notifications'));
        querySnapshot.forEach(doc => {
            notifications.push({ id: doc.id, ...doc.data() });
        });
        return notifications;
    } catch (error) {
        console.error("Error fetching notifications:", error);
        return null;
    }
}



export const createMentor = async (mentorData) => {
  try {
    const docRef = doc(db, "mentors", mentorData.u_id);
    await setDoc(docRef, mentorData);
    console.log("Mentor created successfully");
    createUser(mentorData);
  } catch (error) {
    console.error("Error creating mentor:", error);
  }
};

export const createStudent = async (studentData) => {
  try {
    const docRef = doc(db, "students", studentData.u_id);
    await setDoc(docRef, studentData);
    console.log("Student created successfully");
    createUser(studentData);
  } catch (error) {
    console.error("Error creating student:", error);
  }
};
export const createUser = async (userData) => {
  try {
    const docRef = doc(db, "users", userData.u_id);
    await setDoc(docRef, userData);
    console.log("User created successfully");
  } catch (error) {
    console.error("Error creating student:", error);
  }
};
