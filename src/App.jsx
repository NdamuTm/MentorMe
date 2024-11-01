import { useEffect } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { auth } from "./config/firebase.js";
import Applications from "./pages/applications";
import Form from "./pages/form";
import Home from "./pages/home";
import InCall from "./pages/in-call";
import LogIn from "./pages/log-in";
import Menu from "./pages/menu";
import Message from "./pages/message";
import MessagePerson from "./pages/message-person";
import Notification1 from "./pages/notification1";
import Profile from "./pages/profile";
import Search from "./pages/search";
import SetUp from "./pages/set-up";
import SignUp from "./pages/sign-up";
import Splash from "./pages/splash";

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