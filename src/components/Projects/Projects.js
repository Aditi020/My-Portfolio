import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Zomato from "../../Assets/Projects/Zomato.png";
import editor from "../../Assets/Projects/codeEditor.png";
import Blog from "../../Assets/Projects/Blog.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Wanderlust from "../../Assets/Projects/Wanderlust.png";


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
                            imgPath={Blog}
                            isBlog={false}
                            title="DevQuill"
                            description="My personal blog page build with HTML5, React JS and CSS which is completely responsive, where I document my experience and share my tech journey."
                            ghLink="https://github.com/Aditi020/DevQuill"
                        // demoLink=""
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Zomato}
                            isBlog={false}
                            title="Zomato Website"
                            description="A clone of Zomato website made using only basic HTML, CSS, and JavaScript. It is fully responsive in nature which means It can work perfectly on almost any device regardless of its dimensions and size."
                            ghLink="https://github.com/Aditi020/Zomato-Clone"
                        // demoLink=""
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Wanderlust}
                            isBlog={false}
                            title="Wanderlust"
                            description="It's a go-to travel booking site which is built using React Js library, HTML5 and CSS. It's a completely responsive website With the added convenience of sign-up authentication,"
                            ghLink="https://github.com/Aditi020/Wanderlust"
                        // demoLink=""
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Portfolio}
                            isBlog={false}
                            title="Portfolio"
                            description="It is a React based Portfolio Web Application which is completely responsive and user friendly. It's a website where you can explore my journey, and see how my skills can benefit your projects"
                            ghLink="https://github.com/Aditi020/My-Portfolio"
                        // demoLink=""
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={editor}
                            isBlog={false}
                            title="Editor.io"
                            description="Code, see, and learn in real-time. An online code editor in which provides a virtual coding playground where you can write and preview HTML, CSS, and JS code in real-time.."
                            ghLink="https://github.com/Aditi020/Live-Code-Editor"
                        // demoLink=""
                        />
                    </Col>

                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
