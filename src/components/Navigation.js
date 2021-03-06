import React from "react"
import { Nav, Navbar } from "react-bootstrap"
// import './Nav.css';

function Navigation() {
    return (
        <nav>
            <Navbar className="justify-content-center" expand="md" fixed="top" activeKey="/home">
                <Nav.Link href="#home" className="nav-home">Home</Nav.Link>
                <Nav.Link href="#about" className="nav-items">About</Nav.Link>
                <Nav.Link href="#contact" className="nav-items">Contact</Nav.Link>
                <Nav.Link href="#resume" className="nav-items">Resume</Nav.Link>
                <Nav.Link href="#portfolio" className="nav-items">Portfolio</Nav.Link>
            </Navbar>
        </nav>
    )
}

export default Navigation;
