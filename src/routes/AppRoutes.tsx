
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import AddUser from '../pages/AddUser';
import Login from '../pages/Login';
import Protected from '../components/auth/Protected';


const AppRoutes = () => {
 const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return (
   <Routes>
     <Route path="/" element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />} />
     <Route path="/login" element={<Login />} />
     <Route path="/dashboard" element={<Protected><Dashboard /></Protected>} />
     <Route path="/add-user" element={<Protected><AddUser /></Protected>} />
     {/* Fallback route for any unmatched paths */}
     <Route path="*" element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />} />
   </Routes>
 );
};


export default AppRoutes;