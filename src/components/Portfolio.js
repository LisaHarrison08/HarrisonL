import React from "react"
import Fade from "react-reveal";
import projectPic from "../assets/projectLoading2.png"
import { Card, CardGroup, Container, Col, Row } from 'react-bootstrap'
import './Portfolio.css';
// import data from "./data"

function Portfolio() {
    
    return (
        <Container id="portfolio">
            <h1>CHECK OUT SOME OF MY WORK.</h1>
            <Fade left duration={1000} distance="50px">
                <Row xs={1} md={4} className="g-4">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={projectPic} />
                                <Card.Body>
                                    <Card.Title>Project title</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Fade>
        </Container>
    )
}

export default Portfolio;