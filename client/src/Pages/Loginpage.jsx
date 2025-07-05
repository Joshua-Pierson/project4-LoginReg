import React, { useState } from "react";
import axios from "axios";

export default function Loginpage({ setUser }) {
  const [formData, setFormData] = useState({
    user_name: "",
    password_hash: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/login", formData);
      console.log("Login successful:", response.data);
      setUser(formData.user_name);

      // Optional: redirect after login
      window.location.href = "/category"; // Redirect to category page after successful login
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
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
        <button type="submit">Login</button>
        <div>
          <p>Don't have an account? <a href="/register">Register here</a></p>
        </div>
      </form>
    </div>
  );
}