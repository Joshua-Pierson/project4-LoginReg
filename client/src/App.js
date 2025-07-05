import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/Navbar" // Ensure this path is correct based on your project structure
import HomePage from "./Pages/Homepage"; // Ensure this path is correct based on your project structure
import LoginPage from "./Pages/loginpage"; // Ensure this path is correct based on your project structure
import RegisterPage from "./Pages/Registerpage"; // Ensure this path is correct based on your project structure
import CategoryPage from "./Pages/categorypage"; // Ensure this path is correct based on your project structure
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import "./App.css";


function App() {
  const [user, setUser] = useState("Guest");
  return (
    <div>
      
      <Router>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
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

