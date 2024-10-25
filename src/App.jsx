import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home";
import Form from "./pages/form";
import Splash from "./pages/splash";
import LogIn from "./pages/log-in";
import InCall from "./pages/in-call";
import MessagePerson from "./pages/message-person";
import Message from "./pages/message";
import Notification1 from "./pages/notification1";
import Applications from "./pages/applications";
import Profile from "./pages/profile";
import Search from "./pages/search";
import Menu from "./pages/menu";
import SignUp from "./pages/sign-up";

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
        title = "";
        metaDescription = "";
        break;
      case "/form":
        title = "";
        metaDescription = "";
        break;
      case "/splash":
        title = "";
        metaDescription = "";
        break;
      case "/log-in":
        title = "";
        metaDescription = "";
        break;
      case "/in-call":
        title = "";
        metaDescription = "";
        break;
      case "/message-person":
        title = "";
        metaDescription = "";
        break;
      case "/message":
        title = "";
        metaDescription = "";
        break;
      case "/notification":
        title = "";
        metaDescription = "";
        break;
      case "/applications":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
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
      <Route path="/message-person" element={<MessagePerson />} />
      <Route path="/message" element={<Message />} />
      <Route path="/notification" element={<Notification1 />} />
      <Route path="/applications" element={<Applications />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/search" element={<Search />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}
export default App;
