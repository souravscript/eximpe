import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const navigate = useNavigate();

  const loginHandler = () => {
    let valid = true;

    if (username.trim() === "") {
      setUsernameError("Username is required.");
      valid = false;
    } else {
      setUsernameError(null);
    }

    if (password.trim() === "") {
      setPasswordError("Password is required.");
      valid = false;
    } else {
      setPasswordError(null);
    }

    if (!valid) return;

    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      setUsernameError("Invalid username or password.");
      setPasswordError("Invalid username or password.");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="border p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <label className="mb-2">Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          type="text"
          className="w-full px-4 py-2 mb-2 border rounded-md focus:outline-none"
        />
        {usernameError && (
          <p className="text-red-500 text-sm mb-3">{usernameError}</p>
        )}

        <label className="block mb-2">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          type="password"
          className="w-full px-4 py-2 mb-2 border rounded-md"
        />
        {passwordError && (
          <p className="text-red-500 text-sm mb-4">{passwordError}</p>
        )}

        <button
          onClick={loginHandler}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
