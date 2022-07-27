import React from "react";
import MyImage from "../../assets/hero-section-picture_02.png";
import "./style.css";

function About() {

    return (
        <div className="viewThree" id="about">
            <div className="row">
                <div className="col-md about-left">
                    <img src={MyImage} className="about-photo img-fluid" alt="Me"></img>
                </div>
                <div className="col-md">
                    <h3 className="viewTitle" id="aboutTitle">ABOUT</h3>
                    <div className="row align-self-center bioText">
                        <p className="bio">Here's some more about me:</p>
                        <p className="bio"><span className="skillHeader">Technical Skills:</span>
                            <ul className=" skillList text-center">
                                <li className="skill">HTML</li>
                                <li className="skill">CSS</li>
                                <li className="skill">JavaScript</li>
                                <li className="skill">Node.js</li>
                                <li className="skill">React.js</li>
                                <li className="skill">Express.js</li>
                            </ul>
                        </p>
                        <p className="bio">Hit me up!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
