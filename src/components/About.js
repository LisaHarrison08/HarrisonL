import React from 'react';
import { Fade, Zoom } from "react-reveal";
import profilePic from "../assets/profilePic.jpg"
import { Button, Container, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import resume from "../assets/resume.pdf"

function About() {
    return (
        <section id="about">
            <Fade duration={1000}>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Zoom delay={1050}>
                                <img
                                    className="profile-pic"
                                    src={profilePic}
                                    style={{ borderRadius: '30%', border: '5px solid #ca5e15' }}
                                    alt="Lisa Profile Pic"
                                />
                            </Zoom>
                            <div className="contact-details">
                                {/* <h2>Contact Me:</h2> */}
                                <br></br>
                                <Button className="download" id="resume" href="https://drive.google.com/file/d/1oreeNGSOJgHf4kkl5-Ry4AJ4mYo8ebDC/view?usp=sharing" variant="custom" size="sm" >
                                    <FontAwesomeIcon icon={faArrowDown} size="xl" style={{ marginRight: "10px" }} /> Resume
                                </Button>

                                <Button className="contact-btn" href="mailto:lmharrison0810@gmail.com" variant="custom-btn" size="sm" >
                                    <FontAwesomeIcon icon={faEnvelope} size="xl" style={{ marginRight: "10%" }} /> Email
                                </Button>
                            </div>
                        </Col>
                        <Col>
                            <Fade bottom delay={600}>
                                <h2 className='about-me'>About</h2>
                            </Fade>
                            <Fade bottom delay={700}>
                                <p>
                                    Dedicated Learning & Development Professional with 10+ years of cumulative experience with a proven record of generating and building relationships, managing projects, creating effective presentations, and designing educational strategies, which led to the strengthening of Operations & Growth. Proven expertise in designing & implementing evidence-based instructional models and strategies to advance learning and achievements. Throughout my professional career I have mentored individuals to simplify and improve their processes to achieve mastery and success.
                                </p>
                            </Fade>
                            <br></br>
                            <Fade bottom delay={800}>
                                <p>Self-motivated web developer with considerable technical skills who possesses self-discipline & the ability to work with a minimum of supervision. A quick learner who can absorb new ideas, environment & technologies. My journey into tech started during the pandemic when I decided to pursue a course in Data Analytics and completed the Data Analytics and Visualization Certificate from<span style={{ color: "#ca5e15" }}> George Washington University</span>.  I have since continued to develop my skills and became a <span style={{ color: "#ca5e15" }}>Certified AWS Cloud Practitoner</span> and completed a Fullstack Web and Mobile Development with <span style={{ color: "#ca5e15" }}> Nucamp Coding Bootcamp</span>. I also have a Masters from <span style={{ color: "#ca5e15" }}>Gloucestershire University, UK</span> and a BA from <span style={{ color: "#ca5e15" }}>Cardiff University, UK</span>.
                                </p>
                            </Fade>
                            <br></br>
                            <Fade bottom delay={900}>
                                <p>
                                    Currently residing within the Northern Virginia area and open to new positions. If you would like to collaborate on a project or have an employment opportunity I would love to hear from you!
                                </p>
                            </Fade>
                        </Col>
                    </Row>
                </Container>
            </Fade>
        </section >
    );
}

export default About;