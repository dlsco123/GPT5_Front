import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar bg="light" expand="lg" style={{ padding: '0.5rem 1rem' }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              src="./gpt_logo.png"
              style={{
                width: '6vw',
                marginRight: '1rem',
              }}
              alt="GPT Logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/gyms" className="nav-link" style={{ marginLeft: '5vw' }}>
              GYMS
            </Nav.Link>
            <Nav.Link as={Link} to="/charge" className="nav-link" style={{ marginLeft: '5vw' }}>
              CHARGE
            </Nav.Link>
            <Nav.Link as={Link} to="/makeGroup" className="nav-link" style={{ marginLeft: '5vw' }}>
              MAKEGROUP
            </Nav.Link>
            <Nav.Link as={Link} to="/stretching" className="nav-link" style={{ marginLeft: '5vw' }}>
              STRETCHING
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto" style={{ marginTop: '-6rem' }}>
            <Nav.Link as={Link} to="/mypage" className="nav-link" style={{ fontSize: '0.9rem' }}>
              MYPAGE
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="nav-link" style={{ fontSize: '0.9rem' }}>
              LOGIN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;