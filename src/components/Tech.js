import React, { useState } from "react"
import TechCard from './TechCard'
import { Card, CardGroup, Container, Col, Row } from 'react-bootstrap'
import './Tech.css';
import Techdata from "../Techdata"

function Tech() {
    const [items, setItems] = useState(Techdata)

    return (
        <section id="tech">
            <Container className="tech--content">
                <Row>
                    <Col md={4}>
                        <h1>Tech I use:</h1>
                        <hr />
                    </Col>
                    <Col md={8}>
                        <p>There are so many choices, and I'm always interested in playing around with new technologies, but these are the ones that I delve into regularly</p>
                    </Col>
                </Row>

                <Row xs={1} md={4}>
                    {items.map((project, index) => (
                        <TechCard project={project} key={project.id} />
                    ))}
                </Row>

            </Container>
        </section>
    )

}

export default Tech;