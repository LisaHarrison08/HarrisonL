import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import './Nav.css';

function Navigation() {
    return (
        <>
            <Navbar className="justify-content-center" fixed="top" activeKey="/home">
                    <Nav.Link href="/home" className="nav-home">Home</Nav.Link>
                    <Nav.Link href="#about" className="nav-items">About</Nav.Link>
                    <Nav.Link href="#resume" className="nav-items">Resume</Nav.Link>
                    <Nav.Link href="#portfolio" className="nav-items">Portfolio</Nav.Link>
                    <Nav.Link href="#contact" className="nav-items">Contact</Nav.Link>
            </Navbar>
        </>
    )
}

export default Navigation;

{/* <nav>
<Navbar bg="dark" variant="dark" fixed="top" >
    <Container>
        <Nav className="justify-content-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
        </Nav>
    </Container>
</Navbar>
</nav> */}