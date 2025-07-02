import React from "react";

export default function Registerpage() {
  return (
    <div className="login-container">
      <h1>Register</h1>
      <form>
        <div>
          <label>User Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
