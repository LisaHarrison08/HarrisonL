import React from "react"
// import Fade from "react-reveal";
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { Container, Row } from "react-bootstrap"
import video from "../assets/video/aurora.mp4"


const Header = () => {
    const styles = useSpring({
        from: { transform: "translateY(-100%)" },
        to: [
            { transform: "translateY(0%)" },
            { transform: "translateY(50%)" },
        ],
        config: { duration: "1000" },
        loop: false
    })

    return (
        <header id="home">
            <Container fluid>
                <Row>
                    <video autoPlay loop muted>
                        <source src={video} type="video/mp4" />
                    </video>
                    <animated.div style={styles} className="banner-text">
                        <h1>Lisa Harrison</h1>
                        <h3>Full Stack Web Developer <br></br> Javascript | React | React Native<br></br>  Node.js | Express | MongoDB | PostgreSQL</h3>

                        < hr /> {/* <horizontal rule> used to seperate content */}

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
                    </animated.div>
                </Row>
            </Container>
        </header>
    )
}

export default Header;

