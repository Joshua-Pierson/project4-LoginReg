import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function NavBar({ user, setUser }) {
const handleLogout = () => {
  console.log("User logged out");
  localStorage.removeItem("user_name");
  setUser("Guest");
  window.location.href = "/login";
};

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">AutoWise</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/category">Category</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text>
          <span className="text-white">Welcome, {user}</span>
          <button className="btn btn-outline-light ms-2" onClick={handleLogout}>Logout</button>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}