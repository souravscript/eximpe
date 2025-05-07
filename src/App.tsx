import { Route, Routes, useNavigate, Link, useLocation } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import AddUser from './pages/AddUser';
import Login from './pages/Login';
import { type ReactNode, useEffect } from "react";

interface Prop {
  children: ReactNode;
}

const Protected = ({ children }: Prop) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return isLoggedIn ? <>{children}</> : null;
};

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
        <Link to="/dashboard" className="text-black">Dashboard</Link>
        <Link to="/add-user" className="hover:underline">Add User</Link>
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

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Protected><Dashboard /></Protected>} />
        <Route path="/add-user" element={<Protected><AddUser /></Protected>} />
      </Routes>
    </>
  );
}

export default App;
