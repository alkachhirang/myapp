import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import camera from '../assets/images/png/cameraman.png';
import { Destination, Experience } from './IconImg';

function Experiencesection() {
    return (
        <div>
            <section className="bg_white">
                <Container className='pt-5 pb-5'>
                    <Row>
                        <Col xl={6} className='col-12 d-flex justify-content-center align-items-center position-relative'>
                            <div className="card2 d-flex flex-column align-items-center justify-content-center"
                                data-aos="fade-right">
                                <span>
                                    <Destination/>
                                </span>
                                <p className="fs_30 ff-poppins fw_600 text_orange">600%</p>
                                <p className="fs_19 fw_400 ff-Inter text_grey">Destinations</p>
                            </div>
                            <div className="card3 card3-sm d-flex justify-content-center" data-aos="fade-right">
                                <span className="me-3 pt-21"><Experience/>
                                </span>
                                <div>
                                    <p className="fs_28 fw_600 ff-poppins m-0 pb-2 pt-20">5000+</p>
                                    <p className="fw_400 ff-poppins fs_12 text_grey">Customars</p>
                                </div>
                            </div>
                            <div>
                                <img src={camera} alt="cameraman.webp" className="w-100" />
                            </div>
                        </Col>
                        <Col xl={6} className='col-12 d-flex justify-content-center align-items-center pt-4 pt-xl-0'>
                            <div>
                                <p className="fw_600 fs_20 ff-Inter text_orange pb-lg-3 pt-5 pt-sm-0 letter_spacing_5 text-xl-start text-center">Our
                                    Experience</p>
                                <h2 className="fw_600 fs_56 ff-Inter text-black pb-3 text-xl-start text-center">Our Stories Have
                                    Adventures</h2>
                                <p className=" fw_400 fs_16 ff-Inter text-black opacity-75 pb-5 m-0 text-xl-start text-center">We are experienced in
                                    bringing
                                    adventures to stay their journey, with all outdoor
                                    destinations in the world as our
                                    specialties. Start your adventure now! Nature has already called you!</p>
                                <div className="d-flex justify-content-center justify-content-xl-start" data-aos="fade-right">
                                    <div
                                        className="card_box_sm card_box d-flex flex-column align-items-center justify-content-center">
                                        <p className="fs_46 fw_600 ff-Inter text_orange">12K+</p>
                                        <p className="fw_400 ff-Inter fs_21 text_grey mw-86 m-0">Succes Journey</p>
                                    </div>
                                    <div
                                        className="card_box_sm card_box d-flex flex-column align-items-center justify-content-center ml-20 mr-20">
                                        <p className="fs_46 fw_600 ff-Inter text_orange">16+</p>
                                        <p className="fw_400 ff-Inter fs_21 text_grey mw-86 m-0">Awards Winning</p>
                                    </div>
                                    <div
                                        className="card_box_sm card_box d-flex flex-column align-items-center justify-content-center">
                                        <p className="fs_46 fw_600 ff-Inter text_orange">20+</p>
                                        <p className="fw_400 ff-Inter fs_21 text_grey mw-86 m-0">Years Of Experience</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </div>
    )
}

export default Experiencesection
