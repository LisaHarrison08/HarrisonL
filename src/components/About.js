import React from 'react';
import Fade from "react-reveal";
import profilePic from "../assets/favicon.png"
import { Button, Container, Col, Row } from 'react-bootstrap'
import './About.css';

function About() {
    return (
        <section id="about">
            <Fade duration={1000}>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <img
                                className="profile-pic"
                                src={profilePic}
                                alt="Lisa Profile Pic"
                            />
                        </Col>
                        <Col xs={12} md={8}>
                            <div className="about-me">
                                <h2>About</h2>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>Lisa Harrison</span>
                                    <br />
                                    <span>EMAIL</span>
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className="download">
                                <Button href="" id="resume" variant="custom" size="sm" >
                                    Resume Download
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fade>
        </section >
    );
}

export default About;