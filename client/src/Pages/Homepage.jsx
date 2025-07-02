import React from "react";

export default function Homepage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main landing page of the application.</p>
      <p>Here you can find various resources and links to other sections of the app.</p>
      <ul>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
        <li><a href="/category">Categories</a></li>
      </ul>
      <p>Feel free to explore the application!</p>
    </div>
  );
}
