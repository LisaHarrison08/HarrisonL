import React from 'react';
import Fade from "react-reveal";
import profilePic from "../assets/favicon.png"
import './About.css';

function About() {
    return (
        <section id="about">
            <Fade duration={1000}>
                <div className="row">
                    <div className="profile-pic">
                        <img
                            className="profile-pic"
                            src={profilePic}
                            alt="Lisa Profile Pic"
                        />
                    </div>
                    <div className="about-me">
                        <h2>About Me</h2>

                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        <div className="row">
                            <div className="contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>Lisa Harrison</span>
                                    <br />
                                    <span>EMAIL</span>
                                </p>
                            </div>
                            <div className="download">
                                <button style={{ marginRight: "20px" }}>
                                    <a href="" className="btn resume-btn">
                                        <i className="fa fa-download fa-2x"></i>Download
                                    </a>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
}

export default About;