import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; 
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/"); 
    } catch (error) {
      setError("Failed to register. Please try again.");
    }
  };

  return (
    <div className="space-y-4">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mr-6 mb-6 p-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mr-6 mb-6 p-2"
        />
        <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out hover:from-purple-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2">Register</button>
      </form>
    </div>
  );
};

export default Register;
