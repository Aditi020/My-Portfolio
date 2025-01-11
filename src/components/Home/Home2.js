import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Avatar.png";
import Tilt from "react-parallax-tilt";
import BottomGirl from "../../Assets/BottomGirl.png";
import Particle from "../Particle";
import {
    AiFillGithub,
    AiOutlineTwitter,
    // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Particle />
            <Container>
                <Row >
                    <Col md={8} className="home-about-description" style={{ marginTop: "-3%" }}>
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="red"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I fell in love with programming and I have at least learnt
                            something, I think… 🤷‍♂️
                            <br />
                            <br />I am fluent in classics like
                            <i>
                                <b className="red"> C++, Javascript . </b>
                            </i>
                            <br />
                            <br />
                            My field of Interest's are building new &nbsp;
                            <i>
                                <b className="red" color=" #ba3547">Front-end Websites </b> and
                                also in areas related to{" "}
                                <b className="red">
                                    DevOps.
                                </b>
                            </i>
                            <br />
                            <br />
                            Whenever possible, I also apply my passion for developing products
                            with
                            <b className="red"> Node.js</b> and
                            <i>
                                <b className="red">
                                    {" "}
                                    Modern Javascript Library and Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="red"> React.js </b>
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar"  style={{marginTop:"-32%"}}/>
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        {/* <h1>DISCOVER ME AT</h1> */}
                        <img
                            src={BottomGirl}
                            alt="BottomGirl"
                            className="img-Girl"
                            style={{ maxHeight: "450px" , marginTop:"-3%"}}
                        />
                        <h1>DISCOVER ME AT</h1>
                        {/* <p>
                            Keep <span className="red">tabs </span>on me at
                        </p> */}
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/Aditi020"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://twitter.com/Aditi_K24"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/aditi-kumar02242/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            {/* <li className="social-icons">
                                <a
                                    href=""
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram />
                                </a>
                            </li> */}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
