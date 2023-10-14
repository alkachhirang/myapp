import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import beach from '../assets/images/png/beach-img.png';
import desert from '../assets/images/png/desert-img.png';
import mountain from '../assets/images/png/mountain-img.png';
import temple from '../assets/images/png/temple-img.png';
import tower from '../assets/images/png/tower-img.png';
import piyamid from '../assets/images/png/pyramid-img.png';
import { NextCircle, PrecCircle } from './IconImg';

function Catagerysection() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1202,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 998,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 773,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 437,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <section id="Tours" className="bg_white pb-5 pb-3 pt-5">
                <Container>
                    <Row className='justify-content-between'>
                        <Col md={6} className='col-12'>
                            <h2 className="fs_56 fw_600 ff-Inter pb-3 text-lg-start text-center">Categories</h2>
                            <p className="fs_16 fw_400 ff-Inter mw-lg-370 pb-lg-5 pb-3 pb-lg-3 text-lg-start text-center">Here are lots of interesting destinations
                                to
                                visit, but
                                don’t be
                                confused—they’re already grouped by
                                category.</p>
                        </Col>
                        <Col md={6} className='col-12 justify-content-md-end justify-content-center d-flex gap-3 pb-4 pb-md-0'>
                            <button className="prev circle_btn">
                                <PrecCircle />
                            </button>
                            <button className="next circle_btn">
                                <NextCircle />
                            </button>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Slider {...settings}>
                        <div>
                            <div className="d-flex align-items-center justify-content-center flex-column position-relative">
                                <div className="position-relative image_overlay">
                                    <img src={beach} alt="Beach.webp"
                                        className="border-radius86 slider-img" />
                                    <div
                                        className="overlay d-flex justify-content-center align-items-center position-absolute top-0 border-radius86">
                                        <p className="ff-Inter fs_20 fw_400 mb-0 text-white">Visite</p>
                                    </div>
                                </div>
                                <p className="fs_26 fw_500 ff-Inter text-center pt-3">Beach</p>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex align-items-center justify-content-center flex-column">
                                <div className="position-relative image_overlay">
                                    <img src={desert} alt="Desert1.webp" className="border-radius86" />
                                    <div
                                        className="overlay d-flex justify-content-center align-items-center position-absolute top-0 border-radius86">
                                        <p className="ff-Inter fs_20 fw_400 mb-0 text-white">Visite</p>
                                    </div>
                                </div>

                                <p className="fs_26 fw_500 ff-Inter text-center pt-3">Desert</p>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex align-items-center justify-content-center flex-column">
                                <div className="position-relative image_overlay">
                                    <img src={mountain} alt="mountain.webp" className="border-radius86" />
                                    <div
                                        className="overlay d-flex justify-content-center align-items-center position-absolute top-0 border-radius86">
                                        <p className="ff-Inter fs_20 fw_400 mb-0 text-white">Visite</p>
                                    </div>
                                </div>
                                <p className="fs_26 fw_500 ff-Inter text-center pt-3">Mountain</p>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex align-items-center justify-content-center flex-column">
                                <div className="position-relative image_overlay">
                                    <img src={temple} alt="temple.webp" className="border-radius86" />
                                    <div
                                        className="overlay d-flex justify-content-center align-items-center position-absolute top-0 border-radius86">
                                        <p className="ff-Inter fs_20 fw_400 mb-0 text-white">Visite</p>
                                    </div>
                                </div>
                                <p className="fs_26 fw_500 ff-Inter text-center pt-3">Temple</p>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex align-items-center justify-content-center flex-column">
                                <div className="position-relative image_overlay">
                                    <img src={tower} alt="tower.webp" className="border-radius86" />
                                    <div
                                        className="overlay d-flex justify-content-center align-items-center position-absolute top-0 border-radius86">
                                        <p className="ff-Inter fs_20 fw_400 mb-0 text-white">Visite</p>
                                    </div>
                                </div>
                                <p className="fs_26 fw_500 ff-Inter text-center pt-3">Tower</p>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex align-items-center justify-content-center flex-column">
                                <div className="position-relative image_overlay">
                                    <img src={piyamid} alt="Pyramid.webp" className="border-radius86" />
                                    <div
                                        className="overlay d-flex justify-content-center align-items-center position-absolute top-0 border-radius86">
                                        <p className="ff-Inter fs_20 fw_400 mb-0 text-white">Visite</p>
                                    </div>
                                </div>
                                <p className="fs_26 fw_500 ff-Inter text-center pt-3">Pyramid</p>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex align-items-center justify-content-center flex-column">
                                <div className="position-relative image_overlay">
                                    <img src={mountain} alt="mountain.webp" className="border-radius86" />
                                    <div
                                        className="overlay d-flex justify-content-center align-items-center position-absolute top-0 border-radius86">
                                        <p className="ff-Inter fs_20 fw_400 mb-0 text-white">Visite</p>
                                    </div>
                                </div>
                                <p className="fs_26 fw_500 ff-Inter text-center pt-3">Mountain</p>
                            </div>
                        </div>
                    </Slider>

                </Container>
            </section>
        </div >
    );
}

export default Catagerysection;