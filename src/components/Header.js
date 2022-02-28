import React from 'react';
import ParticlesBg from 'particles-bg';
import './Header.css';
import Fade from "react-reveal";

function Header() {
    return (
        <header className="site-header">
            <ParticlesBg type="lines" bg={true} />

            <div className="row banner">
                <div className="banner-text">
                    <Fade bottom>
                        <h1>Lisa Harrison</h1>
                    </Fade>
                    <Fade bottom duration={1000}>
                        <h3>Full Stack Web Developer</h3>
                    </Fade>
                    < hr /> {/* <horizontal rule> used to seperate content */}
                    <Fade bottom duration={2000}>
                    
                        <button style={{marginRight:"20px"}}>
                            <a href="" className="btn project-btn">
                                <i className="fa fa-book fa-2x"></i>Projects
                            </a>
                        </button>
                        
                        <button>
                            <a href="" className="btn github-btn">
                                <i className="fas fa-github fa-2x"></i>Github
                            </a>
                        </button>
                    </Fade>
                </div>
            </div>
        </header>
    )
}

export default Header;