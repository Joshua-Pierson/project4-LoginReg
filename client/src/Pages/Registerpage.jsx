import React, { useState } from "react";
import axios from "axios";

export default function Registerpage() {
  const [formData, setFormData] = useState({
    user_name: "",
    password_hash: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();  // Prevent form reload
    try {
      const response = await axios.post("http://localhost:5000/register", formData);
      console.log(response);
      // Optionally clear form or show a success message here
      setFormData({ user_name: "", password_hash: "" });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login-container">
      <h1>Register</h1>
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
        <button type="submit">Register</button>
        <div>
          <p>
            Already have an account? <a href="/login">Login here</a>
          </p>
        </div>
      </form>
    </div>
  );
}

