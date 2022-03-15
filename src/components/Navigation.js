import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import './Nav.css';

function Navigation() {
    return (
        <nav>
            <Navbar bg="dark" variant="dark" fixed="top" >
                <Container>
                    <Nav className="item-links">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#resume">Resume</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </nav>
    )
}

export default Navigation;
