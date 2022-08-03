import React from "react";
import "./style.css";
import Project2 from "../../components/Project2";
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
                    <Project2 />
                </Container>
            </Box>

        </div>
    )
}

export default Projects;