import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import BackgroundAnimation from "./BackgroundAnimation";
import Devv from "../../Assets/Devv.svg";

function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Container className="home-content" style={{ position: "relative", overflow: "hidden" }}>
                    <BackgroundAnimation />
                    <Row className="d-flex align-items-center" style={{marginTop:"-5%"}}>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 5 }} className="heading">
                                Hi There!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                                    🙋‍♀️
                                </span>
                            </h1>

                            <h1 className="heading-name">
                                I'M
                                <strong className="main-name"> Aditi Kumar</strong>
                            </h1>

                            <div style={{ padding: 0, textAlign: "left" }}>
                                <Type />
                            </div>
                        </Col>

                        {/* This Column will contain the image */}
                        <Col md={5} style={{ paddingBottom: 20 }} className="text-center">
                            <img
                                src={Devv}
                                alt="home pic"
                                className="img-fluid"
                                style={{ maxHeight: "450px" , }}
                            />
                        </Col>
                    </Row>
                </Container>

                <Home2 />
            </Container>
        </section>
    );
}

export default Home;
