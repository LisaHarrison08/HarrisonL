import React from 'react';
import Fade from "react-reveal";
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function ProjectCard(props) {
    return (
        <Container id="portfolio">

            <Fade left duration={1000} distance="50px">
                <Row>
                    <Col>
                        <Card className="card--image">
                            {/* <a href={props.project.url} class="btn btn-secondary">View Website</a> */}
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/projects/" + props.project.image} />
                            <a className="btn-custom" href={props.project.url}>
                                <FontAwesomeIcon icon={faEye} size="3x" />
                            </a>

                            {/* <Button href={props.project.url} variant="custom">View</Button> */}
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