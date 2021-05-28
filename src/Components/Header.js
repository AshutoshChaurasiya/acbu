import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
    <Navbar.Brand href="Header.js" className="brand-name"><h2>Ashutosh Cartoon Box Udhyog</h2></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse className="nav-position" id="responsive-navbar-nav">
      <Nav>
        <Nav.Link href="About.js">About Us</Nav.Link>
        <Nav.Link href="Products.js">Our Product</Nav.Link>
        <Nav.Link href="Gallery.js">Gallery</Nav.Link>
        <Nav.Link eventKey={2} href="Contact.js">Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
  );
}
