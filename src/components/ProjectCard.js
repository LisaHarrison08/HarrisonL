import React from 'react';
import Fade from "react-reveal";
import { Card, Col, Container, Row } from 'react-bootstrap'

function ProjectCard(props) {
    return (
        <Container id="portfolio">
            <Fade left duration={1000} distance="50px">
                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/projects/" + props.project.image} />
                            {/* <Card.Body>
                                <Card.Title>{props.project.title}</Card.Title>
                            </Card.Body> */}
                        </Card>
                    </Col>
                </Row>
            </Fade>
        </Container >
    )
}

export default ProjectCard;