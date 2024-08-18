import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const MyNavbar = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: 'rgba(245, 245, 245)' }}>
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/timeline">Home</Nav.Link>
            <Nav.Link href="/timeline/nepalies-history">
              Nepalies History
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
