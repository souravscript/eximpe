import { useNavigate, Link, useLocation } from 'react-router-dom';


const Header = () => {
 const navigate = useNavigate();
 const location = useLocation();


 const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";


 const logoutHandler = () => {
   localStorage.removeItem("isLoggedIn");
   navigate("/login");
 };


 if (!isLoggedIn || location.pathname === "/login") return null;


 return (
   <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
     <div className="flex space-x-4">
       <Link to="/dashboard" className="text-white hover:underline">Dashboard</Link>
       <Link to="/add-user" className="text-white hover:underline">Add User</Link>
     </div>
     <button
       onClick={logoutHandler}
       className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
     >
       Logout
     </button>
   </nav>
 );
};


export default Header;