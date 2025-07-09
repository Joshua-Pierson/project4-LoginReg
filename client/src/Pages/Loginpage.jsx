import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // if using react-router

export default function Loginpage({ setUser }) {
  const [formData, setFormData] = useState({ user_name: "", password_hash: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // for client side routing

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", formData);
      setUser(formData.user_name);
      localStorage.setItem("user_name", formData.user_name);
      setError(null);
      navigate("/category"); // smooth navigation without reload
    } catch (err) {
      setError(err.response?.data || "Login failed");
    }
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Name:</label>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password_hash"
            value={formData.password_hash}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Login</button>
        <div>
          <p>
            Don't have an account? <a href="/register">Register here</a>
          </p>
        </div>
      </form>
    </div>
  );
}
