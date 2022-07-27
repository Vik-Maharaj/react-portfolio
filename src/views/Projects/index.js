import React from "react";
import "./style.css";
import ProjectList from "../../components/ProjectList";

function Projects() {
    return (
        <div className="viewTwo" id="projects">
            <div className="row">
                <div className="col-md">
                    <h3 className="viewTitle" id="projectsTitle">SELECTED PROJECTS</h3>
                </div>
            </div>
            <div className="row">
                <ProjectList />
            </div>
        </div>
    )
}

export default Projects;