import React from "react";

import "./style.css";

function About() {

    return (
        <div className="viewThree" id="about">
            <div className="row">
                <div className="col-md about-left">
                </div>
                <div className="col-md">
                    <h3 className="viewTitle" id="aboutTitle">ABOUT</h3>
                    <div className="row align-self-center bioText">
                        <p className="bio">I've previously worked as a videographer, photographer, and graphic designer.</p>
                        <p className="bio">Now, I'm utilizing my artistic experience and a life-long passion for anything computer-related in a whole new creative realm, <span class="h2-name">Full Stack Web Development!</span></p>
                        <p className="bio"><span className="skillHeader">Technical skills include:</span>
                            <ul className=" skillList text-center">
                                <li className="skill">HTML</li>
                                <li className="skill">CSS</li>
                                <li className="skill">JavaScript</li>
                                <li className="skill">React.js</li>
                                <li className="skill">Node.js</li>
                                <li className="skill">Express.js</li>
                                <li className="skill">MySQL</li>
                                <li className="skill">MongoDB</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
