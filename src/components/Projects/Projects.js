import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Zomato from "../../Assets/Projects/Zomato.png";
import editor from "../../Assets/Projects/codeEditor.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
    return (
        <Container fluid className="project-section" id="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="brown" >Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={bitsOfCode}
                            isBlog={false}
                            title="Bits-0f-C0de"
                            description="My personal blog page build with HTML5 and Tailwind Css which takes the content from hashnode  and renders it. Supports dark mode."
                        // ghLink=""
                        // demoLink=""
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={editor}
                            isBlog={false}
                            title="Editor.io"
                            description="An online code editor in which you can write and test your code of HTML, CSS and JavaScript."
                        // ghLink=""
                        // demoLink=""
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Zomato}
                            isBlog={false}
                            title="Zomato Website"
                            description="Clone of Zomato website made using only basic HTML, CSS, and JavaScript"
                        // ghLink=""
                        // demoLink=""
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
