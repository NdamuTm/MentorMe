

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        
        navigate("/log-in");
      }
    });

    
    return () => unsubscribe();
  }, [navigate]);

  return <>{children}</>;
};

export default ProtectedRoute;
