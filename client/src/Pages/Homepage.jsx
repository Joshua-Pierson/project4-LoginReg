import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";

export default function Homepage() {
  return (
    <div className="homepage py-5">
      <Container>
        <h1 className="text-center mb-4">Welcome to the AutoWise</h1>
        <p className="lead text-center mb-5">
         "Your wise guide to all things auto — explore resources and navigate with confidence."
        </p>

        <Row className="g-4 justify-content-center">
          <Col md={4}>
            <Card className="text-center shadow-sm h-100">
              <Card.Body>
                <Card.Title>Login</Card.Title>
                <Card.Text>"Sign in to continue where you left off."</Card.Text>
                <Button variant="primary" href="/login">Go to Login</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center shadow-sm h-100">
              <Card.Body>
                <Card.Title>Register</Card.Title>
                <Card.Text>"Create an account to get started."</Card.Text>
                <Button variant="success" href="/register">Register Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center shadow-sm h-100">
              <Card.Body>
                <Card.Title>Categories</Card.Title>
                <Card.Text>Browse all available categories and topics.</Card.Text>
                <Button variant="info" href="/category">View Categories</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <p className="text-center mt-5 text-muted">
          Feel free to explore the application!
        </p>
      </Container>
    </div>
  );
}
