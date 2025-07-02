import React from "react";


export default function Loginpage() {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <div>
          <label>User Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" />
        </div>
        <button type="submit">Login</button>
        <div>
          <p>Don't have an account? <a href="/register">Register here</a></p>
        </div>
      </form>
    </div>
  );
}