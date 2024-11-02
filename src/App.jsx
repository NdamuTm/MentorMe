import { useEffect } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import ProtectedRoute from "/src/components/ProtectedRoute.jsx";
import { auth } from "/src/config/firebase.js";
import Applications from "/src/pages/applications.jsx";
import Form from "/src/pages/form.jsx";
import Home from "/src/pages/home.jsx";
import InCall from "/src/pages/in-call.jsx";
import LogIn from "/src/pages/log-in.jsx";
import Menu from "/src/pages/menu.jsx";
import MessagePerson from "/src/pages/message-person.jsx";
import Message from "/src/pages/message.jsx";
import Notification1 from "/src/pages/notification1.jsx";
import Profile from "/src/pages/profile.jsx";
import Search from "/src/pages/search.jsx";
import SetUp from "/src/pages/set-up.jsx";
import SignUp from "/src/pages/sign-up.jsx";
import Splash from "/src/pages/splash.jsx";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home";
        metaDescription = "Welcome to the home page.";
        break;

      case "/log-in":
        title = "Log In";
        metaDescription = "Log in to access your account.";
        break;
      case "/profile":
        title = "Profile";
        metaDescription = "Your profile information.";
        break;
      case "/search":
        title = "";
        metaDescription = "";
        break;
      case "/menu":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/set-up":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/splash" element={<Splash />} />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/in-call" element={<InCall />} />
      <Route path="/chat" element={<MessagePerson />} />
      <Route path="/message" element={<Message />} />
      <Route path="/notification" element={<Notification1 />} />
      <Route path="/applications" element={<Applications />} />
      <Route path="/profile" element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      } />
      <Route path="/search" element={<Search />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/set-up" element={<SetUp />} />
      <Route path="/" element={<Form />} />
      <Route
        path="/chat/:receiverId"
        element={<MessagePerson senderId={auth.currentUser?.uid} />}
      />
    </Routes>
  );
}

export default App;