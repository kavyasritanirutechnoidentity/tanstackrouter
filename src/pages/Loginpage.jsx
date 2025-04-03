import { CheckCircle, Mail, Lock, Home, UserCircle } from "lucide-react";
import {
  useNavigate,
} from "@tanstack/react-router";
import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^\S+@\S+\.\S+$/.test(email) && email.includes("@");
  };

  const validatePassword = (password) => {
    return (
      password.length >= 8 &&
      password.length <= 16 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%&*]/.test(password)
    );
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Email must be in a valid format and contain @ first name last name");
      return;
    }
    if (!validatePassword(password)) {
      setError("Password must be 8-16 chars, include an uppercase letter, number, and special character");
      return;
    }
    // alert(`${email} is trying to login`);
    navigate({ to: "/dashboard" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-700 via-purple-500 to-pink-500 p-4">
      <div className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 flex items-center justify-center text-gray-800">
          <UserCircle className="mr-2" /> Login
        </h2>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-100 shadow-inner">
            <Mail className="mr-2 text-gray-500" />
            <input
              type="email"
              className="w-full bg-transparent focus:outline-none"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-100 shadow-inner">
            <Lock className="mr-2 text-gray-500" />
            <input
              type="password"
              className="w-full bg-transparent focus:outline-none"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition shadow-md flex items-center justify-center"
          >
            <CheckCircle className="mr-2" /> Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
