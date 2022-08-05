import React from "react";
import "./style.css";
import Project from "../../components/Project";
import Box from '@mui/material/Box';
import Container from './Container';

function Projects() {

    return (
        <div className="viewTwo" id="projects">
            <div className="row">
                <div className="col-md">
                    <h3 className="viewTitle" id="projectsTitle">PROJECTS</h3>
                </div>
            </div>

            <Box paddingBottom={{ xs: 2, sm: 3, md: 4 }}>
                <Container paddingTop={'0 !important'}>
                    <Project />
                </Container>
            </Box>

        </div>
    )
}

export default Projects;