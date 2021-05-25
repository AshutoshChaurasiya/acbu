import React from "react";
import { Button, Navbar, Nav } from "react-bootstrap";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#deets">More details</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                Good stuff
            </Nav.Link>
        </Nav>
    </Navbar.Collapse>
</Navbar>
  );
}
