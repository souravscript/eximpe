import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import AddUser from './pages/AddUser';
import Login from './pages/Login';
import { type ReactNode, useEffect } from "react";
import Header from './components/layout/Header';

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

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Protected><Dashboard /></Protected>} />
        <Route path="/add-user" element={<Protected><AddUser /></Protected>} />
      </Routes>
    </>
  );
}

export default App;
