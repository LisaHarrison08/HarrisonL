import React from "react"
import Fade from "react-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { Container, Row } from "react-bootstrap"
import video from "../assets/video/aurora.mp4"


const Header = () => {
    return (
        <header id="home">
            <Container fluid>
                <Row>
                    <video autoPlay loop muted>
                        <source src={video} type="video/mp4" />
                    </video>
                    <div className="banner-text">
                        <Fade bottom>
                            <h1>Lisa Harrison</h1>
                        </Fade>
                        <Fade bottom duration={1000}>
                            <h3>Full Stack Web Developer <br></br> Javascript | React | React Native<br></br>  Node.js | Express | MongoDB | PostgreSQL</h3>
                        </Fade>
                        <Fade>
                            
                        </Fade>
                        < hr /> {/* <horizontal rule> used to seperate content */}
                        <Fade bottom duration={3000}>
                            <button style={{ marginRight: "20px" }}>
                                <a href="#portfolio" className="btn project-btn">
                                    <FontAwesomeIcon icon={faCode} size="xl" style={{ marginRight: "10px" }} />Projects
                                </a>
                            </button>

                            <button>
                                <a href="https://github.com/" className="btn github-btn">
                                    <FontAwesomeIcon icon={faGithub} size="xl" style={{ marginRight: "10px" }} />Github
                                </a>
                            </button>
                        </Fade>
                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header;

