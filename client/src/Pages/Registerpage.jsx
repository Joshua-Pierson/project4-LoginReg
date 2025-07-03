import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Registerpage() {
    const [formData, setFormData] = useState ({
    user_name: "",
    password_hash: ""
  })

  function handleChange (event) {
    const {name, value} = event.target
    setFormData ({...formData, [name]: value})
  }

  async function handleSubmit (event) {
    try {
      const response = await axios.post ("http://localhost:4000/register", formData)
      console.log (response)
    }
    catch (error) {
      console.log (error)
    }
  }
  return (
    <div className="login-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Name:</label>
          <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password_hash" value={formData.password_hash} onChange={handleChange} />
        </div>
        <button type="submit">Register</button>
        <div>
          <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
      </form>
    </div>
  );
}
