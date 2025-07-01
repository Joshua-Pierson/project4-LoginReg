import React, {useState} from 'react';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/Navbar" // Ensure this path is correct based on your project structure
import HomePage from "./Pages/Homepage"; // Ensure this path is correct based on your project structure
import LoginPage from "./Pages/loginpage"; // Ensure this path is correct based on your project
import RegisterPage from "./Pages/registerpage"; // Ensure this path is correct based on your project structure
import CategoryPage from "./Pages/categorypage"; // Ensure this path is correct based on your project
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/category" element={<CategoryPage />} />
          {/* Add more routes as needed */}
          
          {/* Redirect any unknown routes to the home page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

