import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Loginpage() {
  const [formData, setFormData] = useState ({
    user_name: "",
    password_hash: ""
  })

  function handleChange (event) {
    const {name, value} = event.target
    setFormData ({...formData, [name]: value})
  }

  async function handleSubmit (event) {
    event.preventDefault()
    console.log ("step 1")
    try {
      console.log ("step 2")
      const response = await axios.post ("http://localhost:4000/login", formData)
      console.log ("step 3")
      console.log (response.data)
    }
    catch (error) {
      console.log (error)
    }
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Name:</label>
          <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password_hash" value={formData.password_hash} onChange={handleChange} />
        </div>
        <button type="submit">Login</button>
        <div>
          <p>Don't have an account? <a href="/register">Register here</a></p>
        </div>
      </form>
    </div>
  );
}
