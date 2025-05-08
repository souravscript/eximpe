import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import AddUser from './pages/AddUser';
import Login from './pages/Login';
import Header from './components/layout/Header';
import Protected from './components/auth/Protected';


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
