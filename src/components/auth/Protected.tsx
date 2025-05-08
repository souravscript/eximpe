import { useEffect } from "react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";


interface ProtectedProps {
 children: ReactNode;
}


const Protected = ({ children }: ProtectedProps) => {
 const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
 const navigate = useNavigate();


 useEffect(() => {
   if (!isLoggedIn) {
     navigate("/login");
   }
 }, [isLoggedIn, navigate]);


 return isLoggedIn ? <>{children}</> : null;
};


export default Protected;